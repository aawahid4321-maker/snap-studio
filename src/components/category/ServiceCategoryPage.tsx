import React, { useEffect } from "react"
import Navbar from "@/components/Navbar"
import ContactSection from "@/components/ContactSection"
import GravityDropFooter from "@/components/GravityDropFooter"
import {
  getServiceCategoryBySlug,
  getProjectsForService,
  SERVICES_CATEGORIES,
} from "@/data/projects"
import { motion } from "framer-motion"

interface ServiceCategoryPageProps {
  serviceSlug: string
  onSelectProject: (slug: string) => void
  onBack: () => void
}

export default function ServiceCategoryPage({
  serviceSlug,
  onSelectProject,
  onBack,
}: ServiceCategoryPageProps) {
  const service =
    getServiceCategoryBySlug(serviceSlug) || SERVICES_CATEGORIES[0]
  const projects = getProjectsForService(service.slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [serviceSlug])

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FFFFFF] select-none">
      {/* 1. Shared Navigation Bar */}
      <Navbar
        onNavigateHome={() => {
          window.location.hash = "#top"
        }}
        isLight={false}
      />

      {/* 2. Category Header Section */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 max-w-[1500px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
        {/* Top Back Row & Counter */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between mb-8 pb-4 border-b border-white/10"
        >
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2.5 font-mono text-[13px] md:text-[14px] text-white/60 hover:text-[#F27256] transition-colors cursor-pointer"
          >
            <span className="inline-block transition-transform duration-200 group-hover:-translate-x-1 font-bold">
              ←
            </span>
            <span className="uppercase tracking-[0.14em]">
              Back to Services
            </span>
          </button>

          <div className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.15em] text-white/45">
            <span>
              ( {projects.length}{" "}
              {projects.length === 1 ? "Case Study" : "Case Studies"} )
            </span>
          </div>
        </motion.div>

        {/* Eyebrow / Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-[#CF232B] font-medium">
              ({service.num})
            </span>
            <span className="inline-block w-[36px] h-[1.5px] bg-[#CF232B] shrink-0" />
            <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-[#CF232B] font-medium">
              SERVICES / {service.tags}
            </span>
          </div>

          {/* Service Name Heading */}
          <h1
            className="text-[clamp(32px,5.5vw,68px)] font-medium leading-[1.05] tracking-[-0.03em] text-[#FFFFFF] font-sans"
            style={{ fontFamily: '"Geist", var(--font-sans), sans-serif' }}
          >
            {service.title}
            <span className="text-[#CF232B] inline-block ml-1">.</span>
          </h1>

          {/* Service Description */}
          <p className="mt-3.5 text-[15px] sm:text-[17px] md:text-[18px] text-white/65 max-w-2xl font-normal leading-relaxed">
            {service.desc}
          </p>
        </motion.div>
      </section>

      {/* 3. Category Projects Grid */}
      <section className="pb-24 md:pb-32 max-w-[1500px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
        {projects.length === 0 ? (
          <div className="py-20 text-center text-white/50 font-mono text-[14px]">
            No projects currently listed for this category.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => onSelectProject(proj.id)}
                className="group cursor-pointer flex flex-col"
              >
                {/* Visual Card - EXACTLY matches the "Latest projects" carousel cards */}
                <div className="relative aspect-[16/9] w-full rounded-[6px] sm:rounded-[7px] md:rounded-[8px] lg:rounded-[10px] overflow-hidden bg-black shadow-[0_20px_50px_-10px_rgba(0,0,0,0.38)] border border-white/10 group-hover:border-white/25 transition-all duration-300">
                  {/* Background Image - Vibrant, Not Faded */}
                  <img
                    src={proj.coverImage}
                    alt={proj.clientName}
                    width="1920"
                    height="1080"
                    className="absolute inset-0 w-full h-full object-cover rounded-[6px] sm:rounded-[7px] md:rounded-[8px] lg:rounded-[10px] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 pointer-events-none select-none"
                    loading="eager"
                    decoding="async"
                  />

                  {/* Clean Subtle Overlay (Not dark, crisp visuals) matching Latest projects */}
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors duration-300" />

                  {/* View Case Study Pill on Hover */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-gradient-to-r from-[#F27256] to-[#CF232B] text-white text-[13px] font-bricolage font-semibold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg pointer-events-none">
                    <span>View case study</span>
                    <span>→</span>
                  </div>
                </div>

                {/* Title & Short Tag/Label Below Card */}
                <div className="mt-4 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <h2
                      className="text-[20px] md:text-[23px] font-medium text-white tracking-tight group-hover:text-[#F27256] transition-colors font-sans"
                      style={{
                        fontFamily: '"Geist", var(--font-sans), sans-serif',
                      }}
                    >
                      {proj.clientName}
                    </h2>
                    <span className="text-[17px] text-white/40 group-hover:text-[#F27256] group-hover:translate-x-1.5 transition-all duration-300">
                      →
                    </span>
                  </div>
                  <p className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.12em] text-white/50">
                    {proj.shortLabel || proj.category.join(" · ")}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Contact & Gravity Drop Footer */}
      <div id="contact" className="border-t border-white/10 bg-black">
        <ContactSection />
        <GravityDropFooter />
      </div>
    </div>
  )
}
