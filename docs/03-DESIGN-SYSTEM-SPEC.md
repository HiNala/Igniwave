# 03 — Design System Specification

**Project:** Igniwave  
**Last Updated:** March 2026  
**Purpose:** Complete design language reference. Any engineer can implement any component without guessing.

---

## 1. Brand Identity

**Name:** Igniwave  
**Tagline:** "Wellness Intelligence, On Your Terms"  
**Sub-tagline:** "Your health data. Your story. Your choice."

### Voice & Tone
- **Warm** — like a knowledgeable friend, not a clinician or a salesperson
- **Clear** — short sentences, active voice, no jargon
- **Empowering** — puts the user in control; never paternalistic
- **Honest** — no overblown claims; we show evidence, not hype
- **Never:** "revolutionary", "game-changing", "cutting-edge", "leveraging synergies"
- **Always:** specific benefits, user-first framing ("you", "your"), evidence-backed claims

### Brand Personality Dimensions
| Dimension | Score (1–5) | Notes |
|---|---|---|
| Warm ↔ Clinical | 4 (Warm) | Approachable but credible |
| Simple ↔ Sophisticated | 3 (Balanced) | Smart but not intimidating |
| Consumer ↔ Professional | 3.5 (Consumer-leaning) | Individual first, clinician-useful |
| Private ↔ Open | 4 (Private) | Privacy is the core value |

---

## 2. Color Palette

### Primary Palette
| Token | Hex | RGB | Usage |
|---|---|---|---|
| `igni-forest` | `#1B3A2D` | 27, 58, 45 | Nav, footer, hero BG, primary trust |
| `igni-forest-light` | `#2a5242` | 42, 82, 66 | Forest gradient mid-point |
| `igni-sage` | `#4A7C5C` | 74, 124, 92 | Buttons, links, section accents |
| `igni-mint` | `#A8D5BA` | 168, 213, 186 | Highlights, badges, on-dark accents |
| `igni-cream` | `#FDF8F0` | 253, 248, 240 | Page background (primary) |
| `igni-warm` | `#F5E6D3` | 245, 230, 211 | Section backgrounds (alternating) |
| `igni-coral` | `#E87461` | 232, 116, 97 | CTAs, alerts, warmth, notifications |
| `igni-charcoal` | `#2C2C2C` | 44, 44, 44 | Primary body text |
| `igni-slate` | `#6B7280` | 107, 114, 128 | Secondary text, captions |
| `igni-white` | `#FFFFFF` | 255, 255, 255 | Cards, containers |

### WCAG 2.1 AA Contrast Ratios
> **WCAG AA requires:** 4.5:1 for normal text (< 18px or bold < 14px), 3:1 for large text (≥ 18px or bold ≥ 14px), 3:1 for UI components

| Foreground | Background | Ratio | AA Normal | AA Large | Notes |
|---|---|---|---|---|---|
| `igni-charcoal` | `igni-cream` | ~11.5:1 | ✅ PASS | ✅ PASS | Primary body text combo |
| `igni-charcoal` | `white` | ~12.6:1 | ✅ PASS | ✅ PASS | |
| `white` | `igni-forest` | ~14.1:1 | ✅ PASS | ✅ PASS | Nav, footer text |
| `igni-mint` | `igni-forest` | ~6.8:1 | ✅ PASS | ✅ PASS | Accent text on dark |
| `igni-coral` | `igni-forest` | ~4.7:1 | ✅ PASS | ✅ PASS | CTA on dark BG |
| `igni-coral` | `white` | ~3.2:1 | ⚠️ FAIL | ✅ PASS | Use coral for large/bold text only on white |
| `igni-sage` | `white` | ~4.4:1 | ⚠️ BORDERLINE | ✅ PASS | Use sage for ≥ 18px or bold text; use charcoal for small body text |
| `igni-sage` | `igni-cream` | ~4.2:1 | ⚠️ FAIL | ✅ PASS | Same — large/bold text only |
| `igni-slate` | `white` | ~4.6:1 | ✅ PASS | ✅ PASS | Caption text on white |
| `igni-slate` | `igni-cream` | ~4.4:1 | ⚠️ BORDERLINE | ✅ PASS | Prefer charcoal for small text on cream |

**Actionable rules:**
- Body text on cream/white: always use `igni-charcoal` (not sage, not slate for < 16px)
- Section labels (uppercase, small, bold): `igni-sage` is acceptable at ≥ 12px bold
- Never use `igni-coral` as body text on white
- On dark (`igni-forest`) backgrounds: use white or `igni-mint` for text

---

## 3. Typography

### Font Stack
| Role | Font | Source | Variable |
|---|---|---|---|
| **Body / UI** | Inter | `next/font/google` | `--font-inter` |
| **Future display** | Plus Jakarta Sans or DM Serif Display | `next/font/google` | To be added |

Currently using Inter for all text. Recommended upgrade path:
- Add **DM Serif Display** for H1 hero headlines (emotional weight, editorial feel)
- Keep **Inter** for H2–H6, body, UI elements

### Type Scale
| Step | Size | Line Height | Weight | Usage |
|---|---|---|---|---|
| `text-xs` | 12px | 1.5 | 400/600 | Labels, badges, captions |
| `text-sm` | 14px | 1.5 | 400/500 | Secondary body, tags |
| `text-base` | 16px | 1.6 | 400 | Primary body text |
| `text-lg` | 18px | 1.6 | 400 | Large body, lead paragraphs |
| `text-xl` | 20px | 1.4 | 600/700 | Card headings, sub-headers |
| `text-2xl` | 24px | 1.3 | 700 | Section sub-heads |
| `text-3xl` | 30px | 1.2 | 700 | Section headings (mobile H2) |
| `text-4xl` | 36px | 1.15 | 700 | Section headings (desktop H2) |
| `text-5xl` | 48px | 1.1 | 700/800 | Page headings (desktop H1) |
| `text-6xl` | 60px | 1.05 | 800 | Hero headline (large desktop) |

### Typography Rules
- Max line length: 65–72 characters (use `max-w-prose` or `max-w-2xl`)
- Paragraph spacing: `mb-4` between paragraphs
- Section labels: `text-sm font-semibold uppercase tracking-wider` in `igni-sage` or `igni-mint`
- Never use italic for entire paragraphs — reserve for emphasis only

---

## 4. Spacing & Layout

### Base Unit: 4px (Tailwind default)
```
4px  = space-1
8px  = space-2
12px = space-3
16px = space-4
20px = space-5
24px = space-6
32px = space-8
40px = space-10
48px = space-12
64px = space-16
80px = space-20
96px = space-24
128px = space-32
```

### Section Padding
| Screen | Vertical | Horizontal |
|---|---|---|
| Mobile (< 640px) | `py-16` (64px) | `px-6` (24px) |
| Tablet (640–1024px) | `py-20` (80px) | `px-8` (32px) |
| Desktop (≥ 1024px) | `py-24` or `py-32` (96–128px) | `px-8` (32px) |

### Container
```
max-w-7xl mx-auto px-6 lg:px-8
```
Max content width: **1280px** (`max-w-7xl`). Always centered with horizontal padding.

### Grid System
| Use case | Class |
|---|---|
| 2-column (content + visual) | `grid lg:grid-cols-2 gap-16 items-center` |
| 3-column features | `grid grid-cols-1 md:grid-cols-3 gap-8` |
| 4-column trust pillars | `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6` |
| 5-column footer | `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10` |

---

## 5. Component Patterns

### Buttons
```tsx
// Primary CTA (coral — high emphasis)
className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-igni-coral text-white font-semibold hover:bg-igni-coral/90 transition-all duration-200 shadow-lg hover:shadow-xl text-base"

// Secondary CTA (forest — medium emphasis)
className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-igni-forest text-white font-semibold hover:bg-igni-sage transition-colors duration-200"

// Ghost CTA (outlined — low emphasis, on dark BG)
className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/25 text-white font-semibold hover:bg-white/10 transition-all duration-200"

// Disabled state (all variants)
className="... disabled:opacity-60 disabled:cursor-not-allowed"
```

### Cards
```tsx
// Standard feature card
className="bg-white rounded-2xl p-8 border border-igni-mint/20 hover:border-igni-sage/30 hover:shadow-lg transition-all duration-300 group"

// Dark card (on forest background)
className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-igni-mint/30 rounded-2xl p-8 transition-all duration-300"

// Warm card (on cream background)
className="bg-igni-cream rounded-2xl p-8 border border-igni-mint/20"

// Elevated callout card
className="bg-igni-forest rounded-3xl p-10 lg:p-14"
```

### Section Labels (eyebrow text)
```tsx
<span className="inline-block text-igni-sage text-sm font-semibold uppercase tracking-wider mb-3">
  Section Label
</span>
```

### Badges / Tags
```tsx
// Status badge (sage/mint — positive)
className="text-xs text-igni-sage bg-igni-mint/20 px-2.5 py-1 rounded-full font-medium"

// Status badge (coral — attention/coming soon)
className="text-xs text-igni-coral bg-igni-coral/10 px-2.5 py-1 rounded-full font-medium"

// Pill badge (on dark)
className="text-xs text-igni-mint/80 bg-igni-mint/10 px-2.5 py-1 rounded-full"
```

### Form Inputs
```tsx
// Email input
className="w-full px-5 py-3.5 rounded-full border border-igni-mint/40 bg-white text-igni-charcoal placeholder:text-igni-slate/60 focus:outline-none focus:ring-2 focus:ring-igni-sage/30 focus:border-igni-sage text-sm"

// Error state
className="... border-igni-coral focus:ring-igni-coral/30 focus:border-igni-coral"
```

---

## 6. Hand-Drawn Accent System

Inspired by Frontera Health's visual identity. Adds warmth and approachability to clinical/health content.

### Planned SVG Components (`src/components/icons/`)

**`AccentUnderline.tsx`** — Wavy underline under key headline words
```tsx
// Props: color (default: igni-coral), width (default: 100%)
// Usage: Wrap key word in <span className="relative"><span>word</span><AccentUnderline /></span>
```

**`AccentCircle.tsx`** — Rough hand-drawn circle around a stat or number
```tsx
// Props: color, strokeWidth
// Usage: Wrap stat number inside component
```

**`AccentArrow.tsx`** — Curved arrow pointing to a CTA or key element
```tsx
// Props: direction ("right" | "down"), color
```

**`AccentSquiggle.tsx`** — Organic wave divider between sections
```tsx
// Props: color, width, height
// Position: absolute, -bottom-px of preceding section
```

### Implementation Principles
- All accents are pure SVG (no raster, scales perfectly)
- Use `aria-hidden="true"` on all accent SVGs (decorative only)
- Colors: coral (`#E87461`) for energy/CTA accents; sage (`#4A7C5C`) for calm/section accents
- Stroke-based (not filled) for the hand-drawn aesthetic
- `stroke-linecap: round; stroke-linejoin: round` for organic look

---

## 7. Motion & Animation

### Entrance Animations
```
Initial state: opacity: 0, translateY: 24px
Final state:   opacity: 1, translateY: 0
Duration:      0.6s
Easing:        easeOut (cubic-bezier(0, 0, 0.2, 1))
Stagger:       0.1s between siblings
Viewport:      once: true, margin: "-80px"
```

### Scroll Reveal Rule
Elements animate in when they are 80px into the viewport. Never re-animate on scroll back up (`once: true`).

### Hover States
| Element | Hover Effect |
|---|---|
| Feature cards | `translateY(-2px)` + shadow increase |
| Buttons | Background lightens + shadow increase |
| Nav links | Color → `igni-mint` |
| Icon in card | `scale(1.1)` |
| Logo | Background color transition |

### Transitions
- Standard: `transition-all duration-200` for color/shadow
- Slow: `transition-all duration-300` for transform-heavy hovers
- Page fade: `duration-300` via `AnimatePresence`

### Performance Rules
- Only animate `transform` and `opacity` properties
- Never animate `width`, `height`, `padding`, `margin`
- `will-change-transform` only for complex continuous animations (parallax)
- Mobile: reduce or disable parallax effects

---

## 8. Photography & Imagery Direction

### V1 Strategy (No Custom Photography Available Yet)
- **DO NOT** use generic stock photography — it undermines the privacy-first brand
- **USE instead:** Abstract warm gradients + hand-drawn SVG accents as the visual system
- Warm gradient background on hero: `linear-gradient(135deg, #1B3A2D → #2a5242 → #4A7C5C)`
- Abstract geometric shapes + blur effects for depth
- Product UI mockups (built in code, not screenshots) for the hero card

### Future Photography Direction (V2+)
- **Lighting:** Warm, natural, golden hour — never flash or clinical white light
- **Subjects:** Real families, real caregivers, diverse representation, candid moments
- **Settings:** Home environments, parks, outdoor — NOT hospitals, clinics, labs
- **Style:** Documentary feel, not posed — subjects mid-activity, not looking at camera
- **Avoid:** White lab coats, hospital equipment, anything that signals "clinic"
- **Aspect ratios:** 16:9 for hero banners, 4:3 for section imagery, 1:1 for avatars

### Illustration Direction (V1 Use)
- Line-weight: 1.5–2px strokes
- Style: Clean geometric, not clipart
- Palette: Forest/sage/mint on cream backgrounds
- Icons: Lucide React (already installed) — consistent 22px size, 1.5px stroke
