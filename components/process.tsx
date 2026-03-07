import { Upload, PenTool, Printer, Package } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "Send Your Case",
    description: "Upload your digital files or ship physical impressions to our lab.",
  },
  {
    icon: PenTool,
    title: "Design & Print",
    description: "We design and 3D print your framework using advanced metal printing technology.",
  },
  {
    icon: Printer,
    title: "Polish & Finish",
    description: "Each framework is polished using our DLyte electropolishing system.",
  },
  {
    icon: Package,
    title: "Deliver",
    description: "Your finished framework is shipped back, ready for final prosthetic work.",
  },
]

export function Process() {
  return (
    <section className="bg-[#fafafa] py-28 lg:py-40" aria-label="Our Process">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        {/* Full-width header with integrated layout */}
        <div className="mb-20 flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12">
          <div className="lg:max-w-md">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a1a1aa]">
              Our Workflow
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.02em] text-[#1a1a1a]">
              How It Works
            </h2>
          </div>
          <p className="lg:max-w-md text-[15px] leading-relaxed text-[#71717a]">
            Our streamlined 4-step process ensures precision and quality at every stage, from initial design through final delivery.
          </p>
        </div>

        {/* Process timeline - asymmetric layout */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`flex gap-8 lg:gap-16 pb-12 lg:pb-16 border-b border-[#e5e5e5] last:border-b-0 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Number and icon */}
              <div className="shrink-0 flex flex-col items-center gap-4">
                <span className="text-3xl font-light text-[#d4d4d8] leading-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <step.icon className="h-5 w-5 text-[#1a1a1a]" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-medium text-[#1a1a1a]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#71717a] max-w-md">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
