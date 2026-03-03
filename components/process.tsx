"use client"

import { Upload, Printer, Package } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "[Placeholder Step Title]",
    description:
      "[Placeholder step description -- client to supply before launch.]",
  },
  {
    icon: Printer,
    step: "02",
    title: "[Placeholder Step Title]",
    description:
      "[Placeholder step description -- client to supply before launch.]",
  },
  {
    icon: Package,
    step: "03",
    title: "[Placeholder Step Title]",
    description:
      "[Placeholder step description -- client to supply before launch.]",
  },
]

export function Process() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="border-t border-border bg-background py-20 lg:py-28" aria-label="How It Works">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-5 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            How It Works
          </p>
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-tight text-foreground text-balance">
            Three Simple Steps
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
            [Placeholder -- client to supply subtitle before launch.]
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={item.step} className="relative text-center">
                {/* Connector line (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-10 hidden h-px w-[calc(100%-3rem)] translate-x-1/2 bg-border md:block" />
                )}
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/20 bg-primary/5">
                  <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                </div>
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-primary">
                  Step {item.step}
                </p>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
