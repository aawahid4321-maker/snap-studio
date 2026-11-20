import React, { useState, useEffect, useRef, useCallback } from "react"
import { assetUrl } from "@/utils/asset"

import topRef1 from "@/imports/top-ref-1.jpg"
import topRef2 from "@/imports/top-ref-2.jpg"
import topRef3 from "@/imports/top-ref-3.jpg"
import topRef4 from "@/imports/top-ref-4.jpg"
import bottomCard1 from "@/imports/bottom-card-1.jpg"
import bottomCard2 from "@/imports/bottom-card-2.jpg"
import middleRef1 from "@/imports/middle-ref-1.png"
import {
  aivonImages,
  basewayImages,
  finoraImages,
  kiyocareImages,
  noritsuImages,
  wildflowerImages,
} from "@/assets/social-media"

export interface ProjectStackItem {
  id: string
  slug: string
  name: string
  image: string
}

export const FLICKING_PROJECTS: ProjectStackItem[] = [
  // 01. Pitch Deck Design
  {
    id: "bluemore",
    slug: "bluemore",
    name: "Blue More Yachting",
    image: "/work/bluemore/Slide1.PNG",
  },
  {
    id: "driveberry",
    slug: "driveberry",
    name: "DriveBerry Mobile App",
    image: "/work/driveberry/Slide1.PNG",
  },
  {
    id: "knko",
    slug: "knko",
    name: "KNKO Architectural Bureau",
    image: "/work/knko/Slide1.PNG",
  },
  {
    id: "euphorixz",
    slug: "euphorixz",
    name: "Euphorixz Supplements",
    image: "/work/euphorixz/Slide1.PNG",
  },
  {
    id: "roland-donald",
    slug: "roland-donald",
    name: "Roland Donald Heavy Machinery",
    image: "/work/roland-donald/Slide1.PNG",
  },
  {
    id: "lgm-aviation",
    slug: "lgm-aviation",
    name: "LGM Aviation Worldwide",
    image: "/work/lgm-aviation/Slide1.PNG",
  },

  // 02. Logo & Branding
  {
    id: "nodaliq",
    slug: "nodaliq",
    name: "NODALiQ Brand Identity",
    image: "/work/nodaliq/nodaliq-11-business-cards.webp",
  },
  {
    id: "axorix",
    slug: "axorix",
    name: "Axorix Brand Identity",
    image: "/work/axorix/imageye___-_imgi_15_f95a7.webp",
  },
  {
    id: "flex",
    slug: "flex",
    name: "Flex Athletic Performance",
    image: "/work/flex/1.png",
  },
  {
    id: "pypo",
    slug: "pypo",
    name: "Pypo Creative Studio",
    image: "/work/pypo/Slide1.PNG",
  },
  {
    id: "aura",
    slug: "aura",
    name: "Aura Brand Guidelines",
    image: "/work/aura/Slide1.png",
  },
  {
    id: "atma",
    slug: "atma",
    name: "ATMA Architectural Furniture",
    image: "/work/atma/Business Card.png",
  },

  // 03. Social Media Design
  {
    id: "aivon",
    slug: "aivon",
    name: "Aivon Mindful Living",
    image: aivonImages.cover,
  },
  {
    id: "baseway",
    slug: "baseway",
    name: "Baseway Botanical Hydration",
    image: basewayImages.cover,
  },
  {
    id: "finora",
    slug: "finora",
    name: "Finora Haute Horlogerie",
    image: finoraImages.cover,
  },
  {
    id: "kiyocare",
    slug: "kiyocare",
    name: "Kiyocare Clean Skincare",
    image: kiyocareImages.cover,
  },
  {
    id: "noritsu-ai",
    slug: "noritsu-ai",
    name: "NoritsuAI Enterprise Automation",
    image: noritsuImages.cover,
  },
  {
    id: "wildflower-atelier",
    slug: "wildflower-atelier",
    name: "Wildflower Atelier Botanical Couture",
    image: wildflowerImages.cover,
  },

  // 04. UI/UX Design
  {
    id: "mindspace",
    slug: "mindspace",
    name: "Mindspace AI Emotional Wellbeing",
    image: "/work/mindspace/thumbnail.png",
  },
  {
    id: "livearena",
    slug: "livearena",
    name: "LiveArena Match Hub",
    image: "/work/livearena/thumbnail.png",
  },
  {
    id: "nexa",
    slug: "nexa",
    name: "Nexa Crypto Trading",
    image: "/work/nexa/thumbnail.png",
  },

  // 05. Web Development
  {
    id: "web-dev-luxury",
    slug: "web-development",
    name: "Luxury Charter Web Experience",
    image: middleRef1,
  },
  {
    id: "web-dev-hando",
    slug: "web-development",
    name: "Hando Parisian Handroll Bar",
    image: bottomCard1,
  },

  // 06. AI / Automation
  {
    id: "workai",
    slug: "ai-automation",
    name: "WorkAI Workflow Automation",
    image: "/work/workai/Slide1.png",
  },
]

interface RenderedCard {
  id: number
  projectIndex: number
  item: ProjectStackItem
  startRot: number // -10deg to 10deg
  endRot: number // -4deg to 4deg
  isAnimated: boolean
}

interface FlickingProjectStackProps {
  onSelectProject?: (slug: string) => void
  onScrollToPortfolio?: () => void
  className?: string
}

export default function FlickingProjectStack({
  onSelectProject,
  onScrollToPortfolio,
  className = "",
}: FlickingProjectStackProps) {
  const [cardsQueue, setCardsQueue] = useState<RenderedCard[]>(() => [
    {
      id: 1,
      projectIndex: 0,
      item: FLICKING_PROJECTS[0],
      startRot: 0,
      endRot: 0,
      isAnimated: false,
    },
  ])

  const [isHovered, setIsHovered] = useState(false)
  const [isInViewport, setIsInViewport] = useState(true)
  const [isTabVisible, setIsTabVisible] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const idCounterRef = useRef(1)
  const nextIndexRef = useRef(1)

  // Preload all 10 project images upfront so no card ever renders empty
  useEffect(() => {
    FLICKING_PROJECTS.forEach((proj) => {
      const img = new Image()
      img.src = assetUrl(proj.image)
    })
  }, [])

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
      setPrefersReducedMotion(mq.matches)
      const handler = (e: MediaQueryListEvent) =>
        setPrefersReducedMotion(e.matches)
      mq.addEventListener("change", handler)
      return () => mq.removeEventListener("change", handler)
    }
  }, [])

  // Pause when tab is not visible
  useEffect(() => {
    const handleVisibility = () => {
      setIsTabVisible(document.visibilityState === "visible")
    }
    document.addEventListener("visibilitychange", handleVisibility)
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility)
  }, [])

  // Pause when hero section is scrolled out of viewport
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting)
      },
      { threshold: 0.05 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Drop next card in continuous loop (1.2s or 3s if reduced motion)
  const dropNextCard = useCallback(() => {
    const nextProjectIndex = nextIndexRef.current
    nextIndexRef.current = (nextIndexRef.current + 1) % FLICKING_PROJECTS.length
    const nextItem = FLICKING_PROJECTS[nextProjectIndex]

    idCounterRef.current += 1
    // Random start angle (-10deg to 10deg) and settle angle (-4deg to 4deg)
    const startRot = Math.round((Math.random() * 20 - 10) * 10) / 10
    const endRot = Math.round((Math.random() * 8 - 4) * 10) / 10

    const newCard: RenderedCard = {
      id: idCounterRef.current,
      projectIndex: nextProjectIndex,
      item: nextItem,
      startRot,
      endRot,
      isAnimated: true,
    }

    setCardsQueue((prev) => {
      // Keep only resting card and incoming card to prevent messy multi-card edges
      return [...prev.slice(-1), newCard]
    })
  }, [])

  useEffect(() => {
    if (!isInViewport || !isTabVisible || isHovered) return

    const intervalTime = prefersReducedMotion ? 3000 : 1400
    const timer = setInterval(() => {
      dropNextCard()
    }, intervalTime)

    return () => clearInterval(timer)
  }, [
    isInViewport,
    isTabVisible,
    isHovered,
    prefersReducedMotion,
    dropNextCard,
  ])

  // Click or Enter: open case study of the clicked project
  const handleCardClick = () => {
    const topCard = cardsQueue[cardsQueue.length - 1]
    if (!topCard) return

    const slug = topCard.item.slug
    if (onSelectProject) {
      onSelectProject(slug)
    } else {
      window.location.hash = `#/work/${slug}`
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handleCardClick()
    }
  }

  const currentTopCard = cardsQueue[cardsQueue.length - 1]
  const currentProjectName = currentTopCard?.item.name ?? ""

  return (
    <div
      ref={containerRef}
      role="button"
      tabIndex={0}
      aria-label={`View project: ${currentProjectName}`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#EB6E52] rounded-[8px] ${className}`}
    >
      <style>{`
        @keyframes flickCardDrop {
          0% {
            transform: translateY(-28px) scale(1.05) rotate(var(--start-rot, -6deg));
            opacity: 1;
          }
          100% {
            transform: translateY(0) scale(1) rotate(var(--end-rot, 2deg));
            opacity: 1;
          }
        }
      `}</style>

      {/* Main card stack stage: responsive to container dimensions */}
      <div className="relative w-full h-full">
        {/* Base: solid red card (#E62E2D) rotated 4deg (static) */}
        <div
          className="absolute inset-0 rounded-[5px] sm:rounded-[6px] md:rounded-[6px] bg-[#E62E2D] pointer-events-none"
          style={{
            transform: "translate(5px, 5px) md:translate(8px, 8px) rotate(4deg)",
            zIndex: 1,
          }}
          aria-hidden="true"
        />

        {/* Top rendered cards: clean resting card + incoming dropping card */}
        {cardsQueue.map((card, idx) => {
          const isTop = idx === cardsQueue.length - 1

          const cardStyle: React.CSSProperties = {
            zIndex: 5 + idx,
            ...(isTop && isHovered
              ? {
                  transform: `translateY(-6px) scale(1) rotate(${card.endRot}deg)`,
                  transition: "transform 200ms ease-out",
                }
              : isTop && card.isAnimated && !prefersReducedMotion
                ? {
                    "--start-rot": `${card.startRot}deg`,
                    "--end-rot": `${card.endRot}deg`,
                    animation:
                      "flickCardDrop 280ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
                  } as React.CSSProperties
                : {
                    transform: `translateY(0) scale(1) rotate(${card.endRot}deg)`,
                    opacity: 1,
                    transition: prefersReducedMotion
                      ? "opacity 400ms ease-in-out"
                      : undefined,
                  }),
          }

          return (
            <div
              key={card.id}
              className="absolute inset-0 rounded-[5px] sm:rounded-[6px] md:rounded-[6px] overflow-hidden bg-[#18181b] select-none pointer-events-none will-change-transform shadow-lg"
              style={cardStyle}
            >
              <img
                src={assetUrl(card.item.image)}
                alt={card.item.name}
                className="w-full h-full object-cover pointer-events-none"
                loading="eager"
                draggable={false}
                onError={(e) => {
                  const target = e.currentTarget
                  if (target.src !== "/work/bluemore/Slide1.PNG") {
                    target.src = "/work/bluemore/Slide1.PNG"
                  }
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}