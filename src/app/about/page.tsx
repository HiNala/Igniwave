import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, Heart, Users, Zap } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Privacy by Architecture",
    description:
      "Not just a policy. In Igniwave, privacy is built into the data model. You hold your keys. We never process your data without your explicit consent.",
  },
  {
    icon: Heart,
    title: "Clinically Useful, Not Clinically Controlled",
    description:
      "We believe patients deserve tools as powerful as those their clinicians use — but controlled entirely by the patient.",
  },
  {
    icon: Users,
    title: "Built for Real Care Circles",
    description:
      "Health doesn't happen in silos. Igniwave is designed for the whole network around a person — family, coaches, therapists, and providers.",
  },
  {
    icon: Zap,
    title: "Explainability Over Black Boxes",
    description:
      "Every insight tells you exactly which signals contributed, what time window it covers, and why it matters. No guessing.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-forest text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block text-igni-mint text-sm font-semibold uppercase tracking-wider mb-3">
                About Igniwave
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Health data should empower{" "}
                <span className="text-igni-mint">people, not systems</span>
              </h1>
              <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
                Igniwave was built on a simple belief: the richest source of
                health signal isn&apos;t inside a clinic&apos;s EHR — it&apos;s
                in the daily data stream of the person living with their
                condition. We&apos;re here to make that data useful, shareable,
                and always yours.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 bg-igni-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-igni-sage text-sm font-semibold uppercase tracking-wider mb-3">
                  Our Mission
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-igni-charcoal leading-tight mb-6">
                  Close the gap between lived experience and clinical insight
                </h2>
                <p className="text-igni-slate text-lg leading-relaxed mb-4">
                  People already generate a rich stream of health and behavior
                  signals — through wearables, journaling, and daily routines.
                  But these signals are fragmented, hard to interpret
                  longitudinally, and nearly impossible to share meaningfully
                  with a care team.
                </p>
                <p className="text-igni-slate text-lg leading-relaxed">
                  Igniwave fuses those signals into a coherent, explainable
                  narrative — and gives patients the tools to share it with
                  their care team on their own terms, with full consent and
                  revocation control.
                </p>
              </div>
              <div className="bg-igni-forest rounded-3xl p-10 text-white">
                <p className="text-2xl font-bold leading-snug mb-4">
                  &ldquo;The patient has the most data. They just need the right
                  tool to make it legible.&rdquo;
                </p>
                <p className="text-white/60 text-sm">— Igniwave founding principle</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="inline-block text-igni-sage text-sm font-semibold uppercase tracking-wider mb-3">
                Our Values
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-igni-charcoal leading-tight">
                What guides every decision we make
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-igni-cream rounded-2xl p-8 border border-igni-mint/20"
                >
                  <div className="w-12 h-12 bg-igni-forest rounded-xl flex items-center justify-center mb-5">
                    <Icon size={22} className="text-igni-mint" />
                  </div>
                  <h3 className="text-xl font-bold text-igni-charcoal mb-3">
                    {title}
                  </h3>
                  <p className="text-igni-slate leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-igni-warm text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-igni-charcoal mb-4">
              Ready to take back control of your health data?
            </h2>
            <p className="text-igni-slate mb-8">
              Join the waitlist and be first to experience Igniwave.
            </p>
            <a
              href="/#waitlist"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-igni-forest text-white font-semibold hover:bg-igni-sage transition-colors duration-200"
            >
              Join the Waitlist
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
