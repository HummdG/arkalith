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
