import Link from "next/link";
import { siteConfig } from "@/config/site";
import { footerGroups } from "@/config/navigation";
import { Phone, MessageCircle } from "lucide-react";
import { LiveViewerCounter } from "@/components/layout/LiveViewerCounter";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#09090b]">
      {/* Live Active Viewers Bar at Bottom of Site */}
      <div className="border-b border-white/10 bg-[#0c0c10] px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <LiveViewerCounter variant="footer" />
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-6 lg:px-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl sm:text-3xl font-black uppercase text-[#f5b324] tracking-wider">
              {siteConfig.siteName}
            </span>
          </div>
          <p className="max-w-sm text-sm text-zinc-400 leading-relaxed">
            {siteConfig.description}
          </p>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`tel:+91${siteConfig.phone}`}
              className="flex items-center gap-2 text-sm font-bold text-white hover:text-[#e11d74] transition-colors"
            >
              <Phone className="size-4 text-[#e11d74] fill-current" />
              <span>Call: +91 {siteConfig.phone}</span>
            </a>
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-[#22c55e] hover:underline"
            >
              <MessageCircle className="size-4 fill-current" />
              <span>Direct WhatsApp Booking</span>
            </a>
          </div>
        </div>

        {Object.entries(footerGroups).map(([title, links]) => (
          <div key={title}>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#f5b324]">{title}</p>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white hover:underline underline-offset-4">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} {siteConfig.siteName}. 100% Genuine, Confidential &amp; Verified Adult Companionship Directory in Hyderabad. All participants are 18+ consenting adults.
      </div>
    </footer>
  );
}
