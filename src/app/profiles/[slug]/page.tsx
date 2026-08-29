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
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export function generateStaticParams() {
  return getProfiles().map((profile) => ({ slug: profile.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const profile = getProfileBySlug((await params).slug);
  return profile
    ? createMetadata({
        title: `${profile.name} - ${profile.category} Escort in ${profile.area}, Hyderabad`,
        description: profile.shortDescription,
        pathname: `/profiles/${profile.slug}`,
      })
    : {};
}

export default async function ProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const profile = getProfileBySlug((await params).slug);
  if (!profile) notFound();
  const related = getRelatedProfiles(profile);

  return (
    <SiteShell>
      <Breadcrumbs
        items={[
          { name: "Profiles", href: "/profiles" },
          { name: profile.name, href: `/profiles/${profile.slug}` },
        ]}
      />

      {/* Main Profile Showcase */}
      <div className="mt-4 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        {/* Left Column: Interactive Full Photo Gallery */}
        <div>
          <ProfileGallery name={profile.name} images={profile.gallery} />
        </div>

        {/* Right Column: Profile Header & Detailed Info */}
        <div className="flex flex-col justify-between space-y-6">
          <ProfileHeader profile={profile} />

          {/* Description */}
          <div className="rounded-3xl border border-white/10 bg-[#141418] p-6 shadow-xl space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#f5b324]">
              <Sparkles className="size-4" />
              <span>About {profile.name}</span>
            </div>
            <p className="text-base leading-relaxed text-zinc-300">
              {profile.description}
            </p>

            {/* Quick Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                <CheckCircle2 className="size-4 text-[#22c55e] shrink-0" />
                <span>100% Genuine Verified Photos</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                <ShieldCheck className="size-4 text-[#22c55e] shrink-0" />
                <span>100% Discreet &amp; Confidential</span>
              </div>
            </div>
          </div>

          {/* Details & Tags Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-[#141418] p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Languages Spoken</span>
              <p className="mt-1 text-base font-semibold text-white">{profile.languages.join(" • ")}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#141418] p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Services &amp; Tags</span>
              <p className="mt-1 text-base font-semibold text-[#f5b324]">{profile.tags.join(" • ")}</p>
            </div>
          </div>

          {/* Booking Contact Card */}
          <div className="rounded-3xl border border-[#e11d74]/40 bg-gradient-to-r from-[#241119] to-[#16121b] p-6 shadow-xl flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-black uppercase text-white font-serif">
                Ready to book {profile.name}?
              </h3>
              <p className="text-xs text-zinc-300 mt-1">
                Fast booking in {profile.area} &amp; across Hyderabad 24/7.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#e11d74] px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-lg transition hover:bg-[#d81657]"
            >
              Online Enquiry
            </Link>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <section className="section-rule grid gap-10 py-14 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow">Frequently Asked</p>
          <h2 className="section-title">Common Questions</h2>
          <p className="mt-3 text-sm text-zinc-400">
            Learn more about our booking terms, hygiene protocols, and outcall guidelines.
          </p>
        </div>
        <Accordion items={profile.faqs.map((item, index) => ({ ...item, id: `profile-${index}` }))} />
      </section>

      {/* Related Profiles Section */}
      <section className="section-rule py-14">
        <div className="mb-8 text-center">
          <p className="eyebrow">Keep Exploring</p>
          <h2 className="section-title">More Companions in Hyderabad</h2>
        </div>
        <ProfileGrid profiles={related} />
      </section>

      {/* SEO Nearby Links */}
      <RelatedContent
        title="Explore nearby"
        links={[
          { href: `/locations/${profile.locationSlug}`, label: `Profiles in ${profile.area}` },
          { href: `/categories/${profile.categorySlug}`, label: profile.category },
          { href: "/gallery", label: "View Full Photo Gallery" },
          { href: "/price-list", label: "Price Rates Table" },
        ]}
      />
    </SiteShell>
  );
}