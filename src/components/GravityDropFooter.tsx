import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface SocialLink {
  id: string
  name: string
  href: string
  icon: React.ReactNode
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    name: "Instagram",
    href: "https://www.instagram.com",
    icon: (
      <svg
        className="w-5 h-5 stroke-current fill-none stroke-[2]"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    id: "behance",
    name: "Behance",
    href: "https://www.behance.net",
    icon: (
      <svg className="w-5 h-[18px] fill-current" viewBox="0 0 576 512">
        <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-92.1-137.4-92.1H0v357.8h147.9c88 0 145.5-35 145.5-115.3 0-40.4-23.7-65.4-61.4-76.4zM92 137h43.3c35 0 55.4 14.8 55.4 41.8 0 26.7-20.4 42.6-55.4 42.6H92V137zm49.9 203.2H92V279h49.9c38.3 0 60.4 16.5 60.4 43.1 0 26.6-22.1 43.1-60.4 43.1zM380.2 144.1H497v-38.4H380.2v38.4zm108.9 146.4c0-77.9-52.2-132.8-125.7-132.8-76.9 0-130.6 57.1-130.6 136.6 0 83.2 55.2 136.6 134.4 136.6 54.3 0 97.7-24.8 117-69.1l-44.4-23.2c-12 25.5-35.4 39.4-68.7 39.4-44.9 0-71.5-25.5-73.4-64.1h190.4c.7-7.7 1-15.7 1-23.4zm-191.7-22.5c4.1-37.1 29.8-59.5 65.8-59.5 33.7 0 57.9 21.6 62.2 59.5h-128z" />
      </svg>
    ),
  },
  {
    id: "dribbble",
    name: "Dribbble",
    href: "https://www.dribbble.com",
    icon: (
      <svg
        className="w-5 h-5 stroke-current fill-none stroke-[2]"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
        <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
        <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
      </svg>
    ),
  },
]

// Per-button start positions and rotations for the fall-rotate-bounce-settle entrance
const DROP_CONFIGS = [
  { x: -120, y: -200, rotate: -25, delay: 0 }, // LinkedIn
  { x: 0, y: -260, rotate: 18, delay: 0.12 }, // Instagram
  { x: 100, y: -180, rotate: -15, delay: 0.24 }, // Behance  (comes from below-right)
  { x: 220, y: -120, rotate: 30, delay: 0.36 }, // Dribbble
]

const CONNECT_CHARS = ["C", "o", "n", "n", "e", "c", "t"]

export default function GravityDropFooter() {
  const footerRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasConnectRevealed, setHasConnectRevealed] = useState(false)
  const [revealDone, setRevealDone] = useState(false)
  const [prefersReduced, setPrefersReduced] = useState(false)

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  // IntersectionObserver to re-trigger gravity drop entrance animation cleanly every time the user scrolls in,
  // and trigger the "Connect" letter reveal once.
  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
        if (entry.isIntersecting) {
          setHasConnectRevealed(true)
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <footer
      ref={footerRef}
      id="footer"
      className="relative w-full overflow-hidden select-none min-h-0 sm:min-h-[74vh] md:min-h-[76vh] flex flex-col justify-between"
      style={
        {
          "--coral": "#F27256",
          "--red": "#CF232B",
          "--black": "#000000",
          "--white": "#FFFFFF",
          background:
            "linear-gradient(135deg, var(--coral) 0%, var(--red) 100%)",
          color: "var(--white)",
          fontFamily: '"Geist", system-ui, -apple-system, sans-serif',
        } as React.CSSProperties
      }
    >
      {/* 1. Top Bar */}
      <div className="w-full px-6 sm:px-10 md:px-14 pt-4 pb-3 sm:pt-4.5 sm:pb-3.5 flex items-center justify-between text-[13px] sm:text-[14px] md:text-[15px] font-medium tracking-tight text-white shrink-0">
        <span>© 2026</span>
        <span>Let&apos;s work together.</span>
      </div>

      {/* Full-width 1px thin divider line */}
      <div className="w-full h-px bg-white/40 shrink-0" />

      {/* 2. Buttons Area — 2x2 equal grid on mobile, horizontal row on tablet/desktop */}
      <div className="relative z-20 w-full flex-none sm:flex-1 flex items-center justify-center px-4 sm:px-10 md:px-14 lg:px-20 pt-6 pb-6 sm:py-6 md:py-8 overflow-visible">
        <div className="w-full grid grid-cols-2 sm:flex sm:items-center sm:justify-between gap-2.5 sm:gap-4 max-w-[325px] sm:max-w-none mx-auto">
          {SOCIAL_LINKS.map((link, idx) => {
            const cfg = DROP_CONFIGS[idx]

            // Reduced-motion: simple opacity fade, no movement
            if (prefersReduced) {
              return (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  style={{
                    fontFamily:
                      'var(--font-bricolage), "Bricolage Grotesque", sans-serif',
                  }}
                  className="will-change-transform inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full w-full sm:w-auto px-4 py-2.5 sm:px-8 sm:py-4 md:px-9 md:py-4 text-[13.5px] sm:text-[16px] md:text-[17px] font-bricolage font-semibold tracking-tight no-underline border-[1.5px] border-white bg-transparent text-white cursor-pointer transition-[background-color,color,border-color,box-shadow] duration-200 ease-out hover:bg-black hover:text-white hover:border-black active:bg-black active:text-white active:border-black focus:bg-black focus:text-white focus:border-black focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 select-none shadow-sm"
                >
                  <span className="shrink-0 text-current">{link.icon}</span>
                  <span
                    className="leading-none font-bricolage"
                    style={{
                      fontFamily:
                        'var(--font-bricolage), "Bricolage Grotesque", sans-serif',
                    }}
                  >
                    {link.name}
                  </span>
                </motion.a>
              )
            }

            // Full animation: fall from unique position/rotation → land → wobble settle
            return (
              <motion.a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{
                  x: cfg.x,
                  y: cfg.y,
                  rotate: cfg.rotate,
                  scale: 0.6,
                  opacity: 0,
                }}
                animate={
                  isVisible
                    ? {
                        x: 0,
                        y: 0,
                        rotate: [cfg.rotate, 0, 3, -2, 0],
                        scale: [0.6, 1.08, 1, 1.02, 1],
                        opacity: 1,
                      }
                    : {
                        x: cfg.x,
                        y: cfg.y,
                        rotate: cfg.rotate,
                        scale: 0.6,
                        opacity: 0,
                      }
                }
                transition={
                  isVisible
                    ? {
                        x: {
                          type: "spring",
                          stiffness: 180,
                          damping: 14,
                          mass: 0.8,
                          delay: cfg.delay,
                        },
                        y: {
                          type: "spring",
                          stiffness: 180,
                          damping: 14,
                          mass: 0.8,
                          delay: cfg.delay,
                        },
                        rotate: {
                          duration: 0.9,
                          ease: [0.34, 1.56, 0.64, 1],
                          delay: cfg.delay,
                          times: [0, 0.6, 0.75, 0.88, 1],
                        },
                        scale: {
                          duration: 0.9,
                          ease: [0.34, 1.56, 0.64, 1],
                          delay: cfg.delay,
                          times: [0, 0.55, 0.7, 0.85, 1],
                        },
                        opacity: {
                          duration: 0.3,
                          ease: "easeOut",
                          delay: cfg.delay,
                        },
                      }
                    : { duration: 0.25, ease: "easeIn" }
                }
                style={{
                  willChange: "transform, opacity",
                  fontFamily:
                    'var(--font-bricolage), "Bricolage Grotesque", sans-serif',
                }}
                className="will-change-transform inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full w-full sm:w-auto px-4 py-2.5 sm:px-8 sm:py-4 md:px-9 md:py-4 text-[13.5px] sm:text-[16px] md:text-[17px] font-bricolage font-semibold tracking-tight no-underline border-[1.5px] border-white bg-transparent text-white cursor-pointer transition-[background-color,color,border-color,box-shadow] duration-200 ease-out hover:bg-black hover:text-white hover:border-black active:bg-black active:text-white active:border-black focus:bg-black focus:text-white focus:border-black focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 select-none shadow-sm"
              >
                <span className="shrink-0 text-current">{link.icon}</span>
                <span
                  className="leading-none font-bricolage"
                  style={{
                    fontFamily:
                      'var(--font-bricolage), "Bricolage Grotesque", sans-serif',
                  }}
                >
                  {link.name}
                </span>
              </motion.a>
            )
          })}
        </div>
      </div>

      {/* 3. Word "Connect" — fully visible, well placed with safe bottom clearance on mobile */}
      <div className="relative z-10 w-full flex items-end justify-center pointer-events-none overflow-visible shrink-0 pb-6 sm:pb-0 px-4 sm:px-0">
        <h2
          className="w-full text-center font-extrabold tracking-[-0.035em] text-white m-0 p-0 select-none pointer-events-none leading-[0.92] sm:leading-[0.82]"
          style={{
            fontFamily:
              'var(--font-sans), "Geist", system-ui, -apple-system, sans-serif',
            fontSize: "clamp(3.1rem, 15vw, 18.5rem)",
            fontWeight: 800,
          }}
        >
          {CONNECT_CHARS.map((char, index) => (
            <span
              key={index}
              className={`inline-block align-baseline ${
                revealDone ? "overflow-visible" : "overflow-hidden"
              }`}
              style={{
                paddingTop: "0.15em",
                marginTop: "-0.15em",
                paddingBottom: "0.02em",
              }}
            >
              <motion.span
                className="inline-block will-change-transform"
                initial={prefersReduced ? { y: "0%" } : { y: "115%" }}
                animate={
                  hasConnectRevealed || prefersReduced
                    ? { y: "0%" }
                    : { y: "115%" }
                }
                transition={{
                  duration: prefersReduced ? 0 : 0.8,
                  delay: prefersReduced ? 0 : index * 0.048,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onAnimationComplete={() => {
                  if (index === CONNECT_CHARS.length - 1) {
                    setRevealDone(true)
                  }
                }}
              >
                <span
                  className={`connect-char inline-block will-change-transform select-none cursor-default pointer-events-auto ${
                    revealDone && !prefersReduced ? "connect-char-hoverable" : ""
                  }`}
                >
                  {char}
                </span>
              </motion.span>
            </span>
          ))}
        </h2>
      </div>
    </footer>
  )
}
