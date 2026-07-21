"use client"

import { useEffect, useRef, useState } from "react"
import Lenis from "lenis"
import { motion, useReducedMotion } from "motion/react"
import { DUR, EASE_MECH } from "./motion-primitives"

/* ------------------------------------------------------------------ */
/* SmoothScroll — Lenis inertia scrolling, mounted once in the layout. */
/* ------------------------------------------------------------------ */

export function SmoothScroll() {
  const reduced = useReducedMotion()
  useEffect(() => {
    if (reduced) return
    const lenis = new Lenis({ lerp: 0.115, anchors: true })
    let raf = requestAnimationFrame(function loop(t) {
      lenis.raf(t)
      raf = requestAnimationFrame(loop)
    })
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [reduced])
  return null
}

/* ------------------------------------------------------------------ */
/* MachinedLines — headline lines revealed like face-mill passes:      */
/* each line rises out of an overflow-hidden channel, staggered.       */
/* Pass the text pre-split into lines so the cut points are exact.     */
/* ------------------------------------------------------------------ */

interface MachinedLinesProps {
  lines: readonly string[]
  /** Heading element to render, defaults to h2 */
  as?: "h1" | "h2" | "h3" | "p"
  className?: string
  delay?: number
}

export function MachinedLines({ lines, as: Tag = "h2", className, delay = 0 }: MachinedLinesProps) {
  const reduced = useReducedMotion()
  // The viewport observer must sit on the UNCLIPPED heading: a span translated
  // fully inside its overflow-hidden channel has zero visible area, so
  // IntersectionObserver never reports it intersecting (chicken-and-egg).
  // Variants propagate the trigger from the heading down to each line.
  const MotionTag = motion[Tag]
  return (
    <MotionTag
      className={className}
      initial={reduced ? false : "hidden"}
      whileInView={reduced ? undefined : "visible"}
      viewport={{ once: true, amount: 0.3 }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: "0%" }}
            variants={{
              hidden: { y: "0%" },
              visible: {
                y: "0%",
                transition: { duration: DUR.slow, delay: delay + i * 0.09, ease: EASE_MECH },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  )
}

/* ------------------------------------------------------------------ */
/* Ticker — telemetry strip: an endless mono readout of real specs,    */
/* like a machine status line. Pauses on hover.                        */
/* ------------------------------------------------------------------ */

interface TickerProps {
  items: readonly string[]
  className?: string
}

export function Ticker({ items, className = "" }: TickerProps) {
  const row = (hidden: boolean) => (
    <span
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center"
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center whitespace-nowrap">
          <span className="px-6 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/60">
            {item}
          </span>
          <span aria-hidden="true" className="h-px w-4 bg-gold/60" />
        </span>
      ))}
    </span>
  )

  return (
    <div
      className={`group flex overflow-hidden border-y border-line bg-ink py-3 ${className}`}
      role="marquee"
      aria-label="Lab specifications"
    >
      <div className="flex min-w-full shrink-0 animate-ticker group-hover:[animation-play-state:paused]">
        {row(false)}
        <span className="ticker-duplicate flex shrink-0">{row(true)}</span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Magnetic — a wrapper that lets its child lean toward the cursor,    */
/* like a part pulled into registration. Small travel, mechanical.     */
/* ------------------------------------------------------------------ */

export function Magnetic({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className ?? ""}`}
      animate={reduced ? { x: 0, y: 0 } : { x: offset.x, y: offset.y }}
      transition={{ duration: DUR.fast, ease: EASE_MECH }}
      onMouseMove={reduced ? undefined : (e) => {
        const r = ref.current?.getBoundingClientRect()
        if (!r) return
        setOffset({
          x: (e.clientX - (r.left + r.width / 2)) * 0.18,
          y: (e.clientY - (r.top + r.height / 2)) * 0.28,
        })
      }}
      onMouseLeave={reduced ? undefined : () => setOffset({ x: 0, y: 0 })}
    >
      {children}
    </motion.div>
  )
}
