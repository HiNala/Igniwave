# 01 — Competitive Analysis

**Project:** Igniwave  
**Last Updated:** March 2026  
**Purpose:** Ground design and positioning decisions in real market context.

---

## 1. Market Landscape

### The Problem Space
People with chronic conditions, developmental disabilities, and behavioral health needs generate a rich stream of daily health signals — wearables, journals, incident logs — that are:
- Fragmented across apps and devices
- Invisible to the care team between sessions
- Impossible to share in a structured, consented way without a provider portal

The result: every clinical session starts from scratch. Clinicians get a 5-minute verbal recap of a 24/7 life.

### Funding Landscape (2024–2025)
The behavioral health / digital wellness AI space is well-capitalized:

| Company | Funding | Lead Investors | Year |
|---|---|---|---|
| **Frontera Health** | $42M total ($10M seed + $32M Series A) | Lux Capital, Lightspeed Ventures | 2023–2025 |
| **SpectrumAi** | ~$20M | CVS Health Ventures | 2023 |
| **Oura Health** | $900M+ | SoftBank, others | 2024–2025 |
| **Headspace Health** | $300M+ | Various | 2021+ |
| **CentralReach** | Private (PE-backed) | Apax Partners | Ongoing |

### Why Now
Three forces are converging:
1. **Wearable ubiquity** — 30%+ of US adults now own a health wearable (Oura, Fitbit, Apple Watch, Garmin)
2. **AI cost collapse** — Rule-based and LLM inference is cheap enough to run on user-owned data
3. **Consumer health data rights** — CMS interoperability rules (2021+) and growing patient advocacy are normalizing the idea that patients own their data

---

## 2. Frontera Health — Primary Design Reference

**URL:** https://fronterahealth.com  
**Founded:** 2023, Denver CO  
**Founders:** Amol Deshpande, Manu Kohli, Jeff Flores  
**Tagline:** "AI for health equity"  
**Business Model:** Provider-side SaaS — ABA clinics and BCBAs buy it

### What They Build
- **Assessment Builder** — AI-assisted autism assessment and diagnostic report generation
- **Diagnosis Builder** — Structured diagnostic workflow with DSM-5 criteria
- **Digital Phenotyping** — Computer vision analysis of therapeutic sessions (30 fps)
- **Innovation Center** — First physical ABA clinic (Denver) combining diagnostics + therapy

### Site Architecture (as observed, Feb 2025)
```
Hero (full-bleed warm family photography + forest green overlay)
  → "AI for health equity" headline
  → "Our Solutions" + "Get a Demo" CTAs
↓
Pain Section: "Too much paperwork, too little time"
  → 3 pain cards: documentation burden, access barriers, burnout
↓
Solution Section: "The future of behavioral therapy is here"
  → Dark forest green BG, left text / right product screenshot layout
  → "Deeper insights & data / Unmatched detail & precision / True digital phenotyping"
↓
Product Demo: "Assessment Builder" + "Diagnosis Builder" feature deep-dives
↓
Testimonials: Named BCBAs with credentials (BCBA, M.S., LBA designations)
  → "My documentation time during the evaluation process has been significantly reduced"
  → "I now spend less than 50% of the time crafting well-formulated notes"
↓
Privacy/Security section: Bot detection, RBAC, compliance badges
↓
Footer: Solutions, About Frontera, Fellowship, Resources, Contact
```

### Visual Identity Analysis
- **Primary color:** Deep forest green (#1B3A2D-ish) — trust, nature, clinical authority
- **Background:** Warm cream / warm beige — approachable, not sterile
- **Accents:** Hand-drawn underline SVGs under key words (wavy coral/sage lines), squiggle dividers
- **Photography:** Warm, candid family moments — golden hour lighting, outdoor/home settings, NOT hospital/clinical
- **Typography:** Serif display for headlines (emotional weight), clean sans-serif for body
- **CTA buttons:** Rounded-full, forest green primary, ghost secondary
- **Card style:** Rounded corners, subtle shadows, cream or white backgrounds

### Messaging Patterns
- Pain-first framing: lead with the problem, then the solution
- "Deliver [X] in half the time" — time savings as primary value prop
- Credentials in testimonials (BCBA, LBA) build trust with clinical audience
- "AI for health equity" — positions technology as a tool for access, not replacement

### Critical Observation
Frontera is a **provider tool** — the clinic is the customer, the clinician operates it, and the patient is the subject. This is fundamentally different from Igniwave's posture.

---

## 3. Other Competitors

### Oura Ring
**URL:** https://ouraring.com  
**Model:** Consumer DTC wearable subscription ($6/month)  
**Revenue:** Doubled in 2024; targeting $1B in 2025  
**Relevant to Igniwave:**
- Gold standard for sleep + HRV tracking at consumer scale
- Privacy-forward: data stored on user account, API available
- No longitudinal intelligence layer — raw data, basic trends
- No care-team sharing feature
- **Igniwave opportunity:** Be the intelligence + sharing layer *on top of* Oura data

### Headspace
**URL:** https://headspace.com  
**Model:** B2C wellness app (meditation, sleep, stress)  
**Design lessons:**
- Warm, friendly color palette (orange, soft purples)
- Benefit-oriented copy ("Feel less stressed in 30 days")
- Social proof via aggregate numbers ("68M members worldwide")
- Soft CTAs — "Try for free" rather than "Get a Demo"
- Mobile-first design: everything assumes thumb reach

### CentralReach
**URL:** https://centralreach.com  
**Model:** B2B ABA practice management (PE-backed, large enterprise)  
**Products:** EHR, billing, scheduling, session notes, clinical programming, ABA data collection  
**Relevant to Igniwave V2:**
- This is the integration target for V2 clinical tier
- CentralReach has no consumer-side component — providers use it, patients don't
- FHIR-compliant data model; HL7 integrations available
- **Igniwave V2 play:** Igniwave becomes the patient-facing layer that pipes consented PGHD into CentralReach workflows

### SpectrumAi
**Model:** AI-powered ABA session analysis (computer vision, similar to Frontera's digital phenotyping)  
**Backed by:** CVS Health Ventures (~$20M)  
**Differentiation:** Insurance-integrated (CVS connection); clinician-facing tool

### Floreo
**Model:** VR-based therapy for autism  
**Niche:** Immersive behavioral skill-building — not a data/intelligence platform

---

## 4. Igniwave Differentiation

| Dimension | Frontera Health | Igniwave V1 |
|---|---|---|
| **Customer** | ABA clinic / BCBA | Individual patient / caregiver |
| **Data controller** | Clinic | User |
| **Sharing model** | Clinic portal → records | Patient-directed export only |
| **HIPAA posture** | HIPAA-covered (BAA required) | Non-HIPAA (consumer wellness) |
| **Primary output** | Clinical documentation | Visit Share Pack (PGHD) |
| **Revenue model** | Per-clinician SaaS seat | Consumer subscription |

**The key differentiator:**  
Frontera requires a clinic to buy in, onboard, and maintain a portal. Igniwave requires nothing from the clinic — the patient generates their own intelligence and hands it to the provider in a format they can use immediately. No portal, no login, no BAA required in V1.

**The positioning:**  
> "Frontera is for the clinic. Igniwave is for the patient."

---

## 5. Design Lessons to Apply

| Lesson | Source | Application |
|---|---|---|
| Hand-drawn SVG accents add warmth | Frontera | Build `AccentUnderline`, `AccentArrow`, `AccentCircle` SVG components |
| Forest green = trust + clinical authority | Frontera, general health | Our palette already uses this — lean in |
| Pain-first page structure converts better | Frontera, Headspace | Add a "The Problem" section before "How It Works" |
| Named testimonials with credentials | Frontera | Use pilot user quotes with role/context once we have them |
| Warm photography over stock | Frontera, Headspace | Use abstract warm gradients + illustration until real photos available |
| Soft rounded CTAs feel safer in health | Frontera, Headspace | Rounded-full buttons throughout — already implemented |
| Privacy section is non-negotiable | Frontera, general | Already have Trust section — expand for production |
| Benefit in headline, proof in subtext | Headspace | "Your Health Story, Intelligently Told" → needs a benefit reframe |

---

## 6. Messaging Opportunities Competitors Miss

1. **"You own it"** — No competitor explicitly positions data ownership as the hero message
2. **"No clinic required"** — The ability to get value without provider onboarding is completely unique
3. **"What changed since last visit"** — The delta-based Visit Share Pack is novel
4. **Privacy as architecture** — Competitors talk about compliance; Igniwave can talk about encryption and user control at a technical level, which builds deeper trust
