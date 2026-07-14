"use client"

import { useEffect, useRef } from "react"
import { motion, useReducedMotion } from "motion/react"
import { DUR, EASE_MECH } from "@/components/motion-primitives"

// True once the first page has mounted on the client. Module state survives
// route changes, so only client-side navigations animate — the very first
// paint (SSR) must never be gated behind JS.
let hasNavigated = false

export default function Template({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion()
  const animateThisMount = useRef(hasNavigated)

  useEffect(() => {
    hasNavigated = true
  }, [])

  if (reduced || !animateThisMount.current) {
    return <>{children}</>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DUR.base, ease: EASE_MECH }}
    >
      {children}
    </motion.div>
  )
}
