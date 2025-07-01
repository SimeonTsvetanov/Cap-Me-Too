import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers/app-providers";

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
  manifest: "/Cap-Me-Too/manifest.json",
  metadataBase: new URL("https://simeontsvetanov.github.io/Cap-Me-Too/"),
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "CapMeToo",
    startupImage: [
      {
        url: "/Cap-Me-Too/apple-touch-icon.png",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/Cap-Me-Too/apple-touch-icon.png",
        media:
          "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/Cap-Me-Too/apple-touch-icon.png",
        media:
          "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/Cap-Me-Too/favicon.ico", sizes: "any" },
      { url: "/Cap-Me-Too/icon.svg", sizes: "any", type: "image/svg+xml" },
      {
        url: "/Cap-Me-Too/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/Cap-Me-Too/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/Cap-Me-Too/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/Cap-Me-Too/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/Cap-Me-Too/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/Cap-Me-Too/apple-touch-icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "/Cap-Me-Too/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/Cap-Me-Too/icon.svg",
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
        url: "/Cap-Me-Too/android-chrome-512x512.png",
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
    images: ["/Cap-Me-Too/android-chrome-512x512.png"],
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
        <link rel="icon" href="/Cap-Me-Too/favicon.ico" sizes="any" />
        <link rel="icon" href="/Cap-Me-Too/icon.svg" type="image/svg+xml" />
        <link
          rel="icon"
          href="/Cap-Me-Too/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/Cap-Me-Too/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/Cap-Me-Too/favicon-48x48.png"
          sizes="48x48"
          type="image/png"
        />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/Cap-Me-Too/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          href="/Cap-Me-Too/apple-touch-icon-152x152.png"
          sizes="152x152"
        />

        {/* Android Chrome Icons */}
        <link
          rel="icon"
          href="/Cap-Me-Too/android-chrome-192x192.png"
          sizes="192x192"
          type="image/png"
        />
        <link
          rel="icon"
          href="/Cap-Me-Too/android-chrome-512x512.png"
          sizes="512x512"
          type="image/png"
        />

        {/* PWA Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CapMeToo" />
        <meta name="application-name" content="CapMeToo" />
        <meta name="msapplication-TileColor" content="#6366f1" />
        <meta
          name="msapplication-TileImage"
          content="/Cap-Me-Too/android-chrome-192x192.png"
        />
        <meta name="theme-color" content="#6366f1" />

        {/* Security Headers for Static Export (replaces middleware) */}
        <meta httpEquiv="X-Frame-Options" content="DENY" />
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
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/Cap-Me-Too/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
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
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
