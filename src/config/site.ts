export const siteConfig = {
  siteName: "Best Escorts in Hyderabad",
  shortName: "Best Escorts",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Best and Premium Escort/Call Girls Service in Hyderabad | Verified VIP & High Profile Companions across Hyderabad.",
  phone: "9204876499",
  phoneDisplay: "+91 9204876499",
  phoneHref: "tel:+9204876499",
  whatsappHref: "https://wa.me/9204876499?text=Hello,%20I%20would%20like%20to%20book%20a%20profile",
  email: "gsamraj178@gmail.com",
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
