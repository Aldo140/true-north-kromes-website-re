"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { useReducedMotion } from "motion/react"

/* ------------------------------------------------------------------ */
/* ScrambleText — mono "machine readout": on trigger, characters       */
/* flicker through a technical charset before locking to the real      */
/* text left-to-right. Mechanical, ~500ms, no springs.                 */
/* ------------------------------------------------------------------ */

const CHARSET = "TNKCO-CR0123456789·—/±"
const DURATION_MS = 500

interface ScrambleTextProps {
  text: string
  /** "hover" (default) scrambles on mouse enter; "mount" runs once on mount */
  trigger?: "hover" | "mount"
  className?: string
}

export function ScrambleText({ text, trigger = "hover", className }: ScrambleTextProps) {
  const reduced = useReducedMotion()
  const [display, setDisplay] = useState(text)
  const rafRef = useRef<number | null>(null)
  const runningRef = useRef(false)

  const scramble = useCallback(() => {
    if (runningRef.current) return
    runningRef.current = true
    const start = performance.now()

    const step = (now: number) => {
      const progress = Math.min((now - start) / DURATION_MS, 1)
      // Characters lock to their real value left-to-right as time passes.
      const lockedCount = Math.floor(progress * text.length)
      let out = ""
      for (let i = 0; i < text.length; i++) {
        const ch = text[i]
        if (ch === " " || i < lockedCount || progress === 1) {
          out += ch
        } else {
          out += CHARSET[Math.floor(Math.random() * CHARSET.length)]
        }
      }
      setDisplay(out)
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step)
      } else {
        rafRef.current = null
        runningRef.current = false
      }
    }

    rafRef.current = requestAnimationFrame(step)
  }, [text])

  // Reset if the target text changes; cancel any in-flight animation.
  useEffect(() => {
    setDisplay(text)
  }, [text])

  // Mount trigger.
  useEffect(() => {
    if (reduced || trigger !== "mount") return
    scramble()
  }, [reduced, trigger, scramble])

  // Cleanup on unmount.
  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      runningRef.current = false
    }
  }, [])

  return (
    <span
      aria-label={text}
      onMouseEnter={!reduced && trigger === "hover" ? scramble : undefined}
      className={`whitespace-nowrap ${className ?? ""}`}
    >
      <span aria-hidden="true">{display}</span>
    </span>
  )
}
