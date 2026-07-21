import type { Metadata } from "next"
import { DrawRule, Reveal } from "@/components/motion-primitives"
import { MachinedLines } from "@/components/experience"
import { TrackedCta } from "@/components/tracked-cta"
import { TimelineCinema } from "@/components/timeline-cinema"
import { TimelineHero } from "@/components/timeline-hero"

/* Process detail (design turnaround, WhatsApp approval step, the 4-day
   clock starting at approval rather than at scan intake, Purolator,
   maritime transit hedge) comes verbatim from the client's own written
   workflow description — treat as accurate, not draft. */

export const metadata: Metadata = {
  title: "4-Day Partial Framework Production Timeline",
  description:
    "What happens after you send a case to True North Kromes — from scan to a polished Co-Cr framework at your door, on a strict 4-day production line.",
  alternates: { canonical: "/timeline" },
  openGraph: {
    title: "4-Day Co-Cr Framework Timeline | True North Kromes",
    description: "Follow a case from scan and design approval through SLM printing, plasma polishing, inspection, and Canada-wide shipping.",
    url: "/timeline",
    type: "website",
  },
}

export default function TimelinePage() {
  return (
    <main>
      <TimelineHero />

      <div id="production-line">
        <TimelineCinema />
      </div>

      <section className="bg-paper py-16 sm:py-20 lg:py-24" aria-label="Timeline guarantee">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
          <div className="relative border-y border-line-dark py-7 md:hidden">
            <span className="absolute -top-px left-0 h-px w-16 bg-gold" aria-hidden="true" />
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-gold-dim">Fit assurance</p>
            <p className="mt-4 text-pretty text-lg font-medium leading-7 tracking-[-0.02em] text-ink">
              The remake is ours if the error is ours.
            </p>
            <p className="mt-3 text-sm leading-6 text-ink/70">
              If a case doesn&apos;t fit or we make an error, the remake and the return shipping are on us — no charge, no back-and-forth.
            </p>
          </div>
          <Reveal y={12} className="hidden max-w-[58ch] md:block">
            <p className="text-sm leading-[1.8] text-ink/70 sm:text-base">
              If a case doesn&apos;t fit or we make an error, the remake and the
              return shipping are on us — no charge, no back-and-forth.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-20 text-paper sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
          <DrawRule className="h-px w-16 bg-gold" />
          <MachinedLines
            as="h2"
            lines={["Send your first case."]}
            delay={0.1}
            className="mt-8 text-balance font-sans text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-[-0.02em] text-paper"
          />
          <Reveal y={12} delay={0.18}>
            <div className="mt-8 border-t border-line pt-2 md:border-0 md:pt-0">
              <TrackedCta
                href="/contact"
                event="cta_click"
                eventParams={{ location: "timeline_end", label: "get_started" }}
                className="inline-flex min-h-14 w-full items-center justify-between border-b border-line font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-colors hover:border-gold md:min-h-0 md:w-auto md:border-0 md:underline md:decoration-line md:underline-offset-8 md:hover:decoration-gold"
              >
                Get started →
              </TrackedCta>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
