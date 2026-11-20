import React from "react"
import { GalleryBlock } from "@/types/project"
import { motion } from "framer-motion"

interface GalleryBlockRendererProps {
  block: GalleryBlock
  index: number
}

export default function GalleryBlockRenderer({
  block,
  index,
}: GalleryBlockRendererProps) {
  if (block.type === "full") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="my-10 md:my-16"
      >
        <div className="relative w-full aspect-[16/9] max-h-[760px] rounded-[8px] md:rounded-[10px] overflow-hidden bg-black/5 border border-border shadow-lg">
          <img
            src={block.src}
            alt={block.alt || block.caption || "Case study slide visual"}
            width="1920"
            height="1080"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        {block.caption && (
          <p className="mt-3 text-center font-mono text-[12px] md:text-[13px] text-muted-foreground/80">
            {block.caption}
          </p>
        )}
      </motion.div>
    )
  }

  if (block.type === "split") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`my-12 md:my-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
          block.reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/9.5] rounded-[8px] md:rounded-[10px] overflow-hidden bg-black/5 border border-border shadow-md">
            <img
              src={block.src}
              alt={block.title}
              width="1920"
              height="1080"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col justify-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-coral font-medium mb-3">
            Strategy & Execution
          </span>
          <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold tracking-tight text-foreground leading-[1.15]">
            {block.title}
          </h3>
          <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-muted-foreground">
            {block.description}
          </p>
        </div>
      </motion.div>
    )
  }

  if (block.type === "grid-2") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="my-10 md:my-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
      >
        {block.items.map((item, i) => (
          <div key={i} className="group flex flex-col">
            <div className="relative aspect-[16/9.5] rounded-[8px] md:rounded-[10px] overflow-hidden bg-black/5 border border-border shadow-sm group-hover:shadow-md transition-shadow duration-300">
              <img
                src={item.src}
                alt={item.caption || `Gallery visual ${i + 1}`}
                width="1920"
                height="1080"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="eager"
              />
            </div>
            {item.caption && (
              <p className="mt-2.5 font-mono text-[12px] text-muted-foreground">
                {item.caption}
              </p>
            )}
          </div>
        ))}
      </motion.div>
    )
  }

  if (block.type === "grid-3") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="my-10 md:my-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {block.items.map((item, i) => (
            <div key={i} className="group flex flex-col">
              <div className="relative aspect-[16/9] rounded-[8px] md:rounded-[10px] overflow-hidden bg-black/5 border border-border shadow-xs group-hover:shadow-md transition-all duration-300">
                <img
                  src={item.src}
                  alt={item.label || `Slide visual ${i + 1}`}
                  width="1920"
                  height="1080"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
              </div>
              {item.label && (
                <div className="mt-2 flex items-center justify-between font-mono text-[11.5px] text-muted-foreground">
                  <span>{item.label}</span>
                  <span className="text-foreground/30">0{i + 1}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    )
  }

  return null
}
