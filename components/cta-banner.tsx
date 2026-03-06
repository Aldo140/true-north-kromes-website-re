import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTABanner() {
  return (
    <section
      className="relative py-16 lg:py-24"
      aria-label="Call to action"
    >
      <div className="absolute inset-0">
        <img
          src="/images/gallery-raw-print-batch.jpg"
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#1a1a1a]/80" />
      </div>

      {/* Left-aligned with asymmetric two-column -- Fix #1, varied spacing -- Fix #2 */}
      <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-8 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        <div className="max-w-lg">
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3.5vw,2.5rem)] font-normal text-white text-balance">
            [Placeholder Heading]
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/65">
            [Placeholder description -- client to supply CTA copy.]
          </p>
        </div>
        {/* Different button styles side by side -- Fix #3 */}
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-white px-8 py-3 text-sm font-medium tracking-wider text-foreground transition-opacity hover:opacity-90"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="tel:+18076247222"
            className="inline-flex items-center px-8 py-3 text-sm tracking-wider text-white/80 underline underline-offset-4 decoration-white/30 transition-colors hover:text-white hover:decoration-white/60"
          >
            807.624.7222
          </a>
        </div>
      </div>
    </section>
  )
}
