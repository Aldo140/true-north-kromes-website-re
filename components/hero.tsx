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
        <div className="absolute inset-0 bg-[rgba(20,20,20,0.65)]" />
      </div>

      {/* Content */}
      <div
        ref={ref}
        className={`relative mx-auto flex max-w-7xl flex-col justify-center px-4 py-24 lg:px-8 lg:py-36 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h1 className="max-w-3xl font-serif text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[1.1] text-white text-balance">
          One-Stop Metal Printing Service
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 lg:text-lg">
          Experience a fully integrated digital 3D-printing solution that transforms the way
          dental professionals design and manufacture partial dentures. High precision, high
          efficiency, and significant cost savings.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded bg-[#1e6fff] px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#1a5fd9]"
          >
            Email or Call Us Today
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center rounded border border-white/50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Our Services
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-white/60">
          <a href="mailto:truenorthkromes@gmail.com" className="transition-colors hover:text-white/90">
            truenorthkromes@gmail.com
          </a>
          <a href="tel:+18076247222" className="transition-colors hover:text-white/90">
            807-624-7222
          </a>
        </div>
      </div>

      {/* Chrome gradient shimmer at bottom */}
      <div className="chrome-band absolute bottom-0 left-0 right-0" />
    </section>
  )
}
