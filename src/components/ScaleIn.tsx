import type { ReactNode, CSSProperties } from "react"
import { motion } from "motion/react"

export interface ScaleInProps {
  children: ReactNode
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "p" | "span" | "section"
  className?: string
  style?: CSSProperties
}

export default function ScaleIn({
  children,
  as = "h2",
  className = "",
  style,
}: ScaleInProps) {
  const Tag = (motion as any)[as] || motion.h2
  return (
    <Tag
      className={className}
      style={style}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  )
}
