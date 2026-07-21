"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { MessageSquare, X } from "lucide-react"
import { useMotionValueEvent, useScroll } from "motion/react"
import { trackEvent } from "@/lib/analytics"
import { usePathname } from "next/navigation"

export function StickyQuote() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const pathname = usePathname()
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
    <div className={`fixed inset-x-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-50 flex items-stretch gap-2 md:inset-x-auto md:bottom-6 md:right-6 md:items-center ${pathname === "/contact" ? "max-md:hidden" : ""}`}>
      <Link
        href="/contact"
        onClick={() => trackEvent("cta_click", { location: "sticky_quote", label: "get_a_quote" })}
        className="flex min-h-12 flex-1 items-center justify-center gap-2 border border-gold/50 bg-ink px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-paper shadow-lg transition-colors hover:border-gold hover:text-gold md:min-h-0 md:flex-none md:border-gold/40"
      >
        <MessageSquare className="h-3.5 w-3.5" />
        Get a quote
      </Link>
      <button
        onClick={() => setDismissed(true)}
        className="flex h-12 w-12 shrink-0 items-center justify-center border border-line bg-ink text-paper/70 shadow-lg transition-colors hover:text-paper md:h-auto md:w-auto md:p-2.5"
        aria-label="Dismiss"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
