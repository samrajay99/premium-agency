import Link from "next/link";
import { MapPin, User, Star, Phone, MessageCircle, Eye } from "lucide-react";
import { SmartImage } from "@/components/ui/SmartImage";
import type { Profile } from "@/lib/data/profiles";

export function ProfileCard({ profile }: { profile: Profile }) {
  const whatsappText = encodeURIComponent(
    `Hello, I would like to inquire about ${profile.name} in ${profile.area}, Hyderabad.`
  );

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-[#141418] shadow-[0_14px_35px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-[#e11d74]/50 hover:shadow-[0_16px_45px_rgba(225,29,116,0.2)]">
      {/* Top Image with Badges - Perfect portrait aspect ratio & top-aligned framing */}
      <Link href={`/profiles/${profile.slug}`} className="block relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-black">
        <SmartImage
          src={profile.image}
          alt={`${profile.name} - Escort in ${profile.area}, Hyderabad`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-[center_top] transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141418] via-transparent to-black/30" />

        {/* Badges Overlaid on Top-Left */}
        <div className="absolute left-3.5 top-3.5 z-10 flex flex-col items-start gap-1.5">
          {profile.verified && (
            <span className="rounded-md bg-[#22c55e] px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-md">
              VERIFIED
            </span>
          )}
          {profile.badges?.includes("vip") ? (
            <span className="rounded-md bg-[#e11d74] px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-md">
              VIP PROFILE
            </span>
          ) : profile.badges?.includes("premium") ? (
            <span className="rounded-md bg-[#e11d74] px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-md">
              PREMIUM
            </span>
          ) : null}
        </div>

        {/* Total Photos Indicator Badge Overlaid on Top-Right */}
        {profile.gallery?.length > 1 && (
          <div className="absolute right-3.5 top-3.5 z-10 rounded-md bg-black/75 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-white border border-white/20 shadow-md">
            📸 {profile.gallery.length} Photos
          </div>
        )}
      </Link>

      {/* Card Content */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 space-y-3">
        <div className="space-y-2.5">
          {/* Profile Name */}
          <Link href={`/profiles/${profile.slug}`}>
            <h3 className="font-serif text-2xl sm:text-[1.7rem] font-black uppercase tracking-wide text-[#f5b324] transition-colors group-hover:text-[#ffc94b]">
              {profile.name}
            </h3>
          </Link>

          {/* Location */}
          <div className="flex items-center gap-2 text-sm sm:text-base font-medium text-zinc-200">
            <MapPin className="size-4.5 shrink-0 text-[#e11d74] fill-[#e11d74]/20" />
            <span className="truncate">{profile.area}, {profile.city}</span>
          </div>

          {/* Age & Rating */}
          <div className="flex items-center justify-between text-sm sm:text-base font-medium">
            <div className="flex items-center gap-2 text-zinc-300">
              <User className="size-4.5 shrink-0 text-[#e11d74]" />
              <span>Age: {profile.age} Years</span>
            </div>
            <div className="flex items-center gap-1 text-zinc-200 font-semibold">
              <Star className="size-4 text-[#e11d74] fill-[#e11d74]" />
              <span>{profile.rating.toFixed(1)}/5</span>
            </div>
          </div>

          {/* Specialization Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {profile.specializations?.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-[#4a1c2e] bg-[#241119] px-3 py-1 text-xs font-medium text-zinc-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3 pt-2">
          {/* Price Range */}
          <div className="text-xl sm:text-2xl font-black tracking-tight text-[#22c55e]">
            ₹{profile.priceMin?.toLocaleString("en-IN")} - ₹{profile.priceMax?.toLocaleString("en-IN")}
          </div>

          {/* Action Buttons: VIEW PROFILE (To see remaining pictures) + CALL + WHATSAPP */}
          <div className="space-y-2 pt-1">
            <Link
              href={`/profiles/${profile.slug}`}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#f5b324]/50 bg-[#221708] py-2.5 text-xs sm:text-sm font-black uppercase tracking-wider text-[#f5b324] shadow-[0_4px_16px_rgba(245,179,36,0.15)] transition-all hover:bg-[#33220b] hover:border-[#f5b324] hover:scale-[1.01]"
            >
              <Eye className="size-4" />
              <span>VIEW PROFILE &amp; ALL PHOTOS ({profile.gallery?.length || 1})</span>
            </Link>

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <a
                href={`tel:+91${profile.phone}`}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#e11d74] py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-[0_4px_16px_rgba(225,29,116,0.35)] transition-all hover:bg-[#d81657] hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="size-4 fill-current" />
                <span>CALL</span>
              </a>

              <a
                href={`https://wa.me/91${profile.whatsapp}?text=${whatsappText}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#22c55e] py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-[0_4px_16px_rgba(34,197,94,0.35)] transition-all hover:bg-[#16a34a] hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="size-4.5 fill-current" />
                <span>WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
