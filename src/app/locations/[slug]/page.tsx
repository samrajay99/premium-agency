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
import { JsonLd, breadcrumbJsonLd, faqJsonLd, localBusinessJsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return getLocations().map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const location = getLocationBySlug((await params).slug);
  return location
    ? createMetadata({
        title: `${location.title} | 24/7 Verified Escorts`,
        description: location.description,
        pathname: `/locations/${location.slug}`,
        keywords: [
          `${location.name} escorts`,
          `${location.name} escort service`,
          `${location.name} call girls`,
          `5 star hotel outcalls in ${location.name}`,
          `verified escorts in ${location.name} hyderabad`,
        ],
      })
    : {};
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const location = getLocationBySlug((await params).slug);
  if (!location) notFound();

  const profiles = getProfiles().filter((profile) =>
    location.featuredProfileSlugs.includes(profile.slug)
  );
  const categoryNames = getCategories().filter((category) =>
    location.relatedCategorySlugs.includes(category.slug)
  );

  const crumbs = [
    { name: "Locations", href: "/locations" },
    { name: location.name, href: `/locations/${location.slug}` },
  ];

  return (
    <SiteShell>
      <Breadcrumbs items={crumbs} />

      <p className="eyebrow">Hyderabad Neighbourhood Guide</p>
      <h1 className="display-title">{location.title}</h1>
      <p className="lede max-w-3xl">{location.intro}</p>

      <div className="mt-8 flex flex-wrap gap-2">
        {location.areas.map((area) => (
          <span className="tag" key={area}>
            {area}
          </span>
        ))}
      </div>

      <section className="py-16">
        <p className="eyebrow">Curated Profiles</p>
        <h2 className="section-title mb-8">Verified Companions in {location.name}</h2>
        <ProfileGrid profiles={profiles} />
      </section>

      <section className="section-rule grid gap-8 py-16 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="eyebrow">Local FAQ Guide</p>
          <h2 className="section-title">Frequently Asked Questions for {location.name}</h2>
        </div>
        <Accordion
          items={location.faqs.map((item, index) => ({
            ...item,
            id: `location-${index}`,
          }))}
        />
      </section>

      <RelatedContent
        title="Continue exploring other locations"
        links={[
          ...location.relatedLocationSlugs.map((slug) => ({
            href: `/locations/${slug}`,
            label: `Explore ${slug.replaceAll("-", " ")}`,
          })),
          ...categoryNames.map((category) => ({
            href: `/categories/${category.slug}`,
            label: category.name,
          })),
        ]}
      />

      <JsonLd
        data={[
          localBusinessJsonLd(`${location.name}, Hyderabad`),
          breadcrumbJsonLd(crumbs),
          faqJsonLd(location.faqs),
        ]}
      />
    </SiteShell>
  );
}