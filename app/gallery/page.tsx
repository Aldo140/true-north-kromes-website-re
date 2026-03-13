"use client"

import { useState } from "react"
import { X } from "lucide-react"

const images: { src: string; alt: string }[] = [
  // Finished frameworks on models
  { src: "/images/gallery-upper-framework-acrylic-1.jpg", alt: "Upper framework with acrylic teeth on model" },
  { src: "/images/gallery-upper-framework-acrylic-2.jpg", alt: "Upper framework with acrylic saddles" },
  { src: "/images/gallery-denture-articulated-front.jpg", alt: "Articulated denture models - front view" },
  { src: "/images/gallery-denture-articulated-side.jpg", alt: "Articulated denture models - side view" },
  { src: "/images/gallery-framework-closeup-1.jpg", alt: "Polished partial denture framework on dental model" },
  { src: "/images/gallery-framework-closeup-2.jpg", alt: "Polished upper partial framework on model" },
  { src: "/images/gallery-upper-partial-blue-glove.jpg", alt: "Upper partial framework held with blue glove" },
  { src: "/images/gallery-upper-partial-1.jpg", alt: "Upper partial framework with mesh retention" },
  { src: "/images/gallery-upper-partial-2.jpg", alt: "Upper partial framework detail view" },
  { src: "/images/gallery-two-frameworks.jpg", alt: "Two polished frameworks with mesh retention" },
  
  // Lower frameworks
  { src: "/images/gallery-lower-partial-model-1.jpg", alt: "Lower partial framework on dental model - front view" },
  { src: "/images/gallery-lower-partial-model-2.jpg", alt: "Lower partial framework on dental model - side view" },
  { src: "/images/gallery-lower-partial-model-3.jpg", alt: "Lower partial framework on dental model - angled view" },
  { src: "/images/gallery-lower-partial-model-4.jpg", alt: "Lower partial framework on dental model - underside" },
  { src: "/images/gallery-lower-partial-model-5.jpg", alt: "Lower partial framework on dental model - occlusal view" },
  
  // Frameworks with gloves
  { src: "/images/gallery-framework-gloved-1.jpg", alt: "Gloved hand holding polished partial framework" },
  { src: "/images/gallery-framework-gloved-2.jpg", alt: "Polished upper partial with clasps" },
  
  // Standalone frameworks
  { src: "/images/gallery-partial-framework-only.jpg", alt: "Polished partial framework" },
  { src: "/images/gallery-partial-framework-only-2.jpg", alt: "Polished partial framework - alternate view" },
  { src: "/images/gallery-partial-framework-only-3.jpg", alt: "Polished partial framework with clasps" },
  { src: "/images/gallery-framework-standalone.jpg", alt: "Framework standalone view" },
  { src: "/images/gallery-framework-surface.jpg", alt: "Polished partial framework on surface" },
  { src: "/images/gallery-polished-framework-gray.jpg", alt: "Polished framework on gray background" },
  { src: "/images/gallery-clasps-model.jpg", alt: "Metal clasps on dental model" },
  
  // Finished models
  { src: "/images/gallery-finished-model-1.jpg", alt: "Finished framework on model" },
  { src: "/images/gallery-finished-model-2.jpg", alt: "Finished framework on model - alternate" },
  { src: "/images/gallery-finished-model-3.jpg", alt: "Finished framework on model - detail" },
  { src: "/images/gallery-finished-model-4.jpg", alt: "Finished framework on model - overview" },
]

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <>
      <section className="bg-white pt-44 pb-20 lg:pt-52 lg:pb-28">
        <div className="mx-auto max-w-6xl px-5">
          <h1 className="font-sans text-center text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal text-foreground">
            Showcase
          </h1>
          <p className="mt-2 text-center text-sm tracking-wider text-muted-foreground">
            FINISHED METAL PARTIAL DENTURE FRAMEWORKS
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
