import type React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-semibold leading-none transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-igni-sage/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-igni-coral text-white rounded-full shadow-warm hover:bg-igni-coral-dark hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border-2 border-igni-sage text-igni-sage rounded-full hover:bg-igni-sage hover:text-white active:scale-[0.98]",
  ghost:
    "text-igni-sage hover:text-igni-forest underline-offset-4 hover:underline",
  outline:
    "border border-igni-charcoal/20 text-igni-charcoal rounded-full hover:border-igni-sage hover:text-igni-sage active:scale-[0.98]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-base",
  lg: "px-9 py-4 text-lg",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function buttonVariants({
  variant = "primary",
  size = "md",
  className = "",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}
