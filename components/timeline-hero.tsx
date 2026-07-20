"use client"

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { sitePath } from "@/lib/site-path"

const CHECKPOINTS = ["DESIGN", "PRINT", "FINISH", "SHIP"] as const

export function TimelineHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] })
  const imageY = useTransform(scrollYProgress, [0, 1], reducedMotion ? ["0%", "0%"] : ["0%", "10%"])
  const copyY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [0, -42])

  return (
    <section ref={sectionRef} aria-labelledby="timeline-hero-heading" className="relative overflow-hidden bg-paper pt-36 text-ink sm:pt-40 lg:pt-44">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between border-b border-line-dark pb-4 font-mono text-[10px] uppercase tracking-[0.18em]">
          <span className="text-gold-dim">Client production record</span>
          <span className="text-ink/45">Cochrane, Alberta · Canada</span>
        </div>

        <motion.div style={{ y: copyY }} className="grid gap-10 pb-14 pt-10 lg:grid-cols-12 lg:items-end lg:pb-20 lg:pt-14">
          <h1 id="timeline-hero-heading" className="text-balance font-sans text-[clamp(3.25rem,7vw,6rem)] font-medium leading-[0.92] tracking-[-0.04em] text-ink lg:col-span-8">
            A production line<br />you can actually follow.
          </h1>
          <div className="lg:col-span-4 lg:pb-1">
            <p className="max-w-md text-pretty text-base leading-7 text-ink/70 sm:text-lg">
              Your approval starts the clock. From that moment, every case moves through the same fixed four-business-day sequence.
            </p>
            <a href="#production-line" className="group mt-7 inline-flex items-center gap-3 border-b border-gold-dim pb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink transition-colors hover:text-gold-dim">
              See every handoff
              <span className="transition-transform duration-300 group-hover:translate-y-1" aria-hidden="true">↓</span>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-[1500px] px-0 sm:px-8 lg:px-16">
        <div className="relative h-[54vh] min-h-[26rem] overflow-hidden bg-ink sm:h-[58vh] lg:min-h-[34rem]">
          <motion.div style={{ y: imageY }} className="absolute -inset-y-[10%] inset-x-0">
            <img src={sitePath("/images/opt/framework-hero.jpg")} alt="Two mirror-polished cobalt-chrome partial frameworks completed by True North Kromes" className="h-full w-full object-cover object-center" />
          </motion.div>
          <div className="absolute inset-0 bg-ink/15" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/90 via-ink/15 to-transparent" aria-hidden="true" />

          <div className="absolute left-5 top-5 border border-paper/45 bg-ink/75 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.18em] text-paper sm:left-6 sm:top-6">
            FRAME / FINISHED
          </div>
          <div className="absolute right-5 top-5 text-right font-mono text-[9px] uppercase tracking-[0.18em] text-paper/70 sm:right-6 sm:top-6">
            CO-CR · SLM<br />TNK QC VERIFIED
          </div>

          {!reducedMotion && (
            <motion.span
              initial={{ top: "8%", opacity: 0 }}
              animate={{ top: ["8%", "92%"], opacity: [0, 0.85, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, repeatDelay: 2.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-0 h-px bg-gold shadow-[0_0_16px_var(--gold)]"
              aria-hidden="true"
            />
          )}

          <div className="absolute inset-x-5 bottom-5 border-t border-paper/40 pt-4 text-paper sm:inset-x-6 sm:bottom-6 sm:pt-5">
            <div className="mb-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] sm:text-[10px]">
              <span className="text-gold">Approval received</span>
              <span className="text-paper/65">Ship date locked</span>
            </div>
            <div className="relative grid grid-cols-4">
              <span className="absolute inset-x-0 top-[5px] h-px bg-paper/30" aria-hidden="true" />
              {!reducedMotion && <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 2.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }} className="absolute inset-x-0 top-[5px] h-px origin-left bg-gold" aria-hidden="true" />}
              {CHECKPOINTS.map((checkpoint, index) => (
                <div key={checkpoint} className={`relative ${index === 3 ? "text-right" : index > 0 ? "text-center" : "text-left"}`}>
                  <span className={`relative z-10 inline-block size-[11px] rounded-full border-2 border-ink ${index === 3 ? "bg-paper" : "bg-gold"}`} aria-hidden="true" />
                  <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-paper/75 sm:text-[9px]">{checkpoint}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
