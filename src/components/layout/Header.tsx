"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-igni-mint/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-igni-forest flex items-center justify-center group-hover:bg-igni-sage transition-colors duration-200">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M9 2C5.13 2 2 5.13 2 9s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 2c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 2a3 3 0 100 6 3 3 0 000-6z"
                  fill="white"
                />
                <circle cx="9" cy="9" r="2" fill="#A8D5BA" />
              </svg>
            </div>
            <span
              className={cn(
                "font-bold text-xl tracking-tight transition-colors duration-200",
                isScrolled ? "text-igni-forest" : "text-white"
              )}
            >
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 hover:text-igni-mint",
                  isScrolled ? "text-igni-charcoal" : "text-white/90"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href={siteConfig.cta.primary.href}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-igni-coral text-white text-sm font-semibold hover:bg-igni-coral/90 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {siteConfig.cta.primary.label}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={cn(
              "md:hidden p-2 rounded-md transition-colors",
              isScrolled ? "text-igni-charcoal" : "text-white"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-igni-forest text-white px-6 pt-2 pb-6">
          <nav className="flex flex-col gap-4 mt-4">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-white/90 hover:text-igni-mint transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={siteConfig.cta.primary.href}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full bg-igni-coral text-white text-sm font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              {siteConfig.cta.primary.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
