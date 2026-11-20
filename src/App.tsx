import { useEffect, useRef, useState, lazy, Suspense } from "react"
import { assetUrl } from "@/utils/asset"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Emblem from "@/components/Emblem"
import InteractiveViewAllButton from "@/components/InteractiveViewAllButton"
import InteractiveServicesSection from "@/components/InteractiveServicesSection"
import LinearReviewsCarousel from "@/components/LinearReviewsCarousel"
import ContactSection from "@/components/ContactSection"
import HorizontalProcessSection from "@/components/HorizontalProcessSection"
import GravityDropFooter from "@/components/GravityDropFooter"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import { getProjectBySlug, PROJECTS } from "@/data/projects"

// Lazy-load heavy subpages so initial mobile page loads blazing fast
const CaseStudyPage = lazy(() => import("@/components/case-study/CaseStudyPage"))
const ServiceCategoryPage = lazy(() => import("@/components/category/ServiceCategoryPage"))

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

import snapLogo from "@/imports/snap-studio-logo.png"
import logoAirbnb from "@/imports/logo-airbnb.png"
import logoJPMorgan from "@/imports/logo-jpmorgan.png"
import logoMicrosoft from "@/imports/logo-microsoft.png"
import logoSalesforce from "@/imports/logo-salesforce.png"
import logoNike from "@/imports/logo-nike.png"

import image19 from "@/imports/image-19.png"
import image20 from "@/imports/image-20.png"
import image21 from "@/imports/image-21.png"
import image22 from "@/imports/image-22.png"
import image23 from "@/imports/image-23.png"
import image24 from "@/imports/image-24.png"
import image1 from "@/imports/image-1.png"
import image2 from "@/imports/image-2.png"
import image3 from "@/imports/image-3.png"

import heroHeadAway from "@/imports/hero-head-away.jpg"
import heroHeadFront from "@/imports/hero-head-front.jpg"
import bottomCard1 from "@/imports/bottom-card-1.jpg"
import bottomCard2 from "@/imports/bottom-card-2.jpg"
import bottomCard3 from "@/imports/bottom-card-3.jpg"
import bottomCard4 from "@/imports/bottom-card-4.png"
import topRef1 from "@/imports/top-ref-1.jpg"
import topRef2 from "@/imports/top-ref-2.jpg"
import topRef3 from "@/imports/top-ref-3.jpg"
import topRef4 from "@/imports/top-ref-4.jpg"
import middleRef1 from "@/imports/middle-ref-1.png"
import middleRef3 from "@/imports/middle-ref-3.png"
import middleRef4 from "@/imports/middle-ref-4.png"
import {
  aivonImages,
  wildflowerImages,
  finoraImages,
} from "@/assets/social-media"

const img = (id: string, w = 1200) =>
  id.includes("/") || id.startsWith("data:")
    ? id
    : `https://images.unsplash.com/${id}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=${w}`

const lerp = (a: number, b: number, t: number) => a + (b - a) * t
const smooth = (t: number) => t * t * (3 - 2 * t)

const HERO_SHOWCASE_IMAGES = [
  topRef2, // Lithosquare AI Geosciences
  middleRef4, // DriveBerry app
  aivonImages.cover, // Aivon Mindful Living
  wildflowerImages.cover, // Wildflower Atelier Botanical Couture
  middleRef1, // Luxury Yacht Charter
  finoraImages.cover, // Finora Haute Horlogerie
  bottomCard1, // Hando Parisian Handroll
  bottomCard4, // TransCure bioServices
  bottomCard2, // Voiture Sur Mesure
  middleRef3, // KNKO Architectural Bureau
]

const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
]

/* ---------- scroll reveal ---------- */
function useReveal(isSubpage: boolean) {
  useEffect(() => {
    if (isSubpage) return

    const markAllVisible = () => {
      const els = Array.from(
        document.querySelectorAll<HTMLElement>(".reveal, .scale-in"),
      )
      els.forEach((el) => {
        el.classList.add("in")
      })
    }

    markAllVisible()
    const t1 = setTimeout(markAllVisible, 50)
    const t2 = setTimeout(markAllVisible, 300)

    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .scale-in"),
    )
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in")
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.01, rootMargin: "0px 0px 50px 0px" },
    )
    els.forEach((el) => {
      el.classList.add("in")
      io.observe(el)
    })

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      io.disconnect()
    }
  }, [isSubpage])
}

/* ---------- top progress + nav state ---------- */
function useScrollProgress() {
  const [p, setP] = useState(0)
  const [y, setY] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setP(max > 0 ? h.scrollTop / max : 0)
      setY(window.scrollY)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return { p, y }
}

/* ============================================================= */
export default function App() {
  const [activeProjectSlug, setActiveProjectSlug] = useState<string | null>(
    () => {
      if (typeof window !== "undefined") {
        const hash = window.location.hash
        if (hash.startsWith("#/work/")) {
          return hash.replace("#/work/", "").split("?")[0]
        }
      }
      return null
    },
  )

  const [activeCategorySlug, setActiveCategorySlug] = useState<string | null>(
    () => {
      if (typeof window !== "undefined") {
        const hash = window.location.hash
        if (hash.startsWith("#/category/")) {
          return hash.replace("#/category/", "").split("?")[0]
        }
      }
      return null
    },
  )

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash
      if (hash.startsWith("#/work/")) {
        const slug = hash.replace("#/work/", "").split("?")[0]
        setActiveProjectSlug(slug)
        setActiveCategorySlug(null)
      } else if (hash.startsWith("#/category/")) {
        const slug = hash.replace("#/category/", "").split("?")[0]
        setActiveCategorySlug(slug)
        setActiveProjectSlug(null)
      } else {
        if (activeProjectSlug) setActiveProjectSlug(null)
        if (activeCategorySlug) setActiveCategorySlug(null)
      }
    }
    window.addEventListener("hashchange", handleHash)
    return () => window.removeEventListener("hashchange", handleHash)
  }, [activeProjectSlug, activeCategorySlug])

  const handleSelectProject = (slug: string) => {
    setActiveProjectSlug(slug)
    window.location.hash = `#/work/${slug}`
  }

  const handleSelectCategory = (slug: string) => {
    setActiveCategorySlug(slug)
    setActiveProjectSlug(null)
    window.location.hash = `#/category/${slug}`
  }

  const handleBackToServices = () => {
    setActiveCategorySlug(null)
    setActiveProjectSlug(null)
    window.location.hash = "#services"
    setTimeout(() => {
      const el = document.getElementById("services")
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }, 50)
  }

  const handleBackToWork = () => {
    setActiveProjectSlug(null)
    if (activeCategorySlug) {
      window.location.hash = `#/category/${activeCategorySlug}`
    } else {
      window.location.hash = "#portfolio"
    }
  }

  const isSubpage = Boolean(activeProjectSlug || activeCategorySlug)
  useReveal(isSubpage)
  const { p, y } = useScrollProgress()
  const heroPassed =
    typeof window !== "undefined" ? y > window.innerHeight * 2.7 : false
  const scrolled = y > 80

  // Initialize Lenis for luxurious buttery-smooth momentum scrolling
  useEffect(() => {
    if (isSubpage) return
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.8,
      infinite: false,
    })
    ;(window as any).__lenis = lenis

    lenis.on("scroll", ScrollTrigger.update)
    const onTicker = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(onTicker)
    gsap.ticker.lagSmoothing(0)

    return () => {
      ;(window as any).__lenis = null
      gsap.ticker.remove(onTicker)
      lenis.destroy()
    }
  }, [isSubpage])

  const handleNavigateHome = () => {
    setActiveProjectSlug(null)
    setActiveCategorySlug(null)
    window.location.hash = ""
  }

  if (activeProjectSlug) {
    const currentProject = getProjectBySlug(activeProjectSlug) || PROJECTS[0]
    return (
      <Suspense fallback={<div className="min-h-screen bg-[#0A0A0B]" />}>
        <CaseStudyPage
          project={currentProject}
          onBack={handleBackToWork}
          onNavigate={(path) => {
            if (path.startsWith("/work/") || path.startsWith("#/work/")) {
              const slug = path.replace("/work/", "").replace("#/work/", "")
              setActiveProjectSlug(slug)
              window.location.hash = `#/work/${slug}`
            } else {
              handleBackToWork()
            }
          }}
        />
      </Suspense>
    )
  }

  if (activeCategorySlug) {
    return (
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <ServiceCategoryPage
          serviceSlug={activeCategorySlug}
          onSelectProject={(slug) => handleSelectProject(slug)}
          onBack={handleBackToServices}
        />
      </Suspense>
    )
  }

  return (
    <div
      className="min-h-screen bg-background text-foreground w-full max-w-full overflow-x-hidden"
      style={{ overflowX: "hidden", maxWidth: "100%" }}
    >
      {/* progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent">
        <div
          className="h-full origin-left bg-gradient-to-r from-coral to-red"
          style={{ transform: `scaleX(${p})` }}
        />
      </div>

      <Navbar
        scrolled={scrolled}
        heroPassed={heroPassed}
        onNavigateHome={handleNavigateHome}
      />
      <HeroSection
        portfolioImages={HERO_SHOWCASE_IMAGES}
        onScrollToPortfolio={() => {
          const el = document.getElementById("portfolio")
          if (el) el.scrollIntoView({ behavior: "smooth" })
        }}
        onStartProject={() => {
          const el = document.getElementById("contact")
          if (el) el.scrollIntoView({ behavior: "smooth" })
        }}
        onSelectProject={handleSelectProject}
      />
      <IntroStatement />
      <Clients />
      <Portfolio onSelectProject={handleSelectProject} />
      <Services onSelectService={handleSelectCategory} />
      <Process />
      <Reviews />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}

/* ---------------- INTRO STATEMENT ---------------- */
const ABOUT_WORDS = [
  { text: "Human", isAccent: false },
  { text: "creativity.", isAccent: false },
  { text: "AI", isAccent: true },
  { text: "speed.", isAccent: true },
  { text: "Work", isAccent: false },
  { text: "that", isAccent: false },
  { text: "stands", isAccent: false },
  { text: "out.", isAccent: false },
]

function IntroStatement() {
  const sectionRef = useRef<HTMLElement>(null)
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([])
  const [subtextVisible, setSubtextVisible] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    if (prefersReducedMotion) {
      setSubtextVisible(true)
      wordRefs.current.forEach((el) => {
        if (el) el.style.opacity = "1"
      })
      return
    }

    const section = sectionRef.current
    if (!section) return

    // Subtext fade-once observer (fires once when section enters viewport)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSubtextVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.15 },
    )
    observer.observe(section)

    let rafId: number | null = null

    const updateWordReveal = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight
      const rect = section.getBoundingClientRect()

      // Start: section's top edge enters the bottom of the viewport
      const startY = vh
      // End: reveal reaches 100% while section is comfortably fully on screen, well before scrolling out
      const endY = vh * 0.18
      const travel = Math.max(100, startY - endY)

      let progress = (startY - rect.top) / travel
      if (progress < 0) progress = 0
      if (progress > 1) progress = 1

      // Smooth word-by-word wave effect with slight overlap between words (opacity only)
      const step = 0.1
      const duration = 0.22
      const baseOpacity = 0.2

      wordRefs.current.forEach((el, i) => {
        if (!el) return
        const wordStart = i * step
        const wordEnd = wordStart + duration

        let wordProgress = (progress - wordStart) / (wordEnd - wordStart)
        if (wordProgress < 0) wordProgress = 0
        if (wordProgress > 1) wordProgress = 1

        const opacity = baseOpacity + (1 - baseOpacity) * wordProgress
        el.style.opacity = opacity.toFixed(3)
      })

      rafId = null
    }

    const handleScrollOrResize = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateWordReveal)
      }
    }

    // Initial calculation on mount
    updateWordReveal()

    window.addEventListener("scroll", handleScrollOrResize, { passive: true })
    window.addEventListener("resize", handleScrollOrResize, { passive: true })

    return () => {
      observer.disconnect()
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId)
      }
      window.removeEventListener("scroll", handleScrollOrResize)
      window.removeEventListener("resize", handleScrollOrResize)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="mx-auto max-w-[1600px] px-6 md:px-10 py-28 md:py-40 flex flex-col items-center justify-center text-center"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Eyebrow / Tag: "ABOUT" small type matching 2nd ref picture */}
        <p className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.22em] text-red text-center">
          About
        </p>

        {/* Centered Headline with word-by-word scroll reveal and AI speed in gradient */}
        <h2 className="mt-6 text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.98] tracking-[-0.04em] font-sans font-semibold text-foreground">
          {ABOUT_WORDS.map((w, i) => (
            <span key={i}>
              <span
                ref={(el) => {
                  wordRefs.current[i] = el
                }}
                className={`inline-block will-change-[opacity] ${
                  w.isAccent ? "text-gradient" : ""
                }`}
                style={{ opacity: 0.2 }}
              >
                {w.text}
              </span>
              {i < ABOUT_WORDS.length - 1 ? " " : ""}
            </span>
          ))}
        </h2>

        {/* Centered Description Paragraph (fade-once entrance) */}
        <p
          className={`mt-7 max-w-2xl mx-auto text-[18px] md:text-[20px] leading-relaxed text-muted-foreground transition-all duration-700 ease-out ${
            subtextVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          From pitch decks and brands to websites and AI automation workflows,
          we help businesses look sharper and run smarter.
        </p>

        {/* Single "More about us" Pill Button */}
        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-black px-7 py-3.5 text-[14px] md:text-[15px] font-bricolage font-semibold text-white transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_10px_28px_-6px_rgba(242,114,86,0.45)] active:scale-[0.98]"
            style={{
              fontFamily:
                'var(--font-bricolage), "Bricolage Grotesque", sans-serif',
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-coral to-red opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative z-10 block h-1.5 w-1.5 rounded-full bg-white transition-transform duration-300 group-hover:scale-150" />
            <span
              className="relative z-10 transition-colors duration-300"
              style={{
                fontFamily:
                  'var(--font-bricolage), "Bricolage Grotesque", sans-serif',
              }}
            >
              More about us
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

/* ---------------- CLIENTS (linear marquee right-to-left animation) ---------------- */
const CLIENT_LOGOS = [
  {
    name: "Microsoft",
    src: logoMicrosoft,
    className: "h-5 md:h-6 w-auto object-contain",
  },
  {
    name: "Nike",
    src: logoNike,
    className: "h-6 md:h-7 w-auto object-contain",
  },
  {
    name: "Airbnb",
    src: logoAirbnb,
    className: "h-7 md:h-8 w-auto object-contain",
  },
  {
    name: "Salesforce",
    src: logoSalesforce,
    className: "h-7 md:h-8 w-auto object-contain",
  },
  {
    name: "JPMorgan Chase & Co.",
    src: logoJPMorgan,
    className: "h-4 md:h-5 w-auto object-contain",
  },
]

function Clients() {
  // Repeat the 5 logos 3 times so each track has 15 items for a rich, continuous marquee
  const logoSet = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS]

  return (
    <section className="bg-background overflow-hidden reveal">
      {/* Centered "Trusted By" with compact, clean padding */}
      <div className="pt-7 pb-4 flex justify-center items-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-red text-center">
          Trusted By
        </p>
      </div>

      {/* Bordered full-width marquee strip with top and bottom border lines framing the logos */}
      <div className="border-y border-border py-4 md:py-5 overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track flex w-max items-center gap-14 md:gap-20 py-1 select-none">
          {/* First track */}
          {logoSet.map((item, idx) => (
            <div
              key={`client-logo-1-${idx}`}
              className="flex items-center justify-center shrink-0 px-2 group"
            >
              <img
                src={item.src}
                alt={item.name}
                width="160"
                height="40"
                className={`${item.className} opacity-50 contrast-125 transition-all duration-300 group-hover:opacity-90`}
                decoding="async"
              />
            </div>
          ))}
          {/* Duplicate track for seamless infinite -50% translateX loop */}
          {logoSet.map((item, idx) => (
            <div
              key={`client-logo-2-${idx}`}
              className="flex items-center justify-center shrink-0 px-2 group"
              aria-hidden="true"
            >
              <img
                src={item.src}
                alt={item.name}
                width="160"
                height="40"
                className={`${item.className} opacity-50 contrast-125 transition-all duration-300 group-hover:opacity-90`}
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- LATEST PROJECTS (Infinite Looping Carousel) ---------------- */
const LATEST_PROJECTS_LIST = [
  {
    id: "knko",
    name: "KNKO Architectural Bureau",
    category: "Architecture & Strategic Plan",
    img: assetUrl("/work/knko/Slide1.PNG"),
    hideLogo: true,
    icon: null,
  },
  {
    id: "driveberry",
    name: "DriveBerry",
    category: "Mobile App & Product Design",
    img: assetUrl("/work/driveberry/Slide1.PNG"),
    hideLogo: true,
    icon: null,
  },
  {
    id: "euphorixz",
    name: "Euphorixz",
    category: "Science-Backed Supplements",
    img: assetUrl("/work/euphorixz/Slide1.PNG"),
    hideLogo: true,
    icon: null,
  },
  {
    id: "bluemore",
    name: "Blue More Yachting",
    category: "Luxury Yacht Charter & Hospitality",
    img: assetUrl("/work/bluemore/Slide1.PNG"),
    hideLogo: true,
    icon: null,
  },
  {
    id: "nodaliq",
    name: "NODALiQ",
    category: "Logo Design & Brand Identity",
    img: assetUrl("/work/nodaliq/nodaliq-14.webp"),
    hideLogo: true,
    icon: null,
  },
  {
    id: "axorix",
    name: "Axorix",
    category: "Logo Design & Brand Identity",
    img: assetUrl("/work/axorix/imageye___-_imgi_15_f95a7.webp"),
    hideLogo: true,
    icon: null,
  },
  {
    id: "aivon",
    name: "Aivon",
    category: "Social Media Design & Content",
    img: assetUrl("/work/aivon/thumbnail.png"),
    hideLogo: true,
    icon: null,
  },
]

function Portfolio({
  onSelectProject,
}: {
  onSelectProject?: (id: string) => void
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const virtualIndexRef = useRef(0)
  const activeIndexRef = useRef(0)
  const dragOffsetRef = useRef(0)
  const [isDragging, setIsDragging] = useState(false)
  const startXRef = useRef(0)
  const isSwipingRef = useRef(false)
  const didDragRef = useRef(false)

  const headingRef = useRef<HTMLHeadingElement>(null)
  const expertiseRef = useRef<HTMLDivElement>(null)
  const carouselWrapperRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<ScrollTrigger | null>(null)

  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const dotRefs = useRef<(HTMLButtonElement | null)[]>([])
  const counterRef = useRef<HTMLSpanElement>(null)

  const total = LATEST_PROJECTS_LIST.length

  // Custom cursor follower
  const cursorRef = useRef<HTMLDivElement>(null)
  const xTo = useRef<gsap.QuickToFunc | null>(null)
  const yTo = useRef<gsap.QuickToFunc | null>(null)

  useEffect(() => {
    if (cursorRef.current) {
      gsap.set(cursorRef.current, {
        xPercent: -50,
        yPercent: -50,
        opacity: 0,
        scale: 0.6,
        pointerEvents: "none",
      })
      xTo.current = gsap.quickTo(cursorRef.current, "x", {
        duration: 0.35,
        ease: "power3",
      })
      yTo.current = gsap.quickTo(cursorRef.current, "y", {
        duration: 0.35,
        ease: "power3",
      })
    }

    const onMouseMove = (e: MouseEvent) => {
      if (xTo.current && yTo.current) {
        xTo.current(e.clientX)
        yTo.current(e.clientY)
      }
    }
    window.addEventListener("mousemove", onMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMouseMove)
  }, [])

  // Update card transforms, opacity, scale, and z-index directly on DOM for ultra-smooth 60/120fps motion
  const applyTransforms = (v: number, offset = dragOffsetRef.current) => {
    cardRefs.current.forEach((el, idx) => {
      if (!el) return
      let diff = idx - v
      while (diff > total / 2) diff -= total
      while (diff < -total / 2) diff += total

      const absDiff = Math.abs(diff)
      const isVisible = absDiff <= 1.35
      const scale = Math.max(0.72, 1 - Math.min(absDiff, 1.5) * 0.15)

      let opacity = 1
      if (absDiff > 1.05) {
        opacity = Math.max(0, 1 - (absDiff - 1.05) * 2.2)
      }

      const zIndex = Math.round(30 - Math.min(absDiff, 2.5) * 8)
      const rotate = isDragging || offset !== 0 ? offset * 0.016 : 0

      el.style.transform = `translate(calc(-50% + ${diff} * (92.5% + 36px) + ${offset}px), 0) scale(${scale}) rotate(${rotate}deg)`
      el.style.opacity = String(opacity)
      el.style.zIndex = String(zIndex)
      el.style.pointerEvents = isVisible ? "auto" : "none"
    })

    // Update counter text (01/07)
    const centerIdx = Math.min(total - 1, Math.max(0, Math.round(v)))
    if (counterRef.current) {
      counterRef.current.textContent =
        centerIdx + 1 < 10 ? `0${centerIdx + 1}` : `${centerIdx + 1}`
    }

    // Update dots
    dotRefs.current.forEach((dot, i) => {
      if (!dot) return
      if (i === centerIdx) {
        dot.className =
          "h-2 rounded-full transition-all duration-300 w-8 bg-foreground"
      } else {
        dot.className =
          "h-2 rounded-full transition-all duration-300 w-2 bg-foreground/25 hover:bg-foreground/50"
      }
    })
  }

  // Scroll-triggered pinning & horizontal scroll-scrubbed cards
  useEffect(() => {
    const wrapper = carouselWrapperRef.current
    if (!wrapper) return

    const ctx = gsap.context(() => {
      const trigger = ScrollTrigger.create({
        trigger: wrapper,
        start: "top top",
        end: "+=2400",
        pin: true,
        anticipatePin: 1,
        scrub: 0.8,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const v = self.progress * (total - 1)
          virtualIndexRef.current = v
          applyTransforms(v)

          const activeIdx = Math.min(total - 1, Math.max(0, Math.round(v)))
          if (activeIdx !== activeIndexRef.current) {
            activeIndexRef.current = activeIdx
            setCurrentIndex(activeIdx)
          }
        },
      })

      triggerRef.current = trigger
      ScrollTrigger.refresh()
    }, wrapper)

    return () => {
      ctx.revert()
      triggerRef.current = null
    }
  }, [total])

  // Smooth navigation to a specific card (via arrows, dots, or peeking card click)
  const goToCard = (targetIdx: number) => {
    const clamped = (targetIdx + total) % total
    const trigger = triggerRef.current
    if (
      trigger &&
      typeof trigger.start === "number" &&
      typeof trigger.end === "number"
    ) {
      const progress = clamped / (total - 1)
      const targetY = trigger.start + progress * (trigger.end - trigger.start)

      if ((window as any).__lenis) {
        ;(window as any).__lenis.scrollTo(targetY, {
          duration: 0.85,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        })
      } else {
        window.scrollTo({ top: targetY, behavior: "smooth" })
      }
    } else {
      activeIndexRef.current = clamped
      setCurrentIndex(clamped)
      virtualIndexRef.current = clamped
      applyTransforms(clamped)
    }
  }

  const next = () => {
    goToCard(activeIndexRef.current + 1)
  }

  const prev = () => {
    goToCard(activeIndexRef.current - 1)
  }

  const goTo = (idx: number) => {
    goToCard(idx)
  }

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  // Pointer drag listeners for touch swipe & mouse drag
  const handlePointerDown = (clientX: number) => {
    startXRef.current = clientX
    isSwipingRef.current = true
    didDragRef.current = false
    setIsDragging(true)

    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
        overwrite: "auto",
      })
    }
  }

  useEffect(() => {
    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isSwipingRef.current) return
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
      const delta = clientX - startXRef.current
      if (Math.abs(delta) > 5) {
        didDragRef.current = true
      }
      dragOffsetRef.current = delta
      applyTransforms(virtualIndexRef.current, delta)
    }

    const onPointerUp = () => {
      if (!isSwipingRef.current) return
      isSwipingRef.current = false
      setIsDragging(false)

      const offset = dragOffsetRef.current
      dragOffsetRef.current = 0

      if (offset < -45) {
        next()
      } else if (offset > 45) {
        prev()
      } else {
        applyTransforms(virtualIndexRef.current, 0)
      }

      setTimeout(() => {
        didDragRef.current = false
      }, 50)
    }

    window.addEventListener("mousemove", onPointerMove, { passive: true })
    window.addEventListener("mouseup", onPointerUp)
    window.addEventListener("touchmove", onPointerMove, { passive: true })
    window.addEventListener("touchend", onPointerUp)

    return () => {
      window.removeEventListener("mousemove", onPointerMove)
      window.removeEventListener("mouseup", onPointerUp)
      window.removeEventListener("touchmove", onPointerMove)
      window.removeEventListener("touchend", onPointerUp)
    }
  }, [total])

  // Scroll-triggered scale animation observer on Latest projects heading
  useEffect(() => {
    const el = headingRef.current
    if (!el) return

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      onEnter: () => el.classList.add("in-view"),
      onLeaveBack: () => el.classList.remove("in-view"),
    })

    // If already in view on mount (e.g. hash link or reload), activate immediately
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.88 && rect.bottom > 0) {
      el.classList.add("in-view")
    }

    return () => {
      trigger.kill()
    }
  }, [])

  // Scroll-triggered one-by-one scrub animation on Expertise cards
  useEffect(() => {
    const el = expertiseRef.current
    if (!el) return

    const cards = el.querySelectorAll<HTMLElement>(".expertise-scale-item")
    if (!cards.length) return

    const ctx = gsap.context(() => {
      gsap.set(cards, {
        opacity: 0,
        y: 60,
        scale: 0.78,
        transformOrigin: "center bottom",
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          end: "top 32%",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      })

      cards.forEach((card, index) => {
        tl.to(
          card,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "power2.out",
            duration: 1,
          },
          index * 0.78,
        )
      })
    }, el)

    return () => ctx.revert()
  }, [])

  const handleCursorEnter = () => {
    if (
      typeof window !== "undefined" &&
      window.innerWidth >= 768 &&
      cursorRef.current
    ) {
      gsap.to(cursorRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.25,
        ease: "power2.out",
        overwrite: "auto",
      })
    }
  }

  const handleCursorLeave = () => {
    if (!isDragging && cursorRef.current) {
      gsap.to(cursorRef.current, {
        opacity: 0,
        scale: 0.6,
        duration: 0.2,
        ease: "power2.in",
        overwrite: "auto",
      })
    }
  }

  // Initial card positions for initial render
  const getInitialCardProps = (idx: number) => {
    let diff = idx - 0
    while (diff > total / 2) diff -= total
    while (diff < -total / 2) diff += total

    const absDiff = Math.abs(diff)
    const isCenter = absDiff < 0.5
    const isVisible = absDiff <= 1.25

    const scale = isCenter ? 1 : isVisible ? 0.85 : 0.72
    const opacity = isVisible ? 1 : 0
    const zIndex = isCenter ? 30 : isVisible ? 20 : 10

    return {
      diff,
      isCenter,
      isVisible,
      style: {
        transform: `translate(calc(-50% + ${diff} * (92.5% + 36px)), 0) scale(${scale})`,
        opacity,
        zIndex,
        pointerEvents: (isVisible ? "auto" : "none") as "auto" | "none",
        transition: "none",
      },
    }
  }

  return (
    <section
      id="portfolio"
      className="projects-stack relative bg-background text-foreground overflow-hidden"
    >
      {/* Custom Follower Cursor with Real-Time Drag Animation */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:flex items-center bg-black text-white px-5 py-2.5 rounded-full text-[14px] font-bricolage font-medium shadow-2xl"
        style={{
          fontFamily:
            'var(--font-bricolage), "Bricolage Grotesque", sans-serif',
        }}
      >
        {isDragging ? (
          <div className="flex items-center gap-2.5 font-mono text-[11px] font-bold uppercase tracking-wider select-none">
            <svg
              className={`w-3.5 h-3.5 transition-all duration-150 ${
                dragOffsetRef.current > 10
                  ? "text-coral -translate-x-1 scale-125"
                  : "text-white/60"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-white tracking-widest">DRAG</span>
            <svg
              className={`w-3.5 h-3.5 transition-all duration-150 ${
                dragOffsetRef.current < -10
                  ? "text-coral translate-x-1 scale-125"
                  : "text-white/60"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        ) : (
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-coral shrink-0" />
            <span className="whitespace-nowrap tracking-tight font-bricolage">
              View project
            </span>
          </div>
        )}
      </div>

      {/* Pinned Carousel Container */}
      <div
        ref={carouselWrapperRef}
        className="relative w-full h-screen max-h-screen flex flex-col justify-center pt-12 md:pt-14 pb-2 md:pb-4 select-none overflow-hidden"
      >
        {/* Meta Row: ( 26© ) & Coral Dot */}
        <div className="max-w-[1500px] w-full mx-auto px-6 md:px-12 flex justify-between items-center select-none mb-1.5 md:mb-2">
          <span className="text-[14px] md:text-[15px] font-medium text-foreground/50 tracking-tight">
            ( 26© )
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-coral shrink-0" />
        </div>

        {/* Clean Centered Heading with Staggered Word Scale Animation */}
        <div className="text-center select-none mb-2 md:mb-3 px-4">
          <h2
            ref={headingRef}
            className="projects-heading-scale font-sans text-[clamp(2rem,4vw,3.6rem)] font-medium leading-[0.95] tracking-[-0.04em] text-black inline-flex flex-wrap justify-center gap-x-[0.28em]"
            style={{
              fontFamily: 'var(--font-sans), "Geist", sans-serif',
              fontWeight: 500,
            }}
          >
            <span className="projects-word-scale word-1">Latest</span>
            <span className="projects-word-scale word-2">projects</span>
          </h2>
        </div>

        {/* Infinite Looping Carousel Stage */}
        <div
          className="relative w-full h-[250px] sm:h-[300px] md:h-[345px] my-2 select-none md:cursor-none touch-pan-y"
          onMouseEnter={handleCursorEnter}
          onMouseLeave={handleCursorLeave}
          onMouseDown={(e) => {
            e.preventDefault()
            handlePointerDown(e.clientX)
          }}
          onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
        >
          {LATEST_PROJECTS_LIST.map((proj, idx) => {
            const { style } = getInitialCardProps(idx)

            return (
              <div
                key={proj.id}
                ref={(el) => {
                  cardRefs.current[idx] = el
                }}
                className="absolute top-0 left-1/2 w-[74vw] md:w-[42vw] max-w-[580px] aspect-[16/9.5] rounded-[6px] sm:rounded-[7px] md:rounded-[8px] lg:rounded-[10px] overflow-hidden bg-black shadow-[0_20px_50px_-10px_rgba(0,0,0,0.38)] will-change-transform"
                style={style}
                onClick={(e) => {
                  if (didDragRef.current) {
                    e.preventDefault()
                    return
                  }
                  let diff = idx - virtualIndexRef.current
                  while (diff > total / 2) diff -= total
                  while (diff < -total / 2) diff += total

                  if (Math.round(diff) === 1) {
                    e.preventDefault()
                    next()
                  } else if (Math.round(diff) === -1) {
                    e.preventDefault()
                    prev()
                  }
                }}
              >
                <a
                  href={`#/work/${proj.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    if (didDragRef.current) return
                    let diff = idx - virtualIndexRef.current
                    while (diff > total / 2) diff -= total
                    while (diff < -total / 2) diff += total

                    if (Math.round(diff) === 1) {
                      next()
                      return
                    }
                    if (Math.round(diff) === -1) {
                      prev()
                      return
                    }
                    onSelectProject?.(proj.id)
                  }}
                  className="card-link group relative block w-full h-full overflow-hidden select-none cursor-pointer md:cursor-none"
                  onMouseEnter={handleCursorEnter}
                  draggable={false}
                >
                  {/* Background Image - Vibrant, Not Faded */}
                  <img
                    src={assetUrl(proj.img)}
                    alt={proj.name}
                    width="1920"
                    height="1080"
                    className="absolute inset-0 w-full h-full object-cover rounded-[6px] sm:rounded-[7px] md:rounded-[8px] lg:rounded-[10px] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 pointer-events-none select-none"
                    loading={idx === 0 ? "eager" : "lazy"}
                    decoding="async"
                    draggable={false}
                  />
                  {/* Clean Subtle Overlay (Not dark, crisp visuals) */}
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors duration-300" />

                  {/* Centered Client Logo (Fades smoothly on hover so View Project cursor is prominent on all cards) */}
                  {!("hideLogo" in proj && proj.hideLogo) && (
                    <div className="client-logo absolute inset-0 flex items-center justify-center gap-3 text-white text-[24px] md:text-[30px] font-semibold tracking-tight transition-all duration-300 pointer-events-none z-10 group-hover:opacity-0 group-hover:scale-95 opacity-90">
                      {proj.icon}
                      <span>{proj.name}</span>
                    </div>
                  )}
                </a>
              </div>
            )
          })}
        </div>

        {/* Navigation Controls (Arrows + Dots + Index Counter) */}
        <div className="flex items-center justify-between max-w-[580px] w-full mx-auto px-6 md:px-2 mt-4 md:mt-5">
          {/* Project Counter: 01 / 07 */}
          <div className="flex items-center gap-1.5 font-mono text-[13px] text-foreground/50 tracking-wider">
            <span ref={counterRef} className="text-foreground font-semibold">
              01
            </span>
            <span>/</span>
            <span>{total < 10 ? `0${total}` : total}</span>
          </div>

          {/* Dots Indicators */}
          <div className="flex items-center gap-2">
            {LATEST_PROJECTS_LIST.map((_, i) => (
              <button
                key={i}
                ref={(el) => {
                  dotRefs.current[i] = el
                }}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === 0
                    ? "w-8 bg-foreground"
                    : "w-2 bg-foreground/25 hover:bg-foreground/50"
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>

          {/* Left / Right Arrow Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border bg-card/60 hover:bg-foreground hover:text-background flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
              aria-label="Previous project"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border bg-card/60 hover:bg-foreground hover:text-background flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
              aria-label="Next project"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Centered "View all work" Pill Button */}
        <div className="relative z-20 flex justify-center mt-4 md:mt-5">
          <InteractiveViewAllButton
            onClick={(e) => {
              e.preventDefault()
              onSelectProject?.(
                LATEST_PROJECTS_LIST[currentIndex]?.id || "knko",
              )
            }}
          />
        </div>
      </div>

      {/* Next Section Preview: Expertise */}
      <div
        ref={expertiseRef}
        className="expertise-scale-container max-w-[1500px] mx-auto px-4 sm:px-8 md:px-12 pt-3 sm:pt-14 md:pt-20 pb-6 sm:pb-16 md:pb-24"
      >
        <div className="flex justify-between items-center select-none mb-3 sm:mb-6 md:mb-8">
          <span className="text-[14px] sm:text-[15px] md:text-[16px] font-medium text-foreground/50 tracking-tight">
            ( Expertise )
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-coral shrink-0" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5">
          {/* Card 1: Black with gradient + */}
          <div className="expertise-scale-item item-1 bg-[#0A0A0A] border border-white/10 hover:border-white/25 rounded-[14px] sm:rounded-[16px] md:rounded-[18px] lg:rounded-xl p-3.5 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between min-h-[120px] sm:min-h-[150px] md:min-h-[180px] will-change-transform transition-all duration-300 shadow-md">
            <div className="text-[28px] sm:text-[42px] md:text-[54px] lg:text-[62px] font-medium leading-none tracking-tight text-white whitespace-nowrap flex items-baseline flex-nowrap shrink-0">
              <span>100</span>
              <span className="bg-gradient-to-br from-[#F27256] to-[#CF232B] bg-clip-text text-transparent inline-block font-semibold ml-0.5 shrink-0 select-none">
                +
              </span>
            </div>
            <div className="text-[12px] sm:text-[14px] md:text-[15px] text-white/70 tracking-tight leading-snug mt-auto pt-3 sm:pt-5 md:pt-6">
              Projects delivered
            </div>
          </div>

          {/* Card 2: Gradient #F27256 & #CF232B */}
          <div className="expertise-scale-item item-2 bg-gradient-to-br from-[#F27256] to-[#CF232B] border border-white/15 hover:brightness-105 rounded-[14px] sm:rounded-[16px] md:rounded-[18px] lg:rounded-xl p-3.5 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between min-h-[120px] sm:min-h-[150px] md:min-h-[180px] will-change-transform transition-all duration-300 shadow-md">
            <div className="text-[28px] sm:text-[42px] md:text-[54px] lg:text-[62px] font-medium leading-none tracking-tight text-white whitespace-nowrap flex items-baseline flex-nowrap shrink-0">
              <span>8</span>
            </div>
            <div className="text-[12px] sm:text-[14px] md:text-[15px] text-white/90 tracking-tight leading-snug mt-auto pt-3 sm:pt-5 md:pt-6">
              Years of experience
            </div>
          </div>

          {/* Card 3: Black with gradient + */}
          <div className="expertise-scale-item item-3 bg-[#0A0A0A] border border-white/10 hover:border-white/25 rounded-[14px] sm:rounded-[16px] md:rounded-[18px] lg:rounded-xl p-3.5 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between min-h-[120px] sm:min-h-[150px] md:min-h-[180px] will-change-transform transition-all duration-300 shadow-md">
            <div className="text-[28px] sm:text-[42px] md:text-[54px] lg:text-[62px] font-medium leading-none tracking-tight text-white whitespace-nowrap flex items-baseline flex-nowrap shrink-0">
              <span>50</span>
              <span className="bg-gradient-to-br from-[#F27256] to-[#CF232B] bg-clip-text text-transparent inline-block font-semibold ml-0.5 shrink-0 select-none">
                +
              </span>
            </div>
            <div className="text-[12px] sm:text-[14px] md:text-[15px] text-white/70 tracking-tight leading-snug mt-auto pt-3 sm:pt-5 md:pt-6">
              Brands built
            </div>
          </div>

          {/* Card 4: Gradient #F27256 & #CF232B */}
          <div className="expertise-scale-item item-4 bg-gradient-to-br from-[#F27256] to-[#CF232B] border border-white/15 hover:brightness-105 rounded-[14px] sm:rounded-[16px] md:rounded-[18px] lg:rounded-xl p-3.5 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between min-h-[120px] sm:min-h-[150px] md:min-h-[180px] will-change-transform transition-all duration-300 shadow-md">
            <div className="text-[28px] sm:text-[42px] md:text-[54px] lg:text-[62px] font-medium leading-none tracking-tight text-white whitespace-nowrap flex items-baseline flex-nowrap shrink-0">
              <span>20</span>
              <span className="text-white/90 ml-0.5 shrink-0 select-none">+</span>
            </div>
            <div className="text-[12px] sm:text-[14px] md:text-[15px] text-white/90 tracking-tight leading-snug mt-auto pt-3 sm:pt-5 md:pt-6">
              Long-term collaborations
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- SERVICES ---------------- */
function Services({
  onSelectService,
}: {
  onSelectService?: (slug: string) => void
}) {
  return <InteractiveServicesSection onSelectService={onSelectService} />
}

/* ---------------- PROCESS ---------------- */
function Process() {
  return <HorizontalProcessSection />
}

/* ---------------- REVIEWS ---------------- */
function Reviews() {
  return (
    <section
      id="reviews"
      className="relative pt-12 md:pt-14 pb-8 md:pb-10 overflow-hidden bg-gradient-to-br from-[#F27256] to-[#CF232B] border-y border-black/10 text-white"
    >
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="reveal max-w-2xl">
          <SectionLabel n="04" label="Client Reviews" dark />
          <h2 className="mt-3 text-[clamp(2rem,5vw,3.75rem)] leading-[0.95] tracking-[-0.03em] font-semibold text-white">
            Don&apos;t just take our{" "}
            <span className="text-white/80">word for it.</span>
          </h2>
          <p className="mt-2 text-[15px] md:text-[16px] text-white/90">
            Here&apos;s what our clients say about working with us.
          </p>
        </div>
      </div>
      <div className="relative z-10 mt-3 md:mt-4 w-full">
        <LinearReviewsCarousel />
      </div>
    </section>
  )
}

/* ---------------- FAQ ---------------- */
const FAQS = [
  {
    q: "Do you use AI in your design work?",
    a: "Yes, for speed and exploration. Every final design is created and refined by our designers.",
  },
  {
    q: "How long does a project take?",
    a: "Most pitch decks take 3–5 days. Branding, websites, and automation projects vary by scope, and we share a clear timeline before we start.",
  },
  {
    q: "How many revisions do I get?",
    a: "Every package includes revision rounds so the final result feels right.",
  },
  {
    q: "Can you work with my existing brand?",
    a: "Absolutely. We can build within your current guidelines or refresh them.",
  },
  {
    q: "What can AI automation do for my business?",
    a: "It takes over repetitive work like lead management, email follow-ups, reporting, and data entry — saving your team hours every week.",
  },
  {
    q: "Do I need technical knowledge to use your automations?",
    a: "Not at all. We set everything up, connect it to the tools you already use, and walk you through it.",
  },
]

function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section
      id="faq"
      className="bg-background text-foreground border-t border-border font-sans"
      style={{ fontFamily: 'var(--font-sans), "Geist", sans-serif' }}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-12 md:py-16 grid gap-10 lg:gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="reveal">
          <SectionLabel n="05" label="FAQ" />
          <h2
            className="mt-5 text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-[-0.03em] font-semibold text-foreground font-sans"
            style={{ fontFamily: 'var(--font-sans), "Geist", sans-serif' }}
          >
            Questions we <br /> get{" "}
            <span className="text-gradient">asked.</span>
          </h2>
        </div>
        <div className="reveal divide-y divide-border border-y border-border">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left group cursor-pointer font-sans"
                  style={{
                    fontFamily: 'var(--font-sans), "Geist", sans-serif',
                  }}
                >
                  <span
                    className="text-[19px] md:text-[21px] tracking-[-0.02em] font-medium text-foreground group-hover:text-coral transition-colors font-sans"
                    style={{
                      fontFamily: 'var(--font-sans), "Geist", sans-serif',
                    }}
                  >
                    {f.q}
                  </span>
                  <span
                    className={`text-2xl text-red transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p
                      className="pb-5 text-[15px] md:text-[16px] leading-relaxed text-muted-foreground max-w-2xl font-sans"
                      style={{
                        fontFamily: 'var(--font-sans), "Geist", sans-serif',
                      }}
                    >
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ---------------- CONTACT US ---------------- */
function Contact() {
  return <ContactSection />
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return <GravityDropFooter />
}

/* ---------------- shared ---------------- */
function SectionLabel({
  n,
  label,
  dark,
  center,
}: {
  n: string
  label: string
  dark?: boolean
  center?: boolean
}) {
  return (
    <div
      className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}
    >
      <span
        className={`font-mono text-[12px] ${
          dark ? "text-white/80" : "text-muted-foreground"
        }`}
      >
        ({n})
      </span>
      <span
        className={`h-px w-8 ${
          dark ? "bg-white/40" : "bg-gradient-to-r from-coral to-red"
        }`}
      />
      <span
        className={`font-mono text-[11px] uppercase tracking-[0.2em] ${
          dark ? "text-white font-semibold" : "text-red"
        }`}
      >
        {label}
      </span>
    </div>
  )
}
