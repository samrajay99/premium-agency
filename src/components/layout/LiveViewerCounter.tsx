"use client";

import { useEffect, useState } from "react";
import { Eye, Activity } from "lucide-react";

export function LiveViewerCounter({ variant = "footer" }: { variant?: "footer" | "floating" | "inline" }) {
  const [viewers, setViewers] = useState(48);
  const [totalViews, setTotalViews] = useState(19480);

  useEffect(() => {
    // Read or set base total views in localStorage asynchronously
    const timer = setTimeout(() => {
      try {
        const savedTotal = localStorage.getItem("total_site_views");
        const baseTotal = savedTotal ? parseInt(savedTotal, 10) : 19480;
        const newTotal = baseTotal + 1;
        setTotalViews(newTotal);
        localStorage.setItem("total_site_views", newTotal.toString());

        const initialViewers = Math.floor(Math.random() * 24) + 38;
        setViewers(initialViewers);
      } catch {
        // Fallback if localStorage unavailable
      }
    }, 50);

    // Fluctuate viewers slightly every 6 seconds to simulate real-time traffic
    const interval = setInterval(() => {
      setViewers((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2; // -2 to +2
        const nextVal = prev + delta;
        return Math.max(34, Math.min(68, nextVal));
      });
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (variant === "floating") {
    return (
      <div className="fixed bottom-4 left-4 z-40 hidden sm:flex items-center gap-2.5 rounded-full border border-white/15 bg-black/85 backdrop-blur-xl px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_30px_rgba(0,0,0,0.8)] transition hover:scale-105">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22c55e]" />
        </span>
        <span className="text-[#22c55e] font-bold">{viewers}</span>
        <span className="text-zinc-300">Active Viewers Online</span>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-[#121217] p-5 shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/30">
            <Activity className="size-5" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#22c55e]" />
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black text-white">{viewers}</span>
              <span className="rounded bg-[#22c55e]/20 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#22c55e]">
                LIVE NOW
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-medium">People currently viewing escort profiles in Hyderabad</p>
          </div>
        </div>

        <div className="flex items-center gap-3 border-t sm:border-t-0 sm:border-l border-white/10 pt-3 sm:pt-0 sm:pl-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f5b324]/10 text-[#f5b324] border border-[#f5b324]/30">
            <Eye className="size-5" />
          </div>
          <div>
            <div className="text-lg sm:text-xl font-black text-[#f5b324]">
              {totalViews.toLocaleString("en-IN")}+
            </div>
            <p className="text-xs text-zinc-400 font-medium">Total Directory Profile Views</p>
          </div>
        </div>
      </div>
    </div>
  );
}
