import { Upload, PenTool, Printer, Package } from "lucide-react"

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Submit Your Case",
    description: "Send us your digital scan or case files via email. We accept all major file formats.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "3D Design",
    description: "Expert digital framework design tailored to each case using advanced CAD software.",
  },
  {
    icon: Printer,
    step: "03",
    title: "3D Printing",
    description: "High-resolution metal printing using advanced SLM technology for precision results.",
  },
  {
    icon: Package,
    step: "04",
    title: "Post-Processing",
    description: "Professional finishing, DLyte polishing, and quality assurance before delivery.",
  },
]

export function Process() {
  return (
    <section className="bg-background py-24 lg:py-32" aria-label="Our Process">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="font-[family-name:var(--font-heading)] text-center text-[clamp(1.5rem,3vw,2.5rem)] text-foreground">
          How It Works
        </h2>
        <p className="mt-3 text-center text-sm tracking-wider text-[#6b8fa3]">
          A STREAMLINED DIGITAL WORKFLOW
        </p>

        <div className="mt-20 grid gap-16 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.step} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center border border-[#6b8fa3]/30 bg-white">
                <step.icon className="h-7 w-7 text-[#6b8fa3]" strokeWidth={1.5} />
              </div>
              <p className="mt-5 text-xs font-semibold tracking-[0.2em] text-[#6b8fa3]">
                STEP {step.step}
              </p>
              <h3 className="font-[family-name:var(--font-heading)] mt-2 text-lg text-foreground">
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
