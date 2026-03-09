import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Privacy | Igniwave — Your Data, Your Control",
  description:
    "Learn how Igniwave protects your wellness data with device-anchored encryption, user-controlled vaults, and patient-directed sharing.",
};

const pillars = [
  {
    number: "01",
    title: "Device-Anchored Encryption",
    summary: "Keys are generated on your device. The server stores ciphertext only.",
    detail:
      "Your encryption keys are derived from a secret that never leaves your device. All wellness data — metrics, notes, check-ins — is encrypted client-side before it reaches our servers. We store ciphertext. Even in the event of a server breach, your raw health data is not exposed.",
  },
  {
    number: "02",
    title: "User-Initiated Sharing Only",
    summary: "Nothing leaves your vault without an explicit action from you.",
    detail:
      "Every share is an active choice you make. When you generate a Visit Share Pack, a consent artifact is created locally with a defined scope (which data), recipient (who), time window (how long), and expiration. You can revoke access at any time, and we log every consent event.",
  },
  {
    number: "03",
    title: "No Provider Lock-In",
    summary: "We are not a HIPAA-covered entity in V1. Your data doesn't flow to a provider portal.",
    detail:
      "Igniwave V1 operates as a consumer wellness platform under your control. Providers receive patient-generated exports (PDFs, formatted documents) — they do not log into a portal or receive direct data access. There is no EHR writeback, no billing workflow, and no clinic admin account in V1.",
  },
  {
    number: "04",
    title: "Full Audit Trail",
    summary: "Every consent event, share, and revocation is logged and visible to you.",
    detail:
      "We maintain a complete audit log of all data access events: what was shared, when, with whom, and for how long. This log is available to you at any time. If you delete your account, the audit log is deleted with it. We do not retain logs after account deletion.",
  },
];

type DataRow = { category: string; items: string[]; emphasis?: boolean };
const dataTable: DataRow[] = [
  {
    category: "Data We Store",
    items: [
      "Encrypted wellness metrics from your wearable (sleep, activity, HRV, resting HR)",
      "Encrypted personal notes and check-in responses",
      "Consent records and share event logs",
      "Your account email address (encrypted at rest)",
    ],
  },
  {
    category: "Data We Don't Store",
    items: [
      "Raw audio recordings (transcription, if used, happens on-device)",
      "Biometric identifiers (fingerprint, Face ID, iris scan)",
      "Insurance information or diagnosis codes",
      "Your physical location or GPS data",
    ],
  },
  {
    category: "Data We Never Collect",
    items: [
      "Advertising IDs or behavioral ad-targeting profiles",
      "Browsing history or cross-site tracking",
      "Third-party tracking pixels or SDKs in the product app",
      "Social graph data",
    ],
  },
  {
    category: "Data We Never Sell",
    items: [
      "All of the above. Without exception.",
      "We have no data monetization model. You are not the product.",
    ],
    emphasis: true,
  },
];

export default function PrivacyPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Privacy"
        title="Your Data. Your Vault. Your Rules."
      />

      {/* Philosophy */}
      <Section bg="cream">
        <Container size="narrow">
          <AnimateIn>
            <SectionHeading
              eyebrow="Privacy Philosophy"
              title="Privacy is the Product, Not the Policy"
              align="center"
              accent
            />
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="font-sans text-lg text-igni-slate leading-relaxed max-w-3xl mx-auto text-center">
              Igniwave was designed from day one around a fundamental principle: your health data
              belongs to you. We don&rsquo;t monetize it, we don&rsquo;t sell it, and we never
              see the unencrypted version. Privacy isn&rsquo;t a feature we added — it&rsquo;s
              the architectural constraint that every design decision is evaluated against.
            </p>
          </AnimateIn>
        </Container>
      </Section>

      {/* 4 Pillars expanded */}
      <Section bg="white">
        <Container>
          <AnimateIn>
            <SectionHeading
              eyebrow="How We Protect Your Data"
              title="Four Commitments, Built Into Every Layer"
              align="center"
            />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <AnimateIn key={pillar.title} delay={0.08 + i * 0.1}>
                <Card variant="elevated" className="h-full p-7 flex flex-col gap-3">
                  <span className="font-mono text-sm text-igni-coral/60 font-medium">{pillar.number}</span>
                  <h3 className="font-sans font-bold text-lg text-igni-charcoal leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-sm font-semibold text-igni-forest">{pillar.summary}</p>
                  <p className="font-sans text-[14px] text-igni-slate leading-relaxed">{pillar.detail}</p>
                </Card>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Data Collection Table */}
      <Section bg="warm">
        <Container>
          <AnimateIn>
            <SectionHeading
              eyebrow="Data Transparency"
              title="What We Collect and What We Don’t"
              align="center"
            />
          </AnimateIn>
          <div className="space-y-4">
            {dataTable.map((row, i) => (
              <AnimateIn key={row.category} delay={0.08 + i * 0.1}>
                <div className={`rounded-2xl border p-6 md:p-8 ${
                  row.emphasis
                    ? "bg-igni-forest text-white border-igni-forest"
                    : "bg-white border-igni-mint/20"
                }`}>
                  <h3 className={`font-sans font-bold text-base mb-3 ${
                    row.emphasis ? "text-igni-mint" : "text-igni-charcoal"
                  }`}>
                    {row.category}
                  </h3>
                  <ul className="space-y-2">
                    {row.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                          row.emphasis ? "bg-igni-coral" : "bg-igni-sage"
                        }`} />
                        <span className={`font-sans text-[14px] leading-relaxed ${
                          row.emphasis ? "text-white/80" : "text-igni-slate"
                        }`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* V1 Compliance Statement */}
      <Section bg="white">
        <Container size="narrow">
          <AnimateIn>
            <SectionHeading
              eyebrow="V1 Compliance Posture"
              title="Non-HIPAA Consumer Wellness Platform"
              align="center"
            />
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="rounded-2xl bg-igni-forest text-white p-8 md:p-10 space-y-4">
              <p className="font-sans text-white/80 leading-relaxed">
                <strong className="text-white">Igniwave V1 operates as a consumer wellness platform</strong>{" "}
                under the user&rsquo;s control. We are not a HIPAA-covered entity in V1 because
                we do not process Protected Health Information on behalf of healthcare providers.
              </p>
              <p className="font-sans text-white/80 leading-relaxed">
                We handle Patient-Generated Health Data (PGHD) under the user&rsquo;s direction.
                Sharing is always user-initiated via exported documents or expiring links. We have
                no EHR writeback, no billing or claims workflows, and no clinic admin portal.
              </p>
              <p className="font-sans text-white/80 leading-relaxed">
                <strong className="text-igni-mint">Igniwave is not a medical device</strong> and
                does not provide medical advice, diagnosis, or treatment. The wellness data and
                insights it surfaces are for informational and conversational purposes only.
              </p>
              <p className="font-sans text-white/55 text-sm leading-relaxed">
                A HIPAA-ready V2 clinical tier with BAAs, org tenancy, and EHR integrations is
                planned for a future release. See our roadmap on the{" "}
                <Link href="/about" className="text-igni-mint hover:underline">About page</Link>.
              </p>
            </div>
          </AnimateIn>
        </Container>
      </Section>

      {/* Privacy Policy Link */}
      <Section bg="cream" className="text-center">
        <Container size="narrow">
          <AnimateIn>
            <h2 className="font-display text-2xl md:text-3xl text-igni-forest mb-4">
              Full Privacy Policy
            </h2>
            <p className="font-sans text-igni-slate leading-relaxed mb-6">
              Our formal Privacy Policy and Terms of Service will be published before our public
              launch. The commitments on this page represent our binding design principles — the
              policy will formalize them in legal language.
            </p>
            <p className="font-sans text-igni-slate/70 text-sm">
              Questions about privacy?{" "}
              <a href="mailto:privacy@igniwave.com" className="text-igni-sage hover:underline font-medium">
                privacy@igniwave.com
              </a>
              {" "}&mdash;{" "}
              or use the{" "}
              <Link href="/contact" className="text-igni-sage hover:underline font-medium">
                contact form
              </Link>.
            </p>
          </AnimateIn>
        </Container>
      </Section>
    </PageLayout>
  );
}
