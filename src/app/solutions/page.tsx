import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Watch, FileText, Brain, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    icon: Watch,
    title: "Wearable Intelligence",
    subtitle: "Connect. Sync. Understand.",
    description:
      "Link your Oura, Fitbit, Garmin, or Apple Health account. We backfill 30 days of history and sync daily — normalizing sleep, activity, HRV, and resting HR into a unified timeline.",
    features: [
      "OAuth-secured connection",
      "30-day historical backfill",
      "Daily incremental sync",
      "Sleep, HRV, activity, resting HR",
      "Data quality: dedupe + gap handling",
    ],
    status: "Available in V1",
    statusColor: "text-igni-sage bg-igni-mint/20",
  },
  {
    icon: Brain,
    title: "Wellness Continuity Timeline",
    subtitle: "Your story, clearly told.",
    description:
      "A fused, day-by-day view of all your signals with rule-based detectors that surface meaningful changes. Sleep debt streaks, HRV dips, activity drops — all explained in plain language.",
    features: [
      "30-day unified timeline view",
      "Rule-based insight detectors",
      "Explainable provenance for every insight",
      "Sleep, HRV, activity, HR baselines",
      "Cross-signal correlation highlights",
    ],
    status: "Available in V1",
    statusColor: "text-igni-sage bg-igni-mint/20",
  },
  {
    icon: FileText,
    title: "Visit Share Pack",
    subtitle: "Your data, your terms, your clinician.",
    description:
      "Generate a consented, clinician-ready PDF summary in seconds. Choose what to include, set an expiry, and deliver it via download or share link. Revoke access anytime.",
    features: [
      "One-tap PDF export",
      "Consent artifact stored locally",
      "Configurable time window (7/14/30 days)",
      "Category toggles",
      "Revocable share links (Phase 3)",
    ],
    status: "Available in V1",
    statusColor: "text-igni-sage bg-igni-mint/20",
  },
  {
    icon: Globe,
    title: "Care Circle Copilot Chat",
    subtitle: "Multilingual. Role-aware. Timeline-grounded.",
    description:
      "Invite family, caregivers, or providers to a shared chat grounded in your timeline. Each member chooses their language. AI summarizes your last 30 days, drafts visit questions, and explains trends.",
    features: [
      "Multi-party chat threads",
      "Inline multilingual translation",
      "Timeline-grounded AI responses",
      "Role-aware access controls",
      "No autonomous diagnosis",
    ],
    status: "Coming in V2",
    statusColor: "text-igni-coral bg-igni-coral/10",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-forest text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block text-igni-mint text-sm font-semibold uppercase tracking-wider mb-3">
                Platform Solutions
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                One platform.{" "}
                <span className="text-igni-mint">Every layer of your health.</span>
              </h1>
              <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
                From wearable sync to clinician-ready exports, Igniwave is built
                to handle the full lifecycle of consumer health data — with
                privacy woven into every step.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-24 bg-igni-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
            {solutions.map(
              ({ icon: Icon, title, subtitle, description, features, status, statusColor }) => (
                <div
                  key={title}
                  className="bg-white rounded-3xl p-8 lg:p-12 border border-igni-mint/20 grid lg:grid-cols-5 gap-8 lg:gap-12"
                >
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-igni-forest rounded-xl flex items-center justify-center shrink-0">
                        <Icon size={22} className="text-igni-mint" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-igni-charcoal leading-tight">
                          {title}
                        </h2>
                        <p className="text-igni-sage text-sm font-medium">
                          {subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-igni-slate leading-relaxed mb-4">
                      {description}
                    </p>
                    <span
                      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${statusColor}`}
                    >
                      {status}
                    </span>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-igni-charcoal text-sm font-semibold uppercase tracking-wide mb-4">
                      Capabilities
                    </p>
                    <ul className="space-y-2.5">
                      {features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-igni-sage mt-1.5 shrink-0" />
                          <span className="text-igni-slate text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-igni-forest text-white text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">
              Ready to see it in action?
            </h2>
            <p className="text-white/70 mb-8">
              Join the waitlist for early access to the V1 platform.
            </p>
            <Link
              href="/#waitlist"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-igni-coral text-white font-semibold hover:bg-igni-coral/90 transition-colors duration-200"
            >
              Join the Waitlist
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
