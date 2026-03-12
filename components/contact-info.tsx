export function ContactInfo() {
  return (
    <>
      {/* Contact Information */}
      <section className="bg-white py-16" aria-label="Contact Information">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="font-sans mb-10 text-center text-[clamp(1.5rem,3vw,2.5rem)] font-normal italic text-foreground">
            Contact Information
          </h2>

          <div className="grid border-t border-foreground/20 sm:grid-cols-3">
            {/* Phone */}
            <div className="border-b px-6 py-8 text-center sm:border-b-0 sm:border-r sm:border-foreground/20">
              <h3 className="text-base font-semibold text-foreground">Phone</h3>
              <a
                href="tel:+18076247222"
                className="mt-2 block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                807.624.7222
              </a>
            </div>

            {/* Email */}
            <div className="border-b px-6 py-8 text-center sm:border-b-0 sm:border-r sm:border-foreground/20">
              <h3 className="text-base font-semibold text-foreground">Email</h3>
              <a
                href="mailto:truenorthkromes@gmail.com"
                className="mt-2 block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                truenorthkromes@gmail.com
              </a>
            </div>

            {/* Address */}
            <div className="px-6 py-8 text-center">
              <h3 className="text-base font-semibold text-foreground">Address</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                107-105 1st Street W, Cochrane, Alberta, Canada, T4C0A4
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map -- full width like client */}
      <section aria-label="Map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2509.8!2d-114.4719!3d51.1891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371550793bcd42f%3A0x3d42f418b44e040b!2s105%201st%20St%20W%20%23107%2C%20Cochrane%2C%20AB%20T4C%200A4!5e0!3m2!1sen!2sca!4v1709500000000!5m2!1sen!2sca"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="True North Kromes - 107-105 1st Street W, Cochrane, Alberta"
          className="w-full"
        />
      </section>
    </>
  )
}
