import { categories, type DirectoryCategory } from "@/data/categories";

export type { DirectoryCategory };

export function getCategories(): DirectoryCategory[] {
  return categories;
}

export function getCategoryBySlug(slug: string): DirectoryCategory | undefined {
  return categories.find((category) => category.slug === slug);
}
