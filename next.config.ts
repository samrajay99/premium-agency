import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/premium-agency" : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/premium-agency/" : undefined,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
};

export default nextConfig;
