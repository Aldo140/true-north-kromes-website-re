"use client"

import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const articles = [
  {
    title: "[PLACEHOLDER ARTICLE TITLE]",
    date: "[PLACEHOLDER DATE]",
    excerpt: "[PLACEHOLDER EXCERPT]",
  },
  {
    title: "[PLACEHOLDER ARTICLE TITLE]",
    date: "[PLACEHOLDER DATE]",
    excerpt: "[PLACEHOLDER EXCERPT]",
  },
  {
    title: "[PLACEHOLDER ARTICLE TITLE]",
    date: "[PLACEHOLDER DATE]",
    excerpt: "[PLACEHOLDER EXCERPT]",
  },
]

export function LatestUpdates() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-background py-20 lg:py-28" aria-label="Latest Updates">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-5 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            News
          </p>
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-tight text-foreground text-balance">
            Latest Updates
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-card p-6 shadow-sm"
            >
              <h4 className="text-base font-bold text-foreground">
                <a href="#" className="transition-colors hover:text-primary">
                  {article.title}
                </a>
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">{article.date}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {article.excerpt}
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary transition-colors hover:text-[#2e6aa3]"
              >
                Read More
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
