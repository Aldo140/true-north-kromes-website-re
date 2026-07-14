"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { EASE_MECH } from "./motion-primitives"

/* ------------------------------------------------------------------ */
/* BootScreen — first-visit "machine calibration" intro overlay.       */
/* Shows once per session (sessionStorage "tnk-booted"), skipped for   */
/* reduced-motion users. Pure overlay: the page loads behind it.       */
/* Timeline: 3 mono lines stamp in (~250ms apart) → 200px gold timer   */
/* fills linearly over 900ms → shutter lifts (y → -100%) → unmount.    */
/* Total ≈ 2.2s.                                                       */
/* ------------------------------------------------------------------ */

const BOOT_KEY = "tnk-booted"
const EXIT_AT_MS = 1600

const LINES = [
  { text: "TRUE NORTH KROMES", className: "text-paper" },
  { text: "CO-CR · SLM · IN-HOUSE", className: "text-paper/50" },
  { text: "CALIBRATING — ±0.02 MM", className: "text-gold" },
] as const

type Phase = "idle" | "boot" | "exit" | "done"

export function BootScreen() {
  const [phase, setPhase] = useState<Phase>("idle")

  useEffect(() => {
    try {
      if (sessionStorage.getItem(BOOT_KEY)) return
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
      // Flag immediately so a refresh mid-boot skips the sequence.
      sessionStorage.setItem(BOOT_KEY, "1")
    } catch {
      return
    }
    setPhase("boot")
    const timer = setTimeout(() => setPhase("exit"), EXIT_AT_MS)
    return () => clearTimeout(timer)
  }, [])

  // Null on the server (phase starts "idle") and after the shutter lifts.
  if (phase === "idle" || phase === "done") return null

  const exiting = phase === "exit"

  return (
    <motion.div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-ink ${
        exiting ? "pointer-events-none" : ""
      }`}
      initial={{ y: "0%" }}
      animate={{ y: exiting ? "-100%" : "0%" }}
      transition={{ duration: 0.6, ease: EASE_MECH }}
      onAnimationComplete={() => {
        if (exiting) setPhase("done")
      }}
    >
      <div className="flex flex-col items-start">
        {LINES.map((line, i) => (
          <motion.p
            key={line.text}
            className={`font-mono text-xs uppercase tracking-[0.18em] ${line.className}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: i * 0.25, ease: EASE_MECH }}
          >
            {line.text}
          </motion.p>
        ))}

        {/* Calibration timer: linear fill — it's a timer, not a gesture. */}
        <div className="mt-6 h-px w-[200px] bg-paper/15">
          <motion.div
            className="h-full w-full origin-left bg-gold"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.6, ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  )
}
