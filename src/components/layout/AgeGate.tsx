"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

export function AgeGate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(window.sessionStorage.getItem("hed-age") !== "yes"), 0);
    return () => window.clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4">
      <div role="dialog" aria-labelledby="age-title" aria-modal="true" className="max-w-md rounded-3xl border border-line bg-bg-elevated p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-gold">18+ notice</p>
        <h2 id="age-title" className="mt-3 font-serif text-3xl">
          Confirm you are 18 or older
        </h2>
        <p className="mt-4 text-sm text-muted">
          This directory demo contains adult-oriented companionship listings. Imagery is non-explicit. Profiles are fictional. Confirm only if you are legally an adult in your region.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            type="button"
            onClick={() => {
              window.sessionStorage.setItem("hed-age", "yes");
              setOpen(false);
            }}
          >
            I am 18 or older
          </Button>
          <Button href="https://www.google.com" variant="secondary">
            Exit
          </Button>
        </div>
      </div>
    </div>
  );
}
