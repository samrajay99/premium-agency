"use client";

import { Phone, MessageCircle, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";

export function BottomStickyBar() {
  return (
    <aside aria-label="Quick Contact Dock" className="fixed inset-x-0 bottom-0 z-50 pointer-events-none pb-[max(12px,env(safe-area-inset-bottom))] px-3 sm:px-4">
      <div className="mx-auto max-w-lg pointer-events-auto">
        {/* Floating Glassmorphic Pill Container */}
        <div className="relative flex items-center gap-2.5 rounded-full border border-white/20 bg-[#0c0910]/90 p-2 shadow-[0_15px_50px_rgba(0,0,0,0.85)] backdrop-blur-2xl ring-1 ring-white/10 transition-all hover:border-[#f5b324]/40">
          
          {/* Call Now Button */}
          <a
            href={siteConfig.phoneHref}
            className="group relative flex flex-1 items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-[#e11d74] via-[#ec4899] to-[#f43f5e] py-3 px-4 text-white shadow-[0_4px_20px_rgba(225,29,116,0.4)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_6px_25px_rgba(225,29,116,0.6)] active:scale-95"
            aria-label={`Call Agency at ${siteConfig.phone}`}
          >
            {/* Shimmer overlay effect */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-black/20 backdrop-blur-sm">
              <Phone className="size-4 fill-current text-white animate-bounce-subtle" />
            </div>

            <div className="text-left leading-tight">
              <span className="block text-[10px] font-black uppercase tracking-wider text-pink-100 opacity-90">
                Direct Line
              </span>
              <span className="block text-sm sm:text-base font-black uppercase tracking-wide text-white">
                Call Now
              </span>
            </div>
          </a>

          {/* WhatsApp Button */}
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-1 items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-[#22c55e] via-[#16a34a] to-[#15803d] py-3 px-4 text-white shadow-[0_4px_20px_rgba(34,197,94,0.4)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_6px_25px_rgba(34,197,94,0.6)] active:scale-95"
            aria-label="Chat on WhatsApp"
          >
            {/* Shimmer overlay effect */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <div className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-black/20 backdrop-blur-sm">
              <MessageCircle className="size-4 fill-current text-white" />
              {/* Online Pulsing Dot */}
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4ade80]" />
              </span>
            </div>

            <div className="text-left leading-tight">
              <span className="block text-[10px] font-black uppercase tracking-wider text-emerald-100 opacity-90 flex items-center gap-1">
                <Zap className="size-2.5 fill-current text-yellow-300 inline" />
                Online Now
              </span>
              <span className="block text-sm sm:text-base font-black uppercase tracking-wide text-white">
                WhatsApp
              </span>
            </div>
          </a>

        </div>
      </div>
    </aside>
  );
}
