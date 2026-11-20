import { useEffect, useRef, useCallback, useState } from "react"
import { FRAME_COUNT } from "@/components/ScrollRotatingLogo"

/**
 * useScrollHijack — Intercepts wheel/touch scroll events while the hero
 * section is active, consuming the scroll delta to drive a frame-based
 * logo rotation animation instead of scrolling the page.
 *
 * State machine:
 *   IDLE → frames not loaded yet, normal scrolling
 *   HIJACKED → hero visible, consuming scroll to advance frames
 *   RELEASED → animation complete, normal scrolling resumes
 *
 * The hook handles:
 *   - Wheel events (desktop mouse / trackpad)
 *   - Touch events (mobile swipe gestures)
 *   - Re-engagement when scrolling back up to the hero
 *   - Reduced-motion bypass
 *   - Safety fallback (never traps the user)
 */

// How many pixels of cumulated scroll delta to move one frame.
// With 4 frames and 3 transitions, this means ~300px total scroll
// "distance" to complete the full rotation — enough to feel deliberate
// but not sluggish.
const DELTA_PER_FRAME = 100

// Total delta to complete the full animation
const TOTAL_DELTA = DELTA_PER_FRAME * (FRAME_COUNT - 1)

// Safety: maximum time (ms) to allow the hijack to be active without
// any user input. If this fires, we release immediately.
const SAFETY_TIMEOUT_MS = 8000

interface UseScrollHijackOptions {
  /** Ref to the hero container element */
  heroRef: React.RefObject<HTMLDivElement | null>
  /** Whether frames have finished loading */
  framesReady: boolean
  /** Whether reduced motion is preferred */
  prefersReducedMotion: boolean
}

interface UseScrollHijackReturn {
  /** Current frame index to render [0, FRAME_COUNT-1] */
  frameIndex: number
}

export default function useScrollHijack({
  heroRef,
  framesReady,
  prefersReducedMotion,
}: UseScrollHijackOptions): UseScrollHijackReturn {
  // Accumulated scroll delta (0 = first frame, TOTAL_DELTA = last frame)
  const accumulatedDeltaRef = useRef(0)

  // Current frame index (derived from accumulated delta)
  const [frameIndex, setFrameIndex] = useState(0)

  // Whether the hijack is currently active
  const hijackActiveRef = useRef(false)

  // Whether the animation completed forward (user scrolled through all frames)
  const completedForwardRef = useRef(false)

  // Safety timeout handle
  const safetyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Last interaction timestamp for safety
  const lastInteractionRef = useRef(Date.now())

  // Touch tracking
  const touchStartYRef = useRef<number | null>(null)
  const touchLastYRef = useRef<number | null>(null)

  // Track whether we've initialized at all (to avoid re-locking after page
  // has been scrolled past the hero on first load)
  const initializedRef = useRef(false)

  /**
   * Convert accumulated delta to a frame index.
   */
  const deltaToFrame = useCallback((delta: number): number => {
    const progress = Math.max(0, Math.min(1, delta / TOTAL_DELTA))
    return Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.round(progress * (FRAME_COUNT - 1))),
    )
  }, [])

  /**
   * Reset the safety timer. If no interaction happens within
   * SAFETY_TIMEOUT_MS, we release the hijack.
   */
  const resetSafetyTimer = useCallback(() => {
    if (safetyTimerRef.current !== null) {
      clearTimeout(safetyTimerRef.current)
    }
    safetyTimerRef.current = setTimeout(() => {
      // Safety release: user hasn't scrolled in a while, unlock
      if (hijackActiveRef.current) {
        hijackActiveRef.current = false
        completedForwardRef.current = true
      }
    }, SAFETY_TIMEOUT_MS)
    lastInteractionRef.current = Date.now()
  }, [])

  /**
   * Process a scroll delta (positive = scroll down, negative = scroll up).
   * Returns true if the event was consumed (should preventDefault).
   */
  const processDelta = useCallback(
    (deltaY: number): boolean => {
      const hero = heroRef.current
      if (!hero || !framesReady || prefersReducedMotion) return false

      const scrollY = window.scrollY

      // ─── CASE 1: Hero at top, not yet completed ───
      // Hero's top is at or above viewport top, and we haven't completed
      // the forward animation yet.
      if (scrollY <= 1 && !completedForwardRef.current) {
        // Scrolling down → advance frames
        if (deltaY > 0) {
          if (!hijackActiveRef.current) {
            hijackActiveRef.current = true
          }

          accumulatedDeltaRef.current = Math.min(
            TOTAL_DELTA,
            accumulatedDeltaRef.current + deltaY,
          )

          const newFrame = deltaToFrame(accumulatedDeltaRef.current)
          setFrameIndex(newFrame)
          resetSafetyTimer()

          // Check if we've reached the last frame
          if (accumulatedDeltaRef.current >= TOTAL_DELTA) {
            hijackActiveRef.current = false
            completedForwardRef.current = true
            if (safetyTimerRef.current !== null) {
              clearTimeout(safetyTimerRef.current)
            }
            // Let this scroll event pass through so the page starts scrolling
            return false
          }

          return true // Consume the event
        }

        // Scrolling up while at top with accumulated delta → reverse frames
        if (deltaY < 0 && accumulatedDeltaRef.current > 0) {
          accumulatedDeltaRef.current = Math.max(
            0,
            accumulatedDeltaRef.current + deltaY, // deltaY is negative
          )

          const newFrame = deltaToFrame(accumulatedDeltaRef.current)
          setFrameIndex(newFrame)
          resetSafetyTimer()

          return true // Consume the event
        }

        // Scrolling up at frame 0, already at top → let it go (bounce, etc.)
        return false
      }

      // ─── CASE 2: Scrolling back up into the hero ───
      // The page has been scrolled past the hero. When user scrolls back up
      // and reaches scrollY ≈ 0, re-engage the reverse animation.
      if (
        deltaY < 0 &&
        scrollY <= 1 &&
        completedForwardRef.current
      ) {
        // Re-engage: start reversing from the last frame
        completedForwardRef.current = false
        hijackActiveRef.current = true
        accumulatedDeltaRef.current = TOTAL_DELTA

        // Apply this delta to start reversing
        accumulatedDeltaRef.current = Math.max(
          0,
          accumulatedDeltaRef.current + deltaY,
        )

        const newFrame = deltaToFrame(accumulatedDeltaRef.current)
        setFrameIndex(newFrame)
        resetSafetyTimer()

        return true // Consume the event
      }

      // ─── CASE 3: Normal scrolling (hero off-screen or completed) ───
      return false
    },
    [heroRef, framesReady, prefersReducedMotion, deltaToFrame, resetSafetyTimer],
  )

  // ──────────────────────────────────────────────────────────
  // WHEEL EVENT HANDLER
  // ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (!framesReady || prefersReducedMotion) return

    const hero = heroRef.current
    if (!hero) return

    // On initial load, check if we're already scrolled past the hero.
    // If so, mark as completed so we don't hijack on first render.
    if (!initializedRef.current) {
      initializedRef.current = true
      if (window.scrollY > 10) {
        completedForwardRef.current = true
        accumulatedDeltaRef.current = TOTAL_DELTA
        setFrameIndex(FRAME_COUNT - 1)
        return
      }
    }

    const onWheel = (e: WheelEvent) => {
      try {
        const consumed = processDelta(e.deltaY)
        if (consumed) {
          e.preventDefault()
          e.stopPropagation()
        }
      } catch {
        // Safety: if anything goes wrong, don't trap the user
        hijackActiveRef.current = false
        completedForwardRef.current = true
      }
    }

    // Must be non-passive to allow preventDefault
    window.addEventListener("wheel", onWheel, { passive: false })

    return () => {
      window.removeEventListener("wheel", onWheel)
      if (safetyTimerRef.current !== null) {
        clearTimeout(safetyTimerRef.current)
      }
    }
  }, [framesReady, prefersReducedMotion, heroRef, processDelta])

  // ──────────────────────────────────────────────────────────
  // TOUCH EVENT HANDLERS (mobile)
  // ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (!framesReady || prefersReducedMotion) return

    const hero = heroRef.current
    if (!hero) return

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartYRef.current = e.touches[0].clientY
        touchLastYRef.current = e.touches[0].clientY
      }
    }

    const onTouchMove = (e: TouchEvent) => {
      try {
        if (
          e.touches.length !== 1 ||
          touchLastYRef.current === null
        )
          return

        const currentY = e.touches[0].clientY
        // Invert: finger moving up = scroll down (positive delta)
        const deltaY = (touchLastYRef.current - currentY) * 1.5
        touchLastYRef.current = currentY

        if (Math.abs(deltaY) < 1) return

        const consumed = processDelta(deltaY)
        if (consumed) {
          e.preventDefault()
        }
      } catch {
        // Safety: never trap on error
        hijackActiveRef.current = false
        completedForwardRef.current = true
      }
    }

    const onTouchEnd = () => {
      touchStartYRef.current = null
      touchLastYRef.current = null
    }

    // Must be non-passive for touchmove to allow preventDefault
    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("touchmove", onTouchMove, { passive: false })
    window.addEventListener("touchend", onTouchEnd, { passive: true })

    return () => {
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("touchend", onTouchEnd)
    }
  }, [framesReady, prefersReducedMotion, heroRef, processDelta])

  // ──────────────────────────────────────────────────────────
  // SCROLL LISTENER: detect when user scrolls back to top
  // ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (!framesReady || prefersReducedMotion) return

    const onScroll = () => {
      // This is handled inside processDelta when the wheel event fires
      // at scrollY=0. Nothing to do here for normal operation, but we
      // keep this for edge case: if user uses keyboard or scrollbar
      // to get back to top, ensure state is correct.
      if (window.scrollY <= 0 && completedForwardRef.current) {
        // The user is back at top. The next wheel/touch event
        // scrolling up will re-engage. We just note readiness.
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [framesReady, prefersReducedMotion])

  return { frameIndex }
}
