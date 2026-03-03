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

  {/* TODO: Connect to email notification service — Resend, Formspree, or EmailJS */}

  if (submitted) {
    return (
      <section id="contact" className="bg-[#1e1e1e] py-20 lg:py-28" aria-label="Contact">
        <div className="mx-auto max-w-2xl px-4 text-center lg:px-8">
          <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-white">
            Thank you!
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            {"We'll be in touch shortly."}
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="bg-[#1e1e1e] py-20 lg:py-28" aria-label="Send Your First Case">
      <div
        ref={ref}
        className={`mx-auto max-w-2xl px-4 lg:px-8 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="mb-10 text-center">
          <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-white text-balance">
            Send Your First Case
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
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
                ? "border-[#1e6fff] bg-[#1e6fff] text-white"
                : "border-white/20 bg-transparent text-white hover:border-white/40"
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
                ? "border-[#1e6fff] bg-[#1e6fff] text-white"
                : "border-white/20 bg-transparent text-white hover:border-white/40"
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
          <p className="-mt-6 mb-6 text-sm text-red-400">{errors.followUp}</p>
        )}

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-white/80">
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              className="w-full rounded-lg border border-white/15 bg-[#2a2a2a] px-4 py-3 text-base text-white placeholder-white/30 transition-colors focus:border-[#1e6fff] focus:outline-none focus:ring-1 focus:ring-[#1e6fff]"
              placeholder="John Smith"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>
            )}
          </div>

          {/* Clinic Name */}
          <div>
            <label htmlFor="clinicName" className="mb-1.5 block text-sm font-medium text-white/80">
              Clinic Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="clinicName"
              name="clinicName"
              required
              className="w-full rounded-lg border border-white/15 bg-[#2a2a2a] px-4 py-3 text-base text-white placeholder-white/30 transition-colors focus:border-[#1e6fff] focus:outline-none focus:ring-1 focus:ring-[#1e6fff]"
              placeholder="ABC Dental Lab"
            />
            {errors.clinicName && (
              <p className="mt-1 text-sm text-red-400">{errors.clinicName}</p>
            )}
          </div>

          {/* Telephone */}
          <div>
            <label htmlFor="telephone" className="mb-1.5 block text-sm font-medium text-white/80">
              Telephone Number <span className="text-red-400">*</span>
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              required
              className="w-full rounded-lg border border-white/15 bg-[#2a2a2a] px-4 py-3 text-base text-white placeholder-white/30 transition-colors focus:border-[#1e6fff] focus:outline-none focus:ring-1 focus:ring-[#1e6fff]"
              placeholder="(807) 555-1234"
            />
            {errors.telephone && (
              <p className="mt-1 text-sm text-red-400">{errors.telephone}</p>
            )}
          </div>

          {/* Full Address */}
          <div>
            <label htmlFor="address" className="mb-1.5 block text-sm font-medium text-white/80">
              Full Address <span className="text-red-400">*</span>
            </label>
            <textarea
              id="address"
              name="address"
              required
              rows={3}
              className="w-full rounded-lg border border-white/15 bg-[#2a2a2a] px-4 py-3 text-base text-white placeholder-white/30 transition-colors focus:border-[#1e6fff] focus:outline-none focus:ring-1 focus:ring-[#1e6fff]"
              placeholder="123 Main St, Cochrane, AB, Canada"
            />
            {errors.address && (
              <p className="mt-1 text-sm text-red-400">{errors.address}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white/80">
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-lg border border-white/15 bg-[#2a2a2a] px-4 py-3 text-base text-white placeholder-white/30 transition-colors focus:border-[#1e6fff] focus:outline-none focus:ring-1 focus:ring-[#1e6fff]"
              placeholder="john@abcdental.ca"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email}</p>
            )}
          </div>

          {/* Frames per month */}
          <div>
            <label htmlFor="frames" className="mb-1.5 block text-sm font-medium text-white/80">
              Approx. frames per month <span className="text-red-400">*</span>
            </label>
            <select
              id="frames"
              name="frames"
              required
              defaultValue=""
              className="w-full rounded-lg border border-white/15 bg-[#2a2a2a] px-4 py-3 text-base text-white transition-colors focus:border-[#1e6fff] focus:outline-none focus:ring-1 focus:ring-[#1e6fff]"
            >
              <option value="" disabled className="text-white/30">
                Select an option...
              </option>
              <option value="less-than-10">Less than 10</option>
              <option value="10-20">{"10 – 20"}</option>
              <option value="20-30">{"20 – 30"}</option>
            </select>
            {errors.frames && (
              <p className="mt-1 text-sm text-red-400">{errors.frames}</p>
            )}
          </div>

          {/* Case method */}
          <div>
            <label htmlFor="caseMethod" className="mb-1.5 block text-sm font-medium text-white/80">
              How will your cases be sent? <span className="text-red-400">*</span>
            </label>
            <select
              id="caseMethod"
              name="caseMethod"
              required
              defaultValue=""
              className="w-full rounded-lg border border-white/15 bg-[#2a2a2a] px-4 py-3 text-base text-white transition-colors focus:border-[#1e6fff] focus:outline-none focus:ring-1 focus:ring-[#1e6fff]"
            >
              <option value="" disabled className="text-white/30">
                Select an option...
              </option>
              <option value="courier">{"Option 1 — By Courier (Physical Models)"}</option>
              <option value="stl">{"Option 2 — STL Scans (Digital)"}</option>
            </select>
            {errors.caseMethod && (
              <p className="mt-1 text-sm text-red-400">{errors.caseMethod}</p>
            )}
          </div>

          {/* Follow-up radio */}
          <fieldset>
            <legend className="mb-3 text-sm font-medium text-white/80">
              How can we follow up with you? <span className="text-red-400">*</span>
            </legend>
            <div className="flex flex-col gap-3">
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="followUpRadio"
                  value="conversation"
                  checked={followUp === "conversation"}
                  onChange={() => setFollowUp("conversation")}
                  className="h-4 w-4 accent-[#1e6fff]"
                />
                <span className="text-base text-white/80">Request a follow-up conversation</span>
              </label>
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="followUpRadio"
                  value="portal"
                  checked={followUp === "portal"}
                  onChange={() => setFollowUp("portal")}
                  className="h-4 w-4 accent-[#1e6fff]"
                />
                <span className="text-base text-white/80">Get me a portal link to send my first case</span>
              </label>
            </div>
          </fieldset>

          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-[#1e6fff] py-4 text-base font-semibold text-white transition-colors hover:bg-[#1a5fd9] focus:outline-none focus:ring-2 focus:ring-[#1e6fff] focus:ring-offset-2 focus:ring-offset-[#1e1e1e]"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  )
}
