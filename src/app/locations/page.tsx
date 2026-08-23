import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { getLocations } from "@/lib/data/locations";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Hyderabad Locations", description: "Explore Hyderabad directory pages by neighbourhood, from Gachibowli to Secunderabad.", pathname: "/locations" });

export default function LocationsPage() { return <SiteShell><Breadcrumbs items={[{ name: "Locations", href: "/locations" }]} /><p className="eyebrow">Local index</p><h1 className="display-title">Explore by Hyderabad neighbourhood</h1><p className="lede max-w-2xl">Useful area context and fictional listings, written around how people actually move through the city.</p><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{getLocations().map((location) => <Link key={location.slug} href={`/locations/${location.slug}`} className="surface group p-6"><p className="eyebrow">Hyderabad</p><h2 className="mt-3 font-serif text-3xl group-hover:text-gold">{location.name}</h2><p className="mt-3 text-sm text-muted">{location.intro}</p><span className="mt-6 inline-block text-sm text-gold">Explore area -&gt;</span></Link>)}</div></SiteShell>; }