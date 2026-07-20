"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useScroll } from "motion/react"
import { DrawRule, Reveal } from "@/components/motion-primitives"
import { MachinedLines } from "@/components/experience"
import { sitePath } from "@/lib/site-path"

const FACTS = [
  { label: "MATERIAL", value: "MEDILOY S CO-CR, LICENSED" },
  { label: "PROCESS", value: "SLM + PLASMA POLISH, IN-HOUSE" },
  { label: "CLIENTS", value: "DENTAL LABS & DENTURISTS" },
] as const

/**
 * Lab photo + mono caption bar. The gold tick in the caption bar extends
 * with scroll progress — a fill gauge scrubbed by the reader's scroll,
 * like a level indicator dialing in as the figure passes the read line.
 * Contained here so the scroll plumbing stays local to the figure.
 */
function LabFigure() {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "center 0.4"],
  })

  return (
    <div ref={ref}>
      <img
        src={sitePath("/images/opt/gallery-lab-wide.jpg")}
        alt="Wide view of the True North Kromes production floor with SLM printers and finishing stations"
        loading="lazy"
        className="aspect-[4/3] w-full object-cover"
      />
      <div className="flex items-center justify-between gap-4 bg-ink px-3 py-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/80">
          True North Kromes · Canada
        </span>
        {reduced ? (
          <span aria-hidden="true" className="h-px w-6 shrink-0 bg-gold" />
        ) : (
          <span
            aria-hidden="true"
            className="relative h-px w-16 shrink-0 overflow-hidden bg-paper/15"
          >
            <motion.span
              className="absolute inset-0 origin-left bg-gold"
              style={{ scaleX: scrollYProgress }}
            />
          </span>
        )}
      </div>
    </div>
  )
}

export function About() {
  return (
    <section className="bg-paper py-24 sm:py-32 lg:py-40" aria-label="About True North Kromes">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
        {/* Editorial split: oversized statement + facts left, offset image right */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal y={12}>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dim">
                The operation · In-house, end-to-end
              </p>
            </Reveal>

            {/* Headline lines rise out of their channels like face-mill passes */}
            <MachinedLines
              lines={["A dental lab built", "like a machine shop."]}
              as="h2"
              className="mt-5 max-w-[18ch] text-balance font-sans text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-ink"
            />

            <Reveal y={12} delay={0.1}>
              <p className="mt-8 max-w-[52ch] text-sm leading-[1.8] text-ink/70 sm:text-base">
                True North Kromes is a Cochrane, Alberta dental lab that keeps the entire
                production line under one roof — CAD design, SLM metal
                printers, and plasma polishing, end to end. Every framework is
                printed in Health-Canada-licensed Mediloy S Co-Cr alloy, so
                what leaves the building is exactly what was designed.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:mt-20">
            <Reveal x={40} y={0} amount={0.25}>
              <LabFigure />
            </Reveal>
          </div>
        </div>

        {/* Fact lines — hairline rules machined across, staggered */}
        <dl className="mt-20 lg:mt-24">
          {FACTS.map((fact, i) => (
            <div key={fact.label}>
              <DrawRule className="h-px bg-line-dark" delay={i * 0.12} />
              <Reveal y={8} delay={i * 0.12 + 0.15}>
                <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6">
                  <dt className="w-28 shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dim">
                    {fact.label}
                  </dt>
                  <dd className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/80">
                    {fact.value}
                  </dd>
                </div>
              </Reveal>
            </div>
          ))}
          <DrawRule className="h-px bg-line-dark" delay={FACTS.length * 0.12} />
        </dl>
      </div>
    </section>
  )
}
