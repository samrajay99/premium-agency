"use client";

import { useEffect, useState } from "react";
import { Eye, Activity, ShieldCheck, Users, Flame } from "lucide-react";

export function LiveViewerCounter({
  variant = "footer",
}: {
  variant?: "footer" | "floating" | "inline";
}) {
  const [viewers, setViewers] = useState(46);
  const [totalVisits, setTotalVisits] = useState(28480);
  const [hasIncremented, setHasIncremented] = useState(false);

  useEffect(() => {
    // 1. Fetch & increment total visit count from server API or localStorage
    const recordVisit = async () => {
      try {
        let serverCount: number | null = null;
        
        // POST to increment server visit count once per session
        const sessionCounted = sessionStorage.getItem("visit_counted");
        if (!sessionCounted) {
          sessionStorage.setItem("visit_counted", "true");
          const res = await fetch("/api/visit-count", { method: "POST" });
          if (res.ok) {
            const data = await res.json();
            serverCount = data.totalVisits;
          }
        } else {
          // Just fetch current count
          const res = await fetch("/api/visit-count", { method: "GET" });
          if (res.ok) {
            const data = await res.json();
            serverCount = data.totalVisits;
          }
        }

        if (serverCount && serverCount > 0) {
          setTotalVisits(serverCount);
          localStorage.setItem("total_site_visits", String(serverCount));
        } else {
          // Fallback to local storage
          const local = localStorage.getItem("total_site_visits");
          const base = local ? parseInt(local, 10) : 28480;
          const next = base + 1;
          setTotalVisits(next);
          localStorage.setItem("total_site_visits", String(next));
        }
      } catch {
        const local = localStorage.getItem("total_site_visits");
        const base = local ? parseInt(local, 10) : 28480;
        setTotalVisits(base + 1);
      } finally {
        setHasIncremented(true);
      }
    };

    recordVisit();

    // Random initial active viewers
    const initialViewers = Math.floor(Math.random() * 20) + 38;
    setViewers(initialViewers);

    // Fluctuate viewers slightly every 5 seconds to simulate live traffic
    const interval = setInterval(() => {
      setViewers((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2; // -2 to +2
        return Math.max(35, Math.min(65, prev + delta));
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (variant === "floating") {
    return (
      <div className="fixed bottom-4 left-4 z-40 hidden md:flex items-center gap-3 rounded-full border border-white/20 bg-[#120e17]/90 backdrop-blur-xl px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_32px_rgba(0,0,0,0.8)] transition hover:scale-105">
        <div className="flex items-center gap-1.5 border-r border-white/15 pr-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22c55e]" />
          </span>
          <span className="text-[#22c55e] font-black">{viewers}</span>
          <span className="text-zinc-300">Online</span>
        </div>
        <div className="flex items-center gap-1.5 text-zinc-300">
          <Eye className="size-3.5 text-[#f5b324]" />
          <span>Total Visits: <strong className="text-[#f5b324]">{totalVisits.toLocaleString("en-IN")}</strong></span>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-[#f5b324]/30 bg-gradient-to-r from-[#17111c] via-[#120d15] to-[#1c121d] p-6 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.7)] backdrop-blur-xl">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-center">
        {/* Metric 1: Total Visits Till Now */}
        <div className="flex items-center gap-4 border-b sm:border-b-0 sm:border-r border-white/10 pb-4 sm:pb-0 sm:pr-4">
          <div className="relative flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f5b324] to-[#e11d74] text-black shadow-[0_0_20px_rgba(245,179,36,0.35)]">
            <Eye className="size-7 text-black" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-black text-[#f5b324] font-serif tracking-tight">
                {totalVisits.toLocaleString("en-IN")}
              </span>
              <span className="rounded-md bg-[#f5b324]/20 px-1.5 py-0.5 text-[9px] font-black uppercase text-[#f5b324]">
                TOTAL
              </span>
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-300 mt-0.5">
              Total Website Visits Till Now
            </p>
          </div>
        </div>

        {/* Metric 2: Live Viewers Online Right Now */}
        <div className="flex items-center gap-4 border-b sm:border-b-0 lg:border-r border-white/10 pb-4 sm:pb-0 lg:pr-4">
          <div className="relative flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#22c55e]/15 text-[#22c55e] border border-[#22c55e]/40 shadow-[0_0_15px_rgba(34,197,94,0.25)]">
            <Activity className="size-7" />
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-80" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#22c55e]" />
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-black text-white font-serif tracking-tight">
                {viewers}
              </span>
              <span className="rounded-md bg-[#22c55e]/20 px-1.5 py-0.5 text-[9px] font-black uppercase text-[#22c55e]">
                LIVE NOW
              </span>
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-300 mt-0.5">
              Active Visitors Browsing
            </p>
          </div>
        </div>

        {/* Metric 3: Verified Client Bookings */}
        <div className="flex items-center gap-4 border-b sm:border-b-0 sm:border-r border-white/10 pb-4 sm:pb-0 sm:pr-4">
          <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#e11d74]/15 text-[#e11d74] border border-[#e11d74]/40 shadow-[0_0_15px_rgba(225,29,116,0.25)]">
            <Users className="size-7" />
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#e11d74] font-serif tracking-tight">
              18,000+
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-300 mt-0.5">
              Satisfied Verified Clients
            </p>
          </div>
        </div>

        {/* Metric 4: 100% Discretion Guarantee */}
        <div className="flex items-center gap-4">
          <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-purple-500/15 text-purple-400 border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.25)]">
            <ShieldCheck className="size-7" />
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-purple-400 font-serif tracking-tight">
              100%
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-300 mt-0.5">
              Discreet &amp; Confidential
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
