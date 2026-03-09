import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, XCircle } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { buttonVariants } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Solutions | Igniwave — Wellness Intelligence Platform",
  description:
    "Explore how Igniwave helps individuals, families, and care teams with unified wellness timelines, smart highlights, and patient-directed sharing.",
};

const comparisonRows: { feature: string; v1: boolean | string; v2: boolean | string }[] = [
  { feature: "Connect Wearable (Oura, Fitbit, Garmin, Apple Health)", v1: true, v2: true },
  { feature: "30-Day Wellness Continuity Timeline", v1: true, v2: true },
  { feature: "Smart Highlights & Anomaly Detection", v1: true, v2: true },
  { feature: "Visit Share Pack (PDF Export)", v1: true, v2: "Enhanced" },
  { feature: "Daily Check-In Prompts", v1: false, v2: true },
  { feature: "Personal Narrative Notes", v1: false, v2: true },
  { feature: "Care Circle Collaboration", v1: false, v2: true },
  { feature: "Multilingual Care Chat (AI-assisted)", v1: false, v2: true },
  { feature: "Clinical Portal / Provider Login", v1: false, v2: true },
  { feature: "HL7 FHIR / EHR Integration", v1: false, v2: true },
  { feature: "BAA / HIPAA-Covered Tier", v1: false, v2: true },
];

export default function SolutionsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Solutions"
        title="Intelligence That Works for Everyone"
        titleHighlight="for Everyone"
        subheadline="Whether you're tracking your own wellness, supporting a loved one, or sharing context with a care team — Igniwave adapts to your needs."
      />

      {/* For Individuals & Families */}
      <Section bg="cream">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateIn>
              <span className="inline-block font-sans text-sm font-semibold uppercase tracking-widest text-igni-coral mb-4">For You &amp; Your Family</span>
              <h2 className="font-display text-3xl md:text-4xl text-igni-charcoal leading-tight mb-6">Your 30-day wellness story, finally in one place</h2>
              <div className="space-y-4 mb-8">
                {["Connect your wearable in minutes with a secure OAuth flow","See 30 days of unified sleep, activity, and heart rate data","Get plain-language highlights on what changed and why it matters","Generate a Visit Share Pack before your next appointment — in seconds","Share context with family members in your care circle"].map((item) => (
                  <div key={item} className="flex items-start gap-3"><CheckCircle size={18} className="text-igni-sage mt-0.5 shrink-0" /><span className="font-sans text-[15px] text-igni-slate leading-relaxed">{item}</span></div>
                ))}
              </div>
              <Link href="/#waitlist" className={buttonVariants({ variant: "primary", size: "md" })}>Join the Waitlist</Link>
            </AnimateIn>
            <AnimateIn delay={0.15} className="hidden lg:block">
              <div className="relative h-64 rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1575995872537-3793d29d972c?auto=format&fit=crop&w=800&q=80"
                  alt="Person reviewing health tracking data on smartwatch"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0px, 40vw"
                />
              </div>
            </AnimateIn>
          </div>
        </Container>
      </Section>

      {/* For Clinicians */}
      <Section bg="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateIn delay={0.1} className="hidden lg:block order-last lg:order-first">
              <div className="relative h-64 rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80"
                  alt="Clinician reviewing patient wellness report"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0px, 40vw"
                />
              </div>
            </AnimateIn>
            <AnimateIn>
              <span className="inline-block font-sans text-sm font-semibold uppercase tracking-widest text-igni-coral mb-4">For Clinicians &amp; Care Teams</span>
              <h2 className="font-display text-3xl md:text-4xl text-igni-charcoal leading-tight mb-6">Patient context before the visit, not after</h2>
              <div className="space-y-4 mb-6">
                {["Receive patient-generated context formatted for a clinical conversation","See time-bounded wellness snapshots — not raw data dumps","Understand patterns between visits that a 5-minute window can’t reveal","All sharing is patient-directed with explicit, revocable consent"].map((item) => (
                  <div key={item} className="flex items-start gap-3"><CheckCircle size={18} className="text-igni-sage mt-0.5 shrink-0" /><span className="font-sans text-[15px] text-igni-slate leading-relaxed">{item}</span></div>
                ))}
              </div>
              <div className="rounded-xl bg-igni-cream border border-igni-mint/25 px-5 py-4 mb-6">
                <p className="font-sans text-sm text-igni-slate/80 leading-relaxed"><strong className="text-igni-forest">V1 note:</strong> Igniwave V1 is a consumer tool. Providers receive patient-generated exports — they don&rsquo;t log in to a portal. A clinical tier is planned for V2.</p>
              </div>
              <Link href="/contact" className={buttonVariants({ variant: "secondary", size: "md" })}>Apply for the Pilot Program</Link>
            </AnimateIn>
          </div>
        </Container>
      </Section>

      {/* For ABA / Behavioral Health */}
      <Section bg="warm">
        <Container>
          <AnimateIn>
            <SectionHeading eyebrow="Behavioral Health" title="Purpose-Built for Families Managing Complex Care" align="center" />
          </AnimateIn>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <AnimateIn delay={0.1}>
              <div className="space-y-5">
                <p className="font-sans text-lg text-igni-slate leading-relaxed">Families managing autism care, sensory processing, or behavioral health face extreme fragmentation. Multiple therapists, BCBAs, SLPs, and OTs — none seeing the full picture.</p>
                <p className="font-sans text-[15px] text-igni-slate leading-relaxed">Parent and caregiver observations are the richest data source in behavioral health — but the hardest to format, share, and preserve across the care team. Igniwave unifies these signals and gives families a voice in the care conversation.</p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.15}>
              <div className="space-y-4">
                {[{title:"Incident Narratives + Biometric Context",desc:"Link behavioral observations directly to sleep deprivation, HRV shifts, or activity patterns on the same timeline."},{title:"Sleep & Behavior Correlation Highlights",desc:"Surface connections between poor sleep and next-day behavioral events that are otherwise invisible to the clinical team."},{title:"Insurance-Ready Visit Share Packs",desc:"Generate formatted summaries that include the temporal context most relevant for authorization and progress notes."}].map((item) => (
                  <Card key={item.title} variant="elevated" className="p-5">
                    <h3 className="font-sans font-bold text-[15px] text-igni-charcoal mb-1.5">{item.title}</h3>
                    <p className="font-sans text-sm text-igni-slate leading-relaxed">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </AnimateIn>
          </div>
        </Container>
      </Section>

      {/* Comparison Table */}
      <Section bg="white">
        <Container>
          <AnimateIn>
            <SectionHeading eyebrow="Feature Roadmap" title="V1 vs V2 — What’s Available Now and What’s Coming" align="center" />
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="overflow-x-auto rounded-2xl border border-igni-mint/20">
              <table className="w-full font-sans text-sm">
                <thead>
                  <tr className="bg-igni-forest text-white">
                    <th className="text-left px-6 py-4 font-semibold rounded-tl-2xl">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold w-36"><span className="flex items-center justify-center gap-2"><Badge variant="success">V1</Badge>Available</span></th>
                    <th className="text-center px-6 py-4 font-semibold w-36 rounded-tr-2xl"><span className="flex items-center justify-center gap-2"><Badge variant="v2">V2</Badge>Planned</span></th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-igni-cream/40"}>
                      <td className="px-6 py-3.5 text-igni-charcoal">{row.feature}</td>
                      <td className="px-6 py-3.5 text-center">
                        {row.v1 === true ? <CheckCircle size={18} className="text-igni-sage mx-auto" /> : typeof row.v1 === "string" ? <span className="text-igni-sage font-medium text-xs">{row.v1}</span> : <XCircle size={18} className="text-igni-slate/25 mx-auto" />}
                      </td>
                      <td className="px-6 py-3.5 text-center">
                        {row.v2 === true ? <CheckCircle size={18} className="text-igni-sage mx-auto" /> : typeof row.v2 === "string" ? <span className="text-igni-sage font-medium text-xs">{row.v2}</span> : <XCircle size={18} className="text-igni-slate/25 mx-auto" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </Container>
      </Section>

      {/* CTA */}
      <Section bg="forest" className="text-center">
        <Container size="narrow">
          <AnimateIn>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Ready to take control of your wellness data?</h2>
            <p className="font-sans text-white/70 text-lg mb-8">Join the early access waitlist for V1.</p>
            <Link href="/#waitlist" className={buttonVariants({ variant: "secondary", size: "lg" })}>Join the Waitlist</Link>
          </AnimateIn>
        </Container>
      </Section>
    </PageLayout>
  );
}
