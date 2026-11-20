import type { CSSProperties } from "react"

export interface ShinyPillProps {
  text?: string
  link?: string
  textColor?: string
  shineColor?: string
  speed?: number
  font?: CSSProperties
  style?: CSSProperties
  className?: string
}

const KEYFRAMES_ID = "shiny-pill-keyframes"

const COMPONENT_DEFAULTS = {
  text: "Latest projects",
  textColor: "#0A0A0A",
  shineColor: "#CF232B",
  speed: 2.2,
  font: {
    fontFamily: 'var(--font-sans), "Geist", sans-serif',
    fontWeight: 600,
    letterSpacing: "-0.04em",
    lineHeight: "0.95",
  } as CSSProperties,
}

export default function ShinyPill(props: ShinyPillProps) {
  const merged = { ...COMPONENT_DEFAULTS, ...props }
  const {
    text = "Latest projects",
    link,
    textColor = "#0A0A0A",
    shineColor = "#CF232B",
    speed = 2.2,
    font,
    style,
    className = "",
  } = merged

  const shellStyle: CSSProperties = {
    ...style,
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    whiteSpace: "nowrap",
    ...font,
  }

  const shineLayerStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    color: shineColor,
    pointerEvents: "none",
    WebkitMaskImage:
      "linear-gradient(to right, transparent 30%, #000 50%, transparent 70%)",
    maskImage:
      "linear-gradient(to right, transparent 30%, #000 50%, transparent 70%)",
    WebkitMaskSize: "150% auto",
    maskSize: "150% auto",
    animation: `shinyPillSweep ${speed}s ease-in-out infinite`,
  }

  const content = (
    <div className={className} style={shellStyle}>
      <style
        id={KEYFRAMES_ID}
        dangerouslySetInnerHTML={{
          __html: `@keyframes shinyPillSweep {
            0% { -webkit-mask-position: 200%; mask-position: 200%; }
            100% { -webkit-mask-position: -100%; mask-position: -100%; }
          }`,
        }}
      />
      <span style={{ color: textColor }}>{text}</span>
      <span style={shineLayerStyle} aria-hidden="true">
        {text}
      </span>
    </div>
  )

  if (link) {
    return (
      <a href={link} style={{ textDecoration: "none", display: "inline-flex" }}>
        {content}
      </a>
    )
  }

  return content
}
