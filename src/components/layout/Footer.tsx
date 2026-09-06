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

            {/* Official Social Media Channels */}
            <div className="pt-4 space-y-2 border-t border-white/10 mt-2">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#f5b324] block">
                Official Social Channels &amp; Community:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={siteConfig.socialLinks.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join VIP Telegram Channel"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#229ED9]/15 border border-[#229ED9]/40 text-[#229ED9] hover:bg-[#229ED9] hover:text-white transition-all shadow-sm"
                  title="Official VIP Telegram Channel"
                >
                  <svg className="size-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z" />
                  </svg>
                </a>

                <a
                  href={siteConfig.socialLinks.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on X (Twitter)"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white hover:text-black transition-all shadow-sm"
                  title="Follow us on X (Twitter)"
                >
                  <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E1306C]/15 border border-[#E1306C]/40 text-[#E1306C] hover:bg-[#E1306C] hover:text-white transition-all shadow-sm"
                  title="Instagram VIP Gallery"
                >
                  <svg className="size-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a
                  href={siteConfig.socialLinks.reddit}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Reddit VIP Discussion Community"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FF4500]/15 border border-[#FF4500]/40 text-[#FF4500] hover:bg-[#FF4500] hover:text-white transition-all shadow-sm"
                  title="Reddit VIP Discussion Community"
                >
                  <svg className="size-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.56 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.56 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.197-2.512-.73a.326.326 0 0 0-.232-.095z" />
                  </svg>
                </a>

                <a
                  href={siteConfig.socialLinks.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest Model Portfolio"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#BD081C]/15 border border-[#BD081C]/40 text-[#BD081C] hover:bg-[#BD081C] hover:text-white transition-all shadow-sm"
                  title="Pinterest Model Portfolio"
                >
                  <svg className="size-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0a12 12 0 0 0-4.37 23.18c-.07-.97-.13-2.47.03-3.53l.99-4.22s-.25-.5-.25-1.25c0-1.17.68-2.05 1.53-2.05.72 0 1.07.54 1.07 1.19 0 .73-.46 1.82-.7 2.83-.2.85.43 1.55 1.27 1.55 1.53 0 2.7-1.61 2.7-3.94 0-2.06-1.48-3.5-3.6-3.5-2.45 0-3.89 1.84-3.89 3.73 0 .74.28 1.53.64 1.96.07.08.08.16.06.24l-.24.97c-.04.15-.13.18-.3.11-1.12-.52-1.82-2.15-1.82-3.46 0-2.82 2.05-5.4 5.9-5.4 3.1 0 5.5 2.21 5.5 5.16 0 3.08-1.94 5.56-4.64 5.56-.91 0-1.76-.47-2.05-1.03l-.56 2.13c-.2.78-.75 1.76-1.12 2.36A12 12 0 1 0 12 0z" />
                  </svg>
                </a>

                <a
                  href={siteConfig.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Channel"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FF0000]/15 border border-[#FF0000]/40 text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition-all shadow-sm"
                  title="YouTube Channel"
                >
                  <svg className="size-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
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
