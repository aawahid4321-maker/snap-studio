import React, { useEffect, useRef, useState } from "react"

export default function InteractiveChatButton() {
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const [isGradient, setIsGradient] = useState(false)
  const [isWinking, setIsWinking] = useState(false)
  const [pupilPos, setPupilPos] = useState({ x: 2.5, y: 2 })
  const [isClicking, setIsClicking] = useState(false)

  // Mouse tracking: eyes smoothly look towards the cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current) return
      const rect = buttonRef.current.getBoundingClientRect()
      const btnX = rect.left + rect.width / 2
      const btnY = rect.top + rect.height / 2

      const dx = e.clientX - btnX
      const dy = e.clientY - btnY
      const angle = Math.atan2(dy, dx)
      const dist = Math.hypot(dx, dy)

      // Max radius pupil can travel inside the eye
      const maxRadius = 5
      const travel = Math.min(maxRadius, Math.max(1.5, dist / 40))

      setPupilPos({
        x: Math.cos(angle) * travel,
        y: Math.sin(angle) * travel,
      })
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Toggle website color gradient
    setIsGradient((prev) => !prev)
    setIsClicking(true)
    setIsWinking(true)

    setTimeout(() => {
      setIsClicking(false)
    }, 200)

    setTimeout(() => {
      setIsWinking(false)
    }, 600)
  }

  return (
    <a
      ref={buttonRef}
      href="#contact"
      onClick={handleClick}
      className={`group relative inline-flex items-center gap-3.5 rounded-full pl-7 pr-2.5 py-2.5 md:py-3 transition-all duration-500 select-none ${
        isGradient
          ? "bg-gradient-to-r from-coral to-red shadow-[0_12px_32px_-4px_rgba(242,114,86,0.65)] scale-[1.04]"
          : "bg-black hover:bg-neutral-900 shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)] hover:scale-[1.03]"
      } ${isClicking ? "scale-95" : ""}`}
    >
      {/* Background Gradient Transition Layer */}
      <span
        className={`absolute inset-0 rounded-full bg-gradient-to-r from-coral to-red transition-opacity duration-500 pointer-events-none ${
          isGradient ? "opacity-100" : "opacity-0 group-hover:opacity-20"
        }`}
      />

      {/* Button Text */}
      <span
        className="relative z-10 text-[15px] md:text-[16px] font-bricolage font-semibold text-white tracking-tight"
        style={{
          fontFamily:
            'var(--font-bricolage), "Bricolage Grotesque", sans-serif',
        }}
      >
        Let&apos;s chat
      </span>

      {/* Two Interactive Eyes matching reference */}
      <div className="relative z-10 flex items-center gap-1">
        {/* Left Eye */}
        <div
          className={`relative w-7 h-7 md:w-8 md:h-8 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden transition-transform duration-300 ${
            isClicking ? "scale-90" : "scale-100"
          }`}
        >
          {/* Pupil */}
          <div
            className={`w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-black transition-transform duration-150 ease-out ${
              isWinking ? "animate-eye-wink" : ""
            }`}
            style={{
              transform: isWinking
                ? undefined
                : `translate(${pupilPos.x}px, ${pupilPos.y}px)`,
            }}
          />
        </div>

        {/* Right Eye */}
        <div
          className={`relative w-7 h-7 md:w-8 md:h-8 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden transition-transform duration-300 ${
            isClicking ? "scale-90" : "scale-100"
          }`}
        >
          {/* Pupil */}
          <div
            className={`w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-black transition-transform duration-150 ease-out ${
              isWinking ? "animate-eye-wink" : ""
            }`}
            style={{
              transform: isWinking
                ? undefined
                : `translate(${pupilPos.x}px, ${pupilPos.y}px)`,
            }}
          />
        </div>
      </div>
    </a>
  )
}
