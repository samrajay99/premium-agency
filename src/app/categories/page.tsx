import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { getCategories } from "@/lib/data/categories";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Directory Categories", description: "Browse broad, non-explicit directory categories for Hyderabad profiles and experiences.", pathname: "/categories" });
export default function CategoriesPage() { return <SiteShell><Breadcrumbs items={[{ name: "Categories", href: "/categories" }]} /><p className="eyebrow">Browse by intent</p><h1 className="display-title">Directory categories</h1><p className="lede max-w-2xl">Clear labels make a directory easier to scan. These fictional groupings keep the browsing experience broad and non-explicit.</p><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{getCategories().map((category) => <Link key={category.slug} href={`/categories/${category.slug}`} className="surface group p-6"><h2 className="font-serif text-3xl group-hover:text-gold">{category.name}</h2><p className="mt-3 text-sm text-muted">{category.description}</p><span className="mt-6 inline-block text-sm text-gold">View category -&gt;</span></Link>)}</div></SiteShell>; }