"use client"

import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Hero() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="relative min-h-[500px] lg:min-h-[580px]" aria-label="Hero">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/printer-buildplate.jpg"
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[rgba(16,48,80,0.82)]" />
      </div>

      {/* Content */}
      <div
        ref={ref}
        className={`relative mx-auto flex max-w-6xl flex-col justify-center px-5 pt-32 pb-24 lg:pt-40 lg:pb-36 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
          One-Stop Metal Printing Service
        </p>
        <h1 className="max-w-2xl text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] tracking-tight text-white text-balance">
          True North Kromes
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
          Experience a fully integrated digital 3D-printing solution that
          transforms the way dental professionals design and manufacture
          partial dentures. Our workflow delivers high precision, high
          efficiency, and significant cost savings.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-white px-7 py-3 text-sm font-semibold uppercase tracking-wider text-[#1a2332] transition-colors hover:bg-white/90"
          >
            Email or Call Us Today
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center rounded-md border border-white/30 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-white/60 hover:bg-white/10"
          >
            Our Services
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/45">
          <a href="mailto:truenorthkromes@gmail.com" className="transition-colors hover:text-white/75">
            truenorthkromes@gmail.com
          </a>
          <span className="hidden h-4 w-px bg-white/25 sm:block" aria-hidden="true" />
          <a href="tel:+18076247222" className="transition-colors hover:text-white/75">
            (807) 624-7222
          </a>
        </div>
      </div>
    </section>
  )
}
