import type { Metadata } from "next"
import Link from "next/link"
import { Reveal } from "@/components/motion-primitives"
import { MachinedLines } from "@/components/experience"
import { sitePath } from "@/lib/site-path"

export const metadata: Metadata = {
  title: "Dental 3D Printing News & Guides",
  description: "True North Kromes articles on SLM-printed partial denture frameworks, digital dental workflows, Co-Cr materials, and lab production in Canada.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Dental 3D Printing News & Guides | True North Kromes",
    description: "Practical guides and news about digital partial frameworks, SLM metal printing, plasma polishing, and the TNK workflow.",
    url: "/blog",
    type: "website",
  },
}

const posts = [
  {
    slug: "our-digital-workflow",
    title: "Our Digital Workflow",
    excerpt: "From scan to shipped framework: how a case moves through design, WhatsApp approval, and a strict 4-day production line — and why we skip the analog steps entirely.",
    date: "Off the build plate",
    image: null,
  },
  {
    slug: "denturism-canada-feature",
    title: "Featured in Denturism Canada: Reimagining Partial Dentures",
    excerpt: "True North Kromes is featured in the Spring 2026 issue of Denturism Canada. Read \"From Analog Frustration to Digital Precision\" by Luke LaRocque-Walker, DD.",
    date: "Spring 2026",
    image: sitePath("/images/opt/blog-denturism-cover.jpg"),
  },
  {
    slug: "benefits-of-3d-printed-frameworks",
    title: "Benefits of 3D Printed Partial Denture Frameworks",
    excerpt: "Discover how SLM technology delivers more accurate, consistent, and customized frameworks compared to traditional casting methods.",
    date: "Frameworks · SLM",
    image: sitePath("/images/benefits-framework.png"),
  },
  {
    slug: "digital-workflow-guide",
    title: "Your New Portal",
    excerpt: "Explore our easy-to-use client portal for submitting cases, managing orders, and keeping your digital workflow moving.",
    date: "Client portal",
    image: sitePath("/images/portal-login.svg"),
  },
]

export default function BlogPage() {
  return (
    <section className="bg-paper pb-16 pt-[4.5rem] md:pt-40 lg:pb-28 lg:pt-48">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
        <header className="-mx-5 bg-ink px-5 pb-11 pt-10 sm:-mx-6 sm:px-6 md:mx-0 md:bg-transparent md:p-0">
          <Reveal y={10}>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold-dim md:text-[11px]">
              OFF THE BUILD PLATE
            </p>
          </Reveal>
          <MachinedLines
            as="h1"
            lines={["News and insights", "from True North Kromes"]}
            delay={0.08}
            className="mt-4 max-w-3xl text-balance font-sans text-[clamp(2.15rem,10vw,2.75rem)] font-medium leading-[1.06] tracking-[-0.03em] text-paper md:text-[clamp(1.75rem,3.5vw,2.75rem)] md:leading-[normal] md:tracking-[-0.02em] md:text-ink"
          />
          <div className="mt-8 flex items-center gap-3 md:hidden" aria-hidden="true">
            <span className="h-px w-12 bg-gold" />
            <span className="h-px flex-1 bg-white/15" />
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-paper/45">TNK / Record</span>
          </div>
        </header>

        {/* Ruled editorial rows */}
        <div className="border-b border-line-dark md:mt-14 lg:mt-20">
          {posts.map((post, index) => {
            const published = true
            return (
              <Reveal key={post.slug} delay={index * 0.08} amount={0.2}>
                <article className="relative border-t border-line-dark first:border-t-0 md:first:border-t">
                  <Link
                    href={`/blog/${post.slug}`}
                    aria-label={`Read ${post.title}`}
                    className="group grid gap-0 py-9 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:bg-ink/[0.025] motion-reduce:transition-none sm:py-10 md:grid-cols-12 md:gap-8 md:hover:translate-x-1.5 md:motion-reduce:hover:translate-x-0"
                  >
                    {/* Mono date / status */}
                    <div className="order-1 flex min-h-11 items-start justify-between gap-4 md:col-span-3 md:block md:min-h-0">
                      <p
                        className={`font-mono text-[10px] uppercase tracking-[0.18em] md:text-[11px] ${
                          published ? "text-ink/60" : "text-ink/40"
                        }`}
                      >
                        {published ? post.date : "IN PREPARATION"}
                      </p>
                      <span className="font-mono text-[10px] tabular-nums tracking-[0.14em] text-ink/35 md:hidden" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")} / {String(posts.length).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title + excerpt */}
                    <div className={`${post.image ? "order-3 mt-6 md:col-span-6" : "order-2 md:col-span-9"} md:order-none md:mt-0`}>
                      {!post.image && (
                        <div className="mb-7 grid grid-cols-4 border-y border-line-dark py-3 md:hidden" aria-hidden="true">
                          {["Scan", "Approve", "Print", "Ship"].map((stage, stageIndex) => (
                            <span key={stage} className="relative text-center font-mono text-[8px] uppercase tracking-[0.12em] text-ink/55">
                              {stageIndex > 0 && <span className="absolute -left-px top-1/2 h-3 w-px -translate-y-1/2 bg-line-dark" />}
                              {stage}
                            </span>
                          ))}
                        </div>
                      )}
                      <h2 className="text-balance font-sans text-[1.45rem] font-medium leading-[1.12] tracking-[-0.03em] text-ink transition-colors group-hover:text-gold-dim sm:text-2xl md:leading-8 md:tracking-[-0.02em]">
                        {post.title}
                      </h2>
                      <p className="mt-4 max-w-xl text-base leading-[1.65] text-ink/72 md:mt-3 md:text-sm md:leading-relaxed md:text-ink/70">
                        {post.excerpt}
                      </p>
                      <span className="mt-6 inline-flex min-h-11 w-full items-center justify-between border-t border-line-dark font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55 transition-[gap,color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-gold-dim motion-reduce:transition-none md:mt-5 md:min-h-0 md:w-auto md:items-baseline md:justify-start md:gap-2 md:border-0 md:text-[11px] md:group-hover:gap-4 md:motion-reduce:group-hover:gap-2">
                        READ MORE <span aria-hidden="true">&rarr;</span>
                      </span>
                    </div>

                    {/* Thumbnail — only for posts that have one */}
                    {post.image && (
                      <div className="relative order-2 mt-1 border-t-2 border-gold-dim pt-1 md:order-none md:col-span-3 md:mt-0 md:border-0 md:pt-0">
                        <img
                          src={post.image}
                          alt={`${post.title} thumbnail`}
                          width={540}
                          height={704}
                          loading="lazy"
                          className="aspect-[16/10] w-full border border-line-dark object-cover md:aspect-[540/704] md:max-w-[200px]"
                        />
                        <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center bg-ink font-mono text-[9px] text-paper md:hidden" aria-hidden="true">
                          {String(index + 1).padStart(2, "0")}
                        </span>
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
