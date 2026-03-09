# 02 — Technical Stack Reference

**Project:** Igniwave  
**Last Updated:** March 2026  
**Purpose:** Definitive reference for all engineers — exact versions, patterns, and conventions used in this codebase.

---

## 1. Core Stack (Exact Versions)

| Package | Version | Docs URL |
|---|---|---|
| **Next.js** | 16.1.6 | https://nextjs.org/docs |
| **React** | 19.2.3 | https://react.dev |
| **TypeScript** | ^5.x | https://www.typescriptlang.org/docs |
| **Tailwind CSS** | ^4.x | https://tailwindcss.com/docs |
| **@tailwindcss/postcss** | ^4.x | https://tailwindcss.com/docs/installation/using-postcss |
| **Framer Motion** | ^12.x | https://motion.dev/docs |
| **clsx** | ^2.1.1 | https://github.com/lukeed/clsx |
| **tailwind-merge** | ^3.5.0 | https://github.com/dcastil/tailwind-merge |
| **lucide-react** | ^0.577.0 | https://lucide.dev/guide/packages/lucide-react |

**Runtime:** Node.js v20.18.0  
**Package manager:** npm 11.x  
**Deployment:** Vercel (auto-deploy from `main`)  
**Build tool:** Turbopack (Next.js 16 default for both `dev` and `build`)

---

## 2. Next.js 16 App Router — Patterns Used

### File Conventions
```
src/app/
├── layout.tsx          → Root layout (HTML shell, global fonts, metadata)
├── page.tsx            → Route component (each folder = URL segment)
├── globals.css         → Global styles + Tailwind v4 @theme configuration
├── api/
│   └── waitlist/
│       └── route.ts    → API route handler (POST /api/waitlist)
└── [route]/
    └── page.tsx        → Sub-page
```

### Server vs. Client Components
- **Default:** All components are Server Components (no JS sent to client, no hooks)
- **`"use client"` required when:** using `useState`, `useEffect`, `useRef`, event handlers, browser APIs
- **Rule:** Only add `"use client"` to the lowest-level component that needs it — never at layout level

```tsx
// ✅ Server Component (default — no directive needed)
export default function Features() {
  return <section>...</section>;
}

// ✅ Client Component (needs interactivity)
"use client";
import { useState } from "react";
export default function Waitlist() {
  const [email, setEmail] = useState("");
  ...
}
```

### Metadata API
```tsx
// src/app/layout.tsx — static metadata
export const metadata: Metadata = {
  title: "Igniwave | Wellness Intelligence Platform",
  description: "...",
  metadataBase: new URL("https://matt-site-ten.vercel.app"),
  openGraph: { ... },
  twitter: { card: "summary_large_image", ... },
};

// src/app/[route]/page.tsx — dynamic metadata
export async function generateMetadata(): Promise<Metadata> {
  return { title: "Page Title | Igniwave" };
}
```

### Font Loading (`next/font/google`)
```tsx
// src/app/layout.tsx
import { Inter } from "next/font/google";
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
// Apply: <html className={inter.variable}>
// Use in CSS: font-family: var(--font-inter)
```

### Image Optimization (`next/image`)
```tsx
import Image from "next/image";
// Always provide width, height, and alt
<Image src="/hero.jpg" alt="Descriptive alt text" width={1200} height={600} priority />
// priority — only for above-the-fold images
// quality={85} — default, adjust for performance
```

### Link Component
```tsx
import Link from "next/link";
<Link href="/about">About</Link>                   // Internal
<Link href="#waitlist">Join Waitlist</Link>         // Hash anchor
// External links: use <a> with target="_blank" rel="noopener noreferrer"
```

### API Route Handlers (App Router)
```ts
// src/app/api/[route]/route.ts
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const body = await req.json();
  return NextResponse.json({ success: true }, { status: 200 });
}
```

---

## 3. Tailwind CSS v4 — Key Differences from v3

Tailwind v4 was released January 27, 2025. **This project uses v4.** Several class names and configuration patterns changed.

### Configuration: CSS `@theme` (no `tailwind.config.ts`)
```css
/* src/app/globals.css */
@import "tailwindcss";   /* replaces @tailwind base/components/utilities */

@theme inline {
  --color-igni-forest: #1B3A2D;
  --color-igni-sage: #4A7C5C;
  /* ... */
  --font-sans: var(--font-inter);
}
```

### Class Name Changes (v3 → v4)
| v3 | v4 | Notes |
|---|---|---|
| `flex-shrink-0` | `shrink-0` | Use v4 form |
| `flex-grow` | `grow` | Use v4 form |
| `bg-gradient-to-r` | `bg-linear-to-r` | Use v4 form |
| `overflow-ellipsis` | `text-ellipsis` | Use v4 form |
| `@tailwind base` | `@import "tailwindcss"` | Single import |
| `tailwind.config.js` | `globals.css @theme` | Config in CSS |

### Custom Colors in v4
```css
@theme inline {
  --color-igni-forest: #1B3A2D;
}
/* Usage: bg-igni-forest, text-igni-forest, border-igni-forest */
/* Opacity modifiers work: bg-igni-forest/20, text-igni-mint/80 */
```

### Responsive Breakpoints (unchanged from v3)
| Prefix | Min-width |
|---|---|
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |
| `2xl:` | 1536px |

---

## 4. Framer Motion (Motion) v12 — Animation Patterns

> **Note:** Framer Motion was rebranded to "Motion" and is now at motion.dev. The package is still installed as `framer-motion`.

### Basic Entrance Animation
```tsx
"use client";
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  Content
</motion.div>
```

### Scroll-Triggered Reveal (whileInView)
```tsx
<motion.div
  initial={{ opacity: 0, y: 32 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  Revealed on scroll
</motion.div>
```

### Staggered Children
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

<motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
  {items.map((item) => (
    <motion.div key={item} variants={itemVariants}>{item}</motion.div>
  ))}
</motion.div>
```

### Hover Animations
```tsx
<motion.div whileHover={{ scale: 1.02, y: -2 }} transition={{ duration: 0.2 }}>
  Card that lifts on hover
</motion.div>
```

### Page Transitions (AnimatePresence)
```tsx
"use client";
import { AnimatePresence, motion } from "framer-motion";

<AnimatePresence mode="wait">
  <motion.div
    key={pathname}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
</AnimatePresence>
```

### Performance Rules
- Only animate `transform` (scale, translate, rotate) and `opacity` — these are GPU-accelerated
- Avoid animating `width`, `height`, `top`, `left` — these trigger layout reflows
- Use `will-change: transform` via Tailwind `will-change-transform` for complex animations
- `viewport={{ once: true }}` — don't re-animate on scroll back up

---

## 5. `cn()` Utility
```ts
// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Usage: cn("base-class", condition && "conditional-class", "override-class")
// Handles: conditional classes, conflicting Tailwind classes (twMerge resolves)
```

---

## 6. TypeScript Config
```json
// tsconfig.json highlights
{
  "compilerOptions": {
    "strict": true,        // strict mode — no implicit any, no implicit this
    "target": "ES2017",
    "paths": { "@/*": ["./src/*"] }  // import @/components/... etc.
  }
}
```

**Strict mode implications:**
- All function parameters must be typed
- No `any` — use `unknown` with type guards
- No implicit returns in non-void functions
- Use `Readonly<{}>` for props that shouldn't mutate

---

## 7. Deployment — Vercel

**Live URL:** https://matt-site-ten.vercel.app  
**Dashboard:** https://vercel.com/nalamaui30-gmailcoms-projects/matt-site  

### Environment Variables (Vercel Dashboard → Settings → Environment Variables)
| Variable | Purpose | Required |
|---|---|---|
| `RESEND_API_KEY` | Waitlist email capture via Resend | Optional (falls back to console.log) |
| `RESEND_AUDIENCE_ID` | Resend audience for waitlist contacts | Required if RESEND_API_KEY set |

### Deploy Workflow
```bash
# Auto-deploy: push to main → Vercel deploys automatically
git push origin main

# Manual production deploy:
vercel --prod

# Preview deploy (from any branch):
vercel
```

### Build Output
- Static pages (`○`): pre-rendered at build time — all marketing pages
- Dynamic routes (`ƒ`): server-rendered on demand — `/api/waitlist`

---

## 8. Security Headers (Configured in `next.config.ts`)
```
X-Frame-Options: DENY                          → no iframes
X-Content-Type-Options: nosniff               → no MIME sniffing
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Strict-Transport-Security: max-age=63072000   → HSTS
```
