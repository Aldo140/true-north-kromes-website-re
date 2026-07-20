import type { Metadata } from "next"
import Link from "next/link"
import { DrawRule, Reveal } from "@/components/motion-primitives"
import { MachinedLines, Ticker } from "@/components/experience"
import { TrackedCta } from "@/components/tracked-cta"
import { sitePath } from "@/lib/site-path"

export const metadata: Metadata = {
  title: "About Our Cochrane Dental Lab",
  description:
    "Visit True North Kromes at 204 A River Avenue in Cochrane, Alberta. Our dental lab designs, SLM-prints, and plasma-polishes Co-Cr partial frameworks.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "True North Kromes Dental Lab in Cochrane, Alberta",
    description: "Meet the Cochrane team and see the in-house CAD, SLM metal printing, plasma polishing, and quality-control operation.",
    url: "/about",
    type: "website",
  },
}

const STAGES = [
  {
    number: "01",
    label: "CAD DESIGN",
    body: "A CAD specialist team around 250 strong, working alongside an AI program that draws on that design database. Every framework is designed digitally and shared for your review before anything is printed — predictable results, in any major file format.",
  },
  {
    number: "02",
    label: "SLM PRINT",
    body: "Chamlion selective laser melting printers fuse Co-Cr powder layer by layer, straight from the approved design. No wax, no investment, no casting — exceptional accuracy, case after case.",
  },
  {
    number: "03",
    label: "PLASMA POLISH",
    body: "Finishing happens in-house on our AP10 plasma polishing and DLyte systems. Plasma discharge strips impurities from the metal surface and brings every framework to a mirror finish.",
  },
  {
    number: "04",
    label: "QC + DELIVERY",
    body: "Every framework is inspected against its design before it leaves the building, then shipped to your lab or clinic with support through the whole production cycle.",
  },
] as const

/** Telemetry strip — every item is a real fact stated elsewhere on this page. */
const TICKER_ITEMS = [
  "CHAMLION SLM",
  "AP10 + DLYTE PLASMA POLISH",
  "MEDILOY S CO-CR · LICENSED",
  "CAD TEAM ~250",
  "DESIGN REVIEW BEFORE PRINT",
  "CANADA",
] as const

export default function AboutPage() {
  return (
    <main>
      {/* ============ Header — the operation ============ */}
      <section className="bg-paper pt-40 pb-16 sm:pt-44 lg:pt-52 lg:pb-24" aria-label="About True North Kromes">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
          <Reveal y={10}>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dim">The operation</p>
          </Reveal>
          <MachinedLines
            as="h1"
            lines={["One lab.", "The whole production line."]}
            delay={0.08}
            className="mt-5 max-w-[20ch] text-balance font-sans text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-ink"
          />
          <Reveal y={12} delay={0.22} className="mt-8 max-w-[56ch]">
            <p className="text-sm leading-[1.8] text-ink/70 sm:text-base">
            True North Kromes is a Canadian dental lab specializing in 3D
            printing metal partial denture frameworks. Built on the combined
            expertise of a denturist and a lab technologist, we design,
            laser-print, and plasma-polish Co-Cr frameworks entirely in-house.
            What ships to your lab is exactly what was designed.
            </p>
          </Reveal>

          {/* Lab floor — full-width establishing shot */}
          <div className="mt-14 lg:mt-20">
            <Reveal y={24} amount={0.2}>
              <img
                src={sitePath("/images/opt/gallery-lab-chamlion.jpg")}
                alt="Row of Chamlion SLM metal printers on the True North Kromes production floor"
                width={1600}
                height={900}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="flex items-center justify-between border-b border-line-dark py-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60">
                  Production floor · Chamlion SLM
                </span>
                <span aria-hidden="true" className="h-px w-6 bg-gold-dim" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ Location — make the lab easy to find ============ */}
      <section className="bg-ink py-16 text-paper sm:py-20 lg:py-28" aria-label="Find True North Kromes">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
            <div>
              <Reveal y={10}>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
                  Find the lab
                </p>
                <h2 className="mt-5 max-w-[15ch] text-balance font-sans text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-paper">
                  Built in Cochrane. Easy to reach.
                </h2>
                <p className="mt-6 max-w-[34ch] text-sm leading-[1.8] text-paper/70 sm:text-base">
                  True North Kromes is based in Cochrane, Alberta. Drop a pin,
                  get directions, or contact the lab before you send your first case.
                </p>
              </Reveal>

              <div className="mt-8 border-y border-line py-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/45">
                  Address
                </p>
                <address className="mt-3 not-italic text-sm leading-relaxed text-paper sm:text-base">
                  204 A River Avenue<br />
                  Cochrane, AB T4C 2C1
                </address>
                <div className="mt-5 flex flex-wrap gap-3">
                  <TrackedCta
                    href="https://www.google.com/maps/dir/?api=1&destination=204+A+River+Avenue%2C+Cochrane%2C+AB+T4C+2C1"
                    external
                    event="cta_click"
                    eventParams={{ location: "about_address", label: "get_directions" }}
                    className="inline-flex min-h-11 items-center justify-center border border-gold bg-gold px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink transition-colors hover:bg-transparent hover:text-gold"
                  >
                    Get directions ↗
                  </TrackedCta>
                  <TrackedCta
                    href="/contact"
                    event="cta_click"
                    eventParams={{ location: "about_address", label: "contact_the_lab" }}
                    className="inline-flex min-h-11 items-center justify-center border border-paper/40 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-paper transition-colors hover:border-paper"
                  >
                    Contact the lab
                  </TrackedCta>
                </div>
              </div>
            </div>

            <Reveal y={18} amount={0.2}>
              <div className="overflow-hidden border border-line bg-ink-soft">
                <iframe
                  title="Map showing True North Kromes at 204 A River Avenue, Cochrane, Alberta"
                  src="https://www.google.com/maps?q=204+A+River+Avenue%2C+Cochrane%2C+AB+T4C+2C1&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="aspect-[4/3] w-full grayscale contrast-125 sm:aspect-[16/9]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ Telemetry strip — lab facts on an endless readout ============ */}
      <Ticker items={TICKER_ITEMS} />

      {/* ============ Under one roof — production line ============ */}
      <section className="bg-paper pt-16 pb-24 sm:pb-32 lg:pt-24 lg:pb-40" aria-label="The production line, under one roof">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
          <Reveal y={12}>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dim">Production line</p>
            <h2 className="mt-5 max-w-[22ch] text-balance font-sans text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
              Every stage, under one roof.
            </h2>
            <TrackedCta
              href="/timeline"
              event="cta_click"
              eventParams={{ location: "about_production_line", label: "see_client_timeline" }}
              className="mt-5 inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60 underline decoration-line-dark underline-offset-4 transition-colors hover:text-gold-dim hover:decoration-gold-dim"
            >
              See the day-by-day client timeline →
            </TrackedCta>
          </Reveal>

          <ol className="mt-12 lg:mt-16">
            {STAGES.map((stage, i) => (
              <li key={stage.number}>
                <DrawRule className="h-px bg-line-dark" delay={i * 0.08} />
                <div className="grid gap-3 py-8 sm:py-10 md:grid-cols-12 md:gap-8">
                  {/* items-start (not baseline): the number rises out of an overflow-hidden
                      channel, which has no text baseline — both cells share identical
                      font metrics, so top alignment renders the same. */}
                  <div className="flex items-start gap-4 md:col-span-4">
                    <MachinedLines
                      as="p"
                      lines={[stage.number]}
                      delay={i * 0.08 + 0.12}
                      className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dim"
                    />
                    <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink">
                      {stage.label}
                    </h3>
                  </div>
                  <p className="max-w-2xl text-sm leading-[1.8] text-ink/70 sm:text-base md:col-span-8">
                    {stage.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <DrawRule className="h-px bg-line-dark" delay={STAGES.length * 0.08} />

          {/* Finishing floor — offset pair */}
          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-24">
            <Reveal y={20} amount={0.2}>
              <img
                src={sitePath("/images/opt/gallery-dlyte-sintering.jpg")}
                alt="Co-Cr partial denture frameworks in the finishing area after printing"
                width={1200}
                height={2133}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60">
                Frameworks off the build plate
              </p>
            </Reveal>
            <Reveal y={20} amount={0.2} className="sm:mt-12 lg:mt-20">
              <img
                src={sitePath("/images/opt/dlyte-polishing.jpg")}
                alt="DLyte polishing system finishing Co-Cr frameworks in-house"
                width={1200}
                height={2133}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60">
                DLyte · in-house finishing
              </p>
            </Reveal>
          </div>

          {/* Digital vs. analog — draft copy, confirm technical framing before publishing */}
          <div className="mt-16 border-t border-line-dark pt-14 lg:mt-24 lg:pt-16">
            <div className="grid gap-x-10 gap-y-6 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dim">
                  Digital, not analog
                </p>
                <h2 className="mt-5 max-w-[20ch] text-balance font-sans text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
                  Fewer hands, fewer chances to drift.
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="max-w-[56ch] text-sm leading-[1.8] text-ink/70 sm:text-base">
                  A traditional partial goes through an impression, a poured
                  model, a hand-built wax pattern, an investment, and a cast —
                  five analog steps, each one able to introduce its own small
                  error. We replace that chain with one continuous digital
                  path: scan in, CAD design out, printed directly in Co-Cr.
                  What you approve on screen is what gets printed — not a
                  hand-built approximation of it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Material — licensed alloy (ink) ============ */}
      <section className="bg-ink py-20 text-paper sm:py-24 lg:py-32" aria-label="Material and licensing">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
          <div className="flex items-baseline justify-between gap-4 pb-4">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper">
              MATERIAL — LICENSED ALLOY
            </h2>
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-paper/40 sm:block">
              CO-CR · HEALTH CANADA
            </span>
          </div>
          <DrawRule className="h-px bg-gold" />

          <div className="grid gap-x-8 gap-y-8 pt-10 md:grid-cols-12 lg:pt-14">
            <div className="md:col-span-7">
              <Reveal y={12}>
                <p className="max-w-[26ch] text-balance font-sans text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-paper">
                  Every framework is printed in Mediloy S Co-Cr.
                </p>
              </Reveal>
              <Reveal y={12} delay={0.1}>
                <p className="mt-6 max-w-[52ch] text-sm leading-[1.8] text-paper/70 sm:text-base">
                  One alloy, licensed by Health Canada for removable partial
                  dentures — not a house blend, not whatever powder is on hand.
                  The licence is public; read it yourself.
                </p>
              </Reveal>
            </div>
            <div className="flex items-end md:col-span-5 md:justify-end">
              <Reveal y={12} delay={0.2}>
                <a
                  href={sitePath("/downloads/mediloy-rpd-licence.pdf")}
                  className="border border-line px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-colors hover:border-gold hover:text-gold focus-visible:border-gold"
                >
                  Material licence (PDF) →
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Press — Denturism Canada ============ */}
      <section className="bg-paper py-24 sm:py-32 lg:py-40" aria-label="Press coverage">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal x={-24} y={0} amount={0.25}>
                <img
                  src={sitePath("/images/opt/denturism-canada-cover.jpg")}
                  alt="Cover of the Denturism Canada magazine, Spring 2026 issue"
                  width={540}
                  height={704}
                  loading="lazy"
                  className="aspect-[540/704] w-full max-w-xs object-cover"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-8 lg:pt-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dim">
                Press · Spring 2026
              </p>
              <h2 className="mt-5 max-w-[22ch] text-balance font-sans text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
                Featured in Denturism Canada.
              </h2>
              <p className="mt-6 max-w-[52ch] text-sm leading-[1.8] text-ink/70 sm:text-base">
                The Spring 2026 issue of Denturism Canada carries &ldquo;From
                Analog Frustration to Digital Precision&rdquo; by Luke
                LaRocque-Walker, DD — a first-hand account of moving partial
                framework work to our digital line.
              </p>
              <div className="mt-8">
                <Link
                  href="/blog/denturism-canada-feature"
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink underline decoration-line-dark underline-offset-4 transition-colors hover:decoration-gold-dim"
                >
                  Read the feature →
                </Link>
              </div>
              <div className="mt-10 max-w-xl">
                <DrawRule className="h-px bg-line-dark" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
