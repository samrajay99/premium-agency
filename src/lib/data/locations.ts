import { locations, type DirectoryLocation } from "@/data/locations";

export type { DirectoryLocation };

export function getLocations(): DirectoryLocation[] {
  return locations;
}

export function getLocationBySlug(slug: string): DirectoryLocation | undefined {
  return locations.find((location) => location.slug === slug);
}
