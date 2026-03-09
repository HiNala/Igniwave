import type React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
  error?: string;
  hint?: string;
  wrapperClassName?: string;
}

export default function Input({
  label,
  error,
  hint,
  id,
  className,
  wrapperClassName,
  ...props
}: InputProps) {
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  return (
    <div className={cn("flex flex-col gap-1.5", wrapperClassName)}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-semibold text-igni-charcoal font-sans"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          "w-full rounded-xl border bg-white px-4 py-3 font-sans text-sm text-igni-charcoal placeholder:text-igni-slate/60 transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-igni-sage/40 focus:border-igni-sage",
          error
            ? "border-igni-coral focus:ring-igni-coral/30 focus:border-igni-coral"
            : "border-igni-charcoal/15 hover:border-igni-charcoal/30",
          className
        )}
        {...props}
      />
      {hint && !error && (
        <p className="text-xs text-igni-slate font-sans">{hint}</p>
      )}
      {error && (
        <p className="text-xs text-igni-coral font-sans">{error}</p>
      )}
    </div>
  );
}
