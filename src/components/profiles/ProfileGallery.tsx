"use client";

import { SmartImage } from "@/components/ui/SmartImage";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X, Image as ImageIcon } from "lucide-react";

export function ProfileGallery({ name, images }: { name: string; images: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeImage = images[selectedIndex] || images[0] || "";

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Hero Photo Container with Top-Aligned Framing */}
      <div className="group relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
        <SmartImage
          src={activeImage}
          alt={`${name} photo ${selectedIndex + 1}`}
          fill
          priority
          className="object-cover object-[center_top] transition-transform duration-500 group-hover:scale-102"
          sizes="(max-width: 768px) 100vw, 45vw"
        />

        {/* Gradient shadow overlay for aesthetic glow */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Counter Badge */}
        <div className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-md px-3 py-1.5 text-xs font-bold text-white border border-white/20 shadow-lg">
          <ImageIcon className="size-3.5 text-[#f5b324]" />
          <span>{selectedIndex + 1} / {images.length}</span>
        </div>

        {/* Lightbox / Fullscreen Button */}
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20 shadow-lg transition hover:bg-[#e11d74] hover:scale-110"
          aria-label="Enlarge image"
        >
          <Maximize2 className="size-4" />
        </button>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex size-10 items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 shadow-lg transition opacity-80 hover:opacity-100 hover:bg-[#e11d74] hover:scale-110"
            aria-label="Previous photo"
          >
            <ChevronLeft className="size-6" />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex size-10 items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 shadow-lg transition opacity-80 hover:opacity-100 hover:bg-[#e11d74] hover:scale-110"
            aria-label="Next photo"
          >
            <ChevronRight className="size-6" />
          </button>
        )}

        {/* Bottom Hint */}
        <div className="absolute bottom-3 left-0 right-0 text-center pointer-events-none">
          <span className="text-[11px] font-medium text-white/80 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
            Click thumbnails below or swipe to see all {images.length} photos
          </span>
        </div>
      </div>

      {/* Thumbnails Row / Grid Showing ALL Photos */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-400">
          <span>All Photos ({images.length})</span>
          <span className="text-[#f5b324]">Click to preview</span>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 sm:gap-3">
          {images.map((image, index) => {
            const isSelected = selectedIndex === index;
            return (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`group relative aspect-[3/4] overflow-hidden rounded-xl border transition-all duration-200 ${
                  isSelected
                    ? "border-[#f5b324] ring-2 ring-[#f5b324]/50 scale-95 shadow-[0_0_12px_rgba(245,179,36,0.5)]"
                    : "border-white/10 opacity-70 hover:opacity-100 hover:border-white/40"
                }`}
                aria-label={`View photo ${index + 1} for ${name}`}
              >
                <SmartImage
                  src={image}
                  alt={`${name} thumbnail ${index + 1}`}
                  fill
                  className="object-cover object-[center_top] transition-transform group-hover:scale-110"
                  sizes="120px"
                />
                {isSelected && (
                  <div className="absolute inset-0 bg-[#f5b324]/10 pointer-events-none" />
                )}
                <span className="absolute bottom-1 right-1 rounded bg-black/70 px-1 text-[9px] font-bold text-white">
                  #{index + 1}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Fullscreen HD Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-50 flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
            aria-label="Close fullscreen"
          >
            <X className="size-6" />
          </button>

          {/* Lightbox Image View */}
          <div
            className="relative h-[80vh] w-full max-w-4xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <SmartImage
              src={activeImage}
              alt={`${name} high resolution`}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          {/* Previous in Lightbox */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 flex size-12 items-center justify-center rounded-full bg-black/70 text-white border border-white/20 hover:bg-[#e11d74] transition"
              aria-label="Previous"
            >
              <ChevronLeft className="size-8" />
            </button>
          )}

          {/* Next in Lightbox */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 flex size-12 items-center justify-center rounded-full bg-black/70 text-white border border-white/20 hover:bg-[#e11d74] transition"
              aria-label="Next"
            >
              <ChevronRight className="size-8" />
            </button>
          )}

          {/* Footer Info */}
          <div className="absolute bottom-6 left-0 right-0 text-center text-white/90 font-medium text-sm">
            {name} — Photo {selectedIndex + 1} of {images.length}
          </div>
        </div>
      )}
    </div>
  );
}
