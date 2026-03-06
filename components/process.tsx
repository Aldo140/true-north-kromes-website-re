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
    <section className="bg-[#eeeee8] py-28 lg:py-36" aria-label="Our Process">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-medium tracking-[0.3em] text-[#6b6b6b] uppercase">
            Our Process
          </p>
          <h2 className="font-[family-name:var(--font-heading)] mt-4 text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.1] text-[#1a1a1a]">
            A streamlined<br />
            <span className="italic">digital workflow</span>
          </h2>
        </div>

        <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.step} className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center border border-[#1a1a1a]">
                <step.icon className="h-8 w-8 text-[#1a1a1a]" strokeWidth={1} />
              </div>
              <p className="mt-8 text-xs font-medium tracking-[0.3em] text-[#6b6b6b]">
                STEP {step.step}
              </p>
              <h3 className="font-[family-name:var(--font-heading)] mt-3 text-xl font-normal text-[#1a1a1a]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6b6b6b]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
