import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    appDir: true, // Ensure App Router is enabled
  },
  trailingSlash: false,
  output: 'standalone', // Try this if the issue persists
};

export default nextConfig;