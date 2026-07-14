# TNK Homepage Redesign — "Industrial Precision"

Date: 2026-07-14. Scope: homepage only (`app/page.tsx` composition unchanged: Hero → About → WhyTNK → GalleryPreview → CTABanner). Nav + footer restyled to match. Other pages untouched for now.

## Client & problem

True North Kromes (TNK) — Canadian dental lab that 3D-prints Co-Cr partial denture frameworks via SLM (selective laser melting), plasma-polishes them in-house, ships to dental labs/denturists. Current site is bland and unclear: visitors must read paragraphs to understand what TNK does. The hero video (SLM printer) is liked but vague.

**Design thesis:** the site should feel like the product — machined, exact, no ornament. Every visual and motion choice maps to a real manufacturing action. Comprehension is visual-first: a visitor understands "digital design → laser-printed metal → polished framework" in 2 seconds without reading.

## Tokens (already in `app/globals.css`)

| Token | Value | Use |
|---|---|---|
| `ink` | `#101113` | dominant dark field (charcoal, never pure black) |
| `ink-soft` | `#191b1e` | raised surfaces on ink |
| `paper` | `#f2f0ec` | warm off-white light sections |
| `gold` | `#c9a227` | accent — thin rules, single numerals, active markers ONLY. Never fills, never gradients, never large text blocks |
| `gold-dim` | `#8a7119` | gold on light backgrounds (contrast) |
| `line` | `rgba(255,255,255,0.14)` | hairline rules on ink |
| `line-dark` | `rgba(16,17,19,0.16)` | hairline rules on paper |

Section rhythm on homepage: Hero (video/ink) → About (paper) → WhyTNK (ink) → Gallery (paper) → CTA (ink). Footer: ink.

## Type

- **Body/headlines:** Inter (existing, `font-sans`). Headlines: large, tight tracking (`tracking-[-0.02em]`), weight 500–600, `text-balance`.
- **Technical labels:** IBM Plex Mono (`font-mono`, wired in layout.tsx). Reserved for: eyebrows, stage numbers, specimen labels, stat callouts, footer micro-copy. Uppercase, `text-[11px]`–`text-xs`, `tracking-[0.18em]`. Style: `SLM · CO-CR · ±0.02 MM`. Mono is information (machine-readable vibe), not decoration — every mono label must state a real fact.

## Motion vocabulary (mechanical, not organic)

- Shared primitives in `components/motion-primitives.tsx` — USE THEM: `Reveal`, `DrawRule`, `EASE_MECH`, `DUR`. For scroll-linked work use `motion/react` (`useScroll`, `useTransform`, `useInView`) directly with the shared constants.
- Easing: `EASE_MECH = [0.16, 1, 0.3, 1]` style precise settle. NO spring/bounce. Durations 200–600ms.
- Every animation maps to a machine action: parts sliding into registration, a rule "machined" across, a progress line filling linearly, brackets locking onto a target.
- Respect `prefers-reduced-motion` (primitives handle it; do the same in custom code).
- Each section gets a DISTINCT motion treatment (specified below). Do NOT apply a uniform fade-up to everything — that's the #1 generated-site tell. The blanket `section { animation: fadeInUp }` has been removed from globals.css; never reintroduce it.

## Anti-patterns (hard bans)

No gradient text. No glassmorphism/frosted cards. No blob/mesh backgrounds. No rounded corners (`--radius: 0` sitewide — keep it). No icon-card three-across grids. No centered-hero-with-two-buttons. No emoji. No stock photography vibes — only the real lab/product images listed below.

## Section specs

### 1. Hero (`components/hero.tsx`) — THE SIGNATURE
Full-viewport (min-h-[100svh]) video background (`/videos/printer-demo.mp4`, autoplay muted loop playsInline, poster `/images/framework-hero.jpg`), dark overlay `bg-ink/55` + bottom gradient to ink so the rail reads.
- Copy (left-aligned, lower-third): eyebrow mono gold `CO-CR · SLM · IN-HOUSE`; H1 `Metal partial frameworks. Printed, not cast.` (two lines, clamp ~2.5–4.5rem); one subhead: `One-stop digital manufacturing for dental labs — design, laser-print, polish, deliver.`; single CTA text link `See the process →` → `#process` anchor.
- **Process rail** stitched along the hero bottom edge: 4 stages, each = mono label + small photo thumb (aspect 4/3, ~96–120px wide on desktop):
  - `01 SCAN / DESIGN` → `/images/cad-design.png`
  - `02 LASER PRINT` → `/images/gallery-build-plate-printer.jpg`
  - `03 PLASMA POLISH` → `/images/gallery-dlyte-polishing-action.jpg`
  - `04 FINISHED FRAME` → `/images/framework-polished.jpg`
  Auto-cycles ~4s/stage. A 1px gold progress line under the active stage fills linearly (width 0→100%, linear easing — it's a timer). Active thumb gets gold viewfinder corner brackets (4 L-shaped corners, drawn via CSS borders or SVG) that MOVE to the active stage (layout animation or animated position). Inactive thumbs dimmed (`opacity-50 grayscale`). Click a stage → link to `/services`. Pause cycle on hover. On mobile: rail becomes a horizontal scroll strip or 2×2 grid — must stay visible, it carries the comprehension job.
- Load choreography: headline visible immediately (no fade-wait). Rail slides up 24px + fades ~300ms after load. Scroll: video scales 1→1.06 subtle parallax via useScroll; text static.

### 2. About (`components/about.tsx`) — "The operation" (paper section, id="process" anchor target)
NOT a text-blob-next-to-photo. Editorial split: oversized statement headline (Inter, ~clamp 1.75–3rem) taking ~60% width: `A dental lab built like a machine shop.` Below it one short paragraph (real facts: Canadian, in-house end-to-end — design, SLM printers, plasma polishing; Health-Canada-licensed Mediloy alloy). Right/offset: `/images/gallery-lab-wide.jpg` full-bleed-ish, with a mono caption bar beneath: `TRUE NORTH KROMES · CANADA`. Three mono fact lines (not cards) separated by hairline rules: `MATERIAL — Mediloy S Co-Cr, licensed` / `PROCESS — SLM + plasma polish, in-house` / `CLIENTS — dental labs & denturists`. Motion: the hairline rules "machine" across (DrawRule, staggered), image clips in with a clip-path or x-offset reveal. Distinct from hero: no progress lines, no brackets.

### 3. WhyTNK (`components/why-tnk.tsx`) — "Spec sheet" (ink section)
Reframe as a technical data sheet comparing printed vs cast. Mono header row: `SPEC — PRINTED vs CAST`. 4 full-width rows separated by hairlines (NOT cards), each row: mono spec label left, plain-language claim right, and where honest a cast-vs-printed contrast. Rows:
1. `FIT` — Printed from the scan itself — no investment, no shrinkage. Repeatable to ±0.02 mm.
2. `STRUCTURE` — Laser-fused Co-Cr, dense and porosity-free. Cast frames trap flaws you can't see.
3. `TURNAROUND` — Days, not weeks. No wax, no burnout, no re-casts.
4. `CONSISTENCY` — The tenth frame matches the first. Machines don't have off days.
Motion (distinct): each row reveals with a thin gold line sweeping left→right across it once (laser pass), staggered on scroll into view. Big row numbers optional in mono. Ends with text link `Full comparison →` `/blog/comparison-traditional-vs-3d-printed`.

### 4. GalleryPreview (`components/gallery-preview.tsx`) — "Specimens" (paper section)
Off-axis editorial grid, NOT a uniform 3-col grid: mixed sizes (one large ~2/3-width image, satellites offset), asymmetric column starts. 4–5 images from: `/images/framework-detail.jpg`, `/images/framework-clasps.jpg`, `/images/framework-tweezers.jpg`, `/images/framework-full.jpg`, `/images/chrome-crowns.jpg`, `/images/framework-upper-side.jpg`. Each image gets a mono specimen label under it: e.g. `SPEC 014 — UPPER · CLASP DETAIL`, `SPEC 007 — FULL ARCH · POLISHED`. Motion (distinct): columns scroll at slightly different rates (useScroll + useTransform y-offsets, ±20–40px) — a subtle parallax shear; images themselves static (no hover-zoom slop). Header: mono eyebrow `RECENT WORK`, headline `Off the build plate.` Link `View gallery →` `/gallery`.

### 5. CTABanner (`components/cta-banner.tsx`) — ink section
Single confident line, left-aligned: `Send your first case.` + one sentence: `Volume pricing, personal upload link, support through the whole production cycle.` One solid CTA button (paper bg, ink text, square) → `/contact`. A single gold DrawRule above the headline. No other decoration. Motion: rule draws, headline reveals once on view. 

### 6. Navigation (`components/navigation.tsx`) + Footer (`components/footer.tsx`)
Nav: keep absolute overlay + isHome white-text logic and Portal link exactly as-is functionally. Restyle: nav links in mono uppercase 11px tracking-wide; active link gets a 1px gold underline offset; mobile menu becomes ink background, mono links, hairline dividers (hamburger must stay visible on white pages — keep current color logic). Keep logo img.
Footer: ink background always. Three-column: logo + one-line description / mono nav links / contact (email, portal). Bottom bar: hairline rule, mono micro-copy `© 2026 TRUE NORTH KROMES INC · CANADA`. Gold used once (e.g., rule or email hover).

## Constraints for implementers

- Own ONLY your assigned file(s). Do not edit globals.css, layout.tsx, page.tsx, package.json, or other agents' components.
- `motion` package (v12, import from `"motion/react"`) is installed. Client components need `"use client"`.
- Plain `<img>` is fine (images.unoptimized is set); always set width/height or aspect-* class to prevent CLS, `loading="lazy"` below the fold (NOT on hero rail thumbs).
- Keyboard focus visible, alt text real, `aria-label`s meaningful. `prefers-reduced-motion` respected.
- Verify your file compiles: `npx tsc --noEmit` scoped mentally — no new deps, no new files except your assigned ones.
