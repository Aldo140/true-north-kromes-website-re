import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTABanner() {
  return (
    <section
      className="relative border-y border-border bg-[#f4f6f8] py-20 lg:py-28"
      aria-label="Call to action"
    >
      {/* Left-aligned with asymmetric two-column */}
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-8 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        <div className="max-w-lg">
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3.5vw,2.5rem)] font-normal text-[#1a1d21] text-balance">
            Ready to streamline your lab workflow?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#5a6875]">
            Join dental practices across Canada who trust TNK for precise, 
            consistent frameworks delivered on time.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 border border-[#6b8fa3] bg-[#6b8fa3] px-8 py-3 text-sm font-medium tracking-wider text-white transition-all hover:bg-transparent hover:text-[#6b8fa3]"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="tel:+18076247222"
            className="inline-flex items-center px-8 py-3 text-sm tracking-wider text-[#5a6875] underline underline-offset-4 decoration-[#d8dee4] transition-colors hover:text-[#1a1d21] hover:decoration-[#1a1d21]"
          >
            807.624.7222
          </a>
        </div>
      </div>
    </section>
  )
}
