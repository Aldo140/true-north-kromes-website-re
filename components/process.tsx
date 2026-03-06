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
    <section className="bg-white py-24 lg:py-32" aria-label="Our Process">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        {/* Header - left aligned */}
        <div className="mb-16 max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a1a1aa]">
            How It Works
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.02em] text-[#1a1a1a]">
            Our Process
          </h2>
        </div>

        <div className="grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="group">
              <div className="flex h-12 w-12 items-center justify-center">
                <step.icon className="h-6 w-6 text-[#1a1a1a]" strokeWidth={1.5} />
              </div>
              <span className="mt-4 block text-xs font-medium text-[#d4d4d8]">
                0{index + 1}
              </span>
              <h3 className="mt-2 text-lg font-medium text-[#1a1a1a]">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#71717a]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
