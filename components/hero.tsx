import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[520px] lg:min-h-[600px]" aria-label="Hero">
      {/* Background image with side margins like client */}
      <div className="absolute inset-x-4 inset-y-0 lg:inset-x-12">
        <img
          src="/images/printer-buildplate.jpg"
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-4xl flex-col items-center justify-center px-5 pt-44 pb-24 text-center lg:pt-56 lg:pb-32">
        <h1 className="font-[family-name:var(--font-heading)] text-[clamp(2.25rem,5.5vw,4rem)] font-normal leading-[1.1] text-white text-balance">
          Welcome to True North Kromes
        </h1>
        <p className="mt-6 max-w-2xl text-[clamp(0.9rem,1.5vw,1.15rem)] font-light tracking-wider text-white/80">
          A Dental Lab Specializing in 3D Printing Metal Partial Denture Frameworks
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center border border-white bg-white px-10 py-3 text-sm tracking-wider text-foreground transition-colors hover:bg-transparent hover:text-white"
          >
            Contact Us
          </Link>
        </div>
        <ChevronDown className="mt-8 h-6 w-6 text-white/60" aria-hidden="true" />
      </div>
    </section>
  )
}
