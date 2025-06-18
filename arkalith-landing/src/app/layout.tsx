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
  title: "Arkalith - Innovation Meets Excellence",
  description:
    "We craft extraordinary digital experiences that push boundaries, solve complex problems, and transform industries through cutting-edge technology.",
  keywords:
    "technology, innovation, digital transformation, AI, machine learning, cybersecurity, product development",
  authors: [{ name: "Arkalith Team" }],
  creator: "Arkalith",
  publisher: "Arkalith",

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

  // Add manifest
  manifest: "/manifest.json",

  openGraph: {
    title: "Arkalith - Innovation Meets Excellence",
    description:
      "We craft extraordinary digital experiences that push boundaries, solve complex problems, and transform industries through cutting-edge technology.",
    type: "website",
    locale: "en_US",
    url: "https://arkalith.com",
    siteName: "Arkalith",
    // Add this for better social sharing
    images: [
      {
        url: "/og-image.png", // You'll need to create this 1200x630px image
        width: 1200,
        height: 630,
        alt: "Arkalith - Innovation Meets Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arkalith - Innovation Meets Excellence",
    description:
      "We craft extraordinary digital experiences that push boundaries, solve complex problems, and transform industries through cutting-edge technology.",
    images: ["/og-image.png"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Explicit favicon links for better compatibility */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Additional meta tags for better indexing */}
        <meta name="theme-color" content="#0f0f23" />
        <meta name="msapplication-TileColor" content="#0f0f23" />
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
