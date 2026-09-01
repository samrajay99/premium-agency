import { notFound } from "next/navigation";
import { Accordion } from "@/components/ui/Accordion";
import { ProfileGrid } from "@/components/profiles/ProfileGrid";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedContent } from "@/components/seo/RelatedContent";
import { SiteShell } from "@/components/layout/SiteShell";
import { getCategories, getCategoryBySlug } from "@/lib/data/categories";
import { getProfiles } from "@/lib/data/profiles";
import { createMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return getCategories().map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const category = getCategoryBySlug((await params).slug);
  return category
    ? createMetadata({
        title: `${category.title} | 100% Verified Escorts in Hyderabad`,
        description: category.description,
        pathname: `/categories/${category.slug}`,
        keywords: [
          `${category.name} in hyderabad`,
          `${category.name} escort service hyderabad`,
          `hire ${category.name} hyderabad`,
          `verified ${category.name} companions`,
        ],
      })
    : {};
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const category = getCategoryBySlug((await params).slug);
  if (!category) notFound();

  const profiles = getProfiles().filter((profile) => profile.categorySlug === category.slug);

  const crumbs = [
    { name: "Categories", href: "/categories" },
    { name: category.name, href: `/categories/${category.slug}` },
  ];

  return (
    <SiteShell>
      <Breadcrumbs items={crumbs} />

      <p className="eyebrow">Hyderabad Escort Category Guide</p>
      <h1 className="display-title">{category.title}</h1>
      <p className="lede max-w-3xl">{category.intro}</p>

      <section className="py-16">
        <p className="eyebrow">Available Profiles</p>
        <h2 className="section-title mb-8">Verified {category.name} in Hyderabad</h2>
        <ProfileGrid profiles={profiles} />
      </section>

      <section className="section-rule grid gap-8 py-16 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="eyebrow">Category Guide &amp; FAQ</p>
          <h2 className="section-title">Common Questions About {category.name}</h2>
        </div>
        <Accordion
          items={category.faqs.map((item, index) => ({
            ...item,
            id: `category-${index}`,
          }))}
        />
      </section>

      <RelatedContent
        title="Related Categories &amp; Localities"
        links={[
          ...category.relatedCategorySlugs.map((slug) => ({
            href: `/categories/${slug}`,
            label: `Browse ${slug.replaceAll("-", " ")}`,
          })),
          ...category.relatedLocationSlugs.map((slug) => ({
            href: `/locations/${slug}`,
            label: `Explore in ${slug.replaceAll("-", " ")}`,
          })),
        ]}
      />

      <JsonLd
        data={[
          serviceJsonLd(`${category.name} in Hyderabad`, category.description),
          breadcrumbJsonLd(crumbs),
          faqJsonLd(category.faqs),
        ]}
      />
    </SiteShell>
  );
}