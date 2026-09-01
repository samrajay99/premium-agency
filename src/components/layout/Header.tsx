"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { navItems } from "@/config/navigation";
import { MobileMenu } from "@/components/layout/MobileMenu";

function BrandLipsLogo() {
  return (
    <div className="flex items-center gap-3 group">
      <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black border-2 border-[#e11d74] shadow-[0_0_15px_rgba(225,29,116,0.5)] transition-transform duration-200 group-hover:scale-105">
        <svg viewBox="0 0 100 100" className="w-full h-full p-1" role="img" aria-label={siteConfig.siteName}>
          <path
            id="textPath-top"
            d="M 16,50 A 34,34 0 0,1 84,50"
            fill="none"
          />
          <path
            id="textPath-bottom"
            d="M 84,50 A 34,34 0 0,1 16,50"
            fill="none"
          />
          <text className="text-[7.5px] font-black uppercase tracking-[1.5px] fill-[#f43f5e]">
            <textPath href="#textPath-top" startOffset="50%" textAnchor="middle">
              BEST ESCORTS
            </textPath>
          </text>
          <text className="text-[6.5px] font-bold uppercase tracking-[1.5px] fill-[#f43f5e]">
            <textPath href="#textPath-bottom" startOffset="50%" textAnchor="middle">
              IN HYDERABAD
            </textPath>
          </text>
          {/* Stylized Lips in center */}
          <g transform="translate(25, 32) scale(0.5)" fill="#e11d74">
            <path d="M50 35 C35 20, 20 25, 5 35 C15 48, 35 50, 50 42 C65 50, 85 48, 95 35 C80 25, 65 20, 50 35 Z" fill="#e11d74" />
            <path d="M5 35 C20 48, 35 52, 50 42 C65 52, 80 48, 95 35 C85 62, 65 72, 50 72 C35 72, 15 62, 5 35 Z" fill="#c2185b" />
            <path d="M42 68 Q46 82 48 80 Q50 68 54 68 Q56 86 59 84 Q62 68 65 65" stroke="#e11d74" strokeWidth="3" fill="none" strokeLinecap="round" />
            <ellipse cx="50" cy="40" rx="20" ry="4" fill="#120c10" />
            <path d="M35 34 Q45 28 50 32 Q55 28 65 34" stroke="#ff80ab" strokeWidth="2" fill="none" opacity="0.8" />
          </g>
        </svg>
      </div>
      <div className="hidden sm:flex flex-col">
        <span className="font-serif font-bold text-base sm:text-lg leading-tight tracking-wider text-[#f5b324] uppercase">
          Best Escorts
        </span>
        <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-[#e11d74] uppercase">
          Hyderabad VIP Service
        </span>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#09090b]/95 backdrop-blur-md border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.85)]"
          : "bg-[#09090b] border-b border-white/5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
        {/* Left: Brand Logo */}
        <Link href="/" prefetch={true} aria-label={siteConfig.siteName}>
          <BrandLipsLogo />
        </Link>

        {/* Center: Navigation with instant prefetch & active highlight */}
        <nav className="hidden items-center gap-1.5 xl:gap-2 text-sm font-bold text-zinc-300 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch={true}
                className={`rounded-full px-3.5 py-1.5 transition-all duration-150 ${
                  isActive
                    ? "bg-[#f5b324]/15 text-[#f5b324] border border-[#f5b324]/40 font-black"
                    : "text-zinc-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Phone CTA & Mobile Trigger */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2.5 transition-transform hover:scale-[1.02] active:scale-95 group"
            aria-label="Call VIP Service"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e11d74]/15 border border-[#e11d74] text-[#e11d74] group-hover:bg-[#e11d74] group-hover:text-white transition-all shadow-[0_0_12px_rgba(225,29,116,0.3)]">
              <Phone className="size-4.5 fill-current animate-pulse" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-semibold italic text-[#e11d74] tracking-wide leading-none">
                24/7 Hotline
              </span>
              <span className="text-sm sm:text-base font-black tracking-wider text-white leading-tight">
                {siteConfig.phone}
              </span>
            </div>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-200 lg:hidden hover:bg-white/10 active:scale-90 transition-transform"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-6 text-[#e11d74]" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
