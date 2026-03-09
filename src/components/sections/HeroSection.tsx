"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Lock, ChevronDown } from "lucide-react";
import HandDrawnUnderline from "@/components/icons/HandDrawnUnderline";

function fadeUp(delay: number, prefersReducedMotion: boolean | null) {
  return {
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: prefersReducedMotion ? 0 : 0.65,
      ease: "easeOut" as const,
      delay: prefersReducedMotion ? 0 : delay,
    },
  };
}

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden flex items-center">

      {/* ── Background photo ──────────────────────────── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Left-heavy gradient so text stays readable */}
        <div className="absolute inset-0 bg-linear-to-r from-igni-forest/92 via-igni-forest/65 to-igni-forest/15" />
        {/* Bottom softener */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-linear-to-t from-igni-forest/25 to-transparent" />
      </div>

      {/* ── Content ───────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">

          {/* Eyebrow badge */}
          <motion.div {...fadeUp(0, prefersReducedMotion)} className="mb-7">
            <span className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-widest text-white/65 border border-white/20 rounded-full px-3.5 py-1.5">
              <Lock size={11} aria-hidden="true" />
              Privacy-First Wellness
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.07, prefersReducedMotion)}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.06] text-white text-balance"
          >
            Wellness Intelligence,{" "}
            <span className="relative inline-block">
              <span className="relative z-10">On Your Terms</span>
              <HandDrawnUnderline
                color="#E87461"
                className="absolute -bottom-1 left-0 w-full"
                delay={0.7}
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUp(0.16, prefersReducedMotion)}
            className="mt-7 font-sans text-lg md:text-xl text-white/68 max-w-lg leading-relaxed"
          >
            Connect your health data. See what matters. Share with your care
            team — when you&apos;re ready, how you want.
          </motion.p>

          {/* CTA row */}
          <motion.div
            {...fadeUp(0.24, prefersReducedMotion)}
            className="mt-9 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#waitlist"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-igni-coral text-white font-sans font-semibold text-base hover:bg-igni-coral/88 hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] active:translate-y-0 transition-all duration-200 shadow-sm"
            >
              Join the Waitlist
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-white/30 text-white font-sans font-medium text-base hover:bg-white/10 hover:border-white/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              See How It Works →
            </Link>
          </motion.div>

          {/* Trust microcopy */}
          <motion.p
            {...fadeUp(0.32, prefersReducedMotion)}
            className="mt-7 inline-flex items-center gap-2 font-sans text-sm text-white/40"
          >
            <Lock size={12} aria-hidden="true" />
            End-to-end encrypted · User-controlled · No data sales
          </motion.p>

        </div>
      </div>

      {/* Scroll-down indicator */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        {...fadeUp(0.55, prefersReducedMotion)}
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/35"
        >
          <ChevronDown size={28} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
