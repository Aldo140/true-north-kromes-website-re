import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTABanner() {
  return (
    <section className="dark-chrome py-16 lg:py-20" aria-label="Get Started">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-tight text-white">
          Get Started
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75">
          Ready to modernize your partial denture workflow? Reach out to discuss your
          needs and we will get you set up.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-chrome-light"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="tel:+18076247222"
            className="inline-flex items-center rounded-md border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-white/60 hover:bg-white/10"
          >
            Call (807) 624-7222
          </a>
        </div>
      </div>
    </section>
  )
}
