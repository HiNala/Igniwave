import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import { siteConfig } from "@/config/site";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import ContactForm from "@/app/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Igniwave",
  description:
    "Get in touch with the Igniwave team. Whether you're a family, clinician, or potential partner, we'd love to hear from you.",
};

const faqs: { q: string; a: string }[] = [
  {
    q: "When will Igniwave be available?",
    a: "We\u2019re currently building V1 and accepting early access signups. Join the waitlist for updates \u2014 we plan to onboard a small pilot group first.",
  },
  {
    q: "Which wearables do you support?",
    a: "V1 will launch with support for Oura, Fitbit, Garmin, and Apple Health. Additional integrations are on our roadmap.",
  },
  {
    q: "Is Igniwave HIPAA compliant?",
    a: "V1 is a consumer wellness product under user control \u2014 not a HIPAA-covered entity. HIPAA compliance with BAA support is planned for our V2 clinical tier.",
  },
  {
    q: "Can my therapist or BCBA use this?",
    a: "Yes \u2014 you can generate a Visit Share Pack and share it with any provider as a formatted document. They receive a PDF, not a portal login. No special software required on their end.",
  },
  {
    q: "Is my data safe?",
    a: "Your data is encrypted with keys anchored to your device \u2014 we never see unencrypted data, and we never sell any data. See our Privacy page for the full picture.",
  },
];

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk"
        subheadline="Whether you're a family looking for better wellness tools, a clinician interested in our pilot program, or a potential partner — we want to hear from you."
      />

      {/* Form + Info */}
      <Section bg="cream">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form — wider left col */}
            <div className="lg:col-span-3">
              <AnimateIn>
                <h2 className="font-display text-2xl text-igni-charcoal mb-6">
                  Send us a message
                </h2>
                <ContactForm />
              </AnimateIn>
            </div>

            {/* Contact Info — right col */}
            <div className="lg:col-span-2">
              <AnimateIn delay={0.15}>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-igni-coral mb-4">
                      Contact Info
                    </h3>
                    <div className="space-y-4">
                      {[
                        { label: "General", email: "hello@igniwave.com" },
                        { label: "Privacy & Data Requests", email: "privacy@igniwave.com" },
                        { label: "Press", email: "press@igniwave.com" },
                        { label: "Partnerships", email: "partners@igniwave.com" },
                      ].map(({ label, email }) => (
                        <div key={label} className="flex items-start gap-3">
                          <Mail size={15} className="text-igni-sage mt-0.5 shrink-0" />
                          <div>
                            <p className="font-sans text-xs text-igni-slate/70 mb-0.5">{label}</p>
                            <a
                              href={`mailto:${email}`}
                              className="font-sans text-sm text-igni-forest font-medium hover:underline"
                            >
                              {email}
                            </a>
                          </div>
                        </div>
                      ))}
                      <div className="flex items-start gap-3">
                        <MapPin size={15} className="text-igni-sage mt-0.5 shrink-0" />
                        <div>
                          <p className="font-sans text-xs text-igni-slate/70 mb-0.5">Location</p>
                          <p className="font-sans text-sm text-igni-charcoal">Bay Area, California</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-igni-coral mb-4">
                      Follow Us
                    </h3>
                    <div className="flex items-center gap-3">
                      {[
                        { icon: Twitter, href: siteConfig.social.twitter, label: "Twitter" },
                        { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
                        { icon: Github, href: siteConfig.social.github, label: "GitHub" },
                      ].map(({ icon: Icon, href, label }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Igniwave on ${label}`}
                          className="w-10 h-10 rounded-xl bg-igni-forest/5 border border-igni-mint/20 flex items-center justify-center text-igni-forest/60 hover:text-igni-forest hover:border-igni-sage/40 transition-colors"
                        >
                          <Icon size={16} />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl bg-igni-forest/5 border border-igni-mint/20 px-5 py-4">
                    <p className="font-sans text-sm text-igni-slate leading-relaxed">
                      We aim to respond within{" "}
                      <strong className="text-igni-forest">48 hours</strong>. For urgent
                      privacy requests, email privacy@igniwave.com directly.
                    </p>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section bg="white">
        <Container size="narrow">
          <AnimateIn>
            <SectionHeading eyebrow="FAQ" title="Common Questions" align="center" />
          </AnimateIn>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimateIn key={faq.q} delay={0.06 + i * 0.08}>
                <Card variant="bordered" className="p-6">
                  <h3 className="font-sans font-bold text-[15px] text-igni-charcoal mb-2">
                    {faq.q}
                  </h3>
                  <p className="font-sans text-sm text-igni-slate leading-relaxed">
                    {faq.a}
                  </p>
                </Card>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={0.5}>
            <p className="font-sans text-center text-sm text-igni-slate/60 mt-8">
              Still have questions?{" "}
              <Link href="/#waitlist" className="text-igni-sage hover:underline font-medium">
                Join the waitlist
              </Link>{" "}
              and we&rsquo;ll reach out directly.
            </p>
          </AnimateIn>
        </Container>
      </Section>
    </PageLayout>
  );
}
