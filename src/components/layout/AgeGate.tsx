"use client";

import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";

export function AgeGate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(window.sessionStorage.getItem("hed-age") !== "yes"), 0);
    return () => window.clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    window.sessionStorage.setItem("hed-age", "yes");
    setOpen(false);

    // Send instant visit notification on AgeGate confirmation
    try {
      fetch("/api/notify-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: window.location.href,
          referrer: document.referrer || "Direct Entry",
          screen: `${window.screen.width}x${window.screen.height}`,
          action: "User Verified 18+ and Entered Site",
          timestamp: new Date().toISOString(),
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown Timezone",
          language: navigator.language || "Unknown",
        }),
      }).catch((err) => console.warn("AgeGate notify ping error:", err));
    } catch {
      // Ignore
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div
        role="dialog"
        aria-labelledby="age-title"
        aria-modal="true"
        className="max-w-md w-full rounded-3xl border border-white/15 bg-[#141418] p-7 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] text-center"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e11d74]/15 border border-[#e11d74] text-[#e11d74] mb-4">
          <ShieldCheck className="size-7" />
        </div>

        <span className="text-xs font-black uppercase tracking-[0.2em] text-[#e11d74]">
          18+ Age Verification
        </span>
        <h2 id="age-title" className="mt-2 font-serif text-2xl sm:text-3xl font-black uppercase tracking-wide text-[#f5b324]">
          Age Verification
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
          This service directory contains adult content intended strictly for consenting individuals aged 18 and above. Please confirm your age before proceeding.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            className="flex-1 rounded-xl bg-[#e11d74] py-3 text-sm font-black uppercase tracking-wider text-white shadow-lg shadow-[#e11d74]/30 hover:bg-[#d81657] transition cursor-pointer"
            onClick={handleAccept}
          >
            I am 18 or Older
          </button>
          <a
            href="https://www.google.com"
            className="flex-1 rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-bold uppercase tracking-wider text-zinc-300 hover:bg-white/10 transition"
          >
            Exit
          </a>
        </div>
      </div>
    </div>
  );
}
