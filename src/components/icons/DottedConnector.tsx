"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DottedConnectorProps {
  color?: string;
  className?: string;
  delay?: number;
}

export default function DottedConnector({
  color = "#A8D5BA",
  className,
  delay = 0,
}: DottedConnectorProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 200 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full", className)}
      aria-hidden="true"
    >
      <motion.path
        d="M4 10 C 30 8, 50 12, 80 10 S 120 8, 150 10 S 180 12, 196 10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="6 8"
        initial={prefersReducedMotion ? { opacity: 0.7 } : { pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 1.4, ease: "easeOut", delay }
        }
      />
    </svg>
  );
}
