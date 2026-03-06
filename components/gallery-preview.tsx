import Link from "next/link"
import { ArrowRight } from "lucide-react"

const previewImages: { src: string; alt: string; tall: boolean }[] = [
  { src: "/images/gallery-upper-framework-acrylic-1.jpg", alt: "Upper framework with acrylic teeth on model", tall: true },
  { src: "/images/gallery-framework-closeup-1.jpg", alt: "Polished partial denture framework on dental model", tall: false },
  { src: "/images/gallery-upper-partial-blue-glove.jpg", alt: "Upper partial framework held with blue glove", tall: false },
  { src: "/images/gallery-denture-articulated-front.jpg", alt: "Articulated denture models - front view", tall: true },
  { src: "/images/gallery-lower-partial-model-1.jpg", alt: "Lower partial framework on dental model", tall: false },
  { src: "/images/gallery-two-frameworks.jpg", alt: "Two polished frameworks with mesh retention", tall: false },
]

export function GalleryPreview() {
  return (
    <section className="bg-secondary py-14 lg:py-20" aria-label="Gallery Preview">
      <div className="mx-auto max-w-6xl px-5">
        {/* Left-aligned header with inline link -- Fix #1, #3 */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground">
              OUR WORK
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3vw,2.5rem)] font-normal text-foreground">
              Recent Cases
            </h2>
          </div>
          {/* Text link instead of bordered button -- Fix #3 */}
          <Link
            href="/gallery"
            className="group hidden items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground md:flex"
          >
            View all
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Asymmetric masonry grid -- Fix #5 */}
        <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-2.5 md:grid-cols-3 lg:auto-rows-[220px]">
          {previewImages.map((img, i) => (
            <div
              key={i}
              className={`group overflow-hidden ${img.tall ? "row-span-2" : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Mobile-only link */}
        <div className="mt-8 md:hidden">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
          >
            View all work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
