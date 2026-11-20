import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const SERVICES_OPTIONS = [
  "Pitch Decks",
  "Branding & Identity",
  "Web Design",
  "UI/UX Design",
  "AI Automation",
]

export default function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Branding & Identity",
  ])
  const [details, setDetails] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Animation trigger & reduced motion state
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReduced, setPrefersReduced] = useState(false)

  // Cursor-tracking state for the spotlight border
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  useEffect(() => {
    if (prefersReduced) {
      setIsVisible(true)
      return
    }

    const el = cardRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [prefersReduced])

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv))
    } else {
      setSelectedServices([...selectedServices, srv])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 600)
  }

  return (
    <section
      id="contact"
      className="relative bg-[#0A0A0A] text-white py-14 md:py-20 overflow-hidden border-t border-white/10"
    >
      {/* Scoped styles for tactile 2.5D/3D glass card & tactile controls */}
      <style>{`
        .contact-recessed-field {
          background: rgba(12, 12, 15, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.7), inset 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.04);
          color: #FFFFFF;
          transition: border-color 0.22s ease, box-shadow 0.22s ease, background 0.22s ease;
          outline: none;
        }
        .contact-recessed-field::placeholder {
          color: rgba(255, 255, 255, 0.32);
        }
        .contact-recessed-field:hover {
          border-color: rgba(255, 255, 255, 0.15);
        }
        .contact-recessed-field:focus {
          background: rgba(16, 16, 20, 0.95);
          border-color: #FF4D2D;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.8), 0 0 0 1px #FF4D2D, 0 0 20px -2px rgba(255, 77, 45, 0.4);
        }

        .service-keycap-pill {
          position: relative;
          background: linear-gradient(180deg, rgba(34, 34, 38, 0.85) 0%, rgba(18, 18, 20, 0.95) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.14), inset 0 -1px 1px rgba(0, 0, 0, 0.5);
          color: rgba(255, 255, 255, 0.72);
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
          transform: translateY(0);
          user-select: none;
        }
        .service-keycap-pill:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.2);
          color: #ffffff;
          box-shadow: 0 6px 14px -2px rgba(0, 0, 0, 0.75), inset 0 1px 1px rgba(255, 255, 255, 0.22);
        }
        .service-keycap-pill:active {
          transform: translateY(1px);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.7), inset 0 2px 3px rgba(0, 0, 0, 0.6);
        }
        .service-keycap-pill.is-selected {
          background: linear-gradient(180deg, rgba(255, 77, 45, 0.24) 0%, rgba(207, 35, 43, 0.15) 100%);
          border: 1px solid #FF4D2D;
          box-shadow: 0 0 18px -2px rgba(255, 77, 45, 0.45), inset 0 1px 2px rgba(255, 255, 255, 0.35), inset 0 -1px 1px rgba(0, 0, 0, 0.4);
          color: #ffffff;
          font-weight: 600;
        }
        .service-keycap-pill.is-selected:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 24px -1px rgba(255, 77, 45, 0.65), 0 6px 14px -2px rgba(0, 0, 0, 0.8), inset 0 1px 2px rgba(255, 255, 255, 0.45);
        }

        .contact-glossy-cta {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #FF5E3A 0%, #FF4D2D 48%, #CF232B 100%);
          border: 1px solid rgba(255, 255, 255, 0.22);
          box-shadow: 0 14px 30px -6px rgba(255, 77, 45, 0.58), 0 4px 10px -2px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.45), inset 0 -2px 4px rgba(0, 0, 0, 0.25);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1), filter 0.25s ease;
          transform: translateY(0);
        }
        .contact-glossy-cta:hover {
          transform: translateY(-2px);
          filter: brightness(1.05);
          box-shadow: 0 18px 40px -4px rgba(255, 77, 45, 0.72), 0 6px 16px -2px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.55);
        }
        .contact-glossy-cta:active {
          transform: translateY(1px) scale(0.995);
          box-shadow: 0 6px 16px -2px rgba(255, 77, 45, 0.45), inset 0 2px 4px rgba(0, 0, 0, 0.35);
        }
        .contact-glossy-cta::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 48%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0.04) 85%, transparent 100%);
          border-radius: 12px 12px 100px 100px / 12px 12px 24px 24px;
          pointer-events: none;
        }
      `}</style>

      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -top-40 right-0 w-[550px] h-[550px] bg-gradient-to-br from-coral/10 via-red/5 to-transparent rounded-full blur-3xl opacity-60" />
      <div className="pointer-events-none absolute -bottom-40 left-0 w-[550px] h-[550px] bg-gradient-to-tr from-coral/10 via-red/5 to-transparent rounded-full blur-3xl opacity-40" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-16 items-start">
          {/* Left Column: Heading, Info, Direct Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb / Tag */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-[12px] text-white/40">(06)</span>
              <span className="h-px w-8 bg-gradient-to-r from-coral to-red" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-red">
                Contact Us
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="mt-7 text-[clamp(2.5rem,5.5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.035em]">
              Ready to build something <br className="hidden sm:block" />
              that <span className="text-gradient">stands out?</span>
            </h2>

            {/* Subheading / Description */}
            <p className="mt-6 text-[17px] md:text-[18px] leading-relaxed text-white/65 max-w-xl">
              Whether it&apos;s a deck, a brand, a website, or an automation
              workflow, tell us about your project and we&apos;ll get back to
              you within 24 hours.
            </p>

            {/* Direct Contact Info */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">
                  Email Us
                </p>
                <a
                  href="mailto:hello@snapstudio.co"
                  className="mt-2 block text-[17px] font-semibold text-white hover:text-coral transition-colors tracking-tight"
                >
                  hello@snapstudio.co
                </a>
              </div>

              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">
                  Call Us
                </p>
                <a
                  href="tel:+15550192200"
                  className="mt-2 block text-[17px] font-semibold text-white hover:text-coral transition-colors tracking-tight font-mono"
                >
                  +1 (555) 019-2200
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium 2.5D/3D Tactile Dark Glass Card Container */}
          <div className="relative w-full">
            {/* Ambient red-orange glow behind the card (elevates it in 3D space) */}
            <div
              className="pointer-events-none absolute -inset-3 sm:-inset-6 rounded-[28px] md:rounded-[36px] opacity-75 blur-3xl transition-opacity duration-700"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(255, 77, 45, 0.22) 0%, rgba(207, 35, 43, 0.08) 50%, transparent 75%)",
              }}
            />

            {/* Main Form Card: Stationary without 3D tilt for comfortable typing */}
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              initial={
                prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }
              }
              animate={
                isVisible || prefersReduced
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 25 }
              }
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              style={{
                background:
                  "linear-gradient(145deg, rgba(28,28,30,0.9), rgba(12,12,14,0.98))",
                boxShadow:
                  "inset 0 1px 1px rgba(255,255,255,0.16), 0 30px 60px -15px rgba(0,0,0,0.9)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
              }}
              className="relative rounded-[14px] sm:rounded-[16px] md:rounded-[18px] lg:rounded-3xl border border-white/10 p-6 sm:p-8 md:p-10 overflow-hidden"
            >
              {/* Cursor-Tracking Border Spotlight in brand #FF4D2D */}
              <div
                className="pointer-events-none absolute -inset-[1px] rounded-[14px] sm:rounded-[16px] md:rounded-[18px] lg:rounded-3xl transition-opacity duration-300 z-10"
                style={{
                  opacity: isHovered ? 1 : 0,
                  background: `radial-gradient(360px circle at ${mousePos.x}px ${mousePos.y}px, #FF4D2D 0%, rgba(255, 77, 45, 0.35) 35%, transparent 70%)`,
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "1.2px",
                }}
              />

              {/* Ambient inner spotlight bloom */}
              <div
                className="pointer-events-none absolute inset-0 rounded-[14px] sm:rounded-[16px] md:rounded-[18px] lg:rounded-3xl transition-opacity duration-500 z-0"
                style={{
                  opacity: isHovered ? 0.06 : 0,
                  background: `radial-gradient(460px circle at ${mousePos.x}px ${mousePos.y}px, #FF4D2D 0%, transparent 70%)`,
                }}
              />

              {isSubmitted ? (
                <div className="relative z-20 py-14 text-center">
                  <div
                    className="mx-auto w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg, #FF5E3A 0%, #FF4D2D 50%, #CF232B 100%)",
                      boxShadow:
                        "0 10px 25px -4px rgba(255, 77, 45, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.4)",
                    }}
                  >
                    ✓
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white font-sans">
                    Message Received!
                  </h3>
                  <p className="mt-3 text-[15px] text-white/60 max-w-md mx-auto leading-relaxed font-sans">
                    Thank you,{" "}
                    <span className="text-white font-medium">{name}</span>.
                    We&apos;ve received your project details and will get back
                    to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setName("")
                      setEmail("")
                      setCompany("")
                      setDetails("")
                    }}
                    className="service-keycap-pill mt-8 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-mono uppercase tracking-wider text-white/80 hover:text-white cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-20 space-y-6">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-[11px] md:text-[11.5px] font-mono uppercase tracking-[0.14em] text-white/65 mb-2 font-medium">
                        Your Name <span className="text-[#FF4D2D] font-bold">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. John Doe"
                        className="contact-recessed-field w-full rounded-xl px-4 py-3.5 text-[15px] font-sans"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-[11px] md:text-[11.5px] font-mono uppercase tracking-[0.14em] text-white/65 mb-2 font-medium">
                        Email Address <span className="text-[#FF4D2D] font-bold">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. john@company.com"
                        className="contact-recessed-field w-full rounded-xl px-4 py-3.5 text-[15px] font-sans"
                      />
                    </div>
                  </div>

                  {/* Row 2: Company / Organization */}
                  <div>
                    <label htmlFor="contact-company" className="block text-[11px] md:text-[11.5px] font-mono uppercase tracking-[0.14em] text-white/65 mb-2 font-medium">
                      Company / Organization
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Acme Corp"
                      className="contact-recessed-field w-full rounded-xl px-4 py-3.5 text-[15px] font-sans"
                    />
                  </div>

                  {/* Row 3: What service do you need? (3D Keycap selection pills) */}
                  <div>
                    <div className="block text-[11px] md:text-[11.5px] font-mono uppercase tracking-[0.14em] text-white/65 mb-2.5 font-medium">
                      What service do you need?
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {SERVICES_OPTIONS.map((srv) => {
                        const isSelected = selectedServices.includes(srv)
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`service-keycap-pill rounded-lg px-3.5 py-2 text-[13px] font-bricolage cursor-pointer ${
                              isSelected ? "is-selected" : ""
                            }`}
                            style={{
                              fontFamily:
                                'var(--font-bricolage), "Bricolage Grotesque", sans-serif',
                            }}
                          >
                            {srv}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Row 4: Project Details */}
                  <div>
                    <label htmlFor="contact-details" className="block text-[11px] md:text-[11.5px] font-mono uppercase tracking-[0.14em] text-white/65 mb-2 font-medium">
                      Project Details
                    </label>
                    <textarea
                      id="contact-details"
                      name="details"
                      rows={4}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Tell us about your brand goals, roadmap, and what you want to achieve..."
                      className="contact-recessed-field w-full rounded-xl px-4 py-3.5 text-[15px] font-sans resize-none"
                    />
                  </div>

                  {/* Row 5: Glossy Elevated CTA Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="contact-glossy-cta group w-full inline-flex items-center justify-center gap-3 rounded-xl py-4 px-8 text-white font-bricolage font-semibold text-[15px] tracking-wide cursor-pointer disabled:opacity-60"
                      style={{
                        fontFamily:
                          'var(--font-bricolage), "Bricolage Grotesque", sans-serif',
                      }}
                    >
                      <span className="relative z-10 flex items-center gap-2.5">
                        <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                        <span
                          aria-hidden
                          className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5 inline-block text-[16px]"
                        >
                          →
                        </span>
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
