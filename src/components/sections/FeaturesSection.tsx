import AnimateIn from "@/components/ui/AnimateIn";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import TimelineIcon from "@/components/icons/features/TimelineIcon";
import HighlightsIcon from "@/components/icons/features/HighlightsIcon";
import SharePackIcon from "@/components/icons/features/SharePackIcon";
import VaultIcon from "@/components/icons/features/VaultIcon";
import ExplainableIcon from "@/components/icons/features/ExplainableIcon";
import CareChatIcon from "@/components/icons/features/CareChatIcon";
import type React from "react";

interface FeatureBadge {
  label: string;
  variant: "default" | "accent" | "outline" | "v2" | "success";
}

interface Feature {
  id: string;
  Icon: React.ComponentType<{ className?: string }>;
  name: string;
  description: string;
  badge?: FeatureBadge;
}

const features: Feature[] = [
  {
    id: "timeline",
    Icon: TimelineIcon,
    name: "Wellness Continuity Timeline",
    description:
      "Your last 30 days, unified. Sleep, activity, heart rate — all in one view with day-by-day detail.",
  },
  {
    id: "highlights",
    Icon: HighlightsIcon,
    name: "Smart Highlights",
    description:
      "We surface what changed — sleep debt streaks, HRV drops below baseline, activity shifts — so you see what matters without hunting.",
  },
  {
    id: "sharepack",
    Icon: SharePackIcon,
    name: "Visit Share Pack",
    description:
      "A one-page, consented snapshot for your provider. Top changes, trend data, your questions — exported as a real PDF.",
  },
  {
    id: "vault",
    Icon: VaultIcon,
    name: "Privacy Vault",
    description:
      "Your data is encrypted on your device. Keys stay with you. Every share requires your explicit consent — and you can revoke anytime.",
  },
  {
    id: "explainable",
    Icon: ExplainableIcon,
    name: "Explainable Insights",
    description:
      "Every highlight shows exactly which signals triggered it — the time window, the data sources, the logic. No black boxes.",
  },
  {
    id: "carechat",
    Icon: CareChatIcon,
    name: "Care Circle Chat",
    description:
      "Communicate with family, caregivers, and providers in their preferred language. Timeline-grounded, multilingual, role-aware.",
    badge: { label: "Coming in V2", variant: "v2" },
  },
];

export default function FeaturesSection() {
  return (
    <Section bg="warm" id="features">
      <Container>
        <AnimateIn>
          <SectionHeading
            eyebrow="Features"
            title="Built for Real Life"
            description="Everything you need to take control of your wellness story — without the complexity."
            align="center"
          />
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <AnimateIn key={feature.id} delay={i * 0.1} className="flex">
              <Card variant="elevated" hover className="group flex flex-col gap-4 flex-1">
                {/* Icon — color transitions sage → coral on card hover */}
                <div className="w-12 h-12 text-igni-sage group-hover:text-igni-coral transition-colors duration-300">
                  <feature.Icon className="w-full h-full" />
                </div>

                {/* Name + optional badge */}
                <div className="flex items-start gap-2 flex-wrap">
                  <h3 className="font-sans font-bold text-[17px] text-igni-charcoal leading-snug">
                    {feature.name}
                  </h3>
                  {feature.badge && (
                    <Badge variant={feature.badge.variant}>
                      {feature.badge.label}
                    </Badge>
                  )}
                </div>

                <p className="text-igni-slate font-sans leading-relaxed text-[15px]">
                  {feature.description}
                </p>
              </Card>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
