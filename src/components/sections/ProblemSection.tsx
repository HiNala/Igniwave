import AnimateIn from "@/components/ui/AnimateIn";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import HandDrawnArrow from "@/components/icons/HandDrawnArrow";
import FragmentedDataIcon from "@/components/icons/features/FragmentedDataIcon";
import LostTranslationIcon from "@/components/icons/features/LostTranslationIcon";
import NoVoiceIcon from "@/components/icons/features/NoVoiceIcon";

const painCards = [
  {
    id: "fragmented",
    Icon: FragmentedDataIcon,
    headline: "Fragmented Data",
    description:
      "Your wearable tracks sleep. Another app logs activity. Your journal sits in a notes app. None of them talk to each other — and the full picture stays invisible.",
  },
  {
    id: "translation",
    Icon: LostTranslationIcon,
    headline: "Lost in Translation",
    description:
      "Clinicians get a 5-minute snapshot of your 24/7 life. The patterns between your sleep, stress, and behavior never make it into the room.",
  },
  {
    id: "novoice",
    Icon: NoVoiceIcon,
    headline: "No Voice in Your Care",
    description:
      "You notice things — triggers, patterns, good days and bad. But your observations and insights rarely make it into the clinical conversation.",
  },
];

export default function ProblemSection() {
  return (
    <Section bg="white" id="problem">
      <Container>
        <AnimateIn>
          <SectionHeading
            eyebrow="The Problem"
            title="Your health data is everywhere. Your care team sees almost none of it."
            align="center"
            accent
          />
        </AnimateIn>

        {/* Desktop: flex row with arrows. Mobile: flex col, no arrows */}
        <div className="flex flex-col md:flex-row items-stretch gap-0">
          {painCards.map((card, i) => (
            <div key={card.id} className="flex flex-col md:flex-row items-stretch flex-1">
              <AnimateIn delay={0.1 + i * 0.15} className="flex-1 flex">
                <Card variant="bordered" hover className="flex-1 flex flex-col gap-5 p-7 md:p-8">
                  {/* Icon */}
                  <div className="w-12 h-12 text-igni-coral">
                    <card.Icon className="w-full h-full" />
                  </div>
                  {/* Copy */}
                  <div>
                    <h3 className="font-sans font-bold text-lg text-igni-charcoal mb-2">
                      {card.headline}
                    </h3>
                    <p className="text-igni-slate font-sans leading-relaxed text-[15px]">
                      {card.description}
                    </p>
                  </div>
                </Card>
              </AnimateIn>

              {/* Arrow connector — desktop only, after cards 0 and 1 */}
              {i < painCards.length - 1 && (
                <AnimateIn
                  delay={0.4 + i * 0.15}
                  className="hidden md:flex items-center justify-center w-10 shrink-0 self-center"
                >
                  <HandDrawnArrow
                    direction="right"
                    color="#E87461"
                    delay={0.5 + i * 0.15}
                    className="w-8 h-7 opacity-60"
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
