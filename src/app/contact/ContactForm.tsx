"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";

const ROLES = [
  { value: "", label: "I am a…" },
  { value: "individual_family", label: "Individual / Family" },
  { value: "clinician_bcba", label: "Clinician / BCBA" },
  { value: "provider_org", label: "Provider Organization" },
  { value: "partner_investor", label: "Partner / Investor" },
  { value: "other", label: "Other" },
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, role, message, website: "" }),
      });

      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("Network error. Please email us directly at hello@igniwave.com.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="flex flex-col items-center justify-center gap-4 py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-igni-sage/15 flex items-center justify-center">
          <CheckCircle size={32} className="text-igni-sage" />
        </div>
        <div>
          <p className="font-sans font-bold text-xl text-igni-charcoal mb-1">
            Message sent!
          </p>
          <p className="font-sans text-igni-slate">
            We&apos;ll respond within 48 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        defaultValue=""
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        readOnly
      />

      <div>
        <label htmlFor="cf-name" className="block font-sans text-sm font-semibold text-igni-charcoal mb-1.5">
          Name <span className="text-igni-coral">*</span>
        </label>
        <input
          id="cf-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
          disabled={status === "loading"}
          className="w-full px-4 py-3 rounded-xl border border-igni-mint/40 bg-white font-sans text-igni-charcoal placeholder:text-igni-slate/50 focus:outline-none focus:ring-2 focus:ring-igni-sage/30 focus:border-igni-sage text-[15px] disabled:opacity-60 transition-colors"
        />
      </div>

      <div>
        <label htmlFor="cf-email" className="block font-sans text-sm font-semibold text-igni-charcoal mb-1.5">
          Email <span className="text-igni-coral">*</span>
        </label>
        <input
          id="cf-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          autoComplete="email"
          disabled={status === "loading"}
          className="w-full px-4 py-3 rounded-xl border border-igni-mint/40 bg-white font-sans text-igni-charcoal placeholder:text-igni-slate/50 focus:outline-none focus:ring-2 focus:ring-igni-sage/30 focus:border-igni-sage text-[15px] disabled:opacity-60 transition-colors"
        />
      </div>

      <div>
        <label htmlFor="cf-role" className="block font-sans text-sm font-semibold text-igni-charcoal mb-1.5">
          I am a…
        </label>
        <select
          id="cf-role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          disabled={status === "loading"}
          className="w-full px-4 py-3 rounded-xl border border-igni-mint/40 bg-white font-sans text-igni-charcoal focus:outline-none focus:ring-2 focus:ring-igni-sage/30 focus:border-igni-sage text-[15px] disabled:opacity-60 transition-colors"
        >
          {ROLES.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className="block font-sans text-sm font-semibold text-igni-charcoal mb-1.5">
          Message <span className="text-igni-coral">*</span>
        </label>
        <textarea
          id="cf-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what's on your mind…"
          required
          rows={5}
          disabled={status === "loading"}
          className="w-full px-4 py-3 rounded-xl border border-igni-mint/40 bg-white font-sans text-igni-charcoal placeholder:text-igni-slate/50 focus:outline-none focus:ring-2 focus:ring-igni-sage/30 focus:border-igni-sage text-[15px] disabled:opacity-60 transition-colors resize-y"
        />
      </div>

      {errorMsg && (
        <p role="alert" className="font-sans text-sm text-igni-coral">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className={
          buttonVariants({ variant: "primary", size: "md" }) +
          " w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
        }
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <Loader2 size={15} className="animate-spin" />
            Sending…
          </span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
