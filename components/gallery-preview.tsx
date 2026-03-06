import Link from "next/link"
import { ArrowRight } from "lucide-react"

const previewImages: { src: string; alt: string; tall: boolean }[] = [
  { src: "/images/gallery-upper-framework-acrylic-1.jpg", alt: "Upper framework with acrylic teeth on model", tall: true },
  { src: "/images/gallery-framework-closeup-1.jpg", alt: "Polished partial denture framework on dental model", tall: false },
  { src: "/images/gallery-denture-articulated-front.jpg", alt: "Articulated denture models - front view", tall: false },
  { src: "/images/gallery-two-frameworks.jpg", alt: "Two polished frameworks with mesh retention", tall: true },
  { src: "/images/gallery-grillz-polished.jpg", alt: "Polished metal grillz on dental model", tall: false },
  { src: "/images/gallery-mesh-tray.jpg", alt: "Perforated mesh tray framework", tall: false },
]

export function GalleryPreview() {
  return (
    <section className="bg-white py-24 lg:py-32" aria-label="Gallery Preview">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        {/* Header - left aligned */}
        <div className="mb-12 flex items-end justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a1a1aa]">
              Portfolio
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.02em] text-[#1a1a1a]">
              Recent Cases
            </h2>
          </div>
          <Link
            href="/gallery"
            className="group hidden items-center gap-2 border-b border-[#1a1a1a] pb-1 text-sm font-medium tracking-wide text-[#1a1a1a] transition-all hover:border-[#71717a] hover:text-[#71717a] md:flex"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid auto-rows-[180px] grid-cols-2 gap-2 md:grid-cols-3 lg:auto-rows-[240px] lg:gap-3">
          {previewImages.map((img, i) => (
            <div
              key={i}
              className={`group overflow-hidden ${img.tall ? "row-span-2" : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Mobile link */}
        <div className="mt-10 md:hidden">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 border-b border-[#1a1a1a] pb-1 text-sm font-medium tracking-wide text-[#1a1a1a]"
          >
            View All Work
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
