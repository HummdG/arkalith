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
    url: "https://arkalith.com",
    siteName: "Arkalith",
    images: [
      {
        url: "/og-image.png", // This is the image that will appear in shares
        width: 1200,
        height: 630,
        alt: "Arkalith - Intelligence Meets Innovation",
      },
      {
        url: "/og-image-square.png", // Square version for some platforms
        width: 1200,
        height: 1200,
        alt: "Arkalith - Intelligence Meets Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arkalith - Innovation Meets Excellence",
    description:
      "We craft extraordinary digital experiences that push boundaries, solve complex problems, and transform industries through cutting-edge technology.",
    images: ["/og-image.png"],
    creator: "@arkalith", // Add your Twitter handle if you have one
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://arkalith.com"), // Important: Set your actual domain
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

        {/* Additional Open Graph tags for better sharing */}
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter specific tags */}
        <meta
          name="twitter:image:alt"
          content="Arkalith - Intelligence Meets Innovation"
        />
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
