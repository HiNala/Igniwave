# Mission 8 — Expert Panel UI/UX Audit Log

## P0 — Critical (broken / non-functional on mobile)

- [x] Form inputs `text-[15px]` → iOS triggers auto-zoom on inputs < 16px — WaitlistSection + ContactForm
- [x] Missing `viewport-fit=cover` in viewport meta → safe-area API unavailable (notch/home indicator)
- [x] Missing `theme-color` meta → phone status bar unstyled
- [x] No `not-found.tsx` → default Next.js 404 on broken URLs

## P1 — High impact (first impression / UX)

- [x] Hero headline `text-5xl` at 320px → 48px on a 272px-wide canvas creates word-per-line wrapping. Add `text-4xl` base.
- [x] Hero CTAs: custom inline styles skip all hover/active micro-interactions. Add `hover:scale-[1.02] active:scale-[0.98] transition-all`.
- [x] `Card hover` prop includes `cursor-pointer` → false affordance on non-link feature/problem cards (Norman)
- [x] Safe-area-inset-top on Header → content hides behind iPhone X+ notch
- [x] Safe-area-inset-bottom on Footer → content hides behind home indicator
- [x] Footer social icon tap targets: 18×18px (should be 44×44px min)
- [x] Footer link tap targets: `text-sm` with no padding (should be min 44px tall)
- [x] Footer has no final CTA → dead end (Raskin / Fadell)
- [x] Hero has no scroll-down indicator → visitors can't tell there's more below the fold
- [x] ContactForm name input: missing `autocomplete="name"`
- [x] scroll-padding-top doesn't account for safe-area-inset-top
- [x] Body background transparent → iOS overscroll rubber-band shows white flash instead of cream

## P2 — Polish

- [x] No `loading.tsx` → brief blank flash on inter-page navigation
- [x] WaitlistSection email input: add `inputmode="email"` for better mobile keyboard hint
- [x] ContactForm email input: add `inputmode="email"`
- [x] Layout.tsx: missing React import (uses React.ReactNode without import)
