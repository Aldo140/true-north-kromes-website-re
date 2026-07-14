"use client"

import { useEffect, useRef, useState } from "react"
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react"
import { Reveal } from "./motion-primitives"
import { sitePath } from "@/lib/site-path"

/**
 * ProcessCinema — pinned, scroll-scrubbed walkthrough of the four
 * production stages. The section is 400vh tall; an inner sticky
 * full-screen frame stays pinned while scroll progress (0 → 1) scrubs
 * through four equal segments, one per stage. Everything is mapped
 * with useTransform from a single scrollYProgress — no per-frame state.
 *
 * SSR / no-JS / mobile / reduced-motion render a plain stacked list of
 * the same four stages; the pinned version only mounts client-side on
 * lg+ viewports without prefers-reduced-motion.
 */

const STAGES = [
  {
    num: "01",
    label: "SCAN / DESIGN",
    src: sitePath("/images/service-design.jpg"),
    alt: "Dental CAD software showing a digital framework design on a monitor",
    line: "Designed digitally. Reviewed before anything is printed.",
  },
  {
    num: "02",
    label: "LASER PRINT",
    src: sitePath("/images/opt/gallery-build-plate-printer.jpg"),
    alt: "Co-Cr frameworks being laser-printed inside the SLM machine",
    line: "Co-Cr powder, fused layer by layer. No wax, no casting.",
  },
  {
    num: "03",
    label: "PLASMA POLISH",
    src: sitePath("/images/opt/gallery-dlyte-polishing-action.jpg"),
    alt: "Partial denture frameworks being polished in the DLyte finishing machine",
    line: "Plasma discharge strips the surface to a mirror finish.",
  },
  {
    num: "04",
    label: "FINISHED FRAME",
    src: sitePath("/images/opt/framework-polished.jpg"),
    alt: "Finished mirror-polished Co-Cr partial denture framework on a clean surface",
    line: "Inspected against its design. Then it ships.",
  },
] as const

const COUNT = STAGES.length
/** Width of one stage segment in overall scroll progress (0.25). */
const SEG = 1 / COUNT
/** Width of the mechanical transition zone straddled onto each segment start. */
const ZONE = 0.06

const ARIA_LABEL = "Production process, step by step"
const MONO = "font-mono text-[11px] uppercase tracking-[0.18em]"

/* ------------------------------------------------------------------ */
/* Mount-time capability gate. SSR renders the stacked fallback (state */
/* starts false), then swaps to the pinned cinema after hydration on   */
/* lg+ viewports without prefers-reduced-motion. Hard rule: content    */
/* must exist in the server HTML for no-JS / slow connections.         */
/* ------------------------------------------------------------------ */

function usePinnedCapable() {
  const [capable, setCapable] = useState(false)
  useEffect(() => {
    const width = window.matchMedia("(min-width: 1024px)")
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setCapable(width.matches && !reduce.matches)
    update()
    width.addEventListener("change", update)
    reduce.addEventListener("change", update)
    return () => {
      width.removeEventListener("change", update)
      reduce.removeEventListener("change", update)
    }
  }, [])
  return capable
}

export function ProcessCinema() {
  return usePinnedCapable() ? <PinnedCinema /> : <StackedFallback />
}

/* ------------------------------------------------------------------ */
/* Shared micro-header                                                 */
/* ------------------------------------------------------------------ */

function MicroHeader({ scrub }: { scrub?: boolean }) {
  return (
    <div className="flex items-baseline justify-between border-b border-line px-5 py-4 sm:px-6 lg:px-12">
      <p className={`${MONO} text-paper/70`}>
        THE PROCESS{scrub ? " — SCROLL" : ""}
      </p>
      <p className={`${MONO} text-paper/40`}>TNK · PRODUCTION</p>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Pinned cinema (lg+, motion OK)                                      */
/* ------------------------------------------------------------------ */

function PinnedCinema() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  return (
    <section
      ref={sectionRef}
      aria-label={ARIA_LABEL}
      className="relative h-[400vh] bg-ink text-paper"
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <MicroHeader scrub />

        <div className="relative flex min-h-0 flex-1">
          {/* Left 40% — numeral channel, label, line, progress */}
          <div className="relative z-10 flex w-[40%] flex-col justify-center px-8 lg:px-12">
            {/* Giant stage numeral rising through an overflow-hidden channel */}
            <div
              aria-hidden="true"
              className="relative h-[clamp(6rem,14vw,11rem)] overflow-hidden"
            >
              {STAGES.map((stage, i) => (
                <StageNumeral
                  key={stage.num}
                  index={i}
                  progress={scrollYProgress}
                >
                  {stage.num}
                </StageNumeral>
              ))}
            </div>

            {/* Stage label + one-liner, crossfading in the same zones */}
            <div className="relative mt-8 h-28">
              {STAGES.map((stage, i) => (
                <StageText
                  key={stage.num}
                  index={i}
                  progress={scrollYProgress}
                  label={`${stage.num} · ${stage.label}`}
                  line={stage.line}
                />
              ))}
            </div>

            {/* Gold progress line — fills linearly across the whole scrub */}
            <div className="mt-10 h-px w-full bg-line" aria-hidden="true">
              <motion.div
                className="h-px origin-left bg-gold"
                style={{ scaleX: scrollYProgress }}
              />
            </div>
          </div>

          {/* Right 60% — crossfading stage image layers behind the lens */}
          <div className="relative w-[60%]">
            {STAGES.map((stage, i) => (
              <StageImage
                key={stage.num}
                index={i}
                progress={scrollYProgress}
                src={stage.src}
                alt={stage.alt}
              />
            ))}

            {/* Seam: image bleeds into the ink field on the left */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent"
              aria-hidden="true"
            />

            {/* Gold viewfinder L-corners — static, they are the lens */}
            <div
              className="pointer-events-none absolute inset-5 z-10"
              aria-hidden="true"
            >
              <span className="absolute left-0 top-0 h-6 w-6 border-l border-t border-gold" />
              <span className="absolute right-0 top-0 h-6 w-6 border-r border-t border-gold" />
              <span className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-gold" />
              <span className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-gold" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Scrub-mapped stage layers. Each stage owns segment                  */
/* [i·SEG, (i+1)·SEG]; transitions happen in the ZONE-wide window      */
/* ending exactly at each segment boundary, linear within the zone     */
/* (mechanical — the scrub IS the timing function).                    */
/* ------------------------------------------------------------------ */

interface StageLayerProps {
  index: number
  progress: MotionValue<number>
}

function StageNumeral({
  index,
  progress,
  children,
}: StageLayerProps & { children: string }) {
  const enterStart = index * SEG - ZONE
  const enterEnd = index * SEG
  const exitStart = (index + 1) * SEG - ZONE
  const exitEnd = (index + 1) * SEG
  const first = index === 0
  const last = index === COUNT - 1

  // Numeral i translates out upward while i+1 rises in from below.
  const y = useTransform(
    progress,
    first
      ? [exitStart, exitEnd]
      : last
        ? [enterStart, enterEnd]
        : [enterStart, enterEnd, exitStart, exitEnd],
    first
      ? ["0%", "-110%"]
      : last
        ? ["110%", "0%"]
        : ["110%", "0%", "0%", "-110%"],
  )

  return (
    <motion.span
      style={{ y }}
      className="absolute left-0 top-0 block font-sans text-[clamp(6rem,14vw,11rem)] font-semibold leading-none tracking-[-0.03em] text-paper"
    >
      {children}
    </motion.span>
  )
}

function StageText({
  index,
  progress,
  label,
  line,
}: StageLayerProps & { label: string; line: string }) {
  const enterStart = index * SEG - ZONE
  const enterEnd = index * SEG
  const exitStart = (index + 1) * SEG - ZONE
  const exitEnd = (index + 1) * SEG
  const first = index === 0
  const last = index === COUNT - 1

  const opacity = useTransform(
    progress,
    first
      ? [exitStart, exitEnd]
      : last
        ? [enterStart, enterEnd]
        : [enterStart, enterEnd, exitStart, exitEnd],
    first ? [1, 0] : last ? [0, 1] : [0, 1, 1, 0],
  )

  return (
    <motion.div style={{ opacity }} className="absolute inset-x-0 top-0">
      <p className={`${MONO} text-gold`}>{label}</p>
      <p className="mt-3 max-w-sm text-base leading-relaxed text-paper/80">
        {line}
      </p>
    </motion.div>
  )
}

function StageImage({
  index,
  progress,
  src,
  alt,
}: StageLayerProps & { src: string; alt: string }) {
  const enterStart = index * SEG - ZONE
  const enterEnd = index * SEG
  const segEnd = (index + 1) * SEG

  // Layers stack in stage order, so each stage only needs to fade IN
  // over its entry zone and then sit on top of the previous one.
  const opacity = useTransform(
    progress,
    index === 0 ? [0, 1] : [enterStart, enterEnd],
    index === 0 ? [1, 1] : [0, 1],
  )
  // Subtle settle: 1.04 → 1 across the stage's own segment.
  const scale = useTransform(
    progress,
    [Math.max(0, enterStart), segEnd],
    [1.04, 1],
  )

  return (
    <motion.img
      src={src}
      alt={alt}
      style={{ opacity, scale }}
      className="absolute inset-0 h-full w-full object-cover"
    />
  )
}

/* ------------------------------------------------------------------ */
/* Stacked fallback — SSR, mobile (<lg), and prefers-reduced-motion.   */
/* Plain ink rows: numeral, label, line, image. Reveal handles         */
/* reduced-motion internally (renders static).                         */
/* ------------------------------------------------------------------ */

function StackedFallback() {
  return (
    <section aria-label={ARIA_LABEL} className="bg-ink text-paper">
      <MicroHeader />
      <div className="grid md:grid-cols-2">
        {STAGES.map((stage, i) => (
          <Reveal key={stage.num} className="border-b border-line md:[&:nth-child(odd)]:border-r">
            <article className="group relative overflow-hidden">
              <div className="relative aspect-[4/5] overflow-hidden bg-ink-soft md:aspect-[3/2]">
                <img
                  src={stage.src}
                  alt={stage.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <p className="font-sans text-7xl font-semibold leading-none tracking-[-0.06em] text-paper/85 md:text-8xl">
                    {stage.num}
                  </p>
                  <p className={`${MONO} mt-4 text-gold`}>{stage.label}</p>
                  <p className="mt-3 max-w-sm text-base leading-relaxed text-paper/80">
                    {stage.line}
                  </p>
                </div>
                <div aria-hidden="true" className="pointer-events-none absolute inset-5 border border-paper/15 transition-colors duration-300 group-hover:border-gold/70" />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
