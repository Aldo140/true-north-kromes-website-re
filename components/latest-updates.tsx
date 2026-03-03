"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const articles = [
  {
    title: "[PLACEHOLDER ARTICLE TITLE]",
    date: "[PLACEHOLDER DATE]",
    excerpt: "[PLACEHOLDER EXCERPT]",
    href: "#",
  },
  {
    title: "[PLACEHOLDER ARTICLE TITLE]",
    date: "[PLACEHOLDER DATE]",
    excerpt: "[PLACEHOLDER EXCERPT]",
    href: "#",
  },
  {
    title: "[PLACEHOLDER ARTICLE TITLE]",
    date: "[PLACEHOLDER DATE]",
    excerpt: "[PLACEHOLDER EXCERPT]",
    href: "#",
  },
]

export function LatestUpdates() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-background py-20 lg:py-28" aria-label="Latest News">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-5 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h2 className="mb-10 text-center text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-tight text-foreground text-balance">
          Latest News
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article, index) => (
            <div
              key={index}
              className="border-t-2 border-primary pt-6"
            >
              <h4 className="text-base font-bold text-foreground">
                <a href={article.href} className="transition-colors hover:text-primary">
                  {article.title}
                </a>
              </h4>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {article.date}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {article.excerpt}
              </p>
              <a
                href={article.href}
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary transition-colors hover:text-accent"
              >
                Read More
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-12 text-center">
          <Link
            href="/updates"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            View All Updates
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
