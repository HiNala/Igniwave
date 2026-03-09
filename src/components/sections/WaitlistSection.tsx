"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";
import { buttonVariants } from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import HandDrawnCircle from "@/components/icons/HandDrawnCircle";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();

    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // "website" is the honeypot — always empty from real submissions
        body: JSON.stringify({ email: trimmed, website: "" }),
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
    <Section bg="cream" id="waitlist" className="py-24 md:py-32">
      <Container size="narrow">
        <div className="text-center">
          {/* Heading with HandDrawnCircle accent on "First" */}
          <AnimateIn>
            <h2 className="font-display text-4xl md:text-5xl text-igni-forest leading-tight text-balance mb-6">
              Be{" "}
              <span className="relative inline-block px-1.5 pb-1">
                <HandDrawnCircle color="#E87461" delay={0.35} />
                <span className="relative z-10">First</span>
              </span>
              {" "}to Take Control
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <p className="font-sans text-lg md:text-xl text-igni-slate leading-relaxed max-w-xl mx-auto mb-10">
              Join the Igniwave early access program. Connect your wearable.
              See your timeline. Share on your terms.
            </p>
          </AnimateIn>

          {/* Form or success state */}
          {status === "success" ? (
            <AnimateIn from="none">
              <div role="status" aria-live="polite" className="flex flex-col items-center gap-4 py-4">
                <div className="w-16 h-16 rounded-full bg-igni-sage/15 flex items-center justify-center">
                  <CheckCircle size={32} className="text-igni-sage" />
                </div>
                <div>
                  <p className="font-sans font-bold text-xl text-igni-charcoal mb-1">
                    You&apos;re on the list!
                  </p>
                  <p className="font-sans text-igni-slate">
                    We&apos;ll reach out as soon as early access opens.
                  </p>
                </div>
              </div>
            </AnimateIn>
          ) : (
            <AnimateIn delay={0.18}>
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4"
              >
                {/* Honeypot — hidden from real users, catches bots */}
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

                <div className="flex-1">
                  <label htmlFor="waitlist-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="waitlist-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") {
                        setStatus("idle");
                        setErrorMsg("");
                      }
                    }}
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                    disabled={status === "loading"}
                    aria-describedby={errorMsg ? "waitlist-error" : undefined}
                    className="w-full px-5 py-3.5 rounded-xl border border-igni-mint/40 bg-white text-igni-charcoal placeholder:text-igni-slate/50 focus:outline-none focus:ring-2 focus:ring-igni-sage/30 focus:border-igni-sage font-sans text-[15px] disabled:opacity-60 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={
                    buttonVariants({ variant: "primary", size: "md" }) +
                    " shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
                  }
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <Loader2 size={15} className="animate-spin" />
                      Joining…
                    </span>
                  ) : (
                    "Join the Waitlist"
                  )}
                </button>
              </form>

              {errorMsg && (
                <p
                  id="waitlist-error"
                  role="alert"
                  className="font-sans text-sm text-igni-coral mt-1 mb-3"
                >
                  {errorMsg}
                </p>
              )}
            </AnimateIn>
          )}

          {/* Trust microcopy */}
          <AnimateIn delay={0.26} from="none">
            <p className="font-sans text-sm text-igni-slate/55 mt-6">
              We&apos;ll never spam you. Unsubscribe anytime. Your email is
              stored securely.
            </p>
          </AnimateIn>
        </div>
      </Container>
    </Section>
  );
}
