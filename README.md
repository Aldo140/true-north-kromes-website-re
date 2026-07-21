# True North Kromes Website

Production website for [True North Kromes Inc.](https://www.tnkromes.ca/), a Canadian dental laboratory specializing in digitally designed and 3D-printed cobalt-chrome partial denture frameworks.

The site explains the complete in-house production line—from CAD design and client approval through selective laser melting, plasma polishing, inspection, and delivery—and gives dental laboratories and denturists a direct path to start a case.

## Production links

- Website: [www.tnkromes.ca](https://www.tnkromes.ca/)
- Client portal: [True North Kromes client portal](https://truenorthkromesclient.seazona.cloud/Login.aspx?ReturnUrl=%2fOrder.aspx)
- Repository: [github.com/Aldo140/true-north-kromes-website-re](https://github.com/Aldo140/true-north-kromes-website-re)
- Hosting and deployments: Vercel
- Sending email: Resend
- DNS: Vercel DNS

The `main` branch is the production source of truth. A push to `main` creates a Vercel deployment.

## What is included

- Responsive, image-led marketing pages for the company, services, production timeline, and finished work
- Mobile-specific layouts and interactions for every public page
- Technical blog articles with static metadata and canonical URLs
- Accessible full-screen navigation, carousels, timelines, accordions, and reduced-motion alternatives
- Contact-form delivery through a server-side Next.js Route Handler and Resend
- Local-business structured data, sitemap, robots configuration, Open Graph imagery, and Google site verification
- Optional Google Analytics 4 event tracking

## Technology

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Motion and Lenis
- Resend
- Optional GA4 event tracking
- Lucide React

The project uses `pnpm` and commits `pnpm-lock.yaml`. Node.js 22 and pnpm 10 match the deployment workflow.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Main marketing page and production overview |
| `/about` | Company, facility, location, and material information |
| `/services` | CAD design, SLM printing, post-processing, pricing, and guarantee |
| `/timeline` | Four-business-day production sequence |
| `/gallery` | Finished-framework archive and inspection lightbox |
| `/blog` | News, guides, and technical articles |
| `/blog/[slug]` | Statically generated article pages |
| `/contact` | Contact details, case-intake form, and FAQ |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/api/contact` | Server-side contact-form delivery endpoint |

## Local development

```bash
pnpm install --frozen-lockfile
cp .env.example .env.local
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful validation commands:

```bash
pnpm exec tsc --noEmit
pnpm build
pnpm start
```

The current repository does not include a working ESLint dependency/configuration, despite retaining a `lint` script in `package.json`. Use TypeScript and the production build as the required automated checks until linting is configured.

## Environment variables

Copy `.env.example` for local development. Production and Preview values are maintained in Vercel, not in Git.

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes for form delivery | Server-side Resend credential |
| `CONTACT_LEAD_EMAIL` | Yes in production | Primary contact-form recipient |
| `CONTACT_LEAD_CC` | Optional | Additional recipient copied on leads |
| `CONTACT_LEAD_FROM` | Yes in production | Verified sender, formatted as `Name <email@domain>` |
| `SMTP_USER` | Temporary only | Google Workspace account used while Resend DNS is unavailable |
| `SMTP_APP_PASSWORD` | Temporary only | Google app password; never use the account's normal password |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional | Enables GA4 and CTA event tracking |

Never commit API keys or `.env.local`. The production sender should be:

```text
True North Kromes Website <website@tnkromes.ca>
```

Resend must show `tnkromes.ca` as **Verified** before that sender can deliver mail. See [DEV.md](./DEV.md) for the full email setup and verification procedure.

When both temporary SMTP variables are set, the contact endpoint deliberately uses Google SMTP before Resend. Remove both SMTP variables and redeploy once Resend is verified.

## Deployment

Vercel is the production platform and supports the `/api/contact` Route Handler. Environment variables must be enabled for both Production and Preview when those environments need contact-form delivery. Changes to Vercel environment variables require a new deployment before they affect the application.

A manual GitHub Pages workflow remains in `.github/workflows/deploy-pages.yml`, but it is not the production target. GitHub Pages is a static export and cannot run the contact API.

## Brand and content safeguards

Canonical business information used throughout the site:

- Legal name: True North Kromes Inc.
- Address: 204 A River Avenue, Cochrane, AB T4C 2C1
- Telephone: 807-624-7222
- Public email: truenorthkromes@gmail.com
- Instagram: [@truenorthkromes](https://www.instagram.com/truenorthkromes/)

Keep this information synchronized across visible pages, JSON-LD, metadata, the footer, and contact links. Do not publish clinical, licensing, production, pricing, or turnaround claims without business approval.

## Documentation

- [DEV.md](./DEV.md): complete developer and operations guide
- [PRODUCT.md](./PRODUCT.md): audience, product purpose, and brand principles
- [DESIGN.md](./DESIGN.md): visual tokens, typography, motion, and reusable patterns

## Contributing

Work from the latest `main`, keep changes scoped, and validate mobile, desktop, keyboard navigation, and reduced-motion behavior before merging. Do not commit generated output, local environment files, build caches, or raw media that has not been deliberately added to `public/`.
