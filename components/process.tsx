"use client"

import { Upload, Printer, Package } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Submit Your Case",
    description:
      "Send your case by courier (physical models) or upload STL scans digitally. We handle everything from there.",
  },
  {
    icon: Printer,
    step: "02",
    title: "We Design & Print",
    description:
      "Our team creates a precision 3D digital design, then prints your framework in medical-grade metal using SLM technology.",
  },
  {
    icon: Package,
    step: "03",
    title: "Receive Your Framework",
    description:
      "After professional post-processing and quality inspection, your finished framework is shipped back ready to use.",
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
            From submission to delivery, we handle the entire workflow so you can focus on your patients.
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
