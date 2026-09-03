const getSiteUrl = (): string => {
  const envUrl = (process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL)?.trim();
  if (envUrl && envUrl.length > 0) {
    return envUrl.startsWith("http") ? envUrl : `https://${envUrl}`;
  }
  const vercelProdUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProdUrl && vercelProdUrl.length > 0) {
    return `https://${vercelProdUrl}`;
  }
  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl && vercelUrl.length > 0) {
    return `https://${vercelUrl}`;
  }
  return "https://www.besthyderabadescortservice.com";
};

export const siteConfig = {
  siteName: "Best Escorts in Hyderabad",
  shortName: "Best Escorts",
  siteUrl: getSiteUrl(),
  description:
    "Best and Premium Escort/Call Girls Service in Hyderabad | Verified VIP & High Profile Companions across Hyderabad.",
  phone: "9204830058",
  phoneDisplay: "+91 9204830058",
  phoneHref: "tel:+919204830058",
  whatsapp: "6264420408",
  whatsappDisplay: "+91 6264420408",
  whatsappHref: "https://wa.me/916264420408?text=Hello,%20I%20would%20like%20to%20book%20a%20profile",
  email: "hello.escorts.service@gmail.com",
  city: "Hyderabad",
  region: "Telangana",
  country: "India",
  tagline: "Discreet & Verified Escort Service in Hyderabad",
  socialLinks: {
    instagram: "https://instagram.com",
    x: "https://x.com",
    facebook: "https://facebook.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
