import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { Home, Users, MapPin, Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <SiteShell>
      <main className="min-h-[70vh] flex items-center justify-center px-4 py-16 text-foreground">
        <div className="mx-auto max-w-2xl text-center rounded-3xl border border-white/10 bg-gradient-to-b from-[#1c1421] to-[#120e16] p-8 sm:p-14 shadow-2xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f5b324]/40 bg-[#f5b324]/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#f5b324]">
            <span>404 • Page Not Found</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Looking for something specific?
          </h1>

          <p className="mx-auto max-w-lg text-sm sm:text-base leading-relaxed text-zinc-300">
            The page you requested may have moved or is unavailable. Explore our verified VIP models, luxury locations, or connect instantly with our 24/7 concierge.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-white hover:border-[#f5b324] transition"
            >
              <Home className="size-4" />
              Home
            </Link>

            <Link
              href="/profiles"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e11d74] to-[#f5b324] px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-[0_4px_20px_rgba(225,29,116,0.35)] transition hover:scale-105"
            >
              <Users className="size-4" />
              All Verified Profiles
            </Link>

            <Link
              href="/locations"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-white hover:border-[#f5b324] transition"
            >
              <MapPin className="size-4 text-[#e11d74]" />
              Locations
            </Link>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 text-xs font-bold">
            <a
              href={`tel:+91${siteConfig.phone}`}
              className="flex items-center gap-1.5 text-[#f5b324] hover:underline"
            >
              <Phone className="size-3.5" />
              <span>Call Concierge: +91 {siteConfig.phone}</span>
            </a>
            <span className="text-zinc-600">•</span>
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-[#22c55e] hover:underline"
            >
              <MessageCircle className="size-3.5" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}