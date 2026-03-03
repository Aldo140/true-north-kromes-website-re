"use client"

import { Microscope, Truck, Shield } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const reasons = [
  {
    icon: Microscope,
    title: "Lab-Direct",
    description: "Work directly with the lab. No middlemen, no markups.",
  },
  {
    icon: Truck,
    title: "Flexible Submission",
    description:
      "Send cases by courier (physical models) or digital STL scan -- whichever works for you.",
  },
  {
    icon: Shield,
    title: "Canadian-Made",
    description:
      "Proudly designed and manufactured in Canada for Canadian dental professionals.",
  },
]

export function WhyTNK() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="border-t border-border bg-background py-20 lg:py-28" aria-label="Why Choose TNK">
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
                className="rounded-lg border border-border bg-card p-8 text-center shadow-sm"
              >
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
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
