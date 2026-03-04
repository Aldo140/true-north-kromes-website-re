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
    description:
      "Our team combines expertise in denturism and lab technology for exceptional outcomes.",
  },
  {
    title: "Quality Assurance",
    description:
      "Committed to upholding the highest standards of quality and precision in our work utilizing industry leading materials.",
  },
]

export function WhyTNK() {
  return (
    <section className="relative" aria-label="Why Choose TNK">
      {/* Background image -- bleeds full width */}
      <div className="absolute inset-0">
        <img
          src="/images/gallery-lab-wide.jpg"
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#1c1f26]/85" />
      </div>

      <div className="relative mx-auto max-w-6xl px-8 py-24 lg:px-16 lg:py-32">
        {/* Header -- left aligned, not centered */}
        <div className="max-w-lg">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">
            Why work with us
          </p>
          <h2 className="mt-3 font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-white">
            Built different, on purpose
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/50">
            We focus on one thing only -- partial denture frameworks. That focus is what makes the difference.
          </p>
        </div>

        {/* Asymmetric layout -- 2 cols on left, 1 larger on right */}
        <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-3">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`bg-[#1c1f26]/90 p-8 lg:p-10 ${
                i === 0 ? "md:col-span-2 md:row-span-1" : ""
              }`}
            >
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[17px] font-medium text-white">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
