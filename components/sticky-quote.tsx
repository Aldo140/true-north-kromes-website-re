"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MessageSquare, X } from "lucide-react"

export function StickyQuote() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!visible || dismissed) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      <Link
        href="/contact"
        className="flex items-center gap-2 bg-[#8b7d3c] px-5 py-3 text-sm font-medium tracking-wider text-white shadow-lg transition-all hover:bg-[#6e6330]"
      >
        <MessageSquare className="h-4 w-4" />
        Get a Quote
      </Link>
      <button
        onClick={() => setDismissed(true)}
        className="bg-[#8b7d3c] p-2 text-white shadow-lg transition-colors hover:bg-[#6e6330]"
        aria-label="Dismiss"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
