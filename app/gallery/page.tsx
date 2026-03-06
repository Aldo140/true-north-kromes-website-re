"use client"

import { useState } from "react"
import { X } from "lucide-react"

const images: { src: string; alt: string }[] = [
  { src: "/images/gallery-printer-window-1.jpg", alt: "Metal frameworks inside 3D printer chamber" },
  { src: "/images/gallery-build-plate-printer.jpg", alt: "Build plate with multiple frameworks in printer" },
  { src: "/images/gallery-raw-build-plate.jpg", alt: "Raw printed build plate with framework supports" },
  { src: "/images/gallery-printer-chamber.jpg", alt: "3D printer chamber view" },
  { src: "/images/gallery-technician-printer.jpg", alt: "Technician holding build plate at NCL-M150 printer" },
  { src: "/images/gallery-framework-closeup-1.jpg", alt: "Polished partial denture framework on dental model" },
  { src: "/images/gallery-printer-window-2.jpg", alt: "Frameworks being handled inside printer" },
  { src: "/images/gallery-framework-closeup-2.jpg", alt: "Polished upper partial framework on model" },
  { src: "/images/gallery-grillz-polished.jpg", alt: "Polished metal grillz on dental model" },
  { src: "/images/gallery-upper-partial-1.jpg", alt: "Upper partial framework with mesh retention" },
  { src: "/images/gallery-upper-partial-2.jpg", alt: "Upper partial framework detail view" },
  { src: "/images/gallery-team-lab.jpg", alt: "TNK team in the lab with Chamlion printer" },
  { src: "/images/gallery-team-building.jpg", alt: "Team outside TNK building entrance" },
  { src: "/images/gallery-framework-gloved-1.jpg", alt: "Gloved hand holding polished partial framework" },
  { src: "/images/gallery-clasps-model.jpg", alt: "Metal clasps on dental model" },
  { src: "/images/gallery-framework-gloved-2.jpg", alt: "Polished upper partial with clasps" },
]

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <>
      <section className="bg-white pt-44 pb-20 lg:pt-52 lg:pb-28">
        <div className="mx-auto max-w-6xl px-5">
          <h1 className="font-[family-name:var(--font-heading)] text-center text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal text-foreground">
            Gallery
          </h1>
          <p className="mt-2 text-center text-sm tracking-wider text-muted-foreground">
            [Placeholder subtitle]
          </p>

          {/* Image grid */}
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {images.map((img, i) => (
              <button
                key={img.src + i}
                onClick={() => setLightbox(img.src)}
                className="group overflow-hidden focus:outline-none"
                aria-label={`View ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="Image lightbox"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 text-white/80 hover:text-white"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={lightbox}
            alt="Enlarged view"
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
