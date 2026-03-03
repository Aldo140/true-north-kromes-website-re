"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function CTABanner() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-primary py-16 lg:py-20" aria-label="Get Started">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl px-5 text-center ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-tight text-white text-balance">
          [Placeholder Heading]
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75">
          [Placeholder call-to-action description -- client to supply before launch.]
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-chrome-light"
          >
            [Placeholder]
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="tel:+18076247222"
            className="inline-flex items-center rounded-md border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-white/60 hover:bg-white/10"
          >
            Call (807) 624-7222
          </a>
        </div>
      </div>
    </section>
  )
}
