"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { useScrolled } from "@/lib/hooks/useScrolled";
import { buttonVariants } from "@/components/ui/Button";
import IgniwaveLogo from "@/components/icons/IgniwaveLogo";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Header() {
  const scrolled = useScrolled(50);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Skip to content — visible on keyboard focus only */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-lg focus:bg-igni-forest focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-igni-charcoal/8 shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <Link
              href="/"
              aria-label="Igniwave home"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-igni-sage/50 rounded-lg"
            >
              <IgniwaveLogo
                variant="mark"
                color="dark"
                size="md"
                className="sm:hidden"
              />
              <IgniwaveLogo
                variant="full"
                color="dark"
                size="md"
                className="hidden sm:flex"
              />
            </Link>

            {/* Desktop nav — lg+ */}
            <nav
              aria-label="Primary navigation"
              className="hidden lg:flex items-center gap-7"
            >
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative font-sans text-[15px] font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-igni-sage/40 rounded-sm px-0.5",
                      isActive
                        ? "text-igni-forest"
                        : "text-igni-charcoal/70 hover:text-igni-forest"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-igni-coral" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA — lg+ */}
            <div className="hidden lg:flex items-center">
              <Link
                href={siteConfig.cta.primary.href}
                className={buttonVariants({ variant: "primary", size: "sm" })}
              >
                {siteConfig.cta.primary.label}
              </Link>
            </div>

            {/* Mobile hamburger — < lg */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl text-igni-charcoal/70 hover:text-igni-forest hover:bg-igni-charcoal/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-igni-sage/50"
            >
              <Menu size={22} />
            </button>

          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
