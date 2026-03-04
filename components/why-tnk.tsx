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
    description:
      "Committed to upholding the highest standards of quality and precision in our work utilizing industry leading materials.",
  },
]

export function WhyTNK() {
  return (
    <section className="relative py-20 lg:py-28" aria-label="Why Choose TNK">
      {/* Forest background */}
      <div className="absolute inset-0">
        <img
          src="/images/forest-bg.jpg"
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-tight text-white">
            Why Choose True North Kromes?
          </h2>
          <p className="mt-2 text-base text-white/70">Our Services Can Help With</p>
          <div className="mx-auto mt-4 text-white/50" aria-hidden="true">&#8595;</div>
        </div>

        {/* Cards panel */}
        <div className="rounded bg-white/95 p-6 shadow-lg backdrop-blur-sm lg:p-10">
          <div className="grid gap-px border border-border sm:grid-cols-2 md:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="border border-border p-6 lg:p-8"
              >
                <h4 className="text-base font-semibold text-foreground">
                  {reason.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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
