import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTABanner() {
  return (
    <section
      className="relative bg-white py-32 lg:py-48"
      aria-label="Call to action"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left - Main CTA */}
          <div className="max-w-lg">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a1a1aa]">
              Next Steps
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-[#1a1a1a]">
              Ready to streamline your workflow?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#71717a]">
              Email or call us today to get started with TNK.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-b border-[#1a1a1a] pb-1 text-sm font-medium tracking-wide text-[#1a1a1a] transition-all hover:border-[#71717a] hover:text-[#71717a]"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right - Contact info */}
          <div className="space-y-8 lg:border-l lg:border-[#e5e5e5] lg:pl-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a1a1aa]">
                Phone
              </p>
              <a
                href="tel:+18076247222"
                className="mt-2 block text-xl font-medium text-[#1a1a1a] hover:text-[#71717a] transition-colors"
              >
                807.624.7222
              </a>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a1a1aa]">
                Email
              </p>
              <a
                href="mailto:truenorthkromes@gmail.com"
                className="mt-2 block text-sm text-[#71717a] hover:text-[#1a1a1a] transition-colors break-all"
              >
                truenorthkromes@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
