"use client"

import { useState } from "react"
import { X } from "lucide-react"

const images: { src: string; alt: string }[] = [
  // Finished products - the best portfolio pieces
  { src: "/images/gallery-upper-framework-acrylic-1.jpg", alt: "Upper framework with acrylic teeth on model" },
  { src: "/images/gallery-denture-articulated-front.jpg", alt: "Articulated denture models - front view" },
  { src: "/images/gallery-framework-closeup-1.jpg", alt: "Polished partial denture framework on dental model" },
  { src: "/images/gallery-upper-partial-blue-glove.jpg", alt: "Upper partial framework held with blue glove" },
  
  // Upper frameworks
  { src: "/images/gallery-upper-framework-acrylic-2.jpg", alt: "Upper framework with acrylic saddles" },
  { src: "/images/gallery-two-frameworks.jpg", alt: "Two polished frameworks with mesh retention" },
  
  // Lower frameworks  
  { src: "/images/gallery-lower-partial-model-1.jpg", alt: "Lower partial framework on dental model" },
  { src: "/images/gallery-framework-gloved-1.jpg", alt: "Gloved hand holding polished partial framework" },
  
  // Specialty - mesh trays
  { src: "/images/gallery-mesh-tray.jpg", alt: "Perforated mesh tray framework" },
  
  // Grillz
  { src: "/images/gallery-grillz-polished.jpg", alt: "Polished metal grillz on dental model" },
  
  // Process - DLyte polishing
  { src: "/images/gallery-dlyte-framework-1.jpg", alt: "Polished framework on DLyte machine arm" },
  
  // Process - 3D printing
  { src: "/images/gallery-printer-window-1.jpg", alt: "Metal frameworks inside 3D printer chamber" },
  { src: "/images/gallery-technician-printer.jpg", alt: "Technician holding build plate at printer" },
  
  // Lab and team
  { src: "/images/gallery-lab-chamlion.jpg", alt: "Full lab view with Chamlion 3D printers" },
  { src: "/images/gallery-team-lab.jpg", alt: "TNK team in the lab" },
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
            A SHOWCASE OF OUR PRECISION CRAFTSMANSHIP
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
