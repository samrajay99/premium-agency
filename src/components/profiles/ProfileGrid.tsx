import { ProfileCard } from "@/components/profiles/ProfileCard";
import type { Profile } from "@/lib/data/profiles";
import Link from "next/link";
import { Sparkles, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ProfileGrid({ profiles }: { profiles: Profile[] }) {
  if (!profiles.length) {
    return (
      <div className="rounded-3xl border border-white/10 bg-[#161219] p-8 sm:p-12 text-center shadow-2xl">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[#e11d74]/15 text-[#e11d74] border border-[#e11d74]/30">
          <Sparkles className="size-7" />
        </div>
        <h2 className="mt-4 font-serif text-2xl sm:text-3xl font-black uppercase text-[#f5b324]">
          Explore Verified Companions
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-300">
          Browse all our 100% verified VIP models, college escorts, and Russian companions available for 5-star hotel outcalls across Hyderabad.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/profiles"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e11d74] to-[#f5b324] px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-lg transition hover:scale-105"
          >
            <Sparkles className="size-4" />
            Browse All Profiles
          </Link>
          <a
            href={`tel:+91${siteConfig.phone}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-white hover:border-[#f5b324]"
          >
            <Phone className="size-4" />
            Call Concierge: {siteConfig.phone}
          </a>
        </div>
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
