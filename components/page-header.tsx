"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface PageHeaderProps {
  title: string
  subtitle?: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="border-b border-border bg-secondary py-14 lg:py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-5 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-black leading-tight text-foreground text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
