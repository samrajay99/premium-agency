import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import { JsonLd, organizationJsonLd, websiteJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import { defaultKeywords } from "@/lib/seo";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const baseSiteUrl =
  siteConfig.siteUrl && siteConfig.siteUrl.startsWith("http")
    ? siteConfig.siteUrl
    : "https://www.besthyderabadescortservice.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseSiteUrl),
  title: {
    default: `${siteConfig.siteName} | #1 VIP Escorts & Call Girls Service in Hyderabad`,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: siteConfig.description,
  keywords: defaultKeywords,
  alternates: { canonical: "/" },
  authors: [{ name: siteConfig.siteName, url: siteConfig.siteUrl }],
  creator: siteConfig.siteName,
  publisher: siteConfig.siteName,
  openGraph: {
    type: "website",
    siteName: siteConfig.siteName,
    locale: "en_IN",
    title: `${siteConfig.siteName} | Hyderabad VIP Escorts`,
    description: siteConfig.description,
    images: [{ url: "/images/og/default.svg", width: 1200, height: 630, alt: siteConfig.siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteName,
    description: siteConfig.description,
    images: ["/images/og/default.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.jpeg" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable} dark`}>
      <body className="bg-[#09090b] text-[#fdfdfd] antialiased min-h-screen">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        {children}
      </body>
    </html>
  );
}
