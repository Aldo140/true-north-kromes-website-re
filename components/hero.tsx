import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-[#f5f5f0]" aria-label="Hero">
      {/* Large typography hero - inspired by premium brands */}
      <div className="mx-auto max-w-6xl px-6 pt-32 pb-20 lg:px-8 lg:pt-44 lg:pb-32">
        <div className="text-center">
          <p className="text-xs font-medium tracking-[0.3em] text-[#6b6b6b] uppercase">
            Precision Dental Frameworks
          </p>
          <h1 className="font-[family-name:var(--font-heading)] mt-8 text-[clamp(2.5rem,8vw,5.5rem)] font-normal leading-[0.95] tracking-tight text-[#1a1a1a]">
            <span className="block">Precision meets</span>
            <span className="block italic">craftsmanship</span>
          </h1>
          <p className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-[#6b6b6b]">
            A fully integrated digital 3D-printing solution that transforms the way dental professionals design and manufacture partial dentures.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-[#1a1a1a] px-8 py-4 text-sm font-medium tracking-wider text-[#f5f5f0] transition-all hover:bg-[#3a3a3a]"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-wider text-[#1a1a1a] underline underline-offset-4 decoration-[#d4d4cc] transition-colors hover:decoration-[#1a1a1a]"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* Featured image below */}
      <div className="mx-auto max-w-5xl px-6 pb-20 lg:px-8">
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src="/images/gallery-two-frameworks.jpg"
            alt="Precision 3D printed dental frameworks"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
