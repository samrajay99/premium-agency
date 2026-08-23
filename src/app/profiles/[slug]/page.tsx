import { notFound } from "next/navigation";
import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";
import { ProfileGallery } from "@/components/profiles/ProfileGallery";
import { ProfileHeader } from "@/components/profiles/ProfileHeader";
import { ProfileGrid } from "@/components/profiles/ProfileGrid";
import { RelatedContent } from "@/components/seo/RelatedContent";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SiteShell } from "@/components/layout/SiteShell";
import { getProfileBySlug, getProfiles, getRelatedProfiles } from "@/lib/data/profiles";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getProfiles().map((profile) => ({ slug: profile.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const profile = getProfileBySlug((await params).slug);
  return profile
    ? createMetadata({ title: profile.name, description: profile.shortDescription, pathname: `/profiles/${profile.slug}` })
    : {};
}

export default async function ProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const profile = getProfileBySlug((await params).slug);
  if (!profile) notFound();
  const related = getRelatedProfiles(profile);
  return (
    <SiteShell>
      <Breadcrumbs items={[{ name: "Profiles", href: "/profiles" }, { name: profile.name, href: `/profiles/${profile.slug}` }]} />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <ProfileGallery name={profile.name} images={profile.gallery} />
        <div className="lg:pt-8"><ProfileHeader profile={profile} /><p className="mt-8 leading-8 text-muted">{profile.description}</p><div className="mt-8 grid gap-5 sm:grid-cols-2"><div><p className="eyebrow">Languages</p><p className="mt-2">{profile.languages.join(" / ")}</p></div><div><p className="eyebrow">Tags</p><p className="mt-2">{profile.tags.join(" / ")}</p></div></div><Link href="/contact" className="button-primary mt-8">Send a demo enquiry</Link></div>
      </div>
      <section className="section-rule grid gap-10 py-16 lg:grid-cols-[1fr_1.2fr]"><div><p className="eyebrow">Good to know</p><h2 className="section-title">Profile questions</h2></div><Accordion items={profile.faqs.map((item, index) => ({ ...item, id: `profile-${index}` }))} /></section>
      <section className="section-rule py-16"><p className="eyebrow">Keep exploring</p><h2 className="section-title mb-8">Related profiles</h2><ProfileGrid profiles={related} /></section>
      <RelatedContent title="Explore nearby" links={[{ href: `/locations/${profile.locationSlug}`, label: `Profiles in ${profile.area}` }, { href: `/categories/${profile.categorySlug}`, label: profile.category }, { href: "/blog/privacy-tips-when-using-online-directories", label: "Read privacy tips" }]} />
    </SiteShell>
  );
}