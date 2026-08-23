import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Rating } from "@/components/ui/Rating";
import { SmartImage } from "@/components/ui/SmartImage";
import type { Profile } from "@/lib/data/profiles";

export function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <article className="group surface overflow-hidden">
      <Link href={`/profiles/${profile.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden">
          <SmartImage
            src={profile.image}
            alt={`Portrait illustration for ${profile.name}, a fictional listing in ${profile.area}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            {profile.verified ? <Badge>Demo verified</Badge> : null}
            <Badge tone={profile.available ? "success" : "muted"}>
              {profile.available ? "Listed as available" : "Listed as unavailable"}
            </Badge>
          </div>
        </div>
        <div className="space-y-3 p-5">
          <div className="flex items-end justify-between gap-3">
            <h3 className="font-serif text-2xl leading-none">{profile.name}</h3>
            <p className="text-sm text-muted">{profile.age}</p>
          </div>
          <p className="text-sm text-muted">
            {profile.area}, {profile.city}
          </p>
          <p className="text-sm text-gold">{profile.category}</p>
          <Rating value={profile.rating} count={profile.reviewCount} />
          <p className="line-clamp-2 text-sm text-muted">{profile.shortDescription}</p>
          <span className="inline-flex text-sm text-foreground underline-offset-4 group-hover:underline">
            View profile
          </span>
        </div>
      </Link>
    </article>
  );
}
