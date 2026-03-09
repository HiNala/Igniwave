import { cn } from "@/lib/utils";
import HandDrawnUnderline from "@/components/icons/HandDrawnUnderline";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  accent?: boolean;
  accentColor?: string;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  accent = false,
  accentColor = "#E87461",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-14 lg:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block font-sans text-sm font-semibold uppercase tracking-widest text-igni-coral mb-4">
          {eyebrow}
        </span>
      )}

      <div className={cn("relative inline-block", align === "center" && "w-full")}>
        <h2
          className={cn(
            "font-display text-4xl md:text-5xl lg:text-6xl text-igni-charcoal leading-tight text-balance mb-2",
            align === "center" && "mx-auto"
          )}
        >
          {title}
        </h2>
        {accent && (
          <HandDrawnUnderline
            color={accentColor}
            className="mt-1"
            delay={0.4}
          />
        )}
      </div>

      {description && (
        <p
          className={cn(
            "mt-5 text-lg md:text-xl text-igni-slate leading-relaxed font-sans",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
