import Link from "next/link";
import { siteConfig } from "@/config/site";
import { footerGroups } from "@/config/navigation";
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Hotel,
  Lock,
  Sparkles,
  ExternalLink,
  ChevronRight,
  HeartHandshake,
} from "lucide-react";
import { LiveViewerCounter } from "@/components/layout/LiveViewerCounter";

export function Footer() {
  const topAreas = [
    { name: "Banjara Hills", href: "/locations/banjara-hills" },
    { name: "Jubilee Hills", href: "/locations/jubilee-hills" },
    { name: "HITEC City", href: "/locations/hitech-city" },
    { name: "Gachibowli", href: "/locations/gachibowli" },
    { name: "Madhapur", href: "/locations/madhapur" },
    { name: "Kukatpally", href: "/locations/kukatpally" },
    { name: "Begumpet", href: "/locations/begumpet" },
    { name: "Somajiguda", href: "/locations/somajiguda" },
    { name: "Kondapur", href: "/locations/kondapur" },
    { name: "Manikonda", href: "/locations/manikonda" },
  ];

  const topCategories = [
    { name: "VIP Models", href: "/categories/vip-profile" },
    { name: "Celebrity Escorts", href: "/categories/celebrity-companion" },
    { name: "Russian Companions", href: "/categories/russian-escorts" },
    { name: "College Escorts", href: "/categories/college-girl" },
    { name: "South Indian", href: "/categories/south-indian" },
    { name: "High Profile", href: "/categories/high-class" },
  ];

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-[#070508] text-white">
      {/* 1. Live Active Viewers Bar */}
      <div className="border-b border-white/10 bg-[#0d0910] px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <LiveViewerCounter variant="footer" />
        </div>
      </div>

      {/* 2. Top VIP Call-to-Action Luxury Banner */}
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#e11d74]/40 bg-gradient-to-r from-[#180a15] via-[#220e1e] to-[#120811] p-6 sm:p-10 shadow-[0_15px_40px_rgba(225,29,116,0.2)]">
          <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-[#e11d74]/15 blur-3xl" />
          <div className="absolute left-1/3 bottom-0 h-48 w-48 rounded-full bg-[#f5b324]/10 blur-2xl" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#f5b324]/40 bg-[#f5b324]/10 px-3.5 py-1 text-xs font-black uppercase tracking-widest text-[#f5b324]">
                <Sparkles className="size-3.5" />
                <span>24/7 VIP Concierge Dispatch</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-wide">
                Ready For An <span className="text-[#f5b324]">Unforgettable Experience</span>?
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 font-medium">
                Rapid 30-minute 5-star hotel outcall dispatch across Banjara Hills, Jubilee Hills, HITEC City, Gachibowli &amp; Madhapur.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`tel:+91${siteConfig.phone}`}
                className="inline-flex items-center gap-2.5 rounded-full bg-[#e11d74] px-7 py-4 text-sm sm:text-base font-black uppercase tracking-wider text-white shadow-[0_10px_25px_rgba(225,29,116,0.4)] transition-all hover:bg-[#d81657] hover:scale-105"
              >
                <Phone className="size-5 fill-current animate-pulse" />
                <span>Call +91 {siteConfig.phone}</span>
              </a>

              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#22c55e] px-7 py-4 text-sm sm:text-base font-black uppercase tracking-wider text-white shadow-[0_10px_25px_rgba(34,197,94,0.35)] transition-all hover:bg-[#16a34a] hover:scale-105"
              >
                <MessageCircle className="size-5 fill-current" />
                <span>WhatsApp VIP Booking</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Four Core VIP Guarantees */}
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-[#120a13] p-4 text-center transition-all hover:border-[#f5b324]/40">
            <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#f5b324]/15 text-[#f5b324]">
              <ShieldCheck className="size-5" />
            </div>
            <h4 className="text-xs font-black uppercase text-white tracking-wider">100% Verified</h4>
            <p className="mt-1 text-[11px] text-zinc-400">Genuine photos &amp; real models</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#120a13] p-4 text-center transition-all hover:border-[#e11d74]/40">
            <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#e11d74]/15 text-[#e11d74]">
              <Hotel className="size-5" />
            </div>
            <h4 className="text-xs font-black uppercase text-white tracking-wider">5-Star Hotel Outcalls</h4>
            <p className="mt-1 text-[11px] text-zinc-400">Rapid 30-min direct transit</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#120a13] p-4 text-center transition-all hover:border-[#22c55e]/40">
            <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#22c55e]/15 text-[#22c55e]">
              <Lock className="size-5" />
            </div>
            <h4 className="text-xs font-black uppercase text-white tracking-wider">Strict Discretion</h4>
            <p className="mt-1 text-[11px] text-zinc-400">100% confidential &amp; encrypted</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#120a13] p-4 text-center transition-all hover:border-[#38bdf8]/40">
            <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#38bdf8]/15 text-[#38bdf8]">
              <HeartHandshake className="size-5" />
            </div>
            <h4 className="text-xs font-black uppercase text-white tracking-wider">Zero Advance Fraud</h4>
            <p className="mt-1 text-[11px] text-zinc-400">Pay only upon companion arrival</p>
          </div>
        </div>
      </div>

      {/* 4. Quick Localities & Categories Tag Cloud */}
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-[#0e0a10] p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#f5b324]">
              📍 Popular Hyderabad Localities:
            </span>
            <span className="text-[11px] text-zinc-400">Available across all major upscale zones</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {topAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:border-[#e11d74] hover:bg-[#e11d74]/15 hover:text-white transition-all"
              >
                {area.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3 pt-2">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#e11d74]">
              ✨ VIP Companion Categories:
            </span>
            <span className="text-[11px] text-zinc-400">Tailored to your exclusive preferences</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {topCategories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:border-[#f5b324] hover:bg-[#f5b324]/15 hover:text-[#f5b324] transition-all"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Main Multi-Column Navigation */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-6 lg:px-8">
        {/* Brand column */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="inline-block">
            <span className="font-serif text-2xl sm:text-3xl font-black uppercase text-[#f5b324] tracking-wider block">
              {siteConfig.siteName}
            </span>
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#e11d74] block mt-0.5">
              Hyderabad&apos;s #1 Elite Service
            </span>
          </Link>

          <p className="max-w-sm text-xs sm:text-sm text-zinc-400 leading-relaxed">
            {siteConfig.description}
          </p>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={`tel:+91${siteConfig.phone}`}
              className="flex items-center gap-2.5 text-sm font-bold text-white hover:text-[#e11d74] transition-colors"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e11d74]/15 text-[#e11d74]">
                <Phone className="size-4 fill-current" />
              </div>
              <span>+91 {siteConfig.phone} (24/7 Hotline)</span>
            </a>

            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 text-sm font-bold text-[#22c55e] hover:underline"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22c55e]/15 text-[#22c55e]">
                <MessageCircle className="size-4 fill-current" />
              </div>
              <span>WhatsApp: +91 {siteConfig.whatsapp}</span>
            </a>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#22c55e] animate-ping" />
              <span className="text-xs font-bold text-zinc-300">
                Outcall Dispatch Status: <span className="text-[#22c55e]">Active 24/7</span>
              </span>
            </div>
          </div>
        </div>

        {/* Footer Nav Links */}
        {Object.entries(footerGroups).map(([title, links]) => (
          <div key={title} className="space-y-3">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f5b324] border-b border-white/10 pb-2">
              {title}
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1.5 transition-colors hover:text-white"
                  >
                    <ChevronRight className="size-3 text-[#e11d74] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 6. Emergency Quick Safe Exit & Disclaimer Strip */}
      <div className="border-t border-white/10 bg-[#050305] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-3xl space-y-2 text-center md:text-left">
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              <strong className="text-zinc-300">Strict Adult Compliance:</strong> This platform operates as an informational directory exclusively for consenting adults aged 18 years and above. All companionship services are voluntary engagements between independent adults. We strictly uphold privacy, safety, and mutual consent.
            </p>
            <p className="text-[11px] text-zinc-500">
              © {new Date().getFullYear()} {siteConfig.siteName}. All rights reserved. Hyderabad, Telangana, India.
            </p>
          </div>

          {/* Quick Safe Exit Button */}
          <div className="flex flex-col items-center md:items-end gap-2 shrink-0">
            <a
              href="https://www.google.com"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:bg-white/15 hover:text-white transition"
              title="Immediately leave this page and redirect to Google for your privacy"
            >
              <Lock className="size-3.5 text-[#e11d74]" />
              <span>Quick Safe Exit (Google)</span>
              <ExternalLink className="size-3" />
            </a>
            <span className="text-[10px] text-zinc-600">Discreet Browsing Protection</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
