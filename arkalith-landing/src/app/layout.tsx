// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // Updated title - will show as "Arkalith" in search results
  title: {
    default: "Arkalith",
    template: "%s | Arkalith",
  },

  // Alternative single title approach:
  // title: "Arkalith",

  description:
    "World-class experts in AI, technology, and innovation working together to build the future.",
  keywords:
    "Arkalith, AI, artificial intelligence, technology, innovation, digital transformation, machine learning, Imperial College",
  authors: [{ name: "Arkalith Team" }],
  creator: "Arkalith",
  publisher: "Arkalith",

  // Add structured data for better search results
  applicationName: "Arkalith",

  // Updated favicon configuration
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  manifest: "/manifest.json",

  openGraph: {
    title: "Arkalith", // This is key for social sharing
    description:
      "World-class experts in AI, technology, and innovation working together to build the future.",
    type: "website",
    locale: "en_US",
    url: "https://arkalith.com",
    siteName: "Arkalith",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arkalith - AI & Technology Innovation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Arkalith", // Also important for Twitter
    description:
      "World-class experts in AI, technology, and innovation working together to build the future.",
    images: ["/og-image.png"],
    creator: "@arkalith", // Add your Twitter handle if you have one
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

  // Add verification meta tags if you have them
  verification: {
    google: "your-google-verification-code", // Replace with actual code from Search Console
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Explicit meta tags for better control */}
        <meta name="application-name" content="Arkalith" />
        <meta name="apple-mobile-web-app-title" content="Arkalith" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#0f0f23" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#0f0f23" />

        {/* Explicit favicon links */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        suppressHydrationWarning
        className={`
          ${geistSans.variable} ${geistMono.variable}
          antialiased
          bg-[var(--background)] text-[var(--foreground)]
          transition-colors duration-300
        `}
      >
        {children}
      </body>
    </html>
  );
}
