"use client";

import { useState, useMemo } from "react";
import { ProfileCard } from "@/components/profiles/ProfileCard";
import { ModelFilterBar, FilterState } from "@/components/search/ModelFilterBar";
import type { Profile } from "@/lib/data/profiles";
import { SearchX, Sparkles, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ProfileExplorer({ profiles }: { profiles: Profile[] }) {
  const [filters, setFilters] = useState<FilterState>({
    location: "",
    category: "",
    query: "",
  });

  const [activeFilters, setActiveFilters] = useState<FilterState>({
    location: "",
    category: "",
    query: "",
  });

  // Filter profiles based on current active search filters
  const filteredProfiles = useMemo(() => {
    return profiles.filter((p) => {
      // 1. Location filter
      if (activeFilters.location && p.locationSlug !== activeFilters.location) {
        // Also check area string
        const areaMatch = p.area.toLowerCase().replace(/\s+/g, "-").includes(activeFilters.location.toLowerCase());
        if (!areaMatch) return false;
      }

      // 2. Category filter
      if (activeFilters.category && p.categorySlug !== activeFilters.category) {
        const catMatch = p.category.toLowerCase().replace(/\s+/g, "-").includes(activeFilters.category.toLowerCase());
        if (!catMatch) return false;
      }

      // 3. Text query filter (name, area, city, tags, specializations)
      if (activeFilters.query.trim()) {
        const q = activeFilters.query.toLowerCase().trim();
        const inName = p.name.toLowerCase().includes(q);
        const inArea = p.area.toLowerCase().includes(q);
        const inCategory = p.category.toLowerCase().includes(q);
        const inTags = p.tags?.some((t) => t.toLowerCase().includes(q));
        const inSpecs = p.specializations?.some((s) => s.toLowerCase().includes(q));
        if (!inName && !inArea && !inCategory && !inTags && !inSpecs) {
          return false;
        }
      }

      return true;
    });
  }, [profiles, activeFilters]);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    // Instant live update for smooth experience
    setActiveFilters(newFilters);
  };

  const handleSearch = () => {
    setActiveFilters(filters);
  };

  const handleReset = () => {
    const emptyState = { location: "", category: "", query: "" };
    setFilters(emptyState);
    setActiveFilters(emptyState);
  };

  return (
    <div className="space-y-10">
      {/* Interactive Search & Filter Bar */}
      <ModelFilterBar
        filters={filters}
        onFilterChange={handleFilterChange}
        onSearch={handleSearch}
        onReset={handleReset}
        totalResults={filteredProfiles.length}
        totalProfiles={profiles.length}
      />

      {/* Profiles Output */}
      {filteredProfiles.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-3xl border border-white/10 bg-[#161219] p-8 sm:p-12 text-center shadow-2xl">
          <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-[#e11d74]/15 text-[#e11d74] border border-[#e11d74]/30 shadow-[0_0_20px_rgba(225,29,116,0.3)]">
            <SearchX className="size-10" />
          </div>
          <h3 className="mt-6 font-serif text-2xl font-black uppercase text-white">
            No Exact Models Found
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
            We couldn&apos;t find any verified profiles matching your specific filter criteria. Try clearing your filters or calling our concierge directly.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f5b324] bg-[#f5b324]/10 px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-[#f5b324] transition hover:bg-[#f5b324] hover:text-black"
            >
              <Sparkles className="size-4" />
              View All {profiles.length} Models
            </button>
            <a
              href={`tel:+91${siteConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e11d74] px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-lg transition hover:bg-[#d81657]"
            >
              <Phone className="size-4 fill-current" />
              Call Concierge: {siteConfig.phone}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
