import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ComparisonTable } from "@/components/comparison-table"
import { Reveal } from "@/components/motion-primitives"
import { MachinedLines } from "@/components/experience"
import { sitePath } from "@/lib/site-path"

export function generateStaticParams() {
  return [
    { slug: "denturism-canada-feature" },
    { slug: "benefits-of-3d-printed-frameworks" },
    { slug: "digital-workflow-guide" },
  ]
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  // Headline pre-split into machined lines per post (same copy as before).
  const titleLines =
    slug === "denturism-canada-feature"
      ? ["Reimagining Partial Dentures:", "From Analog Frustration to Digital Precision"]
      : slug === "benefits-of-3d-printed-frameworks"
        ? ["Benefits of 3D Printed", "Partial Denture Frameworks"]
        : ["Your New Portal"]

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
                : slug === "benefits-of-3d-printed-frameworks"
                  ? "Frameworks · SLM"
                  : "Client portal"}
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
                src={sitePath("/images/opt/blog-denturism-cover.jpg")}
                alt="Denturism Canada Spring 2026 magazine cover"
                width={540}
                height={704}
                className="w-full"
                loading="lazy"
              />
            </figure>

            <figure className="border border-line-dark">
              <img
                src={sitePath("/images/opt/blog-denturism-article-1.jpg")}
                alt="Reimagining Partial Dentures article — page one"
                width={539}
                height={702}
                className="w-full"
                loading="lazy"
              />
            </figure>

            <figure className="border border-line-dark">
              <img
                src={sitePath("/images/opt/blog-denturism-article-2.jpg")}
                alt="Reimagining Partial Dentures article — page two with True North Kromes feature"
                width={541}
                height={668}
                className="w-full"
                loading="lazy"
              />
            </figure>
          </div>
        ) : slug === "benefits-of-3d-printed-frameworks" ? (
          <div className="space-y-10">
            <div className="space-y-6 text-base leading-[1.8] text-ink/75">
              <p>
                Selective laser melting gives dental labs a more controlled path from digital design to finished framework. The result is a lighter, more precise framework with consistent detail from case to case.
              </p>
              <p>
                The framework is designed directly from the approved scan, printed in Health-Canada-licensed Mediloy S Co-Cr, and plasma-polished in-house at True North Kromes.
              </p>
            </div>
            <figure className="overflow-hidden border border-line-dark bg-[#eaf6ff]">
              <img
                src={sitePath("/images/framework-tweezers.jpg")}
                alt="Co-Cr partial denture framework held for inspection"
                width={2048}
                height={1152}
                className="aspect-[16/9] w-full object-cover"
                loading="lazy"
              />
              <figcaption className="grid gap-px border-t border-line-dark bg-line-dark sm:grid-cols-2 lg:grid-cols-5">
                {["Lighter & Thinner", "Greater Comfort", "Durable and Defect-Free", "Designed for Healthier Wear", "High Aesthetics"].map((benefit) => (
                  <span key={benefit} className="bg-paper px-4 py-4 font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-ink">
                    {benefit}
                  </span>
                ))}
              </figcaption>
            </figure>
            <div className="space-y-6 text-base leading-[1.8] text-ink/75">
              <h2 className="font-sans text-2xl font-medium tracking-[-0.02em] text-ink">Printed vs. traditional</h2>
              <p>
                Compared with traditional casting, the digital workflow reduces variables, removes wax and burnout steps, and makes the production result easier to repeat. Here is the full comparison behind the benefits of printed frameworks.
              </p>
            </div>
            <div className="border-y border-line-dark py-8">
              <ComparisonTable />
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="space-y-6 text-base leading-[1.8] text-ink/75">
              <p>
                Interested in trying our services and taking full advantage of our management software? Please send us a request or email us to let us know. Once your account has been set up, the video below will explain the many benefits of our easy-to-use platform.
              </p>
            </div>
            <div className="overflow-hidden border border-line-dark bg-ink">
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
              className="inline-flex items-center bg-ink px-7 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-paper transition-colors hover:bg-gold hover:text-ink"
            >
              Access the Client Portal ↗
            </a>
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
