import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/Button";
import IgniwaveLogo from "@/components/icons/IgniwaveLogo";
import HandDrawnHeart from "@/components/icons/HandDrawnHeart";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Product: [
    { label: "Solutions", href: "/solutions" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Features", href: "/#features" },
    { label: "Join Waitlist", href: "/#waitlist" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ paddingBottom: "env(safe-area-inset-bottom)" }} className="bg-igni-forest text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-16 md:pt-16 md:pb-20">

        {/* Final CTA strip — never leave the visitor in a dead end */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 mb-12 border-b border-white/10">
          <div>
            <p className="font-sans font-semibold text-white text-lg leading-snug">
              Ready to take control of your wellness data?
            </p>
            <p className="font-sans text-white/55 text-sm mt-1">
              Early access opens soon — join the list and be first.
            </p>
          </div>
          <Link
            href="/#waitlist"
            className={buttonVariants({ variant: "primary", size: "md" }) + " shrink-0"}
          >
            Join the Waitlist
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" aria-label="Igniwave home" className="inline-flex mb-4">
              <IgniwaveLogo variant="full" color="light" size="md" />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              {siteConfig.tagline}
            </p>
            <div className="flex items-center gap-1">
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full text-white/50 hover:text-igni-mint hover:bg-white/8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-igni-mint/40"
                aria-label="Igniwave on Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full text-white/50 hover:text-igni-mint hover:bg-white/8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-igni-mint/40"
                aria-label="Igniwave on LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full text-white/50 hover:text-igni-mint hover:bg-white/8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-igni-mint/40"
                aria-label="Igniwave on GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-sans font-semibold text-xs text-igni-mint uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-1">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="block font-sans text-white/65 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:text-white py-1.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-sans text-white/45 text-sm">
            © {new Date().getFullYear()} Igniwave Healthcare. All rights reserved.
          </p>
          <p className="font-sans text-white/35 text-xs flex items-center gap-1.5">
            Made with
            <HandDrawnHeart color="#E87461" className="w-4 h-[14px]" delay={0.2} />
            care in the Bay Area
          </p>
        </div>
      </div>
    </footer>
  );
}
