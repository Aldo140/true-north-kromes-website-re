const reasons = [
  {
    number: "01",
    title: "Custom Metal Frameworks",
    description: "We specialize in crafting custom metal frameworks for dental prosthetics with meticulous attention to detail.",
  },
  {
    number: "02",
    title: "Precision 3D Printing",
    description: "Utilizing advanced SLM 3D printing technology to ensure unmatched precision and consistent quality.",
  },
  {
    number: "03",
    title: "Durable Solutions",
    description: "Offering durable and long-lasting metal framework solutions for dental restorations that stand the test of time.",
  },
  {
    number: "04",
    title: "Client-Centric Approach",
    description: "We prioritize the unique needs and preferences of each client for tailored, personalized solutions.",
  },
  {
    number: "05",
    title: "Collaborative Expertise",
    description: "Our team combines expertise in denturism and lab technology for exceptional clinical outcomes.",
  },
  {
    number: "06",
    title: "Quality Assurance",
    description: "Committed to upholding the highest standards of quality utilizing industry-leading materials and processes.",
  },
]

export function WhyTNK() {
  return (
    <section className="bg-white py-28 lg:py-36" aria-label="Why Choose TNK">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.3em] text-[#6b6b6b] uppercase">
              Why Choose Us
            </p>
            <h2 className="font-[family-name:var(--font-heading)] mt-4 text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.1] text-[#1a1a1a]">
              Breakthrough technology<br />
              <span className="italic">for the highest standards</span>
            </h2>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#6b6b6b] lg:mt-0 lg:text-right">
            Combining precision engineering with artisan craftsmanship to deliver frameworks that exceed expectations.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 gap-px bg-[#d4d4cc] border border-[#d4d4cc] md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white p-8 lg:p-10"
            >
              <span className="font-[family-name:var(--font-heading)] text-4xl font-normal text-[#d4d4cc]">
                {reason.number}
              </span>
              <h3 className="mt-6 text-base font-medium text-[#1a1a1a]">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6b6b6b]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
