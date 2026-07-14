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

const INTERVAL = 5200
const MONO = "font-mono text-[11px] uppercase tracking-[0.18em]"

export function ProcessCinema() {
  return (
    <div id="process">
      <div className="hidden lg:block">
        <PinnedCinema />
      </div>
      <div className="lg:hidden">
        <StackedFallback />
      </div>
    </div>
  )
}

function PinnedCinema() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (paused) return
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % STAGES.length)
    }, INTERVAL)
    return () => window.clearInterval(timer)
  }, [paused])

  return (
    <section
      ref={sectionRef}
      aria-label="Production process, step by step"
      className="relative h-screen min-h-[42rem] bg-ink text-paper"
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
                    setActive(index)
                    setPaused(true)
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
