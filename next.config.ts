// next.config.ts
import type { NextConfig } from "next";
import { fileURLToPath } from "url";
import path from "path";

// 🚀 Modern ES-Module path resolution replacement for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig: NextConfig = {
  turbopack: {
    // Isolate Turbopack strictly to your project root safely on Vercel
    root: path.join(__dirname),
  },
};

export default nextConfig;