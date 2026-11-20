import React, { useEffect, useRef, useState, useCallback } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import FlickingProjectStack from "@/components/FlickingProjectStack"
import { assetUrl } from "@/utils/asset"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const FRAME_COUNT = 22
const FRAME_PATHS = Array.from({ length: FRAME_COUNT }, (_, i) => {
  const num = String(i + 1).padStart(4, "0")
  return assetUrl(`/images/snap-logo-scroll/snap-logo-glass-scroll_${num}.webp`)
})

interface HeroSectionProps {
  portfolioImages?: string[]
  onScrollToPortfolio?: () => void
  onStartProject?: () => void
  onSelectProject?: (slug: string) => void
}

export default function HeroSection({
  portfolioImages = [],
  onScrollToPortfolio,
  onStartProject,
  onSelectProject,
}: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const wordmarkContainerRef = useRef<HTMLDivElement>(null)
  const wordmarkRef = useRef<HTMLHeadingElement>(null)
  const glassLogoRef = useRef<HTMLDivElement>(null)
  const glassLogoParallaxRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const blurMaskRef = useRef<HTMLDivElement>(null)
  const blurMaskParallaxRef = useRef<HTMLDivElement>(null)
  const blurMaskInnerRef = useRef<HTMLDivElement>(null)
  const contentCardRef = useRef<HTMLDivElement>(null)
  const projectCardWrapperRef = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLButtonElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subtextRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const hasAnimatedRef = useRef(false)

  const imagesRef = useRef<HTMLImageElement[]>([])
  const currentFrameRef = useRef<number>(0)
  const lastDrawnFrameRef = useRef<number>(-1)

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  )

  // Track reduced-motion preference changes
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  // Draw specific frame onto canvas
  const drawFrame = useCallback(
    (frameProgress: number) => {
      currentFrameRef.current = frameProgress
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      const frameIndex = Math.max(
        0,
        Math.min(FRAME_COUNT - 1, Math.round(frameProgress)),
      )

      if (frameIndex === lastDrawnFrameRef.current) {
        return
      }

      const img = imagesRef.current[frameIndex] || imagesRef.current[0]
      if (img && img.complete && img.naturalWidth > 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        lastDrawnFrameRef.current = frameIndex
      }

      if (blurMaskInnerRef.current) {
        const maskUrl = `url(${FRAME_PATHS[frameIndex]})`
        blurMaskInnerRef.current.style.maskImage = maskUrl
        blurMaskInnerRef.current.style.webkitMaskImage = maskUrl
      }
    },
    [],
  )

  // Progressive Frame Loader: Frame 1 loads immediately with high priority,
  // while frames 2-24 load smoothly in background during idle time / scroll
  useEffect(() => {
    const images: HTMLImageElement[] = []
    imagesRef.current = images

    const renderCurrent = () => {
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext("2d")
      if (!ctx) return
      const targetIndex = Math.max(
        0,
        Math.min(FRAME_COUNT - 1, Math.round(currentFrameRef.current)),
      )
      const targetImg = images[targetIndex] || images[0]
      if (targetImg && targetImg.complete && targetImg.naturalWidth > 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(targetImg, 0, 0, canvas.width, canvas.height)
        lastDrawnFrameRef.current = targetIndex
      }
      if (blurMaskInnerRef.current) {
        const maskUrl = `url(${FRAME_PATHS[targetIndex]})`
        blurMaskInnerRef.current.style.maskImage = maskUrl
        blurMaskInnerRef.current.style.webkitMaskImage = maskUrl
      }
    }

    let bgStarted = false
    function startBackgroundLoading() {
      if (bgStarted) return
      bgStarted = true

      // Load remaining frames progressively in batches of 3
      let i = 1
      const loadNextBatch = () => {
        const batchLimit = Math.min(i + 3, FRAME_COUNT)
        for (; i < batchLimit; i++) {
          const idx = i
          const img = new Image()
          images[idx] = img
          img.onload = () => {
            if (idx === Math.round(currentFrameRef.current)) {
              renderCurrent()
            }
          }
          img.src = FRAME_PATHS[idx]
        }
        if (i < FRAME_COUNT) {
          if ("requestIdleCallback" in window) {
            ;(window as any).requestIdleCallback(loadNextBatch, { timeout: 300 })
          } else {
            setTimeout(loadNextBatch, 50)
          }
        }
      }

      if ("requestIdleCallback" in window) {
        ;(window as any).requestIdleCallback(loadNextBatch, { timeout: 400 })
      } else {
        setTimeout(loadNextBatch, 100)
      }
    }

    // Step 1: Load Frame 0 (first visual frame) immediately with high priority
    const firstImg = new Image()
    if ("fetchPriority" in firstImg) {
      ;(firstImg as any).fetchPriority = "high"
    }
    images[0] = firstImg
    firstImg.onload = () => {
      if (lastDrawnFrameRef.current === -1) {
        renderCurrent()
      }
      startBackgroundLoading()
    }
    firstImg.src = FRAME_PATHS[0]
    if (firstImg.complete && firstImg.naturalWidth > 0) {
      if (lastDrawnFrameRef.current === -1) {
        renderCurrent()
      }
      startBackgroundLoading()
    }

    // If user starts scrolling before idle callback fires, start loading remaining frames immediately
    const onScrollStart = () => {
      startBackgroundLoading()
      window.removeEventListener("scroll", onScrollStart)
      window.removeEventListener("wheel", onScrollStart)
      window.removeEventListener("touchmove", onScrollStart)
    }
    window.addEventListener("scroll", onScrollStart, { passive: true })
    window.addEventListener("wheel", onScrollStart, { passive: true })
    window.addEventListener("touchmove", onScrollStart, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScrollStart)
      window.removeEventListener("wheel", onScrollStart)
      window.removeEventListener("touchmove", onScrollStart)
    }
  }, [])

  // Scroll-driven Hero animation with GSAP + ScrollTrigger
  // Pins the hero section for 150vh, drives all elements with one scrub: 1 timeline
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const frameObj = { frame: 0 }

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        // Show final state with no animation
        drawFrame(FRAME_COUNT - 1)
        if (wordmarkContainerRef.current) {
          gsap.set(wordmarkContainerRef.current, {
            y: -120,
            scale: 0.92,
            opacity: 0,
          })
        }
        if (contentCardRef.current) {
          gsap.set(contentCardRef.current, { y: -80, opacity: 0 })
        }
        if (projectCardWrapperRef.current) {
          gsap.set(projectCardWrapperRef.current, { y: -60, opacity: 0 })
        }
        if (scrollIndicatorRef.current) {
          gsap.set(scrollIndicatorRef.current, { opacity: 0 })
        }
        return
      }

      // Initial draw of frame 1 (index 0)
      drawFrame(0)

      // Single timeline pinned for 150vh of scroll with scrub: 1
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=150%", // about 150vh of scroll
          pin: true,
          scrub: 1, // smooth, tied to scroll, reversible when scrolling back up
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      // 1. Logo frame sequence with dynamic rotation pacing (22 frames):
      // Slightly eased, non-linear mapping for physical momentum (starts slightly slower,
      // accelerates through middle, gently settles at final frame 22) while visiting
      // every single frame smoothly without skips or dead zones.
      // Fully reversible when scrolling back up without popping or skipping.
      tl.to(
        frameObj,
        {
          frame: FRAME_COUNT - 1,
          duration: 1,
          ease: (p: number) =>
            0.55 * p + 0.45 * (3 * p * p - 2 * p * p * p),
          onUpdate: () => {
            drawFrame(frameObj.frame)
          },
        },
        0,
      )

      // 2. Big "Snap Studio®" headline: slowly moves up ~120px, scales from 1 to 0.92,
      // and fades to 0 opacity in the last 30% of the scroll (0.7 -> 1.0)
      if (wordmarkContainerRef.current) {
        tl.to(
          wordmarkContainerRef.current,
          {
            y: -120,
            scale: 0.92,
            duration: 1,
            ease: "none",
          },
          0,
        )
        tl.to(
          wordmarkContainerRef.current,
          {
            opacity: 0,
            duration: 0.3,
            ease: "none",
          },
          0.7,
        )
      }

      // 3. Bottom-left block: moves up about 80px and fades out, slightly delayed (stagger 0.1)
      if (contentCardRef.current) {
        tl.to(
          contentCardRef.current,
          {
            y: -80,
            opacity: 0,
            duration: 0.75,
            ease: "none",
          },
          0.1,
        )
      }

      // 4. Bottom-right video card: moves up about 60px with slight parallax (slower than text) and fades out at the end
      if (projectCardWrapperRef.current) {
        tl.to(
          projectCardWrapperRef.current,
          {
            y: -60,
            duration: 1,
            ease: "none",
          },
          0,
        )
        tl.to(
          projectCardWrapperRef.current,
          {
            opacity: 0,
            duration: 0.3,
            ease: "none",
          },
          0.7,
        )
      }

      // 5. "Scroll" indicator: fades out in the first 15% of the scroll
      if (scrollIndicatorRef.current) {
        tl.to(
          scrollIndicatorRef.current,
          {
            opacity: 0,
            y: -20,
            duration: 0.15,
            ease: "none",
          },
          0,
        )
      }
    }, heroRef)

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 200)

    return () => {
      clearTimeout(refreshTimer)
      ctx.revert()
    }
  }, [prefersReducedMotion, drawFrame])

  // Staggered initial entrance animation on page load
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    if (prefersReduced) {
      if (headingRef.current) gsap.set(headingRef.current, { opacity: 1, y: 0 })
      if (subtextRef.current) gsap.set(subtextRef.current, { opacity: 1, y: 0 })
      if (buttonRef.current)
        gsap.set(buttonRef.current, { opacity: 1, y: 0, scale: 1 })
    } else {
      // Set initial hidden state for staggered reveal
      if (headingRef.current)
        gsap.set(headingRef.current, { opacity: 0, y: 20 })
      if (subtextRef.current)
        gsap.set(subtextRef.current, { opacity: 0, y: 20 })
      if (buttonRef.current)
        gsap.set(buttonRef.current, { opacity: 0, y: 20, scale: 0.95 })

      const playEntranceAnimation = () => {
        if (hasAnimatedRef.current) return
        hasAnimatedRef.current = true

        const tl = gsap.timeline()

        // 1. Heading: fade in + slide up from 20px below, 500ms, ease-out
        if (headingRef.current) {
          tl.to(
            headingRef.current,
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
            0,
          )
        }

        // 2. Subtext: same fade + slide-up, starting 150ms after the heading
        if (subtextRef.current) {
          tl.to(
            subtextRef.current,
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
            0.15,
          )
        }

        // 3. Button: same fade + slide-up, starting 150ms after the subtext, plus scale-in from 0.95 to 1
        if (buttonRef.current) {
          tl.to(
            buttonRef.current,
            { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out" },
            0.3,
          )
        }
      }

      // Trigger once only: if already in view on load or when entering viewport
      const el = heroRef.current
      if (el) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && !hasAnimatedRef.current) {
                playEntranceAnimation()
                observer.disconnect()
              }
            })
          },
          { threshold: 0.05 },
        )
        observer.observe(el)
      }
    }

    const ctx = gsap.context(() => {
      const enterTl = gsap.timeline({ delay: 0.15 })

      // 1. Wordmark characters slide up staggered
      const chars = wordmarkRef.current?.querySelectorAll(".hero-char")
      if (chars && chars.length > 0) {
        enterTl.fromTo(
          chars,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.035,
            ease: "power3.out",
          },
        )
      }

      // 2. Glass logo container and dynamic blur mask fade smoothly into view on load
      const logoTargets = [glassLogoRef.current, blurMaskRef.current].filter(Boolean)
      if (logoTargets.length > 0) {
        enterTl.fromTo(
          logoTargets,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.0,
            ease: "power2.out",
          },
          "-=0.55",
        )
      }

      // Desktop subtle mouse parallax on the 3D glass logo and blur mask (applied strictly to inner wrappers)
      const parallaxTargets = [glassLogoParallaxRef.current, blurMaskParallaxRef.current].filter(Boolean)
      if (window.innerWidth >= 768 && parallaxTargets.length > 0) {
        const quickX = gsap.quickTo(parallaxTargets, "x", {
          duration: 0.8,
          ease: "power2.out",
        })
        const quickY = gsap.quickTo(parallaxTargets, "y", {
          duration: 0.8,
          ease: "power2.out",
        })

        const handleMouseMove = (e: MouseEvent) => {
          const normX = (e.clientX / window.innerWidth - 0.5) * 2
          const normY = (e.clientY / window.innerHeight - 0.5) * 2
          quickX(normX * 6)
          quickY(normY * 4)
        }

        window.addEventListener("mousemove", handleMouseMove, {
          passive: true,
        })
        return () => window.removeEventListener("mousemove", handleMouseMove)
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const handleChatClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (onStartProject) {
      onStartProject()
    } else {
      const el = document.getElementById("contact")
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleScrollDown = (e: React.MouseEvent) => {
    e.preventDefault()
    const lenis = (window as any).__lenis
    const el =
      document.getElementById("about") || document.getElementById("portfolio")
    if (lenis && el) {
      lenis.scrollTo(el, { duration: 1.2 })
    } else if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    } else if (onScrollToPortfolio) {
      onScrollToPortfolio()
    } else {
      window.scrollTo({ top: window.innerHeight * 2, behavior: "smooth" })
    }
  }

  const wordmarkChars = "Snap Studio".split("")

  return (
    <div
      ref={heroRef}
      id="top"
      className="relative w-full h-screen h-[100dvh] min-h-[580px] sm:min-h-[720px] overflow-hidden select-none flex flex-col justify-between"
      style={{
        background:
          "linear-gradient(135deg, #EB6E52 0%, #E66A4E 50%, #CC453B 75%, #B3232A 100%)",
      }}
    >
      {/* ======================================================== */}
      {/* LAYER 1: GIANT WORDMARK (h1, Bricolage Grotesque 800)     */}
      {/* Title case: "Snap Studio", pure white text               */}
      {/* Behind the 3D glass logo so letters show through glass   */}
      {/* ======================================================== */}
      <div
        ref={wordmarkContainerRef}
        className="absolute inset-x-0 top-20 sm:top-24 md:top-28 lg:top-32 z-10 flex justify-center px-4 md:px-8 text-center pointer-events-none will-change-transform"
        style={{
          transformOrigin: "50% 30%",
        }}
      >
        {/* Responsive Wordmark across desktop, tablet, and mobile */}
        <h1
          ref={wordmarkRef}
          className="flex items-center justify-center font-extrabold text-white whitespace-nowrap m-0 p-0 select-none tracking-[-0.02em] leading-[0.85]"
          style={{
            fontFamily:
              'var(--font-bricolage), "Bricolage Grotesque", sans-serif',
            fontSize: "clamp(2.4rem, 11.5vw, 15rem)",
            width: "94vw",
            textTransform: "none",
          }}
        >
          {wordmarkChars.map((char, idx) => (
            <span key={idx} className="inline-block overflow-hidden py-1 sm:py-2">
              <span
                className="hero-char inline-block will-change-transform"
                style={{
                  textTransform: "none",
                  filter: "none",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            </span>
          ))}
          <span
            className="text-white select-none align-super font-bold inline-block will-change-transform"
            style={{
              fontSize: "clamp(0.9rem, 3.2vw, 4.5rem)",
              marginLeft: "0.08em",
              transform: "translateY(-0.35em)",
            }}
          >
            ®
          </span>
        </h1>
      </div>

      {/* ======================================================== */}
      {/* LAYER 1.5: DYNAMIC LOGO SILHOUETTE BLUR MASK LAYER      */}
      {/* Sits at zIndex: 12 (between text z-10 and logo z-15)     */}
      {/* Hidden on mobile to keep all bottom text 100% sharp       */}
      {/* ======================================================== */}
      <div
        ref={blurMaskRef}
        aria-hidden="true"
        className="hidden md:flex absolute bottom-0 left-1/2 -translate-x-1/2 items-end justify-center pointer-events-none will-change-transform"
        style={{
          width: "auto",
          zIndex: 12,
        }}
      >
        <div ref={blurMaskParallaxRef} className="relative flex items-end justify-center">
          <div
            ref={blurMaskInnerRef}
            className="h-[63vh] sm:h-[77vh] md:h-[88vh] lg:h-[91vh] xl:h-[93vh] w-auto max-w-none select-none pointer-events-none will-change-transform"
            style={{
              aspectRatio: "1920 / 1080",
              backdropFilter: "blur(3.5px)",
              WebkitBackdropFilter: "blur(3.5px)",
              maskImage: `url(${FRAME_PATHS[0]})`,
              WebkitMaskImage: `url(${FRAME_PATHS[0]})`,
              maskSize: "100% 100%",
              WebkitMaskSize: "100% 100%",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              clipPath: "polygon(0 0, 100% 0, 100% 86%, 0 86%)",
            }}
          />
        </div>
      </div>

      {/* ======================================================== */}
      {/* LAYER 2: 3D GLASS LOGO CANVAS                            */}
      {/* Positioned in empty space between heading & text on mobile */}
      {/* ======================================================== */}
      <div
        ref={glassLogoRef}
        className="absolute top-[26%] sm:top-[22%] md:top-auto md:bottom-0 left-1/2 -translate-x-1/2 z-[15] flex items-center md:items-end justify-center pointer-events-none will-change-transform"
        style={{
          width: "auto",
        }}
      >
        <div ref={glassLogoParallaxRef} className="relative flex items-center md:items-end justify-center">
          <canvas
            ref={canvasRef}
            width={1920}
            height={1080}
            className="h-[34vh] sm:h-[44vh] md:h-[88vh] lg:h-[91vh] xl:h-[93vh] w-auto max-w-none object-contain select-none pointer-events-none will-change-transform"
            style={{
              aspectRatio: "1920 / 1080",
            }}
          />
        </div>
      </div>

      {/* ======================================================== */}
      {/* LAYER 3: BOTTOM-LEFT HERO CONTENT                        */}
      {/* Placed in front of glass logo at z-30 with full opacity   */}
      {/* ======================================================== */}
      <div
        ref={contentCardRef}
        className="absolute left-4 sm:left-8 md:left-12 lg:left-16 bottom-[125px] sm:bottom-[130px] md:bottom-12 z-30 pointer-events-auto max-w-[calc(100%-2rem)] sm:max-w-[360px] md:max-w-[420px] flex flex-col gap-2.5 sm:gap-3 md:gap-3.5 select-text will-change-transform"
      >
        {/* Headline: Geist font, bold, sentence case, high-contrast white */}
        <h2
          ref={headingRef}
          className="text-[20px] sm:text-[23px] md:text-[26px] font-bold text-white leading-[1.25] tracking-[-0.02em] will-change-transform"
          style={{
            fontFamily: 'var(--font-sans), "Geist", sans-serif',
            textTransform: "none",
          }}
        >
          One studio. Every moving part.
        </h2>

        {/* Paragraph: Geist font, sentence case, crisp solid white */}
        <p
          ref={subtextRef}
          className="text-[13px] sm:text-[13.5px] md:text-[14.5px] text-white leading-[1.5] max-w-[340px] md:max-w-[380px] font-normal opacity-100 will-change-transform"
          style={{
            fontFamily: 'var(--font-sans), "Geist", sans-serif',
            textTransform: "none",
          }}
        >
          Decks, branding, websites, automation &mdash; all handled under one
          roof, so your story stays consistent everywhere it shows up.
        </p>

        {/* CTA Button: • Start a project */}
        <div ref={buttonRef} className="pt-1.5 will-change-transform">
          <a
            href="#contact"
            onClick={handleChatClick}
            className="group inline-flex items-center gap-2 bg-[#141413] hover:bg-black text-white text-[13px] md:text-[14px] font-medium px-4 sm:px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] shadow-md cursor-pointer border border-white/10"
            style={{
              fontFamily: 'var(--font-sans), "Geist", sans-serif',
              textTransform: "none",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white group-hover:scale-125 transition-transform" />
            <span style={{ textTransform: "none" }}>Start a project</span>
          </a>
        </div>
      </div>

      {/* ======================================================== */}
      {/* LAYER 4: BOTTOM-RIGHT VIDEO / PROJECT CARD               */}
      {/* Positioned at bottom right corner cleanly separated      */}
      {/* ======================================================== */}
      <div
        ref={projectCardWrapperRef}
        className="absolute z-30 bottom-7 right-4 sm:bottom-4 sm:right-6 md:bottom-12 md:right-[40px] left-auto translate-x-0 will-change-transform"
      >
        <FlickingProjectStack
          onSelectProject={onSelectProject}
          onScrollToPortfolio={onScrollToPortfolio}
          className="w-[145px] h-[82px] sm:w-[175px] sm:h-[98px] md:w-[220px] md:h-[124px]"
        />
      </div>

      {/* ======================================================== */}
      {/* LAYER 5: COMPACT SCROLL INDICATOR                        */}
      {/* Centered below 3D glass icon, fades out in first 15%     */}
      {/* ======================================================== */}
      <style>{`
        @keyframes scrollDotBounce {
          0%, 100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(7px);
            opacity: 0.35;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .scroll-dot-anim {
            animation: none !important;
          }
        }
      `}</style>
      <button
        ref={scrollIndicatorRef}
        type="button"
        onClick={handleScrollDown}
        aria-label="Scroll to content"
        className="hidden sm:flex absolute bottom-4 md:bottom-5 left-1/2 -translate-x-1/2 z-30 flex-col items-center gap-1 cursor-pointer select-none bg-transparent border-0 p-0 text-white/75 hover:text-white transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none will-change-transform pointer-events-auto"
      >
        <span
          className="text-[12px] font-sans font-normal tracking-[0.08em] select-none text-white/80 transition-colors"
          style={{
            fontFamily: 'var(--font-sans), "Geist", sans-serif',
            textTransform: "none",
          }}
        >
          Scroll
        </span>
        {/* Scroll-mouse icon: compact pill capsule outline roughly 22px wide and 34px tall */}
        <div className="relative w-[22px] h-[34px] rounded-full border-[1.5px] border-white/60 group-hover:border-white flex justify-center pt-1.5 transition-colors">
          <span
            className="w-1 h-1.5 rounded-full bg-white will-change-transform scroll-dot-anim"
            style={{
              animation: "scrollDotBounce 1.5s ease-in-out infinite",
            }}
          />
        </div>
      </button>
    </div>
  )
}
