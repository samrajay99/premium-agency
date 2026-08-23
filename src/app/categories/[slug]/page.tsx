import { notFound } from "next/navigation";
import { Accordion } from "@/components/ui/Accordion";
import { ProfileGrid } from "@/components/profiles/ProfileGrid";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedContent } from "@/components/seo/RelatedContent";
import { SiteShell } from "@/components/layout/SiteShell";
import { getCategories, getCategoryBySlug } from "@/lib/data/categories";
import { getProfiles } from "@/lib/data/profiles";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() { return getCategories().map((category) => ({ slug: category.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const category = getCategoryBySlug((await params).slug); return category ? createMetadata({ title: category.title, description: category.description, pathname: `/categories/${category.slug}` }) : {}; }
export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) { const category = getCategoryBySlug((await params).slug); if (!category) notFound(); const profiles = getProfiles().filter((profile) => profile.categorySlug === category.slug); return <SiteShell><Breadcrumbs items={[{ name: "Categories", href: "/categories" }, { name: category.name, href: `/categories/${category.slug}` }]} /><p className="eyebrow">Category guide</p><h1 className="display-title">{category.title}</h1><p className="lede max-w-3xl">{category.intro}</p><section className="py-16"><ProfileGrid profiles={profiles} /></section><section className="section-rule grid gap-8 py-16 lg:grid-cols-[1fr_1.4fr]"><div><p className="eyebrow">A clear label</p><h2 className="section-title">Common questions</h2></div><Accordion items={category.faqs.map((item, index) => ({ ...item, id: `category-${index}` }))} /></section><RelatedContent title="Related discovery" links={[...category.relatedCategorySlugs.map((slug) => ({ href: `/categories/${slug}`, label: slug.replaceAll("-", " ") })), ...category.relatedLocationSlugs.map((slug) => ({ href: `/locations/${slug}`, label: `Explore ${slug.replaceAll("-", " ")}` }))]} /></SiteShell>; }