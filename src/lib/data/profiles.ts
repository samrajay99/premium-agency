import { profiles, type Profile } from "@/data/profiles";

export type { Profile };

export function getProfiles(): Profile[] {
  return profiles;
}

export function getProfileBySlug(slug: string): Profile | undefined {
  return profiles.find((profile) => profile.slug === slug);
}

export function getFeaturedProfiles(): Profile[] {
  return profiles.filter((profile) => profile.featured);
}

export function getProfilesByLocation(locationSlug: string): Profile[] {
  const normLoc = locationSlug.toLowerCase().trim();
  const direct = profiles.filter((profile) => profile.locationSlug === normLoc);
  if (direct.length > 0) return direct;

  return profiles.filter((profile) =>
    profile.area.toLowerCase().replace(/\s+/g, "-").includes(normLoc) ||
    profile.tags.some((t) => t.toLowerCase().replace(/\s+/g, "-").includes(normLoc))
  );
}

export function getProfilesByCategory(categorySlug: string): Profile[] {
  const normCat = categorySlug.toLowerCase().trim();
  const direct = profiles.filter((profile) => profile.categorySlug === normCat);
  if (direct.length > 0) return direct;

  return profiles.filter((profile) => {
    const slugInCat = profile.category.toLowerCase().replace(/\s+/g, "-").includes(normCat);
    const inTags = profile.tags.some((t) => t.toLowerCase().replace(/\s+/g, "-").includes(normCat));
    const inSpecs = profile.specializations.some((s) => s.toLowerCase().replace(/\s+/g, "-").includes(normCat));
    return slugInCat || inTags || inSpecs;
  });
}

export function getRelatedProfiles(profile: Profile, limit = 4): Profile[] {
  return profiles
    .filter((item) => item.slug !== profile.slug)
    .sort((a, b) => {
      const score = (item: Profile) =>
        (item.locationSlug === profile.locationSlug ? 3 : 0) +
        (item.categorySlug === profile.categorySlug ? 3 : 0) +
        (item.priceMin <= profile.priceMax && item.priceMax >= profile.priceMin ? 1 : 0);
      return score(b) - score(a);
    })
    .slice(0, limit);
}

export function searchProfiles(query: string): Profile[] {
  const q = query.trim().toLowerCase();
  if (!q) return profiles;
  return profiles.filter((profile) => {
    const haystack = [
      profile.name,
      profile.area,
      profile.city,
      profile.category,
      profile.locationSlug,
      profile.shortDescription,
      profile.description,
      ...profile.tags,
      ...profile.languages,
      ...profile.specializations,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}
