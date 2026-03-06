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
    <section className="bg-white" aria-label="Why Choose TNK">
      <div className="mx-auto max-w-5xl px-5 pt-20 pb-8 lg:pt-28 lg:pb-12 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3vw,2.5rem)] font-normal text-foreground">
          Why Choose True North Kromes?
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Our Services Can Help With
        </p>
      </div>

      {/* Lab background with asymmetric card grid -- Fix #5 */}
      <div className="relative min-h-[500px] pb-20 lg:pb-28">
        <div className="absolute inset-0">
          <img
            src="/images/gallery-lab-wide.jpg"
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative mx-auto max-w-5xl px-5 pt-8 lg:pt-16">
          <div className="bg-white/95 backdrop-blur-sm">
            {/* 2-column top row, full-width bottom -- Fix #5 breaks grid symmetry */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {reasons.slice(0, 4).map((reason) => (
                <div
                  key={reason.title}
                  className="border border-border/40 p-7 lg:p-9"
                >
                  <h3 className="font-[family-name:var(--font-heading)] text-lg text-foreground">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {reasons.slice(4).map((reason) => (
                <div
                  key={reason.title}
                  className="border border-border/40 p-7 lg:p-9"
                >
                  <h3 className="font-[family-name:var(--font-heading)] text-lg text-foreground">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
