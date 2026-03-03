"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function TaglineStrip() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-primary py-10 lg:py-14" aria-label="Tagline">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl px-5 text-center ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <p className="text-base tracking-wide text-chrome-light lg:text-lg">
          {"TNK provides "}
          <strong className="text-white">complete support</strong>
          {" throughout the "}
          <strong className="text-white">entire production cycle</strong>
          {"."}
        </p>
      </div>
    </section>
  )
}
