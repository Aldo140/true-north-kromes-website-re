import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return (
    <article className="bg-white pt-44 pb-20 lg:pt-52 lg:pb-28">
      <div className="mx-auto max-w-3xl px-8 lg:px-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <div className="mt-8 aspect-[16/9] w-full overflow-hidden bg-muted">
          <img
            src="/placeholder.svg?height=500&width=900"
            alt="[Placeholder]"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-8">
          <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground/50">
            [Placeholder Date]
          </p>
          <h1 className="mt-3 font-serif text-[clamp(1.5rem,3vw,2.25rem)] leading-tight text-foreground">
            [Placeholder Blog Title]
          </h1>
        </div>

        <hr className="mt-6 mb-8 border-border" />

        <div className="space-y-6 text-[15px] leading-[1.9] text-muted-foreground">
          <p>
            [Placeholder -- first paragraph of the blog post goes here. Client to supply actual blog content before launch.]
          </p>
          <p>
            [Placeholder -- second paragraph continues the article. Discuss relevant dental industry topics, 3D printing technology updates, or case studies.]
          </p>
          <h2 className="text-xl font-medium text-foreground">
            [Placeholder Subheading]
          </h2>
          <p>
            [Placeholder -- additional content under the subheading.]
          </p>
          <p>
            [Placeholder -- concluding paragraph with a call to action.]
          </p>
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <p className="text-sm text-muted-foreground">
            {"Interested in working with us? "}
            <Link
              href="/contact"
              className="border-b border-foreground/30 pb-0.5 text-foreground transition-colors hover:border-foreground"
            >
              Get in touch
            </Link>
          </p>
        </div>
      </div>
    </article>
  )
}
