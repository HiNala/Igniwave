"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SquiggleDividerProps {
  color?: string;
  className?: string;
  delay?: number;
}

export default function SquiggleDivider({
  color = "currentColor",
  className,
  delay = 0,
}: SquiggleDividerProps) {
  return (
    <svg
      viewBox="0 0 400 20"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("w-full h-4 text-igni-mint/40", className)}
    >
      <motion.path
        d="M0,10 C20,4 40,16 60,10 C80,4 100,16 120,10 C140,4 160,16 180,10 C200,4 220,16 240,10 C260,4 280,16 300,10 C320,4 340,16 360,10 C380,4 400,16 400,10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay }}
      />
    </svg>
  );
}
