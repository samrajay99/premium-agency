"use client";

import { Search, MapPin, Sparkles, RotateCcw } from "lucide-react";

export interface FilterState {
  location: string;
  category: string;
  query: string;
}

interface ModelFilterBarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onSearch: () => void;
  onReset: () => void;
  totalResults: number;
  totalProfiles: number;
}

export const HYDERABAD_LOCATIONS = [
  { slug: "", name: "All Locations across Hyderabad" },
  { slug: "banjara-hills", name: "Banjara Hills" },
  { slug: "jubilee-hills", name: "Jubilee Hills" },
  { slug: "hitech-city", name: "Hitech City" },
  { slug: "gachibowli", name: "Gachibowli" },
  { slug: "madhapur", name: "Madhapur" },
  { slug: "kukatpally", name: "Kukatpally" },
  { slug: "kondapur", name: "Kondapur" },
  { slug: "miyapur", name: "Miyapur" },
  { slug: "begumpet", name: "Begumpet" },
  { slug: "secunderabad", name: "Secunderabad" },
  { slug: "ameerpet", name: "Ameerpet" },
  { slug: "somajiguda", name: "Somajiguda" },
];

export const MODEL_CATEGORIES = [
  { slug: "", name: "All Model Categories" },
  { slug: "vip-profile", name: "VIP Profile" },
  { slug: "celebrity-companion", name: "Celebrity Companion" },
  { slug: "russian-escorts", name: "Russian Escorts" },
  { slug: "elite-vip", name: "Elite VIP" },
  { slug: "south-indian", name: "South Indian" },
  { slug: "college-escorts", name: "College Escorts" },
  { slug: "premium-companionship", name: "Premium Companionship" },
  { slug: "budget-friendly", name: "Budget Friendly" },
];

export function ModelFilterBar({
  filters,
  onFilterChange,
  onSearch,
  onReset,
  totalResults,
  totalProfiles,
}: ModelFilterBarProps) {
  const isFiltered = filters.location !== "" || filters.category !== "" || filters.query.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <div className="w-full rounded-3xl border border-[#f5b324]/30 bg-gradient-to-b from-[#1c141d] to-[#120e15] p-5 sm:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
        <div>
          <h3 className="font-serif text-lg sm:text-xl font-black uppercase tracking-wider text-[#f5b324] flex items-center gap-2">
            <Sparkles className="size-4.5 text-[#e11d74]" />
            Find Your Companion
          </h3>
          <p className="text-xs text-zinc-400 mt-0.5">
            Filter 100% verified models by specific Hyderabad area &amp; category
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-bold text-zinc-300">
            Showing <strong className="text-[#f5b324]">{totalResults}</strong> of {totalProfiles} Models
          </span>
          {isFiltered && (
            <button
              type="button"
              onClick={onReset}
              className="flex items-center gap-1 text-xs font-semibold text-zinc-400 transition hover:text-[#f43f5e]"
            >
              <RotateCcw className="size-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4 items-center">
        {/* 1. Location Select */}
        <div className="relative">
          <label htmlFor="search-location" className="sr-only">
            Select Location
          </label>
          <div className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#e11d74]">
            <MapPin className="size-4.5" />
          </div>
          <select
            id="search-location"
            value={filters.location}
            onChange={(e) => onFilterChange({ ...filters, location: e.target.value })}
            className="w-full appearance-none rounded-2xl border border-white/15 bg-[#211822] py-3.5 pl-11 pr-8 text-sm font-semibold text-white shadow-inner transition hover:border-[#f5b324]/50 focus:border-[#f5b324] focus:outline-none focus:ring-2 focus:ring-[#f5b324]/20"
          >
            {HYDERABAD_LOCATIONS.map((loc) => (
              <option key={loc.slug} value={loc.slug} className="bg-[#1a141c] text-white">
                {loc.name}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-zinc-400">
            ▼
          </div>
        </div>

        {/* 2. Category Select */}
        <div className="relative">
          <label htmlFor="search-category" className="sr-only">
            Select Category
          </label>
          <div className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#f5b324]">
            <Sparkles className="size-4.5" />
          </div>
          <select
            id="search-category"
            value={filters.category}
            onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}
            className="w-full appearance-none rounded-2xl border border-white/15 bg-[#211822] py-3.5 pl-11 pr-8 text-sm font-semibold text-white shadow-inner transition hover:border-[#f5b324]/50 focus:border-[#f5b324] focus:outline-none focus:ring-2 focus:ring-[#f5b324]/20"
          >
            {MODEL_CATEGORIES.map((cat) => (
              <option key={cat.slug} value={cat.slug} className="bg-[#1a141c] text-white">
                {cat.name}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-zinc-400">
            ▼
          </div>
        </div>

        {/* 3. Name or Keyword Search */}
        <div className="relative">
          <label htmlFor="search-query" className="sr-only">
            Search by name or keyword
          </label>
          <div className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400">
            <Search className="size-4.5" />
          </div>
          <input
            id="search-query"
            type="text"
            placeholder="Search model name..."
            value={filters.query}
            onChange={(e) => onFilterChange({ ...filters, query: e.target.value })}
            className="w-full rounded-2xl border border-white/15 bg-[#211822] py-3.5 pl-11 pr-4 text-sm font-medium text-white placeholder:text-zinc-500 shadow-inner transition hover:border-[#f5b324]/50 focus:border-[#f5b324] focus:outline-none focus:ring-2 focus:ring-[#f5b324]/20"
          />
        </div>

        {/* 4. Search Submit Button */}
        <div>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#e11d74] to-[#f43f5e] py-3.5 px-6 text-sm font-black uppercase tracking-wider text-white shadow-[0_8px_25px_rgba(225,29,116,0.4)] transition-all hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]"
          >
            <Search className="size-4.5" />
            <span>Search Profiles</span>
          </button>
        </div>
      </form>
    </div>
  );
}
