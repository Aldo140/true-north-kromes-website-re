"use client"

import { useEffect, useState } from "react"
import { useReducedMotion } from "motion/react"
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

export function ProcessCinema() {
  const reduced = useReducedMotion()
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (reduced) return
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % STAGES.length)
    }, INTERVAL)
    return () => window.clearInterval(timer)
  }, [reduced])

  const selectStage = (index: number) => {
    setActive(index)
  }

  return (
    <section
      id="process"
      aria-label="Production process, step by step"
      className="bg-ink text-paper"
    >
      <div className="flex items-baseline justify-between border-b border-line px-5 py-4 sm:px-6 lg:px-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/70">
          THE PROCESS
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/40">
          TNK · PRODUCTION
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-6 sm:py-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12 lg:py-20">
        <div className="flex flex-col justify-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
            {STAGES[active].num} · {STAGES[active].label}
          </p>
          <div className="relative mt-5 min-h-[11rem] overflow-hidden sm:min-h-[13rem] lg:min-h-[15rem]">
            {STAGES.map((stage, index) => (
              <div
                key={stage.num}
                aria-hidden={index !== active}
                className={`absolute inset-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  index === active ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
              >
                <p className="font-sans text-[clamp(6rem,15vw,11rem)] font-semibold leading-[0.82] tracking-[-0.05em] text-paper">
                  {stage.num}
                </p>
                <p className="mt-5 max-w-sm text-base leading-relaxed text-paper/75 sm:text-lg">
                  {stage.line}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 h-px w-full bg-line" aria-hidden="true">
            <div
              className="h-px bg-gold transition-[width] duration-500 ease-linear"
              style={{ width: `${((active + 1) / STAGES.length) * 100}%` }}
            />
          </div>

          <div className="mt-6 flex gap-2" role="tablist" aria-label="Production stages">
            {STAGES.map((stage, index) => (
              <button
                key={stage.num}
                type="button"
                role="tab"
                aria-selected={index === active}
                aria-controls={`process-stage-${stage.num}`}
                onClick={() => selectStage(index)}
                className={`min-h-11 min-w-11 border px-3 py-2 font-mono text-[11px] tracking-[0.16em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                  index === active
                    ? "border-gold bg-gold text-ink"
                    : "border-line text-paper/55 hover:border-paper/70 hover:text-paper"
                }`}
              >
                {stage.num}
              </button>
            ))}
          </div>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/35">
            Auto sequence · select a stage
          </p>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden border border-line bg-ink-soft sm:aspect-[16/10]">
          {STAGES.map((stage, index) => (
            <img
              key={stage.num}
              id={`process-stage-${stage.num}`}
              src={stage.src}
              alt={stage.alt}
              loading={index === 0 ? "eager" : "lazy"}
              aria-hidden={index !== active}
              className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                index === active ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
              }`}
            />
          ))}
          <div className="pointer-events-none absolute inset-5 border border-paper/20 sm:inset-7" aria-hidden="true">
            <span className="absolute -left-px -top-px h-6 w-6 border-l border-t border-gold" />
            <span className="absolute -right-px -top-px h-6 w-6 border-r border-t border-gold" />
            <span className="absolute -bottom-px -left-px h-6 w-6 border-b border-l border-gold" />
            <span className="absolute -bottom-px -right-px h-6 w-6 border-b border-r border-gold" />
          </div>
          <div className="absolute inset-x-5 bottom-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-paper/65 sm:inset-x-7 sm:bottom-7">
            <span>Production frame</span>
            <span>{STAGES[active].num} / 04</span>
          </div>
        </div>
      </div>
    </section>
  )
}
