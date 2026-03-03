"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface PageHeaderProps {
  title: string
  subtitle?: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="border-b border-border bg-secondary pt-28 pb-14 lg:pt-32 lg:pb-20">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-5 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="mb-4 h-[3px] w-10 rounded-full bg-primary" />
        <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-tight text-foreground text-balance">
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
