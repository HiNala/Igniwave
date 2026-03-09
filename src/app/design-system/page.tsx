import Button, { buttonVariants } from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Input from "@/components/ui/Input";
import HandDrawnUnderline from "@/components/icons/HandDrawnUnderline";
import HandDrawnCircle from "@/components/icons/HandDrawnCircle";
import HandDrawnArrow from "@/components/icons/HandDrawnArrow";
import SquiggleDivider from "@/components/icons/SquiggleDivider";
import LeafAccent from "@/components/icons/LeafAccent";
import SparkleAccent from "@/components/icons/SparkleAccent";
import IgniwaveLogo from "@/components/icons/IgniwaveLogo";
import Link from "next/link";

const palette = [
  { name: "Forest",        hex: "#1B3A2D", token: "igni-forest",        dark: true  },
  { name: "Forest Light",  hex: "#254A3A", token: "igni-forest-light",  dark: true  },
  { name: "Forest Dark",   hex: "#142C22", token: "igni-forest-dark",   dark: true  },
  { name: "Sage",          hex: "#4A7C5C", token: "igni-sage",          dark: true  },
  { name: "Sage Light",    hex: "#5C9470", token: "igni-sage-light",    dark: true  },
  { name: "Sage Dark",     hex: "#3A6248", token: "igni-sage-dark",     dark: true  },
  { name: "Mint",          hex: "#A8D5BA", token: "igni-mint",          dark: false },
  { name: "Mint Light",    hex: "#C4E5D0", token: "igni-mint-light",    dark: false },
  { name: "Mint Dark",     hex: "#8CC5A4", token: "igni-mint-dark",     dark: false },
  { name: "Cream",         hex: "#FDF8F0", token: "igni-cream",         dark: false },
  { name: "Cream Dark",    hex: "#F5EDE0", token: "igni-cream-dark",    dark: false },
  { name: "Warm",          hex: "#F5E6D3", token: "igni-warm",          dark: false },
  { name: "Warm Dark",     hex: "#EBD5BC", token: "igni-warm-dark",     dark: false },
  { name: "Coral",         hex: "#E87461", token: "igni-coral",         dark: false },
  { name: "Coral Light",   hex: "#EE9080", token: "igni-coral-light",   dark: false },
  { name: "Coral Dark",    hex: "#D45A47", token: "igni-coral-dark",    dark: false },
  { name: "Charcoal",      hex: "#2C2C2C", token: "igni-charcoal",      dark: true  },
  { name: "Slate",         hex: "#6B7280", token: "igni-slate",         dark: true  },
];

export const metadata = {
  title: "Design System — Igniwave Internal",
  robots: { index: false, follow: false },
};

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-igni-cream font-sans">
      {/* Page header */}
      <div className="bg-igni-forest text-white py-12 px-8">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-igni-mint text-sm font-semibold uppercase tracking-widest mb-2 font-sans">
                Internal — Not indexed
              </p>
              <h1 className="font-display text-4xl md:text-5xl text-white mb-2">
                Igniwave Design System
              </h1>
              <p className="text-white/60 font-sans">
                Component library · Typography · Color palette · SVG accents
              </p>
            </div>
            <IgniwaveLogo color="light" size="lg" />
          </div>
        </Container>
      </div>

      <Container className="py-16 space-y-24">

        {/* ── LOGO ─────────────────────────────────────────────── */}
        <section>
          <h2 className="font-display text-3xl text-igni-charcoal mb-8 pb-3 border-b border-igni-charcoal/10">
            Logo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(["full", "mark"] as const).map((variant) =>
              (["dark", "light"] as const).map((color) => (
                <div
                  key={`${variant}-${color}`}
                  className={`rounded-2xl p-8 flex items-center justify-center ${
                    color === "light" ? "bg-igni-forest" : "bg-igni-cream border border-igni-charcoal/10"
                  }`}
                >
                  <IgniwaveLogo variant={variant} color={color} size="md" />
                </div>
              ))
            )}
          </div>
        </section>

        {/* ── TYPOGRAPHY ───────────────────────────────────────── */}
        <section>
          <h2 className="font-display text-3xl text-igni-charcoal mb-8 pb-3 border-b border-igni-charcoal/10">
            Typography
          </h2>
          <div className="space-y-6">
            <div>
              <p className="text-xs text-igni-slate uppercase tracking-widest mb-2 font-sans">Display — DM Serif Display 400</p>
              <p className="font-display text-6xl text-igni-charcoal leading-tight">Your Health Story, Told</p>
            </div>
            <div>
              <p className="text-xs text-igni-slate uppercase tracking-widest mb-2 font-sans">Heading — Plus Jakarta Sans 700</p>
              <p className="font-sans font-bold text-4xl text-igni-charcoal">Platform Pillars</p>
            </div>
            <div>
              <p className="text-xs text-igni-slate uppercase tracking-widest mb-2 font-sans">Body — Plus Jakarta Sans 400</p>
              <p className="font-sans text-lg text-igni-charcoal leading-relaxed max-w-prose">
                Privacy-first, consumer-controlled wellness intelligence. Connect your health data, see meaningful insights, and share with your care team on your terms.
              </p>
            </div>
            <div>
              <p className="text-xs text-igni-slate uppercase tracking-widest mb-2 font-sans">Small / Caption — Plus Jakarta Sans 500</p>
              <p className="font-sans font-medium text-sm text-igni-slate">OAuth secure · 30-day backfill · Daily sync</p>
            </div>
            <div>
              <p className="text-xs text-igni-slate uppercase tracking-widest mb-2 font-sans">Mono — JetBrains Mono 400</p>
              <p className="font-mono text-sm text-igni-forest bg-igni-forest/5 px-4 py-2 rounded-lg inline-block">
                HRV: 58ms · Sleep: 7.2h · Recovery: 84%
              </p>
            </div>
            <div>
              <p className="text-xs text-igni-slate uppercase tracking-widest mb-2 font-sans">Eyebrow Label</p>
              <p className="font-sans text-sm font-semibold uppercase tracking-widest text-igni-coral">
                The Problem
              </p>
            </div>
          </div>
        </section>

        {/* ── COLORS ───────────────────────────────────────────── */}
        <section>
          <h2 className="font-display text-3xl text-igni-charcoal mb-8 pb-3 border-b border-igni-charcoal/10">
            Color Palette
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {palette.map(({ name, hex, token, dark }) => (
              <div key={token} className="flex flex-col gap-1.5">
                <div
                  className="h-16 rounded-xl border border-black/5"
                  style={{ backgroundColor: hex }}
                />
                <p className="text-xs font-semibold text-igni-charcoal font-sans">{name}</p>
                <p className="text-[10px] text-igni-slate font-mono">{hex}</p>
                <p className="text-[10px] text-igni-slate font-mono">{token}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── BUTTONS ──────────────────────────────────────────── */}
        <section>
          <h2 className="font-display text-3xl text-igni-charcoal mb-8 pb-3 border-b border-igni-charcoal/10">
            Buttons
          </h2>
          <div className="space-y-6">
            {(["primary", "secondary", "ghost", "outline"] as const).map((variant) => (
              <div key={variant} className="flex flex-wrap items-center gap-4">
                <span className="w-24 text-xs text-igni-slate uppercase tracking-widest font-sans">{variant}</span>
                {(["sm", "md", "lg"] as const).map((size) => (
                  <Button key={size} variant={variant} size={size}>
                    {size === "sm" ? "Small" : size === "md" ? "Medium" : "Large"}
                  </Button>
                ))}
                <Button variant={variant} disabled>Disabled</Button>
              </div>
            ))}
            <div className="mt-4">
              <p className="text-xs text-igni-slate uppercase tracking-widest mb-3 font-sans">As Link (buttonVariants)</p>
              <Link href="#" className={buttonVariants({ variant: "primary" })}>
                Link Button
              </Link>
            </div>
          </div>
        </section>

        {/* ── BADGES ───────────────────────────────────────────── */}
        <section>
          <h2 className="font-display text-3xl text-igni-charcoal mb-8 pb-3 border-b border-igni-charcoal/10">
            Badges
          </h2>
          <div className="flex flex-wrap gap-3">
            <Badge variant="default">Default</Badge>
            <Badge variant="accent">Accent</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="v2">V2</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="default">Early Access</Badge>
            <Badge variant="accent">New</Badge>
            <Badge variant="v2">Coming in V2</Badge>
          </div>
        </section>

        {/* ── CARDS ────────────────────────────────────────────── */}
        <section>
          <h2 className="font-display text-3xl text-igni-charcoal mb-8 pb-3 border-b border-igni-charcoal/10">
            Cards
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="default">
              <p className="text-xs text-igni-slate uppercase tracking-widest mb-2 font-sans">Default</p>
              <p className="font-sans text-igni-charcoal">Clean white card, no shadow, no border.</p>
            </Card>
            <Card variant="elevated">
              <p className="text-xs text-igni-slate uppercase tracking-widest mb-2 font-sans">Elevated</p>
              <p className="font-sans text-igni-charcoal">Soft shadow, lifts content from background.</p>
            </Card>
            <Card variant="bordered">
              <p className="text-xs text-igni-slate uppercase tracking-widest mb-2 font-sans">Bordered</p>
              <p className="font-sans text-igni-charcoal">Subtle border, no shadow, crisp separation.</p>
            </Card>
            <Card variant="dark">
              <p className="text-xs text-igni-mint/60 uppercase tracking-widest mb-2 font-sans">Dark</p>
              <p className="font-sans text-white/80">Forest green background for inverted sections.</p>
            </Card>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <Card variant="elevated" hover>
              <p className="text-xs text-igni-slate uppercase tracking-widest mb-2 font-sans">Elevated + hover</p>
              <p className="font-sans text-igni-charcoal">Hover to see the lift animation.</p>
            </Card>
            <Card variant="bordered" hover>
              <p className="text-xs text-igni-slate uppercase tracking-widest mb-2 font-sans">Bordered + hover</p>
              <p className="font-sans text-igni-charcoal">Hover to see the lift animation.</p>
            </Card>
          </div>
        </section>

        {/* ── SECTION HEADINGS ─────────────────────────────────── */}
        <section>
          <h2 className="font-display text-3xl text-igni-charcoal mb-8 pb-3 border-b border-igni-charcoal/10">
            Section Headings
          </h2>
          <div className="space-y-16 divide-y divide-igni-charcoal/8">
            <div className="pt-6">
              <SectionHeading
                eyebrow="Centered — no accent"
                title="Your Health Story, Intelligently Told"
                description="Privacy-first, consumer-controlled wellness intelligence. Connect your health data, see meaningful insights."
                align="center"
              />
            </div>
            <div className="pt-10">
              <SectionHeading
                eyebrow="Centered — with accent underline"
                title="Everything your care team needs."
                description="Built for the consumer first. Designed to be clinically useful without requiring your provider to onboard."
                align="center"
                accent
              />
            </div>
            <div className="pt-10">
              <SectionHeading
                eyebrow="Left-aligned"
                title="Your health data is everywhere."
                description="You generate a rich stream of health and behavior signals every day."
                align="left"
              />
            </div>
            <div className="pt-10">
              <SectionHeading
                eyebrow="Left-aligned — with accent"
                title="Privacy by architecture, not policy."
                align="left"
                accent
              />
            </div>
          </div>
        </section>

        {/* ── INPUTS ───────────────────────────────────────────── */}
        <section>
          <h2 className="font-display text-3xl text-igni-charcoal mb-8 pb-3 border-b border-igni-charcoal/10">
            Form Inputs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            <Input label="Email address" placeholder="you@example.com" type="email" />
            <Input placeholder="No label" type="text" />
            <Input
              label="With hint text"
              placeholder="Enter your full name"
              hint="Used on your Visit Share Pack"
            />
            <Input
              label="Error state"
              placeholder="Invalid email"
              defaultValue="not-an-email"
              error="Please enter a valid email address."
            />
          </div>
        </section>

        {/* ── SVG ACCENTS ──────────────────────────────────────── */}
        <section>
          <h2 className="font-display text-3xl text-igni-charcoal mb-8 pb-3 border-b border-igni-charcoal/10">
            Hand-Drawn SVG Accents
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl p-8 border border-igni-charcoal/10">
              <p className="text-xs text-igni-slate uppercase tracking-widest mb-6 font-sans">HandDrawnUnderline</p>
              <div className="space-y-4">
                <div>
                  <p className="font-display text-2xl text-igni-charcoal mb-1">Coral (default)</p>
                  <HandDrawnUnderline color="#E87461" />
                </div>
                <div>
                  <p className="font-display text-2xl text-igni-forest mb-1">Sage</p>
                  <HandDrawnUnderline color="#4A7C5C" delay={0.6} />
                </div>
                <div>
                  <p className="font-display text-2xl text-igni-charcoal mb-1">Mint</p>
                  <HandDrawnUnderline color="#A8D5BA" delay={0.8} />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-igni-charcoal/10">
              <p className="text-xs text-igni-slate uppercase tracking-widest mb-6 font-sans">HandDrawnCircle</p>
              <div className="relative inline-flex items-center justify-center px-8 py-3">
                <HandDrawnCircle color="#E87461" />
                <span className="font-display text-3xl text-igni-charcoal relative z-10">84%</span>
              </div>
              <p className="text-xs text-igni-slate mt-4 font-sans">Wrap any inline element with position: relative</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-igni-charcoal/10">
              <p className="text-xs text-igni-slate uppercase tracking-widest mb-6 font-sans">HandDrawnArrow</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-igni-slate font-sans">Right</span>
                  <HandDrawnArrow direction="right" color="#4A7C5C" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-igni-slate font-sans">Left</span>
                  <HandDrawnArrow direction="left" color="#E87461" delay={0.4} />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-igni-slate font-sans">Down</span>
                  <HandDrawnArrow direction="down" color="#A8D5BA" delay={0.6} />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-igni-charcoal/10">
              <p className="text-xs text-igni-slate uppercase tracking-widest mb-6 font-sans">SquiggleDivider</p>
              <SquiggleDivider color="#A8D5BA" />
              <div className="mt-4">
                <SquiggleDivider color="#E87461" delay={0.4} />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-igni-charcoal/10">
              <p className="text-xs text-igni-slate uppercase tracking-widest mb-6 font-sans">LeafAccent</p>
              <div className="flex items-end gap-6">
                <LeafAccent color="#4A7C5C" size={40} />
                <LeafAccent color="#A8D5BA" size={52} delay={0.3} />
                <LeafAccent color="#E87461" size={32} flip delay={0.5} />
                <LeafAccent color="#4A7C5C" size={60} flip delay={0.7} />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-igni-charcoal/10">
              <p className="text-xs text-igni-slate uppercase tracking-widest mb-6 font-sans">SparkleAccent</p>
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-[10px] text-igni-slate mb-2 font-sans">1</p>
                  <SparkleAccent count={1} color="#E87461" />
                </div>
                <div>
                  <p className="text-[10px] text-igni-slate mb-2 font-sans">2</p>
                  <SparkleAccent count={2} color="#4A7C5C" />
                </div>
                <div>
                  <p className="text-[10px] text-igni-slate mb-2 font-sans">3</p>
                  <SparkleAccent count={3} color="#A8D5BA" />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION WRAPPER DEMO ─────────────────────────────── */}
        <section>
          <h2 className="font-display text-3xl text-igni-charcoal mb-8 pb-3 border-b border-igni-charcoal/10">
            Section + Container Wrappers
          </h2>
          <div className="space-y-4 rounded-2xl overflow-hidden border border-igni-charcoal/10">
            {(["cream", "warm", "white", "forest"] as const).map((bg) => (
              <Section key={bg} bg={bg} className="py-6!">
                <Container>
                  <p className={`font-sans text-sm font-semibold uppercase tracking-widest ${bg === "forest" ? "text-igni-mint" : "text-igni-slate"}`}>
                    Section bg=&quot;{bg}&quot; · Container size=&quot;default&quot;
                  </p>
                </Container>
              </Section>
            ))}
          </div>
        </section>

        {/* ── ANIMATIONS ───────────────────────────────────────── */}
        <section>
          <h2 className="font-display text-3xl text-igni-charcoal mb-8 pb-3 border-b border-igni-charcoal/10">
            CSS Animations (Tailwind utilities)
          </h2>
          <div className="flex flex-wrap gap-6">
            {(["animate-fade-up", "animate-fade-in", "animate-slide-in-right"] as const).map((cls) => (
              <div key={cls} className="bg-white rounded-2xl p-6 border border-igni-charcoal/10 text-center min-w-40">
                <div className={`w-10 h-10 rounded-xl bg-igni-sage mx-auto mb-3 ${cls}`} />
                <p className="text-xs font-mono text-igni-slate">.{cls}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SHADOWS ──────────────────────────────────────────── */}
        <section>
          <h2 className="font-display text-3xl text-igni-charcoal mb-8 pb-3 border-b border-igni-charcoal/10">
            Shadows
          </h2>
          <div className="flex flex-wrap gap-8">
            {[
              { cls: "shadow-soft",    label: "shadow-soft" },
              { cls: "shadow-soft-lg", label: "shadow-soft-lg" },
              { cls: "shadow-warm",    label: "shadow-warm" },
            ].map(({ cls, label }) => (
              <div key={cls} className={`bg-white rounded-2xl p-8 w-40 text-center ${cls}`}>
                <p className="text-xs font-mono text-igni-slate">.{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer note */}
        <div className="text-center pb-8">
          <p className="text-sm text-igni-slate font-sans">
            Igniwave Design System · Internal review page · Remove before public launch
          </p>
        </div>

      </Container>
    </div>
  );
}
