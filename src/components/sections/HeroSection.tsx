"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Lock } from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import HandDrawnUnderline from "@/components/icons/HandDrawnUnderline";
import LeafAccent from "@/components/icons/LeafAccent";
import HeroVisual from "@/components/sections/HeroVisual";

function fadeUp(delay: number, prefersReducedMotion: boolean | null) {
  return {
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: prefersReducedMotion ? 0 : 0.6,
      ease: "easeOut" as const,
      delay: prefersReducedMotion ? 0 : delay,
    },
  };
}

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative bg-igni-cream overflow-hidden min-h-[calc(100vh-72px)] flex items-center py-20 lg:py-0"
    >
      {/* Background dot texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(rgba(43,82,60,0.035) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Radial center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 72% 45%, rgba(168,213,186,0.07) 0%, transparent 65%)",
        }}
      />

      {/* Decorative leaf — top-right corner */}
      <div
        className="absolute top-10 right-6 opacity-10 rotate-12 pointer-events-none hidden lg:block"
        aria-hidden="true"
      >
        <LeafAccent color="#4A7C5C" size={90} flip delay={1.2} />
      </div>

      <Container className="relative z-10 w-full">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* ── Left column: Copy (3/5) ────────────────────── */}
          <div className="lg:col-span-3 text-center lg:text-left">

            {/* Badge */}
            <motion.div {...fadeUp(0, prefersReducedMotion)}>
              <Badge variant="default" className="mb-6 gap-1.5">
                <Lock size={11} />
                Privacy-First Wellness
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.06, prefersReducedMotion)}
              className="text-5xl md:text-6xl lg:text-7xl leading-[1.08] text-igni-forest text-balance"
            >
              Wellness Intelligence,{" "}
              <span className="relative inline-block">
                <span className="relative z-10">On Your Terms</span>
                <HandDrawnUnderline
                  color="#E87461"
                  className="absolute -bottom-0.5 left-0 w-full"
                  delay={0.65}
                />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              {...fadeUp(0.14, prefersReducedMotion)}
              className="mt-6 text-lg md:text-xl text-igni-slate max-w-xl leading-relaxed mx-auto lg:mx-0"
            >
              Connect your health data. See what matters. Share with your care
              team — when you&apos;re ready, how you want.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              {...fadeUp(0.22, prefersReducedMotion)}
              className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#waitlist"
                className={buttonVariants({ variant: "primary", size: "lg" })}
              >
                Join the Waitlist
              </Link>
              <Link
                href="#how-it-works"
                className={buttonVariants({ variant: "ghost", size: "lg" })}
              >
                See How It Works →
              </Link>
            </motion.div>

            {/* Trust microcopy */}
            <motion.p
              {...fadeUp(0.3, prefersReducedMotion)}
              className="mt-6 inline-flex items-center gap-2 text-sm text-igni-slate/55 justify-center lg:justify-start"
            >
              <Lock size={12} aria-hidden="true" />
              End-to-end encrypted · User-controlled · No data sales
            </motion.p>
          </div>

          {/* ── Right column: Abstract visual (2/5) ─────── */}
          <div className="hidden lg:flex lg:col-span-2 items-center justify-center">
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.8,
                ease: [0.4, 0, 0.2, 1],
                delay: prefersReducedMotion ? 0 : 0.3,
              }}
            >
              <HeroVisual />
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
