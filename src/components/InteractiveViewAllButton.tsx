import { useEffect, useRef, useState } from "react"

interface InteractiveViewAllButtonProps {
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  href?: string
}

export default function InteractiveViewAllButton({
  onClick,
  href = "#contact",
}: InteractiveViewAllButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const leftPupilRef = useRef<HTMLDivElement>(null)
  const rightPupilRef = useRef<HTMLDivElement>(null)

  const [isClicking, setIsClicking] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  // Mouse tracking: pupils follow cursor smoothly across screen
  useEffect(() => {
    let animId: number

    const handleMouseMove = (e: MouseEvent) => {
      if (isClicking) return

      cancelAnimationFrame(animId)
      animId = requestAnimationFrame(() => {
        if (
          !buttonRef.current ||
          !leftPupilRef.current ||
          !rightPupilRef.current
        )
          return

        const rect = buttonRef.current.getBoundingClientRect()
        const btnCenterX = rect.left + rect.width / 2
        const btnCenterY = rect.top + rect.height / 2

        const dx = e.clientX - btnCenterX
        const dy = e.clientY - btnCenterY
        const angle = Math.atan2(dy, dx)
        const dist = Math.hypot(dx, dy)

        const maxRadius = 7.5
        const travel = Math.min(maxRadius, Math.max(1.8, dist / 26))
        const px = Math.cos(angle) * travel
        const py = Math.sin(angle) * travel

        leftPupilRef.current.style.transform = `translate(${px}px, ${py}px)`
        rightPupilRef.current.style.transform = `translate(${px}px, ${py}px)`
      })
    }

    const handleMouseLeave = () => {
      if (isClicking) return
      if (leftPupilRef.current && rightPupilRef.current) {
        leftPupilRef.current.style.transform = "translate(0px, 4px)"
        rightPupilRef.current.style.transform = "translate(0px, 4px)"
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    buttonRef.current?.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      buttonRef.current?.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animId)
    }
  }, [isClicking])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsPressed(true)
    setIsClicking(true)

    if (onClick) {
      onClick(e)
    }

    if (leftPupilRef.current && rightPupilRef.current) {
      leftPupilRef.current.style.transform = ""
      rightPupilRef.current.style.transform = ""
    }

    setTimeout(() => {
      setIsPressed(false)
    }, 180)

    setTimeout(() => {
      setIsClicking(false)
      if (leftPupilRef.current && rightPupilRef.current) {
        leftPupilRef.current.style.transform = "translate(0px, 4px)"
        rightPupilRef.current.style.transform = "translate(0px, 4px)"
      }
    }, 750)
  }

  return (
    <>
      <style>{`
        .cta-pill-button {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          background-color: #000000;
          color: #ffffff;
          padding: 8px 12px 8px 30px;
          border-radius: 999px;
          text-decoration: none;
          letter-spacing: -0.01em;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          user-select: none;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.4s ease;
        }

        .cta-pill-button:hover {
          background: linear-gradient(90deg, #F27256, #CF232B);
          box-shadow: 0 12px 36px -4px rgba(242, 114, 86, 0.65);
          transform: scale(1.03);
        }

        .cta-pill-button:active,
        .cta-pill-button.is-pressed {
          transform: scale(0.96);
        }

        .cta-pill-gradient-layer {
          position: absolute;
          inset: 0;
          border-radius: 999px;
          background: linear-gradient(90deg, #F27256, #CF232B);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .cta-pill-button:hover .cta-pill-gradient-layer {
          opacity: 1;
        }

        .cta-eyes {
          display: flex;
          align-items: center;
          gap: 4px;
          position: relative;
          z-index: 10;
        }

        .cta-eye {
          position: relative;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
          transform-origin: center;
        }

        .cta-eye.is-idle {
          animation: eyePeriodicBlink 3.6s infinite ease-in-out;
        }

        .cta-eye.is-clicking {
          animation: eyeClickBlink 0.75s ease-in-out forwards;
        }

        .cta-pupil {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background-color: #000000;
          transform: translate(0px, 4px);
          transition: transform 0.12s ease-out;
          will-change: transform;
        }

        .cta-pupil.is-clicking {
          animation: eyeMoveClick 0.75s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        @keyframes eyePeriodicBlink {
          0%, 88%, 100% { transform: scaleY(1); }
          92% { transform: scaleY(0.08); }
          95% { transform: scaleY(1); }
        }

        @keyframes eyeClickBlink {
          0% { transform: scaleY(1); }
          15% { transform: scaleY(0.08); }
          30% { transform: scaleY(1); }
          50% { transform: scaleY(0.08); }
          65% { transform: scaleY(1); }
          100% { transform: scaleY(1); }
        }

        @keyframes eyeMoveClick {
          0% { transform: translate(0, 0) scale(1); }
          18% { transform: translate(7px, -6px) scale(1.15); }
          36% { transform: translate(-7px, 5px) scale(0.95); }
          54% { transform: translate(6px, 7px) scale(1.1); }
          72% { transform: translate(-5px, -5px) scale(0.95); }
          100% { transform: translate(0px, 8px) scale(1); }
        }
      `}</style>

      <a
        ref={buttonRef}
        href={href}
        onClick={handleClick}
        id="cta-view-all"
        aria-label="View all work"
        className={`cta-pill-button ${isPressed ? "is-pressed" : ""}`}
      >
        {/* Coral-to-red gradient layer smoothly revealing on hover */}
        <span className="cta-pill-gradient-layer" aria-hidden="true" />

        {/* Text */}
        <span
          className="relative z-10 text-[16px] font-semibold text-white tracking-[-0.01em]"
          style={{
            fontFamily:
              'var(--font-bricolage), "Bricolage Grotesque", sans-serif',
          }}
        >
          View all work
        </span>

        {/* Two Eyes sitting directly in button without dark pod, matching 2nd button image exactly */}
        <div className="cta-eyes">
          <div className={`cta-eye ${isClicking ? "is-clicking" : "is-idle"}`}>
            <div
              ref={leftPupilRef}
              className={`cta-pupil ${isClicking ? "is-clicking" : ""}`}
            />
          </div>
          <div className={`cta-eye ${isClicking ? "is-clicking" : "is-idle"}`}>
            <div
              ref={rightPupilRef}
              className={`cta-pupil ${isClicking ? "is-clicking" : ""}`}
            />
          </div>
        </div>
      </a>
    </>
  )
}
