"use client"

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { Pause, Play } from "lucide-react"

export type StoryBeat = {
  label?: string
  title: string
  body: string
}

export function StickyMediaStory({
  image,
  alt,
  items,
  imageSide = "left",
  caption,
  dark = false,
  id,
}: {
  image: string
  alt: string
  items: readonly StoryBeat[]
  imageSide?: "left" | "right"
  caption?: string
  dark?: boolean
  id?: string
}) {
  const reduced = useReducedMotion()
  const imageOrder = imageSide === "left" ? "lg:order-1" : "lg:order-2"
  const copyOrder = imageSide === "left" ? "lg:order-2" : "lg:order-1"

  return (
    <section
      id={id}
      className={`scroll-mt-20 ${dark ? "bg-ink text-paper" : "bg-paper text-ink"}`}
      aria-label={items[0]?.title}
    >
      <div className="mx-auto grid max-w-6xl gap-7 px-5 py-14 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-0">
        <figure className={`${imageOrder} lg:col-span-6 lg:py-24`}>
          <div className="lg:sticky lg:top-24">
            <div className={`relative overflow-hidden ${dark ? "bg-ink-soft" : "bg-ink"}`}>
              <img src={image} alt={alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <span className="pointer-events-none absolute inset-4 border border-paper/25" aria-hidden="true" />
              <span className="pointer-events-none absolute inset-x-4 bottom-4 h-px origin-left bg-gold" aria-hidden="true" />
            </div>
            {caption && (
              <figcaption className={`mt-3 font-mono text-[10px] uppercase tracking-[0.16em] ${dark ? "text-paper/55" : "text-ink/55"}`}>
                {caption}
              </figcaption>
            )}
          </div>
        </figure>

        <div className={`${copyOrder} lg:col-span-6`}>
          {items.map((item, index) => (
            <motion.article
              key={`${item.title}-${index}`}
              initial={reduced ? false : { opacity: 1, transform: "translateY(18px)" }}
              animate={reduced ? { opacity: 1, transform: "translateY(0px)" } : undefined}
              whileInView={reduced ? undefined : { opacity: 1, transform: "translateY(0px)" }}
              viewport={{ once: true, amount: 0.42 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className={`flex min-h-0 flex-col justify-center border-b py-10 last:border-b-0 md:min-h-[58vh] md:py-16 lg:min-h-[78vh] ${dark ? "border-line" : "border-line-dark"}`}
            >
              {item.label && (
                <p className={`font-mono text-[10px] uppercase tracking-[0.18em] ${dark ? "text-gold" : "text-gold-dim"}`}>
                  {item.label}
                </p>
              )}
              <h2 className="mt-4 max-w-[18ch] text-balance font-sans text-[clamp(1.8rem,4vw,3.25rem)] font-semibold leading-[1.03] tracking-[-0.03em]">
                {item.title}
              </h2>
              <p className={`mt-4 max-w-[58ch] text-[15px] leading-[1.75] sm:mt-6 sm:text-base ${dark ? "text-paper/72" : "text-ink/72"}`}>
                {item.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CurtainTransition({ outgoing, incoming }: { outgoing: ReactNode; incoming: ReactNode }) {
  return (
    <div className="relative isolate">
      <div className="lg:sticky lg:top-0 lg:z-0">{outgoing}</div>
      <div className="relative z-10 bg-paper">{incoming}</div>
    </div>
  )
}

export function TypewriterHeadline({
  text,
  as = "h1",
  className = "",
  speed = 34,
  id,
}: {
  text: string
  as?: "h1" | "h2" | "h3" | "p"
  className?: string
  speed?: number
  id?: string
}) {
  const Tag = as as ElementType
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const [started, setStarted] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (reduced) {
      setCount(text.length)
      return
    }
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setStarted(true)
        observer.unobserve(node)
      },
      { threshold: 0.35 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [reduced, text.length])

  useEffect(() => {
    if (!started || reduced || count >= text.length) return
    const timer = window.setTimeout(() => setCount((value) => value + 1), speed)
    return () => window.clearTimeout(timer)
  }, [count, reduced, speed, started, text.length])

  if (reduced) {
    return <Tag ref={ref} id={id} className={className}>{text}</Tag>
  }

  return (
    <Tag ref={ref} id={id} className={`relative ${className}`}>
      <span className="invisible" aria-hidden="true">{text}</span>
      <span className="absolute inset-0" aria-hidden="true">
        {text.slice(0, count)}
        {count < text.length && <span className="typewriter-cursor" />}
      </span>
      <span className="sr-only">{text}</span>
    </Tag>
  )
}

export function AmbientMarquee({
  rows,
  className = "",
}: {
  rows: readonly string[]
  className?: string
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="flex h-full flex-col justify-around py-10">
        {rows.map((row, index) => (
          <div key={row} className={`ambient-marquee-row ${index % 2 ? "ambient-marquee-reverse" : ""}`}>
            <div className="ambient-marquee-track">
              <span>{row}&nbsp;&nbsp;&nbsp;{row}&nbsp;&nbsp;&nbsp;</span>
              <span>{row}&nbsp;&nbsp;&nbsp;{row}&nbsp;&nbsp;&nbsp;</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export type ProcessTickerItem = {
  number: string
  title: string
  body: string
}

export function ProcessTicker({
  items,
  title = "The production line",
  className = "",
}: {
  items: readonly ProcessTickerItem[]
  title?: string
  className?: string
}) {
  const [paused, setPaused] = useState(false)

  const row = (hidden: boolean) => (
    <div aria-hidden={hidden || undefined} className="flex shrink-0">
      {items.map((item) => (
        <article key={item.number} className="w-[82vw] shrink-0 border-r border-line px-5 py-8 sm:w-[24rem] sm:px-8">
          <div className="flex items-baseline justify-between gap-5">
            <span className="font-sans text-4xl font-semibold tracking-[-0.04em] text-paper/25">{item.number}</span>
            <span className="h-px flex-1 bg-gold/60" aria-hidden="true" />
          </div>
          <h3 className="mt-6 text-xl font-medium tracking-[-0.02em] text-paper">{item.title}</h3>
          <p className="mt-3 max-w-[34ch] text-sm leading-6 text-paper/65">{item.body}</p>
        </article>
      ))}
    </div>
  )

  return (
    <section className={`overflow-hidden border-y border-line bg-ink text-paper ${className}`} aria-label={title}>
      <div className="flex items-center justify-between border-b border-line px-5 py-4 sm:px-8">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/70">{title}</h2>
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          className="process-ticker-control flex min-h-10 min-w-10 items-center justify-center text-paper/60 transition-colors hover:text-gold focus-visible:text-gold"
          aria-label={paused ? "Resume process ticker" : "Pause process ticker"}
        >
          {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
        </button>
      </div>
      <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="process-ticker-track flex w-max" style={paused ? { animationPlayState: "paused" } : undefined}>
          {row(false)}
          <div className="process-ticker-duplicate flex shrink-0">{row(true)}</div>
        </div>
      </div>
    </section>
  )
}

export type TimelineItem = {
  number: string
  title: string
  body: string
}

export function VerticalScrollTimeline({ items }: { items: readonly TimelineItem[] }) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 70%", "end 55%"] })
  const lineScale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [0, 1])
  const lineTransform = useTransform(lineScale, (value) => `scaleY(${value})`)

  return (
    <div ref={sectionRef} className="relative mx-auto mt-14 max-w-6xl md:mt-20 lg:mt-28">
      <div className="absolute bottom-0 left-[7px] top-0 w-px bg-paper/20 lg:left-1/2" aria-hidden="true" />
      <motion.div
        className="absolute bottom-0 left-[7px] top-0 w-[2px] origin-top bg-gold lg:left-1/2"
        style={{ transform: lineTransform }}
        aria-hidden="true"
      />

      <ol className="space-y-12 md:space-y-16 lg:space-y-24">
        {items.map((item, index) => {
          const left = index % 2 === 0
          return (
            <li key={item.number} className="relative grid pl-10 lg:grid-cols-[1fr_5rem_1fr] lg:pl-0">
              <span className="absolute left-0 top-2 z-10 h-[15px] w-[15px] bg-gold ring-[6px] ring-ink lg:left-1/2 lg:-translate-x-1/2" aria-hidden="true" />
              <motion.article
                initial={reduced ? false : { opacity: 1, transform: `translateX(${left ? "-18px" : "18px"})` }}
                animate={reduced ? { opacity: 1, transform: "translateX(0px)" } : undefined}
                whileInView={reduced ? undefined : { opacity: 1, transform: "translateX(0px)" }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className={`max-w-xl ${left ? "lg:col-start-1 lg:pr-10 lg:text-right" : "lg:col-start-3 lg:pl-10"}`}
              >
                <p className="font-sans text-5xl font-light tracking-[-0.04em] text-paper/20">{item.number}</p>
                <h3 className="mt-3 text-xl font-medium tracking-[-0.025em] text-gold sm:text-2xl">{item.title}</h3>
                <p className={`mt-4 text-sm leading-7 text-paper/72 sm:text-base ${left ? "lg:ml-auto" : ""}`}>{item.body}</p>
              </motion.article>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
