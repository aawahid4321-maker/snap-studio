import React, { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SocialMediaCaseStudyConfig } from "@/data/socialMediaCaseStudies"
import { getProjectSocialAssets } from "@/data/socialMediaAssetLoader"
import {
  getStorySectionHeader,
  StorySectionHeader,
} from "@/data/socialMediaStoryData"

// Strict font constant: Geist used everywhere in this section
const FONT_GEIST: React.CSSProperties = {
  fontFamily: 'var(--font-geist), "Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
}

interface SocialMediaCaseStudySectionProps {
  config: SocialMediaCaseStudyConfig
  projectId?: string
}

/**
 * Animated number counter with Geist typography
 */
function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number
  suffix?: string
  prefix?: string
}) {
  const [count, setCount] = useState(target > 20 ? target - 5 : 0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let start = 0
    const duration = 1200
    const startTime = performance.now()

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeProgress * target))

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(updateCount)
  }, [target])

  return (
    <span ref={ref} className="tabular-nums" style={FONT_GEIST}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

/**
 * Marquee Post Card: Renders project's POST images (from posts folder)
 * Uses optimized WebP thumbnail (~800px) with original aspect ratio (4:5 or 1:1)
 * Plain DOM, zero blur filter, zero sibling dimming, pure CSS :hover
 * Clean artwork by default; badge and bottom label appear only on hover
 */
function PostMarqueeCard({
  imageThumb,
  imageFull,
  index,
  total,
  brandName,
  aspectClass,
  onOpenLightbox,
}: {
  imageThumb: string
  imageFull: string
  index: number
  total: number
  brandName: string
  aspectClass: string
  onOpenLightbox: (src: string, title: string) => void
}) {
  const postTitle = `${brandName} — Post ${String(index + 1).padStart(2, "0")}`

  return (
    <div
      onClick={() => onOpenLightbox(imageFull, postTitle)}
      style={{ contain: "layout paint" }}
      className={`group relative flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px] ${aspectClass} rounded-[6px] sm:rounded-[7px] md:rounded-[8px] lg:rounded-[8px] overflow-hidden cursor-pointer border border-white/10 bg-[#12141A] transition-all duration-250 ease-out will-change-transform opacity-100 hover:scale-[1.03] hover:shadow-[0_20px_45px_rgba(0,0,0,0.75)] hover:z-20`}
    >
      <div className="w-full h-full bg-black overflow-hidden rounded-[5px] sm:rounded-[6px] md:rounded-[7px] lg:rounded-[8px]">
        <img
          src={imageThumb}
          alt={postTitle}
          width="800"
          height={aspectClass === "aspect-square" ? "800" : "1000"}
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover rounded-[5px] sm:rounded-[6px] md:rounded-[7px] lg:rounded-[8px] select-none pointer-events-none"
        />
      </div>

      {/* Top Badge: 12px offset (top-3 left-3), smaller, shown ONLY on hover so logos are never covered */}
      <div className="absolute top-3 left-3 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out">
        <span
          style={FONT_GEIST}
          className="px-2 py-0.5 rounded-full bg-black/80 text-[10px] uppercase tracking-wider text-white/90 border border-white/15 shadow-sm"
        >
          POST {index + 1}
        </span>
      </div>
    </div>
  )
}

/**
 * Interactive Before / After Comparison Drag Slider
 */
function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Concept Wireframe",
  afterLabel = "Production Post",
}: {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
}) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.min(Math.max((x / rect.width) * 100, 5), 95)
    setSliderPosition(percentage)
  }, [])

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    handleMove(e.touches[0].clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  return (
    <div
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
      className="relative w-full aspect-[16/9] rounded-[12px] overflow-hidden select-none cursor-ew-resize border border-white/15 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
    >
      {/* After Image */}
      <img
        src={afterImage}
        alt={afterLabel}
        width="1920"
        height="1080"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
      />
      <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-black/80 text-[11px] text-white/90 border border-white/15">
        <span style={FONT_GEIST}>{afterLabel}</span>
      </div>

      {/* Before Image */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          width="1920"
          height="1080"
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          style={{
            width: containerRef.current
              ? `${containerRef.current.offsetWidth}px`
              : "100%",
            height: "100%",
          }}
          loading="eager"
          decoding="async"
        />
        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/80 text-[11px] text-white/90 border border-white/15">
          <span style={FONT_GEIST}>{beforeLabel}</span>
        </div>
      </div>

      {/* Drag Divider Line & Handle */}
      <div
        className="absolute top-0 bottom-0 z-20 w-[2px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)] pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-lg border border-white/40">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 9l-3 3m0 0l3 3m-3-3h14m-3-3l3 3m0 0l-3 3" />
          </svg>
        </div>
      </div>
    </div>
  )
}

/**
 * Main Social Media Case Study Reusable Template Component
 */
export default function SocialMediaCaseStudySection({
  config,
  projectId,
}: SocialMediaCaseStudySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isSectionVisible, setIsSectionVisible] = useState(true)

  // Determine project assets dynamically straight from local project folders
  const projectKey = projectId || config.brandId || config.brandName
  const assets = useMemo(() => {
    return getProjectSocialAssets(projectKey, config.excludedImages)
  }, [projectKey, config.excludedImages])

  // Project-specific story section header
  const storyHeader = useMemo(() => {
    return getStorySectionHeader(assets.slug)
  }, [assets.slug])

  // Check if this is NoritsuAI to conditionally omit the mobile phone section
  const isNoritsu = useMemo(() => {
    return (
      assets.slug === "noritsu-ai" ||
      config.brandId === "noritsu-ai" ||
      projectKey.toLowerCase().includes("noritsu")
    )
  }, [assets.slug, config.brandId, projectKey])

  // Active Story Index state for phone
  const [activeStoryIndex, setActiveStoryIndex] = useState(0)
  const storySectionRef = useRef<HTMLDivElement>(null)
  const [isStorySectionVisible, setIsStorySectionVisible] = useState(false)

  // Navigation handlers
  const handlePrevStory = useCallback(() => {
    if (assets.stories.length <= 1) return
    setActiveStoryIndex((prev) => (prev - 1 + assets.stories.length) % assets.stories.length)
  }, [assets.stories.length])

  const handleNextStory = useCallback(() => {
    if (assets.stories.length <= 1) return
    setActiveStoryIndex((prev) => (prev + 1) % assets.stories.length)
  }, [assets.stories.length])

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxSrc, setLightboxSrc] = useState<string>("")
  const [lightboxTitle, setLightboxTitle] = useState<string>("")
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Toast feedback for color copy
  const [copiedHex, setCopiedHex] = useState<string | null>(null)

  // IntersectionObserver to pause CSS animation when section is off-screen
  useEffect(() => {
    if (!sectionRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting)
      },
      { threshold: 0.05 }
    )
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Observer for Story Highlights section visibility (for keyboard & auto-advance)
  useEffect(() => {
    if (!storySectionRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStorySectionVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )
    observer.observe(storySectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Auto-advance story every 5 seconds (5000ms) with smooth opacity crossfade
  useEffect(() => {
    if (assets.stories.length <= 1 || !isStorySectionVisible || lightboxOpen) return
    const interval = setInterval(() => {
      setActiveStoryIndex((prev) => (prev + 1) % assets.stories.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [assets.stories.length, isStorySectionVisible, lightboxOpen])

  // Keyboard arrow navigation for stories (when story section is in view & lightbox closed)
  useEffect(() => {
    if (lightboxOpen || !isStorySectionVisible || assets.stories.length <= 1) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrevStory()
      } else if (e.key === "ArrowRight") {
        handleNextStory()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen, isStorySectionVisible, assets.stories.length, handlePrevStory, handleNextStory])

  // Master list of all project images for lightbox navigation
  const allProjectImages = useMemo(() => {
    const list: { src: string; title: string }[] = []
    assets.posts.forEach((src, i) => {
      list.push({ src, title: `${assets.name} — Post ${i + 1}` })
    })
    assets.stories.forEach((src, i) => {
      list.push({ src, title: `${assets.name} — Story ${i + 1}` })
    })
    assets.ratio16x9.forEach((src, i) => {
      list.push({ src, title: `${assets.name} — 16:9 Banner ${i + 1}` })
    })
    return list
  }, [assets])

  // Open Lightbox
  const handleOpenLightbox = (src: string, title?: string) => {
    const foundIdx = allProjectImages.findIndex((item) => item.src === src)
    setLightboxSrc(src)
    setLightboxTitle(title || `${assets.name} — Asset`)
    setLightboxIndex(foundIdx >= 0 ? foundIdx : 0)
    setLightboxOpen(true)
  }

  // Close Lightbox
  const handleCloseLightbox = () => {
    setLightboxOpen(false)
  }

  // Lightbox keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseLightbox()
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => {
          const next = (prev + 1) % allProjectImages.length
          setLightboxSrc(allProjectImages[next].src)
          setLightboxTitle(allProjectImages[next].title)
          return next
        })
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => {
          const next = (prev - 1 + allProjectImages.length) % allProjectImages.length
          setLightboxSrc(allProjectImages[next].src)
          setLightboxTitle(allProjectImages[next].title)
          return next
        })
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen, allProjectImages])

  // Copy hex swatch
  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex)
    setCopiedHex(hex)
    setTimeout(() => setCopiedHex(null), 2000)
  }

  // Split project posts for Marquee Row 1 and Row 2
  // Uses optimized WebP thumbnails for smooth 60fps marquee rendering
  const { row1Posts, row2Posts } = useMemo(() => {
    const thumbs = assets.postsThumb
    const fulls = assets.posts
    const total = thumbs.length

    if (total <= 6) {
      return {
        row1Posts: thumbs.map((t, i) => ({ thumb: t, full: fulls[i], idx: i })),
        row2Posts: [...thumbs].reverse().map((t, i) => ({ thumb: t, full: fulls[total - 1 - i], idx: total - 1 - i })),
      }
    }

    const mid = Math.ceil(total / 2)
    const r1 = thumbs.slice(0, mid).map((t, i) => ({ thumb: t, full: fulls[i], idx: i }))
    const r2 = thumbs.slice(mid).map((t, i) => ({ thumb: t, full: fulls[mid + i], idx: mid + i }))
    return { row1Posts: r1, row2Posts: r2 }
  }, [assets.postsThumb, assets.posts])

  // Before / After slider images: Uses 16:9 widescreen images
  const beforeAfterImages = useMemo(() => {
    if (assets.ratio16x9.length >= 2) {
      return {
        before: assets.ratio16x9[1],
        after: assets.ratio16x9[0],
      }
    }
    if (assets.ratio16x9.length === 1) {
      return {
        before: assets.ratio16x9[0],
        after: assets.ratio16x9[0],
      }
    }
    return {
      before: assets.posts[1] || assets.posts[0],
      after: assets.posts[0],
    }
  }, [assets.ratio16x9, assets.posts])

  // Performance: Keep maximum 3 stories mounted (previous, current, next)
  const mountedStoryIndices = useMemo(() => {
    const total = assets.stories.length
    if (total === 0) return []
    if (total <= 3) return Array.from({ length: total }, (_, i) => i)

    const prev = (activeStoryIndex - 1 + total) % total
    const curr = activeStoryIndex % total
    const next = (activeStoryIndex + 1) % total
    return Array.from(new Set([prev, curr, next]))
  }, [activeStoryIndex, assets.stories.length])

  return (
    <div
      ref={sectionRef}
      style={{ contentVisibility: "auto", ...FONT_GEIST }}
      className="relative w-full bg-[#0A0A0B] text-white overflow-x-clip selection:bg-coral selection:text-white"
    >
      {/* Ambient Background Gradient Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25"
          style={{ background: config.accentColor || "#1E40AF" }}
        />
        <div
          className="absolute top-1/3 -right-40 w-[650px] h-[650px] rounded-full blur-[160px] opacity-20"
          style={{ background: config.primaryColor || "#3B82F6" }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-[700px] h-[700px] rounded-full blur-[180px] opacity-15"
          style={{ background: config.gradientColors?.[0] || config.primaryColor || "#0E2448" }}
        />
      </div>

      {/* ======================================================== */}
      {/* 1. ANIMATED STATS STRIP                                  */}
      {/* ======================================================== */}
      <section className="relative z-10 max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12 pt-16 sm:pt-20 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 p-6 sm:p-8 rounded-[12px] bg-white text-[#0A0A0B] border border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
          <div className="flex flex-col">
            <span
              style={FONT_GEIST}
              className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-[#6B7280] font-semibold mb-1"
            >
              Feed Posts
            </span>
            <div
              style={FONT_GEIST}
              className="text-[32px] sm:text-[44px] font-bold text-[#0A0A0B] tracking-tight flex items-baseline"
            >
              <AnimatedCounter target={assets.posts.length || 16} suffix="+" />
            </div>
            <span style={FONT_GEIST} className="text-[12px] text-[#6B7280] mt-1 font-medium">
              Curated Production Assets
            </span>
          </div>

          <div className="flex flex-col">
            <span
              style={FONT_GEIST}
              className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-[#6B7280] font-semibold mb-1"
            >
              16:9 Motion Banners
            </span>
            <div
              style={FONT_GEIST}
              className="text-[32px] sm:text-[44px] font-bold text-[#0A0A0B] tracking-tight flex items-baseline"
            >
              <AnimatedCounter target={assets.ratio16x9.length || 4} />
            </div>
            <span style={FONT_GEIST} className="text-[12px] text-[#6B7280] mt-1 font-medium">
              Landscape Master Suites
            </span>
          </div>

          <div className="flex flex-col">
            <span
              style={FONT_GEIST}
              className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-[#6B7280] font-semibold mb-1"
            >
              Stories Recorded
            </span>
            <div
              style={FONT_GEIST}
              className="text-[32px] sm:text-[44px] font-bold text-[#0A0A0B] tracking-tight flex items-baseline"
            >
              <AnimatedCounter target={assets.stories.length || 12} suffix="+" />
            </div>
            <span style={FONT_GEIST} className="text-[12px] text-[#6B7280] mt-1 font-medium">
              9:16 Vertical Stories
            </span>
          </div>

          <div className="flex flex-col">
            <span
              style={FONT_GEIST}
              className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-[#6B7280] font-semibold mb-1"
            >
              Sprint Velocity
            </span>
            <div
              style={FONT_GEIST}
              className="text-[32px] sm:text-[44px] font-bold text-[#0A0A0B] tracking-tight flex items-baseline"
            >
              <AnimatedCounter target={4} suffix=" Wks" />
            </div>
            <span style={FONT_GEIST} className="text-[12px] text-[#6B7280] mt-1 font-medium">
              Concept to Full Rollout
            </span>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. INFINITE MARQUEE SECTION: USES POST IMAGES (POSTS)    */}
      {/*    Uncropped original aspect ratio, pure CSS translate3d */}
      {/* ======================================================== */}
      {row1Posts.length > 0 && (
        <section className="relative z-10 py-16 sm:py-24 overflow-hidden">
          {/* Section Header */}
          <div className="max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12 mb-8 sm:mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-coral animate-ping" />
              <span
                style={FONT_GEIST}
                className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] text-white/60 font-semibold"
              >
                ( EDITORIAL FEED · INFINITE MARQUEE )
              </span>
            </div>
            <h2
              style={FONT_GEIST}
              className="text-[28px] sm:text-[40px] md:text-[48px] font-bold text-white tracking-tight leading-[1.1]"
            >
              Editorial Motion &amp;{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #F27256, #FF7D5C, #CF232B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="bg-gradient-to-r from-coral via-[#FF7D5C] to-red bg-clip-text text-transparent"
              >
                Feed Architecture
              </span>
            </h2>
            <p
              style={FONT_GEIST}
              className="text-[15px] sm:text-[17px] text-white/65 max-w-2xl font-light mt-3"
            >
              Production social post graphics engineered exclusively for {assets.name}. Uncropped at their authentic aspect ratio, pixel-sharp, and smoothly animated.
            </p>
          </div>

          {/* MARQUEE ROW 1: Scrolls Left with CSS translate3d, duplicated only once */}
          <div className="relative w-full py-6 sm:py-8 overflow-x-clip overflow-y-visible group/marquee">
            <div
              className="marquee-track-left group-hover/marquee:[animation-play-state:paused]"
              style={{
                animationPlayState: !isSectionVisible || lightboxOpen ? "paused" : undefined,
              }}
            >
              {[...row1Posts, ...row1Posts].map((item, idx) => (
                <div key={`m-r1-${item.idx}-${idx}`} className="mr-5 sm:mr-7">
                  <PostMarqueeCard
                    imageThumb={item.thumb}
                    imageFull={item.full}
                    index={item.idx}
                    total={assets.posts.length}
                    brandName={assets.name}
                    aspectClass={assets.postAspectRatio}
                    onOpenLightbox={handleOpenLightbox}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* MARQUEE ROW 2: Scrolls Right with CSS translate3d, duplicated only once */}
          <div className="relative w-full py-6 sm:py-8 overflow-x-clip overflow-y-visible group/marquee">
            <div
              className="marquee-track-right group-hover/marquee:[animation-play-state:paused]"
              style={{
                animationPlayState: !isSectionVisible || lightboxOpen ? "paused" : undefined,
              }}
            >
              {[...row2Posts, ...row2Posts].map((item, idx) => (
                <div key={`m-r2-${item.idx}-${idx}`} className="mr-5 sm:mr-7">
                  <PostMarqueeCard
                    imageThumb={item.thumb}
                    imageFull={item.full}
                    index={item.idx}
                    total={assets.posts.length}
                    brandName={assets.name}
                    aspectClass={assets.postAspectRatio}
                    onOpenLightbox={handleOpenLightbox}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ======================================================== */}
      {/* 3. MOBILE / PHONE SECTION: STORIES (1080x1920 9:16)       */}
      {/*    Centered Phone Mockup, Exact 9:16 Screen Aspect Ratio  */}
      {/* ======================================================== */}
      {assets.stories.length > 0 && !isNoritsu && (
        <section
          ref={storySectionRef}
          className="relative z-10 max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12 py-16 sm:py-24 border-t border-white/10"
        >
          {/* Centered Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-3.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-coral animate-ping" />
              <span
                style={FONT_GEIST}
                className="text-[11px] uppercase tracking-[0.2em] text-white/70 font-semibold"
              >
                ( 01 — {String(assets.stories.length).padStart(2, "0")} ) STORY HIGHLIGHTS
              </span>
            </div>
            <h3
              style={FONT_GEIST}
              className="text-[30px] sm:text-[42px] font-bold text-white tracking-tight leading-[1.12] mb-3"
            >
              {storyHeader.prefix}{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #F27256, #FF7D5C, #CF232B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="bg-gradient-to-r from-coral via-[#FF7D5C] to-red bg-clip-text text-transparent inline-block"
              >
                {storyHeader.highlight}
              </span>
            </h3>
            <p
              style={FONT_GEIST}
              className="text-[15px] sm:text-[17px] text-white/65 font-light leading-relaxed"
            >
              {storyHeader.intro}
            </p>
          </div>

          {/* Centered Phone Container with Desktop Flanking Arrows */}
          <div className="relative flex items-center justify-center gap-6 sm:gap-10 mx-auto w-full">
            {/* Desktop Left Arrow Button */}
            <button
              onClick={handlePrevStory}
              aria-label="Previous Story"
              className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/70 hover:text-white transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg flex-shrink-0"
              title="Previous Story (←)"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Phone Mockup Frame (iPhone 15 Pro proportions, EXACT 9:16 screen) */}
            <div className="story-phone-frame relative mx-auto rounded-[52px] p-[10px] bg-[#1C1F26] border-[4px] border-[#303642] shadow-[0_30px_90px_rgba(0,0,0,0.8)] overflow-hidden flex-shrink-0">
              {/* Phone Screen Container: EXACT 9:16 aspect ratio, background #000, rounded corners */}
              <div
                className="relative w-full h-full rounded-[42px] overflow-hidden bg-black select-none"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  width: "100%",
                  height: "100%",
                  aspectRatio: "9 / 16",
                  background: "#000",
                }}
              >
                {/* Dynamic Island Notch Overlay (Compact, does not obscure important content) */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 w-20 h-4.5 rounded-full bg-black/95 flex items-center justify-between px-2.5 pointer-events-none shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#151515] border border-white/20" />
                  <span className="w-2 h-2 rounded-full bg-[#00e5ff]/25 blur-[0.5px]" />
                </div>

                {/* Top Story Progress Bars: Thin, low opacity, inside safe area */}
                <div className="absolute top-8 inset-x-3.5 z-30 flex gap-1 pointer-events-none opacity-60">
                  {assets.stories.slice(0, Math.min(assets.stories.length, 16)).map((_, i) => {
                    const totalBars = Math.min(assets.stories.length, 16)
                    const activeMod = activeStoryIndex % assets.stories.length
                    const isBarActive = i === (activeMod % totalBars)
                    const isBarPassed = i < (activeMod % totalBars)
                    return (
                      <div
                        key={i}
                        className="h-[1.5px] flex-1 rounded-full overflow-hidden bg-white/25"
                      >
                        <div
                          className={`h-full transition-all duration-300 ${isBarActive ? "w-full bg-white" : isBarPassed ? "w-full bg-white/70" : "w-0"
                            }`}
                        />
                      </div>
                    )
                  })}
                </div>

                {/* Performance-optimized: Mount max 3 stories (prev, curr, next) with object-fit: contain */}
                {mountedStoryIndices.map((idx) => {
                  const fullSrc = assets.stories[idx]
                  const thumbSrc = assets.storiesThumb[idx] || fullSrc
                  if (!fullSrc) return null
                  const isCurrent = idx === (activeStoryIndex % assets.stories.length)
                  return (
                    <div
                      key={`story-slide-${idx}`}
                      className="absolute inset-0 w-full h-full transition-opacity duration-500 ease-out"
                      style={{
                        opacity: isCurrent ? 1 : 0,
                        pointerEvents: isCurrent ? "auto" : "none",
                      }}
                    >
                      {/* Skeleton Fallback underneath image */}
                      <div className="absolute inset-0 w-full h-full bg-[#111318] flex items-center justify-center select-none animate-pulse">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                          <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        </div>
                      </div>

                      <img
                        src={thumbSrc}
                        alt={`${assets.name} Story ${idx + 1}`}
                        width="1080"
                        height="1920"
                        loading="eager"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-contain select-none"
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                        onError={(e) => {
                          // Fallback to full resolution if thumbnail fails
                          const target = e.currentTarget
                          if (target.src !== fullSrc) {
                            target.src = fullSrc
                          }
                        }}
                      />
                    </div>
                  )
                })}

                {/* Invisible Left Tap Zone (previous story) */}
                <div
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePrevStory()
                  }}
                  className="absolute inset-y-0 left-0 w-[35%] z-20 cursor-pointer"
                  title="Previous Story"
                  aria-label="Previous Story"
                />

                {/* Invisible Right Tap Zone (next story) */}
                <div
                  onClick={(e) => {
                    e.stopPropagation()
                    handleNextStory()
                  }}
                  className="absolute inset-y-0 right-0 w-[65%] z-20 cursor-pointer"
                  title="Next Story"
                  aria-label="Next Story"
                />
              </div>
            </div>

            {/* Desktop Right Arrow Button */}
            <button
              onClick={handleNextStory}
              aria-label="Next Story"
              className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/70 hover:text-white transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg flex-shrink-0"
              title="Next Story (→)"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Bottom Story Controls: Counter, Mobile Arrows, and Expand Button (Outside screen) */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-7">
            {/* Mobile Left Arrow Button */}
            <button
              onClick={handlePrevStory}
              aria-label="Previous Story"
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/80 transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Story Counter: e.g. "03 / 30" */}
            <div
              style={FONT_GEIST}
              className="px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 text-[13px] font-medium text-white/90 tabular-nums flex items-center gap-2 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
              <span className="text-white font-semibold">
                {String(activeStoryIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-white/40">/</span>
              <span className="text-white/60">
                {String(assets.stories.length).padStart(2, "0")}
              </span>
            </div>

            {/* Mobile Right Arrow Button */}
            <button
              onClick={handleNextStory}
              aria-label="Next Story"
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/80 transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Expand Fullscreen Button (Placed outside the phone) */}
            <button
              onClick={() => {
                const currentFull = assets.stories[activeStoryIndex]
                if (currentFull) {
                  handleOpenLightbox(currentFull, `${assets.name} — Story ${activeStoryIndex + 1}`)
                }
              }}
              style={FONT_GEIST}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 text-white/70 hover:text-white text-[12px] font-medium transition-all cursor-pointer ml-1"
              title="Expand Full Resolution"
              aria-label="Expand Full Resolution"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <span className="hidden sm:inline">Expand Full Res</span>
            </button>
          </div>
        </section>
      )}

      {/* ======================================================== */}
      {/* 4. SCREENS / EVOLUTION SECTION: USES 16:9 IMAGES          */}
      {/*    Compare 16:9 landscape suite assets, uncropped        */}
      {/*    (The 16:9 Widescreen Repertoire banner block removed) */}
      {/* ======================================================== */}
      <section className="relative z-10 max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12 py-20 sm:py-28 border-t border-white/10">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span
            style={FONT_GEIST}
            className="text-[11px] uppercase tracking-[0.2em] text-coral block mb-2 font-semibold"
          >
            ( 16:9 WIDESCREEN SUITE )
          </span>
          <h3
            style={FONT_GEIST}
            className="text-[30px] sm:text-[42px] font-bold text-white tracking-tight"
          >
            Campaign Evolution
          </h3>
          <p
            style={FONT_GEIST}
            className="text-[15px] sm:text-[17px] text-white/60 font-light mt-2"
          >
            Compare 16:9 horizontal master banners designed for {assets.name}. Drag the slider left &amp; right to inspect.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <BeforeAfterSlider
            beforeImage={beforeAfterImages.before}
            afterImage={beforeAfterImages.after}
            beforeLabel="Motion Concept 01"
            afterLabel="Final Master Suite"
          />
          <p
            style={FONT_GEIST}
            className="text-center text-[11px] text-white/40 tracking-wider uppercase mt-4"
          >
            ← Drag slider left &amp; right to compare →
          </p>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. BRAND COLOR PALETTE & TYPOGRAPHY CHIPS                */}
      {/* ======================================================== */}
      {config.palette && (
        <section className="relative z-10 max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12 py-20 sm:py-24 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Color Swatches */}
            <div className="lg:col-span-6">
              <span
                style={FONT_GEIST}
                className="text-[11px] uppercase tracking-[0.2em] text-coral block mb-2 font-semibold"
              >
                ( COLOR ARCHITECTURE )
              </span>
              <h4
                style={FONT_GEIST}
                className="text-[26px] sm:text-[34px] font-bold text-white tracking-tight mb-2"
              >
                Curated Brand Swatches
              </h4>
              <p
                style={FONT_GEIST}
                className="text-[14px] text-white/60 font-light mb-8"
              >
                Click any swatch to copy its hexadecimal color value directly to clipboard.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {config.palette.colors.map((c) => (
                  <div
                    key={c.hex}
                    onClick={() => handleCopyHex(c.hex)}
                    className="p-3.5 rounded-[10px] bg-white border border-black/10 hover:border-black/25 cursor-pointer transition-all flex flex-col gap-3 group hover:-translate-y-1 shadow-sm"
                  >
                    <div
                      className="w-full aspect-square rounded-[6px] border border-black/10 shadow-inner transition-transform group-hover:scale-105"
                      style={{ background: c.hex }}
                    />
                    <div>
                      <span
                        style={FONT_GEIST}
                        className="text-[12px] font-semibold text-[#0A0A0B] block truncate"
                      >
                        {c.name}
                      </span>
                      <span
                        style={FONT_GEIST}
                        className="text-[11px] text-[#6B7280] block group-hover:text-coral transition-colors font-medium"
                      >
                        {copiedHex === c.hex ? "Copied!" : c.hex}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography Chips */}
            <div className="lg:col-span-6">
              <span
                style={FONT_GEIST}
                className="text-[11px] uppercase tracking-[0.2em] text-coral block mb-2 font-semibold"
              >
                ( TYPOGRAPHIC SYSTEM )
              </span>
              <h4
                style={FONT_GEIST}
                className="text-[26px] sm:text-[34px] font-bold text-white tracking-tight mb-2"
              >
                Display &amp; Body Pairs
              </h4>
              <p
                style={FONT_GEIST}
                className="text-[14px] text-white/60 font-light mb-8"
              >
                Unified typographic rhythm engineered for modern social storytelling with Geist.
              </p>

              <div className="flex flex-col gap-4">
                <div className="p-5 rounded-[10px] bg-white border border-black/10 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      style={FONT_GEIST}
                      className="text-[11px] uppercase tracking-wider text-coral font-semibold"
                    >
                      Primary Title · Geist
                    </span>
                    <span style={FONT_GEIST} className="text-[11px] text-[#6B7280] font-medium">
                      Bold / 700
                    </span>
                  </div>
                  <div
                    style={FONT_GEIST}
                    className="text-[24px] sm:text-[28px] font-bold text-[#0A0A0B] tracking-tight leading-snug"
                  >
                    {assets.name.toUpperCase()} REIMAGINED
                  </div>
                </div>

                <div className="p-5 rounded-[10px] bg-white border border-black/10 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      style={FONT_GEIST}
                      className="text-[11px] uppercase tracking-wider text-coral font-semibold"
                    >
                      Editorial Body · Geist
                    </span>
                    <span style={FONT_GEIST} className="text-[11px] text-[#6B7280] font-medium">
                      Regular / 400
                    </span>
                  </div>
                  <div
                    style={FONT_GEIST}
                    className="text-[15px] sm:text-[16px] text-[#374151] font-normal leading-relaxed"
                  >
                    Engineered for thumb-stopping clarity and modern social storytelling across digital feeds.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ======================================================== */}
      {/* 6. FULLSCREEN LIGHTBOX (solid rgba background, no blur)  */}
      {/* ======================================================== */}
      <AnimatePresence>
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 select-none"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.88)" }}
            onClick={handleCloseLightbox}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseLightbox}
              className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation: Previous */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIndex((prev) => {
                  const next = (prev - 1 + allProjectImages.length) % allProjectImages.length
                  setLightboxSrc(allProjectImages[next].src)
                  setLightboxTitle(allProjectImages[next].title)
                  return next
                })
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Navigation: Next */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIndex((prev) => {
                  const next = (prev + 1) % allProjectImages.length
                  setLightboxSrc(allProjectImages[next].src)
                  setLightboxTitle(allProjectImages[next].title)
                  return next
                })
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Central Master Image Display */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] flex flex-col items-center"
            >
              <img
                key={lightboxSrc}
                src={lightboxSrc}
                alt={lightboxTitle}
                className="max-w-full max-h-[75vh] object-contain rounded-[12px] shadow-[0_25px_70px_rgba(0,0,0,0.9)]"
              />

              <div className="mt-4 text-center">
                <h4 style={FONT_GEIST} className="text-white text-base sm:text-lg font-bold">
                  {lightboxTitle}
                </h4>
                <p style={FONT_GEIST} className="text-white/60 text-xs mt-1">
                  Asset {lightboxIndex + 1} of {allProjectImages.length} · Use Arrow Keys or ESC
                </p>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Pure CSS Hardware-Accelerated Marquee Animations using translate3d */}
      <style>{`
        @keyframes marqueeTranslateLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @keyframes marqueeTranslateRight {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .marquee-track-left {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marqueeTranslateLeft 36s linear infinite;
        }
        .marquee-track-right {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marqueeTranslateRight 40s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track-left,
          .marquee-track-right {
            animation: none !important;
          }
        }
        .story-phone-frame {
          width: min(82vw, 360px);
          height: calc((min(82vw, 360px) - 28px) * (16 / 9) + 28px);
        }
        @media (min-width: 1024px) {
          .story-phone-frame {
            height: min(88vh, 860px);
            width: calc((min(88vh, 860px) - 28px) * (9 / 16) + 28px);
          }
        }
      `}</style>
    </div>
  )
}
