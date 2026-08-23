"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { getCategories } from "@/lib/data/categories";
import { getLocations } from "@/lib/data/locations";

export function HeroSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("all");
  const [category, setCategory] = useState("all");
  const locations = getLocations();
  const categories = getCategories();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (location !== "all") params.set("location", location);
    if (category !== "all") params.set("category", category);
    const qs = params.toString();
    router.push(qs ? `/profiles?${qs}` : "/profiles");
  };

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-3 rounded-3xl border border-line bg-bg-elevated/80 p-3 backdrop-blur md:grid-cols-[1fr_160px_180px_auto]">
      <label className="sr-only" htmlFor="hero-q">
        Search profiles or locations
      </label>
      <input
        id="hero-q"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search profiles or locations"
        className="rounded-2xl border border-line bg-bg px-4 py-3"
      />
      <select aria-label="Location" value={location} onChange={(event) => setLocation(event.target.value)} className="rounded-2xl border border-line bg-bg px-3 py-3">
        <option value="all">Hyderabad</option>
        {locations.map((item) => (
          <option key={item.slug} value={item.slug}>
            {item.name}
          </option>
        ))}
      </select>
      <select aria-label="Category" value={category} onChange={(event) => setCategory(event.target.value)} className="rounded-2xl border border-line bg-bg px-3 py-3">
        <option value="all">Category</option>
        {categories.map((item) => (
          <option key={item.slug} value={item.slug}>
            {item.name}
          </option>
        ))}
      </select>
      <Button type="submit">Explore</Button>
    </form>
  );
}
