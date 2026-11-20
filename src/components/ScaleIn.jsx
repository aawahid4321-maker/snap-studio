// ScaleIn.jsx
import { motion } from "motion/react"

export default function ScaleIn({
  children,
  as = "h2",
  className = "",
  style,
}) {
  const Tag = motion[as] || motion.h2
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
