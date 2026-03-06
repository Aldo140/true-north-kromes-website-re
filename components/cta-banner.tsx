import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTABanner() {
  return (
    <section
      className="relative bg-[#fafafa] py-24 lg:py-32"
      aria-label="Call to action"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a1a1aa]">
              Get Started
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.02em] text-[#1a1a1a]">
              Ready to streamline your workflow?
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#71717a]">
              Email or call us today to get started with TNK.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-b border-[#1a1a1a] pb-1 text-sm font-medium tracking-wide text-[#1a1a1a] transition-all hover:border-[#71717a] hover:text-[#71717a]"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
            <span className="hidden text-[#d4d4d8] sm:inline">|</span>
            <a
              href="tel:+18076247222"
              className="text-sm tracking-wide text-[#71717a] transition-colors hover:text-[#1a1a1a]"
            >
              807.624.7222
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
