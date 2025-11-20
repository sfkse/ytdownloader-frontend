/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  // Output configuration for production
  output: "standalone",
  // Environment variables
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL || process.env.API_URL,
  },
};

export default nextConfig;
