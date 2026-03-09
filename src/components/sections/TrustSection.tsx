import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import { buttonVariants } from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import EncryptedIcon from "@/components/icons/trust/EncryptedIcon";
import UserControlIcon from "@/components/icons/trust/UserControlIcon";
import NoSaleIcon from "@/components/icons/trust/NoSaleIcon";
import AuditIcon from "@/components/icons/trust/AuditIcon";

const trustBadges = [
  {
    id: "encrypted",
    Icon: EncryptedIcon,
    label: "End-to-End Encrypted",
  },
  {
    id: "controlled",
    Icon: UserControlIcon,
    label: "User-Controlled Data",
  },
  {
    id: "nosale",
    Icon: NoSaleIcon,
    label: "We Never Sell Your Data",
  },
  {
    id: "audit",
    Icon: AuditIcon,
    label: "Transparent & Auditable",
  },
];

export default function TrustSection() {
  return (
    <Section bg="white" id="trust">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left: Photo ───────────────────────────────── */}
          <AnimateIn className="relative">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
              alt="Person reviewing wellness data"
              className="w-full h-[500px] object-cover object-top rounded-3xl"
            />
            {/* Pull-quote overlay card at bottom of photo */}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-igni-forest/88 backdrop-blur-sm px-5 py-4">
              <p className="font-sans text-sm text-white/85 leading-snug italic">
                &ldquo;My doctor finally understood what my week actually looked like — not just how I felt in the room.&rdquo;
              </p>
              <p className="font-sans text-xs text-white/45 mt-2">— Early access member</p>
            </div>
          </AnimateIn>

          {/* ── Right: Content ────────────────────────────── */}
          <div className="flex flex-col gap-8">
            <AnimateIn>
              <SectionHeading
                eyebrow="Why Igniwave"
                title="Built by People Who Understand Care"
                align="left"
              />
            </AnimateIn>

            {/* Founder / Mission blockquote */}
            <AnimateIn delay={0.12}>
              <figure className="relative border-l-4 border-igni-coral bg-igni-cream rounded-r-2xl px-7 py-6">
                <blockquote>
                  <p className="font-display italic text-lg md:text-xl text-igni-forest leading-relaxed">
                    &ldquo;We built Igniwave because families, caregivers, and
                    individuals deserve to see and control their own health data
                    &mdash; not just hand it over and hope for the best. The wellness
                    data people generate every day is rich, meaningful, and largely
                    wasted. We&rsquo;re changing that.&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-4 font-sans text-sm font-semibold text-igni-slate">
                  The Igniwave Team
                </figcaption>
              </figure>
            </AnimateIn>

            {/* Trust badges — 2x2 grid */}
            <div className="grid grid-cols-2 gap-3">
              {trustBadges.map((badge, i) => (
                <AnimateIn key={badge.id} delay={0.1 + i * 0.08}>
                  <div className="flex flex-col items-center gap-3 rounded-2xl border border-igni-mint/30 bg-igni-cream px-4 py-5 text-center h-full">
                    <div className="w-9 h-9 text-igni-forest">
                      <badge.Icon className="w-full h-full" />
                    </div>
                    <span className="font-sans text-sm font-semibold text-igni-charcoal leading-snug">
                      {badge.label}
                    </span>
                  </div>
                </AnimateIn>
              ))}
            </div>

            {/* Pilot program CTA */}
            <AnimateIn delay={0.3}>
              <div className="rounded-2xl border border-igni-sage/40 bg-igni-sage/5 px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="flex-1">
                  <p className="font-sans font-semibold text-igni-forest mb-1">
                    For clinicians and care teams
                  </p>
                  <p className="font-sans text-[14px] text-igni-slate leading-relaxed">
                    Interested in piloting Igniwave with your clients? We&apos;re
                    selecting a small cohort of early clinical partners.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className={buttonVariants({ variant: "secondary", size: "md" })}
                >
                  Apply for Early Access →
                </Link>
              </div>
            </AnimateIn>
          </div>

        </div>
      </Container>
    </Section>
  );
}
