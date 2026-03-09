import AnimateIn from "@/components/ui/AnimateIn";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import HandDrawnUnderline from "@/components/icons/HandDrawnUnderline";
import LeafAccent from "@/components/icons/LeafAccent";
import SparkleAccent from "@/components/icons/SparkleAccent";

// ── Inline pillar icons (stroke, white via currentColor) ───────────────────────

function VaultPillarIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-10 h-10">
      <path d="M20,3 L33,8 L33,22 C33,29.5 20,37 20,37 C20,37 7,29.5 7,22 L7,8 Z" />
      <circle cx="17" cy="17" r="5" />
      <line x1="22" y1="17" x2="30" y2="17" />
      <line x1="28" y1="17" x2="28" y2="20" />
      <line x1="30" y1="17" x2="30" y2="19" />
    </svg>
  );
}

function ConsentIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-10 h-10">
      <path d="M8,4 L26,4 L32,10 L32,36 L8,36 Z" />
      <path d="M26,4 L26,10 L32,10" />
      <path d="M13,22 L17,26 L25,18" />
      <line x1="13" y1="29" x2="25" y2="29" />
      <path d="M30,28 L36,22 L36,30 L30,30 Z" />
      <line x1="36" y1="22" x2="40" y2="19" />
    </svg>
  );
}

function NoBrokerIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-10 h-10">
      <circle cx="12" cy="20" r="6" />
      <circle cx="28" cy="20" r="6" />
      <line x1="18" y1="20" x2="22" y2="20" strokeDasharray="2 2" />
      <line x1="6" y1="34" x2="34" y2="6" strokeWidth="2" />
    </svg>
  );
}

function TransparentIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-10 h-10">
      <rect x="4" y="4" width="32" height="24" rx="3" />
      <path d="M4,18 L36,18" />
      <line x1="10" y1="10" x2="14" y2="10" />
      <line x1="10" y1="14" x2="20" y2="14" />
      <circle cx="20" cy="34" r="7" />
      <circle cx="20" cy="34" r="3" fill="currentColor" stroke="none" />
      <line x1="25" y1="39" x2="30" y2="44" />
    </svg>
  );
}

const pillars = [
  {
    id: "vault",
    Icon: VaultPillarIcon,
    headline: "User-Controlled Vault",
    description:
      "Your data lives on your device, encrypted with keys only you hold. The cloud sees ciphertext — never your raw health data.",
  },
  {
    id: "consent",
    Icon: ConsentIcon,
    headline: "Patient-Directed Sharing",
    description:
      "Nothing leaves your vault without your explicit action. Every share has a scope, a time window, and an expiration. You can revoke anytime.",
  },
  {
    id: "nobroker",
    Icon: NoBrokerIcon,
    headline: "No Clinic Lock-In",
    description:
      "We're not a provider tool — we're YOUR tool. No clinic portals, no org tenancy, no middleman between you and your data.",
  },
  {
    id: "transparent",
    Icon: TransparentIcon,
    headline: "Transparent by Design",
    description:
      "Every data access is logged. Every share is auditable. Every insight shows its sources. You always know what happened with your data.",
  },
];

export default function PrivacySection() {
  return (
    <Section bg="forest" id="privacy-commitment" className="relative overflow-hidden text-white">
      {/* Decorative accents */}
      <div className="absolute top-8 left-8 opacity-10 pointer-events-none rotate-180" aria-hidden="true">
        <LeafAccent color="#FFFFFF" size={64} />
      </div>
      <div className="absolute top-12 right-12 opacity-15 pointer-events-none" aria-hidden="true">
        <SparkleAccent count={2} color="#FFFFFF" className="w-14 h-12" />
      </div>
      <div className="absolute bottom-10 right-8 opacity-10 pointer-events-none rotate-45" aria-hidden="true">
        <LeafAccent color="#FFFFFF" size={48} flip />
      </div>

      {/* Subtle gradient depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.18) 100%)",
        }}
      />

      <Container className="relative z-10">
        {/* Heading — written manually for white text on dark bg */}
        <AnimateIn>
          <div className="text-center mb-14">
            <span className="inline-block font-sans text-sm font-semibold uppercase tracking-widest text-igni-coral mb-4">
              Our Commitment
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white leading-tight text-balance mb-4">
              Your Privacy Isn&rsquo;t a Feature.{" "}
              <span className="relative inline-block">
                <span className="relative z-10">It&rsquo;s the Foundation.</span>
                <HandDrawnUnderline
                  color="#E87461"
                  className="absolute -bottom-0.5 left-0 w-full"
                  delay={0.5}
                />
              </span>
            </h2>
            <p className="font-sans text-lg text-igni-mint/80 max-w-2xl mx-auto leading-relaxed">
              We built Igniwave from day one around a simple principle: your
              health data belongs to you. Period.
            </p>
          </div>
        </AnimateIn>

        {/* Privacy pillar cards — 2×2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
          {pillars.map((pillar, i) => (
            <AnimateIn key={pillar.id} delay={0.1 + i * 0.1} from="up">
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
                <div className="text-white/70 mb-4">
                  <pillar.Icon />
                </div>
                <h3 className="font-sans font-bold text-lg text-white mb-2">
                  {pillar.headline}
                </h3>
                <p className="font-sans text-[15px] text-white/65 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Compliance disclaimer */}
        <AnimateIn delay={0.35} from="none">
          <p className="font-sans text-sm text-white/45 max-w-3xl mx-auto text-center leading-relaxed">
            Igniwave V1 is a consumer wellness platform that generates
            patient-generated health data (PGHD). It is not a medical device,
            electronic health record, or HIPAA-covered entity. Clinical
            integration and provider tools are planned for V2.
          </p>
        </AnimateIn>
      </Container>
    </Section>
  );
}
