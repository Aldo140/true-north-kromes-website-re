"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
} from "motion/react"
import { DUR, EASE_MECH } from "@/components/motion-primitives"

interface SpecRowData {
  label: string
  claim: string
}

const rows: SpecRowData[] = [
  {
    label: "FIT",
    claim:
      "Printed from the scan itself — no investment, no shrinkage. Repeatable to ±0.02 mm.",
  },
  {
    label: "STRUCTURE",
    claim:
      "Laser-fused Co-Cr, dense and porosity-free. Cast frames trap flaws you can't see.",
  },
  {
    label: "TURNAROUND",
    claim: "Days, not weeks. No wax, no burnout, no re-casts.",
  },
  {
    label: "CONSISTENCY",
    claim: "The tenth frame matches the first. Machines don't have off days.",
  },
]

/**
 * The tolerance figure dials in from ±0.10 to ±0.02 once when scrolled into
 * view — a precision instrument settling on its reading, not a hype counter.
 */
function PrecisionDial() {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 1 })
  const [reading, setReading] = useState("0.10")

  useEffect(() => {
    if (reduced) {
      setReading("0.02")
      return
    }
    if (!inView) return
    const controls = animate(0.1, 0.02, {
      duration: 1.6,
      ease: [...EASE_MECH],
      onUpdate: (v) => setReading(v.toFixed(2)),
    })
    return () => controls.stop()
  }, [inView, reduced])

  return (
    <span ref={ref} className="tabular-nums text-gold">
      ±{reading} MM
    </span>
  )
}

interface SpecRowProps extends SpecRowData {
  index: number
}

function SpecRow({ index, label, claim }: SpecRowProps) {
  const reduced = useReducedMotion()
  const number = String(index + 1).padStart(2, "0")
  const delay = index * 0.1

  const content = (
    <div className="grid gap-3 py-8 sm:py-10 md:grid-cols-12 md:gap-8">
      <div className="flex items-baseline gap-4 md:col-span-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/40">
          {number}
        </span>
        <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper">
          {label}
        </h3>
      </div>
      <p className="max-w-2xl text-base leading-relaxed text-paper/85 sm:text-lg md:col-span-8">
        {claim}
      </p>
    </div>
  )

  return (
    <motion.li
      className="relative overflow-hidden border-t border-line"
      initial={reduced ? false : "hidden"}
      whileInView={reduced ? undefined : "visible"}
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Laser pass: a 1px gold line sweeps once left-to-right, then fades. */}
      <motion.span
        aria-hidden="true"
        className="motion-only pointer-events-none absolute inset-y-0 left-0 w-px bg-gold"
        variants={{
          hidden: { left: "0%", opacity: 0 },
          visible: {
            left: ["0%", "100%"],
            opacity: [1, 1, 0],
            transition: { duration: DUR.slow, delay, ease: "linear" },
          },
        }}
      />
      {/* Row content is revealed behind the pass via a matching clip-path wipe. */}
      <motion.div
        variants={{
          hidden: { clipPath: "inset(0 100% 0 0)" },
          visible: {
            clipPath: "inset(0 0% 0 0)",
            transition: { duration: DUR.slow, delay, ease: "linear" },
          },
        }}
      >
        {content}
      </motion.div>
    </motion.li>
  )
}

export function WhyTNK() {
  const reduced = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)

  // Progress DRO: a 1px gold line in the left gutter fills top-to-bottom,
  // scrubbed linearly against a fixed read line at 75% viewport height.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.75", "end 0.75"],
  })

  return (
    <section
      ref={sectionRef}
      className="bg-ink py-20 text-paper sm:py-24 lg:py-32"
      aria-label="Spec sheet: printed versus cast frameworks"
    >
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
        <div
          aria-hidden="true"
          className="motion-only pointer-events-none absolute inset-y-0 left-0 hidden w-px bg-line lg:block"
        >
          <motion.div
            className="h-full w-full origin-top bg-gold"
            style={{ scaleY: scrollYProgress }}
          />
        </div>

        {/* Data-sheet header row */}
        <div className="flex items-baseline justify-between gap-4 pb-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper">
            SPEC — PRINTED vs CAST
          </h2>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-paper/40 sm:block">
            CO-CR · SLM · <PrecisionDial />
          </span>
        </div>

        <ul className="border-b border-line">
          {rows.map((row, index) => (
            <SpecRow key={row.label} index={index} {...row} />
          ))}
        </ul>

        <motion.div
          className="pt-8"
          initial={reduced ? false : { opacity: 0 }}
          whileInView={reduced ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: DUR.base, delay: 0.2, ease: EASE_MECH }}
        >
          <Link
            href="/blog/benefits-of-3d-printed-frameworks"
            className="text-sm text-paper underline decoration-line underline-offset-4 transition-colors hover:decoration-gold"
          >
            Full comparison →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
