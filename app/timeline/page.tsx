import type { Metadata } from "next"
import { DrawRule, Reveal } from "@/components/motion-primitives"
import { MachinedLines, Ticker } from "@/components/experience"
import { TrackedCta } from "@/components/tracked-cta"

/* Process detail (design turnaround, WhatsApp approval step, the 4-day
   clock starting at approval rather than at scan intake, Purolator,
   maritime transit hedge) comes verbatim from the client's own written
   workflow description — treat as accurate, not draft. */

export const metadata: Metadata = {
  title: "Client Timeline",
  description:
    "What happens after you send a case to True North Kromes — from scan to a polished Co-Cr framework at your door, on a strict 4-day production line.",
}

const STAGES = [
  {
    number: "01",
    label: "SCAN IN",
    body: "Send your scan by email or straight from your scanner's integrated portal. We upload it into our system and open the case the same day.",
  },
  {
    number: "02",
    label: "DESIGN",
    body: "Our team builds the digital framework, typically within one business day, and sends it to you over WhatsApp for review.",
  },
  {
    number: "03",
    label: "YOUR APPROVAL",
    body: "Nothing goes to print until you sign off on the design. The 4-day production clock starts the moment you approve it.",
  },
  {
    number: "04",
    label: "PRINT, POLISH, INSPECT",
    body: "Printed directly in Co-Cr, plasma-polished on the AP10, DLyte-finished, and inspected against the approved design — 4 business days, start to finish.",
  },
  {
    number: "05",
    label: "SHIPPED",
    body: "Out the door on the 4th business day after your approval, via Purolator. Next-day delivery for most of Canada; some maritime regions run a little longer in transit.",
  },
] as const

const TICKER_ITEMS = [
  "4 BUSINESS DAYS FROM APPROVAL",
  "DESIGN SENT FOR APPROVAL OVER WHATSAPP",
  "NO-CHARGE REMAKES ON OUR ERROR",
  "SHIPPED VIA PUROLATOR · CANADA-WIDE",
] as const

export default function TimelinePage() {
  return (
    <main>
      <section className="bg-paper pt-40 pb-16 sm:pt-44 lg:pt-52 lg:pb-24" aria-label="Client timeline">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
          <Reveal y={10}>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dim">
              What to expect
            </p>
          </Reveal>
          <MachinedLines
            as="h1"
            lines={["Scan to doorstep.", "4 business days from approval."]}
            delay={0.08}
            className="mt-5 max-w-[28ch] text-balance font-sans text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-ink"
          />
          <Reveal y={12} delay={0.22} className="mt-8 max-w-[58ch]">
            <p className="text-sm leading-[1.8] text-ink/70 sm:text-base">
              We don&apos;t work against a due date you give us — once you
              approve your design, we hold ourselves to a fixed 4-day
              production line, every case. Here&apos;s exactly what happens from
              the moment you send us a scan.
            </p>
          </Reveal>
        </div>
      </section>

      <Ticker items={TICKER_ITEMS} />

      <section className="bg-paper pt-16 pb-24 sm:pb-32 lg:pt-20 lg:pb-40" aria-label="Day-by-day timeline">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
          <ol>
            {STAGES.map((stage, i) => (
              <li key={stage.number}>
                <DrawRule className="h-px bg-line-dark" delay={i * 0.08} />
                <div className="grid gap-3 py-8 sm:py-10 md:grid-cols-12 md:gap-8">
                  <div className="flex items-start gap-4 md:col-span-4">
                    <MachinedLines
                      as="p"
                      lines={[stage.number]}
                      delay={i * 0.08 + 0.12}
                      className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dim"
                    />
                    <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink">
                      {stage.label}
                    </h2>
                  </div>
                  <p className="max-w-2xl text-sm leading-[1.8] text-ink/70 sm:text-base md:col-span-8">
                    {stage.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <DrawRule className="h-px bg-line-dark" delay={STAGES.length * 0.08} />

          <Reveal y={12} delay={0.15} className="mt-12 max-w-[58ch] lg:mt-16">
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
            <div className="mt-8">
              <TrackedCta
                href="/contact"
                event="cta_click"
                eventParams={{ location: "timeline_end", label: "get_started" }}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper underline decoration-line underline-offset-8 transition-colors hover:decoration-gold"
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
