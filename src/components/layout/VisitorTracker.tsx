"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function VisitorTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Prevent duplicate triggers in the same tab session within 30 minutes
    const sessionKey = "visit_notified_" + pathname;
    const lastNotified = sessionStorage.getItem(sessionKey);
    const now = Date.now();

    if (!lastNotified || now - Number(lastNotified) > 30 * 60 * 1000) {
      sessionStorage.setItem(sessionKey, String(now));

      const payload = {
        url: window.location.href,
        referrer: document.referrer || "Direct Visit",
        screen: `${window.screen.width}x${window.screen.height} (${window.innerWidth}x${window.innerHeight})`,
        timestamp: new Date().toISOString(),
      };

      fetch("/api/notify-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch((err) => {
        console.warn("Visitor notification ping error:", err);
      });
    }
  }, [pathname]);

  return null;
}
