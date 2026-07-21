# True North Kromes Design System

## Theme

Industrial precision with cinematic process photography. The site uses hard-edged frames, registration marks, controlled asymmetry, and motion that resembles machine movement. Corners remain square throughout.

## Color

- Ink: `#101113`, primary dark surface
- Ink soft: `#191b1e`, elevated dark surface
- Paper: `#f2f0ec`, primary light surface
- Gold: `#c9a227`, active marks and key progress
- Gold dim: `#8a7119`, accessible accent on paper
- Light line: `rgba(255, 255, 255, 0.14)`
- Dark line: `rgba(16, 17, 19, 0.16)`

Gold is a registration and state color, not a decorative fill. Dark and light sections may alternate only when the transition is deliberate and full-width.

## Typography

- Sans: Inter through `next/font`, weights 300-700
- Technical labels: IBM Plex Mono through `next/font`, weights 400-500
- Display tracking: no tighter than `-0.04em`
- Body measure: target 52-65 characters with relaxed line height
- Mono labels: 10-11px, uppercase, 0.16-0.18em tracking

## Layout

- Main content width: `max-w-6xl`
- Horizontal padding: 20px mobile, 24px small, 48px large
- Breakpoint for complex two-column motion: `lg`
- Full-height moments use `min-height: 100dvh`
- Sticky media pins at approximately 96px from the viewport top and releases at its parent boundary

## Shape and Material

- Radius: zero across cards, images, inputs, and controls
- Borders: one-pixel rules using the line tokens
- Photography: real lab, printer, polishing, and finished-framework imagery
- Gold L-brackets and rules indicate inspection or registration
- Grain remains a fixed, pointer-transparent material layer

## Motion

- Primary easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- UI easing: `cubic-bezier(0.23, 1, 0.32, 1)`
- Drawer easing: `cubic-bezier(0.32, 0.72, 0, 1)`
- UI transitions: 160-280ms
- Narrative entrances: 450-650ms
- Continuous marquees: linear, with pause controls where information is conveyed
- Dynamic scroll progress: Motion `useScroll` and transform-only output
- One-time reveals: IntersectionObserver or Motion viewport observers

Reduced motion removes positional movement, typewriter timing, parallax, and infinite loops while keeping content fully visible.

## Reusable Patterns

- `StickyMediaStory`: pinned image with scrolling narrative beats and alternating image side
- `CurtainTransition`: incoming solid section overlays a pinned outgoing section
- `TypewriterHeadline`: one-time character reveal with semantic full-text fallback
- `AmbientMarquee`: low-opacity background type rows
- `ProcessTicker`: pausable continuous process-card rail
- `VerticalScrollTimeline`: alternating timeline with a scroll-grown connector
- `SwapFaq`: question list that controls a separate sticky answer panel
- `CrossfadeCarousel`: arrow-controlled image, title, and description crossfade
- `Navigation`: full-screen overlay with photo collage and edge marquee
