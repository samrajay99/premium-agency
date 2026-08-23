"use client";

import Link from "next/link";
import { navItems } from "@/config/navigation";
import { Button } from "@/components/ui/Button";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      id="mobile-navigation"
      hidden={!open}
      className={`border-t border-line bg-bg/95 backdrop-blur-xl lg:hidden ${open ? "block" : "hidden"}`}
    >
      <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4" aria-label="Mobile">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="rounded-2xl px-3 py-3 hover:bg-bg-muted" onClick={onClose}>
            {item.label}
          </Link>
        ))}
        <Button href="/contact" className="mt-2">
          Contact
        </Button>
      </nav>
    </div>
  );
}
