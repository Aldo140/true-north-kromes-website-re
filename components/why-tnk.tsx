"use client"

import { Microscope, Truck, Shield } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const reasons = [
  {
    icon: Microscope,
    title: "[Placeholder]",
    description: "[Placeholder reason -- client to supply before launch.]",
  },
  {
    icon: Truck,
    title: "[Placeholder]",
    description:
      "[Placeholder reason -- client to supply before launch.]",
  },
  {
    icon: Shield,
    title: "[Placeholder]",
    description:
      "[Placeholder reason -- client to supply before launch.]",
  },
]

export function WhyTNK() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-secondary py-20 lg:py-28" aria-label="Why Choose TNK">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-5 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Why TNK
          </p>
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-tight text-foreground text-balance">
            Why Dental Professionals Choose TNK
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="chrome-card rounded-lg border bg-card p-8 text-center"
              >
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h4 className="text-base font-semibold text-foreground">
                  {reason.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
