"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { navItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div
      id="mobile-navigation"
      className="border-t border-white/10 bg-[#09090b]/98 backdrop-blur-2xl lg:hidden shadow-2xl animate-in slide-in-from-top duration-200"
    >
      <nav className="mx-auto flex max-w-7xl flex-col gap-1.5 px-5 py-6" aria-label="Mobile">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-xl px-4 py-3 text-lg font-bold text-zinc-200 transition-colors hover:bg-white/5 hover:text-[#f5b324]"
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}

        <div className="mt-4 grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center justify-center gap-2 rounded-xl bg-[#e11d74] py-3.5 text-sm font-black uppercase text-white shadow-lg shadow-[#e11d74]/30"
            onClick={onClose}
          >
            <Phone className="size-4 fill-current" />
            Call Now
          </a>
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#22c55e] py-3.5 text-sm font-black uppercase text-white shadow-lg shadow-[#22c55e]/30"
            onClick={onClose}
          >
            <MessageCircle className="size-4 fill-current" />
            WhatsApp
          </a>
        </div>
      </nav>
    </div>
  );
}
