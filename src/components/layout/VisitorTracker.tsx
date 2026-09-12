"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface VisitorMetadata {
  url: string;
  pathname: string;
  referrer: string;
  screen: string;
  viewport: string;
  pixelRatio: string;
  colorDepth: string;
  orientation: string;
  deviceMemory: string;
  cpuCores: string;
  touchSupport: string;
  battery: string;
  networkType: string;
  downlink: string;
  rtt: string;
  dataSaver: string;
  themePreference: string;
  timezone: string;
  localTime: string;
  language: string;
  languages: string;
  platform: string;
  action: string;
  timestamp: string;
  campaignParams: Record<string, string>;
}

function collectQuickTelemetry(action = "Page Load / Browse Interaction"): VisitorMetadata {
  const urlObj = new URL(window.location.href);
  const campaignParams: Record<string, string> = {};
  urlObj.searchParams.forEach((val, key) => {
    if (
      key.startsWith("utm_") ||
      key === "gclid" ||
      key === "fbclid" ||
      key === "ref" ||
      key === "source"
    ) {
      campaignParams[key] = val;
    }
  });

  const conn = (navigator as unknown as {
    connection?: {
      effectiveType?: string;
      downlink?: number;
      rtt?: number;
      saveData?: boolean;
    };
  }).connection;

  const nav = navigator as unknown as { deviceMemory?: number };

  return {
    url: window.location.href,
    pathname: window.location.pathname,
    referrer: document.referrer || "Direct Visit / Bookmark",
    screen: `${window.screen.width}x${window.screen.height}`,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    pixelRatio: `${window.devicePixelRatio || 1}x`,
    colorDepth: `${window.screen.colorDepth || 24}-bit`,
    orientation: window.screen.orientation?.type || "unknown",
    deviceMemory: nav.deviceMemory ? `~${nav.deviceMemory} GB RAM` : "Standard",
    cpuCores: navigator.hardwareConcurrency ? `${navigator.hardwareConcurrency} Cores` : "Standard",
    touchSupport: navigator.maxTouchPoints > 0 ? `Touch (${navigator.maxTouchPoints} pts)` : "Mouse Only",
    battery: "Optimized / Idle",
    networkType: conn?.effectiveType ? conn.effectiveType.toUpperCase() : "Unknown Network",
    downlink: conn?.downlink ? `${conn.downlink} Mbps` : "N/A",
    rtt: conn?.rtt ? `${conn.rtt} ms Latency` : "N/A",
    dataSaver: conn?.saveData ? "Active" : "Off",
    themePreference: window.matchMedia("(prefers-color-scheme: dark)").matches ? "Dark Theme" : "Light Theme",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown",
    localTime: new Date().toLocaleTimeString(),
    language: navigator.language || "Unknown",
    languages: navigator.languages ? navigator.languages.slice(0, 3).join(", ") : navigator.language || "Unknown",
    platform: navigator.platform || "Unknown",
    action,
    timestamp: new Date().toISOString(),
    campaignParams,
  };
}

export function VisitorTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const sessionKey = "visit_notified_" + pathname;
    const lastNotified = sessionStorage.getItem(sessionKey);
    const now = Date.now();

    if (!lastNotified || now - Number(lastNotified) > 15 * 60 * 1000) {
      sessionStorage.setItem(sessionKey, String(now));

      // Defer network notification to browser idle time so user navigation is 100% instantaneous
      const sendTracking = () => {
        try {
          const payload = collectQuickTelemetry("Live Page Interaction");
          fetch("/api/notify-visit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            keepalive: true,
          }).catch(() => {});
        } catch {
          // ignore
        }
      };

      if (typeof window.requestIdleCallback === "function") {
        window.requestIdleCallback(sendTracking, { timeout: 2000 });
      } else {
        setTimeout(sendTracking, 1000);
      }
    }

    // Global listener for WhatsApp and Phone Call clicks anywhere on the site
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;

      const href = target.getAttribute("href") || "";
      const isWa = href.includes("wa.me") || href.includes("whatsapp.com") || href.includes("api.whatsapp");
      const isTel = href.startsWith("tel:");

      if (isWa || isTel) {
        try {
          const buttonText = target.innerText?.replace(/\s+/g, " ").trim() || "";
          let actionLabel = isWa
            ? "💬 User Clicked WhatsApp Message Button"
            : "📞 User Clicked Direct Phone Call Button";

          if (buttonText) {
            actionLabel += ` [Button: "${buttonText.slice(0, 60)}"]`;
          }

          const payload = collectQuickTelemetry(actionLabel);
          fetch("/api/notify-visit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            keepalive: true,
          }).catch(() => {});
        } catch {
          // ignore
        }
      }
    };

    document.addEventListener("click", handleGlobalClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleGlobalClick, { capture: true });
    };
  }, [pathname]);

  return null;
}
