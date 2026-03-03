"use client"

import { ShieldCheck, MapPin, Zap, Award } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const credentials = [
  {
    icon: ShieldCheck,
    label: "Health Canada Licensed",
    detail: "Medical Device Licence No. 109393",
  },
  {
    icon: MapPin,
    label: "Canadian-Made",
    detail: "Designed & manufactured in Canada",
  },
  {
    icon: Zap,
    label: "SLM Technology",
    detail: "High-resolution metal 3D printing",
  },
  {
    icon: Award,
    label: "Lab-Direct",
    detail: "No middlemen, competitive pricing",
  },
]

export function TrustStrip() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="border-y border-border bg-secondary py-10" aria-label="Credentials">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-5 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {credentials.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
