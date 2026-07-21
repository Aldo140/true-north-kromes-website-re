"use client"

import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { ArrowLeft, ArrowRight } from "lucide-react"

export type FaqItem = {
  question: string
  answer: string
}

export function SwapFaq({ items }: { items: readonly FaqItem[] }) {
  const [active, setActive] = useState(0)
  const reduced = useReducedMotion()
  const current = items[active]

  return (
    <section className="bg-ink py-20 text-paper sm:py-24 lg:py-32" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
        <h2 id="faq-heading" className="max-w-[14ch] text-balance font-sans text-[clamp(2rem,5vw,4rem)] font-semibold leading-[0.98] tracking-[-0.035em]">
          Before you send a case.
        </h2>
        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6" aria-label="Frequently asked questions">
            {items.map((item, index) => (
              <button
                key={item.question}
                type="button"
                onClick={() => setActive(index)}
                aria-pressed={active === index}
                aria-controls="faq-answer-panel"
                className={`group flex w-full items-start gap-5 border-b border-line py-5 text-left transition-colors ${active === index ? "text-paper" : "text-paper/50 hover:text-paper/80"}`}
              >
                <span className={`mt-1 font-mono text-[10px] tracking-[0.16em] ${active === index ? "text-gold" : "text-paper/30"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={`text-base leading-6 underline-offset-8 transition-colors ${active === index ? "underline decoration-gold" : "decoration-transparent"}`}>
                  {item.question}
                </span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-6">
            <div id="faq-answer-panel" className="lg:sticky lg:top-24" aria-live="polite">
              <div className="relative min-h-[22rem] overflow-hidden border border-line bg-ink-soft p-7 sm:p-10">
                <span className="absolute inset-x-0 top-0 h-px bg-gold" aria-hidden="true" />
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={current.question}
                    initial={reduced ? false : { opacity: 0, transform: "translateY(12px)", filter: "blur(2px)" }}
                    animate={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }}
                    exit={reduced ? undefined : { opacity: 0, transform: "translateY(-8px)", filter: "blur(2px)" }}
                    transition={{ duration: reduced ? 0 : 0.22, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold">Answer {String(active + 1).padStart(2, "0")}</p>
                    <h3 className="mt-7 max-w-[22ch] text-balance text-2xl font-medium tracking-[-0.025em] sm:text-3xl">{current.question}</h3>
                    <p className="mt-6 max-w-[52ch] text-sm leading-7 text-paper/70 sm:text-base">{current.answer}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export type CrossfadeSlide = {
  title: string
  description: string
  image: string
  alt: string
  label?: string
}

export function CrossfadeCarousel({ slides }: { slides: readonly CrossfadeSlide[] }) {
  const [active, setActive] = useState(0)
  const reduced = useReducedMotion()
  const slide = slides[active]
  const step = (direction: number) => setActive((value) => (value + direction + slides.length) % slides.length)

  return (
    <section className="bg-paper py-20 sm:py-24 lg:py-32" aria-label="Featured framework carousel">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
        <div className="mb-8 flex items-end justify-between gap-6 border-b border-line-dark pb-5">
          <h2 className="max-w-[16ch] text-balance font-sans text-[clamp(1.9rem,4vw,3.25rem)] font-semibold leading-[1] tracking-[-0.035em] text-ink">
            Frameworks in focus.
          </h2>
          <div className="flex gap-2">
            <button type="button" onClick={() => step(-1)} aria-label="Previous framework" className="flex h-11 w-11 items-center justify-center border border-line-dark text-ink transition-colors hover:border-gold-dim hover:text-gold-dim active:scale-[0.97]">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button type="button" onClick={() => step(1)} aria-label="Next framework" className="flex h-11 w-11 items-center justify-center border border-line-dark text-ink transition-colors hover:border-gold-dim hover:text-gold-dim active:scale-[0.97]">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative min-h-[43rem] sm:min-h-[52rem] lg:min-h-[34rem]" aria-live="polite">
          <AnimatePresence initial={false} mode="sync">
            <motion.article
              key={slide.image}
              initial={reduced ? false : { opacity: 0, filter: "blur(3px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={reduced ? undefined : { opacity: 0, filter: "blur(3px)" }}
              transition={{ duration: reduced ? 0 : 0.28, ease: [0.23, 1, 0.32, 1] }}
              className="absolute inset-0 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-14"
            >
              <div className="overflow-hidden bg-ink lg:col-span-8">
                <img src={slide.image} alt={slide.alt} className="aspect-[4/5] w-full object-cover sm:aspect-[16/11]" />
              </div>
              <div className="lg:col-span-4 lg:pb-4">
                {slide.label && <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold-dim">{slide.label}</p>}
                <h3 className="mt-4 text-balance text-2xl font-semibold tracking-[-0.025em] text-ink sm:text-3xl">{slide.title}</h3>
                <p className="mt-5 max-w-[42ch] text-sm leading-7 text-ink/68 sm:text-base">{slide.description}</p>
                <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45">
                  {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                </p>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
