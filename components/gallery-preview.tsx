import Link from "next/link"
import { ArrowRight } from "lucide-react"

const previewImages: { src: string; alt: string; tall: boolean }[] = [
  { src: "/images/gallery-upper-framework-acrylic-1.jpg", alt: "Upper framework with acrylic teeth on model", tall: true },
  { src: "/images/gallery-framework-closeup-1.jpg", alt: "Polished partial denture framework on dental model", tall: false },
  { src: "/images/gallery-denture-articulated-front.jpg", alt: "Articulated denture models - front view", tall: false },
  { src: "/images/gallery-two-frameworks.jpg", alt: "Two polished frameworks with mesh retention", tall: true },
]

export function GalleryPreview() {
  return (
    <section className="bg-[#f5f5f0] py-28 lg:py-36" aria-label="Gallery Preview">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.3em] text-[#6b6b6b] uppercase">
              Our Work
            </p>
            <h2 className="font-[family-name:var(--font-heading)] mt-4 text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.1] text-[#1a1a1a]">
              Recent <span className="italic">cases</span>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="group hidden items-center gap-2 text-sm font-medium tracking-wider text-[#1a1a1a] transition-colors hover:text-[#6b6b6b] md:flex"
          >
            View All
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid */}
        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-3 md:grid-cols-3 lg:auto-rows-[260px]">
          {previewImages.map((img, i) => (
            <div
              key={i}
              className={`group overflow-hidden ${img.tall ? "row-span-2" : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Mobile link */}
        <div className="mt-10 md:hidden">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2 text-sm font-medium tracking-wider text-[#1a1a1a]"
          >
            View All Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
