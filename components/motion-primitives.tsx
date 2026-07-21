"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"

/**
 * Shared motion vocabulary for the industrial-precision design system.
 * Mechanical easing only — no springs, no bounce. Every animation should
 * read as a machine action: parts sliding into registration, a rule being
 * machined across, a timer filling linearly.
 */

export const EASE_MECH = [0.16, 1, 0.3, 1] as const
export const EASE_LINEAR = "linear" as const

export const DUR = {
  fast: 0.25,
  base: 0.45,
  slow: 0.65,
} as const

interface RevealProps {
  children: ReactNode
  /** Seconds to wait before animating (for stagger choreography) */
  delay?: number
  /** Vertical offset in px the element settles from */
  y?: number
  /** Horizontal offset in px the element settles from */
  x?: number
  className?: string
  /** Portion of the element that must be in view before triggering */
  amount?: number
}

/** Viewport-triggered entrance: offset settles to rest with mechanical ease. */
export function Reveal({ children, delay = 0, y = 16, x = 0, className, amount = 0.3 }: RevealProps) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 1, y, x }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: DUR.base, delay, ease: EASE_MECH }}
    >
      {children}
    </motion.div>
  )
}

interface DrawRuleProps {
  /** Include a height + color class, e.g. "h-px bg-gold" */
  className?: string
  delay?: number
}

/** A horizontal rule machined across from the left when scrolled into view. */
export function DrawRule({ className = "h-px bg-gold", delay = 0 }: DrawRuleProps) {
  const reduced = useReducedMotion()
  return (
    <div className="overflow-hidden">
      <motion.div
        className={className}
        initial={reduced ? false : { clipPath: "inset(0 100% 0 0)" }}
        whileInView={reduced ? undefined : { clipPath: "inset(0 0% 0 0)" }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: DUR.slow, delay, ease: EASE_MECH }}
      />
    </div>
  )
}
