"use client";

import { SmartImage } from "@/components/ui/SmartImage";
import { useState } from "react";

export function ProfileGallery({ name, images }: { name: string; images: string[] }) {
  const [active, setActive] = useState(images[0] ?? "");

  return (
    <div className="grid gap-3">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line">
        <SmartImage src={active} alt={`Selected gallery illustration for ${name}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActive(image)}
            className={`relative aspect-square overflow-hidden rounded-2xl border ${active === image ? "border-gold" : "border-line"}`}
            aria-label={`Show gallery image ${index + 1} for ${name}`}
          >
            <SmartImage src={image} alt="" fill className="object-cover" sizes="120px" />
          </button>
        ))}
      </div>
    </div>
  );
}
