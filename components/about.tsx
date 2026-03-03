"use client"

import { useCallback, useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const teamImages = [
  {
    src: "/images/team-selfie.jpg",
    alt: "The True North Kromes team posing for a selfie",
  },
  {
    src: "/images/team-lab.jpg",
    alt: "The True North Kromes team working in the laboratory",
  },
  {
    src: "/images/team-building.jpg",
    alt: "The True North Kromes team building together",
  },
]

export function About() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const onSelect = useCallback(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
  }, [api])

  useEffect(() => {
    if (!api) return
    onSelect()
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api, onSelect])

  return (
    <section className="bg-background py-20 lg:py-28" aria-label="About TNK">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="chrome-card overflow-hidden rounded-lg border bg-card p-1">
            <Carousel
              setApi={setApi}
              opts={{ loop: true }}
              plugins={[
                Autoplay({ delay: 5000, stopOnInteraction: false }),
              ]}
              className="w-full"
            >
              <CarouselContent className="ml-0">
                {teamImages.map((image, index) => (
                  <CarouselItem key={index} className="pl-0">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="aspect-[4/3] w-full rounded object-cover"
                      loading={index === 0 ? undefined : "lazy"}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="flex items-center justify-center gap-2 py-3">
                {teamImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      current === index
                        ? "w-6 bg-accent"
                        : "w-2 bg-chrome-mid hover:bg-chrome-dark"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </Carousel>
          </div>

          <div>
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-tight text-foreground">
              About TNK
            </h2>

            <p className="mt-5 text-base leading-[1.8] text-muted-foreground">
              True North Kromes (TNK) provides complete support throughout the entire
              production cycle. Our workflow delivers high precision, high efficiency,
              and significant cost savings -- enabling laboratories and clinics to
              produce frameworks that are more accurate, consistent, and customized than
              ever before.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
