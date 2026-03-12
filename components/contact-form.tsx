"use client"

import { useState } from "react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (formData: FormData) => {
    const newErrors: Record<string, string> = {}
    
    const name = formData.get("name") as string
    const telephone = formData.get("telephone") as string
    const fileType = formData.get("fileType") as string
    const monthlyVolume = formData.get("monthlyVolume") as string

    if (!name || name.trim() === "") {
      newErrors.name = "Name is required."
    }

    if (!telephone || telephone.trim() === "") {
      newErrors.telephone = "Telephone is required."
    }

    if (!fileType) {
      newErrors.fileType = "Please select a file type."
    }

    if (!monthlyVolume) {
      newErrors.monthlyVolume = "Please select your monthly volume."
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
      <section className="bg-white py-16 lg:py-24" aria-label="Contact">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <h2 className="font-sans text-[clamp(1.5rem,3vw,2.25rem)] font-normal text-foreground">
            Thank You!
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {"We'll send your personal upload link shortly."}
          </p>
        </div>
      </section>
    )
  }

  const inputClass =
    "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-[15px] text-foreground placeholder-foreground/40 transition-colors focus:border-foreground focus:outline-none"

  const selectClass =
    "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-[15px] text-foreground transition-colors focus:border-foreground focus:outline-none"

  return (
    <section className="bg-white pt-36 pb-16 lg:pt-44 lg:pb-24" aria-label="Contact Form">
      <div className="mx-auto max-w-2xl px-5">
        <div className="mb-14 text-center">
          <h2 className="font-sans text-[clamp(1.5rem,3vw,2.5rem)] font-normal text-foreground">
            Get Started
          </h2>
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm text-muted-foreground mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={inputClass}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-destructive">{errors.name}</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-sm text-muted-foreground mb-1">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              className={inputClass}
            />
          </div>

          {/* City & Postal */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="city" className="block text-sm text-muted-foreground mb-1">City</label>
              <input
                type="text"
                id="city"
                name="city"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="postal" className="block text-sm text-muted-foreground mb-1">Postal Code</label>
              <input
                type="text"
                id="postal"
                name="postal"
                className={inputClass}
              />
            </div>
          </div>

          {/* Telephone */}
          <div>
            <label htmlFor="telephone" className="block text-sm text-muted-foreground mb-1">Telephone</label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              required
              className={inputClass}
            />
            {errors.telephone && (
              <p className="mt-1 text-sm text-destructive">{errors.telephone}</p>
            )}
          </div>

          {/* File Type */}
          <div>
            <label htmlFor="fileType" className="block text-sm text-muted-foreground mb-1">
              What kind of files will you send?
            </label>
            <select
              id="fileType"
              name="fileType"
              required
              className={selectClass}
              defaultValue=""
            >
              <option value="" disabled>Select an option</option>
              <option value="models">Models</option>
              <option value="scans">Scans</option>
            </select>
            {errors.fileType && (
              <p className="mt-1 text-sm text-destructive">{errors.fileType}</p>
            )}
          </div>

          {/* Monthly Volume */}
          <div>
            <label htmlFor="monthlyVolume" className="block text-sm text-muted-foreground mb-1">
              Approx how many frames per month are you currently providing to your clients?
            </label>
            <p className="text-xs text-muted-foreground mb-2">
              Our pricing depends on these factors for your special price per unit
            </p>
            <select
              id="monthlyVolume"
              name="monthlyVolume"
              required
              className={selectClass}
              defaultValue=""
            >
              <option value="" disabled>Select volume</option>
              <option value="0-10">0 - 10</option>
              <option value="10-20">10 - 20</option>
              <option value="30+">30+</option>
            </select>
            {errors.monthlyVolume && (
              <p className="mt-1 text-sm text-destructive">{errors.monthlyVolume}</p>
            )}
          </div>

          <div className="mt-6 text-center">
            <button
              type="submit"
              className="w-full border border-foreground bg-foreground px-8 py-3 text-sm font-medium tracking-wider text-background transition-colors hover:bg-transparent hover:text-foreground"
            >
              {"Let's Get Started and send me my personal link to upload files!"}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
