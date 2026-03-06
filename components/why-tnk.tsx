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
    <section className="bg-white py-20 lg:py-28" aria-label="Why Choose TNK">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,4vw,2.5rem)] font-normal text-[#1a1a1a]">
            Why Choose True North Kromes?
          </h2>
          <p className="mt-3 text-base text-[#6b7280]">
            Our Services Can Help With
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white p-8"
            >
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-normal text-[#1a1a1a]">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6b7280]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
