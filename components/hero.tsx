"use client"

import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Hero() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px]" aria-label="Hero">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[rgba(24,24,27,0.7)]" />
      </div>

      {/* Content */}
      <div
        ref={ref}
        className={`relative mx-auto flex max-w-7xl flex-col justify-center px-4 py-24 lg:px-8 lg:py-36 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h1 className="max-w-3xl font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.1] text-white text-balance">
          One-Stop Metal Printing Service
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 lg:text-lg">
          Experience a fully integrated digital 3D-printing solution that transforms the way
          dental professionals design and manufacture partial dentures. High precision, high
          efficiency, and significant cost savings.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#18181b] transition-colors hover:bg-white/90"
          >
            Email or Call Us Today
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/5"
          >
            Our Services
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-white/50">
          <a href="mailto:truenorthkromes@gmail.com" className="transition-colors hover:text-white/80">
            truenorthkromes@gmail.com
          </a>
          <a href="tel:+18076247222" className="transition-colors hover:text-white/80">
            807-624-7222
          </a>
        </div>
      </div>
    </section>
  )
}
