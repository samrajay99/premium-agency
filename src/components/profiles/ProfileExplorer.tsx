"use client";

import { Drawer } from "@/components/ui/Drawer";
import { Button } from "@/components/ui/Button";
import { SearchBar } from "@/components/search/SearchBar";
import { ProfileFilterFields, defaultFilters, type ProfileFilterState } from "@/components/profiles/ProfileFilters";
import { ProfileGrid } from "@/components/profiles/ProfileGrid";
import type { Profile } from "@/lib/data/profiles";
import { useMemo, useState } from "react";

const PAGE_SIZE = 6;

export function ProfileExplorer({
  profiles,
  categories,
  locations,
}: {
  profiles: Profile[];
  categories: { slug: string; name: string }[];
  locations: { slug: string; name: string }[];
}) {
  const [filters, setFilters] = useState<ProfileFilterState>(defaultFilters);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const results = useMemo(() => {
    const query = filters.query.trim().toLowerCase();
    const filtered = profiles.filter((profile) => {
      const matchesQuery =
        !query ||
        [profile.name, profile.area, profile.category, profile.city, ...profile.tags]
          .join(" ")
          .toLowerCase()
          .includes(query);
      const matchesCategory = filters.category === "all" || profile.categorySlug === filters.category;
      const matchesLocation = filters.location === "all" || profile.locationSlug === filters.location;
      const matchesRating = profile.rating >= filters.minRating;
      const matchesVerified = !filters.verifiedOnly || profile.verified;
      const matchesAvailable = !filters.availableOnly || profile.available;
      return matchesQuery && matchesCategory && matchesLocation && matchesRating && matchesVerified && matchesAvailable;
    });

    return filtered.sort((a, b) => {
      if (filters.sort === "rating") return b.rating - a.rating;
      if (filters.sort === "newest") return b.createdAt.localeCompare(a.createdAt);
      if (filters.sort === "popular") return b.popularity - a.popularity;
      return Number(b.featured) - Number(a.featured) || b.popularity - a.popularity;
    });
  }, [filters, profiles]);

  const shown = results.slice(0, visible);

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <aside className="hidden lg:block">
        <div className="sticky top-24 rounded-3xl border border-line bg-bg-elevated p-5">
          <h2 className="mb-4 font-serif text-2xl">Filters</h2>
          <ProfileFilterFields value={filters} onChange={(next) => { setFilters(next); setVisible(PAGE_SIZE); }} categories={categories} locations={locations} />
        </div>
      </aside>
      <div>
        <div className="mb-6 flex flex-col gap-3 sm:flex-row">
          <div className="flex-1">
            <SearchBar value={filters.query} onChange={(query) => { setFilters({ ...filters, query }); setVisible(PAGE_SIZE); }} />
          </div>
          <Button type="button" variant="secondary" className="lg:hidden" onClick={() => setDrawerOpen(true)}>
            Filters
          </Button>
        </div>
        <p className="mb-6 text-sm text-muted">{results.length} listings in this demo set</p>
        <ProfileGrid profiles={shown} />
        {visible < results.length ? (
          <div className="mt-8 flex justify-center">
            <Button type="button" variant="secondary" onClick={() => setVisible((count) => count + PAGE_SIZE)}>
              Load more
            </Button>
          </div>
        ) : null}
      </div>
      <Drawer open={drawerOpen} title="Filters" onClose={() => setDrawerOpen(false)}>
        <ProfileFilterFields value={filters} onChange={(next) => { setFilters(next); setVisible(PAGE_SIZE); }} categories={categories} locations={locations} />
      </Drawer>
    </div>
  );
}
