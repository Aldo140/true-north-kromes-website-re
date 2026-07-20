"use client"

import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react"
import { useRef } from "react"

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

const BACKGROUND_LINES = [
  "SCAN · DESIGN · APPROVE ·",
  "PRINTED · POLISHED · INSPECTED ·",
  "4 BUSINESS DAYS FROM APPROVAL ·",
]

const MONO = "font-mono text-[10px] uppercase tracking-[0.2em]"

export function TimelineCinema() {
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 20, mass: 0.2 })
  const headingY = useTransform(progress, [0, 0.5, 1], reducedMotion ? [0, 0, 0] : [45, 0, -45])

  return (
    <section ref={sectionRef} aria-labelledby="timeline-line-heading" className="relative isolate overflow-hidden bg-ink py-24 text-paper sm:py-28 lg:py-36">
      <div className="absolute inset-0 -z-10 opacity-[0.07] [background-image:radial-gradient(circle_at_20%_20%,var(--gold)_0_1px,transparent_1px)] [background-size:22px_22px]" aria-hidden="true" />
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-16">
        <motion.div style={{ y: headingY }} className="relative z-10 max-w-3xl">
          <div className="mb-7 flex items-center gap-4">
            <p className={`${MONO} text-gold`}>THE TNK PRODUCTION LINE</p>
            <span className="h-px w-12 bg-gold/50" aria-hidden="true" />
            <p className={`${MONO} hidden text-paper/35 sm:block`}>01—05 / FIXED CLOCK</p>
          </div>
          <h2 id="timeline-line-heading" className="font-sans text-[clamp(3.4rem,8vw,8rem)] font-light leading-[0.88] tracking-[-0.06em] text-paper">
            FROM SCAN<br />TO DOORSTEP
          </h2>
          <p className="mt-8 max-w-xl text-base leading-7 text-paper/70 sm:text-lg">
            Once your design is approved, the clock is fixed. Every stage is visible, accountable, and built around the same four-day promise.
          </p>
        </motion.div>

        <div className="relative mt-24 lg:mt-32">
          <div className="pointer-events-none absolute inset-x-[-20vw] top-0 hidden h-[36rem] -translate-y-8 lg:block" aria-hidden="true">
            {BACKGROUND_LINES.map((line, index) => <MarqueeLine key={line} text={line} index={index} progress={progress} reducedMotion={reducedMotion} />)}
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-paper/35" aria-hidden="true" />
            <motion.div style={{ scaleX: progress }} className="absolute left-0 top-1/2 h-[2px] w-full origin-left -translate-y-1/2 bg-gold" aria-hidden="true" />
            <div className="grid grid-cols-5">
              {STAGES.map((stage, index) => <TimelineStep key={stage.number} stage={stage} index={index} reducedMotion={reducedMotion} />)}
            </div>
          </div>

          <div className="relative lg:hidden">
            <div className="absolute bottom-0 left-[7px] top-0 w-px bg-paper/25" aria-hidden="true" />
            <div className="space-y-12">
              {STAGES.map((stage, index) => (
                <motion.article key={stage.number} initial={reducedMotion ? false : { opacity: 0, x: index % 2 ? 24 : -24 }} whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }} viewport={{ once: true, margin: "-12%" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="relative pl-10">
                  <span className="absolute left-0 top-1.5 size-[15px] rounded-full border border-ink bg-gold shadow-[0_0_0_5px_var(--ink)]" />
                  <p className={`${MONO} text-gold`}>{stage.number}</p>
                  <h3 className="mt-3 max-w-sm text-xl font-medium tracking-[-0.03em] text-paper">{stage.label}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-paper/70">{stage.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MarqueeLine({ text, index, progress, reducedMotion }: { text: string; index: number; progress: MotionValue<number>; reducedMotion: boolean | null }) {
  const x = useTransform(progress, [0, 1], reducedMotion ? ["0%", "0%"] : index % 2 ? ["-10%", "4%"] : ["3%", "-14%"])
  return <motion.div style={{ x, top: `${index * 32}%` }} className="absolute w-max whitespace-nowrap text-[clamp(3rem,7vw,7.5rem)] font-light leading-none tracking-[-0.06em] text-gold/[0.045]">{text}&nbsp;&nbsp;&nbsp;{text}</motion.div>
}

function TimelineStep({ stage, index, reducedMotion }: { stage: (typeof STAGES)[number]; index: number; reducedMotion: boolean | null }) {
  const top = index % 2 === 1
  return (
    <motion.article initial={reducedMotion ? false : { opacity: 0, y: top ? -24 : 24 }} whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, margin: "-18%" }} transition={{ delay: index * 0.06, duration: 0.75, ease: [0.16, 1, 0.3, 1] }} className={`relative flex min-h-[36rem] flex-col items-center px-3 text-center ${top ? "justify-start pb-[18rem]" : "justify-end pt-[18rem]"}`}>
      <div className={`absolute left-1/2 h-16 w-px -translate-x-1/2 bg-paper/45 ${top ? "top-[50%]" : "bottom-[50%]"}`} aria-hidden="true" />
      <motion.span whileInView={reducedMotion ? undefined : { scale: [0.6, 1.15, 1] }} viewport={{ once: true }} transition={{ delay: 0.25 + index * 0.06, duration: 0.6 }} className="absolute left-1/2 top-1/2 z-10 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_0_6px_var(--ink),0_0_22px_var(--gold)]" />
      <p className="font-sans text-2xl font-light tracking-[-0.04em] text-paper">{stage.number}</p>
      <h3 className="mt-4 max-w-[12rem] text-lg font-medium leading-[1.05] tracking-[-0.03em] text-gold">{stage.label}</h3>
      <p className="mt-4 max-w-[14rem] text-sm leading-6 text-paper/80">{stage.body}</p>
    </motion.article>
  )
}
