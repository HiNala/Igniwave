import AnimateIn from "@/components/ui/AnimateIn";
import HandDrawnUnderline from "@/components/icons/HandDrawnUnderline";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  /** If provided, this phrase within `title` receives a coral HandDrawnUnderline. */
  titleHighlight?: string;
  subheadline?: string;
}

export default function PageHero({
  eyebrow,
  title,
  titleHighlight,
  subheadline,
}: PageHeroProps) {
  const renderTitle = () => {
    if (!titleHighlight || !title.includes(titleHighlight)) {
      return <span>{title}</span>;
    }
    const [before, after] = title.split(titleHighlight);
    return (
      <>
        {before}
        <span className="relative inline-block">
          <span className="relative z-10">{titleHighlight}</span>
          <HandDrawnUnderline
            color="#E87461"
            className="absolute -bottom-0.5 left-0 w-full"
            delay={0.5}
          />
        </span>
        {after}
      </>
    );
  };

  return (
    <section className="pt-32 pb-20 md:pb-28 bg-igni-forest text-white overflow-hidden relative">
      {/* Subtle gradient depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(168,213,186,0.07) 0%, transparent 65%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <AnimateIn className="max-w-3xl">
          <span className="inline-block font-sans text-sm font-semibold uppercase tracking-widest text-igni-coral mb-4">
            {eyebrow}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight text-balance mb-6">
            {renderTitle()}
          </h1>
          {subheadline && (
            <p className="font-sans text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
              {subheadline}
            </p>
          )}
        </AnimateIn>
      </div>
    </section>
  );
}
