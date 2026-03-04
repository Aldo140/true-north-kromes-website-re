import Link from "next/link"

export function CTABanner() {
  return (
    <section
      className="relative py-20 lg:py-28"
      aria-label="Call to action"
    >
      <div className="absolute inset-0">
        <img
          src="/images/gallery-raw-print-batch.jpg"
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#1c1f26]/80" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3.5vw,2.5rem)] font-normal text-white text-balance">
          [Placeholder Heading]
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/75">
          [Placeholder description -- client to supply CTA copy.]
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center border border-white bg-white px-10 py-3 text-sm tracking-wider text-foreground transition-colors hover:bg-transparent hover:text-white"
          >
            Get Started
          </Link>
          <a
            href="tel:+18076247222"
            className="inline-flex items-center border border-white/50 px-10 py-3 text-sm tracking-wider text-white transition-colors hover:bg-white hover:text-foreground"
          >
            Call 807.624.7222
          </a>
        </div>
      </div>
    </section>
  )
}
