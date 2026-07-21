import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ComparisonTable } from "@/components/comparison-table"
import { Reveal } from "@/components/motion-primitives"
import { MachinedLines } from "@/components/experience"
import { sitePath } from "@/lib/site-path"

const POST_SEO = {
  "denturism-canada-feature": {
    title: "True North Kromes Featured in Denturism Canada",
    description: "Read how digital scanning and 3D-printed Co-Cr partial frameworks are reshaping denturism in this Denturism Canada feature involving True North Kromes.",
    image: "/images/opt/blog-denturism-cover.jpg",
  },
  "benefits-of-3d-printed-frameworks": {
    title: "Benefits of 3D-Printed Partial Denture Frameworks",
    description: "Learn how SLM-printed Co-Cr partial denture frameworks improve repeatability, comfort, durability, surface finish, and digital workflow control.",
    image: "/images/benefits-framework.png",
  },
  "digital-workflow-guide": {
    title: "True North Kromes Digital Client Portal Guide",
    description: "Learn how dental labs submit scans, manage framework cases, and track orders through the True North Kromes digital client portal.",
    image: "/opengraph-image",
  },
  "our-digital-workflow": {
    title: "Digital Dental Workflow: Scan to Shipped Framework",
    description: "See how True North Kromes moves a case from digital scan and WhatsApp design approval to SLM printing, finishing, and shipping in four business days.",
    image: "/images/opt/framework-hero.jpg",
  },
} as const

const POST_NAV = [
  { slug: "our-digital-workflow", title: "Our Digital Workflow" },
  { slug: "denturism-canada-feature", title: "Reimagining Partial Dentures" },
  { slug: "benefits-of-3d-printed-frameworks", title: "Benefits of 3D Printed Frameworks" },
  { slug: "digital-workflow-guide", title: "Your New Portal" },
] as const

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = POST_SEO[slug as keyof typeof POST_SEO]
  if (!post) return { title: "Article", robots: { index: false, follow: false } }

  const path = `/blog/${slug}`
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: path },
    openGraph: {
      title: post.title,
      description: post.description,
      url: path,
      type: "article",
      images: [{ url: post.image, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  }
}

export function generateStaticParams() {
  return [
    { slug: "denturism-canada-feature" },
    { slug: "benefits-of-3d-printed-frameworks" },
    { slug: "digital-workflow-guide" },
    { slug: "our-digital-workflow" },
  ]
}

export const dynamicParams = false

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const postSeo = POST_SEO[slug as keyof typeof POST_SEO]
  const postIndex = POST_NAV.findIndex((post) => post.slug === slug)
  const previousPost = postIndex > 0 ? POST_NAV[postIndex - 1] : null
  const nextPost = postIndex < POST_NAV.length - 1 ? POST_NAV[postIndex + 1] : null

  // Headline pre-split into machined lines per post (same copy as before).
  const titleLines =
    slug === "denturism-canada-feature"
      ? ["Reimagining Partial Dentures:", "From Analog Frustration to Digital Precision"]
      : slug === "benefits-of-3d-printed-frameworks"
        ? ["Benefits of 3D Printed", "Partial Denture Frameworks"]
        : slug === "our-digital-workflow"
          ? ["Our Digital Workflow"]
          : ["Your New Portal"]

  const articleLabel =
    slug === "denturism-canada-feature"
      ? "Denturism Canada — Spring 2026"
      : slug === "benefits-of-3d-printed-frameworks"
        ? "Frameworks · SLM"
        : slug === "our-digital-workflow"
          ? "Off the build plate"
          : "Client portal"

  return (
    <article className="bg-paper pb-16 pt-[4.5rem] md:pt-40 lg:pb-28 lg:pt-48">
      {postSeo && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: postSeo.title,
              description: postSeo.description,
              image: `https://www.tnkromes.ca${postSeo.image}`,
              mainEntityOfPage: `https://www.tnkromes.ca/blog/${slug}`,
              author: { "@type": "Organization", "@id": "https://www.tnkromes.ca/#business", name: "True North Kromes" },
              publisher: { "@type": "Organization", "@id": "https://www.tnkromes.ca/#business", name: "True North Kromes" },
            }),
          }}
        />
      )}
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="-ml-3 inline-flex min-h-11 items-center gap-2 px-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/60 transition-colors hover:text-ink md:ml-0 md:min-h-0 md:px-0 md:text-[11px]"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Back to Blog
        </Link>

        {/* Meta + headline — eyebrow reveals, H1 lines follow */}
        <div className="mt-7 md:mt-10">
          <Reveal y={10}>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold-dim md:text-[11px]">
              {articleLabel}
            </p>
          </Reveal>
          <MachinedLines
            as="h1"
            lines={titleLines}
            delay={0.08}
            className="mt-4 text-balance font-sans text-[clamp(2rem,9vw,2.45rem)] font-medium leading-[1.06] tracking-[-0.035em] text-ink md:text-[clamp(1.75rem,3.5vw,2.5rem)] md:leading-tight md:tracking-[-0.02em]"
          />
        </div>

        {/* Hairline rule */}
        <div className="mb-0 mt-8 h-px bg-line-dark md:mb-10" aria-hidden="true" />

        <dl className="mb-9 grid grid-cols-2 border-b border-line-dark md:hidden">
          <div className="border-r border-line-dark py-4 pr-4">
            <dt className="font-mono text-[8px] uppercase tracking-[0.16em] text-ink/42">Published by</dt>
            <dd className="mt-1.5 text-[13px] font-medium text-ink">True North Kromes</dd>
          </div>
          <div className="py-4 pl-4">
            <dt className="font-mono text-[8px] uppercase tracking-[0.16em] text-ink/42">Production record</dt>
            <dd className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/72">
              {String(postIndex + 1).padStart(2, "0")} / {String(POST_NAV.length).padStart(2, "0")}
            </dd>
          </div>
        </dl>

        {/* Body */}
        {slug === "denturism-canada-feature" ? (
          <div className="space-y-10">
            <div className="space-y-6 text-[17px] leading-[1.75] text-ink/80 md:text-base md:leading-[1.8] md:text-ink/75">
              <p>
                We are proud to be featured in the Spring 2026 issue of{" "}
                <span className="font-medium text-ink">Denturism Canada</span> — The Journal of Canadian Denturism. The article, written by Luke LaRocque-Walker, DD, explores his journey from traditional analog partial dentures to a fully digital, 3D-printed workflow.
              </p>
              <p>
                From overcoming early challenges with intraoral scanning to producing metal-framed partial dentures with accuracy and fit that surpasses traditional casting, the piece highlights how digital technology is reshaping the profession — and the role True North Kromes plays in that transformation.
              </p>
            </div>

            <figure className="-mx-5 border-y border-line-dark sm:-mx-6 md:mx-0 md:border">
              <figcaption className="flex min-h-11 items-center justify-between border-b border-line-dark px-5 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/55 md:hidden">
                Publication cover <span className="text-gold-dim">Inspect full page ↗</span>
              </figcaption>
              <a href={sitePath("/images/opt/blog-denturism-cover.jpg")} target="_blank" rel="noopener noreferrer" aria-label="Open the Denturism Canada Spring 2026 cover at full size">
                <img
                  src={sitePath("/images/opt/blog-denturism-cover.jpg")}
                  alt="Denturism Canada Spring 2026 magazine cover"
                  width={540}
                  height={704}
                  className="w-full"
                  loading="lazy"
                />
              </a>
            </figure>

            <figure className="-mx-5 border-y border-line-dark sm:-mx-6 md:mx-0 md:border">
              <figcaption className="flex min-h-11 items-center justify-between border-b border-line-dark px-5 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/55 md:hidden">
                Article page 01 <span className="text-gold-dim">Inspect full page ↗</span>
              </figcaption>
              <a href={sitePath("/images/opt/blog-denturism-article-1.jpg")} target="_blank" rel="noopener noreferrer" aria-label="Open page one of Reimagining Partial Dentures at full size">
                <img
                  src={sitePath("/images/opt/blog-denturism-article-1.jpg")}
                  alt="Reimagining Partial Dentures article — page one"
                  width={539}
                  height={702}
                  className="w-full"
                  loading="lazy"
                />
              </a>
            </figure>

            <figure className="-mx-5 border-y border-line-dark sm:-mx-6 md:mx-0 md:border">
              <figcaption className="flex min-h-11 items-center justify-between border-b border-line-dark px-5 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/55 md:hidden">
                Article page 02 <span className="text-gold-dim">Inspect full page ↗</span>
              </figcaption>
              <a href={sitePath("/images/opt/blog-denturism-article-2.jpg")} target="_blank" rel="noopener noreferrer" aria-label="Open page two of Reimagining Partial Dentures at full size">
                <img
                  src={sitePath("/images/opt/blog-denturism-article-2.jpg")}
                  alt="Reimagining Partial Dentures article — page two with True North Kromes feature"
                  width={541}
                  height={668}
                  className="w-full"
                  loading="lazy"
                />
              </a>
            </figure>
          </div>
        ) : slug === "benefits-of-3d-printed-frameworks" ? (
          <div className="space-y-10">
            <div className="space-y-6 text-[17px] leading-[1.75] text-ink/80 md:text-base md:leading-[1.8] md:text-ink/75">
              <p>
                Selective laser melting gives dental labs a more controlled path from digital design to finished framework. The result is a lighter, more precise framework with consistent detail from case to case.
              </p>
              <p>
                The framework is designed directly from the approved scan, printed in Health-Canada-licensed Mediloy S Co-Cr, and plasma-polished in-house at True North Kromes.
              </p>
            </div>
            <figure className="-mx-5 overflow-hidden border-y border-line-dark bg-[#eaf6ff] sm:-mx-6 md:mx-0 md:border">
              <img
                src={sitePath("/images/benefits-framework.png")}
                alt="Benefits of 3D printed partial denture frameworks: lighter and thinner, greater comfort, durable and defect-free, healthier wear, and high aesthetics"
                width={1333}
                height={1173}
                className="h-auto w-full object-contain md:aspect-[16/9] md:object-cover"
                loading="lazy"
              />

            </figure>
            <div className="space-y-6 text-[17px] leading-[1.75] text-ink/80 md:text-base md:leading-[1.8] md:text-ink/75">
              <h2 className="font-sans text-[1.65rem] font-medium tracking-[-0.025em] text-ink md:text-2xl md:tracking-[-0.02em]">Printed vs. traditional</h2>
              <p>
                Compared with traditional casting, the digital workflow reduces variables, removes wax and burnout steps, and makes the production result easier to repeat. Here is the full comparison behind the benefits of printed frameworks.
              </p>
            </div>
            <div className="-mx-5 py-3 sm:-mx-6 md:mx-0 md:border-y md:border-line-dark md:py-8">
              <ComparisonTable />
            </div>
          </div>
        ) : slug === "our-digital-workflow" ? (
          <div className="space-y-10">
            <div className="space-y-6 text-[17px] leading-[1.75] text-ink/80 md:text-base md:leading-[1.8] md:text-ink/75">
              <p>
                Client scans are submitted either through email or directly
                from your scanner&apos;s integrated portal. Once received, all
                files are uploaded into our secure system and the design
                phase begins — typically within one business day.
              </p>
              <p>
                Upon completion, the digital framework design is sent to you
                over WhatsApp for review and approval. Nothing goes to print
                until you sign off. Following approval, the case moves
                immediately to 3D printing and finishing, and the finalized
                framework ships on the fourth business day after approval.
              </p>
              <p>
                All shipments go out with Purolator, with next-day delivery
                available for most regions — excluding certain maritime
                locations, where transit times may vary a little.
              </p>
            </div>
            <div className="space-y-6 text-[17px] leading-[1.75] text-ink/80 md:text-base md:leading-[1.8] md:text-ink/75">
              <h2 className="font-sans text-[1.65rem] font-medium tracking-[-0.025em] text-ink md:text-2xl md:tracking-[-0.02em]">
                Why digital, not analog
              </h2>
              <p>
                Traditional lab work duplicates a physical model from your
                impression, then hand-builds a wax pattern on top of it — an
                analog chain with several places for accuracy to drift.
                We skip that chain entirely: your framework is designed
                directly from your original digital scan and printed straight
                from that design, in Co-Cr, with no casting step in between.
              </p>
              <p>
                Where we do print physical models, we print them at an
                extremely fine layer resolution — smooth and stone-like to
                the touch, without the chipping and breakage that plaster
                stone models are prone to.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="space-y-6 text-[17px] leading-[1.75] text-ink/80 md:text-base md:leading-[1.8] md:text-ink/75">
              <p>
                Interested in trying our services and taking full advantage of our management software? Please send us a request or email us to let us know. Once your account has been set up, the video below will explain the many benefits of our easy-to-use platform.
              </p>
            </div>
            <div className="-mx-5 overflow-hidden border-y border-line-dark bg-ink sm:-mx-6 md:mx-0 md:border">
              <div className="aspect-video">
                <iframe
                  title="True North Kromes client portal walkthrough"
                  src="https://www.youtube.com/embed/r696RHKKdUg"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
            <a
              href="https://truenorthkromesclient.seazona.cloud/Login.aspx?ReturnUrl=%2f"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-between bg-ink px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-paper transition-colors hover:bg-gold hover:text-ink md:min-h-0 md:w-auto md:justify-start md:px-7 md:text-[11px]"
            >
              Access the Client Portal ↗
            </a>
          </div>
        )}

        <nav aria-label="More articles" className="mt-14 border-y border-line-dark md:hidden">
          <p className="flex min-h-11 items-center font-mono text-[9px] uppercase tracking-[0.16em] text-ink/45">Continue through the records</p>
          <div className="grid grid-cols-2 border-t border-line-dark">
            {previousPost ? (
              <Link href={`/blog/${previousPost.slug}`} className="flex min-h-24 flex-col justify-between border-r border-line-dark py-4 pr-4 active:bg-ink/[0.035]">
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-gold-dim">← Previous</span>
                <span className="mt-3 text-sm font-medium leading-snug text-ink">{previousPost.title}</span>
              </Link>
            ) : (
              <span className="border-r border-line-dark" aria-hidden="true" />
            )}
            {nextPost ? (
              <Link href={`/blog/${nextPost.slug}`} className="flex min-h-24 flex-col items-end justify-between py-4 pl-4 text-right active:bg-ink/[0.035]">
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-gold-dim">Next →</span>
                <span className="mt-3 text-sm font-medium leading-snug text-ink">{nextPost.title}</span>
              </Link>
            ) : (
              <Link href="/blog" className="flex min-h-24 flex-col items-end justify-between py-4 pl-4 text-right active:bg-ink/[0.035]">
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-gold-dim">Index →</span>
                <span className="mt-3 text-sm font-medium leading-snug text-ink">All articles</span>
              </Link>
            )}
          </div>
        </nav>

        {/* Bottom CTA — ink panel */}
        <div className="-mx-5 mt-12 bg-ink px-5 py-9 sm:-mx-6 sm:px-6 md:mx-0 md:mt-16 md:p-10">
          <div className="h-px w-12 bg-gold" aria-hidden="true" />
          <h3 className="mt-6 font-sans text-xl font-medium tracking-[-0.02em] text-paper">
            Interested in Learning More?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-paper/70">
            Contact us to discuss how we can help streamline your workflow.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex min-h-12 w-full items-center justify-between bg-paper px-6 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-white md:min-h-0 md:w-auto md:justify-start md:px-8 md:text-[11px]"
          >
            Get in Touch <span className="md:hidden" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
