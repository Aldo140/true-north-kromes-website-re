import { Upload, PenTool, Printer, Package } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "Submit Your Case",
    description: "Send us your digital scan or case files. We accept all major file formats.",
  },
  {
    icon: PenTool,
    title: "3D Design",
    description: "Expert digital framework design tailored to each case.",
  },
  {
    icon: Printer,
    title: "3D Printing",
    description: "High-resolution metal printing using advanced SLM technology.",
  },
  {
    icon: Package,
    title: "Post-Processing",
    description: "Professional finishing, polishing, and quality assurance.",
  },
]

export function Process() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-label="Our Process">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-medium tracking-[0.2em] text-[#9ca3af] uppercase">
            A Streamlined Digital Workflow
          </p>
          <h2 className="font-[family-name:var(--font-heading)] mt-4 text-[clamp(1.75rem,4vw,2.5rem)] font-normal text-[#1a1a1a]">
            Our Process
          </h2>
        </div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center border border-[#e8e8e8] bg-white">
                <step.icon className="h-7 w-7 text-[#1a1a1a]" strokeWidth={1.5} />
              </div>
              <p className="mt-5 text-xs font-semibold tracking-[0.2em] text-[#9ca3af]">
                STEP {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2 text-base font-medium text-[#1a1a1a]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#9ca3af]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
