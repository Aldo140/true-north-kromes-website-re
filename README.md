# True North Kromes website

The True North Kromes marketing site for digital dental framework production: CAD design, SLM metal printing, plasma polishing, and finished Co-Cr partial denture frameworks.

The site uses an industrial, precision-led visual system with ink and paper surfaces, gold registration marks, mono technical labels, image-led process storytelling, and restrained mechanical motion.

## Project links

- [GitHub Pages site](https://aldo140.github.io/true-north-kromes-website-re/)
- [Preserved pre-change Vercel build](https://v0-true-north-kromes-p6ffxomnu-prompt-and-pixel-projects.vercel.app)
- [GitHub repository](https://github.com/Aldo140/true-north-kromes-website-re)

## Tech stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Motion for scroll reveals, pinned process storytelling, and lightbox transitions
- Lenis for smooth scrolling
- Lucide React for interface icons
- Next/font with Inter and IBM Plex Mono

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Landing page with hero, process cinema, capability sections, gallery preview, and CTA |
| `/about` | Company and production overview |
| `/services` | Three production stations: design, printing, and post-processing |
| `/gallery` | Featured specimen and responsive framework archive with lightbox navigation |
| `/blog` | Articles and technical comparisons |
| `/contact` | Contact form and lab contact details |

## Project structure

```text
app/                    Pages, metadata, global styles, and layout
components/             Site sections, motion primitives, navigation, footer, and UI
public/images/          Brand, gallery, optimized, and process imagery
public/videos/          Local video assets used by the hero and services page
lib/                    Shared utilities
```

The landing-page process sequence is implemented in `components/process-cinema.tsx`. It presents four stages:

1. Scan / design
2. Laser print
3. Plasma polish
4. Finished frame

The Services page uses the local SaveClip process video in Station 03 rather than an external embed. Keep large media files in `public/videos/` and reference them with root-relative URLs.

## Getting started

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

The `main` branch is the source of truth for the repository and GitHub Pages deployment workflow. The preserved Vercel URL above remains available as the pre-change build.

Available scripts:

```bash
pnpm dev       # Start the development server
pnpm lint      # Run ESLint
pnpm build     # Create a production build
pnpm start     # Serve the production build
```

`npm`, `yarn`, and `pnpm` can be used according to the local environment, but the repository lockfile is `pnpm-lock.yaml`.

## Media guidelines

- Use descriptive `alt` text for every content image.
- Prefer the optimized files in `public/images/opt/` for grids, hero sections, and process imagery.
- Use local MP4 files for production footage when available; avoid external embeds for core page content.
- Provide a poster image for local video so the frame has a useful first paint before playback begins.
- Preserve the existing `ink`, `paper`, `gold`, `line`, and `line-dark` tokens when adding new sections.

## Design conventions

- Keep the shared `max-w-6xl` container and responsive horizontal padding consistent.
- Use the existing `Reveal`, `MachinedLines`, `DrawRule`, and `Ticker` primitives before creating new motion patterns.
- Respect `prefers-reduced-motion`; all scroll-driven content must remain visible without animation.
- Keep gold registration marks and rules geometrically straight and aligned to their containing frame.
- Check both the dark navigation treatment and light navigation treatment when adding a route.
