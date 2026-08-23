import { notFound } from "next/navigation";
import { Accordion } from "@/components/ui/Accordion";
import { ProfileGrid } from "@/components/profiles/ProfileGrid";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedContent } from "@/components/seo/RelatedContent";
import { SiteShell } from "@/components/layout/SiteShell";
import { getLocations, getLocationBySlug } from "@/lib/data/locations";
import { getProfiles } from "@/lib/data/profiles";
import { getCategories } from "@/lib/data/categories";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() { return getLocations().map((location) => ({ slug: location.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const location = getLocationBySlug((await params).slug); return location ? createMetadata({ title: location.title, description: location.description, pathname: `/locations/${location.slug}` }) : {}; }

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const location = getLocationBySlug((await params).slug); if (!location) notFound();
  const profiles = getProfiles().filter((profile) => location.featuredProfileSlugs.includes(profile.slug));
  const categoryNames = getCategories().filter((category) => location.relatedCategorySlugs.includes(category.slug));
  return <SiteShell><Breadcrumbs items={[{ name: "Locations", href: "/locations" }, { name: location.name, href: `/locations/${location.slug}` }]} /><p className="eyebrow">Neighbourhood guide</p><h1 className="display-title">{location.title}</h1><p className="lede max-w-3xl">{location.intro}</p><div className="mt-8 flex flex-wrap gap-2">{location.areas.map((area) => <span className="tag" key={area}>{area}</span>)}</div><section className="py-16"><p className="eyebrow">A short list</p><h2 className="section-title mb-8">Profiles in {location.name}</h2><ProfileGrid profiles={profiles} /></section><section className="section-rule grid gap-8 py-16 lg:grid-cols-[1fr_1.4fr]"><div><p className="eyebrow">Questions</p><h2 className="section-title">About this area</h2></div><Accordion items={location.faqs.map((item, index) => ({ ...item, id: `location-${index}` }))} /></section><RelatedContent title="Continue exploring" links={[...location.relatedLocationSlugs.map((slug) => ({ href: `/locations/${slug}`, label: `Explore ${slug.replaceAll("-", " ")}` })), ...categoryNames.map((category) => ({ href: `/categories/${category.slug}`, label: category.name }))]} /></SiteShell>;
}