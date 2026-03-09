import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Mail, Twitter, Linkedin, Github, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";

const contactOptions = [
  {
    icon: Mail,
    title: "General Inquiries",
    description: "Questions about the platform, partnerships, or press.",
    contact: "hello@igniwave.com",
    href: "mailto:hello@igniwave.com",
  },
  {
    icon: MessageSquare,
    title: "Early Access & Waitlist",
    description: "Interested in piloting Igniwave for yourself or your team.",
    contact: "Join the waitlist →",
    href: "/#waitlist",
  },
  {
    icon: Mail,
    title: "Privacy & Data Requests",
    description: "Data access, correction, export, or deletion requests.",
    contact: "privacy@igniwave.com",
    href: "mailto:privacy@igniwave.com",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-forest text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="inline-block text-igni-mint text-sm font-semibold uppercase tracking-wider mb-3">
                Contact
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Get in touch
              </h1>
              <p className="text-white/75 text-lg leading-relaxed">
                We&apos;re a small team building something we believe deeply in.
                Whether you&apos;re a potential user, clinician, investor, or
                partner — we&apos;d love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact options */}
        <section className="py-24 bg-igni-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactOptions.map(({ icon: Icon, title, description, contact, href }) => (
                <a
                  key={title}
                  href={href}
                  className="bg-white rounded-2xl p-8 border border-igni-mint/20 hover:border-igni-sage/40 hover:shadow-md transition-all duration-200 group block"
                >
                  <div className="w-12 h-12 bg-igni-forest rounded-xl flex items-center justify-center mb-5 group-hover:bg-igni-sage transition-colors duration-200">
                    <Icon size={22} className="text-igni-mint" />
                  </div>
                  <h3 className="text-lg font-bold text-igni-charcoal mb-2">
                    {title}
                  </h3>
                  <p className="text-igni-slate text-sm leading-relaxed mb-4">
                    {description}
                  </p>
                  <span className="text-igni-sage font-medium text-sm">
                    {contact}
                  </span>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="bg-igni-forest rounded-3xl p-10 text-white text-center">
              <h2 className="text-2xl font-bold mb-2">Follow our journey</h2>
              <p className="text-white/65 mb-8">
                Stay up to date on product updates, health data insights, and
                Igniwave news.
              </p>
              <div className="flex items-center justify-center gap-6">
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
                    className="flex items-center gap-2 text-white/70 hover:text-igni-mint transition-colors duration-200"
                  >
                    <Icon size={20} />
                    <span className="text-sm font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
