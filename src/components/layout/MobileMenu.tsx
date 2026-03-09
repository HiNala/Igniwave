"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/Button";
import IgniwaveLogo from "@/components/icons/IgniwaveLogo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape key closes menu
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.addEventListener("keydown", onKeyDown);
    }
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  // Focus trap: cycle Tab/Shift+Tab within the panel
  useEffect(() => {
    if (!isOpen || !panelRef.current) return;
    const panel = panelRef.current;

    const focusable = Array.from(
      panel.querySelectorAll<HTMLElement>(
        'a[href], button, [tabindex="0"]'
      )
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    // Move focus into panel
    first?.focus();

    function handleTab(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-60 flex flex-col bg-igni-forest"
        >
          {/* Header row */}
          <div className="flex items-center justify-between px-6 h-[72px] shrink-0">
            <Link href="/" onClick={onClose} aria-label="Igniwave home">
              <IgniwaveLogo variant="full" color="light" size="md" />
            </Link>
            <button
              onClick={onClose}
              aria-label="Close navigation menu"
              className="w-10 h-10 flex items-center justify-center rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-igni-mint/50"
            >
              <X size={22} />
            </button>
          </div>

          {/* Nav links — staggered fade-up */}
          <nav
            aria-label="Mobile navigation"
            className="flex-1 flex flex-col items-center justify-center gap-6 px-6"
          >
            {siteConfig.navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.35, ease: "easeOut" }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block font-display text-4xl sm:text-5xl text-white hover:text-igni-mint transition-colors duration-200 text-center focus-visible:outline-none focus-visible:text-igni-mint"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.35, ease: "easeOut" }}
            className="px-6 pb-12 shrink-0"
          >
            <Link
              href="#waitlist"
              onClick={onClose}
              className={buttonVariants({ variant: "primary", size: "lg" }) + " w-full justify-center"}
            >
              Join the Waitlist
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
