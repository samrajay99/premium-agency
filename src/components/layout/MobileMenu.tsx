"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Sparkles, ChevronRight } from "lucide-react";
import { navItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();

  if (!open) return null;

  return (
    <div
      id="mobile-navigation"
      className="border-t border-white/10 bg-[#0c080e]/98 backdrop-blur-3xl lg:hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] animate-in fade-in slide-in-from-top-2 duration-150"
    >
      <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-5" aria-label="Mobile">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              prefetch={true}
              className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-black uppercase tracking-wider transition-all active:scale-[0.98] ${
                isActive
                  ? "bg-gradient-to-r from-[#e11d74]/20 to-[#f5b324]/20 border border-[#f5b324]/40 text-[#f5b324]"
                  : "text-zinc-200 hover:bg-white/5 hover:text-white"
              }`}
              onClick={onClose}
            >
              <div className="flex items-center gap-2.5">
                <Sparkles className={`size-3.5 ${isActive ? "text-[#f5b324]" : "text-[#e11d74]"}`} />
                <span>{item.label}</span>
              </div>
              <ChevronRight className={`size-4 ${isActive ? "text-[#f5b324]" : "text-zinc-500"}`} />
            </Link>
          );
        })}

        {/* Quick Action Dock */}
        <div className="mt-3 grid grid-cols-2 gap-2.5 pt-3 border-t border-white/10">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center justify-center gap-2 rounded-xl bg-[#e11d74] py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-[#e11d74]/30 active:scale-95 transition-transform"
            onClick={onClose}
          >
            <Phone className="size-4 fill-current animate-pulse" />
            <span>Call Now</span>
          </a>
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#22c55e] py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-[#22c55e]/30 active:scale-95 transition-transform"
            onClick={onClose}
          >
            <MessageCircle className="size-4 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
