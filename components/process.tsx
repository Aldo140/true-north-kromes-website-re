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
    <section className="bg-white py-20 lg:py-28" aria-label="Our Process">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <h2 className="font-sans text-[clamp(1.75rem,3vw,2.5rem)] font-medium text-[#1a1a1a]">
          How It Works
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title}>
              <span className="text-sm text-[#a1a1aa]">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 font-medium text-[#1a1a1a]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#71717a]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
