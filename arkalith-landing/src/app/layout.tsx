// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Tailwind + CSS vars

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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [{ url: "/favicon.ico", rel: "icon" }],
  },
  openGraph: {
    title: "Arkalith - Innovation Meets Excellence",
    description:
      "We craft extraordinary digital experiences that push boundaries, solve complex problems, and transform industries through cutting-edge technology.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arkalith - Innovation Meets Excellence",
    description:
      "We craft extraordinary digital experiences that push boundaries, solve complex problems, and transform industries through cutting-edge technology.",
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
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
