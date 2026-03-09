import { Layers, MessageCircleOff, MicOff } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";

const pains = [
  {
    icon: Layers,
    headline: "Your signals don't talk to each other",
    body: "Sleep data here. HRV there. Incident logs in a notebook. Nothing connects, and pattern recognition is left entirely to you.",
    color: "bg-igni-coral/10 text-igni-coral",
  },
  {
    icon: MessageCircleOff,
    headline: "Clinicians get 5 minutes of a 24/7 life",
    body: "Every session starts with 'so how have you been feeling?' — not because your clinician doesn't care, but because they have no longitudinal data to work from.",
    color: "bg-igni-sage/15 text-igni-sage",
  },
  {
    icon: MicOff,
    headline: "Your observations rarely make it into the room",
    body: "You noticed patterns. You kept notes. But without a structured format, they stay in your head — or on a sticky note you forget to bring.",
    color: "bg-igni-coral/10 text-igni-coral",
  },
];

export default function Problem() {
  return (
    <section className="py-24 lg:py-32 bg-igni-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: framing */}
          <AnimateIn from="left" className="lg:sticky lg:top-28">  
            <span className="inline-block text-igni-coral text-sm font-semibold uppercase tracking-wider mb-4">
              The Problem
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-igni-charcoal leading-tight mb-6">
              Your health data is everywhere.{" "}
              <span className="text-igni-sage">
                Your care team sees almost none of it.
              </span>
            </h2>
            <p className="text-igni-slate text-lg leading-relaxed mb-8">
              You generate a rich stream of health and behavior signals every
              single day — through wearables, journals, apps, and lived
              experience. But between appointments, none of it arrives where it
              matters most.
            </p>
            <div className="flex items-start gap-3 bg-igni-warm border border-igni-mint/30 rounded-2xl p-5">
              <div className="w-1.5 h-1.5 rounded-full bg-igni-coral mt-2 shrink-0" />
              <p className="text-igni-charcoal text-sm leading-relaxed">
                The average care session is{" "}
                <strong>less than 20 minutes.</strong> Without a structured data
                summary, most of that time is spent reconstructing the past two
                weeks from memory instead of acting on it.
              </p>
            </div>
          </AnimateIn>

          {/* Right: pain cards */}
          <div className="flex flex-col gap-5">
            {pains.map(({ icon: Icon, headline, body, color }, i) => (
              <AnimateIn key={headline} delay={i * 0.12} from="right">
              <div
                className="bg-white rounded-2xl p-7 border border-igni-mint/20 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${color}`}
                  >
                    <Icon size={19} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-igni-charcoal mb-2">
                      {headline}
                    </h3>
                    <p className="text-igni-slate text-sm leading-relaxed">
                      {body}
                    </p>
                  </div>
                </div>
              </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
