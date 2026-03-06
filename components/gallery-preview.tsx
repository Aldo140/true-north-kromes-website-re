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
    <section className="bg-white py-20 lg:py-28" aria-label="Gallery Preview">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-[#9ca3af] uppercase">
              Our Work
            </p>
            <h2 className="font-[family-name:var(--font-heading)] mt-3 text-[clamp(1.75rem,4vw,2.5rem)] font-normal text-[#1a1a1a]">
              Recent Cases
            </h2>
          </div>
          <Link
            href="/gallery"
            className="group hidden items-center gap-2 text-sm font-medium tracking-wider text-[#1a1a1a] transition-colors hover:text-[#9ca3af] md:flex"
          >
            View All
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid */}
        <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-3 lg:auto-rows-[220px]">
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

        {/* Mobile link */}
        <div className="mt-8 md:hidden">
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
