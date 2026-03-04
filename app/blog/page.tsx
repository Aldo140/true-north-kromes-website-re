import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest news and insights from True North Kromes.",
}

const posts = [
  {
    slug: "post-1",
    title: "[Placeholder Blog Title]",
    excerpt: "[Placeholder -- short summary of the blog post goes here. Client to supply before launch.]",
    date: "[Placeholder Date]",
  },
  {
    slug: "post-2",
    title: "[Placeholder Blog Title]",
    excerpt: "[Placeholder -- short summary of the blog post goes here. Client to supply before launch.]",
    date: "[Placeholder Date]",
  },
  {
    slug: "post-3",
    title: "[Placeholder Blog Title]",
    excerpt: "[Placeholder -- short summary of the blog post goes here. Client to supply before launch.]",
    date: "[Placeholder Date]",
  },
  {
    slug: "post-4",
    title: "[Placeholder Blog Title]",
    excerpt: "[Placeholder -- short summary of the blog post goes here. Client to supply before launch.]",
    date: "[Placeholder Date]",
  },
  {
    slug: "post-5",
    title: "[Placeholder Blog Title]",
    excerpt: "[Placeholder -- short summary of the blog post goes here. Client to supply before launch.]",
    date: "[Placeholder Date]",
  },
  {
    slug: "post-6",
    title: "[Placeholder Blog Title]",
    excerpt: "[Placeholder -- short summary of the blog post goes here. Client to supply before launch.]",
    date: "[Placeholder Date]",
  },
]

export default function BlogPage() {
  return (
    <section className="bg-white pt-44 pb-20 lg:pt-52 lg:pb-28">
      <div className="mx-auto max-w-5xl px-8 lg:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground/60">
          Insights
        </p>
        <h1 className="mt-3 font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] text-foreground">
          Blog
        </h1>

        <div className="mt-14 grid gap-y-12 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`}>
                <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
                  <img
                    src="/placeholder.svg?height=280&width=450"
                    alt="[Placeholder]"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground/50">
                    {post.date}
                  </p>
                  <h2 className="mt-2 text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
