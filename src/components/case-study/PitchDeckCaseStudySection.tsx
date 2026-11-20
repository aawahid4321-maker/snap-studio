import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Project } from "@/data/projects"
import { AiAutomationCaseStudyConfig } from "@/data/aiAutomationCaseStudies"
import ContactSection from "@/components/ContactSection"
import GravityDropFooter from "@/components/GravityDropFooter"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

import topRef2 from "@/imports/top-ref-2.jpg"
import bottomCard4 from "@/imports/bottom-card-4.png"

interface PitchDeckCaseStudySectionProps {
  config: AiAutomationCaseStudyConfig
  project: Project
  onNavigate?: (path: string) => void
}

export default function PitchDeckCaseStudySection({
  config,
  project,
  onNavigate,
}: PitchDeckCaseStudySectionProps) {
  // Lightbox and FAQ state
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [animatedSlideIndex, setAnimatedSlideIndex] = useState(0)

  const allSlides = config.slides || []

  // Auto-play the animated slide changer every 4 seconds (matching Pitch Deck section)
  useEffect(() => {
    if (!allSlides.length) return
    const timer = setInterval(() => {
      setAnimatedSlideIndex((prev) => (prev + 1) % allSlides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [allSlides.length, animatedSlideIndex])

  // Reset animated slide index when switching between projects
  useEffect(() => {
    setAnimatedSlideIndex(0)
  }, [project.slug, project.id])

  // Results Section Ref & GSAP Scroll Animation (Matching Pitch Deck section after MS)
  const resultsContainerRef = useRef<HTMLDivElement>(null)
  const resultsCardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const el = resultsContainerRef.current
    if (!el) return

    const cards = resultsCardsRef.current.filter(Boolean) as HTMLElement[]
    if (!cards.length) return

    const ctx = gsap.context(() => {
      gsap.set(cards, {
        opacity: 0,
        y: 60,
        scale: 0.85,
        transformOrigin: "center bottom",
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          end: "top 35%",
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
          index * 0.35,
        )
      })
    }, el)

    return () => ctx.revert()
  }, [])

  // Lightbox keyboard navigation (Escape to close)
  useEffect(() => {
    if (!lightboxImage) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImage(null)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxImage])

  // Related projects mapping
  const relatedProjectsList = config.relatedProjects || [
    {
      id: "nodaliq",
      client: "NODALiQ",
      service: "AI Network Automation & Identity Design System",
      tag: "AI Architecture",
      image: topRef2,
    },
    {
      id: "euphorixz",
      client: "Euphorixz",
      service: "Nutraceutical Innovation & Investor Pitch Deck",
      tag: "Investor Deck",
      image: bottomCard4,
    },
    {
      id: "driveberry",
      client: "DriveBerry",
      service: "AI Vehicle Diagnostics & Series-A Investor Pitch Deck",
      tag: "Pitch Deck",
      image: "/work/driveberry/Slide1.PNG",
    },
  ]

  const handleProjectClick = (projectId: string) => {
    if (onNavigate) {
      onNavigate(`/work/${projectId}`)
    } else {
      window.location.hash = `#/work/${projectId}`
    }
  }

  const handleViewAllProjects = () => {
    if (onNavigate) {
      onNavigate("#portfolio")
    } else {
      window.location.hash = "#portfolio"
    }
  }

  return (
    <div className="w-full bg-[#0A0A0B] text-white selection:bg-coral/30 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* ======================================================== */}
      {/* SECTION 1: HERO & COVER PAGE (DARK LUXURY #0A0A0B)       */}
      {/* ======================================================== */}
      <section className="bg-[#0A0A0B] text-white pt-28 md:pt-32 pb-20 border-b border-white/[0.06]">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12">
          {/* Category Badge Pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-coral/30 bg-coral/10 text-coral text-[12px] font-mono uppercase tracking-[0.18em] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-coral animate-ping" />
            <span>
              {config.categoryNumber || "( 06 )"} {config.categoryLabel || "AI / AUTOMATION"}
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7 xl:col-span-8"
            >
              <h1 className="text-[clamp(2.4rem,4.6vw,4.2rem)] font-bold text-white leading-[1.08] tracking-[-0.035em] font-sans">
                {config.heroHeadline.prefix}{" "}
                <span className="bg-gradient-to-r from-coral via-[#FF7D5C] to-red bg-clip-text text-transparent">
                  {config.heroHeadline.highlight}
                </span>
              </h1>
              <p className="mt-6 text-[18px] sm:text-[20px] text-white/60 font-light leading-relaxed max-w-2xl">
                {config.heroSubheadline}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 xl:col-span-4 rounded-lg border border-white/[0.1] bg-white/[0.03] p-7 backdrop-blur-md"
            >
              <div className="grid grid-cols-2 gap-y-6 gap-x-6 text-[14px]">
                <div>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 mb-1.5">
                    Customer
                  </span>
                  <span className="font-semibold text-white text-[15px] tracking-tight block">
                    {config.clientName}
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 mb-1.5">
                    Timeline
                  </span>
                  <span className="font-semibold text-white text-[15px] tracking-tight block">
                    {config.timeline}
                  </span>
                </div>
                <div className="col-span-2 pt-2 border-t border-white/[0.08]">
                  <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 mb-2.5">
                    Scope of Work
                  </span>
                  <div className="flex flex-wrap gap-2 text-[12px] text-white/80">
                    {config.scope.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* LARGE 16:9 COVER SLIDE PREVIEW */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative w-full aspect-[16/9.2] max-h-[720px] rounded-[8px] md:rounded-[10px] overflow-hidden border border-white/[0.12] shadow-2xl group bg-black cursor-pointer"
            onClick={() => setLightboxImage(config.coverImage)}
          >
            <img
              src={config.coverImage}
              alt={`${config.clientName} Cover Page Slide 1`}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-mono text-white/90 border border-white/15 shadow-lg">
              {config.coverBadge || "Cover Page · Slide 01"}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 2: WHITE SECTION (Project Description + Slide 2   */}
      {/*            + Problem + 3 Problem Cards)                  */}
      {/* ======================================================== */}
      <section className="bg-white text-[#0A0A0B] py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12">
          {/* Project Description Header */}
          <div className="max-w-[860px] mx-auto text-center mb-16 md:mb-20">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#F4F4F5] border border-black/10 text-coral font-mono text-[11px] uppercase tracking-[0.2em] font-semibold mb-4">
              {config.narrative.eyebrow || "Project Narrative"}
            </span>
            <h2
              className="text-[32px] sm:text-[42px] md:text-[48px] font-bold text-[#0A0A0B] mb-6 tracking-tight font-sans"
              style={{ fontFamily: 'var(--font-sans), "Geist", sans-serif' }}
            >
              {config.narrative.heading || "Project Description"}
            </h2>
            <p className="text-[19px] sm:text-[22px] md:text-[24px] font-light leading-[1.55] text-[#27272A]">
              {config.narrative.leadText}{" "}
              <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-medium">
                {config.narrative.leadHighlight}
              </span>{" "}
              {config.narrative.leadSuffix}
            </p>
          </div>

          {/* SLIDE 2 (Framed in sleek modern shadow) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="my-12 md:my-20"
          >
            <div
              className="relative w-full aspect-[16/9.2] max-h-[720px] rounded-[8px] md:rounded-[10px] overflow-hidden border border-black/10 shadow-[0_25px_70px_rgba(0,0,0,0.14)] group bg-black cursor-pointer"
              onClick={() => setLightboxImage(config.narrative.slide2Src)}
            >
              <img
                src={config.narrative.slide2Src}
                alt={config.narrative.slide2Alt}
                width="1920"
                height="1080"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="eager" decoding="async"
              />
              <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-mono text-white/90 border border-white/20 shadow-lg">
                {config.narrative.slide2Badge}
              </div>
            </div>
          </motion.div>

          {/* Problem Header + 3 Problem Cards */}
          <div className="mt-20 md:mt-28 max-w-[1160px] mx-auto">
            <div className="text-center max-w-[800px] mx-auto mb-14">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-coral font-semibold block mb-2">
                {config.narrative.challengeEyebrow || "Challenge Breakdown"}
              </span>
              <h3 className="text-[34px] sm:text-[44px] font-bold text-[#0A0A0B] tracking-tight mb-4">
                The{" "}
                <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent">
                  {config.narrative.challengeHeading || "Problem"}
                </span>
              </h3>
              <p className="text-[17px] sm:text-[19px] text-[#52525B] leading-relaxed font-light">
                {config.narrative.challengeText}
              </p>
            </div>

            {/* 3 Problem Cards in Crisp White/Soft Rose Theme */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {config.narrative.problemCards.map((card, idx) => (
                <div
                  key={idx}
                  className="rounded-[14px] border border-coral/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md hover:border-coral/40 transition-all group"
                >
                  <span className="inline-block px-3 py-1 rounded bg-coral/10 text-coral border border-coral/20 text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                    Problem {card.number}
                  </span>
                  <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2 group-hover:text-coral transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-[14.5px] text-[#52525B] leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 3: ADD SLIDE 3 + WEBSITE GRADIENT SECTION        */}
      {/*            (Vibrant Coral-to-Red Brand Gradient!)        */}
      {/* ======================================================== */}
      <section className="bg-gradient-to-br from-coral via-[#E24A38] to-red text-white py-20 md:py-28 relative overflow-hidden shadow-2xl">
        {/* Soft Background Radial Lighting */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12 relative z-10">
          {/* SLIDE 3 (Slide 3 framed inside the gradient section) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="mb-16 md:mb-24"
          >
            <div
              className="relative w-full aspect-[16/9.2] max-h-[720px] rounded-[8px] md:rounded-[10px] overflow-hidden border border-white/30 shadow-[0_30px_90px_rgba(0,0,0,0.35)] group bg-black cursor-pointer"
              onClick={() => setLightboxImage(config.solution.slide3Src)}
            >
              <img
                src={config.solution.slide3Src}
                alt={config.solution.slide3Alt}
                width="1920"
                height="1080"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="eager" decoding="async"
              />
              <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-mono text-white/90 border border-white/20 shadow-lg">
                {config.solution.slide3Badge}
              </div>
            </div>
          </motion.div>

          {/* Solution Heading + 3 Frosted Glass Solution Cards */}
          <div className="max-w-[1160px] mx-auto">
            <div className="text-center max-w-[820px] mx-auto mb-14">
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/90 font-bold block mb-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md inline-block">
                {config.solution.eyebrow || "Strategic Resolution"}
              </span>
              <h3 className="text-[34px] sm:text-[46px] font-bold text-white tracking-tight mb-4 drop-shadow-sm">
                {config.solution.heading}
              </h3>
              <p className="text-[18px] sm:text-[20px] text-white/95 leading-relaxed font-light drop-shadow-sm">
                {config.solution.description}
              </p>
            </div>

            {/* 3 Frosted Glass Cards in Gradient Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {config.solution.solutionCards.map((card, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all"
                >
                  <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                    Solution {card.number}
                  </span>
                  <h4 className="text-[19px] font-bold text-white mb-2">
                    {card.title}
                  </h4>
                  <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 4: STYLE GUIDE & COMPONENT (2 SLIDES DISPLAY)    */}
      {/*            (MATCHING 2ND REFERENCE SCREENSHOT LAYOUT)    */}
      {/* ======================================================== */}
      <section className="bg-[#0A0A0B] text-white py-20 md:py-32">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12">
          <div className="rounded-[28px] md:rounded-[36px] border border-white/[0.12] bg-[#0E0E10] p-8 sm:p-10 md:p-14 relative overflow-hidden shadow-2xl">
            {/* Subtle Ambient Radial Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-coral/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 mb-12 text-center max-w-[700px] mx-auto">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-coral font-semibold block mb-2">
                {config.architecture.eyebrow}
              </span>
              <h2 className="text-[30px] sm:text-[38px] font-bold text-white tracking-tight">
                {config.architecture.headingPrefix}{" "}
                <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent">
                  {config.architecture.headingHighlight}
                </span>
              </h2>
              <p className="text-[15px] sm:text-[16px] text-white/60 mt-2">
                {config.architecture.description}
              </p>
            </div>

            {/* Exactly 2 Slides Display (Styled in Sleek Dark Cards) */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {config.architecture.gridSlides.slice(0, 2).map((slide, idx) => (
                <div
                  key={idx}
                  className="group rounded-[14px] overflow-hidden border border-white/10 bg-[#121214] text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_65px_rgba(0,0,0,0.7)] hover:border-coral/40 transition-all duration-300 cursor-pointer p-4 sm:p-5"
                  onClick={() => setLightboxImage(slide.src)}
                >
                  <div className="relative aspect-[16/9.2] overflow-hidden rounded-[5px] sm:rounded-[6px] md:rounded-[7px] lg:rounded-[8px] bg-black border border-white/10">
                    <img
                      src={slide.src}
                      alt={slide.caption}
                      width="1920"
                      height="1080"
                      className="w-full h-full object-cover rounded-[5px] sm:rounded-[6px] md:rounded-[7px] lg:rounded-[8px] transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="eager" decoding="async"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/75 backdrop-blur-md text-[11px] font-mono text-white/90 border border-white/15 shadow-sm">
                      {slide.badge}
                    </div>
                  </div>
                  <div className="pt-4 pb-1">
                    <h4 className="text-[17px] sm:text-[18px] font-bold text-white group-hover:text-coral transition-colors tracking-tight">
                      {slide.caption}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Sleek Dark Stats Strip */}
            <div className="relative z-10 mt-8 md:mt-10 rounded-[14px] bg-[#121214] text-white border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {(config.stats || [
                { label: "Workflow Accuracy", value: "98.4%", description: "Execution Precision" },
                { label: "Speed Acceleration", value: "14x", description: "Sprint Velocity Lift" },
                { label: "Node Latency", value: "< 50ms", description: "Real-Time Telemetry" },
                { label: "Integrations", value: "240+", description: "Pre-Built OAuth Connectors" },
              ]).map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-white/50 font-semibold mb-1">
                    {stat.label}
                  </span>
                  <div className="text-[32px] sm:text-[44px] font-bold text-white tracking-tight flex items-baseline">
                    {stat.value}
                  </div>
                  <span className="text-[12px] text-white/60 mt-1 font-medium">
                    {stat.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 5: WORKFLOW & DESIGN (BANNER SLIDE + WORKFLOW)   */}
      {/* ======================================================== */}
      <section className="bg-[#0E0E10] text-white py-20 md:py-28 border-y border-white/[0.06]">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 md:px-12">
          <div className="mb-10 text-center max-w-[760px] mx-auto">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-coral block mb-2">
              {config.workflow.eyebrow}
            </span>
            <h2 className="text-[32px] sm:text-[42px] font-bold text-white tracking-tight">
              {config.workflow.headingPrefix}{" "}
              <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent">
                {config.workflow.headingHighlight}
              </span>
            </h2>
          </div>

          {/* Prominent Slide Banner (Slide 06 - Used Only Once) */}
          <div
            className="relative w-full aspect-[16/9.2] max-h-[720px] rounded-[8px] md:rounded-[10px] overflow-hidden border border-white/[0.12] shadow-2xl group bg-black cursor-pointer mb-12"
            onClick={() => setLightboxImage(config.workflow.bannerSrc)}
          >
            <img
              src={config.workflow.bannerSrc}
              alt={config.workflow.bannerAlt}
              width="1920"
              height="1080"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              loading="eager" decoding="async"
            />
            <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-mono text-white/90 border border-white/15">
              {config.workflow.bannerBadge}
            </div>
          </div>

          {/* Workflow Concepts Card */}
          <div className="max-w-[880px] mx-auto text-left rounded-lg bg-white/[0.03] border border-white/[0.08] p-8 md:p-10 backdrop-blur-md">
            <h3 className="text-[22px] sm:text-[26px] font-bold text-white mb-4">
              {config.workflow.conceptHeading}
            </h3>
            <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light mb-4">
              {config.workflow.conceptParagraph1}
            </p>
            <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light">
              {config.workflow.conceptParagraph2}
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 6: THE RESULT (4-SCREENSHOT GRID AS IN IMAGE 4)  */}
      {/* ======================================================== */}
      <section className="bg-white text-[#0A0A0B] py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12">
          <div className="text-center max-w-[860px] mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#F4F4F5] border border-black/10 text-coral font-mono text-[11px] uppercase tracking-[0.2em] font-semibold mb-3">
              {config.results.eyebrow || "Funding & Market Traction"}
            </span>
            <h2 className="text-[34px] sm:text-[46px] font-bold text-[#0A0A0B] tracking-tight mb-5">
              {config.results.headingPrefix}{" "}
              <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent">
                {config.results.headingHighlight}
              </span>
            </h2>
            <p className="text-[18px] sm:text-[21px] text-[#27272A] leading-relaxed font-light">
              {config.results.descriptionText}
              <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-semibold">
                {config.results.descriptionHighlight}
              </span>
              {config.results.descriptionSuffix}
            </p>
          </div>
          {/* ANIMATED SLIDE CHANGER CONTAINER (Full-Bleed 6-Slide Image Carousel from Pitch Deck / DriveBerry section) */}
          <div className="relative rounded-[8px] md:rounded-[12px] border border-black/10 bg-[#0E0E10] p-4 sm:p-6 md:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.16)] overflow-hidden text-white">
            <div className="flex items-center justify-between mb-4 px-2">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-coral animate-ping" />
                <span className="font-mono text-[12px] uppercase tracking-wider text-white/80">
                  Live Deck Animator · {allSlides[animatedSlideIndex]?.label || `Slide 0${animatedSlideIndex + 1}`}
                </span>
              </div>

              {/* Manual Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setAnimatedSlideIndex(
                      (prev) =>
                        (prev - 1 + allSlides.length) % allSlides.length,
                    )
                  }
                  className="w-9 h-9 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-[14px] transition-colors cursor-pointer"
                  aria-label="Previous slide"
                >
                  ←
                </button>
                <button
                  onClick={() =>
                    setAnimatedSlideIndex(
                      (prev) => (prev + 1) % allSlides.length,
                    )
                  }
                  className="w-9 h-9 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-[14px] transition-colors cursor-pointer"
                  aria-label="Next slide"
                >
                  →
                </button>
              </div>
            </div>

            {/* Animated Slide Display with Smooth Motion - Full Bleed Image Filling the Entire Slide Screen */}
            <div className="relative aspect-[16/9.2] max-h-[700px] w-full rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-xl overflow-hidden bg-black">
              <AnimatePresence mode="wait">
                <motion.img
                  key={animatedSlideIndex}
                  src={allSlides[animatedSlideIndex]?.src}
                  alt={allSlides[animatedSlideIndex]?.label}
                  initial={{ opacity: 0, scale: 0.98, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.98, x: -20 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="w-full h-full object-cover rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-xl cursor-pointer"
                  onClick={() =>
                    setLightboxImage(allSlides[animatedSlideIndex]?.src)
                  }
                />
              </AnimatePresence>
            </div>

            {/* Slide Progress Dots (6 dots for the 6 WorkAI slides) */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
              {allSlides.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setAnimatedSlideIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    animatedSlideIndex === idx
                      ? "w-8 bg-gradient-to-r from-coral to-red"
                      : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 7: RELATED PROJECTS & FAQ (DARK #0A0A0B)         */}
      {/* ======================================================== */}
      <section className="bg-[#0A0A0B] text-white py-20 md:py-32">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12">
          {/* Related Projects Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-5 border-b border-white/10 gap-4">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-coral block mb-1">
                Portfolio
              </span>
              <h3 className="text-[28px] sm:text-[34px] font-bold text-white tracking-tight">
                Related{" "}
                <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent">
                  Projects
                </span>
              </h3>
            </div>

            <button
              onClick={handleViewAllProjects}
              className="inline-flex items-center gap-1.5 font-bricolage text-[14px] font-semibold text-coral hover:text-red transition-colors cursor-pointer"
            >
              <span>View all projects</span>
              <span>→</span>
            </button>
          </div>

          {/* Related Projects Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-32">
            {relatedProjectsList.map((item) => (
              <div
                key={item.id}
                onClick={() => handleProjectClick(item.id)}
                className="group cursor-pointer flex flex-col rounded-lg overflow-hidden border border-white/10 bg-white/[0.02] hover:border-coral/40 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.client}
                    width="600"
                    height="375"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager" decoding="async"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                    {item.tag}
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-[18px] font-bold text-white group-hover:text-coral transition-colors">
                        {item.client}
                      </h4>
                      <span className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all">
                        ↗
                      </span>
                    </div>
                    <p className="text-[13.5px] text-white/50 mt-1.5 line-clamp-2">
                      {item.service}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-[920px] mx-auto">
            <div className="text-center mb-12">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-coral block mb-2">
                Questions & Answers
              </span>
              <h3 className="text-[28px] sm:text-[36px] font-bold text-white tracking-tight">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent">
                  Questions
                </span>
              </h3>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {config.faq.map((faq, idx) => (
                <div key={idx} className="py-6">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                  >
                    <span className="text-[17px] sm:text-[19px] font-semibold text-white/90 group-hover:text-coral transition-colors tracking-tight">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full border border-white/20 flex items-center justify-center shrink-0 text-white/70 transition-transform duration-300 ${
                        openFaq === idx
                          ? "rotate-45 border-coral text-coral"
                          : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-[15px] sm:text-[16px] text-white/60 leading-relaxed max-w-2xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 8: LIGHTBOX MODAL                                */}
      {/* ======================================================== */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <div className="relative max-w-6xl max-h-[92vh] rounded-lg overflow-hidden border border-white/20 shadow-2xl">
              <img
                src={lightboxImage}
                alt="Enlarged presentation slide"
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center font-bold hover:bg-black transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================================== */}
      {/* SECTION 9: GLOBAL CONTACT & GRAVITY DROP FOOTER          */}
      {/* ======================================================== */}
      <div id="contact" className="border-t border-white/10 bg-black">
        <ContactSection />
        <GravityDropFooter />
      </div>
    </div>
  )
}
