export const siteConfig = {
  siteName: "Hyderabad Elite Directory",
  shortName: "HED",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "A curated, privacy-first directory for discovering professional companionship profiles and local guides across Hyderabad.",
  phone: "+91 94307 79945",
  phoneHref: "tel:+919430779945",
  whatsappHref: "https://wa.me/919430779945",
  email: "hello@hyderabadelitedirectory.example",
  city: "Hyderabad",
  region: "Telangana",
  country: "India",
  tagline: "Discreet discovery for Hyderabad",
  socialLinks: {
    instagram: "https://instagram.com",
    x: "https://x.com",
    facebook: "https://facebook.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
