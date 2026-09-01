"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Crown, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

function subscribe() {
  return () => {};
}

export function SitePreloader() {
  const isClient = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);
  const [progress, setProgress] = useState(15);
  const [statusText, setStatusText] = useState("Initializing VIP Experience...");

  useEffect(() => {
    if (!isClient) return;

    // Check if user already saw preloader in this browser tab session
    const seen = window.sessionStorage.getItem("hed_vip_preloader_seen");
    if (seen === "true") {
      const t = setTimeout(() => setVisible(false), 0);
      return () => clearTimeout(t);
    }

    const statuses = [
      { at: 35, text: "Securing 256-Bit Encrypted VIP Session..." },
      { at: 65, text: "Loading 100% Verified Escort Profiles..." },
      { at: 90, text: "Connecting to Hyderabad Concierge..." },
      { at: 100, text: "Welcome to Hyderabad's #1 Elite Service" },
    ];

    let current = 15;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 12) + 14;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setProgress(100);
        setStatusText("Welcome to Hyderabad's #1 Elite Service");

        setTimeout(() => {
          setClosing(true);
          setTimeout(() => {
            setVisible(false);
            window.sessionStorage.setItem("hed_vip_preloader_seen", "true");
          }, 350);
        }, 250);
      } else {
        setProgress(current);
        const match = statuses.find((s) => current <= s.at);
        if (match) setStatusText(match.text);
      }
    }, 45);

    const safetyTimer = setTimeout(() => {
      clearInterval(interval);
      setClosing(true);
      setTimeout(() => {
        setVisible(false);
        window.sessionStorage.setItem("hed_vip_preloader_seen", "true");
      }, 300);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimer);
    };
  }, [isClient]);

  const handleDismiss = () => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      window.sessionStorage.setItem("hed_vip_preloader_seen", "true");
    }, 200);
  };

  if (!isClient || !visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Welcome VIP Loader"
      onClick={handleDismiss}
      className={`fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#070407] px-6 transition-all duration-300 ease-out select-none cursor-pointer ${
        closing ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(225,29,116,0.25)_0%,_rgba(245,179,36,0.12)_35%,_transparent_75%)] pointer-events-none" />

      {/* Center Luxury Card */}
      <div
        className="relative z-10 flex flex-col items-center max-w-sm w-full text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Animated VIP Royal Monogram Crest */}
        <div className="relative mb-6 flex items-center justify-center">
          {/* Pulsing ambient glow */}
          <div className="absolute -inset-5 rounded-full bg-gradient-to-r from-[#e11d74] to-[#f5b324] opacity-35 blur-xl animate-pulse" />

          {/* Outer rotating dashed orbital */}
          <div className="h-28 w-28 rounded-full border-2 border-dashed border-[#f5b324]/60 animate-[spin_6s_linear_infinite]" />

          {/* Inner counter-rotating ring */}
          <div className="absolute h-24 w-24 rounded-full border border-t-2 border-t-[#e11d74] border-r-transparent border-b-[#f5b324] border-l-transparent animate-[spin_2.5s_linear_infinite_reverse]" />

          {/* Central 24K Gold Luxury Emblem */}
          <div className="absolute flex h-20 w-20 flex-col items-center justify-center rounded-full bg-[#140a12] border-2 border-[#f5b324]/70 shadow-[0_0_30px_rgba(245,179,36,0.45)]">
            <Crown className="size-8 text-[#f5b324] drop-shadow-[0_0_10px_rgba(245,179,36,0.9)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#e11d74] -mt-0.5">
              VIP
            </span>
          </div>
        </div>

        {/* Brand Titles */}
        <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#e11d74]">
          <Sparkles className="size-3.5 text-[#f5b324]" />
          <span>Best Escorts In Hyderabad</span>
        </div>

        <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-black uppercase tracking-widest text-[#f5b324] drop-shadow-[0_2px_12px_rgba(245,179,36,0.4)]">
          {siteConfig.siteName}
        </h2>

        <p className="mt-1 text-[11px] font-extrabold uppercase tracking-[0.2em] text-zinc-400">
          Hyderabad&apos;s #1 Elite Service
        </p>

        {/* Progress Bar Container */}
        <div className="mt-6 w-full max-w-[280px]">
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/10 border border-white/10 shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-[#e11d74] via-[#f5b324] to-[#22c55e] transition-all duration-100 ease-out shadow-[0_0_15px_rgba(245,179,36,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-3 flex items-center justify-between text-xs font-mono">
            <span className="truncate max-w-[200px] text-left text-zinc-300 font-sans font-medium text-[11px]">
              {statusText}
            </span>
            <span className="font-black text-[#f5b324] text-xs">
              {progress}%
            </span>
          </div>
        </div>

        {/* Enter Button & Trust Pill */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={handleDismiss}
            className="inline-flex items-center gap-2 rounded-full border border-[#f5b324]/60 bg-gradient-to-r from-[#e11d74] to-[#c2185b] px-6 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-[0_4px_20px_rgba(225,29,116,0.4)] transition hover:scale-105 hover:brightness-110 active:scale-95"
          >
            <span>Enter Website</span>
            <ArrowRight className="size-3.5" />
          </button>

          <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-zinc-400">
            <ShieldCheck className="size-3.5 text-[#22c55e]" />
            <span>100% Confidential &amp; Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
}
