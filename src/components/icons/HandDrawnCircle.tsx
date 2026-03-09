"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HandDrawnCircleProps {
  color?: string;
  className?: string;
  delay?: number;
}

export default function HandDrawnCircle({
  color = "currentColor",
  className,
  delay = 0.1,
}: HandDrawnCircleProps) {
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      aria-hidden="true"
      className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}
    >
      <motion.path
        d="M60,5 C82,2 105,8 112,21 C119,34 113,49 97,55 C81,61 45,59 27,51 C9,43 5,28 12,16 C19,4 40,8 60,5 Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay }}
      />
    </svg>
  );
}
