/**
 * Service Worker for CapMeToo PWA
 * Features:
 * - Caching strategies for optimal performance
 * - Offline functionality
 * - Background sync for API requests
 * - Push notification support
 * - Cache management and updates
 * - Complete icon set support
 */

const CACHE_NAME = "capmetoo-v1.1.0";
const STATIC_CACHE = "capmetoo-static-v1.1.0";
const DYNAMIC_CACHE = "capmetoo-dynamic-v1.1.0";

// Assets to cache immediately
const STATIC_ASSETS = [
  "/Cap-Me-Too/",
  "/Cap-Me-Too/manifest.json",
  "/Cap-Me-Too/icon.svg",
  "/Cap-Me-Too/favicon.ico",
  "/Cap-Me-Too/favicon-16x16.png",
  "/Cap-Me-Too/favicon-32x32.png",
  "/Cap-Me-Too/favicon-48x48.png",
  "/Cap-Me-Too/apple-touch-icon-152x152.png",
  "/Cap-Me-Too/apple-touch-icon.png",
  "/Cap-Me-Too/android-chrome-192x192.png",
  "/Cap-Me-Too/android-chrome-512x512.png",
  "/Cap-Me-Too/icon-72x72.png",
  "/Cap-Me-Too/icon-96x96.png",
  "/Cap-Me-Too/icon-128x128.png",
  "/Cap-Me-Too/icon-256x256.png",
  "/Cap-Me-Too/icon-384x384.png",
  "/Cap-Me-Too/icon-1024x1024.png",
  "/Cap-Me-Too/maskable-icon-192x192.png",
  "/Cap-Me-Too/maskable-icon-512x512.png",
  "/Cap-Me-Too/monochrome-icon-192x192.png",
  "/Cap-Me-Too/monochrome-icon-512x512.png",
];

// API endpoints to cache
const API_CACHE_PATTERNS = [/^https:\/\/generativelanguage\.googleapis\.com/];

// Install event - cache static assets
self.addEventListener("install", (event) => {
  console.log("Service Worker: Installing...");

  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => {
        console.log("Service Worker: Caching static assets");
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log("Service Worker: Static assets cached");
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error("Service Worker: Cache installation failed", error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activating...");

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log("Service Worker: Deleting old cache", cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log("Service Worker: Activated");
        return self.clients.claim();
      })
  );
});

// Fetch event - serve cached content and implement caching strategies
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle different types of requests
  if (request.method === "GET") {
    // Static assets - Cache First strategy
    if (STATIC_ASSETS.includes(url.pathname)) {
      event.respondWith(cacheFirst(request));
    }
    // API requests - Network First strategy
    else if (API_CACHE_PATTERNS.some((pattern) => pattern.test(request.url))) {
      event.respondWith(networkFirst(request));
    }
    // Other requests - Stale While Revalidate strategy
    else {
      event.respondWith(staleWhileRevalidate(request));
    }
  }
});

// Cache First strategy - for static assets
async function cacheFirst(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error("Cache First strategy failed:", error);
    return new Response("Offline content not available", { status: 503 });
  }
}

// Network First strategy - for API requests
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log("Network request failed, trying cache:", error);
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response("Network error and no cached content", { status: 503 });
  }
}

// Stale While Revalidate strategy - for other requests
async function staleWhileRevalidate(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  const cachedResponse = await cache.match(request);

  const fetchPromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    })
    .catch(() => cachedResponse);

  return cachedResponse || fetchPromise;
}

// Background sync for offline actions
self.addEventListener("sync", (event) => {
  console.log("Service Worker: Background sync triggered", event.tag);

  if (event.tag === "caption-generation") {
    event.waitUntil(syncCaptionGeneration());
  }
});

// Sync caption generation when back online
async function syncCaptionGeneration() {
  try {
    // Get pending requests from IndexedDB
    // Process them when network is available
    console.log("Service Worker: Syncing caption generation requests");
  } catch (error) {
    console.error("Background sync failed:", error);
  }
}

// Push notification handling
self.addEventListener("push", (event) => {
  console.log("Service Worker: Push notification received");

  const options = {
    body: event.data ? event.data.text() : "New caption ready!",
    icon: "/Cap-Me-Too/android-chrome-192x192.png",
    badge: "/Cap-Me-Too/android-chrome-192x192.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
    actions: [
      {
        action: "explore",
        title: "View Caption",
        icon: "/Cap-Me-Too/android-chrome-192x192.png",
      },
      {
        action: "close",
        title: "Close",
        icon: "/Cap-Me-Too/android-chrome-192x192.png",
      },
    ],
  };

  event.waitUntil(self.registration.showNotification("CapMeToo", options));
});

// Handle notification clicks
self.addEventListener("notificationclick", (event) => {
  console.log("Service Worker: Notification clicked", event.action);

  event.notification.close();

  if (event.action === "explore") {
    event.waitUntil(clients.openWindow("/Cap-Me-Too/"));
  }
});

// Handle notification close
self.addEventListener("notificationclose", (event) => {
  console.log("Service Worker: Notification closed");
});

// Message handling for communication with main thread
self.addEventListener("message", (event) => {
  console.log("Service Worker: Message received", event.data);

  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
