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
        <div className="absolute inset-0 bg-[rgba(35,75,120,0.78)]" />
      </div>

      {/* Content */}
      <div
        ref={ref}
        className={`relative mx-auto flex max-w-6xl flex-col justify-center px-5 py-20 lg:py-32 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h1 className="max-w-2xl text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.15] text-white text-balance">
          Welcome to True North Kromes
        </h1>
        <p className="mt-3 max-w-xl text-lg font-light leading-relaxed text-white/80">
          A fully integrated digital 3D-printing solution that transforms the way
          dental professionals design and manufacture partial dentures.
        </p>
        <p className="mt-2 text-base text-white/60">
          High precision, high efficiency, and significant cost savings.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded bg-primary px-7 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#2e6aa3]"
          >
            Email or Call Us Today
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center rounded border border-white/40 px-7 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Our Services
          </Link>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-6 text-sm text-white/50">
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
