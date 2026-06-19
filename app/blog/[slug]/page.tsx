import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ComparisonTable } from "@/components/comparison-table"

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return (
    <article className="bg-white pt-44 pb-20 lg:pt-52 lg:pb-28">
      <div className="mx-auto max-w-3xl px-5">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        {/* Meta */}
        <div className="mt-8">
          <p className="text-xs tracking-widest text-muted-foreground/60 uppercase">
            {slug === "denturism-canada-feature"
              ? "Denturism Canada — Spring 2026"
              : "Coming Soon"}
          </p>
          <h1 className="font-sans mt-3 text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-tight text-foreground">
            {slug === "comparison-traditional-vs-3d-printed"
              ? "Comparison of Traditional RPDs and 3D Printed Ones"
              : slug === "denturism-canada-feature"
                ? "Reimagining Partial Dentures: From Analog Frustration to Digital Precision"
                : "Article Coming Soon"}
          </h1>
        </div>

        {/* Divider */}
        <hr className="mt-6 mb-8 border-border" />

        {/* Body */}
        {slug === "denturism-canada-feature" ? (
          <div className="space-y-8">
            <div className="space-y-6 text-base leading-[1.9] text-muted-foreground">
              <p>
                We are proud to be featured in the Spring 2026 issue of{" "}
                <span className="font-medium text-foreground">Denturism Canada</span> — The Journal of Canadian Denturism. The article, written by Luke LaRocque-Walker, DD, explores his journey from traditional analog partial dentures to a fully digital, 3D-printed workflow.
              </p>
              <p>
                From overcoming early challenges with intraoral scanning to producing metal-framed partial dentures with accuracy and fit that surpasses traditional casting, the piece highlights how digital technology is reshaping the profession — and the role True North Kromes plays in that transformation.
              </p>
            </div>

            <figure className="border border-border">
              <img
                src="/images/denturism-canada-cover.jpg"
                alt="Denturism Canada Spring 2026 magazine cover"
                className="w-full"
                loading="lazy"
              />
            </figure>

            <figure className="border border-border">
              <img
                src="/images/denturism-canada-article-1.jpg"
                alt="Reimagining Partial Dentures article — page one"
                className="w-full"
                loading="lazy"
              />
            </figure>

            <figure className="border border-border">
              <img
                src="/images/denturism-canada-article-2.jpg"
                alt="Reimagining Partial Dentures article — page two with True North Kromes feature"
                className="w-full"
                loading="lazy"
              />
            </figure>
          </div>
        ) : slug === "comparison-traditional-vs-3d-printed" ? (
          <div className="space-y-8">
            <ComparisonTable />
            <div className="space-y-6 text-base leading-[1.9] text-muted-foreground">
              <p>
                The evolution of partial denture manufacturing has taken a significant leap with the advent of 3D printing technology. True North Kromes utilizes selective laser melting (SLM) technology to produce partial denture frameworks that surpass traditional hand-casted methods in nearly every measurable way.
              </p>
              <p>
                From enhanced precision and reduced defects to improved biocompatibility and environmental friendliness, 3D printed frameworks represent the future of dental laboratory manufacturing. Our commitment to this technology ensures that every partial denture we produce meets the highest standards of quality, fit, and patient comfort.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6 text-base leading-[1.9] text-muted-foreground">
            <p>
              This article is currently being written. Check back soon for insights on digital dental workflows, 3D printing technology, and how True North Kromes is transforming partial denture manufacturing.
            </p>
            <p>
              In the meantime, feel free to explore our gallery to see examples of our work, or contact us directly to learn more about our services.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-14 border border-border p-8 text-center">
          <h3 className="text-lg font-semibold text-foreground">
            Interested in Learning More?
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Contact us to discuss how we can help streamline your workflow.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center border border-foreground px-8 py-3 text-sm tracking-wider text-foreground transition-colors hover:bg-foreground hover:text-white"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </article>
  )
}
