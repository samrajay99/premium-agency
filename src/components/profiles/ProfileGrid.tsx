import { ProfileCard } from "@/components/profiles/ProfileCard";
import type { Profile } from "@/lib/data/profiles";

export function ProfileGrid({ profiles }: { profiles: Profile[] }) {
  if (!profiles.length) {
    return (
      <div className="rounded-3xl border border-line p-10 text-center">
        <h2 className="font-serif text-2xl">No profiles found</h2>
        <p className="mt-2 text-muted">Try a different search, area, or category filter.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
}
