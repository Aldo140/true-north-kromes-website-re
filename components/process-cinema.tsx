"use client"

import { useRef, useState } from "react"
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
  type PanInfo,
} from "motion/react"
import { sitePath } from "@/lib/site-path"

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

const MONO = "font-mono text-[11px] uppercase tracking-[0.18em]"

export function ProcessCinema() {
  return (
    <div id="process">
      <div className="hidden lg:block">
        <ScrollReel />
      </div>
      <div className="md:hidden">
        <MobileProductionConsole />
      </div>
      <div className="hidden md:block lg:hidden">
        <StackedReveal />
      </div>
    </div>
  )
}

/** Phone: a thumb-operated production console. The image remains dominant,
 *  while taps or a horizontal swipe advance the same real manufacturing line. */
function MobileProductionConsole() {
  const reduced = useReducedMotion()
  const [active, setActive] = useState(0)
  const stage = STAGES[active]

  const move = (direction: -1 | 1) => {
    setActive((current) => (current + direction + STAGES.length) % STAGES.length)
  }

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (reduced || Math.abs(info.offset.x) < 48) return
    move(info.offset.x < 0 ? 1 : -1)
  }

  return (
    <section aria-label="Production process, step by step" className="overflow-hidden bg-ink py-14 text-paper">
      <div className="flex items-baseline justify-between border-y border-line px-5 py-4">
        <p className={`${MONO} text-paper/70`}>THE PROCESS</p>
        <p className={`${MONO} text-paper/40`}>TNK · PRODUCTION</p>
      </div>

      <div className="px-5 pt-8">
        <h2 className="max-w-[10ch] text-balance text-[2.55rem] font-semibold leading-[0.94] tracking-[-0.035em]">
          Four stations. One continuous line.
        </h2>
        <p className="mt-5 max-w-[34ch] text-[15px] leading-7 text-paper/68">
          Swipe through the same sequence every framework follows inside our Cochrane lab.
        </p>
      </div>

      <div className="mt-8 border-y border-line bg-ink-soft">
        <AnimatePresence initial={false} mode="wait">
          <motion.article
            id="mobile-process-panel"
            role="tabpanel"
            aria-live="polite"
            key={stage.num}
            drag={reduced ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.08}
            onDragEnd={handleDragEnd}
            initial={reduced ? false : { opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduced ? undefined : { opacity: 0, x: -18 }}
            transition={{ duration: reduced ? 0 : 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="touch-pan-y"
          >
            <div className="relative aspect-[6/5] overflow-hidden">
              <img
                src={stage.src}
                alt={stage.alt}
                loading={active === 0 ? "eager" : "lazy"}
                draggable={false}
                className="h-full w-full select-none object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/10" aria-hidden="true" />
              <span
                aria-hidden="true"
                className="absolute -bottom-8 right-3 font-sans text-[8.5rem] font-semibold leading-none tracking-[-0.04em] text-paper/12"
              >
                {stage.num}
              </span>
              <div className="pointer-events-none absolute inset-4" aria-hidden="true">
                <span className="absolute left-0 top-0 h-6 w-6 border-l border-t border-gold" />
                <span className="absolute right-0 top-0 h-6 w-6 border-r border-t border-gold" />
                <span className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-gold" />
                <span className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-gold" />
              </div>
              <p className="absolute left-5 top-5 bg-ink px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-gold">
                STAGE {stage.num} / 04
              </p>
            </div>
            <div className="relative min-h-[10.25rem] px-5 py-6">
              <p className={`${MONO} text-gold`}>{stage.label}</p>
              <p className="mt-4 max-w-[32ch] text-lg leading-7 text-paper/85">{stage.line}</p>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="px-5 pt-4">
        <div className="flex items-center justify-between gap-1">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous production stage"
            className="grid min-h-11 min-w-11 place-items-center border border-line text-lg text-paper transition-colors active:border-gold active:bg-paper/10"
          >
            ←
          </button>
          <div className="flex gap-1" role="tablist" aria-label="Select a production stage">
            {STAGES.map((item, index) => (
              <button
                key={item.num}
                type="button"
                role="tab"
                aria-selected={index === active}
                aria-controls="mobile-process-panel"
                onClick={() => setActive(index)}
                className={`grid min-h-11 min-w-11 place-items-center border font-mono text-[10px] tracking-[0.16em] transition-[background-color,color,transform] active:scale-95 ${
                  index === active
                    ? "border-gold bg-gold text-ink"
                    : "border-line text-paper/55 active:bg-paper/10"
                }`}
              >
                {item.num}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next production stage"
            className="grid min-h-11 min-w-11 place-items-center border border-line text-lg text-paper transition-colors active:border-gold active:bg-paper/10"
          >
            →
          </button>
        </div>
        <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-paper/40">
          Swipe image or select a station
        </p>
      </div>
    </section>
  )
}

/** Desktop: the section is pinned for STAGES.length screens of scroll distance.
 *  Scroll position — not a timer — drives which stage is showing, so every
 *  transition tracks the user's own scroll input instead of fighting it. */
function ScrollReel() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })
  const rawFloat = useTransform(scrollYProgress, [0, 1], [0, STAGES.length - 1])
  const activeFloat = useSpring(rawFloat, { stiffness: 220, damping: 32, mass: 0.6 })
  const fillWidth = useTransform(scrollYProgress, (v) => `${v * 100}%`)

  // Only used for aria-hidden bookkeeping — the visual crossfade itself runs
  // entirely on motion values above, so this re-render is rare (once per
  // stage change) rather than once per scroll frame.
  const [activeIndex, setActiveIndex] = useState(0)
  useMotionValueEvent(activeFloat, "change", (v) => {
    const rounded = Math.min(STAGES.length - 1, Math.max(0, Math.round(v)))
    setActiveIndex((current) => (current === rounded ? current : rounded))
  })

  // This site's global `overflow-x` on html/body forces `overflow-y: auto`
  // on them per spec, which makes them the nearest scroll container — so
  // `position: sticky` here pins against body's (inert) scroll box instead
  // of the viewport and never actually sticks. Faking the pin manually with
  // `fixed` (viewport-relative, unaffected by that) sidesteps it entirely.
  const [phase, setPhase] = useState<"before" | "pinned" | "after">("before")
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = v <= 0 ? "before" : v >= 1 ? "after" : "pinned"
    setPhase((current) => (current === next ? current : next))
  })
  const panelPositionClass = reducedMotion
    ? "relative"
    : phase === "pinned"
      ? "fixed top-0"
      : phase === "after"
        ? "absolute bottom-0"
        : "absolute top-0"

  const scrollToStage = (index: number) => {
    const section = sectionRef.current
    if (!section) return
    const rect = section.getBoundingClientRect()
    const sectionTop = window.scrollY + rect.top
    const travel = rect.height - window.innerHeight
    const fraction = index / (STAGES.length - 1)
    window.scrollTo({ top: sectionTop + travel * fraction, behavior: "smooth" })
  }

  return (
    <section
      ref={sectionRef}
      aria-label="Production process, step by step"
      className="relative bg-ink text-paper"
      style={{ height: reducedMotion ? undefined : `${STAGES.length * 100}vh` }}
    >
      <div className={`${panelPositionClass} left-0 right-0 flex h-screen flex-col overflow-hidden`}>
        <div className="flex items-baseline justify-between border-b border-line px-5 py-4 sm:px-6 lg:px-12">
          <p className={`${MONO} text-paper/70`}>THE PROCESS</p>
          <p className={`${MONO} text-paper/40`}>TNK · PRODUCTION</p>
        </div>

        <div className="relative flex min-h-0 flex-1">
          <div className="relative z-10 flex w-[40%] flex-col justify-center px-8 lg:px-12">
            <div className="relative h-[clamp(6rem,14vw,11rem)] overflow-hidden">
              {STAGES.map((stage, index) => (
                <StageNumeral key={stage.num} num={stage.num} index={index} activeIndex={activeIndex} activeFloat={activeFloat} reducedMotion={reducedMotion} />
              ))}
            </div>

            <div className="relative mt-8 h-28">
              {STAGES.map((stage, index) => (
                <StageCopy key={stage.num} stage={stage} index={index} activeIndex={activeIndex} activeFloat={activeFloat} reducedMotion={reducedMotion} />
              ))}
            </div>

            <div className="mt-10 h-px w-full bg-line" aria-hidden="true">
              <motion.div className="h-px bg-gold" style={{ width: fillWidth }} />
            </div>

            <div className="mt-6 flex gap-2" role="tablist" aria-label="Jump to production stage">
              {STAGES.map((stage, index) => (
                <button
                  key={stage.num}
                  type="button"
                  role="tab"
                  onClick={() => scrollToStage(index)}
                  className={`min-h-10 min-w-10 border border-line px-2 py-2 ${MONO} text-paper/50 transition-colors hover:border-paper/70 hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold`}
                >
                  {stage.num}
                </button>
              ))}
            </div>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/35">
              Scroll to move through the line
            </p>
          </div>

          <div className="relative w-[60%]">
            {STAGES.map((stage, index) => (
              <StageImage key={stage.num} stage={stage} index={index} activeIndex={activeIndex} activeFloat={activeFloat} reducedMotion={reducedMotion} />
            ))}

            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-5 z-10" aria-hidden="true">
              <span className="absolute left-0 top-0 h-6 w-6 border-l border-t border-gold" />
              <span className="absolute right-0 top-0 h-6 w-6 border-r border-t border-gold" />
              <span className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-gold" />
              <span className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-gold" />
            </div>
            <div className="absolute inset-x-5 bottom-5 z-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-paper/65 sm:inset-x-7 sm:bottom-7">
              <span>Production frame</span>
              <FrameCounter activeFloat={activeFloat} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Wide linear falloff — 1 at the stage's own index, 0 by the time the
 *  scrub passes a neighbor. Used for images: a soft double-exposure
 *  between adjacent photos reads as cinematic, not glitchy. */
function useProximity(activeFloat: MotionValue<number>, index: number) {
  return useTransform(activeFloat, (v) => Math.max(0, 1 - Math.abs(v - index)))
}

/** Narrow snap — full opacity for most of a stage's own scroll range, then
 *  a quick handoff near the boundary. Two legible text blocks overlapping
 *  reads as broken in a way two blended photos don't, so text needs a much
 *  tighter transition band than images do. */
function useTextOpacity(activeFloat: MotionValue<number>, index: number) {
  return useTransform(activeFloat, (v) => {
    const d = Math.abs(v - index)
    if (d < 0.2) return 1
    if (d > 0.55) return 0
    return 1 - (d - 0.2) / 0.35
  })
}

function StageNumeral({
  num,
  index,
  activeIndex,
  activeFloat,
  reducedMotion,
}: {
  num: string
  index: number
  activeIndex: number
  activeFloat: MotionValue<number>
  reducedMotion: boolean | null
}) {
  const p = useTextOpacity(activeFloat, index)
  const y = useTransform(p, [0, 1], [24, 0])
  const scale = useTransform(p, [0, 1], [0.94, 1])
  return (
    <motion.p
      aria-hidden={index !== activeIndex}
      style={reducedMotion ? { opacity: index === 0 ? 1 : 0 } : { opacity: p, y, scale }}
      className="absolute inset-x-0 top-0 font-sans text-[clamp(6rem,14vw,11rem)] font-semibold leading-none tracking-[-0.03em] text-paper"
    >
      {num}
    </motion.p>
  )
}

function StageCopy({
  stage,
  index,
  activeIndex,
  activeFloat,
  reducedMotion,
}: {
  stage: (typeof STAGES)[number]
  index: number
  activeIndex: number
  activeFloat: MotionValue<number>
  reducedMotion: boolean | null
}) {
  const p = useTextOpacity(activeFloat, index)
  const y = useTransform(p, [0, 1], [14, 0])
  return (
    <motion.div
      aria-hidden={index !== activeIndex}
      style={reducedMotion ? { opacity: index === 0 ? 1 : 0 } : { opacity: p, y }}
      className="absolute inset-x-0 top-0"
    >
      <p className={`${MONO} text-gold`}>
        {stage.num} · {stage.label}
      </p>
      <p className="mt-3 max-w-sm text-base leading-relaxed text-paper/80">{stage.line}</p>
    </motion.div>
  )
}

function StageImage({
  stage,
  index,
  activeIndex,
  activeFloat,
  reducedMotion,
}: {
  stage: (typeof STAGES)[number]
  index: number
  activeIndex: number
  activeFloat: MotionValue<number>
  reducedMotion: boolean | null
}) {
  const p = useProximity(activeFloat, index)
  const scale = useTransform(p, [0, 1], [1.06, 1])
  const drift = useTransform(activeFloat, (v) => `${(index - v) * 6}%`)
  return (
    <motion.img
      src={stage.src}
      alt={stage.alt}
      loading={index === 0 ? "eager" : "lazy"}
      aria-hidden={index !== activeIndex}
      style={reducedMotion ? { opacity: index === 0 ? 1 : 0 } : { opacity: p, scale, x: drift }}
      className="absolute inset-0 h-full w-full object-cover"
    />
  )
}

function FrameCounter({ activeFloat }: { activeFloat: MotionValue<number> }) {
  const label = useTransform(activeFloat, (v) => `${STAGES[Math.round(v)].num} / 0${STAGES.length}`)
  return <motion.span>{label}</motion.span>
}

/** Mobile: forcing a pinned scroll-scrub into a small viewport tends to fight
 *  momentum scrolling and address-bar chrome, so instead each stage reveals
 *  naturally as it's scrolled into view — same fade-and-rise language as the
 *  rest of the site, no swipe or tap required. */
function StackedReveal() {
  return (
    <section aria-label="Production process, step by step" className="overflow-hidden bg-ink py-16 text-paper md:py-20">
      <div className="flex items-baseline justify-between border-b border-line px-5 py-4">
        <p className={`${MONO} text-paper/70`}>THE PROCESS</p>
        <p className={`${MONO} text-paper/40`}>TNK · PRODUCTION</p>
      </div>
      <div className="px-5 pt-8">
        <h2 className="max-w-[10ch] text-balance text-[2.35rem] font-semibold leading-[0.96] tracking-[-0.035em]">
          Four stations. One continuous line.
        </h2>
        <p className="mt-5 max-w-[34ch] text-[15px] leading-7 text-paper/65">
          Swipe through the same sequence every framework follows inside our Cochrane lab.
        </p>
      </div>
      <div className="mt-9 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {STAGES.map((stage, index) => (
          <article key={stage.num} className="w-[82vw] max-w-[21rem] shrink-0 snap-center border border-line bg-ink-soft">
            <div className="relative aspect-[5/4] overflow-hidden bg-ink-soft">
              <img
                src={stage.src}
                alt={stage.alt}
                loading={index === 0 ? "eager" : "lazy"}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-4 border border-paper/15" aria-hidden="true">
                <span className="absolute -left-px -top-px h-5 w-5 border-l border-t border-gold" />
                <span className="absolute -right-px -top-px h-5 w-5 border-r border-t border-gold" />
                <span className="absolute -bottom-px -left-px h-5 w-5 border-b border-l border-gold" />
                <span className="absolute -bottom-px -right-px h-5 w-5 border-b border-r border-gold" />
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-sans text-5xl font-semibold leading-none tracking-[-0.04em] text-paper/25">{stage.num}</p>
                <p className={`${MONO} text-right text-gold`}>{stage.label}</p>
              </div>
              <p className="mt-5 text-[15px] leading-7 text-paper/78">{stage.line}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="px-5 pt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-paper/35">Swipe to move through the line →</p>
    </section>
  )
}
