import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const footerLinks = {
    Product: [
      { label: "Solutions", href: "/solutions" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Join Waitlist", href: "#waitlist" },
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

  return (
    <footer className="bg-igni-forest text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-igni-sage flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 2C5.13 2 2 5.13 2 9s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 2c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 2a3 3 0 100 6 3 3 0 000-6z"
                    fill="white"
                  />
                  <circle cx="9" cy="9" r="2" fill="#A8D5BA" />
                </svg>
              </div>
              <span className="font-bold text-xl">{siteConfig.name}</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs mb-6">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-igni-mint transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-igni-mint transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-igni-mint transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm text-white/50 uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/75 hover:text-igni-mint text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p className="text-white/40 text-xs">
            Your data. Your control. Always.
          </p>
        </div>
      </div>
    </footer>
  );
}
