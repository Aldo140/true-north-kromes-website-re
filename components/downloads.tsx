"use client"

import { FileText, Download } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const documents = [
  {
    title: "New Client Order Form",
    description: "Fill out this form to submit your first case to TNK.",
    filename: "TNK_New_Client_Order_Form.pdf",
    href: "/downloads/TNK_New_Client_Order_Form.pdf",
  },
  {
    title: "Digital Submission Guide",
    description: "Step-by-step instructions for submitting digital scans and design files.",
    filename: "TNK_Digital_Submission_Guide.pdf",
    href: "/downloads/TNK_Digital_Submission_Guide.pdf",
  },
  {
    title: "Pricing & Fee Schedule",
    description: "Current pricing for all TNK services including design, printing, and finishing.",
    filename: "TNK_Pricing_Schedule.pdf",
    href: "/downloads/TNK_Pricing_Schedule.pdf",
  },
  {
    title: "Material Specifications",
    description: "Technical data sheets for the CoCr alloys and materials used in our frameworks.",
    filename: "TNK_Material_Specifications.pdf",
    href: "/downloads/TNK_Material_Specifications.pdf",
  },
  {
    title: "Shipping & Returns Policy",
    description: "Guidelines for shipping cases to TNK and our return and remake policy.",
    filename: "TNK_Shipping_Returns_Policy.pdf",
    href: "/downloads/TNK_Shipping_Returns_Policy.pdf",
  },
  {
    title: "TNK Product Flyer",
    description: "Overview flyer of our one-stop metal printing service for dental professionals.",
    filename: "TNK_Flyer_PROOF.pdf",
    href: "/downloads/TNK_Flyer_PROOF.pdf",
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
              className="group flex flex-col rounded border border-border bg-card p-5 transition-shadow hover:shadow-md"
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

        <div className="mt-10 rounded border border-border bg-secondary p-5 text-center">
          <p className="text-sm text-muted-foreground">
            {"Need a document that's not listed here? "}
            <a href="/contact" className="font-bold text-primary hover:text-[#225da6]">
              Contact us
            </a>
            {" and we'll be happy to help."}
          </p>
        </div>
      </div>
    </section>
  )
}
