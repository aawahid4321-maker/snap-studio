import React from "react"
import { Project } from "@/types/project"
import { motion } from "framer-motion"

interface CaseStudyHeroProps {
  project: Project
  onBack: () => void
}

export default function CaseStudyHero({ project, onBack }: CaseStudyHeroProps) {
  return (
    <div className="pt-28 md:pt-36 pb-12 md:pb-16 max-w-[1360px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
      {/* Top Navigation Row */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="flex items-center justify-between mb-8 md:mb-12"
      >
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2.5 text-[14px] md:text-[15px] font-mono text-foreground/60 hover:text-coral transition-colors duration-200 cursor-pointer"
        >
          <span className="inline-block transition-transform duration-200 group-hover:-translate-x-1">
            ←
          </span>
          <span className="uppercase tracking-wider">Back to all work</span>
        </button>

        <div className="flex items-center gap-2 font-mono text-[12px] text-foreground/40">
          <span>( {project.year} )</span>
          <span className="w-1.5 h-1.5 rounded-full bg-coral" />
        </div>
      </motion.div>

      {/* Main Title & Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-4xl"
      >
        <h1
          className="font-sans text-[clamp(2.5rem,5.5vw,4.8rem)] font-bold leading-[1.02] tracking-[-0.035em] text-foreground"
          style={{ fontFamily: 'var(--font-sans), "Geist", sans-serif' }}
        >
          {project.clientName}
        </h1>

        <p className="mt-4 md:mt-6 text-[17px] sm:text-[19px] md:text-[21px] leading-relaxed text-muted-foreground font-light max-w-3xl">
          {project.shortIntro}
        </p>
      </motion.div>

      {/* Meta Row: Client · Industry · Services · Year */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 md:mt-14 pt-6 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-6 select-none"
      >
        <div>
          <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/45 mb-1.5">
            Client
          </span>
          <span className="text-[15px] md:text-[16px] font-semibold text-foreground tracking-tight">
            {project.clientName}
          </span>
        </div>

        <div>
          <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/45 mb-1.5">
            Industry
          </span>
          <span className="text-[15px] md:text-[16px] font-medium text-foreground tracking-tight">
            {project.industry}
          </span>
        </div>

        <div>
          <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/45 mb-1.5">
            Services
          </span>
          <div className="flex flex-wrap gap-1.5 mt-0.5">
            {project.category.map((cat) => (
              <span
                key={cat}
                className="inline-block text-[12px] font-medium text-foreground/80 bg-foreground/5 rounded-md px-2 py-0.5"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div>
          <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/45 mb-1.5">
            Year
          </span>
          <span className="text-[15px] md:text-[16px] font-mono font-medium text-foreground">
            {project.year}
          </span>
        </div>
      </motion.div>

      {/* Full-width Cover Image with Rounded Corners matching carousel cards */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 md:mt-14 relative w-full aspect-[16/9.5] max-h-[720px] rounded-[8px] md:rounded-[10px] overflow-hidden bg-black shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] border border-border"
      >
        <img
          src={project.coverImage}
          alt={`${project.clientName} Presentation Cover`}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
      </motion.div>
    </div>
  )
}
