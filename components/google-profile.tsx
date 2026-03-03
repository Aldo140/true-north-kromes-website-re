"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function GoogleProfile() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="border-t border-border bg-secondary py-20 lg:py-28" aria-label="Find Us">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-5 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Location
          </p>
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-tight text-foreground text-balance">
            Find Us
          </h2>
        </div>

        <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
          <div className="flex h-[400px] items-center justify-center">
            <p className="text-sm text-muted-foreground">
              [Placeholder -- Google Maps embed. Client to supply address/embed URL before launch.]
            </p>
          </div>
        </div>

        <div className="mt-6 rounded border border-border bg-card p-6 text-center">
          <p className="text-sm text-muted-foreground">
            [Placeholder -- Google Reviews widget to be embedded here before launch.]
          </p>
        </div>
      </div>
    </section>
  )
}
