import type { ReactNode } from "react";

export function Badge({
  children,
  tone = "gold",
}: {
  children: ReactNode;
  tone?: "gold" | "muted" | "success";
}) {
  const tones = {
    gold: "border-gold/30 text-gold",
    muted: "border-line text-muted",
    success: "border-emerald-400/30 text-emerald-300",
  };
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs ${tones[tone]}`}>
      {children}
    </span>
  );
}
