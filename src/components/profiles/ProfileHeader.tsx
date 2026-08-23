import { Badge } from "@/components/ui/Badge";
import { Rating } from "@/components/ui/Rating";
import type { Profile } from "@/lib/data/profiles";

export function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {profile.verified ? <Badge>Demo verified</Badge> : <Badge tone="muted">Unverified demo</Badge>}
        <Badge tone={profile.available ? "success" : "muted"}>
          {profile.available ? "Listed as available" : "Listed as unavailable"}
        </Badge>
      </div>
      <h1 className="font-serif text-4xl md:text-5xl">{profile.name}</h1>
      <p className="text-muted">
        {profile.age} · {profile.area}, {profile.city} · {profile.category}
      </p>
      <Rating value={profile.rating} count={profile.reviewCount} />
      <p className="max-w-2xl text-muted">
        Sample listing scores are for interface demonstration only. They are not live public reviews.
      </p>
    </header>
  );
}
