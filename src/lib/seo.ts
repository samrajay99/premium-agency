import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const defaultKeywords = [
  "Hyderabad escort service",
  "Escorts in Hyderabad",
  "Hyderabad call girls",
  "Call girls in Hyderabad",
  "VIP escorts Hyderabad",
  "Russian escorts Hyderabad",
  "Banjara Hills escorts",
  "Jubilee Hills escorts",
  "HITEC City escorts",
  "Gachibowli escort service",
  "Madhapur call girls",
  "Kukatpally escorts",
  "5 star hotel outcall escorts Hyderabad",
  "Independent escorts Hyderabad",
  "High profile escorts Hyderabad",
  "College girl escorts Hyderabad",
  "Genuine Hyderabad escorts number",
  "Cash on delivery escort service Hyderabad",
  "24/7 Hyderabad VIP companionship",
];

type CreateMetadataInput = {
  title: string;
  description: string;
  pathname: string;
  noIndex?: boolean;
  ogImage?: string;
  type?: "website" | "article";
  keywords?: string[];
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
  keywords = [],
}: CreateMetadataInput): Metadata {
  const url = absoluteUrl(pathname);
  const imageUrl = ogImage.startsWith("http") ? ogImage : absoluteUrl(ogImage);
  const combinedKeywords = Array.from(new Set([...keywords, ...defaultKeywords]));

  return {
    title,
    description,
    keywords: combinedKeywords,
    authors: [{ name: siteConfig.siteName, url: siteConfig.siteUrl }],
    creator: siteConfig.siteName,
    publisher: siteConfig.siteName,
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.siteName,
      locale: "en_IN",
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - ${siteConfig.siteName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: "@bestescorts_hyd",
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    other: {
      "geo.region": "IN-TG",
      "geo.placename": "Hyderabad",
      "geo.position": "17.3850;78.4867",
      ICBM: "17.3850, 78.4867",
      rating: "RTA-5042-1996-1400-1577-RTA",
      "theme-color": "#09090b",
    },
  };
}
