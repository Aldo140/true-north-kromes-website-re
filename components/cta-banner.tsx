import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTABanner() {
  return (
    <section
      className="relative bg-white py-28 lg:py-36"
      aria-label="Call to action"
    >
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <p className="text-xs font-medium tracking-[0.3em] text-[#6b6b6b] uppercase">
          Let&apos;s Work Together
        </p>
        <h2 className="font-[family-name:var(--font-heading)] mt-6 text-[clamp(2rem,5vw,4rem)] font-normal leading-[1.1] text-[#1a1a1a]">
          Ready to streamline<br />
          <span className="italic">your workflow?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-[#6b6b6b]">
          Join dental practices across Canada who trust TNK for precise, 
          consistent frameworks delivered on time.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-[#1a1a1a] px-8 py-4 text-sm font-medium tracking-wider text-[#f5f5f0] transition-all hover:bg-[#3a3a3a]"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="tel:+18076247222"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wider text-[#1a1a1a] underline underline-offset-4 decoration-[#d4d4cc] transition-colors hover:decoration-[#1a1a1a]"
          >
            807.624.7222
          </a>
        </div>
      </div>
    </section>
  )
}
