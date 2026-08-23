import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type CreateMetadataInput = {
  title: string;
  description: string;
  pathname: string;
  noIndex?: boolean;
  ogImage?: string;
  type?: "website" | "article";
};

export function absoluteUrl(pathname: string): string {
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${path === "/" ? "/" : path}`;
}

export function createMetadata({
  title,
  description,
  pathname,
  noIndex = false,
  ogImage = "/images/og/default.svg",
  type = "website",
}: CreateMetadataInput): Metadata {
  const url = absoluteUrl(pathname);
  const imageUrl = ogImage.startsWith("http") ? ogImage : absoluteUrl(ogImage);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.siteName,
      locale: "en_IN",
      type,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
