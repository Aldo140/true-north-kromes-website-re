"use client"

import { useEffect, useState } from "react"
import { animate, motion, useMotionValue } from "motion/react"
import { EASE_MECH } from "./motion-primitives"

/* ------------------------------------------------------------------ */
/* PrecisionCursor — sitewide crosshair for fine pointers, extending   */
/* the viewfinder motif: a 3px gold dot pinned to the pointer plus a   */
/* 24px square of four gold L-corner brackets that trails with a       */
/* tight mechanical lag. Brackets open to 36px (dot turns paper) over  */
/* interactive elements. Only mounts for hover-capable fine pointers   */
/* with motion enabled; hides the native cursor via a data attribute   */
/* on <html> styled from a local <style> tag (globals.css untouched).  */
/* ------------------------------------------------------------------ */

const CURSOR_ATTR = "data-tnk-cursor"
const INTERACTIVE = "a, button, [role=button], input, select, textarea, label"
const LAG = { duration: 0.15, ease: EASE_MECH } as const

export function PrecisionCursor() {
  const [active, setActive] = useState(false)
  const [visible, setVisible] = useState(false)
  const [engaged, setEngaged] = useState(false)

  // Dot tracks instantly; brackets chase via short EASE_MECH animations.
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)
  const boxX = useMotionValue(-100)
  const boxY = useMotionValue(-100)

  // Gate on (hover + fine pointer) and motion preference, live-updating.
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)")
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setActive(fine.matches && !reduced.matches)
    update()
    fine.addEventListener("change", update)
    reduced.addEventListener("change", update)
    return () => {
      fine.removeEventListener("change", update)
      reduced.removeEventListener("change", update)
    }
  }, [])

  useEffect(() => {
    if (!active) return
    const root = document.documentElement
    root.setAttribute(CURSOR_ATTR, "")

    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX)
      dotY.set(e.clientY)
      animate(boxX, e.clientX, LAG)
      animate(boxY, e.clientY, LAG)
      setVisible(true)
    }
    const onOver = (e: MouseEvent) => {
      const t = e.target
      setEngaged(t instanceof Element && t.closest(INTERACTIVE) !== null)
    }
    const onOut = (e: MouseEvent) => {
      const rt = e.relatedTarget
      // Left the window entirely.
      if (rt === null) setVisible(false)
    }
    const onEnter = () => setVisible(true)

    document.addEventListener("mousemove", onMove, { passive: true })
    document.addEventListener("mouseover", onOver, { passive: true })
    document.addEventListener("mouseout", onOut, { passive: true })
    root.addEventListener("mouseenter", onEnter)

    return () => {
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseover", onOver)
      document.removeEventListener("mouseout", onOut)
      root.removeEventListener("mouseenter", onEnter)
      root.removeAttribute(CURSOR_ATTR)
    }
  }, [active, dotX, dotY, boxX, boxY])

  // SSR renders null (active starts false); coarse/reduced pointers too.
  if (!active) return null

  const corner = "absolute h-2 w-2 border-gold"

  return (
    <>
      <style>{`[${CURSOR_ATTR}], [${CURSOR_ATTR}] * { cursor: none !important; }`}</style>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[99]"
        initial={false}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.15, ease: EASE_MECH }}
      >
        {/* Viewfinder brackets — trail the dot with a tight mechanical lag */}
        <motion.div className="absolute left-0 top-0" style={{ x: boxX, y: boxY }}>
          <motion.div
            className="relative -translate-x-1/2 -translate-y-1/2"
            initial={false}
            animate={{ width: engaged ? 36 : 24, height: engaged ? 36 : 24 }}
            transition={LAG}
          >
            <span className={`${corner} left-0 top-0 border-l border-t`} />
            <span className={`${corner} right-0 top-0 border-r border-t`} />
            <span className={`${corner} bottom-0 left-0 border-b border-l`} />
            <span className={`${corner} bottom-0 right-0 border-b border-r`} />
          </motion.div>
        </motion.div>

        {/* Center dot — pinned to the pointer, no smoothing */}
        <motion.div className="absolute left-0 top-0" style={{ x: dotX, y: dotY }}>
          <span
            className={`block h-[3px] w-[3px] -translate-x-1/2 -translate-y-1/2 transition-colors duration-150 ${
              engaged ? "bg-paper" : "bg-gold"
            }`}
          />
        </motion.div>
      </motion.div>
    </>
  )
}
