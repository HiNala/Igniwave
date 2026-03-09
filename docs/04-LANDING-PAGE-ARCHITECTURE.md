# 04 — Landing Page Architecture

**Project:** Igniwave  
**Last Updated:** March 2026  
**Purpose:** Complete specification for every section of the landing page — structure, copy direction, component requirements, and acceptance criteria.

---

## 1. Page Overview

**URL:** `/` (home)  
**File:** `src/app/page.tsx`  
**Goal:** Convert visitors to waitlist signups and communicate the core value proposition clearly.

**Primary conversion:** Email waitlist signup (`#waitlist`)  
**Secondary conversion:** Exploration of `/solutions` and `/about`

### Section Order (top to bottom)
1. Navigation (sticky header)
2. Hero
3. The Problem
4. How It Works
5. Platform Pillars (Features)
6. Trust & Privacy
7. Waitlist CTA
8. Footer

---

## 2. Navigation Bar

**Component:** `src/components/layout/Header.tsx`  
**Behavior:** Transparent on hero, white/95 backdrop on scroll (> 20px)

### Structure
```
[Logo + Wordmark]     [Solutions | About | Privacy | Contact]     [Join the Waitlist →]
```

### Specs
- Height: `h-16` mobile, `h-20` desktop
- Logo: SVG icon (18×18) + "Igniwave" wordmark, `text-xl font-bold`
- Nav links: `text-sm font-medium`, white on hero, `igni-charcoal` when scrolled
- CTA: coral rounded-full pill button, always visible on desktop
- Mobile: hamburger → slide-down drawer with forest green background
- Active state: TODO — highlight current page link
- Scroll effect: `shadow-sm border-b border-igni-mint/20` when scrolled

### Copy
- CTA button: "Join the Waitlist"
- No login/sign-in link in V1 (no product to log into yet)

---

## 3. Hero Section ✅ IMPLEMENTED

**Component:** `src/components/sections/Hero.tsx`  
**Background:** `gradient-forest` (135deg: #1B3A2D → #2a5242 → #4A7C5C)  
**Layout:** 2-column (copy left, product mockup right) on desktop; single column on mobile

### Current Copy
- Headline: "Your Health Story, Intelligently Told"
- Subhead: "Connect your wearables, see a unified wellness timeline with meaningful insights, and share clinician-ready summaries with your care team — fully on your terms."
- Badge: "Privacy-First Wellness Intelligence" (with pulse dot)
- Trust signals: "You own your data" / "Instant insights" / "Care-circle ready"
- Primary CTA: "Join the Waitlist →" (coral)
- Secondary CTA: "See How It Works" (ghost outline)
- Stats row: "100% user-owned" / "< 5min sync" / "30-day timeline" / "1-tap share pack"

### Recommended Copy Improvements
- Headline refinement: Consider "Your health story, finally legible." (more specific problem statement)
- Subhead: Could be shorter — "Your wearable data, unified and explainable. Share what matters with your care team — on your terms."
- The stats row is strong — keep it

### Visual
- Hero right: Product UI mockup (glassmorphism card with metric bars + insight alert + floating badge)
- Decorative blur circles: `bg-igni-sage/10` and `bg-igni-mint/10`
- Grid overlay: 48×48px mint grid at 5% opacity

### Missing (TODO for next mission)
- [ ] Framer Motion entrance animations (stagger text, slide-in product card)
- [ ] Parallax effect on decorative circles
- [ ] Hand-drawn accent under key word in headline

---

## 4. The Problem Section ❌ NOT YET BUILT

**Component:** `src/components/sections/Problem.tsx` (to create)  
**Background:** `bg-igni-cream`  
**Layout:** Eyebrow → H2 → 3 pain cards

### Headline
```
Eyebrow: "The Problem"
H2: "Your health data is everywhere. Your care team sees almost none of it."
Subtext: "You generate a rich stream of health and behavior signals every day. But between wearables, journals, apps, and your own memory — none of it arrives at your next session."
```

### 3 Pain Cards
```
Card 1: Fragmented Data
Icon: Layers (Lucide)
Headline: "Your signals don't talk to each other"
Body: "Sleep data here. HRV there. Incident logs in a notebook. Nothing connects, and pattern recognition is left entirely to you."

Card 2: Lost in Translation
Icon: MessageCircleOff (Lucide)
Headline: "Clinicians get 5 minutes of a 24/7 life"
Body: "Every session starts with 'so how have you been feeling?' — not because your clinician doesn't care, but because they have no data to work from."

Card 3: No Voice in Your Care
Icon: MicOff (Lucide)
Headline: "Your observations rarely make it into the conversation"
Body: "You noticed patterns. You kept notes. But without a structured format, they stay in your head — or on a sticky note you forget to bring."
```

### Design
- Cards: `bg-white rounded-2xl p-8 border border-igni-mint/20`
- Icon: coral-colored Lucide icon (22px) in a `bg-igni-coral/10` rounded icon container
- Subtle connecting arrow accent between cards (hand-drawn SVG, when AccentArrow is built)
- Add Framer Motion stagger on scroll reveal

---

## 5. How It Works ✅ IMPLEMENTED

**Component:** `src/components/sections/HowItWorks.tsx`  
**Background:** `bg-igni-forest text-white`  
**Layout:** 3-column step cards with connector arrows

### Copy
- Eyebrow: "How It Works"
- H2: "The future of health data sharing is here"
- Step 1: Connect Your Wearable — OAuth, 30-day backfill
- Step 2: See Your Unified Timeline — rule-based detectors, explainable insights
- Step 3: Share on Your Terms — consented Visit Share Pack, PDF export

### Privacy callout (bottom)
- "Privacy by architecture, not just policy"
- Tag grid: No EHR writeback / No clinic admin / User-initiated only / Revoke anytime

### Missing (TODO)
- [ ] Framer Motion scroll reveal on cards
- [ ] Hand-drawn connecting path SVG between steps

---

## 6. Platform Pillars (Features) ✅ IMPLEMENTED

**Component:** `src/components/sections/Features.tsx`  
**Background:** `bg-igni-cream`  
**Layout:** 3-column grid

### 6 Feature Cards (Current)
1. Multimodal Data Vault — Oura, Fitbit, Apple Health
2. Continuity Intelligence Timeline — 30-day view, rule-based detectors
3. Care Circle Chat — Multilingual, role-aware (V2)
4. Automated Workflows — EMA, incident logs, surveys (V2)
5. Visit Share Pack — PDF export, consent artifact
6. Privacy by Architecture — On-device keys, no PHI processing

### Improvement Needed
- **"Coming Soon" badges** on items 3 and 4 (Care Circle Chat, Automated Workflows) — these are V2 features. Currently no badge distinguishes them from V1 features.
- Add `coming?: boolean` prop to features array and render a "Coming in V2" badge

### Missing (TODO)
- [ ] "Coming in V2" badge on Chat + Workflows cards
- [ ] Framer Motion stagger on feature card grid

---

## 7. Trust & Privacy ✅ IMPLEMENTED

**Component:** `src/components/sections/Testimonials.tsx` (export: `Trust`)  
**Background:** `bg-white`  
**Layout:** 4-column trust pillars + 2-column founding principle callout

### Trust Pillars
1. End-to-End Encrypted
2. User-Controlled
3. Non-HIPAA V1 (Consumer Wellness)
4. No Data Sales. Ever.

### Founding Principle Callout
- Dark forest green card
- Blockquote: "The patient has the most data. They just need the right tool to make it legible — and the right to decide who sees it."
- "Join the Pilot Program" CTA → `#waitlist`

### Future Enhancement
- When pilot users are available: add 1–2 real quotes with real names, role, and context
- Until then: founding principle + trust badges is honest and strong

---

## 8. Waitlist CTA ✅ IMPLEMENTED (with real API)

**Component:** `src/components/sections/Waitlist.tsx`  
**Background:** `bg-igni-warm`  
**API:** `POST /api/waitlist` (real endpoint, Resend-ready)

### Copy
- Eyebrow: "Early Access"
- H2: "Be first to experience Igniwave"
- Subtext: "We're onboarding a small group of early users. Join the waitlist and get early access, plus input on what we build next."
- Input placeholder: "Enter your email"
- Button: "Join Waitlist →"
- Trust signals: "No spam, ever" / "Unsubscribe anytime" / "Privacy-first by default"
- Success state: checkmark + "You're on the list!" confirmation

### API Wiring
- Endpoint: `POST /api/waitlist` with `{ email: string }`
- On success: `status === "success"` → shows confirmation UI
- On error: shows API error message inline
- On network failure: "Network error. Please check your connection."
- Configured to forward to Resend when `RESEND_API_KEY` + `RESEND_AUDIENCE_ID` env vars are set

---

## 9. Footer ✅ IMPLEMENTED

**Component:** `src/components/layout/Footer.tsx`  
**Background:** `bg-igni-forest text-white`

### Structure
```
[Logo + tagline + description + social icons]    [Product links]    [Company links]    [Legal links]

© 2026 Igniwave. All rights reserved.                              Your data. Your control. Always.
```

### Link Groups
- **Product:** Solutions, How It Works, Join Waitlist
- **Company:** About, Contact
- **Legal:** Privacy Policy, Terms of Service

---

## 10. Copy Voice Guidelines

### Do
- Start with the user's problem, not Igniwave's features
- Use second person: "Your health data" not "user health data"
- Use active voice: "You generate insights" not "Insights are generated"
- Be specific: "30 days of history" not "comprehensive history"
- Use em-dashes for rhythm: "Share with your care team — on your terms"

### Don't
- "Revolutionary" / "game-changing" / "industry-leading" / "world-class"
- "Leveraging" / "synergizing" / "operationalizing"
- Fabricated social proof (no fake testimonials, no fake user counts)
- Passive voice: "Your data will be protected" → "We encrypt your data"
- Medical claims: "diagnose", "treat", "prescribe", "clinical outcome"

---

## 11. SEO & Metadata

### Root Layout (`src/app/layout.tsx`)
```
Title: "Igniwave | Wellness Intelligence Platform"
Description: "Privacy-first, consumer-controlled wellness intelligence. Connect your health data, see meaningful insights, share with your care team on your terms."
metadataBase: https://matt-site-ten.vercel.app
OG: title + description + url + siteName
Twitter: summary_large_image card
```

### Page-Level Metadata (each page should have)
```tsx
export const metadata: Metadata = {
  title: "[Page Name] | Igniwave",
  description: "[Page-specific 120–155 char description]",
};
```

### Target Keywords
- Primary: "wellness intelligence platform", "health data sharing", "wearable health insights"
- Secondary: "patient-generated health data", "PGHD", "care team sharing", "privacy-first health"
- Long-tail: "share wearable data with doctor", "health data for care provider", "visit share pack"

### OG Image (TODO)
- Create `/public/og.png` — 1200×630px branded card
- Content: Igniwave logo + tagline + forest green background
- Tool: Can be built as a Next.js `opengraph-image.tsx` route

---

## 12. Acceptance Criteria

| Section | Criterion |
|---|---|
| Navigation | Transparent on load, white/95 on scroll ≥ 20px; mobile menu works |
| Hero | Loads < 2s; CTAs scroll to correct anchors; product mockup visible on lg+ |
| Problem | 3 pain cards render; icons load; stagger animation plays once on scroll |
| How It Works | 3 steps render; privacy callout renders; connector line visible on desktop |
| Features | 6 cards render; "Coming in V2" badge on Chat + Workflows |
| Trust | 4 trust pillars; founding principle callout; pilot CTA links to #waitlist |
| Waitlist | Form validates email; API call succeeds; success state shows; errors display inline |
| Footer | All links work; social icons link to correct URLs; copyright year is dynamic |
| Mobile | All sections stack correctly; no horizontal overflow; touch targets ≥ 44px |
| Accessibility | All images have alt text; color contrast meets WCAG AA; keyboard navigable |
