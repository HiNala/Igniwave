"use client";

import Link from "next/link";
import { ArrowRight, Shield, Zap, Heart } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-forest" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-igni-sage/10 blur-3xl translate-x-1/3" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-igni-mint/10 blur-3xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#A8D5BA 1px, transparent 1px), linear-gradient(90deg, #A8D5BA 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-igni-sage/20 border border-igni-mint/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-igni-mint animate-pulse" />
              <span className="text-igni-mint text-xs font-semibold tracking-wide uppercase">
                Privacy-First Wellness Intelligence
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Your Health Story,{" "}
              <span className="text-igni-mint">Intelligently</span>{" "}
              Told
            </h1>

            <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-lg">
              Connect your wearables, see a unified wellness timeline with
              meaningful insights, and share clinician-ready summaries with your
              care team — fully on your terms.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                { icon: Shield, text: "You own your data" },
                { icon: Zap, text: "Instant insights" },
                { icon: Heart, text: "Care-circle ready" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-white/80 text-sm"
                >
                  <Icon size={14} className="text-igni-mint" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={siteConfig.cta.primary.href}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-igni-coral text-white font-semibold hover:bg-igni-coral/90 transition-all duration-200 shadow-lg hover:shadow-xl text-base"
              >
                {siteConfig.cta.primary.label}
                <ArrowRight size={16} />
              </Link>
              <Link
                href={siteConfig.cta.secondary.href}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/25 text-white font-semibold hover:bg-white/10 transition-all duration-200 text-base"
              >
                {siteConfig.cta.secondary.label}
              </Link>
            </div>
          </div>

          {/* Right: Product UI mockup */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-white/60 text-xs font-medium uppercase tracking-wider">
                      Wellness Timeline
                    </p>
                    <p className="text-white font-semibold text-lg">
                      Last 7 Days
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-igni-sage/30 rounded-full px-3 py-1">
                    <span className="w-2 h-2 rounded-full bg-igni-mint animate-pulse" />
                    <span className="text-igni-mint text-xs font-medium">
                      Live
                    </span>
                  </div>
                </div>

                {/* Metric bars */}
                <div className="space-y-4 mb-5">
                  {[
                    { label: "Sleep Quality", value: 78, color: "bg-igni-mint" },
                    { label: "HRV Score", value: 62, color: "bg-igni-sage" },
                    { label: "Activity", value: 85, color: "bg-igni-coral" },
                    { label: "Resting HR", value: 54, color: "bg-igni-mint" },
                  ].map(({ label, value, color }) => (
                    <div key={label}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-white/75">{label}</span>
                        <span className="text-white font-medium">{value}</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${color} rounded-full`}
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Insight card */}
                <div className="bg-igni-forest/60 border border-igni-mint/20 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-igni-coral/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Zap size={14} className="text-igni-coral" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold mb-1">
                        HRV below baseline
                      </p>
                      <p className="text-white/60 text-xs leading-relaxed">
                        3-day trend. Often correlates with elevated stress or
                        reduced recovery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating share pack badge */}
              <div className="absolute -bottom-5 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 w-52">
                <div className="w-10 h-10 rounded-xl bg-igni-forest flex items-center justify-center shrink-0 mt-0.5">
                  <Shield size={18} className="text-igni-mint" />
                </div>
                <div>
                  <p className="text-igni-charcoal text-xs font-semibold leading-tight">
                    Visit Share Pack
                  </p>
                  <p className="text-igni-slate text-xs">
                    Ready — expires in 7d
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "100%", label: "User-owned data" },
            { value: "< 5min", label: "Wearable sync time" },
            { value: "30-day", label: "Timeline history" },
            { value: "1-tap", label: "Visit Share Pack" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-bold text-igni-mint mb-1">{value}</p>
              <p className="text-white/60 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
