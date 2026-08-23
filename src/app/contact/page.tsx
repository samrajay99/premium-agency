import { ContactForm } from "@/components/sections/ContactForm";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Contact", description: "Use the frontend-only contact demo for Hyderabad Elite Directory. No messages are sent or stored.", pathname: "/contact" });
export default function ContactPage() { return <SiteShell><Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} /><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow">A simple channel</p><h1 className="display-title">Start a conversation</h1><p className="lede">This form is a local interaction demo. It does not connect to a backend.</p><div className="mt-8 space-y-3 text-sm text-muted"><p>{siteConfig.city}, {siteConfig.region}</p><p>{siteConfig.email}</p><p>{siteConfig.phone}</p></div></div><ContactForm /></div></SiteShell>; }