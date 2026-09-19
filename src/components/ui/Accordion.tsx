"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

export function Accordion({
  items,
}: {
  items: { id: string; question: string; answer: string }[];
}) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-white/10 rounded-3xl border border-white/10 overflow-hidden bg-[#100912]/60">
      {items.map((item) => {
        const open = openId === item.id;
        const panelId = `${baseId}-${item.id}-panel`;
        const buttonId = `${baseId}-${item.id}-button`;
        return (
          <div
            key={item.id}
            className={`transition-colors duration-200 ${
              open ? "bg-white/[0.03]" : "hover:bg-white/[0.015]"
            }`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-3.5 px-5 sm:px-6 py-4 text-left cursor-pointer group"
                onClick={() => setOpenId(open ? null : item.id)}
              >
                <div className="flex items-center gap-3">
                  {/* Distinct Q badge in Gold */}
                  <span
                    className={`flex size-7 shrink-0 items-center justify-center rounded-lg text-xs font-black transition-all ${
                      open
                        ? "bg-[#f5b324] text-black shadow-md shadow-[#f5b324]/20"
                        : "bg-[#f5b324]/15 border border-[#f5b324]/30 text-[#f5b324] group-hover:bg-[#f5b324]/25"
                    }`}
                  >
                    Q
                  </span>
                  {/* Question Text in Gold */}
                  <span
                    className={`text-sm sm:text-base font-bold transition-colors ${
                      open
                        ? "text-[#f5b324]"
                        : "text-[#ffd470] group-hover:text-[#f5b324]"
                    }`}
                  >
                    {item.question}
                  </span>
                </div>
                <ChevronDown
                  className={`size-4.5 shrink-0 transition-transform duration-300 ${
                    open ? "rotate-180 text-[#f5b324]" : "text-zinc-400 group-hover:text-zinc-200"
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className="px-5 sm:px-6 pb-5 pt-1 animate-in fade-in duration-200"
            >
              <div className="flex items-start gap-3 rounded-2xl border-l-2 border-[#e11d74] bg-[#1a0f1b]/70 p-4 shadow-inner">
                {/* Distinct A badge in Pink */}
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#e11d74]/20 border border-[#e11d74]/40 text-[#e11d74] text-xs font-black mt-0.5">
                  A
                </span>
                {/* Answer Text in Clean High-Contrast Light Zinc */}
                <p className="text-sm sm:text-[15px] leading-relaxed text-[#e4e4e7]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
