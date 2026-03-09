const testimonials = [
  {
    quote:
      "Finally, I can walk into my therapy session with actual data. My therapist and I spent 20 minutes less on 'so how have you been feeling' and got straight to what mattered.",
    name: "Sarah M.",
    role: "Igniwave Beta User",
    initials: "SM",
    color: "bg-igni-sage",
  },
  {
    quote:
      "My son has autism and we see three providers. Before Igniwave, each session started from scratch. Now they all see the same 30-day picture. It's changed everything.",
    name: "Michael T.",
    role: "Parent & Caregiver",
    initials: "MT",
    color: "bg-igni-coral",
  },
  {
    quote:
      "The privacy-first approach is what sold me. I don't want my data sitting in some clinic's EHR without my consent. Igniwave flips the model — I share what I choose.",
    name: "Dr. Priya K.",
    role: "Behavioral Health Clinician",
    initials: "PK",
    color: "bg-igni-forest",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-block text-igni-sage text-sm font-semibold uppercase tracking-wider mb-3">
            Early Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-igni-charcoal leading-tight">
            Changing how people talk to their care team
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ quote, name, role, initials, color }) => (
            <div
              key={name}
              className="bg-igni-cream rounded-2xl p-8 border border-igni-mint/20 flex flex-col"
            >
              {/* Quote marks */}
              <div className="text-igni-mint text-5xl font-serif leading-none mb-4 select-none">
                &ldquo;
              </div>

              <p className="text-igni-charcoal text-base leading-relaxed flex-1 mb-6">
                {quote}
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 ${color} rounded-full flex items-center justify-center shrink-0`}
                >
                  <span className="text-white text-xs font-bold">{initials}</span>
                </div>
                <div>
                  <p className="text-igni-charcoal font-semibold text-sm">
                    {name}
                  </p>
                  <p className="text-igni-slate text-xs">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
