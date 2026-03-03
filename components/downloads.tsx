"use client"

import { FileText, Download } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const documents = [
  {
    title: "Mediloy RPD Licence",
    description:
      "Health Canada Medical Device Licence (No. 109393) for Mediloy RPD, issued to BEGO Bremer Goldschlagerei. Class 2 device certification.",
    filename: "109393-Mediloy-RPD-Licence.pdf",
    href: "/downloads/109393-Mediloy-RPD-Licence.pdf",
  },
  {
    title: "Credit Card Authorization Form",
    description:
      "Authorization form for payment by credit card. Fill out and return to TNK to set up card-on-file billing.",
    filename: "Authorization-For-Payment-By-Credit-Card.pdf",
    href: "/downloads/Authorization-For-Payment-By-Credit-Card.pdf",
  },
]

export function Downloads() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-background py-16 lg:py-24" aria-label="Customer Downloads">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-5 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc) => (
            <a
              key={doc.filename}
              href={doc.href}
              download={doc.filename}
              className="chrome-card group flex flex-col rounded-lg border bg-card p-6 transition-all hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-secondary">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-foreground">
                    {doc.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {doc.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
                <Download className="h-4 w-4 text-primary transition-transform group-hover:-translate-y-0.5" />
                <span className="text-xs font-bold text-primary">
                  {doc.filename}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 rounded-md border border-border bg-secondary p-5 text-center">
          <p className="text-sm text-muted-foreground">
            [Placeholder]
          </p>
        </div>
      </div>
    </section>
  )
}
