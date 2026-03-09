import type React from "react";
import AnimateIn from "@/components/ui/AnimateIn";
import {
  Database,
  TrendingUp,
  MessageSquare,
  Calendar,
  Lock,
  Smartphone,
} from "lucide-react";

const features: {
  icon: React.ElementType;
  title: string;
  description: string;
  tags: string[];
  accent: string;
  coming?: boolean;
}[] = [
  {
    icon: Database,
    title: "Multimodal Data Vault",
    description:
      "Connect wearables, add journaling notes, and log incident narratives. Everything lives in your encrypted user-controlled vault.",
    tags: ["Oura", "Fitbit", "Apple Health"],
    accent: "bg-igni-forest",
  },
  {
    icon: TrendingUp,
    title: "Continuity Intelligence Timeline",
    description:
      "A unified 30-day view of sleep, HRV, activity, and events — with rule-based detectors that explain exactly why a trend matters.",
    tags: ["Sleep trends", "HRV baseline", "Activity shifts"],
    accent: "bg-igni-sage",
  },
  {
    icon: MessageSquare,
    title: "Care Circle Chat",
    description:
      "Multilingual, role-aware chat grounded in your timeline. Summarize your last 30 days, draft visit questions, or share updates with family.",
    tags: ["Multilingual", "Role-aware", "Timeline-grounded"],
    accent: "bg-igni-coral",
    coming: true,
  },
  {
    icon: Calendar,
    title: "Automated Workflows",
    description:
      "Daily EMA check-ins, incident reports, and post-session surveys run on schedule and write directly to your timeline.",
    tags: ["EMA check-ins", "Incident logs", "Post-session surveys"],
    accent: "bg-igni-forest",
    coming: true,
  },
  {
    icon: Lock,
    title: "Visit Share Pack",
    description:
      "Generate a consented, clinician-ready PDF summary in seconds. Set expiry, choose what's included, and revoke access at any time.",
    tags: ["Consent artifact", "Expiring links", "Full revocation"],
    accent: "bg-igni-sage",
  },
  {
    icon: Smartphone,
    title: "Privacy by Architecture",
    description:
      "Keys anchored on your device. Raw audio off by default. No EHR writeback. You are the data controller — not us, not your clinic.",
    tags: ["On-device keys", "No PHI processing", "GDPR-ready"],
    accent: "bg-igni-coral",
  },
];

export default function Features() {
  return (
    <section className="py-24 lg:py-32 bg-igni-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimateIn className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block text-igni-sage text-sm font-semibold uppercase tracking-wider mb-3">
            Platform Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-igni-charcoal leading-tight mb-4">
            Everything your care team needs.{" "}
            <span className="text-igni-sage">Nothing they don&apos;t.</span>
          </h2>
          <p className="text-igni-slate text-lg leading-relaxed">
            Built for the consumer first. Designed to be clinically useful
            without requiring your provider to onboard.
          </p>
        </AnimateIn>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description, tags, accent, coming }, i) => (
            <AnimateIn key={title} delay={(i % 3) * 0.1}>
            <div
              className="bg-white rounded-2xl p-8 border border-igni-mint/20 hover:border-igni-sage/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 ${accent} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}
              >
                <Icon size={22} className="text-white" />
              </div>

              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-igni-charcoal">
                  {title}
                </h3>
                {coming && (
                  <span className="shrink-0 text-xs font-semibold text-igni-coral bg-igni-coral/10 px-2.5 py-1 rounded-full">
                    V2
                  </span>
                )}
              </div>
              <p className="text-igni-slate text-sm leading-relaxed mb-5">
                {description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-igni-sage bg-igni-mint/20 px-2.5 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
