"use client"

import { useState } from "react"
import { Phone, Link as LinkIcon } from "lucide-react"

type FollowUpOption = "conversation" | "portal"

export function ContactForm() {
  const [followUp, setFollowUp] = useState<FollowUpOption | "">("")
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (formData: FormData) => {
    const newErrors: Record<string, string> = {}
    const fields = [
      { key: "fullName", label: "Name" },
      { key: "clinicName", label: "Clinic Name" },
      { key: "telephone", label: "Telephone #" },
      { key: "address", label: "Address (Full)" },
      { key: "email", label: "Email" },
      { key: "frames", label: "Approx. how many frames per month" },
      { key: "caseMethod", label: "How will your cases be sent?" },
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
      <section className="bg-background py-16 lg:py-24" aria-label="Contact">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-tight text-foreground">
            [Placeholder]
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {"[Placeholder]"}
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-background py-16 lg:py-24" aria-label="Contact Form">
      <div className="mx-auto max-w-2xl px-5">
        <div className="mb-10">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-tight text-foreground text-balance">
            [Placeholder]
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {"[Placeholder]"}
          </p>
        </div>

        {/* Follow-up option cards */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setFollowUp("conversation")}
            className={`flex items-center gap-3 rounded-md border-2 p-4 text-left transition-all ${
              followUp === "conversation"
                ? "border-primary bg-primary text-white"
                : "border-border bg-card text-foreground hover:border-primary/40"
            }`}
            aria-pressed={followUp === "conversation"}
          >
            <Phone className="h-5 w-5 shrink-0" />
            <span className="text-sm font-bold">
              Request a Follow-Up Conversation
            </span>
          </button>

          <button
            type="button"
            onClick={() => setFollowUp("portal")}
            className={`flex items-center gap-3 rounded-md border-2 p-4 text-left transition-all ${
              followUp === "portal"
                ? "border-primary bg-primary text-white"
                : "border-border bg-card text-foreground hover:border-primary/40"
            }`}
            aria-pressed={followUp === "portal"}
          >
            <LinkIcon className="h-5 w-5 shrink-0" />
            <span className="text-sm font-bold">
              Get Me a Portal Link to Send My First Case
            </span>
          </button>
        </div>
        {errors.followUp && (
          <p className="-mt-4 mb-4 text-sm text-destructive">{errors.followUp}</p>
        )}

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-foreground">
              Name <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              className="w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Your full name"
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
              className="w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Your clinic or lab name"
            />
            {errors.clinicName && (
              <p className="mt-1 text-sm text-destructive">{errors.clinicName}</p>
            )}
          </div>

          {/* Telephone */}
          <div>
            <label htmlFor="telephone" className="mb-1.5 block text-sm font-medium text-foreground">
              {"Telephone #"} <span className="text-destructive">*</span>
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              required
              className="w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="(555) 123-4567"
            />
            {errors.telephone && (
              <p className="mt-1 text-sm text-destructive">{errors.telephone}</p>
            )}
          </div>

          {/* Full Address */}
          <div>
            <label htmlFor="address" className="mb-1.5 block text-sm font-medium text-foreground">
              Address (Full) <span className="text-destructive">*</span>
            </label>
            <textarea
              id="address"
              name="address"
              required
              rows={3}
              className="w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Full mailing address"
            />
            {errors.address && (
              <p className="mt-1 text-sm text-destructive">{errors.address}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
              Email <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          {/* Frames per month */}
          <div>
            <label htmlFor="frames" className="mb-1.5 block text-sm font-medium text-foreground">
              Approx. how many frames per month <span className="text-destructive">*</span>
            </label>
            <select
              id="frames"
              name="frames"
              required
              defaultValue=""
              className="w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
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
              className="w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="" disabled className="text-muted-foreground">
                Select an option...
              </option>
              <option value="courier">{"Option 1 — By Courier (Models)"}</option>
              <option value="stl">{"Option 2 — STL Scans"}</option>
            </select>
            {errors.caseMethod && (
              <p className="mt-1 text-sm text-destructive">{errors.caseMethod}</p>
            )}
          </div>

          {/* Follow-up radio */}
          <fieldset>
            <legend className="mb-3 text-sm font-bold text-foreground">
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
                  className="h-4 w-4 accent-primary"
                />
                <span className="text-sm text-foreground">Request a follow-up conversation</span>
              </label>
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="followUpRadio"
                  value="portal"
                  checked={followUp === "portal"}
                  onChange={() => setFollowUp("portal")}
                  className="h-4 w-4 accent-primary"
                />
                <span className="text-sm text-foreground">Get me a portal link to send my first case</span>
              </label>
            </div>
          </fieldset>

          <button
            type="submit"
            className="mt-2 w-full rounded-md bg-primary py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            [Placeholder]
          </button>
        </form>
      </div>
    </section>
  )
}
