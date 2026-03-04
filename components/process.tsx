import { Upload, PenTool, Printer, Package } from "lucide-react"

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Send Your Scans",
    description: "Upload your digital scans or ship your models through our secure client portal.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Digital Design",
    description: "Our technicians design your framework using advanced CAD software for a precise fit.",
  },
  {
    icon: Printer,
    step: "03",
    title: "3D Metal Printing",
    description: "Frameworks are 3D printed in Mediloy RPD alloy using laser sintering technology.",
  },
  {
    icon: Package,
    step: "04",
    title: "Finish & Deliver",
    description: "Each piece is polished, quality-checked, and shipped back to your lab or clinic.",
  },
]

export function Process() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-label="Our Process">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2.5rem)] font-light text-foreground">
          How It Works
        </h2>
        <p className="mt-2 text-center text-sm tracking-wider text-muted-foreground">
          From Scan to Finished Framework
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
