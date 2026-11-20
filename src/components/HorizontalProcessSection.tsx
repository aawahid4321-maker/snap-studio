import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface PhaseData {
  num: string
  key: string
  letter: string
  title: string
  statement: string
  bullets: string[]
  bg: string
  isDark?: boolean
}

const PHASES: PhaseData[] = [
  {
    num: "01",
    key: "discover",
    letter: "D",
    title: "Discover",
    statement: "We learn your business, audience, and goals.",
    bullets: [
      "the brief behind the brief, not just the checklist",
      "audience, market and competitors mapped first",
      "clear goals before a single slide is designed",
    ],
    bg: "#0A0A0A",
    isDark: true,
  },
  {
    num: "02",
    key: "create",
    letter: "C",
    title: "Create",
    statement: "Our designers build the concept, using AI to move faster.",
    bullets: [
      "narrative and structure locked before visuals",
      "design systems built, not one-off slides",
      "AI-assisted production, human-led craft",
    ],
    bg: "#FFFFFF",
    isDark: false,
  },
  {
    num: "03",
    key: "refine",
    letter: "R",
    title: "Refine",
    statement: "We review together and polish every detail.",
    bullets: [
      "your feedback, applied in fast rounds",
      "spacing, type and hierarchy checked line by line",
      "nothing ships until it reads clean",
    ],
    bg: "#0A0A0A",
    isDark: true,
  },
  {
    num: "04",
    key: "deliver",
    letter: "D",
    title: "Deliver",
    statement: "You get final files or live systems, ready to launch.",
    bullets: [
      "editable source files, fully organised",
      "export-ready formats for every use case",
      "handover support after delivery",
    ],
    bg: "#FFFFFF",
    isDark: false,
  },
]

export default function HorizontalProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const percentTextRef = useRef<HTMLSpanElement>(null)

  // Active phase index: -1 = intro, 0 = 01, 1 = 02, 2 = 03, 3 = 04
  const [activePhase, setActivePhase] = useState<number>(-1)
  const isDarkSection = activePhase === 0 || activePhase === 2

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const mm = gsap.matchMedia()

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    if (prefersReducedMotion) {
      // Reduced motion: no pinning, static layout
      return
    }

    // Unified horizontal pinned scroll for desktop, tablet, and mobile
    mm.add("all", () => {
      const panels = track.querySelectorAll<HTMLElement>(".process-panel")
      const totalPanels = panels.length // 5 panels (intro + 4 phases)

      // Initial panel content setup
      panels.forEach((panel, i) => {
        if (i === 0) return // intro has its own setup
        const content = panel.querySelector<HTMLElement>(".panel-content-wrap")
        const titleText = panel.querySelector<HTMLElement>(".panel-title-text")
        const rule = panel.querySelector<HTMLElement>(".panel-rule")
        const statement = panel.querySelector<HTMLElement>(".panel-statement")
        const bullets = panel.querySelectorAll<HTMLElement>(".panel-bullet")
        const ghost = panel.querySelector<HTMLElement>(".panel-ghost-number")

        if (titleText) gsap.set(titleText, { yPercent: 100 })
        if (rule) gsap.set(rule, { scaleX: 0, transformOrigin: "left center" })
        if (statement) gsap.set(statement, { opacity: 0, y: 20 })
        if (bullets.length) gsap.set(bullets, { opacity: 0, x: -20 })
        if (ghost) gsap.set(ghost, { opacity: 0, x: 80 })
        if (content) gsap.set(content, { x: 60 })
      })

      // Master Timeline for Horizontal Slide
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          anticipatePin: 1,
          start: "top top",
          end: "+=320%", // compact scroll distance for natural feel
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress

            // Update vertical percentage indicator
            const pct = Math.round(p * 100)
            if (percentTextRef.current) {
              percentTextRef.current.textContent = `${String(pct).padStart(3, "0")}%`
            }
            if (progressBarRef.current) {
              progressBarRef.current.style.transform = `scaleY(${p})`
            }

            // Determine active phase index
            // 0 -> 0.2: intro (-1)
            // 0.2 -> 0.4: phase 0 (01)
            // 0.4 -> 0.6: phase 1 (02)
            // 0.6 -> 0.8: phase 2 (03)
            // 0.8 -> 1.0: phase 3 (04)
            const phaseProgress = p * (totalPanels - 1)
            const currentIdx = Math.floor(phaseProgress)
            const activeIdx =
              currentIdx === 0 && p < 0.12
                ? -1
                : Math.min(
                    3,
                    Math.max(
                      0,
                      currentIdx - 1 + (phaseProgress % 1 > 0.45 ? 1 : 0),
                    ),
                  )
            setActivePhase(activeIdx)
          },
        },
      })

      // 1. Horizontal track motion: from 0% to -(100 * 4 / 5)% = -80%
      // Finishes at 3.7 so Phase 04 rests firmly in full view with zero edge bleeding
      tl.to(
        track,
        {
          xPercent: -80,
          ease: "none",
          duration: 3.75, // 4 transitions across 5 panels with a smooth end hold
        },
        0,
      )

      // 2. Background color transitions across panels:
      // Panel 0 (1st: Intro): #FFFFFF (White)
      // Panel 1 (2nd: Discover): #0A0A0A (Black)
      // Panel 2 (3rd: Create): #FFFFFF (White)
      // Panel 3 (4th: Refine): #0A0A0A (Black)
      // Panel 4 (5th: Deliver): #FFFFFF (White)
      tl.to(
        section,
        { backgroundColor: "#0A0A0A", ease: "power1.inOut", duration: 0.6 },
        0.4,
      )
        .to(
          section,
          { backgroundColor: "#FFFFFF", ease: "power1.inOut", duration: 0.6 },
          1.4,
        )
        .to(
          section,
          { backgroundColor: "#0A0A0A", ease: "power1.inOut", duration: 0.6 },
          2.4,
        )
        .to(
          section,
          { backgroundColor: "#FFFFFF", ease: "power1.inOut", duration: 0.5 },
          3.2,
        )

      // 3. Parallax and entrances for each phase panel
      PHASES.forEach((phase, idx) => {
        const panelIdx = idx + 1 // panel 0 is intro
        const panel = panels[panelIdx]
        if (!panel) return

        const content = panel.querySelector<HTMLElement>(".panel-content-wrap")
        const titleText = panel.querySelector<HTMLElement>(".panel-title-text")
        const rule = panel.querySelector<HTMLElement>(".panel-rule")
        const statement = panel.querySelector<HTMLElement>(".panel-statement")
        const bullets = panel.querySelectorAll<HTMLElement>(".panel-bullet")
        const ghost = panel.querySelector<HTMLElement>(".panel-ghost-number")

        const targetGhostOpacity = phase.isDark ? 0.08 : 0.045
        const startTime = panelIdx - 0.7 // start slightly before panel becomes center
        const isLastPhase = idx === PHASES.length - 1

        // Content parallax (translateX +60px to 0 for last panel, or to -60px for previous panels)
        if (content) {
          tl.fromTo(
            content,
            { x: 60 },
            {
              x: isLastPhase ? 0 : -60,
              ease: "none",
              duration: isLastPhase ? 1.1 : 1.8,
            },
            panelIdx - 0.9,
          )
        }

        // Ghost number parallax (fade in; only previous panels fade out to left)
        if (ghost) {
          tl.fromTo(
            ghost,
            { x: 100, opacity: 0 },
            {
              x: 0,
              opacity: targetGhostOpacity,
              ease: "power2.out",
              duration: 0.8,
            },
            startTime,
          )
          if (!isLastPhase) {
            tl.to(
              ghost,
              { x: -100, opacity: 0, ease: "power2.in", duration: 0.7 },
              panelIdx + 0.3,
            )
          }
        }

        // Title masked reveal: slides up from 100% inside overflow-hidden
        if (titleText) {
          tl.to(
            titleText,
            { yPercent: 0, ease: "power4.out", duration: 0.8 },
            startTime + 0.15,
          )
        }

        // Rule scaleX: 0 -> 1 from left
        if (rule) {
          tl.to(
            rule,
            { scaleX: 1, ease: "power2.out", duration: 0.6 },
            startTime + 0.25,
          )
        }

        // Statement fade + translateY: 20px -> 0
        if (statement) {
          tl.to(
            statement,
            { opacity: 0.9, y: 0, ease: "power2.out", duration: 0.6 },
            startTime + 0.3,
          )
        }

        // Bullets stagger fade + translateX: -20px -> 0
        if (bullets.length) {
          tl.to(
            bullets,
            {
              opacity: 0.65,
              x: 0,
              stagger: 0.08,
              ease: "power2.out",
              duration: 0.6,
            },
            startTime + 0.38,
          )
        }
      })
    })

    // Refresh ScrollTrigger after initial mount and font rendering
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 250)

    const onResize = () => {
      ScrollTrigger.refresh()
    }
    window.addEventListener("resize", onResize)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", onResize)
      mm.revert()
    }
  }, [])

  return (
    <section
      id="process"
      ref={sectionRef}
      className="process-section relative w-full overflow-hidden transition-colors duration-500 select-none text-[#0A0A0A]"
      style={{
        backgroundColor: "#FFFFFF",
        fontFamily:
          'var(--font-sans), "Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* ========================================================= */}
      {/* Pinned horizontal track for all screens                   */}
      {/* ========================================================= */}
      <div className="w-full h-[76vh] sm:h-[70vh] md:h-[64vh] min-h-[480px] max-h-[600px] relative overflow-hidden">
        {/* Horizontal flex track: 5 panels (500% width) */}
        <div
          ref={trackRef}
          className="flex h-full will-change-transform"
          style={{ width: "500%" }}
        >
          {/* ----- PANEL 0 (1st Panel): INTRO PANEL (White) ----- */}
          <div
            className="process-panel relative h-full shrink-0 flex items-center px-6 sm:px-8 md:px-12 lg:px-16"
            style={{
              width: "20%",
              minWidth: "20%",
              maxWidth: "20%",
              flex: "0 0 20%",
              background: "#FFFFFF",
            }}
          >
            <div className="w-full max-w-[1200px] mx-auto flex items-center">
              <div className="w-full md:w-[70%] lg:w-[58%] ml-0 md:ml-[10%] lg:ml-[20%]">
                {/* 1. Label: (03) + 32px red line + HOW WE WORK */}
                <div className="flex items-center gap-2.5">
                  <span className="font-sans text-[11px] uppercase tracking-[0.1em] text-[#CF232B] font-semibold">
                    (03)
                  </span>
                  <span className="inline-block w-[32px] h-[1.5px] bg-[#CF232B] shrink-0" />
                  <span className="font-sans text-[11px] uppercase tracking-[0.1em] text-[#CF232B] font-semibold">
                    HOW WE WORK
                  </span>
                </div>

                {/* 2. Heading: From brief to delivery. */}
                <h2
                  className="mt-5 text-[clamp(28px,4vw,52px)] font-bold leading-[1.05] tracking-[-0.03em] text-[#0A0A0A] font-sans"
                  style={{
                    fontFamily: 'var(--font-sans), "Geist", sans-serif',
                    fontWeight: 700,
                  }}
                >
                  From brief to delivery
                  <span className="text-[#CF232B]">.</span>
                </h2>

                {/* 3. Subtitle */}
                <p className="mt-4 text-[14px] md:text-[15px] leading-relaxed text-[#0A0A0A]/70 max-w-lg font-sans">
                  A simple process that keeps you in the loop at every step.
                </p>

                {/* 4. Phase Strip */}
                <div className="mt-7 pt-4 border-t border-[#0A0A0A]/10 flex items-center gap-2.5 font-sans text-[11px] uppercase tracking-[0.12em] text-[#0A0A0A]/50 font-medium">
                  <span className="text-[#CF232B] font-semibold">DISCOVER</span>
                  <span>·</span>
                  <span>CREATE</span>
                  <span>·</span>
                  <span>REFINE</span>
                  <span>·</span>
                  <span>DELIVER</span>
                </div>
              </div>
            </div>
          </div>

          {/* ----- PANELS 1–4: PHASE PANELS ----- */}
          {/* Panel 1 (2nd): Black | Panel 2 (3rd): White | Panel 3 (4th): Black | Panel 4 (5th): White */}
          {PHASES.map((phase) => {
            return (
              <div
                key={phase.num}
                className={`process-panel relative h-full shrink-0 flex items-center px-6 sm:px-8 md:px-12 lg:px-16 overflow-hidden ${
                  phase.isDark ? "text-white" : "text-[#0A0A0A]"
                }`}
                style={{
                  width: "20%",
                  minWidth: "20%",
                  maxWidth: "20%",
                  flex: "0 0 20%",
                  background: phase.bg,
                }}
              >
                {/* Full-width container with side padding */}
                <div className="w-full max-w-[1200px] mx-auto relative flex items-center">
                  {/* Faded Ghost Number: Scaled down in Geist font */}
                  <div
                    className="panel-ghost-number pointer-events-none absolute right-[2%] lg:right-[4%] top-1/2 -translate-y-1/2 z-0 font-bold select-none will-change-transform"
                    style={{
                      fontFamily: 'var(--font-sans), "Geist", sans-serif',
                      fontSize: "clamp(90px, 16vw, 220px)",
                      lineHeight: 0.8,
                      fontWeight: 700,
                      color: phase.isDark
                        ? "rgba(255, 255, 255, 0.08)"
                        : "rgba(10, 10, 10, 0.045)",
                    }}
                    aria-hidden="true"
                  >
                    {phase.num}
                  </div>

                  {/* Panel Content Block */}
                  <div className="panel-content-wrap relative z-10 w-full md:w-[70%] lg:w-[58%] ml-0 md:ml-[10%] lg:ml-[20%] will-change-transform">
                    {/* Small Phase Label */}
                    <div
                      className="font-sans text-[11px] uppercase tracking-[0.1em] font-medium"
                      style={{
                        color: phase.isDark
                          ? "rgba(255, 255, 255, 0.6)"
                          : "rgba(10, 10, 10, 0.45)",
                      }}
                    >
                      PHASE {phase.num} / 04
                    </div>

                    {/* Phase Title: Pure Geist font */}
                    <div className="overflow-hidden mt-2.5">
                      <h3
                        className="panel-title-text text-[clamp(34px,4.2vw,58px)] font-bold tracking-[-0.03em] leading-none select-none will-change-transform font-sans"
                        style={{
                          fontFamily: 'var(--font-sans), "Geist", sans-serif',
                          fontWeight: 700,
                          color: phase.isDark ? "#FFFFFF" : "#0A0A0A",
                        }}
                      >
                        {phase.title}
                        <span style={{ color: "#CF232B" }}>.</span>
                      </h3>
                    </div>

                    {/* Thin Horizontal Rule: width 200px, 1px */}
                    <div
                      className="panel-rule h-[1px] my-[18px] will-change-transform origin-left"
                      style={{
                        width: "200px",
                        backgroundColor: phase.isDark
                          ? "rgba(255, 255, 255, 0.2)"
                          : "rgba(10, 10, 10, 0.15)",
                      }}
                    />

                    {/* Statement Line: Pure Geist font (font-sans) */}
                    <p
                      className="panel-statement font-sans text-[14px] md:text-[15px] font-normal leading-relaxed max-w-lg will-change-transform"
                      style={{
                        color: phase.isDark
                          ? "rgba(255, 255, 255, 0.9)"
                          : "rgba(10, 10, 10, 0.88)",
                        letterSpacing: "-0.01em",
                        fontFamily: 'var(--font-sans), "Geist", sans-serif',
                      }}
                    >
                      {phase.statement}
                    </p>

                    {/* Bullets: Pure Geist font (font-sans), prefixed with em-dash "—" in var(--coral) */}
                    <ul className="mt-[18px] space-y-[9px]">
                      {phase.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="panel-bullet flex items-baseline gap-2 font-sans text-[13px] leading-snug will-change-transform"
                          style={{
                            color: phase.isDark
                              ? "rgba(255, 255, 255, 0.72)"
                              : "rgba(10, 10, 10, 0.65)",
                            letterSpacing: "0.005em",
                            fontFamily: 'var(--font-sans), "Geist", sans-serif',
                          }}
                        >
                          <span
                            className="shrink-0 font-bold"
                            style={{ color: "#F27256" }}
                          >
                            —
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ========================================================= */}
        {/* PROGRESS TRACK (Bottom Centre of Pinned Viewport)          */}
        {/* ========================================================= */}
        <div
          className="pointer-events-none absolute bottom-7 left-1/2 -translate-x-1/2 z-40 flex items-center justify-center"
          style={{ width: "min(85vw, 460px)" }}
        >
          <div className="relative w-full flex items-center justify-between">
            {/* Background connecting line */}
            <div
              className="absolute top-1/2 left-0 right-0 h-[1px] -translate-y-1/2 z-0 transition-colors duration-300"
              style={{
                backgroundColor: isDarkSection
                  ? "rgba(255, 255, 255, 0.22)"
                  : "rgba(10, 10, 10, 0.12)",
              }}
            />

            {/* Filled connecting line (scaleX driven by active phase progress) */}
            <div
              className="absolute top-1/2 left-0 h-[1px] -translate-y-1/2 z-0 transition-all duration-300 origin-left"
              style={{
                backgroundColor: "#F27256",
                width: `${activePhase < 0 ? 0 : (activePhase / 3) * 100}%`,
              }}
            />

            {/* 4 Phase Markers */}
            {PHASES.map((p, idx) => {
              const isActive = activePhase === idx
              const isCompleted = activePhase > idx

              return (
                <div
                  key={p.num}
                  className="relative z-10 flex flex-col items-center"
                >
                  {/* Marker Node */}
                  <div className="flex items-center justify-center w-7 h-7">
                    {isActive ? (
                      /* Active Marker: Initial letter in Geist font */
                      <span
                        className="font-sans text-[14px] font-bold transition-transform duration-300 scale-110 select-none"
                        style={{
                          color: "#CF232B",
                          fontFamily: 'var(--font-sans), "Geist", sans-serif',
                        }}
                      >
                        {p.letter}
                      </span>
                    ) : isCompleted ? (
                      /* Completed Marker: Letter at 70% opacity in Geist */
                      <span
                        className="font-sans text-[12px] font-semibold transition-colors duration-300 select-none"
                        style={{
                          color: isDarkSection
                            ? "rgba(255, 255, 255, 0.85)"
                            : "rgba(10, 10, 10, 0.70)",
                          fontFamily: 'var(--font-sans), "Geist", sans-serif',
                        }}
                      >
                        {p.letter}
                      </span>
                    ) : (
                      /* Unreached Marker: 5px dot */
                      <span
                        className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                        style={{
                          backgroundColor: isDarkSection
                            ? "rgba(255, 255, 255, 0.35)"
                            : "rgba(10, 10, 10, 0.25)",
                        }}
                      />
                    )}
                  </div>

                  {/* Label: Fades in under active/completed marker */}
                  <div
                    className={`absolute top-7 whitespace-nowrap font-sans text-[9.5px] uppercase tracking-[0.12em] font-medium transition-opacity duration-300 select-none ${
                      isActive || isCompleted ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      color: isActive
                        ? "#CF232B"
                        : isDarkSection
                          ? "rgba(255, 255, 255, 0.7)"
                          : "rgba(10, 10, 10, 0.55)",
                      fontFamily: 'var(--font-sans), "Geist", sans-serif',
                    }}
                  >
                    {p.title}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* VERTICAL PROGRESS INDICATOR (Right Edge)                  */}
        {/* ========================================================= */}
        <div className="pointer-events-none absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-40 flex items-center gap-2.5 select-none">
          {/* 80px tall 1.5px vertical line */}
          <div
            className="relative w-[1.5px] h-[80px] overflow-hidden rounded-full transition-colors duration-300"
            style={{
              backgroundColor: isDarkSection
                ? "rgba(255, 255, 255, 0.22)"
                : "rgba(10, 10, 10, 0.12)",
            }}
          >
            {/* Fill bar growing with scroll progress in var(--red) */}
            <div
              ref={progressBarRef}
              className="w-full h-full origin-top transition-transform duration-75"
              style={{
                backgroundColor: "#CF232B",
                transform: "scaleY(0)",
              }}
            />
          </div>

          {/* Live Percentage Readout (000% - 100%) */}
          <span
            ref={percentTextRef}
            className="font-sans text-[10.5px] font-semibold tracking-[0.08em] min-w-[36px] transition-colors duration-300"
            style={{
              color: isDarkSection
                ? "rgba(255, 255, 255, 0.75)"
                : "rgba(10, 10, 10, 0.55)",
              fontFamily: 'var(--font-sans), "Geist", sans-serif',
            }}
          >
            000%
          </span>
        </div>
      </div>
    </section>
  )
}
