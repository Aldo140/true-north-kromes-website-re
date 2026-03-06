import type { Metadata } from "next"
import Link from "next/link"
import { Upload, FileText, Clock, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Submit a Case",
  description: "Submit your dental case files to True North Kromes for 3D-printed metal frameworks.",
}

const steps = [
  {
    icon: Upload,
    title: "Upload Files",
    description: "Submit your STL or digital scan files through our secure portal.",
  },
  {
    icon: FileText,
    title: "We Review",
    description: "Our team reviews your submission and confirms specifications.",
  },
  {
    icon: Clock,
    title: "Production",
    description: "Your framework is 3D printed and finished to spec.",
  },
  {
    icon: CheckCircle,
    title: "Delivery",
    description: "Completed case shipped or ready for pickup.",
  },
]

const acceptedFormats = [
  { format: "STL", description: "Standard mesh format" },
  { format: "PLY", description: "Polygon file format" },
  { format: "OBJ", description: "Wavefront object" },
  { format: "3Shape", description: "Native 3Shape exports" },
  { format: "Exocad", description: "Native Exocad exports" },
]

export default function SubmitCasePage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-white pt-44 pb-12 lg:pt-52 lg:pb-16">
        <div className="mx-auto max-w-5xl px-8 lg:px-16">
          <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground">
            FOR DENTAL PROFESSIONALS
          </p>
          <h1 className="mt-2 text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-tight text-foreground">
            Submit a Case
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Ready to get started? Submit your digital files through our client portal 
            and we'll have your precision framework back to you within our standard turnaround.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="border-t border-border bg-secondary py-14 lg:py-20">
        <div className="mx-auto max-w-5xl px-8 lg:px-16">
          <h2 className="text-lg font-semibold text-foreground">How It Works</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-foreground text-white text-sm font-medium">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* File Requirements */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-5xl px-8 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Accepted File Formats</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We accept most standard dental CAD formats. If you're unsure about compatibility, contact us.
              </p>
              <div className="mt-6 space-y-3">
                {acceptedFormats.map((f) => (
                  <div key={f.format} className="flex items-center gap-3 border-b border-border pb-3">
                    <span className="w-20 text-sm font-medium text-foreground">{f.format}</span>
                    <span className="text-sm text-muted-foreground">{f.description}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">Submission Requirements</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-foreground">•</span>
                  Digital scan or model of the prepared arch
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">•</span>
                  Opposing arch scan (if applicable)
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">•</span>
                  Bite registration or occlusal record
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">•</span>
                  Prescription with framework design specifications
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">•</span>
                  Patient case ID for tracking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Turnaround Info */}
      <section className="border-t border-border bg-secondary py-14 lg:py-20">
        <div className="mx-auto max-w-5xl px-8 lg:px-16">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="border-l-2 border-foreground pl-5">
              <p className="text-2xl font-semibold text-foreground">[X] Days</p>
              <p className="mt-1 text-sm text-muted-foreground">Standard turnaround</p>
            </div>
            <div className="border-l-2 border-muted-foreground/30 pl-5">
              <p className="text-2xl font-semibold text-foreground">[X] Days</p>
              <p className="mt-1 text-sm text-muted-foreground">Rush orders available</p>
            </div>
            <div className="border-l-2 border-muted-foreground/30 pl-5">
              <p className="text-2xl font-semibold text-foreground">[X]%</p>
              <p className="mt-1 text-sm text-muted-foreground">On-time delivery rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-14 lg:py-20">
        <div className="mx-auto max-w-5xl px-8 lg:px-16 text-center">
          <h2 className="text-xl font-semibold text-white">Ready to Submit?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/70">
            Access the client portal to upload your case files and track order status.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/90"
            >
              Open Client Portal
            </a>
            <Link
              href="/contact"
              className="text-sm text-white/70 underline underline-offset-4 transition-colors hover:text-white"
            >
              Need help? Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
