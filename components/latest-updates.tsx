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
        className={`mx-auto max-w-7xl px-4 lg:px-8 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h2 className="mb-12 text-center font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-foreground text-balance">
          Latest Updates
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h4 className="text-base font-semibold text-foreground">
                <a href="#" className="transition-colors hover:text-muted-foreground">
                  {article.title}
                </a>
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">{article.date}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {article.excerpt}
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
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
