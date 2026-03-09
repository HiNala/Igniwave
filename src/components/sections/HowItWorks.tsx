import { Watch, LineChart, FileText, ArrowRight } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";

const steps = [
  {
    step: "01",
    icon: Watch,
    title: "Connect Your Wearable",
    description:
      "Securely link your Oura, Fitbit, Garmin, or Apple Health. We pull up to 30 days of history and sync daily — sleep, activity, HRV, and heart rate.",
    detail: "OAuth secure · 30-day backfill · Daily sync",
  },
  {
    step: "02",
    icon: LineChart,
    title: "See Your Unified Timeline",
    description:
      "All your signals fused into one intelligent view. Rule-based detectors surface meaningful changes — sleep debt streaks, HRV dips, activity shifts — with plain-language explanations.",
    detail: "Explainable insights · Evidence-backed · No black boxes",
  },
  {
    step: "03",
    icon: FileText,
    title: "Share on Your Terms",
    description:
      "Generate a consented Visit Share Pack in seconds. Choose what's included, set an expiry, and hand it to your clinician. You control every share, every time.",
    detail: "PDF export · Consent artifact · Revocable anytime",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 lg:py-32 bg-igni-forest text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimateIn className="max-w-2xl mb-16 lg:mb-20">
          <span className="inline-block text-igni-mint text-sm font-semibold uppercase tracking-wider mb-3">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            The future of health data sharing{" "}
            <span className="text-igni-mint">is here</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Three steps from raw wearable data to a clinician-ready intelligence
            brief — all staying in your hands the entire time.
          </p>
        </AnimateIn>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-linear-to-r from-transparent via-igni-mint/30 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map(({ step, icon: Icon, title, description, detail }, i) => (
              <AnimateIn key={step} delay={i * 0.15}>
              <div className="relative group">
                <div className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-igni-mint/30 rounded-2xl p-8 transition-all duration-300">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-igni-sage/20 border border-igni-mint/20 flex items-center justify-center group-hover:bg-igni-sage/30 transition-colors">
                      <Icon size={22} className="text-igni-mint" />
                    </div>
                    <span className="text-4xl font-black text-white/8 select-none">
                      {step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                  <p className="text-white/65 leading-relaxed text-sm mb-5">
                    {description}
                  </p>

                  {/* Detail tag */}
                  <div className="flex flex-wrap gap-1.5">
                    {detail.split(" · ").map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-igni-mint/80 bg-igni-mint/10 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow connector (visible between cards on desktop) */}
                {step !== "03" && (
                  <div className="hidden lg:flex absolute top-16 -right-6 w-12 h-12 items-center justify-center z-10">
                    <ArrowRight
                      size={20}
                      className="text-igni-mint/40"
                    />
                  </div>
                )}
              </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Product preview callout */}
        <AnimateIn delay={0.2}>
        <div className="mt-16 bg-white/5 border border-igni-mint/20 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">
              Privacy by architecture, not just policy
            </h3>
            <p className="text-white/65 leading-relaxed">
              In Igniwave v1, you are the data controller. Nothing leaves your
              vault without your explicit action. Clinicians receive only what
              you choose to share, in a format designed for them — not a portal
              login they control.
            </p>
          </div>
          <div className="shrink-0 grid grid-cols-2 gap-3">
            {[
              "No EHR writeback",
              "No clinic admin",
              "User-initiated only",
              "Revoke anytime",
            ].map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-2 bg-igni-forest border border-igni-mint/15 rounded-xl px-4 py-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-igni-mint shrink-0" />
                <span className="text-white/80 text-sm font-medium">{tag}</span>
              </div>
            ))}
          </div>
        </div>
        </AnimateIn>
      </div>
    </section>
  );
}
