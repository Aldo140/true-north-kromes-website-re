"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface PageHeaderProps {
  title: string
  subtitle?: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="relative bg-[#18181b] py-20 lg:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 text-center lg:px-8 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h1 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-tight text-white text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/60 lg:text-lg">
            {subtitle}
          </p>
        )}
      </div>
      <div className="chrome-band absolute bottom-0 left-0 right-0" />
    </section>
  )
}
