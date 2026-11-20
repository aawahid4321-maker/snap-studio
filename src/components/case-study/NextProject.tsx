import React from "react"
import { Project } from "@/types/project"
import { motion } from "framer-motion"

interface NextProjectProps {
  nextProject: Project
  onSelect: (slug: string) => void
}

export default function NextProject({
  nextProject,
  onSelect,
}: NextProjectProps) {
  return (
    <div className="my-16 md:my-24 max-w-[1360px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
      <div className="border-t border-border pt-12 md:pt-16">
        <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-foreground/45 block mb-4">
          Up Next
        </span>

        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          onClick={() => onSelect(nextProject.slug)}
          className="group relative cursor-pointer block rounded-[6px] sm:rounded-[7px] md:rounded-[8px] lg:rounded-[10px] overflow-hidden bg-black text-white shadow-xl aspect-[16/8] sm:aspect-[16/7] md:aspect-[21/9]"
        >
          {/* Background Cover Image with Hover Zoom */}
          <img
            src={nextProject.coverImage}
            alt={nextProject.clientName}
            className="absolute inset-0 w-full h-full object-cover rounded-[6px] sm:rounded-[7px] md:rounded-[8px] lg:rounded-[10px] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 opacity-65 group-hover:opacity-80"
          />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

          {/* Content Layer */}
          <div className="relative z-10 h-full p-6 sm:p-10 md:p-14 flex flex-col justify-between max-w-2xl">
            <div className="flex items-center gap-2 font-mono text-[11px] sm:text-[12px] text-white/60 uppercase tracking-widest">
              <span>{nextProject.industry}</span>
              <span>·</span>
              <span>{nextProject.year}</span>
            </div>

            <div>
              <h4 className="text-[26px] sm:text-[36px] md:text-[46px] font-bold text-white tracking-tight leading-[1.05] group-hover:text-coral transition-colors duration-300">
                {nextProject.clientName}
              </h4>
              <p className="mt-2 text-[14px] sm:text-[15px] md:text-[16px] text-white/70 line-clamp-2 max-w-xl">
                {nextProject.shortIntro}
              </p>
            </div>

            <div className="flex items-center gap-2 text-[14px] sm:text-[15px] font-semibold text-white tracking-wide font-bricolage">
              <span>Explore Case Study</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5 text-coral">
                →
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
