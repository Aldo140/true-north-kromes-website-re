import Link from "next/link"

export function CTABanner() {
  return (
    <section className="border-t border-border" aria-label="Call to action">
      <div className="mx-auto grid max-w-6xl md:grid-cols-2">
        {/* Image side */}
        <div className="aspect-[4/3] overflow-hidden md:aspect-auto">
          <img
            src="/images/gallery-raw-print-batch.jpg"
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Content side */}
        <div className="flex flex-col justify-center bg-[#1c1f26] px-8 py-16 lg:px-16 lg:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/30">
            Get started
          </p>
          <h2 className="mt-4 font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-white">
            [Placeholder Heading]
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/50">
            [Placeholder description -- client to supply CTA copy.]
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="bg-white px-7 py-3 text-center text-sm font-medium tracking-wide text-foreground transition-colors hover:bg-white/90"
            >
              Contact us
            </Link>
            <a
              href="tel:+18076247222"
              className="border-b border-white/30 pb-0.5 text-sm text-white/50 transition-colors hover:border-white hover:text-white"
            >
              or call 807.624.7222
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
