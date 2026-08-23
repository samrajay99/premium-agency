import { siteConfig } from "@/config/site";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/profiles", label: "Profiles" },
  { href: "/locations", label: "Locations" },
  { href: "/categories", label: "Categories" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerGroups = {
  Explore: [
    { href: "/profiles", label: "Profiles" },
    { href: "/locations", label: "Locations" },
    { href: "/categories", label: "Categories" },
    { href: "/reviews", label: "Reviews" },
  ],
  Locations: [
    { href: "/locations/gachibowli", label: "Gachibowli" },
    { href: "/locations/hitech-city", label: "HITEC City" },
    { href: "/locations/jubilee-hills", label: "Jubilee Hills" },
    { href: "/locations/secunderabad", label: "Secunderabad" },
  ],
  Categories: [
    { href: "/categories/premium-companionship", label: "Premium" },
    { href: "/categories/models", label: "Models" },
    { href: "/categories/event-companionship", label: "Events" },
    { href: "/categories/travel-companionship", label: "Travel" },
  ],
  Resources: [
    { href: "/blog", label: "Journal" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog/privacy-tips-when-using-online-directories", label: "Privacy tips" },
    { href: "/blog/hyderabad-local-area-guide", label: "Area guide" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: `mailto:${siteConfig.email}`, label: "Email" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms" },
    { href: "/disclaimer", label: "Disclaimer" },
  ],
} as const;
