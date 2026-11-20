import React, { useState, useEffect } from "react"

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
]

function WordFlip3D({ word }: { word: string }) {
  return (
    <span className="nav-3d-word-wrap">
      <span className="nav-3d-word nav-3d-word-front">{word}</span>
      <span className="nav-3d-word nav-3d-word-back" aria-hidden="true">
        {word}
      </span>
    </span>
  )
}

interface NavbarProps {
  scrolled?: boolean
  heroPassed?: boolean
  isLight?: boolean
  onNavigateHome?: () => void
}

export default function Navbar({
  scrolled: propScrolled,
  heroPassed: propHeroPassed,
  isLight: propIsLight,
  onNavigateHome,
}: NavbarProps) {
  const [internalScrolled, setInternalScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [flippedLink, setFlippedLink] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => {
      setInternalScrolled(window.scrollY > 80)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrolled = propScrolled !== undefined ? propScrolled : internalScrolled
  const isLight =
    propIsLight !== undefined ? propIsLight : propHeroPassed || false

  const handleNavClick = (href: string) => {
    setFlippedLink(null)
    requestAnimationFrame(() => {
      setFlippedLink(href)
    })
    setTimeout(() => {
      setFlippedLink((prev) => (prev === href ? null : prev))
    }, 600)

    // If currently on a subpage (e.g. #/work/... or #/category/...), navigate back to homepage hash
    if (
      window.location.hash.startsWith("#/work/") ||
      window.location.hash.startsWith("#/category/")
    ) {
      window.location.hash = href
    }
  }

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMobileOpen(false)

    // If currently on a subpage, navigate back home
    if (
      window.location.hash.startsWith("#/work/") ||
      window.location.hash.startsWith("#/category/")
    ) {
      window.location.hash = ""
      onNavigateHome?.()
    }

    // Scroll to the very top of the first screen so the full hero section is visible from its start
    const lenis = (window as any).__lenis
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none flex justify-center px-4 sm:px-6 md:px-8">
      {/* 
        Inner Navbar Container:
        Floating pill-style navbar across all breakpoints (mobile, tablet, desktop) with a subtle glass effect.
      */}
      <div
        className={`pointer-events-auto flex items-center justify-between transition-all duration-[360ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[max-width,height,border-radius,background-color,margin,padding,box-shadow] relative ${
          scrolled
            ? "mt-2.5 sm:mt-3 md:mt-4 h-[48px] sm:h-[54px] md:h-[58px] lg:h-[60px] w-[calc(100%-1.5rem)] sm:w-auto sm:max-w-[880px] lg:max-w-[920px] px-3.5 sm:px-5 md:px-6 lg:px-7 sm:gap-6 md:gap-8 lg:gap-10 rounded-full bg-[#0c0c0c]/90 backdrop-blur-2xl border border-white/18 shadow-[0_20px_48px_rgba(0,0,0,0.55),0_0_28px_rgba(242,114,86,0.16)] text-white"
            : `mt-2.5 sm:mt-3.5 md:mt-4 lg:mt-5 h-[48px] sm:h-[56px] md:h-[60px] lg:h-[62px] w-[calc(100%-1.5rem)] sm:w-auto sm:max-w-[880px] lg:max-w-[920px] mx-auto px-3.5 sm:px-5 md:px-6 lg:px-7 sm:gap-6 md:gap-8 lg:gap-10 rounded-full ${
                isLight
                  ? "bg-background/90 sm:bg-background/80 backdrop-blur-xl border border-border shadow-[0_12px_36px_-6px_rgba(0,0,0,0.12)] text-foreground"
                  : "bg-[#121214]/65 sm:bg-[#121214]/60 backdrop-blur-2xl border border-white/15 shadow-[0_16px_40px_-8px_rgba(0,0,0,0.45),0_0_24px_rgba(242,114,86,0.12)] text-white"
              }`
        }`}
      >
        {/* Brand Logo: emblem icon + Snap Studio wordmark */}
        <a
          href="#top"
          onClick={handleLogoClick}
          className="group flex items-center cursor-pointer shrink-0 select-none transition-all duration-[360ms] gap-2 sm:gap-2.5"
          aria-label="Snap Studio Homepage"
        >
          <img
            src="/images/logo-emblem.png"
            alt="Snap Studio"
            className="object-contain transition-all duration-[360ms] ease-[cubic-bezier(0.16,1,0.3,1)] shrink-0 w-[26px] h-[26px] sm:w-[32px] sm:h-[32px] md:w-[34px] md:h-[34px] lg:w-[36px] lg:h-[36px]"
          />
          <span
            className={`font-bricolage font-medium tracking-[-0.02em] transition-all duration-[360ms] inline-flex items-center leading-none text-[17px] sm:text-[19px] md:text-[20px] lg:text-[21px] ${
              isLight && !scrolled ? "text-foreground" : "text-white"
            }`}
            style={{
              fontFamily: 'var(--font-bricolage), "Bricolage Grotesque", sans-serif',
              fontWeight: 500,
            }}
          >
            Snap Studio
            <sup className="ml-0.5 font-medium align-super text-[10px] sm:text-[11px]">®</sup>
          </span>
        </a>

        {/* Desktop Navigation Links: sleek pill-proportioned typography and comfortable gap */}
        <nav
          className="hidden md:flex items-center transition-all duration-[360ms] ease-[cubic-bezier(0.16,1,0.3,1)] gap-6 md:gap-7 lg:gap-8"
        >
          {NAV_LINKS.map((n) => {
            const isFlipped = flippedLink === n.href

            return (
              <a
                key={n.href}
                href={n.href}
                onClick={() => handleNavClick(n.href)}
                className={`nav-3d-word-link relative py-1 font-sans select-none cursor-pointer transition-all duration-200 text-[14px] md:text-[14.5px] lg:text-[15px] font-medium tracking-[-0.01em] ${
                  isLight && !scrolled
                    ? "text-foreground hover:text-foreground/80"
                    : "text-white/90 hover:text-white"
                } ${isFlipped ? "is-flipped" : ""}`}
                style={{
                  fontFamily: 'var(--font-sans), "Geist", sans-serif',
                  textTransform: "none",
                  fontWeight: 500,
                }}
              >
                <WordFlip3D word={n.label} />
              </a>
            )
          })}
        </nav>

        {/* CTA Button & Mobile Toggle: on mobile, CTA is inside drawer and only hamburger is on the right */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Desktop & Tablet "Let's talk" CTA button (hidden on mobile, visible on md+) */}
          <a
            href="#contact"
            onClick={() => handleNavClick("#contact")}
            className={`hidden md:inline-flex group relative items-center gap-2 overflow-hidden rounded-full font-sans font-medium tracking-[-0.01em] transition-all duration-[360ms] ease-[cubic-bezier(0.16,1,0.3,1)] select-none cursor-pointer ${
              scrolled
                ? "h-[36px] sm:h-[38px] md:h-[40px] bg-gradient-to-r from-[#F27256] via-[#E85D42] to-[#CF232B] text-white px-3 sm:px-4 md:px-5 text-[12px] sm:text-[13px] md:text-[13.5px] shadow-[0_4px_18px_rgba(242,114,86,0.5),inset_0_1px_1px_rgba(255,255,255,0.35)] hover:shadow-[0_6px_24px_rgba(242,114,86,0.7)] hover:scale-[1.03] active:scale-[0.98]"
                : "bg-white text-black h-[36px] sm:h-[38px] md:h-[40px] px-3.5 sm:px-4.5 md:px-5 text-[12.5px] sm:text-[13px] md:text-[13.5px] hover:scale-[1.03] hover:shadow-[0_10px_24px_-4px_rgba(242,114,86,0.5)] shadow-sm active:scale-[0.98]"
            }`}
            style={{
              fontFamily: 'var(--font-sans), "Geist", sans-serif',
              textTransform: "none",
            }}
          >
            {/* Background hover shine in top state */}
            {!scrolled && (
              <span className="absolute inset-0 bg-gradient-to-r from-coral to-red opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            )}

            <span
              className={`relative z-10 transition-colors duration-300 ${
                !scrolled ? "group-hover:text-white" : "text-white"
              }`}
              style={{ textTransform: "none" }}
            >
              Let&apos;s talk
            </span>

            {/* Coral dot shown at top */}
            <span
              className={`relative z-10 rounded-full transition-all duration-300 hidden sm:block ${
                scrolled
                  ? "w-0 h-0 opacity-0 -mr-2 scale-0"
                  : "h-2 w-2 opacity-100 bg-[#f27256] group-hover:bg-white group-hover:scale-125 shrink-0"
              }`}
            />

            {/* Right arrow shown when floating */}
            <span
              className={`relative z-10 inline-flex items-center transition-all duration-300 ${
                scrolled
                  ? "w-3 sm:w-3.5 opacity-100 translate-x-0 group-hover:translate-x-0.5"
                  : "w-0 opacity-0 -translate-x-2 overflow-hidden pointer-events-none"
              }`}
            >
              <svg
                className="w-3 sm:w-3.5 h-3 sm:h-3.5"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </span>
          </a>

          {/* Mobile hamburger toggle button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
              isLight && !scrolled
                ? "border-border bg-card text-foreground"
                : "border-white/15 bg-white/10 text-white"
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Drawer Menu floating underneath the navbar with links and "Let's talk" button */}
        {mobileOpen && (
          <div
            className={`md:hidden absolute top-full inset-x-0 mt-2 p-4 sm:p-5 rounded-2xl backdrop-blur-2xl border transition-all shadow-[0_24px_50px_rgba(0,0,0,0.7)] ${
              isLight && !scrolled
                ? "bg-background/95 border-border text-foreground"
                : "bg-[#0c0c0c]/95 border-white/15 text-white"
            }`}
          >
            <div className="flex flex-col gap-1.5">
              {NAV_LINKS.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => {
                    handleNavClick(n.href)
                    setTimeout(() => setMobileOpen(false), 300)
                  }}
                  className={`nav-3d-word-link text-[15px] font-sans font-medium py-2.5 px-3 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between ${
                    isLight && !scrolled ? "text-foreground" : "text-white"
                  } ${flippedLink === n.href ? "is-flipped" : ""}`}
                  style={{
                    fontFamily: 'var(--font-sans), "Geist", sans-serif',
                  }}
                >
                  <WordFlip3D word={n.label} />
                  <span className="text-xs text-coral">→</span>
                </a>
              ))}

              {/* Clean divider */}
              <div
                className={`my-2 h-px ${
                  isLight && !scrolled ? "bg-border" : "bg-white/10"
                }`}
              />

              {/* Mobile "Let's talk" CTA button */}
              <a
                href="#contact"
                onClick={() => {
                  handleNavClick("#contact")
                  setTimeout(() => setMobileOpen(false), 300)
                }}
                className="group relative flex items-center justify-center gap-2 w-full py-3 px-5 rounded-full bg-white text-black font-sans font-medium text-[14px] hover:bg-white/95 active:scale-[0.98] transition-all shadow-md cursor-pointer mt-1"
                style={{
                  fontFamily: 'var(--font-sans), "Geist", sans-serif',
                }}
              >
                <span>Let&apos;s talk</span>
                <span className="h-2 w-2 rounded-full bg-[#f27256] shrink-0" />
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
