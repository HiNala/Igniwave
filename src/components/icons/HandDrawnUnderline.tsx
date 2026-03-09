"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HandDrawnUnderlineProps {
  color?: string;
  className?: string;
  delay?: number;
}

export default function HandDrawnUnderline({
  color = "currentColor",
  className,
  delay = 0.2,
}: HandDrawnUnderlineProps) {
  return (
    <svg
      viewBox="0 0 200 10"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("w-full h-2.5", className)}
    >
      <motion.path
        d="M2,7 C22,3 42,11 62,6.5 C82,2 102,10 122,6 C142,2 162,9.5 182,5.5 C190,4 196,6 198,5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.0, ease: "easeOut", delay }}
      />
    </svg>
  );
}
