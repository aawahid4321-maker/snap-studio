import React, { useEffect, useRef, useState, useCallback } from "react"
import { assetUrl } from "@/utils/asset"

export interface ReviewItem {
  id: string
  name: string
  role: string
  company: string
  quote: string
  rating: number
  avatar: string
  avatarBg: string
  companyBadge: {
    icon: React.ReactNode
    name: string
  }
}

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "propertybrain",
    name: "Jeff Prewitt",
    role: "Founder at PropertyBrain",
    company: "PropertyBrain",
    quote:
      "Ankur has been extremely helpful, with the mentoring I have gotten from him, as well as the work he has completed for me with plugin development.",
    rating: 5,
    avatar: assetUrl("/avatars/avatar2.jpg"),
    avatarBg: "bg-[#FFE8DC]",
    companyBadge: {
      name: "PROPERTYBRAIN.",
      icon: (
        <svg
          className="w-3.5 h-3.5 text-current"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      ),
    },
  },
  {
    id: "northbeam",
    name: "Maya Okafor",
    role: "Founder, Northbeam",
    company: "Northbeam",
    quote:
      "The deck they built helped us close our $2.4M seed round in three weeks. Investors specifically praised how clear and institutional our presentation was.",
    rating: 5,
    avatar: assetUrl("/avatars/avatar3.jpg"),
    avatarBg: "bg-[#EAE8FE]",
    companyBadge: {
      name: "NORTHBEAM.",
      icon: (
        <svg
          className="w-3.5 h-3.5 text-current"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      ),
    },
  },
  {
    id: "lumen",
    name: "Daniel Reyes",
    role: "CMO, Lumen & Co",
    company: "Lumen & Co",
    quote:
      "Snap Studio completely rebranded our identity in under two weeks. Every single touchpoint finally feels cohesive, intentional, and high-tier.",
    rating: 5,
    avatar: assetUrl("/avatars/avatar4.jpg"),
    avatarBg: "bg-[#E6F4EA]",
    companyBadge: {
      name: "LUMEN & CO.",
      icon: (
        <svg
          className="w-3.5 h-3.5 text-current"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ),
    },
  },
  {
    id: "gasm",
    name: "Douglas Vance",
    role: "Managing Director, GASM",
    company: "GASM",
    quote:
      "Ankur answered our technical challenges in a concise, authoritative way. He was courteous, prompt, and exceptionally easy to collaborate with.",
    rating: 5,
    avatar: assetUrl("/avatars/avatar1.jpg"),
    avatarBg: "bg-[#FEF0D6]",
    companyBadge: {
      name: "GASM",
      icon: (
        <svg
          className="w-3.5 h-3.5 text-current"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
        </svg>
      ),
    },
  },
  {
    id: "verve",
    name: "Priya Nair",
    role: "Ops Lead, Verve",
    company: "Verve",
    quote:
      "Their automation workflows quietly save us over ten hours a week. Set up once, flawlessly integrated with our CRM, and runs forever without hiccups.",
    rating: 5,
    avatar: assetUrl("/avatars/avatar3.jpg"),
    avatarBg: "bg-[#FCE7F3]",
    companyBadge: {
      name: "VERVE.",
      icon: (
        <svg
          className="w-3.5 h-3.5 text-current"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
    },
  },
  {
    id: "syndicate",
    name: "Marcus Sterling",
    role: "Managing Partner, Syndicate",
    company: "Syndicate",
    quote:
      "Unbelievable attention to detail and execution speed. They delivered a fully responsive, pixel-perfect web application ahead of schedule.",
    rating: 5,
    avatar: assetUrl("/avatars/avatar2.jpg"),
    avatarBg: "bg-[#E0F2FE]",
    companyBadge: {
      name: "SYNDICATE.",
      icon: (
        <svg
          className="w-3.5 h-3.5 text-current"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
  },
]

export default function LinearReviewsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const innerCardRefs = useRef<(HTMLDivElement | null)[]>([])

  // Triplicated review items for continuous infinite horizontal loop
  const items = React.useMemo(
    () => [...REVIEWS_DATA, ...REVIEWS_DATA, ...REVIEWS_DATA],
    [],
  )

  // Animation & Drag state
  const offsetRef = useRef<number>(0)
  const stepWidthRef = useRef<number>(0)
  const singleSetWidthRef = useRef<number>(0)
  const isDraggingRef = useRef<boolean>(false)
  const startXRef = useRef<number>(0)
  const startOffsetRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(performance.now())
  const rafIdRef = useRef<number>(0)

  // Hover tracking
  const hoveredIndexRef = useRef<number | null>(null)
  const hoverProgressRef = useRef<number[]>(new Array(items.length).fill(0))
  const [hoveredIdxState, setHoveredIdxState] = useState<number | null>(null)

  // Speed in pixels per second: steady smooth flow
  const speed = 62

  // Measure card dimensions and step width
  const measureDimensions = useCallback(() => {
    if (cardRefs.current[0] && cardRefs.current[1]) {
      const first = cardRefs.current[0]
      const second = cardRefs.current[1]
      const step = second.offsetLeft - first.offsetLeft
      if (step > 0) {
        stepWidthRef.current = step
        singleSetWidthRef.current = step * REVIEWS_DATA.length
      }
    }
  }, [])

  useEffect(() => {
    measureDimensions()
    window.addEventListener("resize", measureDimensions)
    return () => window.removeEventListener("resize", measureDimensions)
  }, [measureDimensions])

  // Main animation frame: Perfectly continuous, buttery-smooth linear flow (ZERO jumps/jerks)
  useEffect(() => {
    const loop = (currentTime: number) => {
      const delta = (currentTime - lastTimeRef.current) / 1000
      lastTimeRef.current = currentTime

      const singleWidth = singleSetWidthRef.current
      const stepWidth = stepWidthRef.current
      const containerWidth =
        containerRef.current?.clientWidth || window.innerWidth
      const centerX = containerWidth / 2

      // Advance continuously: does NOT pause on cursor hover
      if (!isDraggingRef.current && singleWidth > 0) {
        offsetRef.current -= speed * delta

        // Seamless wrap without visible restart or snap
        if (offsetRef.current <= -singleWidth) {
          offsetRef.current += singleWidth
        } else if (offsetRef.current > 0) {
          offsetRef.current -= singleWidth
        }
      }

      // Apply continuous horizontal track translation
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`
      }

      // Smooth Gaussian center-scaling (continuous, 100% differentiable, zero discontinuities/jerks)
      if (containerWidth > 0 && stepWidth > 0) {
        const focusWidth = stepWidth * 1.15

        for (let i = 0; i < items.length; i++) {
          const cardEl = cardRefs.current[i]
          const innerEl = innerCardRefs.current[i]
          if (!cardEl) continue

          // Horizontal center of card relative to container center
          const cardLeft = offsetRef.current + i * stepWidth
          const cardCenterX = cardLeft + stepWidth / 2
          const diff = cardCenterX - centerX

          // Pure smooth Gaussian curve: peak at 1.0 in center, smoothly decaying to 0
          const t = diff / focusWidth
          const progress = Math.exp(-t * t * 1.8)

          // Smooth hover interpolation
          const targetHover = hoveredIndexRef.current === i ? 1 : 0
          hoverProgressRef.current[i] =
            (hoverProgressRef.current[i] || 0) +
            (targetHover - (hoverProgressRef.current[i] || 0)) * 0.16
          const hProg = hoverProgressRef.current[i]

          // Smooth, satisfying center scale: 0.93x at sides, scaling up to 1.095x at center (+0.035 on hover)
          const scale = 0.93 + progress * 0.165 + hProg * 0.035

          // Continuous opacity: 0.78 to 1.0
          const opacity = 0.78 + progress * 0.22

          // Stacking hierarchy: Center card floats smoothly on top
          const zIndex = Math.round(progress * 25 + hProg * 30)

          // Pure continuous 2D transform
          cardEl.style.transform = `scale(${scale.toFixed(4)})`
          cardEl.style.opacity = `${opacity.toFixed(3)}`
          cardEl.style.zIndex = `${zIndex}`

          // Dynamic drop shadow on inner card: deeper elevation at center
          if (innerEl) {
            const shadowBlur = Math.round(14 + progress * 28 + hProg * 8)
            const shadowY = Math.round(4 + progress * 18 + hProg * 4)
            const shadowAlpha = (0.04 + progress * 0.1 + hProg * 0.04).toFixed(
              3,
            )
            const borderAlpha = (0.12 + progress * 0.22 + hProg * 0.18).toFixed(
              3,
            )

            innerEl.style.boxShadow = `0 ${shadowY}px ${shadowBlur}px -4px rgba(242, 114, 86, ${shadowAlpha}), 0 4px 16px -2px rgba(0, 0, 0, 0.04)`
            innerEl.style.borderColor = `rgba(242, 114, 86, ${borderAlpha})`
          }
        }
      }

      rafIdRef.current = requestAnimationFrame(loop)
    }

    lastTimeRef.current = performance.now()
    rafIdRef.current = requestAnimationFrame(loop)

    return () => cancelAnimationFrame(rafIdRef.current)
  }, [speed, items.length])

  // Pointer drag interactions
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return
    isDraggingRef.current = true
    startXRef.current = e.clientX
    startOffsetRef.current = offsetRef.current

    try {
      e.currentTarget.setPointerCapture(e.pointerId)
    } catch {
      // safe fallback
    }
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return
    const diff = e.clientX - startXRef.current
    const singleWidth = singleSetWidthRef.current
    let nextOffset = startOffsetRef.current + diff

    if (singleWidth > 0) {
      while (nextOffset <= -singleWidth) {
        nextOffset += singleWidth
      }
      while (nextOffset > 0) {
        nextOffset -= singleWidth
      }
    }

    offsetRef.current = nextOffset
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    try {
      e.currentTarget.releasePointerCapture(e.pointerId)
    } catch {
      // safe fallback
    }
  }

  return (
    <div
      className="relative w-full overflow-hidden py-2 md:py-3 select-none cursor-grab active:cursor-grabbing [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* Infinite horizontal marquee track */}
      <div
        ref={trackRef}
        className="relative z-10 flex items-center will-change-transform"
        style={{
          width: "max-content",
        }}
      >
        {items.map((rv, idx) => {
          const isHovered = hoveredIdxState === idx

          return (
            <div
              key={`card-${rv.id}-${idx}`}
              ref={(el) => {
                cardRefs.current[idx] = el
              }}
              /* Landscape card slot with generous equal spacing */
              className="shrink-0 w-[350px] sm:w-[420px] md:w-[460px] lg:w-[480px] px-4 sm:px-5 md:px-6 py-3 sm:py-4"
              style={{
                willChange: "transform, opacity",
                transformOrigin: "center center",
              }}
              onMouseEnter={() => {
                hoveredIndexRef.current = idx
                setHoveredIdxState(idx)
              }}
              onMouseLeave={() => {
                if (hoveredIndexRef.current === idx) {
                  hoveredIndexRef.current = null
                  setHoveredIdxState(null)
                }
              }}
            >
              <div
                ref={(el) => {
                  innerCardRefs.current[idx] = el
                }}
                /* Frosted Glassmorphism Gradient Card */
                className={`relative h-[215px] sm:h-[225px] w-full rounded-[14px] sm:rounded-[16px] md:rounded-[18px] lg:rounded-2xl p-5 sm:p-6 flex flex-col justify-between border transition-all duration-300 cursor-pointer overflow-hidden ${
                  isHovered
                    ? "border-white/40 -translate-y-1"
                    : "border-white/20"
                }`}
                style={{
                  background: isHovered
                    ? "linear-gradient(135deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.06) 40%, rgba(0, 0, 0, 0.55) 100%)"
                    : "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.04) 40%, rgba(0, 0, 0, 0.45) 100%)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  boxShadow: isHovered
                    ? "inset 0 1px 2px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.2), 0 20px 45px rgba(0, 0, 0, 0.35)"
                    : "inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.35), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.15), 0 14px 35px rgba(0, 0, 0, 0.25)",
                }}
              >
                {/* Diagonal Glass Sheen Reflection */}
                <div
                  className="pointer-events-none absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.18)_0%,transparent_60%)]"
                  aria-hidden="true"
                />
                {/* Top Row: Quote icon + 5 stars on left; Avatar on right */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    {/* Quotation icon */}
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 text-white/40"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                    </svg>

                    {/* 5-Star Rating */}
                    <div className="flex items-center gap-1 mt-1.5">
                      {[...Array(rv.rating)].map((_, starIdx) => (
                        <svg
                          key={starIdx}
                          className="w-3.5 h-3.5 text-amber-400 fill-current drop-shadow-sm"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* 3D Memoji Avatar with Pastel Badge */}
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-[6px] sm:rounded-[8px] lg:rounded-xl ${rv.avatarBg} p-0.5 border border-white/20 shadow-inner overflow-hidden flex-shrink-0 transition-transform duration-300 ${
                      isHovered ? "scale-105" : ""
                    }`}
                  >
                    <img
                      src={rv.avatar}
                      alt={rv.name}
                      width="48"
                      height="48"
                      className="w-full h-full object-cover object-top rounded-[5px] sm:rounded-[6px] lg:rounded-lg select-none pointer-events-none"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                </div>

                {/* Middle: Client Testimonial Quote */}
                <p className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-white/95 tracking-[-0.01em] font-normal line-clamp-3">
                  {rv.quote}
                </p>

                {/* Bottom: Author name & role on left; Company Logo Badge on right */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-[14px] font-semibold text-white tracking-[-0.01em] truncate leading-tight">
                      {rv.name}
                    </div>
                    <div className="text-[12px] text-white/60 truncate leading-tight mt-0.5">
                      {rv.role}
                    </div>
                  </div>

                  {/* Minimalist Company Badge */}
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-[11.5px] font-bold tracking-tight text-white/85 uppercase shrink-0">
                    {rv.companyBadge.icon}
                    <span className="font-mono">{rv.companyBadge.name}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
