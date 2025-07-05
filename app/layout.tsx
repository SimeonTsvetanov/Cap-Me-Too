import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers/app-providers";
import { AnimatedBackground } from "@/components/ui/animated-background";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#6366f1",
  userScalable: false,
};

export const metadata: Metadata = {
  title: "CapMeToo - AI Caption Generator",
  description:
    "Generate amazing social media captions from your photos using AI. Transform your images into engaging content with the power of artificial intelligence.",
  manifest: "manifest.json",
  metadataBase: new URL("https://simeontsvetanov.github.io/Cap-Me-Too/"),
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "CapMeToo",
    startupImage: [
      {
        url: "/apple-touch-icon.png",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/apple-touch-icon.png",
        media:
          "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/apple-touch-icon.png",
        media:
          "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)",
      },
    ],
  },
  icons: {
    icon: [
      { url: "favicon.ico", sizes: "any" },
      { url: "icon.svg", sizes: "any", type: "image/svg+xml" },
      {
        url: "favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "apple-touch-icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "icon.svg",
        color: "#6366f1",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://simeontsvetanov.github.io/Cap-Me-Too/",
    title: "CapMeToo - AI Caption Generator",
    description:
      "Generate amazing social media captions from your photos using AI. Transform your images into engaging content with the power of artificial intelligence.",
    siteName: "CapMeToo",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "CapMeToo Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CapMeToo - AI Caption Generator",
    description:
      "Generate amazing social media captions from your photos using AI. Transform your images into engaging content with the power of artificial intelligence.",
    images: ["/android-chrome-512x512.png"],
  },
  generator: "Next.js",
  keywords: [
    "AI",
    "caption generator",
    "social media",
    "photo",
    "artificial intelligence",
    "PWA",
  ],
  authors: [{ name: "CapMeToo Team" }],
  creator: "CapMeToo",
  publisher: "CapMeToo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Complete Favicon Set */}
        <link rel="icon" href="favicon.ico" sizes="any" />
        <link rel="icon" href="icon.svg" type="image/svg+xml" />
        <link
          rel="icon"
          href="favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="favicon-48x48.png"
          sizes="48x48"
          type="image/png"
        />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />

        {/* Android/Chrome Icons */}
        <link rel="icon" sizes="192x192" href="android-chrome-192x192.png" />
        <link rel="icon" sizes="512x512" href="android-chrome-512x512.png" />

        {/* Mask Icon */}
        <link rel="mask-icon" href="icon.svg" color="#6366f1" />

        {/* PWA Manifest */}
        <link rel="manifest" href="manifest.json" />

        {/* Theme Color */}
        <meta name="theme-color" content="#6366f1" />

        {/* Microsoft Tiles */}
        <meta
          name="msapplication-TileImage"
          content="android-chrome-512x512.png"
        />
        <meta name="msapplication-TileColor" content="#6366f1" />

        {/* Other Meta Tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CapMeToo" />
        <meta name="application-name" content="CapMeToo" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="msapplication-config" content="browserconfig.xml" />

        {/* Security Headers for Static Export (replaces middleware) */}
        {/* <meta httpEquiv="X-Frame-Options" content="DENY" /> Removed: not effective on static hosting */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta
          httpEquiv="Referrer-Policy"
          content="strict-origin-when-cross-origin"
        />
        <meta
          httpEquiv="Permissions-Policy"
          content="camera=(), microphone=(), geolocation=()"
        />

        {/* Content Security Policy for Static Export */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob:; connect-src 'self' https://generativelanguage.googleapis.com;"
        />

        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('sw.js').then(registration => {
                    registration.onupdatefound = () => {
                      const installingWorker = registration.installing;
                      installingWorker.onstatechange = () => {
                        if (installingWorker.state === 'installed') {
                          if (navigator.serviceWorker.controller) {
                            window.location.reload();
                          }
                        }
                      };
                    };
                    console.log('SW registered: ', registration);
                  }).catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                  });
                });
              }
            `,
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased`}
      >
        {/*
          AnimatedBackground is rendered globally here to provide a consistent animated blurred background
          on all pages, including light and dark mode. This ensures the effect is visible everywhere,
          and prevents code duplication in individual screens. If you want to disable the background
          for a specific page, use CSS to override or hide it.
        */}
        <AnimatedBackground />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
