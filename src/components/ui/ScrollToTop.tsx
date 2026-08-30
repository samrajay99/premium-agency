"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility(); // Check initial position
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      className={`fixed bottom-24 right-4 sm:bottom-24 sm:right-6 z-40 flex size-12 items-center justify-center rounded-full border border-[#f5b324]/50 bg-[#16101c]/95 text-[#f5b324] shadow-[0_8px_30px_rgba(245,179,36,0.4)] backdrop-blur-xl transition-all duration-300 hover:bg-[#f5b324] hover:text-black hover:scale-110 active:scale-95 cursor-pointer group ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="size-5 transition-transform duration-200 group-hover:-translate-y-1" />
      <span className="sr-only">Scroll back to top</span>
    </button>
  );
}
