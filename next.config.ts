import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // This repository sits beneath another Yarn project. Keep Turbopack's
    // module resolution and file boundary anchored to this Next.js app.
    root: process.cwd(),
  },
};
export default nextConfig;
