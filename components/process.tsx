import { Upload, PenTool, Printer, Package } from "lucide-react"

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "[Placeholder Step Title]",
    description: "[Placeholder -- client to supply step 1 description.]",
  },
  {
    icon: PenTool,
    step: "02",
    title: "[Placeholder Step Title]",
    description: "[Placeholder -- client to supply step 2 description.]",
  },
  {
    icon: Printer,
    step: "03",
    title: "[Placeholder Step Title]",
    description: "[Placeholder -- client to supply step 3 description.]",
  },
  {
    icon: Package,
    step: "04",
    title: "[Placeholder Step Title]",
    description: "[Placeholder -- client to supply step 4 description.]",
  },
]

export function Process() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-label="Our Process">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2.5rem)] font-light text-foreground">
          [Placeholder Heading]
        </h2>
        <p className="mt-2 text-center text-sm tracking-wider text-muted-foreground">
          [Placeholder subtitle]
        </p>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.step} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center border border-border">
                <step.icon className="h-7 w-7 text-[#8b7d3c]" strokeWidth={1.5} />
              </div>
              <p className="mt-5 text-xs font-semibold tracking-[0.2em] text-[#8b7d3c]">
                STEP {step.step}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
