import Link from "next/link"
import { ArrowLeft } from "lucide-react"

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

        {/* Hero image */}
        <div className="mt-8 aspect-[16/9] w-full bg-muted">
          <img
            src="/placeholder.svg?height=500&width=900"
            alt="Article cover image"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Meta */}
        <div className="mt-8">
          <p className="text-xs tracking-widest text-muted-foreground/60 uppercase">
            Coming Soon
          </p>
          <h1 className="font-[family-name:var(--font-heading)] mt-3 text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-tight text-foreground">
            Article Coming Soon
          </h1>
        </div>

        {/* Divider */}
        <hr className="mt-6 mb-8 border-border" />

        {/* Body */}
        <div className="space-y-6 text-base leading-[1.9] text-muted-foreground">
          <p>
            This article is currently being written. Check back soon for insights on digital dental workflows, 3D printing technology, and how True North Kromes is transforming partial denture manufacturing.
          </p>
          <p>
            In the meantime, feel free to explore our gallery to see examples of our work, or contact us directly to learn more about our services.
          </p>
        </div>

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
