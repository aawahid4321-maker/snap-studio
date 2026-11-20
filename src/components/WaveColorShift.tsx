"use client"

// Website palette: blend between coral (#F27256) and red (#CF232B)
// Alternate or interpolate between website brand red (#CF232B) and coral (#F27256)

// 1. Native scroll listener

// 2. IntersectionObserver fallback to guarantee trigger with smooth scrollers (Lenis)
// Re-sweep on hover for interactive polish

import * as React from "react"
import { useEffect, useRef, useCallback, useMemo } from "react"
import {
  motion,
  useAnimate,
  stagger as motionStagger,
  type AnimationOptions,
} from "framer-motion"

const TAGS = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "span"] as const

type ScrollConfig = { position: "top" | "bottom" distance: number }

type Transition = AnimationOptions & {
  type?: "tween" | "spring"
  stiffness?: number
  damping?: number
  mass?: number
  duration?: number
  ease?: string
}

export type WaveColorShiftProps = {
  text?: string
  font?: React.CSSProperties
  color?: string
  waveColor?: string
  colorSpread?: number
  startY?: number
  startOpacity?: number
  transition?: Transition
  tag?: typeof TAGS[number] | string
  scrollConfig?: ScrollConfig
  stagger?: number
  appearTrigger?: "default" | "hover" | "scroll"
  className?: string
}

export function WaveColorShift({
  text = "Latest projects",
  font = {
    fontFamily: 'var(--font-sans), "Geist", sans-serif',
    fontWeight: 600,
    lineHeight: "0.95",
    letterSpacing: "-0.04em",
    textAlign: "center",
  },
  color = "#0A0A0A",
  waveColor = "#CF232B",
  colorSpread = 100,
  startY = 35,
  startOpacity = 0,
  transition = {
    type: "tween",
    duration: 0.65,
    ease: "easeOut",
    stiffness: 800,
    damping: 60,
    mass: 1,
  },
  tag = "h2",
  scrollConfig = { position: "bottom", distance: 18 },
  stagger = 0.035,
  appearTrigger = "scroll",
  className = "",
}: WaveColorShiftProps) {
  const [scope, animate] = useAnimate()
  const hasAnimatedRef = useRef(false)
  const chars = useMemo(
    () =>
      (
        text ??
        ""
      ).split(""),
    [text],
  )

  const computedWaveColors = useMemo(() => {
    const totalChars = chars.length
    if (
      totalChars ===
      0
    )
      return []

    const spreadRatio =
      Math.max(0, Math.min(100, colorSpread)) /
      100
    const affectedCount = Math.max(
      0,
      Math.round(
        totalChars *
          spreadRatio,
      ),
    )
    const middle = (totalChars - 1) / 2
    const halfBand = (Math.max(affectedCount, 1) - 1) / 2
    return chars.map((_, index) => {
      const isAffected =
        affectedCount >
          0 &&
        Math.abs(
          index -
            middle,
        ) <=
          halfBand
      if (!isAffected) return color
      return index % 2 === 0 ? waveColor : "#F27256"
    })
  }, [waveColor, chars, colorSpread, color])

  const resetToHidden = useCallback(() => {
    if (!scope.current) return
    const charNodes = scope.current.querySelectorAll(".char")
    charNodes.forEach((node: Element, index: number) => {
      animate(
        node,
        {
          y: startY,
          opacity: startOpacity,
          color:
            computedWaveColors[index] ??
            waveColor,
        },
        { duration: 0 },
      )
    })
  }, [animate, startY, startOpacity, waveColor, scope, computedWaveColors])

  const runAppear = useCallback(() => {
    if (!scope.current) return
    hasAnimatedRef.current = true

    const animationConfig = {
      ...transition,
      delay: motionStagger(stagger),
    }

    animate(".char", { y: 0, opacity: 1, color: color }, animationConfig as any)
  }, [animate, transition, stagger, color, scope])

  useEffect(() => {
    let rafId: number | null = null
    let observer: IntersectionObserver | null = null

    resetToHidden()
    hasAnimatedRef.current = false

    if (
      appearTrigger ===
      "default"
    ) {
      const t = setTimeout(runAppear, 60)
      return () => clearTimeout(t)
    }

    if (
      appearTrigger ===
      "scroll"
    ) {
      const el = scope.current
      if (!el) return

      const scrollPos =
        scrollConfig?.position ??
        "bottom"
      const scrollDist = Math.max(
        0,
        Math.min(
          100,
          scrollConfig?.distance ??
            18,
        ),
      )

      const check = () => {
        const vh =
          window.innerHeight ||
          document.documentElement.clientHeight
        const rect = el.getBoundingClientRect()
        if (
          scrollPos ===
          "top"
        )
          return rect.top <= vh * (scrollDist / 100)
        return rect.bottom <= vh * (1 - scrollDist / 100)
      }

      if (check()) {
        runAppear()
        return
      }
      let ticking = false
      const onScroll = () => {
        if (!ticking) {
          rafId = window.requestAnimationFrame(() => {
            if (check()) {
              runAppear()
              cleanup()
            }
            ticking = false
          })
          ticking = true
        }
      }
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimatedRef.current) {
              runAppear()
              cleanup()
            }
          })
        },
        { threshold: 0.2 },
      )
      observer.observe(el)

      const cleanup = () => {
        window.removeEventListener("scroll", onScroll, true)
        window.removeEventListener("resize", onScroll)
        if (observer && el) observer.unobserve(el)
        if (rafId) window.cancelAnimationFrame(rafId)
      }

      window.addEventListener("scroll", onScroll, true)
      window.addEventListener("resize", onScroll)

      return cleanup
    }
  }, [
    appearTrigger,
    scrollConfig?.position,
    scrollConfig?.distance,
    runAppear,
    resetToHidden,
    scope,
  ])

  const fontStyles = (font ??
    {}) as React.CSSProperties
  const align =
    fontStyles.textAlign ||
    "center"
  const justifyContent =
    align ===
    "center"
      ? "center"
      : align ===
          "right"
        ? "flex-end"
        : "flex-start"

  const safeTag = (TAGS as readonly string[]).includes(tag) ? tag : "h2"
  const Tag = (motion as any)[safeTag]

  return (
    <div
      onMouseEnter={() => {
        if (hasAnimatedRef.current) {
          animate(".char", { color: [null, waveColor, color] }, {
            duration: 0.5,
            delay: motionStagger(0.02),
          } as any)
        }
      }}
      className={className}
      style={{
        width: "100%",
        display: "flex",
        justifyContent,
        alignItems: "center",
        overflow: "visible",
      }}
    >
      <Tag
        ref={scope}
        aria-label={text}
        style={{
          margin: 0,
          display: "inline-block",
          whiteSpace: "pre-wrap",
          ...fontStyles,
        }}
      >
        {chars.map((char, index) => (
          <motion.span
            key={index}
            className="char"
            aria-hidden="true"
            style={{
              display: "inline-block",
              opacity: startOpacity,
              y: startY,
              color: computedWaveColors[index] ?? waveColor,
              willChange: "transform, opacity, color",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </Tag>
    </div>
  )
}

export default WaveColorShift
