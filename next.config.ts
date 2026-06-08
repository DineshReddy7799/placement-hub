import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Core Config Options */
  experimental: {
    // Forces Turbopack to explicitly stay inside your project folder
    turbopack: {
      root: __dirname,
    }
  }
};

export default nextConfig;