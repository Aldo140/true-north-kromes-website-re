"use client"

import { useEffect, useRef, useState } from "react"
import { Reveal } from "./motion-primitives"
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
        <PinnedCinema />
      </div>
      <div className="lg:hidden">
        <MobileSwipeCinema />
      </div>
    </div>
  )
}

function PinnedCinema() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const activeRef = useRef(0)
  const touchStartRef = useRef<number | null>(null)
  const wheelLockedRef = useRef(false)

  useEffect(() => {
    activeRef.current = active
  }, [active])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const advance = (direction: 1 | -1, event?: Event) => {
      const next = activeRef.current + direction
      if (next < 0 || next >= STAGES.length) return false
      event?.preventDefault()
      if (wheelLockedRef.current) return true
      wheelLockedRef.current = true
      activeRef.current = next
      setActive(next)
      window.setTimeout(() => {
        wheelLockedRef.current = false
      }, 650)
      return true
    }

    const desktop = window.matchMedia("(min-width: 1024px)")
    const onWheel = (event: WheelEvent) => {
      if (!desktop.matches || Math.abs(event.deltaY) < 8) return
      const rect = section.getBoundingClientRect()
      const viewport = window.innerHeight
      const sectionIsLocked = rect.top <= viewport * 0.45 && rect.bottom >= viewport * 0.55
      if (!sectionIsLocked) return

      // Pin the section exactly to the viewport before consuming the wheel
      // gesture. This prevents a large trackpad delta from skipping the frame.
      if (Math.abs(rect.top) > 2) {
        window.scrollTo({ top: window.scrollY + rect.top, behavior: "auto" })
      }
      advance(event.deltaY > 0 ? 1 : -1, event)
    }

    const onTouchStart = (event: TouchEvent) => {
      touchStartRef.current = event.touches[0]?.clientY ?? null
    }

    const onTouchMove = (event: TouchEvent) => {
      const start = touchStartRef.current
      const current = event.touches[0]?.clientY
      if (start === null || current === undefined || Math.abs(start - current) < 14) return
      const direction = start > current ? 1 : -1
      const canAdvance = activeRef.current + direction >= 0 && activeRef.current + direction < STAGES.length
      if (canAdvance) event.preventDefault()
    }

    const onTouchEnd = (event: TouchEvent) => {
      const start = touchStartRef.current
      const end = event.changedTouches[0]?.clientY
      touchStartRef.current = null
      if (start === null || end === undefined || Math.abs(start - end) < 40) return
      advance(start > end ? 1 : -1, event)
    }

    window.addEventListener("wheel", onWheel, { passive: false, capture: true })
    section.addEventListener("touchstart", onTouchStart, { passive: true })
    section.addEventListener("touchmove", onTouchMove, { passive: false })
    section.addEventListener("touchend", onTouchEnd, { passive: false })
    return () => {
      window.removeEventListener("wheel", onWheel, { capture: true })
      section.removeEventListener("touchstart", onTouchStart)
      section.removeEventListener("touchmove", onTouchMove)
      section.removeEventListener("touchend", onTouchEnd)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-label="Production process, step by step"
      className="relative h-screen min-h-[42rem] touch-pan-y bg-ink text-paper"
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="flex items-baseline justify-between border-b border-line px-5 py-4 sm:px-6 lg:px-12">
          <p className={`${MONO} text-paper/70`}>THE PROCESS</p>
          <p className={`${MONO} text-paper/40`}>TNK · PRODUCTION</p>
        </div>

        <div className="relative flex min-h-0 flex-1">
          <div className="relative z-10 flex w-[40%] flex-col justify-center px-8 lg:px-12">
            <p className={`${MONO} text-gold`}>
              {STAGES[active].num} · {STAGES[active].label}
            </p>

            <div className="relative mt-6 h-[clamp(6rem,14vw,11rem)] overflow-hidden">
              {STAGES.map((stage, index) => (
                <p
                  key={stage.num}
                  aria-hidden={index !== active}
                  className={`absolute inset-x-0 top-0 font-sans text-[clamp(6rem,14vw,11rem)] font-semibold leading-none tracking-[-0.03em] text-paper transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    index === active ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  {stage.num}
                </p>
              ))}
            </div>

            <div className="relative mt-8 h-28">
              {STAGES.map((stage, index) => (
                <div
                  key={stage.num}
                  aria-hidden={index !== active}
                  className={`absolute inset-x-0 top-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    index === active ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                  }`}
                >
                  <p className={`${MONO} text-gold`}>{stage.num} · {stage.label}</p>
                  <p className="mt-3 max-w-sm text-base leading-relaxed text-paper/80">
                    {stage.line}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 h-px w-full bg-line" aria-hidden="true">
              <div
                className="h-px bg-gold transition-[width] duration-500 ease-linear"
                style={{ width: `${((active + 1) / STAGES.length) * 100}%` }}
              />
            </div>

            <div className="mt-6 flex gap-2" role="tablist" aria-label="Select production stage">
              {STAGES.map((stage, index) => (
                <button
                  key={stage.num}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  onClick={() => {
                    activeRef.current = index
                    setActive(index)
                  }}
                  className={`min-h-10 min-w-10 border px-2 py-2 ${MONO} transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                    index === active
                      ? "border-gold bg-gold text-ink"
                      : "border-line text-paper/50 hover:border-paper/70 hover:text-paper"
                  }`}
                >
                  {stage.num}
                </button>
              ))}
            </div>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/35">
              Scroll or swipe to advance · {active === STAGES.length - 1 ? "Continue down to leave" : `${STAGES.length - active - 1} stages remaining`}
            </p>
          </div>

          <div className="relative w-[60%]">
            {STAGES.map((stage, index) => (
              <img
                key={stage.num}
                src={stage.src}
                alt={stage.alt}
                loading={index === 0 ? "eager" : "lazy"}
                aria-hidden={index !== active}
                className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  index === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
                }`}
              />
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
              <span>{STAGES[active].num} / 04</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MobileSwipeCinema() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const activeRef = useRef(0)
  const touchStartRef = useRef<number | null>(null)

  const changeStage = (direction: 1 | -1) => {
    const next = activeRef.current + direction
    if (next < 0 || next >= STAGES.length) return false
    activeRef.current = next
    setActive(next)
    return true
  }

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const onTouchStart = (event: TouchEvent) => {
      touchStartRef.current = event.touches[0]?.clientY ?? null
    }
    const onTouchMove = (event: TouchEvent) => {
      const start = touchStartRef.current
      const current = event.touches[0]?.clientY
      if (start === null || current === undefined || Math.abs(start - current) < 14) return
      const direction = start > current ? 1 : -1
      if (activeRef.current + direction >= 0 && activeRef.current + direction < STAGES.length) {
        event.preventDefault()
      }
    }
    const onTouchEnd = (event: TouchEvent) => {
      const start = touchStartRef.current
      const end = event.changedTouches[0]?.clientY
      touchStartRef.current = null
      if (start === null || end === undefined || Math.abs(start - end) < 40) return
      changeStage(start > end ? 1 : -1)
    }
    section.addEventListener("touchstart", onTouchStart, { passive: true })
    section.addEventListener("touchmove", onTouchMove, { passive: false })
    section.addEventListener("touchend", onTouchEnd, { passive: false })
    return () => {
      section.removeEventListener("touchstart", onTouchStart)
      section.removeEventListener("touchmove", onTouchMove)
      section.removeEventListener("touchend", onTouchEnd)
    }
  }, [])

  return (
    <section ref={sectionRef} aria-label="Production process, swipe through each stage" className="h-[100svh] min-h-[40rem] overflow-hidden bg-ink text-paper touch-pan-y">
      <div className="flex items-baseline justify-between border-b border-line px-5 py-4">
        <p className={`${MONO} text-paper/70`}>THE PROCESS</p>
        <p className={`${MONO} text-paper/40`}>TNK · {STAGES[active].num} / 04</p>
      </div>
      <div className="flex h-[calc(100%-3.25rem)] flex-col px-5 py-6">
        <div className="relative min-h-0 flex-1 overflow-hidden border border-line bg-ink-soft">
          {STAGES.map((stage, index) => (
            <img
              key={stage.num}
              src={stage.src}
              alt={stage.alt}
              loading={index === 0 ? "eager" : "lazy"}
              aria-hidden={index !== active}
              className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${index === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"}`}
            />
          ))}
          <div className="pointer-events-none absolute inset-4 border border-paper/20" aria-hidden="true">
            <span className="absolute -left-px -top-px h-5 w-5 border-l border-t border-gold" />
            <span className="absolute -right-px -top-px h-5 w-5 border-r border-t border-gold" />
            <span className="absolute -bottom-px -left-px h-5 w-5 border-b border-l border-gold" />
            <span className="absolute -bottom-px -right-px h-5 w-5 border-b border-r border-gold" />
          </div>
        </div>
        <div className="shrink-0 pt-5">
          <p className={`${MONO} text-gold`}>{STAGES[active].num} · {STAGES[active].label}</p>
          <p className="mt-3 max-w-sm text-base leading-relaxed text-paper/75">{STAGES[active].line}</p>
          <div className="mt-5 flex items-center justify-between gap-4">
            <div className="flex gap-2" role="tablist" aria-label="Select production stage">
              {STAGES.map((stage, index) => (
                <button
                  key={stage.num}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  onClick={() => { activeRef.current = index; setActive(index) }}
                  className={`min-h-10 min-w-10 border px-2 py-2 ${MONO} ${index === active ? "border-gold bg-gold text-ink" : "border-line text-paper/50"}`}
                >
                  {stage.num}
                </button>
              ))}
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/35">Swipe ↑ / ↓</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function StackedFallback() {
  return (
    <section aria-label="Production process, step by step" className="bg-ink text-paper">
      <div className="flex items-baseline justify-between border-b border-line px-5 py-4 sm:px-6 lg:px-12">
        <p className={`${MONO} text-paper/70`}>THE PROCESS</p>
        <p className={`${MONO} text-paper/40`}>TNK · PRODUCTION</p>
      </div>
      <div className="grid md:grid-cols-2">
        {STAGES.map((stage, index) => (
          <Reveal key={stage.num} className="border-b border-line md:[&:nth-child(odd)]:border-r">
            <article className="group relative overflow-hidden">
              <div className="relative aspect-[4/5] overflow-hidden bg-ink-soft md:aspect-[3/2]">
                <img
                  src={stage.src}
                  alt={stage.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <p className="font-sans text-7xl font-semibold leading-none tracking-[-0.06em] text-paper/85 md:text-8xl">{stage.num}</p>
                  <p className={`${MONO} mt-4 text-gold`}>{stage.label}</p>
                  <p className="mt-3 max-w-sm text-base leading-relaxed text-paper/80">{stage.line}</p>
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
