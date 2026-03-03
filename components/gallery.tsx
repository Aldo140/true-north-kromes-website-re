"use client"

import { useState, useCallback, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const galleryImages = [
  // Frameworks
  { id: 1, src: "/images/framework-hero.jpg", alt: "Polished chrome framework on gray surface, dramatic angle" },
  { id: 2, src: "/images/framework-polished.jpg", alt: "Polished upper palatal framework on dental model" },
  { id: 3, src: "/images/framework-clasps.jpg", alt: "Upper framework with clasps on dental model" },
  { id: 4, src: "/images/framework-tweezers.jpg", alt: "Chrome framework with mesh retention held in tweezers" },
  { id: 5, src: "/images/framework-lower.jpg", alt: "Polished framework fitted on lower dental model" },
  { id: 6, src: "/images/framework-detail.jpg", alt: "Detailed partial denture framework on model" },
  { id: 7, src: "/images/framework-overhead.jpg", alt: "Framework overhead view showing retention mesh" },
  { id: 8, src: "/images/framework-full.jpg", alt: "Full upper framework with retention and clasps" },
  { id: 9, src: "/images/framework-clasps2.jpg", alt: "Framework with clasps on dental model" },
  { id: 10, src: "/images/chrome-crowns.jpg", alt: "Chrome metal crowns on dental model" },
  { id: 11, src: "/images/lower-partial.jpg", alt: "Finished lower partial denture framework" },
  { id: 12, src: "/images/palatal-framework.jpg", alt: "Palatal framework close-up showing detail" },
  { id: 13, src: "/images/palatal-plate.jpg", alt: "Perforated palatal plate held in blue glove" },
  { id: 25, src: "/images/framework-profile.jpg", alt: "Polished chrome framework side profile held in blue glove" },
  { id: 26, src: "/images/framework-upper-side.jpg", alt: "Upper framework on model, side view" },
  { id: 27, src: "/images/framework-mandrel.jpg", alt: "Framework on mandrel during inspection" },
  { id: 40, src: "/images/gallery-framework-standalone.jpg", alt: "Polished standalone framework on countertop" },
  { id: 41, src: "/images/gallery-polished-framework-gray.jpg", alt: "Mirror-polished framework on gray surface" },

  // Finished Partials
  { id: 28, src: "/images/partial-front.jpg", alt: "Finished upper partial denture with teeth, front view" },
  { id: 29, src: "/images/partial-palatal.jpg", alt: "Upper partial denture palatal view with framework" },
  { id: 30, src: "/images/partial-bite.jpg", alt: "Partial denture on articulated model, bite view" },
  { id: 31, src: "/images/partial-lower.jpg", alt: "Lower partial denture on model with chrome framework" },
  { id: 50, src: "/images/gallery-finished-model-1.jpg", alt: "Polished framework fitted on resin dental model, side view" },
  { id: 51, src: "/images/gallery-finished-model-2.jpg", alt: "Chrome partial framework on resin model, angled view" },
  { id: 52, src: "/images/gallery-finished-model-3.jpg", alt: "Framework seated on dental model showing clasp detail" },
  { id: 53, src: "/images/gallery-finished-model-4.jpg", alt: "Lower partial denture framework on resin model" },

  // 3D Printing
  { id: 14, src: "/images/implant-bar.jpg", alt: "Raw implant bar with attachment cylinders" },
  { id: 15, src: "/images/raw-bar.jpg", alt: "Unpolished implant bar showing print texture" },
  { id: 16, src: "/images/powder-bed.jpg", alt: "Raw framework emerging from metal powder bed" },
  { id: 17, src: "/images/framework-raw.jpg", alt: "Raw 3D printed framework before finishing" },
  { id: 20, src: "/images/printer-buildplate.jpg", alt: "Build plate with frameworks next to NCL-M150 printer" },
  { id: 42, src: "/images/gallery-raw-print-supports.jpg", alt: "Raw 3D printed framework with support structures in blue glove" },
  { id: 43, src: "/images/gallery-raw-print-side.jpg", alt: "Raw printed framework side view showing print texture" },
  { id: 44, src: "/images/gallery-raw-print-detail.jpg", alt: "Close-up of raw 3D printed metal framework detail" },
  { id: 45, src: "/images/gallery-raw-print-batch.jpg", alt: "Batch of raw printed frameworks on build plate" },

  // Post-Processing
  { id: 18, src: "/images/polishing-process.jpg", alt: "Framework during DLyte electropolishing process" },
  { id: 23, src: "/images/dlyte-polishing.jpg", alt: "DLyte mini electropolishing machine in operation" },
  { id: 46, src: "/images/gallery-dlyte-operator.jpg", alt: "Operator programming the DLyte mini polishing machine" },
  { id: 47, src: "/images/gallery-dlyte-polishing-action.jpg", alt: "Framework held in tongs during DLyte electropolishing" },
  { id: 48, src: "/images/gallery-dlyte-sintering.jpg", alt: "DLyte sintering process in progress" },
  { id: 54, src: "/images/gallery-mesh-partial-1.jpg", alt: "Polished mesh palatal plate held in blue glove, front" },
  { id: 55, src: "/images/gallery-mesh-partial-2.jpg", alt: "Polished mesh palatal plate held in blue glove, reverse" },
  { id: 56, src: "/images/gallery-mesh-partial-3.jpg", alt: "Polished mesh palatal plate held in blue glove, angled" },

  // Design
  { id: 32, src: "/images/cad-design.png", alt: "3D CAD digital design of dental framework" },

  // Equipment
  { id: 21, src: "/images/printer-branded.jpg", alt: "True North Kromes build plate in 3D printer" },
  { id: 22, src: "/images/printer-window.jpg", alt: "View through 3D metal printer during printing" },
  { id: 24, src: "/images/lab-facility.jpg", alt: "TNK production facility with Chamlion 3D printers" },
  { id: 49, src: "/images/gallery-lab-wide.jpg", alt: "Wide view of TNK lab with dual Chamlion SLM printers" },

  // Other
  { id: 19, src: "/images/grillz.jpg", alt: "Custom metal dental grillz on model" },
  { id: 34, src: "/images/team-lab.jpg", alt: "True North Kromes team at work" },
  { id: 35, src: "/images/gallery-grillz-close.jpg", alt: "Custom PARADA grillz close-up on dental model" },
  { id: 36, src: "/images/gallery-grillz-full.jpg", alt: "Custom PARADA grillz full view on dental model" },
  { id: 37, src: "/images/gallery-instagram-post.jpg", alt: "True North Kromes Instagram post featuring printed frameworks" },
]

export function Gallery() {
  const { ref, isVisible } = useScrollAnimation()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length)
    }
  }, [lightboxIndex])

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length)
    }
  }, [lightboxIndex])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxIndex, goNext, goPrev])

  return (
    <section className="bg-background py-16 lg:py-24" aria-label="Our Work Gallery">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-5 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => openLightbox(index)}
              className="group aspect-square overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={`View ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-90"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 text-white/70 transition-colors hover:text-white"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goPrev()
            }}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-white/70 transition-colors hover:text-white"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goNext()
            }}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-white/70 transition-colors hover:text-white"
            aria-label="Next image"
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          <img
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt}
            className="max-h-[85vh] max-w-[90vw] rounded object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/60">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  )
}
