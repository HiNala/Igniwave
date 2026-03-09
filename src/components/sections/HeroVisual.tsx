"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import SparkleAccent from "@/components/icons/SparkleAccent";
import LeafAccent from "@/components/icons/LeafAccent";
import HandDrawnCircle from "@/components/icons/HandDrawnCircle";

const blobs = [
  {
    id: "b1",
    className: "absolute top-[6%] right-[8%] w-24 h-24 rounded-full blur-2xl",
    style: { background: "radial-gradient(circle, rgba(232,116,97,0.55) 0%, rgba(232,116,97,0.1) 100%)" },
    animate: { y: [0, -14, 0], x: [0, 6, 0] },
    duration: 3.2,
  },
  {
    id: "b2",
    className: "absolute bottom-[12%] left-[4%] w-20 h-20 rounded-full blur-2xl",
    style: { background: "radial-gradient(circle, rgba(74,124,92,0.5) 0%, rgba(74,124,92,0.08) 100%)" },
    animate: { y: [0, -10, 0], x: [0, -8, 0] },
    duration: 4.4,
  },
  {
    id: "b3",
    className: "absolute top-[42%] left-[2%] w-14 h-14 rounded-full blur-xl",
    style: { background: "radial-gradient(circle, rgba(168,213,186,0.65) 0%, rgba(168,213,186,0.1) 100%)" },
    animate: { y: [0, -8, 0], x: [0, 5, 0] },
    duration: 5.8,
  },
  {
    id: "b4",
    className: "absolute bottom-[28%] right-[6%] w-16 h-16 rounded-full blur-xl",
    style: { background: "radial-gradient(circle, rgba(168,213,186,0.5) 0%, rgba(74,124,92,0.1) 100%)" },
    animate: { y: [0, -12, 0], x: [0, -4, 0] },
    duration: 3.8,
  },
];

const dataDots = [
  { cx: 128, cy: 72,  r: 4.5, fill: "#E87461", opacity: 0.8, delay: 0.6 },
  { cx: 348, cy: 140, r: 3,   fill: "#4A7C5C", opacity: 0.7, delay: 0.9 },
  { cx: 68,  cy: 240, r: 3.5, fill: "#A8D5BA", opacity: 0.75, delay: 1.1 },
  { cx: 400, cy: 320, r: 2.5, fill: "#E87461", opacity: 0.65, delay: 1.3 },
  { cx: 220, cy: 400, r: 4,   fill: "#4A7C5C", opacity: 0.6, delay: 1.5 },
];

export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, prefersReducedMotion ? 0 : -56]);

  return (
    <motion.div
      ref={containerRef}
      style={{ y }}
      className="relative w-[420px] h-[420px] xl:w-[480px] xl:h-[480px] select-none"
      aria-hidden="true"
    >
      {/* ── Layer 1: Central glow ───────────────────────── */}
      <div
        className="absolute inset-[12%] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 35% 38%, rgba(232,116,97,0.20) 0%, rgba(74,124,92,0.14) 48%, rgba(168,213,186,0.18) 100%)",
        }}
      />

      {/* ── Layer 2: Subtle orbit ring ──────────────────── */}
      <div className="absolute inset-[8%] rounded-full border border-igni-mint/15" />
      <div className="absolute inset-[22%] rounded-full border border-igni-sage/10 rotate-12" />

      {/* ── Layer 3: Floating blobs ─────────────────────── */}
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className={blob.className}
          style={blob.style}
          animate={prefersReducedMotion ? {} : blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "mirror",
          }}
        />
      ))}

      {/* ── Layer 4: SVG — data flow curves + dots ──────── */}
      <svg
        viewBox="0 0 480 480"
        fill="none"
        className="absolute inset-0 w-full h-full"
      >
        {/* Flow curve 1 */}
        <motion.path
          d="M40,360 C100,280 180,320 240,240 C300,160 360,200 440,120"
          stroke="#4A7C5C"
          strokeWidth="1.5"
          strokeOpacity="0.25"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.0, ease: "easeOut", delay: 0.5 }}
        />
        {/* Flow curve 2 */}
        <motion.path
          d="M20,200 C90,180 160,220 240,200 C320,180 390,160 460,140"
          stroke="#A8D5BA"
          strokeWidth="1"
          strokeOpacity="0.2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.8 }}
        />
        {/* Flow curve 3 */}
        <motion.path
          d="M60,420 C140,380 220,340 280,300 C340,260 400,240 460,220"
          stroke="#E87461"
          strokeWidth="1"
          strokeOpacity="0.15"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 1.1 }}
        />

        {/* Data dots with pulse */}
        {dataDots.map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            r={dot.r}
            fill={dot.fill}
            fillOpacity={dot.opacity}
            initial={{ scale: 0, opacity: 0 }}
            animate={
              prefersReducedMotion
                ? { scale: 1, opacity: dot.opacity }
                : {
                    scale: [0, 1, 1.25, 1],
                    opacity: [0, dot.opacity, dot.opacity * 0.8, dot.opacity],
                  }
            }
            transition={{ duration: 0.8, delay: dot.delay, ease: "easeOut" }}
          />
        ))}
      </svg>

      {/* ── Layer 5: Hand-drawn accents ─────────────────── */}
      {/* Sparkles top-right */}
      <div className="absolute top-[4%] right-[14%]">
        <SparkleAccent count={2} color="#E87461" className="w-12 h-10 opacity-70" />
      </div>

      {/* Sparkle bottom-left */}
      <div className="absolute bottom-[10%] left-[12%]">
        <SparkleAccent count={1} color="#4A7C5C" className="w-8 h-7 opacity-50" />
      </div>

      {/* Leaf bottom-right */}
      <div className="absolute bottom-[5%] right-[10%] opacity-25">
        <LeafAccent color="#4A7C5C" size={36} delay={1.0} />
      </div>

      {/* Circle accent around center glow */}
      <div className="absolute inset-[28%]">
        <HandDrawnCircle color="#A8D5BA" delay={0.6} className="opacity-30" />
      </div>
    </motion.div>
  );
}
