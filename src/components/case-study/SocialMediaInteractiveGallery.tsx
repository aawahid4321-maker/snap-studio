import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  aivonImages,
  basewayImages,
  finoraImages,
  kiyocareImages,
  noritsuImages,
  wildflowerImages,
} from "@/assets/social-media"

interface GalleryItem {
  src: string
  caption: string
}

interface ProjectGalleryData {
  headlinePrefix: string
  headlineBold: string
  items: [GalleryItem, GalleryItem, GalleryItem, GalleryItem]
  scatterImages: string[]
}

const GALLERY_DATA: Record<string, ProjectGalleryData> = {
  aivon: {
    headlinePrefix: "Social presence that stops the",
    headlineBold: "SCROLL",
    items: [
      {
        src: aivonImages.thumbnail,
        caption: "Master Visual Monograph — Serene Mindful Living editorial feed cover",
      },
      {
        src: aivonImages.slide2,
        caption: "Morning Ritual Campaign — Sunlight diffusion & conscious breathwork carousel",
      },
      {
        src: aivonImages.slide3,
        caption: "Formulation Focus — Organic botanicals & tactile ingredient texture detail",
      },
      {
        src: aivonImages.slide4,
        caption: "Weekly Mindset Prompt — Minimalist typography & meditative daily quote post",
      },
    ],
    scatterImages: aivonImages.all,
  },
  baseway: {
    headlinePrefix: "Color-blocked refreshment that sparks",
    headlineBold: "THIRST",
    items: [
      {
        src: basewayImages.thumbnail,
        caption: "DTC Launch Hero — Botanical hydration cold-pressed campaign cover",
      },
      {
        src: basewayImages.slide2,
        caption: "Superfood Ingredients — High-contrast macro citrus & organic berry callout",
      },
      {
        src: basewayImages.slide3,
        caption: "Packaging In Motion — Bold color-blocked typography & can silhouette layout",
      },
      {
        src: basewayImages.slide4,
        caption: "Lifestyle Vignette — Golden hour outdoor hydration & community UGC highlight",
      },
    ],
    scatterImages: basewayImages.all,
  },
  finora: {
    headlinePrefix: "Macro brilliance capturing timeless",
    headlineBold: "LUSTER",
    items: [
      {
        src: finoraImages.thumbnail,
        caption: "Haute Horlogerie Monograph — Swiss diamond pavé luxury collector cover",
      },
      {
        src: finoraImages.story1,
        caption: "Micro-Facet Refraction — Hand-selected conflict-free diamond clarity story",
      },
      {
        src: finoraImages.slide2,
        caption: "Artisanal Setting — 18-karat recycled yellow gold bezel craftsmanship post",
      },
      {
        src: finoraImages.slide4,
        caption: "In-House Calibre — Mechanical escapement wheel & micro-horlogerie movement",
      },
    ],
    scatterImages: [
      finoraImages.thumbnail,
      finoraImages.story1,
      finoraImages.slide2,
      finoraImages.slide3,
      finoraImages.slide4,
      finoraImages.slide7,
    ],
  },
  kiyocare: {
    headlinePrefix: "Dermatological transparency shaping real",
    headlineBold: "GLOW",
    items: [
      {
        src: kiyocareImages.thumbnail,
        caption: "Clean Beauty Launch — Dermatological barrier defense serum cover post",
      },
      {
        src: kiyocareImages.slide2,
        caption: "Active Potency Breakdown — 5% Niacinamide & Multi-Molecular HA carousel",
      },
      {
        src: kiyocareImages.slide3,
        caption: "AM/PM Skincare Protocol — Step-by-step save-optimized routine carousel",
      },
      {
        src: kiyocareImages.slide4,
        caption: "Clinical Efficacy Proof — 28-day hydration test results & microbiome balance",
      },
    ],
    scatterImages: kiyocareImages.all,
  },
  "noritsu-ai": {
    headlinePrefix: "Autonomous intelligence scaling enterprise",
    headlineBold: "VELOCITY",
    items: [
      {
        src: noritsuImages.thumbnail,
        caption: "Enterprise Agent Platform — Dark-mode telemetry & autonomous AI cover",
      },
      {
        src: noritsuImages.slide2,
        caption: "Workflow Orchestration — Multi-agent event loop & ERP data stream infographic",
      },
      {
        src: noritsuImages.slide3,
        caption: "Throughput Telemetry — Sub-millisecond latency & zero-loss packet telemetry post",
      },
      {
        src: noritsuImages.slide4,
        caption: "Enterprise Security — Zero-trust encryption & financial SOC2 compliance graphic",
      },
    ],
    scatterImages: noritsuImages.all,
  },
  noritsuai: {
    headlinePrefix: "Autonomous intelligence scaling enterprise",
    headlineBold: "VELOCITY",
    items: [
      {
        src: noritsuImages.thumbnail,
        caption: "Enterprise Agent Platform — Dark-mode telemetry & autonomous AI cover",
      },
      {
        src: noritsuImages.slide2,
        caption: "Workflow Orchestration — Multi-agent event loop & ERP data stream infographic",
      },
      {
        src: noritsuImages.slide3,
        caption: "Throughput Telemetry — Sub-millisecond latency & zero-loss packet telemetry post",
      },
      {
        src: noritsuImages.slide4,
        caption: "Enterprise Security — Zero-trust encryption & financial SOC2 compliance graphic",
      },
    ],
    scatterImages: noritsuImages.all,
  },
  "wildflower-atelier": {
    headlinePrefix: "We believe botanicals shape the",
    headlineBold: "FUTURE",
    items: [
      {
        src: wildflowerImages.thumbnail,
        caption: "Botanical Couture Monograph — Bespoke French floral atelier visual identity cover",
      },
      {
        src: wildflowerImages.story1,
        caption: "Seasonal Harvest Story — Provence dawn harvest & dew-kissed petals",
      },
      {
        src: wildflowerImages.story2,
        caption: "Artful Arrangements Story — Sculptural garden rose & organic floral architecture",
      },
      {
        src: wildflowerImages.story4,
        caption: "Atelier Workshop Story — Master floral design immersion & botanical perfume blending",
      },
    ],
    scatterImages: [
      wildflowerImages.thumbnail,
      wildflowerImages.story1,
      wildflowerImages.story2,
      wildflowerImages.story3,
      wildflowerImages.thumb1,
      wildflowerImages.thumb2,
    ],
  },
  wildflower: {
    headlinePrefix: "We believe botanicals shape the",
    headlineBold: "FUTURE",
    items: [
      {
        src: wildflowerImages.thumbnail,
        caption: "Botanical Couture Monograph — Bespoke French floral atelier visual identity cover",
      },
      {
        src: wildflowerImages.story1,
        caption: "Seasonal Harvest Story — Provence dawn harvest & dew-kissed petals",
      },
      {
        src: wildflowerImages.story2,
        caption: "Artful Arrangements Story — Sculptural garden rose & organic floral architecture",
      },
      {
        src: wildflowerImages.story4,
        caption: "Atelier Workshop Story — Master floral design immersion & botanical perfume blending",
      },
    ],
    scatterImages: [
      wildflowerImages.thumbnail,
      wildflowerImages.story1,
      wildflowerImages.story2,
      wildflowerImages.story3,
      wildflowerImages.thumb1,
      wildflowerImages.thumb2,
    ],
  },
}

// Preset scatter offsets matching the editorial scattered look from reference image 2
const SCATTER_PRESETS = [
  { rotate: -8, x: -140, y: -70, scale: 0.95, z: 12 },
  { rotate: 5, x: 130, y: -90, scale: 0.9, z: 11 },
  { rotate: -4, x: -70, y: 75, scale: 1.0, z: 14 },
  { rotate: 10, x: 90, y: 65, scale: 0.92, z: 13 },
  { rotate: -14, x: -220, y: 15, scale: 0.85, z: 10 },
  { rotate: 12, x: 210, y: -10, scale: 0.88, z: 10 },
]

interface SocialMediaInteractiveGalleryProps {
  projectId: string
  clientName: string
}

export default function SocialMediaInteractiveGallery({
  projectId,
  clientName,
}: SocialMediaInteractiveGalleryProps) {
  const normalizedKey = (projectId || "").toLowerCase()
  const data = GALLERY_DATA[normalizedKey] || GALLERY_DATA["wildflower-atelier"]

  const [hoveredThumbIndex, setHoveredThumbIndex] = useState<number | null>(null)
  const [activeSlideIndex, setActiveSlideIndex] = useState<number | null>(null)

  // Keyboard Escape listener to close full bleed view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveSlideIndex(null)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-screen bg-[#ECEAE6] text-[#0A0A0B] overflow-hidden select-none flex flex-col justify-between py-8 sm:py-10 px-6 sm:px-10 md:px-14">
      {/* 1. TOP BAR INSIDE SECTION */}
      <div className="relative z-20 flex items-center justify-between w-full border-b border-black/[0.08] pb-4">
        <span className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-black/60 font-medium">
          ( MENU )
        </span>

        {/* Center Minimal Emblem Monogram matching reference */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-black/25 flex items-center justify-center text-[10px] sm:text-[11px] font-serif font-bold tracking-tighter text-black/80">
            {clientName.slice(0, 2).toUpperCase()}
          </div>
        </div>

        <span className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-black/60 font-medium">
          ( WORK* )
        </span>
      </div>

      {/* 2. CENTER HEADLINE & SCATTERED CARDS CONTAINER */}
      <div className="relative z-10 flex-1 flex items-center justify-center my-10 sm:my-14">
        {/* SCATTER PILE OF IMAGE CARDS: Pops up when hovering any thumbnail */}
        <AnimatePresence>
          {hoveredThumbIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="absolute inset-0 pointer-events-none flex items-center justify-center"
            >
              {data.scatterImages.slice(0, 6).map((imgSrc, i) => {
                const preset = SCATTER_PRESETS[i % SCATTER_PRESETS.length]
                const isDirectHover = hoveredThumbIndex === i
                return (
                  <motion.div
                    key={imgSrc + i}
                    initial={{
                      opacity: 0,
                      scale: 0.75,
                      rotate: 0,
                      x: 0,
                      y: 0,
                    }}
                    animate={{
                      opacity: 1,
                      scale: isDirectHover ? preset.scale * 1.12 : preset.scale,
                      rotate: preset.rotate,
                      x: preset.x,
                      y: preset.y,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.75,
                      transition: { duration: 0.2 },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 22,
                      delay: i * 0.03,
                    }}
                    style={{ zIndex: isDirectHover ? 30 : preset.z }}
                    className="absolute w-[180px] sm:w-[220px] md:w-[270px] aspect-[4/5] rounded-[6px] overflow-hidden bg-black shadow-[0_25px_60px_rgba(0,0,0,0.35)] border-[3px] border-white/90"
                  >
                    <img
                      src={imgSrc}
                      alt={clientName}
                      width="800"
                      height="1000"
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </motion.div>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Centered Editorial Headline: Serif phrase with heavy bold sans last word */}
        <div className="relative z-10 text-center max-w-[1100px] px-4 pointer-events-none">
          <h2 className="text-[clamp(2.4rem,6.8vw,6.4rem)] uppercase leading-[1.04] tracking-[-0.03em] text-[#0A0A0B]">
            <span
              className="font-serif italic font-normal text-black/90 inline-block mr-3"
              style={{ fontFamily: '"Newsreader", "Playfair Display", Georgia, serif' }}
            >
              {data.headlinePrefix}
            </span>
            <span
              className="font-sans font-black tracking-[-0.04em] text-black inline-block"
              style={{ fontFamily: '"Geist", var(--font-sans), sans-serif' }}
            >
              {data.headlineBold}
            </span>
          </h2>
        </div>
      </div>

      {/* 3. BOTTOM BAR WITH SELECTED WORK & 4 THUMBNAILS ROW */}
      <div className="relative z-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 border-t border-black/[0.08] pt-6">
        {/* Bottom Left Subtle Indicator */}
        <div className="hidden md:flex items-center gap-3 text-black/50 font-mono text-[11px] uppercase tracking-[0.16em]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CF232B] animate-pulse" />
          <span>Interactive Exhibition</span>
        </div>

        {/* Bottom Right Selected Work + Counter + 4 Thumbnails */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 self-end ml-auto">
          <div className="flex items-center justify-between sm:justify-start gap-4 font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.18em] text-black/70 font-medium">
            <span>( SELECTED WORK )</span>
            <span className="text-black/45">
              ( 0{activeSlideIndex !== null ? activeSlideIndex + 1 : (hoveredThumbIndex !== null ? hoveredThumbIndex + 1 : 1)} — 04 )
            </span>
          </div>

          {/* Row of 4 Small Square Thumbnails */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {data.items.map((item, idx) => {
              const isHovered = hoveredThumbIndex === idx
              const isActive = activeSlideIndex === idx
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveSlideIndex(idx)}
                  onMouseEnter={() => setHoveredThumbIndex(idx)}
                  onMouseLeave={() => setHoveredThumbIndex(null)}
                  className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-[4px] overflow-hidden bg-black/10 cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "ring-2 ring-black scale-105 shadow-md"
                      : isHovered
                      ? "scale-105 shadow-md border-black/80"
                      : "border border-black/20 hover:border-black/60"
                  }`}
                  aria-label={`View slide 0${idx + 1}`}
                >
                  <img
                    src={item.src}
                    alt={`Thumbnail 0${idx + 1}`}
                    width="160"
                    height="160"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 pointer-events-none select-none"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors" />
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* 4. FULL-BLEED SLIDE-IN OVERLAY ON CLICK */}
      <AnimatePresence>
        {activeSlideIndex !== null && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setActiveSlideIndex(null)}
            className="absolute inset-0 z-40 bg-black cursor-pointer overflow-hidden flex flex-col justify-between"
          >
            {/* Full-Bleed Image Background */}
            <img
              src={data.items[activeSlideIndex].src}
              alt={clientName}
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
            />

            {/* Subtle Gradient Overlays for High Legibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/85 pointer-events-none" />

            {/* Overlay Top Bar */}
            <div className="relative z-10 flex items-center justify-between p-6 sm:p-10 text-white/90 font-mono text-[12px] uppercase tracking-[0.2em]">
              <span className="flex items-center gap-2 hover:text-[#F27256] transition-colors">
                <span className="text-lg">←</span> ( CLOSE )
              </span>
              <span className="font-serif tracking-normal text-[15px] sm:text-[18px] text-white">
                {clientName}
              </span>
              <span>( SOCIAL MEDIA )</span>
            </div>

            {/* Overlay Center / Bottom Content Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="relative z-10 p-6 sm:p-12 md:p-16 max-w-[900px]"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#F27256] block mb-2 font-semibold">
                ( 0{activeSlideIndex + 1} — 04 ) · EXHIBITION DETAIL
              </span>
              <h3
                className="text-[32px] sm:text-[46px] md:text-[56px] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-4 font-serif"
                style={{ fontFamily: '"Newsreader", "Playfair Display", Georgia, serif' }}
              >
                {clientName}
              </h3>
              <p className="text-[16px] sm:text-[19px] md:text-[21px] text-white/85 leading-relaxed font-light">
                {data.items[activeSlideIndex].caption}
              </p>
              <div className="mt-6 flex items-center gap-3 text-white/50 text-[12px] font-mono tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-white/70 animate-ping" />
                <span>Click anywhere or press Esc to return</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
