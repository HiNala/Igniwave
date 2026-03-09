import type React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "default" | "accent" | "outline" | "v2" | "success";

const variants: Record<BadgeVariant, string> = {
  default:  "bg-igni-mint/25 text-igni-forest border border-igni-mint/40",
  accent:   "bg-igni-coral text-white border border-igni-coral-dark/20",
  outline:  "bg-transparent text-igni-charcoal border border-igni-charcoal/20",
  v2:       "bg-igni-coral/10 text-igni-coral border border-igni-coral/20",
  success:  "bg-igni-sage/10 text-igni-sage-dark border border-igni-sage/20",
};

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  variant = "default",
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold leading-tight font-sans",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
