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
};

export const metadata: Metadata = {
  title: "CapMeToo - AI Caption Generator",
  description:
    "Generate amazing social media captions from your photos using AI",
  manifest: "/Cap-Me-Too/manifest.json",
  metadataBase: new URL("https://simeontsvetanov.github.io/Cap-Me-Too/"),
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "CapMeToo",
  },
  icons: {
    icon: [
      { url: "/Cap-Me-Too/favicon.ico", sizes: "any" },
      { url: "/Cap-Me-Too/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
    apple: [
      {
        url: "/Cap-Me-Too/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
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
      "Generate amazing social media captions from your photos using AI",
    siteName: "CapMeToo",
    images: [
      {
        url: "/Cap-Me-Too/icon.svg",
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
      "Generate amazing social media captions from your photos using AI",
    images: ["/Cap-Me-Too/icon.svg"],
  },
  generator: "v0.dev",
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

        {/* Favicons */}
        <link rel="icon" href="/Cap-Me-Too/favicon.ico" sizes="any" />
        <link rel="icon" href="/Cap-Me-Too/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/Cap-Me-Too/apple-touch-icon.png" />

        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

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
