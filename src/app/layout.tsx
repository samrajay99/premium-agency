import type { Metadata } from "next";
import { JsonLd, organizationJsonLd, websiteJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.siteName} | ${siteConfig.city}`,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.siteName,
    locale: "en_IN",
    title: siteConfig.siteName,
    description: siteConfig.description,
    images: [{ url: "/images/og/default.svg", width: 1200, height: 630, alt: siteConfig.siteName }],
  },
  twitter: { card: "summary_large_image", title: siteConfig.siteName, description: siteConfig.description, images: ["/images/og/default.svg"] },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        {children}
      </body>
    </html>
  );
}
