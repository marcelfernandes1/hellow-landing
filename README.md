# Hellow — AI Receptionist Landing Page

Production-grade Next.js 15 landing page for Hellow, the AI receptionist for local
businesses.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript** strict
- **Tailwind CSS 3** with a custom warm-editorial token system
- **Framer Motion** for staggered reveals, spring counters, and orchestrated micro-interactions
- **Radix UI** primitives (Accordion, Slider, Slot)
- **Lucide React** icons
- **Plus Jakarta Sans** + **Fraunces** (with optical sizing) via `next/font/google`

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Start the production server |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

## Project structure

```
app/
  layout.tsx              Fonts, metadata, OG tags
  page.tsx                Assembles all 14 sections
  globals.css             Tailwind base + design tokens + keyframes
components/
  sections/               One file per landing-page section
    nav.tsx
    hero.tsx
    problem-stats.tsx
    industry-validation.tsx
    how-it-works.tsx
    features.tsx
    results.tsx
    roi-calculator.tsx
    pricing.tsx
    founder.tsx
    faq.tsx
    consultant.tsx
    final-cta.tsx
    footer.tsx
  ui/                     Button, Accordion, Slider, Badge primitives
  animated-counter.tsx    Reusable scroll-triggered counter
  phone-mockup.tsx        Hero phone with live transcription
  logo.tsx
  mobile-sticky-cta.tsx   Bottom-anchored mobile CTA (appears after scroll)
  exit-intent-popup.tsx   Desktop-only "Free Missed Call Audit" modal (sessionStorage gated)
lib/
  utils.ts                cn(), formatCurrency(), formatNumber()
public/
  logo.png                Light-mode logo (referenced by Logo)
  logo-dark.png           Dark-mode logo (used in footer)
  ceo-headshot.png        Founder headshot
  consultant-headshot.jpg Consultant headshot
```

## Placeholders to replace before launch

Search the codebase for `TODO` to find them:

- `[CEO Name]` — in `components/sections/founder.tsx` (3 instances) and pull-quote attribution
- `[Consultant Name]` — in `components/sections/consultant.tsx` (3 instances)
- Instagram DM URL — `components/sections/consultant.tsx` → `https://ig.me/m/PLACEHOLDER`
- Demo booking destinations — every CTA links to `#demo`. Wire to your Calendly / scheduling tool
- Sample-call audio playback — `components/sections/hero.tsx` ("Hear Hellow in Action")
- Newsletter handler — `components/sections/footer.tsx`
- Exit-intent capture endpoint — `components/exit-intent-popup.tsx`
- Open Graph image — drop a 1200×630 image at `public/og.png`

## Conversion features

- **Sticky nav** with translucent + blur on scroll
- **Animated counters** on stats (scroll-triggered, spring-eased)
- **Live phone-mockup transcription** in hero
- **Industry marquee** with infinite scroll + edge fade mask
- **ROI calculator** with two sliders and live spring-animated totals
- **Mobile sticky CTA** appearing after 600px of scroll
- **Exit-intent popup** on desktop (one shot per session via `sessionStorage`)
- **Annual / monthly billing toggle** (20% off on annual)

## Design tokens

Defined in `tailwind.config.ts`:

- `coral` — primary accent (50–800 ramp, default `#FF6B5B`)
- `ink` — charcoal text and inverted backgrounds (`#1A1A1A`)
- `bg`, `bg-soft`, `bg-warm`, `bg-deep` — warm peach background ramp
- `line`, `line-soft`, `line-strong` — warm borders
- Custom font sizes: `display-2xl`, `display-xl`, `display-lg`, `display-md`, `eyebrow`
- Custom shadows: `soft`, `lift`, `coral`, `card`
- Custom animations: `marquee`, `pulse-coral`, `float-slow`

## Notes

- Mobile-first: every section was laid out from 320px up
- Lighthouse-friendly: fonts are loaded via `next/font` (no FOUT), images via `next/image`, no
  client-side libraries pulled into the server tree unless required
- Accessibility: focus-visible rings on all interactive elements, semantic landmarks, ARIA
  labels on icon-only buttons, reduced-motion not yet wired but Framer Motion respects
  `prefers-reduced-motion` by default for entrance animations when configured
