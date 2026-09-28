import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const defaultKeywords = [
  // Primary Core Queries & High Intent Target Keywords
  "Hyderabad Escorts Service & Call girls",
  "High Class Escorts",
  "High class escorts in Hyderabad",
  "High class escort service Hyderabad",
  "Best Hyderabad escort service",
  "Best hyderabad escorts service",
  "Hyderabad escort service",
  "Hyderabad escorts service",
  "Escort service in Hyderabad",
  "Escorts service in Hyderabad",
  "Escorts in Hyderabad",
  "Hyderabad escorts",
  "Escorts Hyderabad",
  "Hyderabad call girls",
  "Call girls in Hyderabad",
  "Call girl Hyderabad",
  "Hyderabad call girl service",
  "Best escorts in Hyderabad",
  "VIP escorts Hyderabad",
  "VIP escorts in Hyderabad",
  "High profile escorts Hyderabad",
  "Independent escorts Hyderabad",
  "Independent call girls in Hyderabad",
  "Genuine escorts in Hyderabad",
  "Real call girls in Hyderabad",
  "Hyderabad escort agency",
  "Top rated escorts in Hyderabad",
  
  // Common Spelling & Phonetic Variations (Hydrabad)
  "Escorts service in hydrabad",
  "Hydrabad escorts service",
  "Hydrabad escort service",
  "Escort service in hydrabad",
  "Best hydrabad escort service",
  "Best escorts in hydrabad",
  "Hydrabad escorts",
  "Escorts in hydrabad",
  "Hydrabad call girls",
  "Call girls in hydrabad",
  "Hydrabad call girl service",
  "VIP escorts in hydrabad",
  
  // Category & Model Type Queries
  "Russian escorts in Hyderabad",
  "Russian call girls Hyderabad",
  "College girl escorts Hyderabad",
  "Housewife call girls in Hyderabad",
  "Celebrity escorts Hyderabad",
  "Air hostess escorts Hyderabad",
  "Model call girls Hyderabad",
  "Foreigner escorts in Hyderabad",
  "South Indian escorts Hyderabad",
  "North Indian call girls Hyderabad",
  "Punjabi escorts Hyderabad",
  "Elite models Hyderabad escorts",
  
  // High-Intent Hyderabad Neighborhood & Hub Queries
  "Banjara Hills escorts",
  "Banjara Hills call girls",
  "Escort service in Banjara Hills",
  "Jubilee Hills escorts",
  "Jubilee Hills call girls",
  "Escort service in Jubilee Hills",
  "HITEC City escorts",
  "HITEC City call girls",
  "Escort service in HITEC City",
  "Gachibowli escorts",
  "Gachibowli call girls",
  "Gachibowli escort service",
  "Madhapur escorts",
  "Madhapur call girls",
  "Kondapur escorts",
  "Kondapur call girls",
  "Kukatpally escorts",
  "Kukatpally call girls",
  "Begumpet escorts",
  "Begumpet call girls",
  "Somajiguda escorts",
  "Secunderabad escorts",
  "Secunderabad call girls",
  "Shamshabad airport escorts",
  "Manikonda call girls",
  "Ameerpet escorts",
  "Financial District Gachibowli escorts",
  
  // Feature & Intent Specific Queries
  "5 star hotel outcall escorts Hyderabad",
  "Hotel outcall call girls Hyderabad",
  "Cash on delivery escort service Hyderabad",
  "COD call girls in Hyderabad",
  "Hyderabad escorts WhatsApp number",
  "Hyderabad call girl contact number",
  "24/7 escorts service in Hyderabad",
  "Night out escort service Hyderabad",
  "Incall escorts Hyderabad",
  "Discreet VIP companion Hyderabad",
  "Verified escort service in Hyderabad",
  "Hyderabad escort rates price list",
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
    applicationName: siteConfig.siteName,
    appleWebApp: {
      title: siteConfig.siteName,
      capable: true,
      statusBarStyle: "black-translucent",
    },
    keywords: combinedKeywords,
    authors: [{ name: siteConfig.siteName, url: siteConfig.siteUrl }],
    creator: siteConfig.siteName,
    publisher: siteConfig.siteName,
    category: "Adult Entertainment & VIP Companionship Directory",
    classification: "Escort Service, Call Girls Directory, VIP Companionship in Hyderabad",
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
      site: "@bestescorts_hyd",
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
      "target": "all",
      "audience": "all",
      "coverage": "Hyderabad, Telangana, India",
      "distribution": "Global",
      "rating-system": "RTA",
    },
  };
}
