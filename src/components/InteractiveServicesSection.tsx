import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { assetUrl } from "@/utils/asset"
import topRef1 from "@/imports/top-ref-1.jpg"
import topRef2 from "@/imports/top-ref-2.jpg"
import topRef3 from "@/imports/top-ref-3.jpg"
import topRef4 from "@/imports/top-ref-4.jpg"
import bottomCard1 from "@/imports/bottom-card-1.jpg"
import bottomCard4 from "@/imports/bottom-card-4.png"
import middleRef1 from "@/imports/middle-ref-1.png"
import {
  aivonImages,
  basewayImages,
  finoraImages,
  kiyocareImages,
  noritsuImages,
  wildflowerImages,
} from "@/assets/social-media"

interface ServiceItem {
  num: string
  title: string
  slug: string
  tags: string
  desc: string
  covers: string[]
}

const SERVICES_DATA: ServiceItem[] = [
  {
    num: "01",
    title: "Pitch Deck Design",
    slug: "pitch-deck-design",
    tags: "INVESTOR DECKS / STORYTELLING",
    desc: "Investor decks built around a story that holds attention.",
    covers: [
      assetUrl("/work/knko/Slide1.PNG"),
      assetUrl("/work/bluemore/Slide1.PNG"),
      assetUrl("/work/driveberry/Slide1.PNG"),
      assetUrl("/work/euphorixz/Slide1.PNG"),
      assetUrl("/work/roland-donald/Slide1.PNG"),
      assetUrl("/work/lgm-aviation/Slide1.PNG"),
    ],
  },
  {
    num: "02",
    title: "Logo & Branding",
    slug: "logo-and-branding",
    tags: "IDENTITY / GUIDELINES",
    desc: "Identities people recognize and remember.",
    covers: [
      assetUrl("/work/nodaliq/nodaliq-11-business-cards.webp"),
      assetUrl("/work/nodaliq/nodaliq-14.webp"),
      assetUrl("/work/axorix/imageye___-_imgi_15_f95a7.webp"),
      assetUrl("/work/flex/1.png"),
      assetUrl("/work/pypo/Slide1.PNG"),
      assetUrl("/work/atma/Cover.png"),
      assetUrl("/work/aura/Slide1.png"),
    ],
  },
  {
    num: "03",
    title: "Social Media Design",
    slug: "social-media-design",
    tags: "CONTENT / CAMPAIGNS",
    desc: "Content that stops the scroll and keeps your brand consistent.",
    covers: [
      aivonImages.cover,
      basewayImages.cover,
      finoraImages.cover,
      kiyocareImages.cover,
      noritsuImages.cover,
      wildflowerImages.cover,
    ],
  },
  {
    num: "04",
    title: "UI/UX Design",
    slug: "ui-ux-design",
    tags: "PRODUCT / INTERFACES",
    desc: "Interfaces that feel effortless to use.",
    covers: [
      assetUrl("/work/mindspace/thumbnail.png"),
      assetUrl("/work/livearena/thumbnail.png"),
      assetUrl("/work/nexa/thumbnail.png"),
    ],
  },
  {
    num: "05",
    title: "Web Development",
    slug: "web-development",
    tags: "WEB DEV / CONVERSION",
    desc: "Sites built to convert, not just exist.",
    covers: [middleRef1, bottomCard1],
  },
  {
    num: "06",
    title: "Ai / Automation",
    slug: "ai-automation",
    tags: "LEADS / REPORTING / SCHEDULING",
    desc: "Custom workflows that handle lead follow-ups, reporting, and scheduling — so your team can focus on growth.",
    covers: [assetUrl("/work/workai/Slide1.png")],
  },
]

interface InteractiveServicesSectionProps {
  onSelectService?: (slug: string) => void
}

export default function InteractiveServicesSection({
  onSelectService,
}: InteractiveServicesSectionProps = {}) {
  // activeServiceIndex tracks which service preview is currently shown in the left card.
  // Defaults to 0 ("Pitch Deck Design") on page load.
  const [activeServiceIndex, setActiveServiceIndex] = useState<number>(0)
  const [hoveredRowIndex, setHoveredRowIndex] = useState<number | null>(null)

  // activeImageIndex tracks cover cycling for the currently active service.
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0)

  // Preload all service cover images on mount so crossfades are instant and never stutter
  useEffect(() => {
    SERVICES_DATA.forEach((service) => {
      service.covers.forEach((src) => {
        const img = new Image()
        img.src = src
      })
    })
  }, [])

  // Smooth cycling loop: cycles through all project covers of the hovered service seamlessly every 520ms
  useEffect(() => {
    // When mouse moves off list entirely, stop cycling and freeze on whichever image was last shown
    if (hoveredRowIndex === null) return

    // On mobile / touch devices where hover doesn't exist, skip cycling animation
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(hover: none), (pointer: coarse)").matches
    ) {
      return
    }

    const currentCovers = SERVICES_DATA[hoveredRowIndex]?.covers || []
    if (currentCovers.length <= 1) return

    const intervalId = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % currentCovers.length)
    }, 520)

    return () => clearInterval(intervalId)
  }, [hoveredRowIndex])

  const handleRowMouseEnter = (idx: number) => {
    setHoveredRowIndex(idx)
    if (activeServiceIndex !== idx) {
      setActiveServiceIndex(idx)
      setActiveImageIndex(0)
    }
  }

  const handleListMouseLeave = () => {
    // Stops cycling and freezes on whichever image was last shown
    setHoveredRowIndex(null)
  }

  const handleServiceClick = (slug: string) => {
    if (onSelectService) {
      onSelectService(slug)
    } else {
      window.location.hash = `#/category/${slug}`
    }
  }

  return (
    <section
      id="services"
      className="services-section bg-[#0A0A0A] text-[#FFFFFF] py-14 sm:py-20 lg:py-24 relative overflow-visible select-none"
    >
      <div className="mx-auto max-w-[1720px] px-4 sm:px-6 md:px-8 xl:px-10 w-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-14 items-start justify-between w-full">
          {/* LEFT COLUMN: Sticky on desktop (1024px+) with clean navbar clearance */}
          <div className="w-full lg:w-[44%] xl:w-[43%] max-w-[760px] lg:sticky lg:top-[55px] self-start shrink-0">
            {/* Header Text Block: moved upper as requested */}
            <div className="-mt-6 sm:-mt-10 lg:-mt-16">
              {/* 1. Label Row */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-[#CF232B] font-medium">
                  (02)
                </span>
                <span className="inline-block w-[40px] h-[1.5px] bg-[#CF232B] shrink-0" />
                <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-[#CF232B] font-medium">
                  SERVICES
                </span>
              </div>

              {/* 2. Heading: "What we do." ("do." with brand coral-to-red gradient, no italics, single line, medium font) */}
              <h2
                className="mt-3 text-[clamp(32px,4.2vw,56px)] font-medium leading-[1.1] tracking-[-0.03em] text-[#FFFFFF] font-sans whitespace-nowrap"
                style={{
                  fontFamily: '"Geist", var(--font-sans), sans-serif',
                  fontWeight: 500,
                }}
              >
                What we{" "}
                <span
                  className="text-gradient inline-block font-medium"
                  style={{ fontWeight: 500 }}
                >
                  do.
                </span>
              </h2>

              {/* 3. Subtitle */}
              <p className="mt-2 text-[14px] md:text-[15px] leading-relaxed text-white/65 max-w-md font-normal">
                Design that gets noticed. Automation that saves time.
              </p>
            </div>

            {/* 4. Preview Frame (compact on mobile, full size on desktop) */}
            <div
              onClick={() =>
                handleServiceClick(SERVICES_DATA[activeServiceIndex].slug)
              }
              className="mt-5 sm:mt-8 lg:mt-10 w-full max-w-[480px] sm:max-w-[760px] rounded-[12px] sm:rounded-xl border border-white/12 bg-white/[0.03] p-2 sm:p-[20px] relative overflow-hidden transition-all duration-300 hover:border-white/30 cursor-pointer group shadow-none drop-shadow-none mx-auto lg:mx-0"
              style={{
                aspectRatio: "725 / 407",
              }}
              title={`View ${SERVICES_DATA[activeServiceIndex].title} portfolio`}
            >
              <div className="relative w-full h-full overflow-hidden rounded-[5px] sm:rounded-[8px] bg-black">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={`${SERVICES_DATA[activeServiceIndex].slug}-${activeImageIndex % SERVICES_DATA[activeServiceIndex].covers.length}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.38, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={
                        SERVICES_DATA[activeServiceIndex].covers[
                          activeImageIndex %
                            SERVICES_DATA[activeServiceIndex].covers.length
                        ]
                      }
                      alt={SERVICES_DATA[activeServiceIndex].title}
                      className="w-full h-full object-cover rounded-[5px] sm:rounded-[8px] border border-white/[0.08] transition-transform duration-700 group-hover:scale-[1.02]"
                      loading="eager"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Active service tag indicator under preview (single clean line on all screens) */}
            <div
              key={`indicator-${activeServiceIndex}`}
              onClick={() =>
                handleServiceClick(SERVICES_DATA[activeServiceIndex].slug)
              }
              className="mt-2.5 sm:mt-3.5 flex items-center justify-between text-white/50 font-mono text-[9.5px] sm:text-[11px] max-w-[480px] sm:max-w-[760px] mx-auto lg:mx-0 transition-opacity duration-300 cursor-pointer hover:text-white whitespace-nowrap overflow-hidden gap-2"
            >
              <span className="uppercase tracking-[0.05em] sm:tracking-[0.12em] text-[#F27256] transition-all duration-300 font-medium flex items-center gap-1 shrink-0">
                <span>
                  {SERVICES_DATA[activeServiceIndex].num}/{" "}
                  {SERVICES_DATA[activeServiceIndex].title}
                </span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </span>
              <span className="uppercase tracking-[0.05em] sm:tracking-[0.1em] text-white/40 truncate text-right shrink">
                {SERVICES_DATA[activeServiceIndex].tags}
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Service List */}
          <div className="w-full lg:w-[53%] xl:w-[54%] flex-1 min-w-0 flex flex-col pt-6 lg:pt-0">
            {/* Top border of list */}
            <div className="w-full border-t border-white/12" />

            {/* Services List Rows */}
            <div className="flex flex-col" onMouseLeave={handleListMouseLeave}>
              {SERVICES_DATA.map((service, idx) => {
                const isHovered = hoveredRowIndex === idx
                const isDimmed = hoveredRowIndex !== null && !isHovered

                return (
                  <div
                    key={service.num}
                    role="button"
                    onMouseEnter={() => handleRowMouseEnter(idx)}
                    onMouseDown={(e) => {
                      // Prevent browser default focus scroll
                      e.preventDefault()
                    }}
                    onClick={(e) => {
                      e.preventDefault()
                      handleServiceClick(service.slug)
                    }}
                    className={`service-row group relative py-[15px] sm:py-[22px] border-b border-white/12 cursor-pointer block transition-opacity duration-300 ${
                      isDimmed ? "opacity-35" : "opacity-100"
                    }`}
                  >
                    <a
                      href={`#/category/${service.slug}`}
                      onClick={(e) => {
                        e.preventDefault()
                        handleServiceClick(service.slug)
                      }}
                      className="block w-full h-full text-inherit no-underline select-none"
                    >
                      {/* Animated bottom border in #F27256 (scaleX 0 -> 1, origin left, 0.6s) */}
                      <span className="service-row-line" />

                      {/* Row Content: Mobile stacked in 2 clean lines, Tablet/Desktop side-by-side single line */}
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6 w-full">
                        {/* Line 1 (Mobile) / Left block (Desktop): Number & Title */}
                        <div className="flex items-baseline gap-2.5 sm:gap-5 min-w-0">
                          {/* Number: 01/, 02/... */}
                          <span className="service-row-number font-mono text-[11px] text-white/45 shrink-0 self-baseline">
                            {service.num}/
                          </span>

                          {/* Title */}
                          <h3
                            className="service-row-title text-[20px] sm:text-[clamp(24px,2.4vw,44px)] font-normal leading-[1.2] tracking-[-0.02em] text-[#FFFFFF] font-sans group-hover:text-white"
                            style={{
                              fontFamily:
                                '"Geist", var(--font-sans), sans-serif',
                            }}
                          >
                            {service.title}
                          </h3>
                        </div>

                        {/* Line 2 (Mobile) / Right block (Desktop): Category Tags (indented on mobile, right-aligned on desktop) */}
                        <div className="pl-7 sm:pl-0 shrink-0 sm:text-right sm:self-baseline">
                          <span
                            className="service-row-tags font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.08em] sm:tracking-[0.1em] text-white/45 sm:text-white/50 block whitespace-nowrap"
                          >
                            {service.tags}
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                )
              })}
            </div>

            {/* Bottom Row under the list */}
            <div className="mt-8 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-white/45 select-none">
              <span className="shrink-0">DECKS · BRANDS · WEBSITES · AUTOMATION</span>
              <span className="shrink-0 text-right sm:ml-auto whitespace-nowrap">( DESIGNED, BUILT AND SHIPPED )</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

