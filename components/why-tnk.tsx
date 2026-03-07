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
    <section className="bg-white py-28 lg:py-40" aria-label="Why Choose TNK">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        {/* Asymmetric grid - editorial layout */}
        <div className="grid gap-20 lg:grid-cols-3 lg:gap-32">
          {/* Left column - larger items */}
          <div className="lg:col-span-2 space-y-28">
            {reasons.slice(0, 2).map((reason, index) => (
              <div key={reason.title} className="pb-24 border-b border-[#e5e5e5] last:border-b-0">
                <div className="flex gap-12">
                  <span className="text-4xl font-light text-[#d4d4d8] leading-none pt-1 shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-2xl font-medium text-[#1a1a1a]">
                      {reason.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-[#71717a]">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right column - smaller items in stacked grid */}
          <div className="lg:col-span-1 space-y-20">
            {reasons.slice(2).map((reason, index) => (
              <div key={reason.title}>
                <span className="text-2xl font-light text-[#d4d4d8]">
                  {String(index + 3).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-heading)] text-lg font-medium text-[#1a1a1a]">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#71717a]">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
