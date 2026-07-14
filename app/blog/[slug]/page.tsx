import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ComparisonTable } from "@/components/comparison-table"
import { Reveal } from "@/components/motion-primitives"
import { MachinedLines } from "@/components/experience"

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  // Headline pre-split into machined lines per post (same copy as before).
  const titleLines =
    slug === "comparison-traditional-vs-3d-printed"
      ? ["Comparison of Traditional RPDs", "and 3D Printed Ones"]
      : slug === "denturism-canada-feature"
        ? ["Reimagining Partial Dentures:", "From Analog Frustration to Digital Precision"]
        : ["Article Coming Soon"]

  return (
    <article className="bg-paper pt-40 pb-20 lg:pt-48 lg:pb-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60 transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Back to Blog
        </Link>

        {/* Meta + headline — eyebrow reveals, H1 lines follow */}
        <div className="mt-10">
          <Reveal y={10}>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dim">
              {slug === "denturism-canada-feature"
                ? "Denturism Canada — Spring 2026"
                : "Coming Soon"}
            </p>
          </Reveal>
          <MachinedLines
            as="h1"
            lines={titleLines}
            delay={0.08}
            className="mt-4 text-balance font-sans text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-tight tracking-[-0.02em] text-ink"
          />
        </div>

        {/* Hairline rule */}
        <div className="mt-8 mb-10 h-px bg-line-dark" aria-hidden="true" />

        {/* Body */}
        {slug === "denturism-canada-feature" ? (
          <div className="space-y-10">
            <div className="space-y-6 text-base leading-[1.8] text-ink/75">
              <p>
                We are proud to be featured in the Spring 2026 issue of{" "}
                <span className="font-medium text-ink">Denturism Canada</span> — The Journal of Canadian Denturism. The article, written by Luke LaRocque-Walker, DD, explores his journey from traditional analog partial dentures to a fully digital, 3D-printed workflow.
              </p>
              <p>
                From overcoming early challenges with intraoral scanning to producing metal-framed partial dentures with accuracy and fit that surpasses traditional casting, the piece highlights how digital technology is reshaping the profession — and the role True North Kromes plays in that transformation.
              </p>
            </div>

            <figure className="border border-line-dark">
              <img
                src="/images/opt/blog-denturism-cover.jpg"
                alt="Denturism Canada Spring 2026 magazine cover"
                width={540}
                height={704}
                className="w-full"
                loading="lazy"
              />
            </figure>

            <figure className="border border-line-dark">
              <img
                src="/images/opt/blog-denturism-article-1.jpg"
                alt="Reimagining Partial Dentures article — page one"
                width={539}
                height={702}
                className="w-full"
                loading="lazy"
              />
            </figure>

            <figure className="border border-line-dark">
              <img
                src="/images/opt/blog-denturism-article-2.jpg"
                alt="Reimagining Partial Dentures article — page two with True North Kromes feature"
                width={541}
                height={668}
                className="w-full"
                loading="lazy"
              />
            </figure>
          </div>
        ) : slug === "comparison-traditional-vs-3d-printed" ? (
          <div className="space-y-10">
            <ComparisonTable />
            <div className="space-y-6 text-base leading-[1.8] text-ink/75">
              <p>
                The evolution of partial denture manufacturing has taken a significant leap with the advent of 3D printing technology. True North Kromes utilizes selective laser melting (SLM) technology to produce partial denture frameworks that surpass traditional hand-casted methods in nearly every measurable way.
              </p>
              <p>
                From enhanced precision and reduced defects to improved biocompatibility and environmental friendliness, 3D printed frameworks represent the future of dental laboratory manufacturing. Our commitment to this technology ensures that every partial denture we produce meets the highest standards of quality, fit, and patient comfort.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6 text-base leading-[1.8] text-ink/75">
            <p>
              This article is currently being written. Check back soon for insights on digital dental workflows, 3D printing technology, and how True North Kromes is transforming partial denture manufacturing.
            </p>
            <p>
              In the meantime, feel free to explore our gallery to see examples of our work, or contact us directly to learn more about our services.
            </p>
          </div>
        )}

        {/* Bottom CTA — ink panel */}
        <div className="mt-16 bg-ink p-8 sm:p-10">
          <div className="h-px w-12 bg-gold" aria-hidden="true" />
          <h3 className="mt-6 font-sans text-xl font-medium tracking-[-0.02em] text-paper">
            Interested in Learning More?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-paper/70">
            Contact us to discuss how we can help streamline your workflow.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center bg-paper px-8 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-white"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </article>
  )
}
