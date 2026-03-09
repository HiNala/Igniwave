import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, Lock, Eye, Trash2 } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "You are the data controller",
    description:
      "Igniwave is designed so that you — not us, not your clinic — are the legal data controller for your wellness data. We process data only on your instruction.",
  },
  {
    icon: Lock,
    title: "Encryption by default",
    description:
      "Your data vault is encrypted at rest. Keys are generated on your device. The server stores ciphertext only — we cannot read your raw health data.",
  },
  {
    icon: Eye,
    title: "Sharing is always user-initiated",
    description:
      "Nothing leaves your vault without an explicit action from you. Every share creates a consent artifact with a defined scope, recipient, and expiry.",
  },
  {
    icon: Trash2,
    title: "Delete anytime, completely",
    description:
      "You can delete your account and all associated data at any time. We provide a complete data export before deletion. No retention after your request.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-forest text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block text-igni-mint text-sm font-semibold uppercase tracking-wider mb-3">
                Privacy & Data
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Privacy is the product,{" "}
                <span className="text-igni-mint">not the policy</span>
              </h1>
              <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
                At Igniwave, privacy isn&apos;t a checkbox — it&apos;s the core
                architectural constraint that every design decision is evaluated
                against. Here&apos;s exactly what that means for your data.
              </p>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-24 bg-igni-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-igni-charcoal">
                Our four privacy commitments
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {principles.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-8 border border-igni-mint/20"
                >
                  <div className="w-12 h-12 bg-igni-forest rounded-xl flex items-center justify-center mb-5">
                    <Icon size={22} className="text-igni-mint" />
                  </div>
                  <h3 className="text-xl font-bold text-igni-charcoal mb-3">
                    {title}
                  </h3>
                  <p className="text-igni-slate leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* V1 Non-HIPAA Statement */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-igni-forest rounded-3xl p-10 text-white">
              <h2 className="text-2xl font-bold mb-4">
                V1 Compliance Posture: Non-HIPAA Consumer Wellness
              </h2>
              <p className="text-white/75 leading-relaxed mb-4">
                Igniwave V1 is a consumer-controlled wellness platform. It is
                not a HIPAA-covered entity. You are the customer and data
                controller — not a clinic. We do not act as a Business Associate
                processing Protected Health Information on behalf of a covered
                entity.
              </p>
              <p className="text-white/75 leading-relaxed mb-4">
                Sharing is always user-initiated via exported documents or
                expiring links. We have no EHR writeback, no billing or claims
                workflows, and no clinic admin portal.
              </p>
              <p className="text-white/60 text-sm">
                A HIPAA-ready V2 clinical tier with BAAs, org tenancy, and EHR
                integrations is planned for a future release.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Placeholder */}
        <section className="py-20 bg-igni-cream">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-igni-charcoal mb-6">
              Privacy Policy
            </h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-igni-slate leading-relaxed mb-4">
                <strong className="text-igni-charcoal">
                  Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </strong>
              </p>
              <p className="text-igni-slate leading-relaxed mb-4">
                This Privacy Policy describes how Igniwave (&ldquo;we,&rdquo;
                &ldquo;our,&rdquo; or &ldquo;us&rdquo;) collects, uses, and
                shares information when you use our wellness intelligence
                platform.
              </p>
              <p className="text-igni-slate leading-relaxed mb-4">
                <strong className="text-igni-charcoal">
                  Data We Collect:
                </strong>{" "}
                Wearable device metrics (sleep, activity, heart rate, HRV)
                synchronized via OAuth from supported vendors; account
                information (email, profile); user-generated content (notes,
                check-in responses, share pack configurations).
              </p>
              <p className="text-igni-slate leading-relaxed mb-4">
                <strong className="text-igni-charcoal">
                  How We Use Your Data:
                </strong>{" "}
                To provide the Igniwave platform features described in our
                service; to generate insights and the Wellness Continuity
                Timeline; to create Visit Share Packs at your direction. We do
                not sell your data. We do not share your data with third parties
                except as required by law or directed by you.
              </p>
              <p className="text-igni-slate leading-relaxed mb-4">
                <strong className="text-igni-charcoal">Your Rights:</strong>{" "}
                You have the right to access, correct, export, and delete your
                data at any time. Contact{" "}
                <a
                  href="mailto:privacy@igniwave.com"
                  className="text-igni-sage hover:underline"
                >
                  privacy@igniwave.com
                </a>{" "}
                with any privacy requests.
              </p>
              <p className="text-igni-slate leading-relaxed">
                <strong className="text-igni-charcoal">Contact:</strong> For
                questions about this policy, email{" "}
                <a
                  href="mailto:privacy@igniwave.com"
                  className="text-igni-sage hover:underline"
                >
                  privacy@igniwave.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
