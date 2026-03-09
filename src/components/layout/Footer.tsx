import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";
import { siteConfig } from "@/config/site";
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
    <footer className="bg-igni-forest text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" aria-label="Igniwave home" className="inline-flex mb-4">
              <IgniwaveLogo variant="full" color="light" size="md" />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              {siteConfig.tagline}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-igni-mint transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-igni-mint/40 rounded-sm"
                aria-label="Igniwave on Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-igni-mint transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-igni-mint/40 rounded-sm"
                aria-label="Igniwave on LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-igni-mint transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-igni-mint/40 rounded-sm"
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
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-sans text-white/65 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:text-white"
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
