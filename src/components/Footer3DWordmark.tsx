"use client"
// 3D Stagger Flip Entrance on Scroll

// Refresh ScrollTrigger to ensure accurate layout metrics
/* Word 1: Snap */ /* Word 2: Studio + Registered symbol ® */ /* Registered Symbol ® - Properly aligned superscript at top-right of Studio */

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (
  typeof window !==
  "undefined"
) {
  gsap.registerPlugin(ScrollTrigger)
}

interface Footer3DWordmarkProps {
  className?: string
}

export default function Footer3DWordmark({
  className = "",
}: Footer3DWordmarkProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const word1 = "Snap"
  const word2 = "Studio"

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    const chars = container.querySelectorAll<HTMLElement>(".char-3d-flip")
    if (!chars.length) return

    if (prefersReducedMotion) {
      gsap.set(chars, { opacity: 1, rotateX: 0, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        chars,
        {
          opacity: 0,
          rotateX: -100,
          y: 45,
          transformOrigin: "50% 100% -25px",
        },
        {
          opacity: 1,
          rotateX: 0,
          y: 0,
          duration: 0.85,
          ease: "back.out(1.4)",
          stagger: 0.035,
          scrollTrigger: {
            trigger: container,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, container)
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 150)

    return () => {
      clearTimeout(timer)
      ctx.revert()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`w-full select-none flex justify-center items-center text-center mx-auto py-1 md:py-2 ${className}`}
      style={{
        perspective: "1200px",
        perspectiveOrigin: "50% 50%",
      }}
    >
      <div
        className="flex flex-wrap items-baseline justify-center text-center mx-auto gap-x-[0.25em] gap-y-1 font-bricolage font-extrabold tracking-[-0.04em] leading-[1.0] text-[#0A0A0A]"
        style={{
          fontFamily:
            'var(--font-bricolage), "Bricolage Grotesque", sans-serif',
          fontSize: "clamp(3rem, 9.8vw, 9.2rem)",
          fontWeight: 800,
          color: "#0A0A0A",
          transformStyle: "preserve-3d",
          textAlign: "center",
        }}
      >
        {}
        <span
          className="inline-flex whitespace-nowrap"
          style={{ transformStyle: "preserve-3d" }}
        >
          {word1.split("").map((char, idx) => (
            <span
              key={`w1-${idx}`}
              className="char-3d-flip inline-block will-change-transform cursor-pointer transition-colors duration-200 hover:text-[#CF232B] px-[1px]"
              style={{
                display: "inline-block",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  rotateX: 360,
                  duration: 0.6,
                  ease: "power2.out",
                  overwrite: "auto",
                  onComplete: () => {
                    gsap.set(e.currentTarget, { rotateX: 0 })
                  },
                })
              }}
            >
              {char}
            </span>
          ))}
        </span>

        {}
        <span
          className="inline-flex whitespace-nowrap items-baseline relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          {word2.split("").map((char, idx) => (
            <span
              key={`w2-${idx}`}
              className="char-3d-flip inline-block will-change-transform cursor-pointer transition-colors duration-200 hover:text-[#CF232B] px-[1px]"
              style={{
                display: "inline-block",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  rotateX: 360,
                  duration: 0.6,
                  ease: "power2.out",
                  overwrite: "auto",
                  onComplete: () => {
                    gsap.set(e.currentTarget, { rotateX: 0 })
                  },
                })
              }}
            >
              {char}
            </span>
          ))}

          {}
          <span
            className="char-3d-flip inline-block will-change-transform text-[0.32em] font-bold cursor-pointer transition-colors duration-200 hover:text-[#CF232B] ml-1.5 md:ml-2 relative -top-[0.82em]"
            style={{
              display: "inline-block",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              lineHeight: 1,
            }}
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                rotateX: 360,
                duration: 0.6,
                ease: "power2.out",
                overwrite: "auto",
                onComplete: () => {
                  gsap.set(e.currentTarget, { rotateX: 0 })
                },
              })
            }}
          >
            ®
          </span>
        </span>
      </div>
    </div>
  )
}
