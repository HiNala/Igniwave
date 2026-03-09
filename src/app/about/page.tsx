import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { buttonVariants } from "@/components/ui/Button";
import HandDrawnUnderline from "@/components/icons/HandDrawnUnderline";

export const metadata: Metadata = {
  title: "About Igniwave | Our Mission & Team",
  description:
    "Learn about Igniwave's mission to put wellness intelligence in the hands of the people who need it most — patients, families, and caregivers.",
};

const pillars = [
  {
    title: "Privacy as Architecture",
    description:
      "Not a checkbox. Privacy is built into every layer of Igniwave — from the data model to key management to consent artifacts. By design, we can never access your raw health data.",
  },
  {
    title: "Consumer Control",
    description:
      "You are our customer — not a clinic, not an insurer, not a data buyer. Every product decision starts from: 'Does this give the user more control?' If not, we don't build it.",
  },
  {
    title: "Clinical Utility Without Clinical Entanglement",
    description:
      "Igniwave V1 is deeply useful for clinical conversations, but it is never a provider tool. No portals, no org accounts, no middleman. You share; they receive.",
  },
];

const phases = [
  {
    badge: { label: "Now Building", variant: "success" as const },
    title: "V1 — Core Wearable Intelligence",
    items: [
      "Connect Oura, Fitbit, Garmin, or Apple Health (OAuth)",
      "30-day Wellness Continuity Timeline",
      "Smart Highlights: rule-based anomaly detection in plain language",
      "Visit Share Pack: one-tap PDF for your next appointment",
    ],
  },
  {
    badge: { label: "Next", variant: "default" as const },
    title: "V1.1 — Daily Tracking & Richer Narratives",
    items: [
      "Daily wellness check-in prompts",
      "Personal narrative notes linked to timeline events",
      "Enhanced Share Packs with longitudinal context",
    ],
  },
  {
    badge: { label: "Future", variant: "outline" as const },
    title: "V1.5 — Care Circle Collaboration",
    items: [
      "Read-only share links with expiration",
      "Family & caregiver view (consent-gated)",
      "Multi-party annotations on the timeline",
    ],
  },
  {
    badge: { label: "V2 Planned", variant: "v2" as const },
    title: "V2 — Clinical Tier",
    items: [
      "Provider portal with role-based access",
      "HL7 FHIR / EHR integration",
      "HIPAA-ready tier with BAA support",
      "Multilingual Care Circle Chat (AI-assisted)",
    ],
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="About Us"
        title="Putting Wellness Intelligence in Your Hands"
        titleHighlight="in Your Hands"
      />

      {/* Mission Statement */}
      <Section bg="cream">
        <Container size="narrow">
          <AnimateIn>
            <SectionHeading
              eyebrow="Our Mission"
              title="Close the gap between lived experience and clinical insight"
              align="center"
              accent
            />
          </AnimateIn>
          <div className="space-y-6 max-w-3xl mx-auto">
            <AnimateIn delay={0.1}>
              <p className="font-sans text-lg text-igni-slate leading-relaxed">
                Every day, millions of people generate rich health data — from wearables tracking
                sleep and heart rate, to personal journals documenting triggers and patterns. But
                this data sits fragmented across apps, invisible to the care teams who could use
                it most.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.18}>
              <p className="font-sans text-lg text-igni-slate leading-relaxed">
                Igniwave exists to change that. We&rsquo;re building a platform where{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 font-semibold text-igni-forest">YOU control</span>
                  <HandDrawnUnderline
                    color="#E87461"
                    className="absolute -bottom-0.5 left-0 w-full"
                    delay={0.5}
                  />
                </span>
                {" "}your health data, YOU decide what to share, and YOUR observations become a
                first-class part of the care conversation.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.26}>
              <p className="font-sans text-lg text-igni-slate leading-relaxed">
                We believe the people closest to the lived experience — patients, parents,
                caregivers — have insights that no sensor alone can capture. Igniwave gives
                those insights a voice.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.32} from="none">
              <figure className="border-l-4 border-igni-coral pl-6 mt-8">
                <blockquote>
                  <p className="font-display italic text-xl text-igni-forest leading-relaxed">
                    &ldquo;The patient has the most data. They just need the right tool to make
                    it legible.&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-3 font-sans text-sm text-igni-slate/70">
                  — Igniwave founding principle
                </figcaption>
              </figure>
            </AnimateIn>
          </div>
        </Container>
      </Section>

      {/* Our Approach — 3 pillars */}
      <Section bg="warm">
        <Container>
          <AnimateIn>
            <SectionHeading
              eyebrow="Our Approach"
              title="Three Principles Behind Every Decision"
              align="center"
            />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <AnimateIn key={pillar.title} delay={0.1 + i * 0.12}>
                <Card variant="elevated" className="h-full flex flex-col gap-3 p-7">
                  <span className="font-sans text-3xl font-bold text-igni-coral/30 leading-none">
                    0{i + 1}
                  </span>
                  <h3 className="font-sans font-bold text-lg text-igni-charcoal leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-[15px] text-igni-slate leading-relaxed">
                    {pillar.description}
                  </p>
                </Card>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Roadmap — honest phased list */}
      <Section bg="white">
        <Container size="narrow">
          <AnimateIn>
            <SectionHeading
              eyebrow="Roadmap"
              title="Where We Are and Where We’re Going"
              description="We’re honest about what’s built, what’s next, and what’s further out. No vaporware."
              align="center"
            />
          </AnimateIn>
          <div className="space-y-6">
            {phases.map((phase, i) => (
              <AnimateIn key={phase.title} delay={0.08 + i * 0.1}>
                <div className="rounded-2xl border border-igni-mint/25 bg-igni-cream p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <Badge variant={phase.badge.variant}>{phase.badge.label}</Badge>
                    <h3 className="font-sans font-bold text-lg text-igni-charcoal leading-snug pt-0.5">
                      {phase.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-igni-sage mt-2 shrink-0" />
                        <span className="font-sans text-[15px] text-igni-slate leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section bg="cream" className="text-center">
        <Container size="narrow">
          <AnimateIn>
            <h2 className="font-display text-3xl md:text-4xl text-igni-forest mb-4">
              Ready to take back control of your health data?
            </h2>
            <p className="font-sans text-igni-slate mb-8 text-lg">
              Join the waitlist and be among the first to experience Igniwave.
            </p>
            <Link href="/#waitlist" className={buttonVariants({ variant: "primary", size: "lg" })}>
              Join the Waitlist
            </Link>
          </AnimateIn>
        </Container>
      </Section>
    </PageLayout>
  );
}
