# True North Kromes Developer Guide

This document is the technical and operational handoff for the True North Kromes website. Read it before changing application behavior, business information, infrastructure, SEO, contact delivery, or the design system.

## 1. System overview

The application is a Next.js App Router site deployed to Vercel at `https://www.tnkromes.ca/`.

```text
Browser
  ├─ Static and server-rendered Next.js pages
  ├─ Local images and videos from /public
  ├─ Optional GA4 events
  └─ POST /api/contact
       └─ Resend API
            ├─ Primary lead recipient
            └─ CC recipient

GitHub main branch
  └─ Vercel production deployment
       ├─ Environment variables
       ├─ Server-side Route Handlers
       └─ tnkromes.ca custom domain and DNS
```

The public website is primarily statically generated. `/api/contact` requires a Node.js server runtime and is the reason Vercel—not GitHub Pages—is the production target.

## 2. Requirements and installation

Recommended local versions:

- Node.js 22
- pnpm 10
- Git

Install and run:

```bash
git clone https://github.com/Aldo140/true-north-kromes-website-re.git
cd true-north-kromes-website-re
pnpm install --frozen-lockfile
cp .env.example .env.local
pnpm dev
```

Open `http://localhost:3000`.

Use pnpm for dependency changes so `pnpm-lock.yaml` remains authoritative. Do not create or commit another project lockfile.

## 3. Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the Turbopack development server |
| `pnpm exec tsc --noEmit` | Run strict TypeScript validation |
| `pnpm build` | Produce the optimized Next.js build |
| `pnpm start` | Serve the completed production build |
| `pnpm lint` | Reserved, but currently non-functional until ESLint is installed and configured |

Required checks before deployment:

```bash
pnpm exec tsc --noEmit
pnpm build
git diff --check
```

The Next.js config currently sets `typescript.ignoreBuildErrors: true`, so a successful `pnpm build` does **not** replace the explicit TypeScript command.

## 4. Repository map

```text
app/
  api/contact/route.ts       Resend-backed lead endpoint
  blog/[slug]/page.tsx       Static article generation and article SEO
  globals.css                Tailwind import, tokens, global motion, and responsive rules
  layout.tsx                 Fonts, global metadata, JSON-LD, analytics, and shared shell
  manifest.ts                Web-app manifest
  opengraph-image.tsx        Dynamic social image
  robots.ts                  Crawler policy
  sitemap.ts                 XML sitemap entries
  */page.tsx                 Route content

components/
  experience.tsx             Smooth scrolling and shared experiential helpers
  interactive-patterns.tsx   FAQ and cross-fade interaction components
  motion-primitives.tsx      Reveal, rules, ticker, and shared animation values
  navigation.tsx             Header and full-screen menu
  process-cinema.tsx         Home production sequence
  scroll-patterns.tsx        Reusable sticky, marquee, timeline, and ticker patterns
  timeline-cinema.tsx        Timeline production experience
  tracked-cta.tsx            GA-aware CTA wrapper
  contact-form.tsx           Case-intake UI and validation
  contact-info.tsx           Canonical public contact actions

lib/
  analytics.ts               Safe `gtag` wrapper
  site-path.ts               GitHub Pages base-path helper
  utils.ts                   Shared class utility

public/images/               Brand and production photography
public/images/opt/           Preferred optimized image variants
public/videos/               Local production video assets
scripts/                     Image-processing utilities

PRODUCT.md                   Product and audience definition
DESIGN.md                    Design-system specification
.github/workflows/           Manual GitHub Pages workflow
```

## 5. Application shell

`app/layout.tsx` owns:

- Inter and IBM Plex Mono via `next/font`
- Global title template, description, keywords, Open Graph, and Twitter metadata
- LocalBusiness, ProfessionalService, and WebSite JSON-LD
- GA4 script injection when configured
- Navigation, footer, sticky quote control, boot screen, custom cursor, grain, and smooth scrolling
- Keyboard skip link and the `#site-content` target

Pages should supply route-specific metadata and canonical URLs. Do not duplicate global scripts or shared chrome inside individual routes.

Some route components include mobile-only compositions and separate desktop compositions. Preserve the `md:`/`lg:` visibility boundaries when editing one viewport. Always test immediately below and at a breakpoint, especially 767/768px.

## 6. Route and content ownership

| Route | Primary files |
| --- | --- |
| `/` | `app/page.tsx`, `components/hero.tsx`, `about.tsx`, `process-cinema.tsx`, `why-tnk.tsx`, `gallery-preview.tsx`, `cta-banner.tsx` |
| `/about` | `app/about/page.tsx` |
| `/services` | `app/services/page.tsx`, `components/video-section.tsx` |
| `/timeline` | `app/timeline/page.tsx`, `timeline-hero.tsx`, `timeline-cinema.tsx` |
| `/gallery` | `app/gallery/layout.tsx`, `app/gallery/page.tsx` |
| `/blog` | `app/blog/page.tsx` |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx`, `components/comparison-table.tsx` |
| `/contact` | `app/contact/page.tsx`, `contact-form.tsx`, `contact-info.tsx`, `interactive-patterns.tsx` |
| `/privacy`, `/terms` | Corresponding `app/*/page.tsx` files |

Blog content is currently hardcoded in `app/blog/[slug]/page.tsx`; there is no CMS or database. When adding an article:

1. Add its slug to the article data and `generateStaticParams()`.
2. Add route metadata and a canonical URL.
3. Update the blog index.
4. Add it to `app/sitemap.ts` when required by the current implementation.
5. Confirm article-to-article navigation order.
6. Build to verify static generation.

## 7. Environment configuration

Local values belong in `.env.local`. Vercel values belong in Project Settings → Environment Variables. Never commit a Resend key or any copied production environment file.

```env
RESEND_API_KEY=
CONTACT_LEAD_EMAIL=
CONTACT_LEAD_CC=
CONTACT_LEAD_FROM=True North Kromes Website <website@tnkromes.ca>
SMTP_USER=
SMTP_APP_PASSWORD=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
```

### Variable behavior

`RESEND_API_KEY`
: Required by `/api/contact`. Missing configuration returns HTTP 503 with a user-safe error.

`CONTACT_LEAD_EMAIL`
: Primary lead recipient. The route currently falls back to `truenorthkromes@gmail.com` if unset.

`CONTACT_LEAD_CC`
: Copied on each lead. The route has a code fallback; define it explicitly in managed environments so recipients are intentional.

`CONTACT_LEAD_FROM`
: Resend sender. Use the exact friendly-address format `True North Kromes Website <website@tnkromes.ca>`. The domain must be verified by Resend.

`SMTP_USER`
: Temporary Google Workspace sender. When this and `SMTP_APP_PASSWORD` are both present, SMTP takes precedence over Resend.

`SMTP_APP_PASSWORD`
: Temporary 16-character Google app password. Never use the account's normal password. Mark it Sensitive in Vercel and revoke it after removal.

`NEXT_PUBLIC_GA_MEASUREMENT_ID`
: Optional. Because it is public and bundled into client output, it must not contain a secret.

Environment-variable changes affect only new deployments. Redeploy Production after adding or changing a value.

## 8. Contact form and Resend

### Request flow

1. `components/contact-form.tsx` validates required fields in the browser.
2. It posts JSON to `/api/contact`.
3. `app/api/contact/route.ts` validates required server fields.
4. User input is escaped before inclusion in the HTML email.
5. Resend sends the lead to the primary and CC recipients.
6. A successful request emits the GA4 `generate_lead` event when GA4 is enabled.

While both SMTP variables are configured, step 5 uses authenticated Google SMTP instead. This temporary route still delivers to both `CONTACT_LEAD_EMAIL` and `CONTACT_LEAD_CC`; removing either SMTP variable restores the Resend path automatically.

Required fields are name, telephone, file type, and monthly volume. Address, city, and postal code are optional.

### Domain configuration

`tnkromes.ca` uses Vercel nameservers. Resend DNS records are managed through the Resend/Vercel integration. In Resend, the domain must reach **Verified** before production sends from `website@tnkromes.ca` will work.

As of July 21, 2026, the records had been auto-configured and verification was pending DNS propagation. Treat this as an operational note: confirm the current dashboard state rather than assuming it is still pending.

After verification:

1. Confirm `CONTACT_LEAD_FROM` includes the literal angle brackets.
2. Confirm all four contact variables exist in Vercel Production and Preview.
3. Redeploy if any value changed after the latest deployment.
4. Submit one real form request.
5. Verify delivery to both recipients.
6. Confirm a `Delivered` event in Resend Logs.

The Resend API key should have Sending access only. It is currently scoped to all domains because the domain was not selectable while pending; it may be rotated to a domain-scoped key after verification.

### Temporary Google Workspace transport

If domain verification is blocked, use a Google Workspace account controlled by the site operator:

1. Enable 2-Step Verification on that Google account.
2. Generate a dedicated app password named `TNK website temporary`.
3. Add `SMTP_USER` and `SMTP_APP_PASSWORD` to Vercel Production and Preview as Sensitive values.
4. Redeploy and submit one test lead.
5. Confirm both recipients receive the message.

Do not share the app password through chat, email, screenshots, or Git. Once Resend is verified, remove both SMTP variables, redeploy, test Resend delivery, and revoke the Google app password.

### Current limitations

- There is no CAPTCHA, rate limiter, durable queue, or database persistence.
- Input validation is intentionally basic and should be strengthened if spam appears.
- Failed sends are returned to the visitor and logged by Vercel, but are not retried automatically.
- Do not test production delivery repeatedly with fake addresses.

## 9. Styling and responsive behavior

The committed design language is documented in `DESIGN.md`. The source tokens live in `app/globals.css`:

| Token | Value | Use |
| --- | --- | --- |
| `ink` | `#101113` | Primary dark surface |
| `ink-soft` | `#191b1e` | Secondary dark surface |
| `paper` | `#f2f0ec` | Primary light surface |
| `gold` | `#c9a227` | Active state and registration |
| `gold-dim` | `#8a7119` | Accessible gold on paper |
| `line` | white at 14% | Rules on dark surfaces |
| `line-dark` | ink at 16% | Rules on light surfaces |

Conventions:

- Corners are square; the global radius is zero.
- Gold communicates active state, progress, registration, or a key action. Do not use it as general decoration.
- Prefer real production photography from `public/images/opt/`.
- Main content uses `max-w-6xl` with 20px mobile, 24px small-screen, and 48px large-screen padding.
- Mobile form fields remain at 16px to prevent iOS zoom.
- Interactive controls should be at least 44×44px.
- Do not hide essential copy behind animation or horizontal-scroll discovery.
- Maintain a 320px minimum supported viewport.

## 10. Motion and accessibility

Motion uses Motion, CSS keyframes, IntersectionObserver-backed primitives, and Lenis. Reuse existing components before adding another animation system.

Important components:

- `Reveal`, `DrawRule`, and `Ticker` in `motion-primitives.tsx`
- `MachinedLines` and smooth-scroll helpers in `experience.tsx`
- Sticky stories, marquees, process ticker, and vertical timeline in `scroll-patterns.tsx`
- FAQ and carousel patterns in `interactive-patterns.tsx`

Every animated feature must:

- Respect `prefers-reduced-motion`
- Render meaningful content without waiting for JavaScript animation
- Avoid trapping or hijacking page scroll
- Provide pause controls when continuous motion conveys information
- Work with keyboard navigation and visible focus
- Preserve semantic headings, buttons, dialog roles, labels, and ARIA state

The Gallery lightbox must continue supporting Escape, arrow keys, touch swipes, body scroll lock, and 44px mobile controls. The navigation overlay must remain keyboard-dismissible.

## 11. Media

- Prefer `public/images/opt/` for production UI.
- Reference public assets with `sitePath()` when the component must also support the optional GitHub Pages base path.
- Supply accurate alt text based on what is visible and why the image is present.
- Keep video files in `public/videos/`; do not import raw videos from the repository root.
- Use poster imagery and avoid autoplay when reduced motion is requested.
- Compress large images and video before adding them. Large media directly affects mobile startup and Vercel bandwidth.

Image helper scripts:

```bash
node scripts/crop-images.mjs
node scripts/make-optimized-images.mjs
```

Review scripts before running them because they can perform bulk, mechanical asset changes.

## 12. SEO and business data

SEO is implemented through:

- Global and route metadata
- Canonical URLs
- Static sitemap and robots routes
- Dynamic Open Graph image
- LocalBusiness and ProfessionalService JSON-LD
- Google verification file at `public/google3135bf05497064ac.html`
- Descriptive headings, body copy, internal links, and image alt text

Canonical business data:

```text
True North Kromes Inc.
204 A River Avenue
Cochrane, AB T4C 2C1
Canada

Telephone: 807-624-7222
Email: truenorthkromes@gmail.com
Website: https://www.tnkromes.ca/
Instagram: https://www.instagram.com/truenorthkromes/
```

When changing any business fact, search the entire repository and update all occurrences. At minimum, inspect `app/layout.tsx`, About, Contact, Footer, navigation, route metadata, JSON-LD, map links, and email configuration.

Do not keyword-stuff titles or duplicate location phrases unnaturally. Search indexing is controlled externally through Google Search Console; deploying a page does not guarantee immediate indexing.

## 13. Analytics

GA4 loads only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` exists. `lib/analytics.ts` safely no-ops otherwise.

Current event families:

- `cta_click`
- `contact_click`
- `portal_click`
- `generate_lead`

Use `TrackedCta` or `trackEvent()` and include useful parameters such as `location`, `label`, or `method`. Do not send names, phone numbers, addresses, form content, or other personal data to analytics.

The `@vercel/analytics` package is installed but no `<Analytics />` component is currently mounted in the application shell. Do not assume page-view reporting is active from the dependency alone. If Vercel Analytics is required, integrate it deliberately in `app/layout.tsx`, validate the production request, and update this document.

## 14. Deployment

### Production: Vercel

1. Merge or push the approved commit to `main`.
2. Vercel creates a production deployment.
3. Confirm the deployment is Ready.
4. Smoke-test `https://www.tnkromes.ca/` and `/contact`.
5. Review Vercel function logs if the contact endpoint fails.
6. Review Resend Logs for mail delivery status.

Production and Preview use separately scoped environment settings even when they contain the same values.

### GitHub Pages

`.github/workflows/deploy-pages.yml` is manual-only and retained as a legacy/static mirror path. When `GITHUB_ACTIONS=true`, `next.config.mjs` enables static export and the repository base path.

Do not treat this build as production:

- Static hosting cannot execute `/api/contact`.
- Security headers from `headers()` are skipped for static export.
- The canonical domain remains `www.tnkromes.ca`.

## 15. Validation matrix

For visual or interaction changes, test at minimum:

| Viewport | Purpose |
| --- | --- |
| 320×700 | Minimum-width phone |
| 390×844 | Typical modern phone |
| 430×932 | Large phone |
| 667×375 | Phone landscape |
| 767px and 768px | Mobile/desktop boundary |
| 1440×1000 | Desktop regression |

Also test:

- `prefers-reduced-motion: reduce`
- Keyboard-only navigation
- Menu open/close and Escape
- Gallery lightbox and controls
- Contact validation, first-error focus, success, and failure states
- No horizontal document overflow
- No broken images or browser console errors
- Page title, one primary H1, canonical URL, and correct visible business data

There is currently no automated browser-test suite. Browser checks are manual or ad hoc and should be recorded in the pull request or handoff.

## 16. Known warnings and technical debt

1. **Type errors are ignored by `next build`.** Always run `pnpm exec tsc --noEmit` independently.
2. **ESLint is not configured.** The package script exists, but the dependency/configuration is absent.
3. **Open Graph warning.** Next.js reports that `/opengraph-image` uses the Edge runtime while static behavior is requested. The build completes, but the route is dynamic. Resolve by choosing one compatible rendering strategy.
4. **Workspace-root warning.** Next.js may detect a parent-directory lockfile and infer the wrong tracing/Turbopack root. Do not delete files outside this repository; configure the explicit root in `next.config.mjs` if the warning affects deployment.
5. **No automated tests.** Critical interactive behavior depends on manual browser verification.
6. **Contact abuse protection.** There is no rate limiting or CAPTCHA.
7. **Static mirror limitation.** GitHub Pages cannot deliver contact leads.
8. **Large local media.** Video and high-resolution photography require ongoing compression and performance review.

## 17. Security and privacy

- Never expose `RESEND_API_KEY` in client code, screenshots, logs, chat, or Git history.
- Keep `.env.local` untracked.
- Treat contact submissions as personal data.
- Do not add form fields without reviewing the Privacy Policy.
- Escape or safely render all submitted content in email.
- Do not log complete submissions in production.
- Keep dependencies and Next.js security releases current.
- Preserve the security headers in `next.config.mjs` unless a documented integration requires a change.

If a secret is exposed, revoke it in Resend immediately, generate a replacement, update Vercel, and redeploy.

## 18. Change workflow

1. Pull the latest `main`.
2. Inspect `PRODUCT.md` and `DESIGN.md` before interface work.
3. Make a narrowly scoped change.
4. Preserve unrelated working-tree files.
5. Run TypeScript, production build, and `git diff --check`.
6. Perform the responsive and accessibility checks relevant to the change.
7. Review the final diff for business claims, personal information, and accidental generated files.
8. Commit with a descriptive imperative message.
9. Push to `main` only when the change is production-ready.
10. Verify the Vercel deployment and live route.

Do not commit `.next/`, `node_modules/`, `.env.local`, `tsconfig.tsbuildinfo`, temporary screenshots, downloaded raw media, or unrelated user files.

## 19. Troubleshooting

### Contact form returns “not configured”

`RESEND_API_KEY` is missing from the active deployment environment. Add it in Vercel and redeploy.

### Contact form returns “Failed to send”

Check, in order:

1. Resend domain status is Verified.
2. `CONTACT_LEAD_FROM` uses `Name <address@tnkromes.ca>` syntax.
3. The Resend key has Sending access.
4. Vercel function logs for `/api/contact`.
5. Resend Logs for the precise API or delivery error.

### Environment-variable change has no effect

Create a new deployment. Existing deployments retain the environment snapshot from their build.

### Development server reports a `.next/dev/lock`

Another Next.js development process is already running in the repository. Stop that process rather than deleting broad directories or starting several competing servers.

### Public asset works on Vercel but not the GitHub Pages mirror

Use `sitePath()` for root-relative assets and confirm `NEXT_PUBLIC_BASE_PATH` is set by the static workflow.

### Build succeeds but editor reports errors

The build ignores TypeScript errors by configuration. Run `pnpm exec tsc --noEmit` and fix the actual type failure.

## 20. Operational checklist

After any infrastructure or release change:

- [ ] Vercel production deployment is Ready
- [ ] `www.tnkromes.ca` resolves and uses HTTPS
- [ ] Primary navigation and client portal links work
- [ ] Contact page loads without client errors
- [ ] Resend domain is Verified
- [ ] Test lead reaches the primary and CC recipients
- [ ] Resend reports Delivered
- [ ] Sitemap and robots routes return successfully
- [ ] No canonical business information has drifted
- [ ] No secrets or generated artifacts are present in the Git diff
