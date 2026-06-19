import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest news and insights from True North Kromes.",
}

const posts = [
  {
    slug: "denturism-canada-feature",
    title: "Featured in Denturism Canada: Reimagining Partial Dentures",
    excerpt: "True North Kromes is featured in the Spring 2026 issue of Denturism Canada. Read \"From Analog Frustration to Digital Precision\" by Luke LaRocque-Walker, DD.",
    date: "Spring 2026",
    image: "/images/denturism-canada-cover.jpg",
  },
  {
    slug: "benefits-of-3d-printed-frameworks",
    title: "Benefits of 3D Printed Partial Denture Frameworks",
    excerpt: "Discover how SLM technology delivers more accurate, consistent, and customized frameworks compared to traditional casting methods.",
    date: "Coming Soon",
    image: "",
  },
  {
    slug: "digital-workflow-guide",
    title: "A Guide to the Digital Denture Workflow",
    excerpt: "Learn how to streamline your lab processes and increase efficiency with a fully integrated digital 3D-printing solution.",
    date: "Coming Soon",
    image: "",
  },
  {
    slug: "comparison-traditional-vs-3d-printed",
    title: "Comparison of Traditional RPDs and 3D Printed Ones",
    excerpt: "Explore the key differences between hand-casted and 3D printed removable partial dentures, and why 3D printing is revolutionizing the industry.",
    date: "Coming Soon",
    image: "",
  },
]

export default function BlogPage() {
  return (
    <section className="bg-white pt-44 pb-20 lg:pt-52 lg:pb-28">
      <div className="mx-auto max-w-5xl px-5">
        <h1 className="font-sans text-center text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal text-foreground">
          Blog
        </h1>
        <p className="mt-2 text-center text-base text-muted-foreground">
          News and insights from True North Kromes
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`}>
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#f0f0f0] flex items-center justify-center border border-[#e5e5e5] mb-4">
                  {post.image ? (
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <p className="text-sm text-[#a1a1aa] px-4 text-center">{post.title}</p>
                  )}
                </div>
                <p className="text-xs text-[#a1a1aa] uppercase">
                  {post.date}
                </p>
                <h2 className="mt-3 font-sans text-lg font-medium text-[#1a1a1a]">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#71717a]">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-block text-sm text-[#1a1a1a] border-b border-[#1a1a1a] pb-0.5 hover:text-[#71717a] hover:border-[#71717a]">
                  Read More
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
