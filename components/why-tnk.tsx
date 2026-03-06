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
    <section className="bg-white py-24 lg:py-32" aria-label="Why Choose TNK">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        {/* Header - left aligned */}
        <div className="mb-16 max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a1a1aa]">
            Our Services
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.02em] text-[#1a1a1a]">
            Why Choose True North Kromes?
          </h2>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-16 md:gap-y-14 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group"
            >
              <span className="text-xs font-medium text-[#d4d4d8]">
                0{index + 1}
              </span>
              <h3 className="mt-3 font-[family-name:var(--font-heading)] text-xl font-medium text-[#1a1a1a]">
                {reason.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#71717a]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
