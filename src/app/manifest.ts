import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.siteName,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    lang: "en-IN",
    categories: ["lifestyle", "entertainment"],
    icons: [
      {
        src: "/favicon.png",
        sizes: "192x192 512x512",
        type: "image/png",
      },
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/favicon.jpeg",
        sizes: "192x192 512x512",
        type: "image/jpeg",
      },
    ],
  };
}
