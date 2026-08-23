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
  return profiles.filter((profile) => profile.locationSlug === locationSlug);
}

export function getProfilesByCategory(categorySlug: string): Profile[] {
  return profiles.filter((profile) => profile.categorySlug === categorySlug);
}

export function getRelatedProfiles(profile: Profile, limit = 3): Profile[] {
  return profiles
    .filter((item) => item.slug !== profile.slug)
    .sort((a, b) => {
      const score = (item: Profile) =>
        (item.locationSlug === profile.locationSlug ? 2 : 0) +
        (item.categorySlug === profile.categorySlug ? 2 : 0);
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
      ...profile.tags,
      ...profile.languages,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}
