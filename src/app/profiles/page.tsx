import { ProfileExplorer } from "@/components/profiles/ProfileExplorer";
import { SiteShell } from "@/components/layout/SiteShell";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { getCategories } from "@/lib/data/categories";
import { getLocations } from "@/lib/data/locations";
import { getProfiles } from "@/lib/data/profiles";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Explore Profiles",
  description: "Browse fictional adult profiles by area, category, rating, and availability across Hyderabad.",
  pathname: "/profiles",
});

export default function ProfilesPage() {
  return (
    <SiteShell>
      <Breadcrumbs items={[{ name: "Profiles", href: "/profiles" }]} />
      <header className="mb-10 max-w-3xl">
        <p className="eyebrow">The directory</p>
        <h1 className="display-title">Explore Hyderabad profiles</h1>
        <p className="lede">A fictional, non-explicit demo set organised for quick, private discovery.</p>
      </header>
      <ProfileExplorer profiles={getProfiles()} categories={getCategories()} locations={getLocations()} />
    </SiteShell>
  );
}