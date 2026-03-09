import { Lock, ShieldCheck, UserCheck, Eye, ArrowRight } from "lucide-react";
import Link from "next/link";

const trustPillars = [
  {
    icon: Lock,
    title: "End-to-End Encrypted",
    description:
      "Your data vault is encrypted at rest. Keys are generated on your device — the server stores ciphertext only.",
  },
  {
    icon: UserCheck,
    title: "User-Controlled",
    description:
      "You are the data controller, not your clinic. Nothing leaves your vault without an explicit action from you.",
  },
  {
    icon: ShieldCheck,
    title: "Non-HIPAA V1 (Consumer Wellness)",
    description:
      "Igniwave V1 is a consumer wellness platform. You own your data — we are not a covered entity processing PHI.",
  },
  {
    icon: Eye,
    title: "No Data Sales. Ever.",
    description:
      "We will never sell, rent, or broker your health data. Revenue comes from subscriptions — not from your information.",
  },
];

export default function Trust() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-igni-sage text-sm font-semibold uppercase tracking-wider mb-3">
            Built on Trust
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-igni-charcoal leading-tight mb-4">
            Your privacy isn&apos;t a feature.{" "}
            <span className="text-igni-sage">It&apos;s the foundation.</span>
          </h2>
          <p className="text-igni-slate text-lg leading-relaxed">
            Every architectural decision — from key management to data sharing
            flows — is evaluated against one question: does this give the user
            more control, or less?
          </p>
        </div>

        {/* Trust pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustPillars.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-igni-cream rounded-2xl p-7 border border-igni-mint/20 flex flex-col gap-4"
            >
              <div className="w-11 h-11 bg-igni-forest rounded-xl flex items-center justify-center shrink-0">
                <Icon size={20} className="text-igni-mint" />
              </div>
              <div>
                <h3 className="text-base font-bold text-igni-charcoal mb-1.5">
                  {title}
                </h3>
                <p className="text-igni-slate text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Founding principle callout */}
        <div className="bg-igni-forest rounded-3xl p-10 lg:p-14 grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3">
            <p className="text-igni-mint text-sm font-semibold uppercase tracking-wider mb-4">
              Founding Principle
            </p>
            <blockquote className="text-2xl lg:text-3xl font-bold text-white leading-snug mb-4">
              &ldquo;The patient has the most data. They just need the right
              tool to make it legible — and the right to decide who sees it.&rdquo;
            </blockquote>
            <p className="text-white/60 text-sm">
              The belief that drives every product decision at Igniwave.
            </p>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-4">
            <p className="text-white/70 text-sm leading-relaxed">
              We&apos;re building Igniwave in public, with a small group of
              early adopters who share this belief. Join the pilot program and
              help shape the product.
            </p>
            <Link
              href="#waitlist"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-igni-coral text-white font-semibold text-sm hover:bg-igni-coral/90 transition-colors w-fit"
            >
              Join the Pilot Program
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
