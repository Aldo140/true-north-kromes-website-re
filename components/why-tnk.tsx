const reasons = [
  {
    title: "Custom Metal Frameworks",
    description: "We specialize in crafting custom metal frameworks for dental prosthetics.",
  },
  {
    title: "Precision 3D Printing",
    description: "Utilizing advanced 3D printing technology to ensure precision and quality.",
  },
  {
    title: "Durable Solutions",
    description: "Offering durable and long-lasting metal framework solutions for dental restorations.",
  },
  {
    title: "Client-Centric Approach",
    description: "We prioritize the unique needs and preferences of each client for tailored solutions.",
  },
  {
    title: "Collaborative Expertise",
    description: "Our team combines expertise in denturism and lab technology for exceptional outcomes.",
  },
  {
    title: "Quality Assurance",
    description: "Committed to upholding the highest standards of quality and precision in our work utilizing industry leading materials.",
  },
]

export function WhyTNK() {
  return (
    <section className="bg-[#fafafa] py-20 lg:py-28" aria-label="Why Choose TNK">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <h2 className="font-sans text-[clamp(1.75rem,3vw,2.5rem)] font-medium text-[#1a1a1a]">
          Why Choose Us
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="border-t border-[#e5e5e5] pt-6">
              <h3 className="font-medium text-[#1a1a1a]">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#71717a]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
