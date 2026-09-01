import { siteConfig } from "@/config/site";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/profiles", label: "Profiles" },
  { href: "/gallery", label: "Gallery" },
  { href: "/price-list", label: "Price List" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerGroups = {
  Explore: [
    { href: "/profiles", label: "All Profiles" },
    { href: "/gallery", label: "VIP Gallery" },
    { href: "/price-list", label: "Price List" },
    { href: "/reviews", label: "Verified Reviews" },
    { href: "/locations", label: "All Locations" },
    { href: "/categories", label: "All Categories" },
  ],
  Locations: [
    { href: "/locations/banjara-hills", label: "Banjara Hills" },
    { href: "/locations/jubilee-hills", label: "Jubilee Hills" },
    { href: "/locations/hitech-city", label: "HITEC City" },
    { href: "/locations/gachibowli", label: "Gachibowli" },
    { href: "/locations/madhapur", label: "Madhapur" },
    { href: "/locations/kukatpally", label: "Kukatpally" },
  ],
  Categories: [
    { href: "/categories/vip-profile", label: "VIP Models" },
    { href: "/categories/celebrity-companion", label: "Celebrity Escorts" },
    { href: "/categories/russian-escorts", label: "Russian Companions" },
    { href: "/categories/college-girl", label: "College Escorts" },
    { href: "/categories/south-indian", label: "South Indian" },
    { href: "/categories/high-class", label: "High Profile" },
  ],
  Resources: [
    { href: "/faq", label: "FAQ & Guide" },
    { href: "/blog", label: "VIP Journal" },
    { href: "/blog/best-areas-to-explore-in-hyderabad", label: "Top Areas Guide" },
    { href: "/blog/hyderabad-local-area-guide", label: "Outcall Guide" },
  ],
  Company: [
    { href: "/about", label: "About Our Service" },
    { href: "/contact", label: "24/7 Concierge Desk" },
    { href: `mailto:${siteConfig.email}`, label: "Email Support" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/disclaimer", label: "Adult Disclaimer" },
  ],
} as const;
