import Link from "next/link";
import { ProfileGrid } from "@/components/profiles/ProfileGrid";
import { SiteShell } from "@/components/layout/SiteShell";
import { HeroSearch } from "@/components/sections/HeroSearch";
import { getFeaturedProfiles } from "@/lib/data/profiles";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Premium Hyderabad Directory",
  description: "Explore a fictional, privacy-first directory of professional companionship profiles and local Hyderabad guides.",
  pathname: "/",
});

export default function HomePage() {
  const featuredProfiles = getFeaturedProfiles();

  return (
    <SiteShell>
      <section className="py-12 sm:py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-gold">Hyderabad Elite Directory</p>
        <h1 className="max-w-3xl font-serif text-5xl leading-tight sm:text-7xl">
          Find the right experience for your evening.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Browse a curated directory of fictional profiles across Hyderabad.
        </p>
        <HeroSearch />
      </section>

      <section className="border-t border-line py-12 sm:py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gold">Curated selection</p>
            <h2 className="mt-2 font-serif text-4xl">Featured profiles</h2>
          </div>
          <Link href="/profiles" className="text-sm text-gold hover:text-gold-strong">View all</Link>
        </div>
        <ProfileGrid profiles={featuredProfiles} />
      </section>
    </SiteShell>
  );
}