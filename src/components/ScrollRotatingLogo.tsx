import { useEffect, useRef, useState, useCallback } from "react"

/**
 * ScrollRotatingLogo — Pure canvas renderer for the 3D logo frame sequence.
 *
 * Takes a `frameIndex` prop and draws that frame to a canvas.
 * Preloads all frames on mount and calls `onFramesReady` when done.
 * The parent (HeroSection) is responsible for driving `frameIndex`
 * via scroll-hijack logic.
 */

// Frame filenames in correct numerical order
const FRAME_FILENAMES = [
  "test_0001.png",
  "test_0019.png",
  "test_0037.png",
  "test_0055.png",
]

export const FRAME_COUNT = FRAME_FILENAMES.length
const FRAME_BASE_PATH = "/images/hero/rotation-frames/"

// Native frame dimensions
const FRAME_WIDTH = 960
const FRAME_HEIGHT = 540

interface ScrollRotatingLogoProps {
  /** Which frame to display (0-indexed, clamped to [0, FRAME_COUNT-1]) */
  frameIndex: number
  /** Called once all frames are loaded and the canvas is ready */
  onFramesReady?: () => void
  /** Called if frame loading fails */
  onLoadError?: () => void
  className?: string
}

export default function ScrollRotatingLogo({
  frameIndex,
  onFramesReady,
  onLoadError,
  className = "",
}: ScrollRotatingLogoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const framesRef = useRef<HTMLImageElement[]>([])
  const [framesLoaded, setFramesLoaded] = useState(false)
  const lastDrawnFrameRef = useRef(-1)
  const rafRef = useRef<number | null>(null)

  // Preload all frames
  useEffect(() => {
    let cancelled = false
    const images: HTMLImageElement[] = []

    const loadPromises = FRAME_FILENAMES.map((filename, index) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image()
        img.src = `${FRAME_BASE_PATH}${filename}`
        img.onload = () => {
          if (!cancelled) {
            images[index] = img
            resolve()
          }
        }
        img.onerror = () =>
          reject(new Error(`Failed to load frame: ${filename}`))
      })
    })

    Promise.all(loadPromises)
      .then(() => {
        if (!cancelled) {
          framesRef.current = images
          setFramesLoaded(true)
          onFramesReady?.()
        }
      })
      .catch((err) => {
        console.error("ScrollRotatingLogo: frame preload failed", err)
        onLoadError?.()
      })

    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Draw a specific frame to the canvas
  const drawFrame = useCallback((idx: number) => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    const frames = framesRef.current

    if (!canvas || !ctx || !frames.length) return

    const clampedIndex = Math.max(0, Math.min(FRAME_COUNT - 1, idx))
    const frame = frames[clampedIndex]
    if (!frame) return

    // Set canvas internal resolution to match the frame
    if (canvas.width !== FRAME_WIDTH || canvas.height !== FRAME_HEIGHT) {
      canvas.width = FRAME_WIDTH
      canvas.height = FRAME_HEIGHT
    }

    ctx.clearRect(0, 0, FRAME_WIDTH, FRAME_HEIGHT)
    ctx.drawImage(frame, 0, 0, FRAME_WIDTH, FRAME_HEIGHT)
  }, [])

  // Render the requested frame whenever frameIndex changes
  useEffect(() => {
    if (!framesLoaded) return

    const clampedIndex = Math.max(0, Math.min(FRAME_COUNT - 1, frameIndex))

    // Skip redraw if the same frame is already on canvas
    if (clampedIndex === lastDrawnFrameRef.current) return

    lastDrawnFrameRef.current = clampedIndex

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current)
    }
    rafRef.current = requestAnimationFrame(() => {
      drawFrame(clampedIndex)
      rafRef.current = null
    })
  }, [frameIndex, framesLoaded, drawFrame])

  // Draw initial frame once loaded
  useEffect(() => {
    if (framesLoaded) {
      const clampedIndex = Math.max(0, Math.min(FRAME_COUNT - 1, frameIndex))
      lastDrawnFrameRef.current = clampedIndex
      drawFrame(clampedIndex)
    }
  }, [framesLoaded, drawFrame, frameIndex])

  // Cleanup RAF on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={FRAME_WIDTH}
      height={FRAME_HEIGHT}
      className={className}
      aria-hidden="true"
      style={{
        // mix-blend-mode: multiply makes the white background
        // transparent against the coral gradient, showing only the logo
        mixBlendMode: "multiply",
      }}
    />
  )
}
