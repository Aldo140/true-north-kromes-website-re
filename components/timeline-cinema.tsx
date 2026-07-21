"use client"

import { AmbientMarquee, VerticalScrollTimeline } from "@/components/scroll-patterns"

const STAGES = [
  {
    number: "01",
    title: "Scan in",
    body: "Send your scan by email or directly from your scanner's integrated portal. We upload it and open the case the same day.",
  },
  {
    number: "02",
    title: "Digital design",
    body: "Our team builds the framework, typically within one business day, then sends it to you over WhatsApp for review.",
  },
  {
    number: "03",
    title: "Your approval",
    body: "Nothing goes to print until you approve the design. The four-business-day production clock starts the moment you sign off.",
  },
  {
    number: "04",
    title: "Print, polish, inspect",
    body: "The framework is SLM-printed in Co-Cr, plasma-polished, DLyte-finished, and checked against the approved design.",
  },
  {
    number: "05",
    title: "Shipped",
    body: "The case leaves on the fourth business day after approval via Purolator. Most Canadian destinations receive it the next day.",
  },
] as const

const BACKGROUND_LINES = [
  "SCAN  DESIGN  APPROVE",
  "PRINTED  POLISHED  INSPECTED",
  "FOUR BUSINESS DAYS",
] as const

export function TimelineCinema() {
  return (
    <section aria-labelledby="timeline-line-heading" className="relative isolate overflow-hidden bg-ink py-24 text-paper sm:py-28 lg:py-36">
      <AmbientMarquee rows={BACKGROUND_LINES} className="-z-10" />
      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-16">
        <div className="max-w-3xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">The TNK production line</p>
          <h2 id="timeline-line-heading" className="mt-6 max-w-[11ch] text-balance font-sans text-[clamp(3.2rem,8vw,6rem)] font-medium leading-[0.9] tracking-[-0.04em] text-paper">
            From scan to doorstep.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-7 text-paper/70 sm:text-lg">
            Approval locks the schedule. The growing gold line follows the exact path your case takes through our Cochrane facility.
          </p>
        </div>

        <VerticalScrollTimeline items={STAGES} />
      </div>
    </section>
  )
}
