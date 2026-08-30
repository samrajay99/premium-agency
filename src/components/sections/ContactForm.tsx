"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/config/site";
import { Send, CheckCircle2, Phone, MessageCircle, AlertCircle, Loader2 } from "lucide-react";
import { profiles } from "@/data/profiles";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    companion: "MAHAK (Banjara Hills)",
    location: "Banjara Hills",
    serviceType: "Outcall (Hotel / Luxury Residence)",
    preferredTime: "Immediate / Today",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSent(true);
      } else {
        setError(data.error || "Failed to submit enquiry. Please call us directly.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error while submitting. Please call or WhatsApp us directly.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-[#22c55e]/50 bg-[#0f1f14] p-8 sm:p-10 text-center shadow-2xl space-y-6" role="status">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#22c55e]/20 text-[#22c55e]">
          <CheckCircle2 className="size-10" />
        </div>

        <div>
          <h3 className="font-serif text-2xl sm:text-3xl font-black uppercase text-white">
            Booking Enquiry Received!
          </h3>
          <p className="mt-2 text-sm sm:text-base text-zinc-300 max-w-md mx-auto">
            Thank you, <strong className="text-[#f5b324]">{formData.name}</strong>. Your message has been sent directly to our private concierge management.
          </p>
          <p className="mt-1 text-xs text-zinc-400">
            Our booking manager will contact you on <strong className="text-[#22c55e]">{formData.phone}</strong> within 10-15 minutes.
          </p>
        </div>

        {/* Instant Contact CTA */}
        <div className="pt-4 border-t border-white/10 max-w-md mx-auto space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">Want immediate confirmation?</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={`tel:+91${siteConfig.phone}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#e11d74] py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-md transition hover:bg-[#d81657]"
            >
              <Phone className="size-4 fill-current" />
              <span>Call Now</span>
            </a>
            <a
              href={`https://wa.me/91${siteConfig.whatsapp}?text=${encodeURIComponent(`Hello, I just submitted an enquiry for ${formData.companion}`)}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#22c55e] py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-md transition hover:bg-[#16a34a]"
            >
              <MessageCircle className="size-4.5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <button
          className="mt-6 text-xs text-zinc-400 underline hover:text-white transition"
          type="button"
          onClick={() => setSent(false)}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="rounded-3xl border border-white/10 bg-[#141418] p-6 sm:p-10 shadow-2xl space-y-6" onSubmit={submit}>
      <div className="space-y-1">
        <h2 className="font-serif text-2xl sm:text-3xl font-black uppercase text-[#f5b324]">
          Book Private Companionship
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          Discreet, 100% confidential booking enquiry dispatched directly to management.
        </p>
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-xl border border-red-500/40 bg-red-950/40 p-4 text-xs font-semibold text-red-300">
          <AlertCircle className="size-4.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
            Your Name / Alias <span className="text-[#e11d74]">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="e.g. Rahul / Vikram"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-[#f5b324] focus:outline-none focus:ring-1 focus:ring-[#f5b324]"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
            Phone / WhatsApp Number <span className="text-[#e11d74]">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="e.g. 9876543210"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-[#f5b324] focus:outline-none focus:ring-1 focus:ring-[#f5b324]"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
            Email Address (Optional)
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="e.g. client@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-[#f5b324] focus:outline-none focus:ring-1 focus:ring-[#f5b324]"
          />
        </div>

        {/* Model Selection */}
        <div>
          <label htmlFor="companion" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
            Select Companion
          </label>
          <select
            id="companion"
            name="companion"
            value={formData.companion}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-white focus:border-[#f5b324] focus:outline-none focus:ring-1 focus:ring-[#f5b324]"
          >
            {profiles.map((p) => (
              <option key={p.slug} value={`${p.name} (${p.area})`} className="bg-[#141418] text-white">
                {p.name} — {p.category} ({p.area})
              </option>
            ))}
            <option value="General Agency Enquiry" className="bg-[#141418] text-white">
              Any Available VIP Model
            </option>
          </select>
        </div>

        {/* Location / Area */}
        <div>
          <label htmlFor="location" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
            Location in Hyderabad
          </label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-white focus:border-[#f5b324] focus:outline-none focus:ring-1 focus:ring-[#f5b324]"
          >
            <option value="Banjara Hills" className="bg-[#141418]">Banjara Hills</option>
            <option value="Jubilee Hills" className="bg-[#141418]">Jubilee Hills</option>
            <option value="Gachibowli" className="bg-[#141418]">Gachibowli</option>
            <option value="Hitech City" className="bg-[#141418]">Hitech City</option>
            <option value="Madhapur" className="bg-[#141418]">Madhapur</option>
            <option value="Kondapur" className="bg-[#141418]">Kondapur</option>
            <option value="Kukatpally" className="bg-[#141418]">Kukatpally</option>
            <option value="Miyapur" className="bg-[#141418]">Miyapur</option>
            <option value="Secunderabad" className="bg-[#141418]">Secunderabad</option>
            <option value="Other Hotel / Residence" className="bg-[#141418]">Other Hotel / Residence</option>
          </select>
        </div>

        {/* Service Type */}
        <div>
          <label htmlFor="serviceType" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
            Service Preference
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-white focus:border-[#f5b324] focus:outline-none focus:ring-1 focus:ring-[#f5b324]"
          >
            <option value="Outcall (5-Star Hotel / Luxury Residence)" className="bg-[#141418]">Outcall (5-Star Hotel / Residence)</option>
            <option value="Incall (Sanitized Private Apartment)" className="bg-[#141418]">Incall (Private Apartment)</option>
            <option value="Dinner / Social Date" className="bg-[#141418]">Dinner / Social Date</option>
            <option value="Overnight Companion" className="bg-[#141418]">Overnight Companion</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
          Special Requests / Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Please share any timing preferences, hotel name, or questions..."
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-[#f5b324] focus:outline-none focus:ring-1 focus:ring-[#f5b324] resize-y"
        />
      </div>

      {/* Submit CTA */}
      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#e11d74] to-[#f5b324] py-4 text-sm sm:text-base font-black uppercase tracking-wider text-white shadow-[0_10px_30px_rgba(225,29,116,0.35)] transition hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 className="size-5 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send className="size-5" />
            <span>Send Booking Enquiry Directly to Management</span>
          </>
        )}
      </button>

      <div className="flex items-center justify-center gap-2 text-center text-xs text-zinc-400">
        <CheckCircle2 className="size-3.5 text-[#22c55e]" />
        <span>Your information is strictly confidential and never shared with third parties.</span>
      </div>
    </form>
  );
}