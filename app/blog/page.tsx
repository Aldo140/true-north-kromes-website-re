import type { Metadata } from "next"
import Link from "next/link"
import { Reveal } from "@/components/motion-primitives"
import { MachinedLines } from "@/components/experience"

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
    image: "/images/opt/blog-denturism-cover.jpg",
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
    <section className="bg-paper pt-40 pb-20 lg:pt-48 lg:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
        {/* Header — eyebrow → machined H1 lines */}
        <Reveal y={10}>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dim">
            JOURNAL
          </p>
        </Reveal>
        <MachinedLines
          as="h1"
          lines={["News and insights", "from True North Kromes"]}
          delay={0.08}
          className="mt-4 max-w-3xl text-balance font-sans text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium tracking-[-0.02em] text-ink"
        />

        {/* Ruled editorial rows */}
        <div className="mt-14 border-b border-line-dark lg:mt-20">
          {posts.map((post, index) => {
            const published = post.date !== "Coming Soon"
            return (
              <Reveal key={post.slug} delay={index * 0.08} amount={0.2}>
                <article className="border-t border-line-dark">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group grid gap-4 py-8 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-1.5 motion-reduce:transition-none motion-reduce:hover:translate-x-0 sm:py-10 md:grid-cols-12 md:gap-8"
                  >
                    {/* Mono date / status */}
                    <div className="md:col-span-3">
                      <p
                        className={`font-mono text-[11px] uppercase tracking-[0.18em] ${
                          published ? "text-ink/60" : "text-ink/40"
                        }`}
                      >
                        {published ? post.date : "IN PREPARATION"}
                      </p>
                    </div>

                    {/* Title + excerpt */}
                    <div className={post.image ? "md:col-span-6" : "md:col-span-9"}>
                      <h2 className="text-balance font-sans text-xl font-medium tracking-[-0.02em] text-ink transition-colors group-hover:text-gold-dim sm:text-2xl">
                        {post.title}
                      </h2>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/70">
                        {post.excerpt}
                      </p>
                      <span className="mt-5 inline-flex items-baseline gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50 transition-[gap,color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:gap-4 group-hover:text-gold-dim motion-reduce:transition-none motion-reduce:group-hover:gap-2">
                        READ <span aria-hidden="true">&rarr;</span>
                      </span>
                    </div>

                    {/* Thumbnail — only for posts that have one */}
                    {post.image && (
                      <div className="md:col-span-3">
                        <img
                          src={post.image}
                          alt="Denturism Canada Spring 2026 magazine cover"
                          width={540}
                          height={704}
                          loading="lazy"
                          className="aspect-[540/704] w-full max-w-[200px] border border-line-dark object-cover"
                        />
                      </div>
                    )}
                  </Link>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
