import type { NextConfig } from "next";

const isExport = Boolean(process.env.GITHUB_ACTIONS);

const nextConfig: NextConfig = {
  devIndicators: false,
  compress: !isExport,
  poweredByHeader: false,
  output: isExport ? "export" : undefined,
  basePath: isExport ? "/premium-agency" : "",
  assetPrefix: isExport ? "/premium-agency/" : undefined,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  ...(isExport
    ? {}
    : {
        async headers() {
          return [
            {
              source: "/:all*(svg|jpg|png|webp|avif|woff2|woff|ttf|ico)",
              headers: [
                {
                  key: "Cache-Control",
                  value: "public, max-age=31536000, immutable",
                },
              ],
            },
            {
              source: "/_next/static/:path*",
              headers: [
                {
                  key: "Cache-Control",
                  value: "public, max-age=31536000, immutable",
                },
              ],
            },
            {
              source: "/:path*",
              headers: [
                {
                  key: "X-Content-Type-Options",
                  value: "nosniff",
                },
                {
                  key: "X-Frame-Options",
                  value: "SAMEORIGIN",
                },
                {
                  key: "Referrer-Policy",
                  value: "strict-origin-when-cross-origin",
                },
              ],
            },
          ];
        },
      }),
};

export default nextConfig;
