"use client"

import { AmbientMarquee, VerticalScrollTimeline } from "@/components/scroll-patterns"
import { motion, useReducedMotion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { sitePath } from "@/lib/site-path"

const STAGES = [
  {
    number: "01",
    title: "Scan in",
    phase: "Preflight",
    image: "/images/opt/bg-scan-design.jpg",
    body: "Send your scan by email or directly from your scanner's integrated portal. We upload it and open the case the same day.",
  },
  {
    number: "02",
    title: "Digital design",
    phase: "Preflight",
    image: "/images/opt/cad-design.jpg",
    body: "Our team builds the framework, typically within one business day, then sends it to you over WhatsApp for review.",
  },
  {
    number: "03",
    title: "Your approval",
    phase: "Day 0 · clock starts",
    image: "/images/opt/framework-tweezers.jpg",
    body: "Nothing goes to print until you approve the design. The four-business-day production clock starts the moment you sign off.",
  },
  {
    number: "04",
    title: "Print, polish, inspect",
    phase: "Days 1—3",
    image: "/images/opt/bg-plasma-polish.jpg",
    body: "The framework is SLM-printed in Co-Cr, plasma-polished, DLyte-finished, and checked against the approved design.",
  },
  {
    number: "05",
    title: "Shipped",
    phase: "Day 4",
    image: "/images/opt/framework-polished.jpg",
    body: "The case leaves on the fourth business day after approval via Purolator. Most Canadian destinations receive it the next day.",
  },
] as const

const BACKGROUND_LINES = [
  "SCAN  DESIGN  APPROVE",
  "PRINTED  POLISHED  INSPECTED",
  "FOUR BUSINESS DAYS",
] as const

function MobileProductionSequence() {
  const [active, setActive] = useState(0)
  const reducedMotion = useReducedMotion()
  const stageRefs = useRef<Array<HTMLElement | null>>([])

  useEffect(() => {
    const nodes = stageRefs.current.filter((node): node is HTMLElement => Boolean(node))
    if (!nodes.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActive(Number((visible.target as HTMLElement).dataset.stage ?? 0))
      },
      { rootMargin: "-22% 0px -48%", threshold: [0.15, 0.45, 0.7] },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="md:hidden">
      <div className="sticky top-[4.75rem] z-20 -mx-5 mt-11 border-y border-paper/15 bg-ink/95 px-5 py-3 [backdrop-filter:blur(10px)]">
        <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em]">
          <span className="text-paper/55">Case movement</span>
          <span className="text-gold">{STAGES[active].phase}</span>
        </div>
        <div className="mt-3 grid grid-cols-5 gap-1" aria-label={`Stage ${active + 1} of ${STAGES.length}: ${STAGES[active].title}`}>
          {STAGES.map((stage, index) => (
            <span
              key={stage.number}
              className={`h-[3px] transition-colors duration-300 ${index <= active ? "bg-gold" : "bg-paper/20"}`}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      <ol className="relative">
        {STAGES.map((stage, index) => (
          <li key={stage.number} className="relative border-b border-paper/15 py-12 last:border-b-0">
            <motion.article
              ref={(node) => { stageRefs.current[index] = node }}
              data-stage={index}
              initial={false}
              whileInView={reducedMotion ? undefined : { y: [10, 0] }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold">{stage.phase}</p>
                  <h3 className="mt-3 max-w-[12ch] text-balance text-[1.75rem] font-medium leading-[1.02] tracking-[-0.035em] text-paper">
                    {stage.title}
                  </h3>
                </div>
                <span className="font-sans text-[3.75rem] font-light leading-none tracking-[-0.04em] text-paper/20" aria-hidden="true">
                  {stage.number}
                </span>
              </div>

              <div className="relative mt-6 aspect-[7/8] overflow-hidden bg-ink-soft">
                <motion.img
                  src={sitePath(stage.image)}
                  alt=""
                  loading={index < 2 ? "eager" : "lazy"}
                  className="h-full w-full object-cover"
                  initial={false}
                  whileInView={reducedMotion ? undefined : { scale: [1.035, 1] }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/10" aria-hidden="true" />
                <span className="absolute left-4 top-4 border border-paper/35 bg-ink/70 px-2.5 py-2 font-mono text-[8px] uppercase tracking-[0.16em] text-paper/80">
                  TNK / {stage.number}
                </span>
                <span className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-gold" aria-hidden="true" />
                <span className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-gold" aria-hidden="true" />
              </div>

              <div className="relative -mt-14 ml-5 border-t border-gold bg-ink px-5 pb-1 pt-5">
                <p className="text-pretty text-[15px] leading-7 text-paper/75">{stage.body}</p>
                <div className="mt-5 flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.16em] text-paper/40">
                  <span className="size-1.5 bg-gold" aria-hidden="true" />
                  {index === 2 ? "Schedule locked" : index === 4 ? "Production complete" : "Recorded handoff"}
                </div>
              </div>
            </motion.article>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function TimelineCinema() {
  return (
    <section aria-labelledby="timeline-line-heading" className="relative isolate overflow-clip bg-ink py-16 text-paper md:overflow-hidden md:py-28 lg:py-36">
      <AmbientMarquee rows={BACKGROUND_LINES} className="-z-10" />
      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-16">
        <div className="max-w-3xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">The TNK production line</p>
          <h2 id="timeline-line-heading" className="mt-6 max-w-[11ch] text-balance font-sans text-[clamp(2.7rem,12vw,3.2rem)] font-medium leading-[0.92] tracking-[-0.04em] text-paper md:text-[clamp(3.2rem,8vw,6rem)]">
            From scan to doorstep.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-7 text-paper/70 sm:text-lg">
            Approval locks the schedule. The growing gold line follows the exact path your case takes through our Cochrane facility.
          </p>
        </div>

        <MobileProductionSequence />
        <div className="hidden md:block">
          <VerticalScrollTimeline items={STAGES} />
        </div>
      </div>
    </section>
  )
}
