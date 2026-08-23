import { Accordion } from "@/components/ui/Accordion";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SiteShell } from "@/components/layout/SiteShell";
import { faqs } from "@/data/faqs";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Frequently Asked Questions", description: "Answers about fictional profiles, privacy, safety, contact, and how this frontend-only directory demo works.", pathname: "/faq" });
export default function FaqPage() { const groups = Array.from(new Set(faqs.map((faq) => faq.group))); return <SiteShell><Breadcrumbs items={[{ name: "FAQ", href: "/faq" }]} /><p className="eyebrow">Clear answers</p><h1 className="display-title">Frequently asked questions</h1><p className="lede max-w-2xl">The important context, without hiding the fact that this is a frontend-only demo.</p><div className="mt-12 grid gap-10 lg:grid-cols-2">{groups.map((group) => <section key={group}><h2 className="mb-4 font-serif text-3xl">{group}</h2><Accordion items={faqs.filter((faq) => faq.group === group)} /></section>)}</div></SiteShell>; }