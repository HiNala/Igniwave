"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section
      id="waitlist"
      className="py-24 lg:py-32 bg-igni-warm"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-igni-sage text-sm font-semibold uppercase tracking-wider mb-3">
            Early Access
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-igni-charcoal leading-tight mb-4">
            Be first to experience Igniwave
          </h2>
          <p className="text-igni-slate text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            We&apos;re onboarding a small group of early users. Join the waitlist
            and get early access, plus input on what we build next.
          </p>

          {status === "success" ? (
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-igni-sage/20 flex items-center justify-center">
                <CheckCircle size={32} className="text-igni-sage" />
              </div>
              <div>
                <p className="text-xl font-bold text-igni-charcoal mb-1">
                  You&apos;re on the list!
                </p>
                <p className="text-igni-slate">
                  We&apos;ll reach out as soon as early access opens. Thank you.
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-5 py-3.5 rounded-full border border-igni-mint/40 bg-white text-igni-charcoal placeholder:text-igni-slate/60 focus:outline-none focus:ring-2 focus:ring-igni-sage/30 focus:border-igni-sage text-sm"
                  disabled={status === "loading"}
                />
                {errorMsg && (
                  <p className="text-igni-coral text-xs mt-1.5 pl-4">
                    {errorMsg}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-igni-forest text-white font-semibold text-sm hover:bg-igni-sage transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed shrink-0"
              >
                {status === "loading" ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            {[
              "No spam, ever",
              "Unsubscribe anytime",
              "Privacy-first by default",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-1.5 text-igni-slate text-sm"
              >
                <CheckCircle size={14} className="text-igni-sage" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
