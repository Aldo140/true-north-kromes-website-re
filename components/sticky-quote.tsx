"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { MessageSquare, X } from "lucide-react"
import { useMotionValueEvent, useScroll } from "motion/react"
import { trackEvent } from "@/lib/analytics"

export function StickyQuote() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const visibleRef = useRef(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const next = latest > 400
    if (next !== visibleRef.current) {
      visibleRef.current = next
      setVisible(next)
    }
  })

  if (!visible || dismissed) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      <Link
        href="/contact"
        onClick={() => trackEvent("cta_click", { location: "sticky_quote", label: "get_a_quote" })}
        className="flex items-center gap-2 border border-gold/40 bg-ink px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-paper shadow-lg transition-colors hover:border-gold hover:text-gold"
      >
        <MessageSquare className="h-3.5 w-3.5" />
        Get a quote
      </Link>
      <button
        onClick={() => setDismissed(true)}
        className="border border-line bg-ink p-2.5 text-paper/70 shadow-lg transition-colors hover:text-paper"
        aria-label="Dismiss"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
