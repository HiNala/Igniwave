import AnimateIn from "@/components/ui/AnimateIn";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import HandDrawnArrow from "@/components/icons/HandDrawnArrow";
import HandDrawnCircle from "@/components/icons/HandDrawnCircle";
import ConnectWearableIcon from "@/components/icons/features/ConnectWearableIcon";
import TimelineInsightIcon from "@/components/icons/features/TimelineInsightIcon";
import ShareDocIcon from "@/components/icons/features/ShareDocIcon";

const steps = [
  {
    id: "connect",
    number: "1",
    Icon: ConnectWearableIcon,
    headline: "Connect Your Wearable",
    description:
      "Link your Oura, Fitbit, Garmin, or Apple Health. We pull your last 30 days of sleep, activity, and heart rate data automatically.",
    badge: { label: "OAuth secure", variant: "success" as const },
  },
  {
    id: "understand",
    number: "2",
    Icon: TimelineInsightIcon,
    headline: "See What Changed",
    description:
      "Your Wellness Continuity Timeline shows everything in one view. Smart highlights surface the patterns that matter — sleep dips, HRV drops, activity shifts.",
    badge: { label: "AI-powered", variant: "default" as const },
  },
  {
    id: "share",
    number: "3",
    Icon: ShareDocIcon,
    headline: "Share on Your Terms",
    description:
      "Generate a Visit Share Pack — a formatted, consented snapshot of your wellness data. PDF export, share sheet, done. Your provider gets real context.",
    badge: { label: "Patient-directed", variant: "success" as const },
  },
];

export default function SolutionSection() {
  return (
    <Section bg="cream" id="how-it-works">
      <Container>
        <AnimateIn>
          <SectionHeading
            eyebrow="How It Works"
            title="One timeline. Your insights. Your terms."
            align="center"
            accent
          />
        </AnimateIn>

        {/* Editorial photo strip */}
        <AnimateIn delay={0.1} className="mb-14">
          <div className="relative rounded-3xl overflow-hidden h-52 md:h-64">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80"
              alt="Care team reviewing patient health data"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-linear-to-r from-igni-forest/75 via-igni-forest/35 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8 md:px-12">
              <p className="font-display text-xl md:text-3xl text-white max-w-sm leading-snug">
                Your data, finally telling the full story.
              </p>
            </div>
          </div>
        </AnimateIn>

        {/* Desktop: 3-col flex with arrows. Mobile: vertical stack */}
        <div className="flex flex-col md:flex-row items-start gap-0">
          {steps.map((step, i) => (
            <div
              key={step.id}
              className="flex flex-col md:flex-row items-start flex-1"
            >
              {/* Step card */}
              <AnimateIn delay={0.1 + i * 0.2} className="flex-1 w-full">
                <div className="flex flex-col items-center text-center px-4 lg:px-8">
                  {/* Step number in hand-drawn circle */}
                  <div className="relative w-[68px] h-[60px] flex items-center justify-center mb-5">
                    <HandDrawnCircle
                      color="#4A7C5C"
                      delay={0.2 + i * 0.2}
                      className="opacity-100"
                    />
                    <span className="relative z-10 font-display text-3xl text-igni-sage leading-none">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 text-igni-sage mb-4">
                    <step.Icon className="w-full h-full" />
                  </div>

                  {/* Badge */}
                  <Badge variant={step.badge.variant} className="mb-4">
                    {step.badge.label}
                  </Badge>

                  {/* Copy */}
                  <h3 className="font-sans font-bold text-xl text-igni-charcoal mb-3">
                    {step.headline}
                  </h3>
                  <p className="text-igni-slate font-sans leading-relaxed text-[15px] max-w-[260px]">
                    {step.description}
                  </p>
                </div>
              </AnimateIn>

              {/* Arrow connector — desktop only */}
              {i < steps.length - 1 && (
                <AnimateIn
                  delay={0.55 + i * 0.2}
                  className="hidden md:flex items-center justify-center w-10 shrink-0 pt-[54px]"
                >
                  <HandDrawnArrow
                    direction="right"
                    color="#4A7C5C"
                    delay={0.6 + i * 0.2}
                    className="w-10 h-8 opacity-40"
                  />
                </AnimateIn>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
