import React, { useState, useEffect } from "react"
import { PROJECTS } from "@/data/projects"
import ContactSection from "@/components/ContactSection"
import GravityDropFooter from "@/components/GravityDropFooter"
import Emblem from "@/components/Emblem"
import Navbar from "@/components/Navbar"
import { motion } from "framer-motion"

interface WorkGridPageProps {
  onNavigate: (path: string) => void
}

const CATEGORIES = [
  "All",
  "Pitch Deck",
  "Brand Strategy",
  "Investor Presentation",
  "Product Design",
]

export default function WorkGridPage({ onNavigate }: WorkGridPageProps) {
  const [selectedCat, setSelectedCat] = useState("All")

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const filteredProjects =
    selectedCat === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.includes(selectedCat))

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 1. Shared Navigation Header (Exact same header used on every page) */}
      <Navbar onNavigateHome={() => onNavigate("/")} />

      {/* Header section */}
      <section className="pt-28 md:pt-36 pb-12 max-w-[1360px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between mb-8"
        >
          <button
            onClick={() => onNavigate("/")}
            className="group inline-flex items-center gap-2 font-mono text-[14px] text-foreground/60 hover:text-coral transition-colors cursor-pointer"
          >
            <span className="inline-block transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            <span className="uppercase tracking-wider">Back to Home</span>
          </button>

          <div className="font-mono text-[12px] text-foreground/40">
            <span>( {PROJECTS.length} Case Studies )</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-[11px] text-foreground/40">
              ( Selected Work )
            </span>
            <span className="h-px w-6 bg-gradient-to-r from-coral to-red" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-red font-semibold">
              Portfolio
            </span>
          </div>

          <h1
            className="font-sans text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold tracking-tight text-foreground leading-[1.02]"
            style={{ fontFamily: 'var(--font-sans), "Geist", sans-serif' }}
          >
            All Case Studies
          </h1>

          <p className="mt-4 text-[17px] sm:text-[19px] text-muted-foreground font-light max-w-2xl leading-relaxed">
            Decks, brand systems, and strategic narratives engineered for
            high-growth tech ventures and visionary founders.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-2.5 pb-2 border-b border-border"
        >
          {CATEGORIES.map((cat) => {
            const active = selectedCat === cat
            return (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`rounded-full px-4 py-1.5 text-[13px] font-bricolage font-medium transition-all duration-200 cursor-pointer ${
                  active
                    ? "bg-foreground text-background shadow-sm"
                    : "bg-foreground/5 text-foreground/70 hover:bg-foreground/10 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            )
          })}
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 max-w-[1360px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => onNavigate(`/work/${p.slug}`)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Card visual matching carousel aesthetics */}
              <div className="relative aspect-[16/9.5] rounded-[6px] sm:rounded-[7px] md:rounded-[8px] lg:rounded-[22px] overflow-hidden bg-black shadow-lg border border-border">
                <img
                  src={p.coverImage}
                  alt={p.clientName}
                  width="1920"
                  height="1080"
                  className="w-full h-full object-cover rounded-[6px] sm:rounded-[7px] md:rounded-[8px] lg:rounded-[22px] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  loading="eager"
                  decoding="async"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300" />

                {/* View Case Study Pill on Hover */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-coral text-white text-[13px] font-bricolage font-semibold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg pointer-events-none">
                  <span>View case study</span>
                  <span>→</span>
                </div>
              </div>

              {/* Title & tags */}
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="text-[20px] md:text-[22px] font-bold text-foreground group-hover:text-coral transition-colors tracking-tight">
                  {p.clientName}
                </h3>
                <span className="text-[14px] text-muted-foreground group-hover:translate-x-1.5 transition-transform duration-300">
                  →
                </span>
              </div>

              <p className="mt-1.5 text-[14.5px] text-muted-foreground line-clamp-2 leading-relaxed">
                {p.shortIntro}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.category.map((cat) => (
                  <span
                    key={cat}
                    className="text-[11px] font-medium text-foreground/60 bg-foreground/5 rounded px-2 py-0.5"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Existing CTA and Footer */}
      <ContactSection />
      <GravityDropFooter />
    </div>
  )
}
