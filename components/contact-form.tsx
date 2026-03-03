"use client"

import { useState } from "react"
import { Phone, Link as LinkIcon } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

type FollowUpOption = "conversation" | "portal"

export function ContactForm() {
  const { ref, isVisible } = useScrollAnimation()
  const [followUp, setFollowUp] = useState<FollowUpOption | "">("")
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (formData: FormData) => {
    const newErrors: Record<string, string> = {}
    const fields = [
      { key: "fullName", label: "Full Name" },
      { key: "clinicName", label: "Clinic Name" },
      { key: "telephone", label: "Telephone Number" },
      { key: "address", label: "Full Address" },
      { key: "email", label: "Email Address" },
      { key: "frames", label: "Approx. frames per month" },
      { key: "caseMethod", label: "How will your cases be sent" },
    ]

    for (const field of fields) {
      const value = formData.get(field.key)
      if (!value || (typeof value === "string" && value.trim() === "")) {
        newErrors[field.key] = `${field.label} is required.`
      }
    }

    const email = formData.get("email") as string
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address."
    }

    if (!followUp) {
      newErrors.followUp = "Please select a follow-up option."
    }

    return newErrors
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const validationErrors = validate(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="bg-background py-20 lg:py-28" aria-label="Contact">
        <div className="mx-auto max-w-2xl px-4 text-center lg:px-8">
          <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-foreground">
            Thank you!
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {"We'll be in touch shortly."}
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-background py-20 lg:py-28" aria-label="Send Your First Case">
      <div
        ref={ref}
        className={`mx-auto max-w-2xl px-4 lg:px-8 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="mb-10 text-center">
          <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-foreground text-balance">
            Send Your First Case
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {"Ready to get started? Fill out the form below and we'll be in touch."}
          </p>
        </div>

        {/* Follow-up option cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setFollowUp("conversation")}
            className={`flex items-center gap-4 rounded-lg border-2 p-5 text-left transition-all ${
              followUp === "conversation"
                ? "border-foreground bg-foreground text-primary-foreground"
                : "border-border bg-card text-foreground hover:border-foreground/30"
            }`}
            aria-pressed={followUp === "conversation"}
          >
            <Phone className="h-6 w-6 shrink-0" />
            <span className="text-sm font-semibold">
              Request a Follow-Up Conversation
            </span>
          </button>

          <button
            type="button"
            onClick={() => setFollowUp("portal")}
            className={`flex items-center gap-4 rounded-lg border-2 p-5 text-left transition-all ${
              followUp === "portal"
                ? "border-foreground bg-foreground text-primary-foreground"
                : "border-border bg-card text-foreground hover:border-foreground/30"
            }`}
            aria-pressed={followUp === "portal"}
          >
            <LinkIcon className="h-6 w-6 shrink-0" />
            <span className="text-sm font-semibold">
              Get Me a Portal Link to Send My First Case
            </span>
          </button>
        </div>
        {errors.followUp && (
          <p className="-mt-6 mb-6 text-sm text-destructive">{errors.followUp}</p>
        )}

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-foreground">
              Full Name <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-base text-foreground placeholder-muted-foreground transition-colors focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
              placeholder="John Smith"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-destructive">{errors.fullName}</p>
            )}
          </div>

          {/* Clinic Name */}
          <div>
            <label htmlFor="clinicName" className="mb-1.5 block text-sm font-medium text-foreground">
              Clinic Name <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              id="clinicName"
              name="clinicName"
              required
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-base text-foreground placeholder-muted-foreground transition-colors focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
              placeholder="ABC Dental Lab"
            />
            {errors.clinicName && (
              <p className="mt-1 text-sm text-destructive">{errors.clinicName}</p>
            )}
          </div>

          {/* Telephone */}
          <div>
            <label htmlFor="telephone" className="mb-1.5 block text-sm font-medium text-foreground">
              Telephone Number <span className="text-destructive">*</span>
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              required
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-base text-foreground placeholder-muted-foreground transition-colors focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
              placeholder="(807) 555-1234"
            />
            {errors.telephone && (
              <p className="mt-1 text-sm text-destructive">{errors.telephone}</p>
            )}
          </div>

          {/* Full Address */}
          <div>
            <label htmlFor="address" className="mb-1.5 block text-sm font-medium text-foreground">
              Full Address <span className="text-destructive">*</span>
            </label>
            <textarea
              id="address"
              name="address"
              required
              rows={3}
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-base text-foreground placeholder-muted-foreground transition-colors focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
              placeholder="123 Main St, Cochrane, AB, Canada"
            />
            {errors.address && (
              <p className="mt-1 text-sm text-destructive">{errors.address}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
              Email Address <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-base text-foreground placeholder-muted-foreground transition-colors focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
              placeholder="john@abcdental.ca"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          {/* Frames per month */}
          <div>
            <label htmlFor="frames" className="mb-1.5 block text-sm font-medium text-foreground">
              Approx. frames per month <span className="text-destructive">*</span>
            </label>
            <select
              id="frames"
              name="frames"
              required
              defaultValue=""
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-base text-foreground transition-colors focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
            >
              <option value="" disabled className="text-muted-foreground">
                Select an option...
              </option>
              <option value="less-than-10">Less than 10</option>
              <option value="10-20">{"10 – 20"}</option>
              <option value="20-30">{"20 – 30"}</option>
            </select>
            {errors.frames && (
              <p className="mt-1 text-sm text-destructive">{errors.frames}</p>
            )}
          </div>

          {/* Case method */}
          <div>
            <label htmlFor="caseMethod" className="mb-1.5 block text-sm font-medium text-foreground">
              How will your cases be sent? <span className="text-destructive">*</span>
            </label>
            <select
              id="caseMethod"
              name="caseMethod"
              required
              defaultValue=""
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-base text-foreground transition-colors focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
            >
              <option value="" disabled className="text-muted-foreground">
                Select an option...
              </option>
              <option value="courier">{"Option 1 — By Courier (Physical Models)"}</option>
              <option value="stl">{"Option 2 — STL Scans (Digital)"}</option>
            </select>
            {errors.caseMethod && (
              <p className="mt-1 text-sm text-destructive">{errors.caseMethod}</p>
            )}
          </div>

          {/* Follow-up radio */}
          <fieldset>
            <legend className="mb-3 text-sm font-medium text-foreground">
              How can we follow up with you? <span className="text-destructive">*</span>
            </legend>
            <div className="flex flex-col gap-3">
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="followUpRadio"
                  value="conversation"
                  checked={followUp === "conversation"}
                  onChange={() => setFollowUp("conversation")}
                  className="h-4 w-4 accent-foreground"
                />
                <span className="text-base text-foreground">Request a follow-up conversation</span>
              </label>
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="followUpRadio"
                  value="portal"
                  checked={followUp === "portal"}
                  onChange={() => setFollowUp("portal")}
                  className="h-4 w-4 accent-foreground"
                />
                <span className="text-base text-foreground">Get me a portal link to send my first case</span>
              </label>
            </div>
          </fieldset>

          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-foreground py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-foreground/90 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  )
}
