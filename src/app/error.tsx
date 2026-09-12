"use client";

import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { RotateCcw, Home } from "lucide-react";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <SiteShell>
      <main className="min-h-[60vh] flex items-center justify-center px-6 py-20 text-foreground">
        <div className="mx-auto max-w-xl text-center rounded-3xl border border-white/10 bg-[#141018] p-8 sm:p-12 shadow-2xl space-y-5">
          <p className="eyebrow text-[#e11d74]">Service Notice</p>
          <h1 className="font-serif text-3xl font-black uppercase text-white">
            Something went wrong
          </h1>
          <p className="text-sm text-zinc-300 leading-relaxed">
            We encountered a temporary issue while loading this content. Please try again or return to the homepage.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e11d74] to-[#f5b324] px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-lg transition hover:scale-105"
              onClick={() => reset()}
            >
              <RotateCcw className="size-4" />
              Try again
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-white hover:border-[#f5b324] transition"
            >
              <Home className="size-4" />
              Return Home
            </Link>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}