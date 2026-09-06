const getSiteUrl = (): string => {
  const envUrl = (process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL)?.trim();
  if (envUrl && envUrl.length > 0) {
    const formatted = envUrl.startsWith("http") ? envUrl : `https://${envUrl}`;
    if (
      process.env.NODE_ENV === "production" &&
      (formatted.includes("localhost") || formatted.includes(".vercel.app"))
    ) {
      return "https://www.besthyderabadescortservice.com";
    }
    return formatted;
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
    telegram: "https://t.me/besthyderabadescorts",
    x: "https://x.com/hyderabadescort",
    instagram: "https://instagram.com/besthyderabadescortservice",
    facebook: "https://facebook.com/besthyderabadescortservice",
    reddit: "https://reddit.com/r/HyderabadEscortsVIP",
    pinterest: "https://pinterest.com/besthyderabadescorts",
    youtube: "https://youtube.com/@besthyderabadescortservice",
  },
} as const;

export type SiteConfig = typeof siteConfig;
