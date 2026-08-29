"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { navItems } from "@/config/navigation";
import { MobileMenu } from "@/components/layout/MobileMenu";

function BrandLipsLogo() {
  return (
    <div className="flex items-center gap-3 group">
      <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black border-2 border-[#e11d74] shadow-[0_0_15px_rgba(225,29,116,0.5)] transition-transform duration-300 group-hover:scale-105">
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
            {/* Lipstick drips/glow */}
            <path d="M42 68 Q46 82 48 80 Q50 68 54 68 Q56 86 59 84 Q62 68 65 65" stroke="#e11d74" strokeWidth="3" fill="none" strokeLinecap="round" />
            <ellipse cx="50" cy="40" rx="20" ry="4" fill="#120c10" />
            <path d="M35 34 Q45 28 50 32 Q55 28 65 34" stroke="#ff80ab" strokeWidth="2" fill="none" opacity="0.8" />
          </g>
        </svg>
      </div>
      <div className="hidden sm:flex flex-col">
        <span className="font-serif font-bold text-lg leading-tight tracking-wider text-[#f5b324] uppercase">
          Best Escorts
        </span>
        <span className="text-[10px] font-bold tracking-[0.2em] text-[#e11d74] uppercase">
          Hyderabad VIP Agency
        </span>
      </div>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090b]/95 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-[#09090b] border-b border-white/5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Left: Brand Logo */}
        <Link href="/" aria-label={siteConfig.siteName}>
          <BrandLipsLogo />
        </Link>

        {/* Center: Navigation */}
        <nav className="hidden items-center gap-7 text-base font-bold text-zinc-300 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[#f5b324] hover:underline underline-offset-8"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Phone CTA & Mobile Trigger */}
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-3 transition-transform hover:scale-[1.03] group"
            aria-label="Call Us Today"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e11d74]/15 border border-[#e11d74] text-[#e11d74] group-hover:bg-[#e11d74] group-hover:text-white transition-all shadow-[0_0_12px_rgba(225,29,116,0.3)]">
              <Phone className="size-5 fill-current animate-pulse" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-semibold italic text-[#e11d74] tracking-wide">
                Call Us Today
              </span>
              <span className="text-base sm:text-lg font-black tracking-wider text-white">
                {siteConfig.phone}
              </span>
            </div>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-200 lg:hidden hover:bg-white/10"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
