import { MapPin, User, Star, Phone, MessageCircle } from "lucide-react";
import type { Profile } from "@/lib/data/profiles";

export function ProfileHeader({ profile }: { profile: Profile }) {
  const whatsappText = encodeURIComponent(
    `Hello, I want to book ${profile.name} (${profile.area}, Hyderabad). Please share availability.`
  );

  return (
    <header className="space-y-4">
      {/* Badges */}
      <div className="flex flex-wrap items-center gap-2">
        {profile.verified && (
          <span className="rounded-md bg-[#22c55e] px-3 py-1 text-xs font-black uppercase tracking-wider text-white shadow-md">
            VERIFIED
          </span>
        )}
        {profile.badges?.includes("vip") ? (
          <span className="rounded-md bg-[#e11d74] px-3 py-1 text-xs font-black uppercase tracking-wider text-white shadow-md">
            VIP PROFILE
          </span>
        ) : profile.badges?.includes("premium") ? (
          <span className="rounded-md bg-[#e11d74] px-3 py-1 text-xs font-black uppercase tracking-wider text-white shadow-md">
            PREMIUM
          </span>
        ) : null}
      </div>

      {/* Profile Name */}
      <h1 className="font-serif text-4xl sm:text-5xl font-black uppercase tracking-wide text-[#f5b324]">
        {profile.name}
      </h1>

      {/* Meta Info */}
      <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base font-medium text-zinc-300">
        <div className="flex items-center gap-1.5 text-zinc-200">
          <MapPin className="size-4.5 text-[#e11d74]" />
          <span>{profile.area}, {profile.city}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <User className="size-4.5 text-[#e11d74]" />
          <span>Age: {profile.age} Years</span>
        </div>
        <div className="flex items-center gap-1 text-[#f5b324] font-bold">
          <Star className="size-4.5 fill-current text-[#e11d74]" />
          <span>{profile.rating.toFixed(1)} / 5 ({profile.reviewCount} reviews)</span>
        </div>
      </div>

      {/* Specialization Tags */}
      <div className="flex flex-wrap gap-2 pt-1">
        {profile.specializations?.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-[#4a1c2e] bg-[#241119] px-3.5 py-1 text-xs font-medium text-zinc-200"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Price Range */}
      <div className="pt-2">
        <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">Rate / Package:</span>
        <span className="text-2xl sm:text-3xl font-black text-[#22c55e]">
          ₹{profile.priceMin?.toLocaleString("en-IN")} - ₹{profile.priceMax?.toLocaleString("en-IN")}
        </span>
      </div>

      {/* Direct Action Buttons */}
      <div className="grid grid-cols-2 gap-4 pt-3 max-w-md">
        <a
          href={`tel:+91${profile.phone}`}
          className="flex items-center justify-center gap-2 rounded-xl bg-[#e11d74] py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-[0_4px_16px_rgba(225,29,116,0.35)] transition hover:bg-[#d81657]"
        >
          <Phone className="size-4.5 fill-current" />
          <span>CALL NOW</span>
        </a>

        <a
          href={`https://wa.me/91${profile.whatsapp}?text=${whatsappText}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-[#22c55e] py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-[0_4px_16px_rgba(34,197,94,0.35)] transition hover:bg-[#16a34a]"
        >
          <MessageCircle className="size-5 fill-current" />
          <span>WHATSAPP</span>
        </a>
      </div>
    </header>
  );
}
