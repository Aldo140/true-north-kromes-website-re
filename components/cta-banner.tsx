import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTABanner() {
  return (
    <section
      className="relative border-y border-border bg-[#f8f9fa] py-20 lg:py-28"
      aria-label="Call to action"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-8 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        <div className="max-w-lg">
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3.5vw,2.25rem)] font-normal text-[#1a1a1a] text-balance">
            Ready to streamline your lab workflow?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#6b7280]">
            Email or call us today to get started with TNK.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 border border-[#1a1a1a] bg-[#1a1a1a] px-8 py-3 text-sm font-medium tracking-wider text-white transition-all hover:bg-transparent hover:text-[#1a1a1a]"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="tel:+18076247222"
            className="inline-flex items-center px-8 py-3 text-sm tracking-wider text-[#6b7280] underline underline-offset-4 decoration-border transition-colors hover:text-[#1a1a1a] hover:decoration-[#1a1a1a]"
          >
            807.624.7222
          </a>
        </div>
      </div>
    </section>
  )
}
