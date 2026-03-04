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
      <div className="mx-auto max-w-5xl px-5">
        <h1 className="font-[family-name:var(--font-heading)] text-center text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal text-foreground">
          Blog
        </h1>
        <p className="mt-2 text-center text-base text-muted-foreground">
          [Placeholder -- Blog subtitle goes here]
        </p>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="group border border-border">
              <Link href={`/blog/${post.slug}`}>
                <div className="aspect-[16/10] w-full bg-muted">
                  <img
                    src={`/placeholder.svg?height=280&width=450`}
                    alt="[Placeholder]"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs tracking-widest text-muted-foreground/60 uppercase">
                    {post.date}
                  </p>
                  <h2 className="mt-2 font-sans text-lg font-semibold text-foreground group-hover:text-[#8a9aab] transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-block text-sm font-medium text-[#8a9aab] tracking-wide">
                    Read More
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
