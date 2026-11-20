import React, { useState, useEffect } from "react"
import { Project } from "@/types/project"
import ContactSection from "@/components/ContactSection"
import GravityDropFooter from "@/components/GravityDropFooter"
import { motion, AnimatePresence } from "framer-motion"
import topRef4 from "@/imports/top-ref-4.jpg" // Hulahoop
import topRef3 from "@/imports/top-ref-3.jpg" // Columbia / Adidas
import middleRef4 from "@/imports/middle-ref-4.png" // Driveberry UI
import bottomCard2 from "@/imports/bottom-card-2.jpg" // Voiture
import Navbar from "@/components/Navbar"
import SocialMediaCaseStudySection from "./SocialMediaCaseStudySection"
import { getSocialMediaCaseStudyConfig } from "@/data/socialMediaCaseStudies"
import {
  aivonImages,
  basewayImages,
  finoraImages,
  kiyocareImages,
  noritsuImages,
  wildflowerImages,
} from "@/assets/social-media"

import PitchDeckCaseStudySection from "./PitchDeckCaseStudySection"
import { getAiAutomationCaseStudyConfig } from "@/data/aiAutomationCaseStudies"

interface CaseStudyPageProps {
  project: Project
  onNavigate: (path: string) => void
  onBack: () => void
}

export default function CaseStudyPage({
  project,
  onNavigate,
  onBack,
}: CaseStudyPageProps) {
  const aiAutomationConfig = getAiAutomationCaseStudyConfig(
    project.id || project.slug || "",
  )
  if (aiAutomationConfig) {
    return (
      <div className="min-h-screen bg-[#0A0A0B] text-white selection:bg-coral/30 selection:text-white font-sans antialiased overflow-x-hidden">
        <Navbar onNavigateHome={onBack} />
        <PitchDeckCaseStudySection
          config={aiAutomationConfig}
          project={project}
          onNavigate={onNavigate}
        />
      </div>
    )
  }

  const isMindspace =
    project.id === "mindspace" ||
    project.slug === "mindspace" ||
    project.id?.includes("mindspace") ||
    project.slug?.includes("mindspace")
  const isLiveArena =
    project.id === "livearena" ||
    project.slug === "livearena" ||
    project.id?.includes("livearena") ||
    project.slug?.includes("livearena")
  const isDriveberry =
    project.id === "driveberry" || project.slug === "driveberry"
  const isEuphorixz =
    project.id === "euphorixz" ||
    project.slug === "euphorixz" ||
    project.id === "boltshift" ||
    project.slug === "boltshift"
  const isBluemore =
    project.id === "bluemore" ||
    project.slug === "bluemore" ||
    project.id === "spherule" ||
    project.slug === "spherule"
  const isLgmAviation =
    project.id === "lgm-aviation" ||
    project.slug === "lgm-aviation" ||
    project.id === "lgm" ||
    project.slug === "lgm" ||
    project.id === "lgmaviation" ||
    project.slug === "lgmaviation"
  const isRolandDonald =
    project.id === "roland-donald" ||
    project.slug === "roland-donald" ||
    project.id === "rolandodonald04" ||
    project.slug === "rolandodonald04" ||
    project.id === "rolandodonald04_complete" ||
    project.slug === "rolandodonald04_complete" ||
    project.id === "roland" ||
    project.slug === "roland"
  const isNodaliq =
    project.id === "nodaliq" ||
    project.slug === "nodaliq" ||
    project.id === "nodal" ||
    project.slug === "nodal"
  const isAura =
    project.id === "aura" ||
    project.slug === "aura" ||
    project.id === "aura-brand" ||
    project.slug === "aura-brand" ||
    project.id === "aurabrand" ||
    project.slug === "aurabrand" ||
    project.id === "aura-design" ||
    project.slug === "aura-design" ||
    project.id === "aura-brand-guidelines" ||
    project.slug === "aura-brand-guidelines"
  const isAtma =
    project.id === "atma" ||
    project.slug === "atma" ||
    project.id === "atma-brand" ||
    project.slug === "atma-brand" ||
    project.id === "atmabrand" ||
    project.slug === "atmabrand" ||
    project.id === "atma-furniture" ||
    project.slug === "atma-furniture" ||
    project.id === "atma-brand-guidelines" ||
    project.slug === "atma-brand-guidelines"
  const isPypo =
    project.id === "pypo" ||
    project.slug === "pypo" ||
    project.id === "pypo-brand" ||
    project.slug === "pypo-brand" ||
    project.id === "pypobrand" ||
    project.slug === "pypobrand"
  const isFlex =
    project.id === "flex" ||
    project.slug === "flex" ||
    project.id === "flex-aviation" ||
    project.slug === "flex-aviation" ||
    project.id === "flex-sport" ||
    project.slug === "flex-sport" ||
    project.id === "flexaviation" ||
    project.slug === "flexaviation"
  const isAxorix = project.id === "axorix" || project.slug === "axorix"
  const isNexa =
    project.id === "nexa" ||
    project.slug === "nexa" ||
    project.id === "nexa-trading" ||
    project.slug === "nexa-trading" ||
    project.id?.includes("nexa") ||
    project.slug?.includes("nexa")
  const isAivon = project.id === "aivon" || project.slug === "aivon"
  const isBaseway = project.id === "baseway" || project.slug === "baseway"
  const isFinora = project.id === "finora" || project.slug === "finora"
  const isKiyocare = project.id === "kiyocare" || project.slug === "kiyocare"
  const isNoritsuAi =
    project.id === "noritsu-ai" ||
    project.slug === "noritsu-ai" ||
    project.id === "noritsuai" ||
    project.slug === "noritsuai"
  const isWildflower =
    project.id === "wildflower-atelier" ||
    project.slug === "wildflower-atelier" ||
    project.id === "wildflower" ||
    project.slug === "wildflower"

  const isSocialMediaProject =
    isAivon || isBaseway || isFinora || isKiyocare || isNoritsuAi || isWildflower

  const socialMediaImages = isAivon
    ? aivonImages.all.slice(1)
    : isBaseway
      ? basewayImages.all.slice(1)
      : isFinora
        ? finoraImages.all.slice(1)
        : isKiyocare
          ? kiyocareImages.all.slice(1)
          : isNoritsuAi
            ? noritsuImages.all.slice(1)
            : isWildflower
              ? wildflowerImages.all.slice(1)
              : []

  // Animated interactive slide switcher for "The Result" section
  const [animatedSlideIndex, setAnimatedSlideIndex] = useState(0)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const knkoSlides = [
    { src: "/work/knko/Slide1.PNG", label: "01. Executive Cover" },
    { src: "/work/knko/Slide2.PNG", label: "02. 15 Years of Built Work" },
    { src: "/work/knko/Slide3.PNG", label: "03. Strategy 2026-2030" },
    { src: "/work/knko/Slide4.PNG", label: "04. Commercial Tiers" },
    { src: "/work/knko/Slide5.PNG", label: "05. Market & Developers" },
    { src: "/work/knko/Slide6.PNG", label: "06. Financial Projections" },
    { src: "/work/knko/Slide7.PNG", label: "07. Implementation Roadmap" },
    { src: "/work/knko/Slide8.PNG", label: "08. Strategic Recommendations" },
  ]

  const driveberrySlides = [
    {
      src: "/work/driveberry/Slide1.PNG",
      label: "01. Executive Cover: Understand The Fault",
    },
    {
      src: "/work/driveberry/Slide2.PNG",
      label: "02. The Problem: Buying A Car Is The Easy Part",
    },
    {
      src: "/work/driveberry/Slide3.PNG",
      label: "03. What Drivers Are Up Against",
    },
    {
      src: "/work/driveberry/Slide4.PNG",
      label: "04. 75% Of Breakdowns Are Avoidable",
    },
    {
      src: "/work/driveberry/Slide6.PNG",
      label: "05. Our Mission: Transparency Sits At The Centre",
    },
    {
      src: "/work/driveberry/Slide7.PNG",
      label: "06. Four Ways We Support Drivers & Fleets",
    },
    {
      src: "/work/driveberry/Slide8.PNG",
      label: "07. Flash Diagnostic: Describe It, We Decode It",
    },
    {
      src: "/work/driveberry/Slide10.PNG",
      label: "08. Pro Diagnostic With BerryScan Sensor",
    },
    {
      src: "/work/driveberry/Slide13.PNG",
      label: "09. Technical Inspection In A Few Clicks",
    },
    {
      src: "/work/driveberry/Slide17.PNG",
      label: "10. Mobile App: Everything In One Place",
    },
    {
      src: "/work/driveberry/Slide19.PNG",
      label: "11. Transparency Is The Product",
    },
    {
      src: "/work/driveberry/Slide22.PNG",
      label: "12. Executive Leadership & Automotive Veterans",
    },
    {
      src: "/work/driveberry/Slide23.PNG",
      label: "13. Educational Driver Community",
    },
    {
      src: "/work/driveberry/Slide24.PNG",
      label: "14. Garage Network: Qualified Demand",
    },
    {
      src: "/work/driveberry/Slide25.PNG",
      label: "15. Free Online Diagnosis Call To Action",
    },
  ]

  const euphorixzSlides = [
    {
      src: "/work/euphorixz/Slide1.PNG",
      label: "01. Executive Cover: Smart Science-Backed Supplements",
    },
    {
      src: "/work/euphorixz/Slide2.PNG",
      label: "02. About: Living Your Best Life & Two Core Products",
    },
    {
      src: "/work/euphorixz/Slide3.PNG",
      label: "03. Glucose Anti-Spike: Role In The Body & Insulin Resistance",
    },
    {
      src: "/work/euphorixz/Slide4.PNG",
      label: "04. Product Benefits: Take Control Of Your Glucose",
    },
    {
      src: "/work/euphorixz/Slide5.PNG",
      label: "05. Key Ingredients: Berberine, Mulberry Leaf & Cinnamon",
    },
    {
      src: "/work/euphorixz/Slide6.PNG",
      label: "06. Who Should Use Anti-Spike & Customer Reviews",
    },
    {
      src: "/work/euphorixz/Slide7.PNG",
      label: "07. The Party Recovery Set: Reset, Recharge, Realign",
    },
    {
      src: "/work/euphorixz/Slide8.PNG",
      label: "08. Four Targeted Blends In One Recovery",
    },
    {
      src: "/work/euphorixz/Slide9.PNG",
      label: "09. Target Market: Wake Up Without The Crash",
    },
    {
      src: "/work/euphorixz/Slide10.PNG",
      label: "10. Community & Direct-to-Consumer Ecosystem",
    },
  ]

  const bluemoreSlides = [
    {
      src: "/work/bluemore/Slide1.PNG",
      label: "01. Executive Cover: The Art of Luxury Yacht Charter",
    },
    {
      src: "/work/bluemore/Slide2.PNG",
      label: "02. Brand Manifesto: Escape The Noise Of The World",
    },
    {
      src: "/work/bluemore/Slide3.PNG",
      label: "03. Proven Heritage: Fourteen Years Of The East Mediterranean",
    },
    {
      src: "/work/bluemore/Slide4.PNG",
      label:
        "04. Technical Portfolio: We Do Not List Every Yacht. Only The Finest",
    },
    {
      src: "/work/bluemore/Slide5.PNG",
      label:
        "05. Vessel Typology: Two Ways To Meet The Sea (Gulet & Motor Yacht)",
    },
    {
      src: "/work/bluemore/Slide6.PNG",
      label:
        "06. Geographical Reach: Three Coastlines, One Standard (242 Yachts)",
    },
    {
      src: "/work/bluemore/Slide7.PNG",
      label: "07. Route Architecture: Your Journey, Your Map",
    },
    {
      src: "/work/bluemore/Slide8.PNG",
      label: "08. Service Logistics: Everything, Handled",
    },
    {
      src: "/work/bluemore/Slide9.PNG",
      label: "09. Quality Standards: What We Guarantee",
    },
    {
      src: "/work/bluemore/Slide10.PNG",
      label: "10. Client Testimonials: Judged By The People Who Sailed",
    },
    {
      src: "/work/bluemore/Slide11.PNG",
      label: "11. Call To Action: Your Private Horizon Awaits",
    },
  ]

  const liveArenaSlides = [
    {
      src: "/work/livearena/thumbnail.png",
      label: "01. Platform Cover: LiveArena Sports — Real-Time Match Hub",
    },
    {
      src: "/work/livearena/01-splash-onboarding.png",
      label: "02. Stadium Onboarding: Never Miss A Moment",
    },
    {
      src: "/work/livearena/02-auth-page-1.png",
      label: "03. Streamlined Sports Pass & Multi-Channel Authentication",
    },
    {
      src: "/work/livearena/03-auth-page-2.png",
      label: "04. Biometric Passkey & Two-Factor Verification",
    },
    {
      src: "/work/livearena/04-home-live-match-streaming.png",
      label: "05. Live Match Streaming: 60 FPS Sub-Second WebRTC Engine",
    },
    {
      src: "/work/livearena/05-schedule-match-details.png",
      label: "06. Comprehensive Match Center: Fixtures, Scorers & Head-to-Head",
    },
    {
      src: "/work/livearena/06-subscription-payment-flows.png",
      label: "07. Frictionless Sports Pass Checkout & Order Confirmation",
    },
    {
      src: "/work/livearena/07-profile-settings-user-info.png",
      label: "08. Fan Profile Hub: Favorite Clubs & Notification Preferences",
    },
    {
      src: "/work/livearena/08-settings-notifications.png",
      label: "09. Real-Time Match Alert Toggles & Language Localization",
    },
  ]

  const mindspaceSlides = [
    {
      src: "/work/mindspace/thumbnail.png",
      label: "01. Platform Cover: Mindspace — AI Emotional Wellbeing Sanctuary",
    },
    {
      src: "/work/mindspace/01-onboarding.gif",
      label: "02. Emotional Onboarding: Welcome to Your Safe Space",
    },
    {
      src: "/work/mindspace/02-account-setup.gif",
      label: "03. Personalized Wellbeing Intake & Goal Configuration",
    },
    {
      src: "/work/mindspace/03-personalization-loading.png",
      label: "04. Real-Time Cognitive Personalization Engine",
    },
    {
      src: "/work/mindspace/04-homepage-mood-checkin.png",
      label: "05. Daily Mood Logging & Calendar Valence Dial",
    },
    {
      src: "/work/mindspace/05-ai-therapy-chat.png",
      label: "06. Empathetic AI Companion: Adaptive Emotional Tone States",
    },
    {
      src: "/work/mindspace/06-daily-summary-emotions.png",
      label: "07. Psychological Analytics & Daily Sentiment Summary",
    },
    {
      src: "/work/mindspace/07-breathwork-journal.gif",
      label: "08. Guided Breathwork Protocols (4-7-8) & Voice Journaling",
    },
    {
      src: "/work/mindspace/08-wellbeing-profile-goals.png",
      label: "09. Holistic Wellbeing Profile: Milestones & Personality Insights",
    },
  ]

  const nexaSlides = [
    {
      src: "/work/nexa/thumbnail.png",
      label: "01. Platform Cover: Nexa Trading — Next-Gen Digital Asset Terminal",
    },
    {
      src: "/work/nexa/01-onboarding.gif",
      label: "02. Fluid Onboarding: Instant Access to Global Crypto Liquidity",
    },
    {
      src: "/work/nexa/02-register-verification.gif",
      label: "03. Biometric Security & Streamlined Identity Verification",
    },
    {
      src: "/work/nexa/03-home-coin-detail-buy.png",
      label: "04. Real-Time Market Depth & Live Interactive Candlestick Charts",
    },
    {
      src: "/work/nexa/04-coin-transactions.png",
      label: "05. Frictionless Buy & Sell Execution with Transparent Slippage",
    },
    {
      src: "/work/nexa/05-trade-execution.png",
      label: "06. Precision Order Execution & Real-Time Trade Confirmations",
    },
    {
      src: "/work/nexa/06-wallet-deposit.png",
      label: "07. Multi-Asset Digital Vault & Instant Deposit Review",
    },
    {
      src: "/work/nexa/07-profile-settings.gif",
      label: "08. Trader Profile Hub: Bank Integrations & Push Notifications",
    },
  ]

  const nodaliqSlides = [
    {
      src: "/work/nodaliq/nodaliq-14.webp",
      label: "01. Keynote Presentation: Global Enterprise Presentation Stage",
    },
    {
      src: "/work/nodaliq/nodaliq-01.webp",
      label: "02. Brand Identity: Executive Guidelines & Specifications",
    },
    {
      src: "/work/nodaliq/nodaliq-02.webp",
      label: "03. The Overview: Reimagine The Modern Network Lab With AI",
    },
    {
      src: "/work/nodaliq/nodaliq-03.webp",
      label: "04. Precision Construction: 8x8 Geometric Node Mark",
    },
    {
      src: "/work/nodaliq/nodaliq-04.webp",
      label: "05. Identity Construction: Logo Node Mark & Precision Grid",
    },
    {
      src: "/work/nodaliq/nodaliq-05.webp",
      label: "06. Colour Options: Six High-Contrast Emblem Variations",
    },
    {
      src: "/work/nodaliq/nodaliq-06.webp",
      label: "07. Usage Contexts: Grid Construction & Web Interface",
    },
    {
      src: "/work/nodaliq/nodaliq-07.webp",
      label: "08. Brand Palette: 01-04 Hexadecimal Token Architecture",
    },
    {
      src: "/work/nodaliq/nodaliq-08.webp",
      label: "09. Typographic System: Mont Sans-Serif Typeface",
    },
    {
      src: "/work/nodaliq/nodaliq-10.webp",
      label: "10. Stationery Mockup: Architectural Concrete Business Cards",
    },
    {
      src: "/work/nodaliq/nodaliq-11.webp",
      label: "11. Collateral Suite: Executive Envelopes & Letterhead",
    },
    {
      src: "/work/nodaliq/nodaliq-12.webp",
      label: "12. Environmental Mockup: Architectural Facade Signage",
    },
    {
      src: "/work/nodaliq/nodaliq-15.webp",
      label: "13. Product Mockup: Laptop Workstation & AI Lab Interface",
    },
    {
      src: "/work/nodaliq/nodaliq-hero.webp",
      label: "14. Brand Vision: Robotic AI Telemetry & Hardware Integration",
    },
  ]

  const axorixSlides = [
    {
      src: "/work/axorix/imageye___-_imgi_15_f95a7.webp",
      label: "01. Brand Apparel: High-Fashion Apparel & Identity Symbol",
    },
    {
      src: "/work/axorix/axorix-01.webp",
      label:
        "02. Identity System: Core Guidelines, Typography & Token Specifications",
    },
    {
      src: "/work/axorix/axorix-03.webp",
      label: "03. Primary Mark: Axorix Wordmark & Metallic Token Emblem",
    },
    {
      src: "/work/axorix/axorix-02.webp",
      label: "04. Geometric Matrix: Constellation Node & Precision Micro-Grid",
    },
    {
      src: "/work/axorix/axorix-04.webp",
      label: "05. Protocol Framework: Trading, Liquidity, Staking & Wallets",
    },
    {
      src: "/work/axorix/axorix-06.webp",
      label:
        "06. Digital Product Mockup: Tablet Interface & Ecosystem Overview",
    },
    {
      src: "/work/axorix/axorix-07.webp",
      label: "07. Omnichannel Collateral: Mobile & Social Campaign Cards",
    },
    {
      src: "/work/axorix/axorix-08.webp",
      label: "08. Display Architecture: High-Contrast Acid Yellow UI Showcase",
    },
    {
      src: "/work/axorix/axorix-05.webp",
      label:
        "09. Environmental Apparel: Premium Merchandising & Physical Touchpoints",
    },
  ]

  const rolandDonaldSlides = [
    {
      src: "/work/roland-donald/Slide1.PNG",
      label: "01. Executive Cover: Roland Donald Advisory",
    },
    {
      src: "/work/roland-donald/Slide2.PNG",
      label: "02. Executive Overview: Transaction Credentials & Pillars",
    },
    {
      src: "/work/roland-donald/Slide3.PNG",
      label: "03. Advisory Methodology & Corporate Governance",
    },
    {
      src: "/work/roland-donald/Slide4.PNG",
      label: "04. Sector Specialization & Enterprise Valuation",
    },
    {
      src: "/work/roland-donald/Slide5.PNG",
      label: "05. Institutional Due Diligence & M&A Strategy",
    },
    {
      src: "/work/roland-donald/Slide6.PNG",
      label: "06. Global Capital Markets Architecture",
    },
    {
      src: "/work/roland-donald/Slide7.PNG",
      label: "07. Senior Debt Restructuring Framework",
    },
    {
      src: "/work/roland-donald/Slide8.PNG",
      label: "08. Private Equity Syndicate Allocation Models",
    },
    {
      src: "/work/roland-donald/Slide9.PNG",
      label: "09. Financial Engineering & Growth Roadmaps",
    },
    {
      src: "/work/roland-donald/Slide10.PNG",
      label: "10. Cross-Border M&A Valuation Matrices",
    },
    {
      src: "/work/roland-donald/Slide11.PNG",
      label: "11. Transaction Execution & Timeline Velocity",
    },
    {
      src: "/work/roland-donald/Slide12.PNG",
      label: "12. Capital Restructuring Architecture",
    },
    {
      src: "/work/roland-donald/Slide13.PNG",
      label: "13. Global Partner Presence & Deal Tombstones",
    },
    {
      src: "/work/roland-donald/Slide14.PNG",
      label: "14. Advisory Mandates & Executive Engagements",
    },
  ]

  const lgmAviationSlides = [
    {
      src: "/work/lgm-aviation/Slide1.PNG",
      label: "01. Worldwide Support, Tailored to Your Mission",
    },
    {
      src: "/work/lgm-aviation/Slide2.PNG",
      label: "02. Critical AOG Response & Aftermarket Realities",
    },
    {
      src: "/work/lgm-aviation/Slide3.PNG",
      label: "03. Independent by Design, Operating Since 2017",
    },
    {
      src: "/work/lgm-aviation/Slide4.PNG",
      label: "04. Three Divisions, Three Continents, One Standard",
    },
    {
      src: "/work/lgm-aviation/Slide5.PNG",
      label: "05. Part Sales: Smart Sourcing & Transatlantic Logistics",
    },
    {
      src: "/work/lgm-aviation/Slide6.PNG",
      label: "06. Repair Management: Test, Repair and Overhaul",
    },
    {
      src: "/work/lgm-aviation/Slide7.PNG",
      label: "07. Materials & Logistics: Turnkey Program Support",
    },
    {
      src: "/work/lgm-aviation/Slide8.PNG",
      label: "08. LGM Aviation Capital: Turning Assets into Revenue",
    },
    {
      src: "/work/lgm-aviation/Slide9.PNG",
      label: "09. Executive Leadership: The People Who Pick Up the Phone",
    },
    {
      src: "/work/lgm-aviation/Slide10.PNG",
      label: "10. Keeping Global Brands in the Sky: Verified Endorsements",
    },
  ]

  const aivonSlides = [
    { src: aivonImages.thumbnail, label: "01. Master Visual Monograph — Serene Mindful Living" },
    { src: aivonImages.slide2, label: "02. Morning Ritual & Natural Sunlight Composition" },
    { src: aivonImages.slide3, label: "03. Organic Formulation & Tactile Texture Details" },
    { src: aivonImages.slide4, label: "04. Modern Ritual Typography & Curated Campaign Grid" },
  ]

  const basewaySlides = [
    { src: basewayImages.thumbnail, label: "01. Botanical Hydration — Master Campaign Hero" },
    { src: basewayImages.slide2, label: "02. Cold-Pressed Botanicals & Dynamic Color Framing" },
    { src: basewayImages.slide3, label: "03. Typographic Hierarchy & Bottle Geometry" },
    { src: basewayImages.slide4, label: "04. Outdoor Lifestyle & Direct-to-Consumer Visuals" },
  ]

  const finoraSlides = [
    { src: finoraImages.thumbnail, label: "01. Haute Horlogerie & High Jewelry Monograph" },
    { src: finoraImages.story1, label: "02. Gemstone Facet Purity & Micro Refraction" },
    { src: finoraImages.slide2, label: "03. Hand-Set Diamond Pavé & Macro Craftsmanship" },
    { src: finoraImages.slide3, label: "04. 18k Gold Alloy Architecture & Setting Geometry" },
    { src: finoraImages.slide4, label: "05. In-House Mechanical Movement & Escapement Wheel" },
    { src: finoraImages.slide5, label: "06. Platinum Fine Jewelry Collector Series" },
    { src: finoraImages.slide6, label: "07. Architectural Bezel Symmetry & Crown Detail" },
    { src: finoraImages.slide7, label: "08. High Jewelry Editorial Composition" },
    { src: finoraImages.slide8, label: "09. Collector Experience & Salon Suite Heritage" },
    { src: finoraImages.slide9, label: "10. Private Atelier Consultation Call-to-Action" },
  ]

  const kiyocareSlides = [
    { src: kiyocareImages.thumbnail, label: "01. Clean Skincare & Clinical Barrier Defense Hero" },
    { src: kiyocareImages.slide2, label: "02. Active Ingredient Transparency & Deep Hydration" },
    { src: kiyocareImages.slide3, label: "03. Morning Skin Barrier Routine & Serum Application" },
    { src: kiyocareImages.slide4, label: "04. Clinical Efficacy & Dermatological Formulation" },
  ]

  const noritsuAiSlides = [
    { src: noritsuImages.thumbnail, label: "01. Enterprise AI & Autonomous Agent Architecture" },
    { src: noritsuImages.slide2, label: "02. Multi-Agent Workflow Orchestration & Data Pipes" },
    { src: noritsuImages.slide3, label: "03. Real-Time Telemetry & Sub-Millisecond Latency" },
    { src: noritsuImages.slide4, label: "04. High-Throughput Engine & Enterprise Security" },
  ]

  const wildflowerSlides = [
    { src: wildflowerImages.thumbnail, label: "01. Botanical Couture & Floral Architecture Cover" },
    { src: wildflowerImages.story1, label: "02. Seasonal Blooms — Provence Summer Harvest" },
    { src: wildflowerImages.story2, label: "03. Sculptural Arrangements & Petal Geometry" },
    { src: wildflowerImages.story3, label: "04. Bespoke Fragrance Notes & Botanical Oils" },
    { src: wildflowerImages.story4, label: "05. Masterclass & French Atelier Workshop" },
    { src: wildflowerImages.thumb1, label: "06. Editorial Feed Grid — Organic Harmony" },
    { src: wildflowerImages.thumb2, label: "07. Tactile Linen & Studio Interior Ambience" },
    { src: wildflowerImages.thumb3, label: "08. Artisanal Packaging & Wax-Sealed Botanicals" },
  ]

  const pypoSlides = [
    {
      src: "/work/pypo/Slide1.PNG",
      label: "01. Pypo Brand Guidebook Cover — Friendly, Yours, Simple",
    },
    {
      src: "/work/pypo/Slide2.PNG",
      label: "02. Welcome to Pypo: Designers, Marketers, Partners",
    },
    {
      src: "/work/pypo/Slide4.PNG",
      label: "04. Core Values: Friendly, Simple, Trustworthy, Playful",
    },
    {
      src: "/work/pypo/Slide5.PNG",
      label: "05. Brand Voice & Personality Traits",
    },
    {
      src: "/work/pypo/Slide6.PNG",
      label: "06. Logo Anatomy: Rounded P-Mark & Wordmark",
    },
    {
      src: "/work/pypo/Slide7.PNG",
      label: "07. Logo Variations & SEGA Co-Branding Lockup",
    },
    {
      src: "/work/pypo/Slide8.PNG",
      label: "08. Web Browser Bar UI & Interface Placement",
    },
    {
      src: "/work/pypo/Slide9.PNG",
      label: "09. Clear Space & Minimum Sizing Rules",
    },
    {
      src: "/work/pypo/Slide10.PNG",
      label: "10. Primary Palette: Electric Violet & Emerald Green",
    },
    {
      src: "/work/pypo/Slide11.PNG",
      label: "11. Secondary & Neutral Architecture",
    },
    {
      src: "/work/pypo/Slide12.PNG",
      label: "12. Primary Typography: Outfit Display Typeface",
    },
    {
      src: "/work/pypo/Slide13.PNG",
      label: "13. Secondary Typography: Inter Neutral UI Font",
    },
    {
      src: "/work/pypo/Slide14.PNG",
      label: "14. Typographic Hierarchy & Scale",
    },
    {
      src: "/work/pypo/Slide15.PNG",
      label: "15. Graphic Elements: Capsules, Circles & Dot Grids",
    },
    {
      src: "/work/pypo/Slide16.PNG",
      label: "16. Executive Collateral: Marina One Singapore Business Cards",
    },
    {
      src: "/work/pypo/Slide17.PNG",
      label: "17. Photography Principles: Natural Light & Candid Human Warmth",
    },
    {
      src: "/work/pypo/Slide19.PNG",
      label: "19. Office Collateral: Notebooks, Booklets & Pencils",
    },
    {
      src: "/work/pypo/Slide20.PNG",
      label: "20. Social Media Feed: Instagram Campaign Grid",
    },
    {
      src: "/work/pypo/Slide21.PNG",
      label: "21. Environmental Collateral: Street Billboard & Tote Bag",
    },
    {
      src: "/work/pypo/Slide22.PNG",
      label: "22. Product Packaging: 3D Unboxing Box",
    },
    {
      src: "/work/pypo/Slide23.PNG",
      label: "23. Merchandise: Apparel, T-Shirts & Bags",
    },
    {
      src: "/work/pypo/Slide24.PNG",
      label: "24. Brand Guidelines Do's & Don'ts",
    },
    { src: "/work/pypo/Slide25.PNG", label: "25. Brand Contact & Governance" },
  ]

  const flexSlides = [
    {
      src: "/work/flex/1.png",
      label: "01. Flex Cover — All Motion, No Distractions",
    },
    {
      src: "/work/flex/2.png",
      label: "02. Quick Guide & Brand Table of Contents",
    },
    {
      src: "/work/flex/4.png",
      label: "04. Essential Elements: Brand Toolkit & Character",
    },
    {
      src: "/work/flex/15.png",
      label: "15. Key Messaging: All Motion, No Distractions",
    },
    {
      src: "/work/flex/17.png",
      label: "17. Logo System: Introduction to the Flex Mark",
    },
    {
      src: "/work/flex/22.png",
      label: "22. Logo Color Rules: Signature Sierra & Charcoal",
    },
    {
      src: "/work/flex/26.png",
      label: "26. Color System: Palette Overview & Swatches",
    },
    {
      src: "/work/flex/29.png",
      label: "29. Color in Context: Retail Storefront & Decals",
    },
    {
      src: "/work/flex/30.png",
      label: "30. Campaign Headers: Built to Perform, Designed to Move",
    },
    {
      src: "/work/flex/33.png",
      label: "33. Typography System Overview & Leading",
    },
    {
      src: "/work/flex/44.png",
      label: "44. Grid Layouts: Headlines Placement Rules",
    },
    {
      src: "/work/flex/47.png",
      label: "47. Split-Frame Photography & Editorial Layouts",
    },
    {
      src: "/work/flex/51.png",
      label: "51. Photography with Logo: High-Contrast Athletic Cuts",
    },
    {
      src: "/work/flex/56.png",
      label: "56. Visual Content: Photography Principles",
    },
    {
      src: "/work/flex/61.png",
      label: "61. Usage & Applications: Instagram Feed & Stories",
    },
    {
      src: "/work/flex/66.png",
      label: "66. Retail Packaging: Sierra Pulse Corrugated Boxes",
    },
  ]

  const auraSlides = [
    {
      src: "/work/aura/Slide1.png",
      label: "01. Cover: Aura Brand Guideline v1.0",
    },
    {
      src: "/work/aura/Slide2.png",
      label: "02. Document Index: Core Design Modules",
    },
    {
      src: "/work/aura/Slide3.png",
      label: "03. The Aura Philosophy: Silent Ambassador",
    },
    {
      src: "/work/aura/Slide4.png",
      label: "04. Brand Purpose: Mission, Vision & Horizon",
    },
    {
      src: "/work/aura/Slide5.png",
      label: "05. Core Values: Clarity, Innovation & Radiance",
    },
    {
      src: "/work/aura/Slide6.png",
      label: "06. Logo System: Architecture & Variations",
    },
    {
      src: "/work/aura/Slide7.png",
      label: "07. Primary Mark: Geometric Wordmark & Monogram",
    },
    {
      src: "/work/aura/Slide8.png",
      label: "08. Geometry & Clear Space: Bounding Grid",
    },
    { src: "/work/aura/Slide9.png", label: "09. Logo Misuse: What Not To Do" },
    {
      src: "/work/aura/Slide10.png",
      label: "10. Secondary Marks: App Icons & Monograms",
    },
    {
      src: "/work/aura/Slide11.png",
      label: "11. Typography: Structured Type System",
    },
    {
      src: "/work/aura/Slide12.png",
      label: "12. Primary Typeface: Host Grotesk Bold",
    },
    {
      src: "/work/aura/Slide13.png",
      label: "13. Secondary Typeface: Host Grotesk Regular/Medium",
    },
    {
      src: "/work/aura/Slide14.png",
      label: "14. Color Palette: High Contrast Principles",
    },
    {
      src: "/work/aura/Slide15.png",
      label: "15. Primary Palette: Aura Black & Pure Light",
    },
    {
      src: "/work/aura/Slide16.png",
      label: "16. Accent System: Electric Neon & Sunset Glow",
    },
    {
      src: "/work/aura/Slide17.png",
      label: "17. Accessibility: WCAG 2.1 AA Compliance",
    },
    {
      src: "/work/aura/Slide18.png",
      label: "18. Imagery & Art Direction: Lighting Principles",
    },
    {
      src: "/work/aura/Slide19.png",
      label: "19. Photography Style: Motion Blur & Radiant Streaks",
    },
    {
      src: "/work/aura/Slide20.png",
      label: "20. Interface Guidelines: UI Elements & Layout",
    },
    {
      src: "/work/aura/Slide21.png",
      label: "21. Iconography System: 24×24px 2px Stroke Grid",
    },
    {
      src: "/work/aura/Slide22.png",
      label: "22. Applications & Mockups: Unified Ecosystem",
    },
    {
      src: "/work/aura/Slide23.png",
      label: "23. Digital Product Mockup: Mobile App & Web Platform",
    },
    {
      src: "/work/aura/Slide24.png",
      label: "24. Brand Collateral: Embossed Stationery & Tote",
    },
    {
      src: "/work/aura/Slide25.png",
      label: "25. Closing & Contact: Thank You & Asset Portal",
    },
  ]

  const atmaSlides = [
    {
      src: "/work/atma/Cover.png",
      label: "01. Cover: ATMA Brand Guidelines 2026",
    },
    {
      src: "/work/atma/Table of Content.png",
      label: "02. Table of Contents: Guidelines Index",
    },
    {
      src: "/work/atma/Divider 1.png",
      label: "03. Chapter 01: Introduction & Heritage",
    },
    {
      src: "/work/atma/About Brand.png",
      label: "04. Brand Essence: Crafted Living with Soul",
    },
    {
      src: "/work/atma/Mission.png",
      label: "05. Our Mission: Shaping Modern Living",
    },
    {
      src: "/work/atma/Vision.png",
      label: "06. Our Vision: A Timeless Companion for Home",
    },
    {
      src: "/work/atma/Values.png",
      label: "07. Core Values: Intentional Design & Honest Materials",
    },
    {
      src: "/work/atma/Promise.png",
      label: "08. Brand Promise: Furniture Built to Last",
    },
    {
      src: "/work/atma/Divider 2.png",
      label: "09. Chapter 02: Our Logo & Geometry",
    },
    {
      src: "/work/atma/Brand Logo.png",
      label: "10. Primary Logo: The ATMA Wordmark",
    },
    {
      src: "/work/atma/Logo Variant.png",
      label: "11. Logo Variants: Contrast & Background Lockups",
    },
    {
      src: "/work/atma/Logo Mark.png",
      label: "12. Logo Mark Anatomy: Geometric Proportions & Grid",
    },
    {
      src: "/work/atma/Logo Mark-1.png",
      label: "13. Wordmark Details: Cut Angle Tension & Forms",
    },
    {
      src: "/work/atma/Logo Scale.png",
      label: "14. Minimum Sizing & Scale Geometry",
    },
    {
      src: "/work/atma/Logo Placements.png",
      label: "15. Logo Placements & Clear Space",
    },
    {
      src: "/work/atma/Logo Misuse.png",
      label: "16. Incorrect Logo Usage & Anti-Patterns",
    },
    {
      src: "/work/atma/Divider 3.png",
      label: "17. Chapter 03: Color Usage & Materiality",
    },
    {
      src: "/work/atma/Primary Color.png",
      label: "18. Primary Palette: Obsidian, Walnut & Espresso",
    },
    {
      src: "/work/atma/Primary Color-1.png",
      label: "19. Monochromatic & Tonal Shades Scale",
    },
    {
      src: "/work/atma/Accent Color-1.png",
      label: "20. Supporting Earth & Linen Neutrals",
    },
    {
      src: "/work/atma/Accent Color.png",
      label: "21. Accent Color Palette & Tonal Swatches",
    },
    {
      src: "/work/atma/Color Usage.png",
      label: "22. Color Usage Proportions (25/25/25/12.5)",
    },
    {
      src: "/work/atma/Divider 4.png",
      label: "23. Chapter 04: Typography System",
    },
    {
      src: "/work/atma/Primary Typography.png",
      label: "24. Primary Typography: Satoshi Display Typeface",
    },
    {
      src: "/work/atma/Secondary Typography.png",
      label: "25. Secondary Typography: Inter Neutral UI Font",
    },
    {
      src: "/work/atma/Font Choices.png",
      label: "26. Typographic Hierarchy & Leading Rules",
    },
    {
      src: "/work/atma/Divider 5.png",
      label: "27. Chapter 05: Graphic System & Grids",
    },
    {
      src: "/work/atma/Icon.png",
      label: "28. Grid System & Spatial Layout Dimensions",
    },
    {
      src: "/work/atma/Imagery.png",
      label: "29. Art Direction: Natural Wood & Warm Light",
    },
    {
      src: "/work/atma/Divider 6.png",
      label: "30. Chapter 06: Tone of Voice & Narrative",
    },
    {
      src: "/work/atma/Icon-1.png",
      label: "31. Layout Architecture & Material Texture Principles",
    },
    {
      src: "/work/atma/Divider 7.png",
      label: "32. Chapter 07: Brand Applications & Retail",
    },
    {
      src: "/work/atma/Social Media.png",
      label: "33. Social Media Feed: Curated Campaign Grid",
    },
    {
      src: "/work/atma/Logo Application.png",
      label: "34. Mobile App UI & Web URL Navigation Mockup",
    },
    {
      src: "/work/atma/Billboards.png",
      label: "35. Architectural Street Billboard on Cast Concrete",
    },
    {
      src: "/work/atma/Business Card.png",
      label: "36. Executive Stationery & Luxury Business Cards",
    },
    {
      src: "/work/atma/Signboard.png",
      label: "37. Storefront Architecture: Fluted Slat Signboard",
    },
    {
      src: "/work/atma/Poster.png",
      label: "38. Luxury Editorial Catalog on Console Table",
    },
    {
      src: "/work/atma/Website.png",
      label: "39. Digital Flagship: Responsive Web Storefront",
    },
    {
      src: "/work/atma/Social Media Presence.png",
      label: "40. Editorial Voice: Digital Campaigns & Stories",
    },
    {
      src: "/work/atma/Thankyou.png",
      label: "41. Brand Sign-off: ATMA™ — Built with Purpose",
    },
  ]

  const allSlides = isAivon
    ? aivonSlides
    : isBaseway
      ? basewaySlides
      : isFinora
        ? finoraSlides
        : isKiyocare
          ? kiyocareSlides
          : isNoritsuAi
            ? noritsuAiSlides
            : isWildflower
              ? wildflowerSlides
              : isNexa
    ? nexaSlides
    : isMindspace
      ? mindspaceSlides
      : isLiveArena
        ? liveArenaSlides
        : isAura
        ? auraSlides
    : isAtma
      ? atmaSlides
      : isPypo
        ? pypoSlides
        : isFlex
          ? flexSlides
          : isLgmAviation
            ? lgmAviationSlides
            : isRolandDonald
              ? rolandDonaldSlides
              : isAxorix
                ? axorixSlides
                : isNodaliq
                  ? nodaliqSlides
                  : isBluemore
                    ? bluemoreSlides
                    : isEuphorixz
                      ? euphorixzSlides
                      : isDriveberry
                        ? driveberrySlides
                        : knkoSlides

  // Reset animated slide index when switching between projects
  useEffect(() => {
    setAnimatedSlideIndex(0)
  }, [project.slug, project.id])

  // Auto-play the animated slide changer every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedSlideIndex((prev) => (prev + 1) % allSlides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [allSlides.length])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [project.slug, project.id])

  const otherAchievements = isSocialMediaProject
    ? isAivon
      ? [
          {
            id: "baseway",
            client: "Baseway",
            service: "Botanical Hydration & DTC Social Campaign",
            image: basewayImages.cover,
            tag: "Social Media Design",
          },
          {
            id: "finora",
            client: "Finora",
            service: "Haute Horlogerie & Fine Jewelry Social Presence",
            image: finoraImages.cover,
            tag: "Social Media Design",
          },
          {
            id: "kiyocare",
            client: "Kiyocare",
            service: "Clean Skincare & Clinical Barrier Defense Social",
            image: kiyocareImages.cover,
            tag: "Social Media Design",
          },
        ]
      : isBaseway
        ? [
            {
              id: "aivon",
              client: "Aivon",
              service: "Holistic Wellness & Mindful Living Social",
              image: aivonImages.cover,
              tag: "Social Media Design",
            },
            {
              id: "finora",
              client: "Finora",
              service: "Haute Horlogerie & Fine Jewelry Social Presence",
              image: finoraImages.cover,
              tag: "Social Media Design",
            },
            {
              id: "kiyocare",
              client: "Kiyocare",
              service: "Clean Skincare & Clinical Barrier Defense Social",
              image: kiyocareImages.cover,
              tag: "Social Media Design",
            },
          ]
        : isFinora
          ? [
              {
                id: "wildflower-atelier",
                client: "Wildflower Atelier",
                service: "Botanical Couture & Luxury Fragrance Monograph",
                image: wildflowerImages.cover,
                tag: "Social Media Design",
              },
              {
                id: "aivon",
                client: "Aivon",
                service: "Holistic Wellness & Mindful Living Social",
                image: aivonImages.cover,
                tag: "Social Media Design",
              },
              {
                id: "baseway",
                client: "Baseway",
                service: "Botanical Hydration & DTC Social Campaign",
                image: basewayImages.cover,
                tag: "Social Media Design",
              },
            ]
          : isKiyocare
            ? [
                {
                  id: "aivon",
                  client: "Aivon",
                  service: "Holistic Wellness & Mindful Living Social",
                  image: aivonImages.cover,
                  tag: "Social Media Design",
                },
                {
                  id: "baseway",
                  client: "Baseway",
                  service: "Botanical Hydration & DTC Social Campaign",
                  image: basewayImages.cover,
                  tag: "Social Media Design",
                },
                {
                  id: "wildflower-atelier",
                  client: "Wildflower Atelier",
                  service: "Botanical Couture & Luxury Fragrance Monograph",
                  image: wildflowerImages.cover,
                  tag: "Social Media Design",
                },
              ]
            : isNoritsuAi
              ? [
                  {
                    id: "finora",
                    client: "Finora",
                    service: "Haute Horlogerie & Fine Jewelry Social Presence",
                    image: finoraImages.cover,
                    tag: "Social Media Design",
                  },
                  {
                    id: "baseway",
                    client: "Baseway",
                    service: "Botanical Hydration & DTC Social Campaign",
                    image: basewayImages.cover,
                    tag: "Social Media Design",
                  },
                  {
                    id: "kiyocare",
                    client: "Kiyocare",
                    service: "Clean Skincare & Clinical Barrier Defense Social",
                    image: kiyocareImages.cover,
                    tag: "Social Media Design",
                  },
                ]
              : [
                  {
                    id: "aivon",
                    client: "Aivon",
                    service: "Holistic Wellness & Mindful Living Social",
                    image: aivonImages.cover,
                    tag: "Social Media Design",
                  },
                  {
                    id: "finora",
                    client: "Finora",
                    service: "Haute Horlogerie & Fine Jewelry Social Presence",
                    image: finoraImages.cover,
                    tag: "Social Media Design",
                  },
                  {
                    id: "kiyocare",
                    client: "Kiyocare",
                    service: "Clean Skincare & Clinical Barrier Defense Social",
                    image: kiyocareImages.cover,
                    tag: "Social Media Design",
                  },
                ]
    : isNexa
    ? [
        {
          id: "livearena",
          client: "LiveArena Sports",
          service: "Real-Time Sports Streaming & Global Match Hub Platform",
          image: "/work/livearena/thumbnail.png",
          tag: "UI/UX & Mobile App",
        },
        {
          id: "mindspace",
          client: "Mindspace AI",
          service: "AI Emotional Wellbeing & Cognitive Companion Platform",
          image: "/work/mindspace/thumbnail.png",
          tag: "UI/UX & Empathetic AI",
        },
      ]
    : isMindspace
    ? [
        {
          id: "livearena",
          client: "LiveArena Sports",
          service: "Real-Time Sports Streaming & Global Match Hub Platform",
          image: "/work/livearena/thumbnail.png",
          tag: "UI/UX & Mobile App",
        },
        {
          id: "nexa",
          client: "Nexa Trading",
          service: "Next-Gen Crypto & Asset Trading Platform",
          image: "/work/nexa/thumbnail.png",
          tag: "UI/UX & Digital Assets",
        },
      ]
    : isLiveArena
      ? [
          {
            id: "nexa",
            client: "Nexa Trading",
            service: "Next-Gen Crypto & Asset Trading Platform",
            image: "/work/nexa/thumbnail.png",
            tag: "UI/UX & Digital Assets",
          },
          {
            id: "mindspace",
            client: "Mindspace AI",
            service: "AI Emotional Wellbeing & Cognitive Companion Platform",
            image: "/work/mindspace/thumbnail.png",
            tag: "UI/UX & Empathetic AI",
          },
        ]
      : isAura
        ? [
        {
          id: "atma",
          client: "ATMA",
          service: "Modern Furniture & 41-Page Architectural Guidelines",
          image: "/work/atma/Slide1.PNG",
          tag: "Logo & Brand Identity",
        },
        {
          id: "pypo",
          client: "Pypo",
          service: "Creative Studio & Human-First Brand Guidebook",
          image: "/work/pypo/Slide1.PNG",
          tag: "Logo & Brand Identity",
        },
        {
          id: "flex",
          client: "Flex",
          service: "Athletic Performance & Kinetic Brand Guidelines",
          image: "/work/flex/1.png",
          tag: "Logo & Brand Identity",
        },
      ]
    : isAtma
      ? [
          {
            id: "pypo",
            client: "Pypo",
            service: "Creative Studio & Human-First Brand Guidebook",
            image: "/work/pypo/Slide1.PNG",
            tag: "Logo & Brand Identity",
          },
          {
            id: "flex",
            client: "Flex",
            service: "Athletic Performance & Kinetic Brand Guidelines",
            image: "/work/flex/1.png",
            tag: "Logo & Brand Identity",
          },
          {
            id: "axorix",
            client: "Axorix",
            service: "DeFi Protocol Emblem & Omnichannel Brand System",
            image: "/work/axorix/imageye___-_imgi_15_f95a7.webp",
            tag: "Logo & Brand Identity",
          },
        ]
      : isPypo
        ? [
            {
              id: "flex",
              client: "Flex",
              service: "Athletic Performance & Kinetic Brand Guidelines",
              image: "/work/flex/1.png",
              tag: "Logo & Brand Identity",
            },
            {
              id: "nodaliq",
              client: "NODALiQ",
              service: "Enterprise AI Telemetry Logo & Design System",
              image: "/work/nodaliq/nodaliq-14.webp",
              tag: "Logo & Brand Identity",
            },
            {
              id: "axorix",
              client: "Axorix",
              service: "DeFi Protocol Emblem & Omnichannel Brand System",
              image: "/work/axorix/imageye___-_imgi_15_f95a7.webp",
              tag: "Logo & Brand Identity",
            },
          ]
        : isFlex
          ? [
              {
                id: "pypo",
                client: "Pypo",
                service: "Friendly Creative Studio Logo & Brand Guidebook",
                image: "/work/pypo/Slide1.PNG",
                tag: "Logo & Brand Identity",
              },
              {
                id: "nodaliq",
                client: "NODALiQ",
                service: "Enterprise AI Telemetry Logo & Design System",
                image: "/work/nodaliq/nodaliq-14.webp",
                tag: "Logo & Brand Identity",
              },
              {
                id: "axorix",
                client: "Axorix",
                service: "DeFi Protocol Emblem & Omnichannel Brand System",
                image: "/work/axorix/imageye___-_imgi_15_f95a7.webp",
                tag: "Logo & Brand Identity",
              },
            ]
          : isLgmAviation
            ? [
                {
                  id: "bluemore",
                  client: "Blue More Yachting",
                  service: "The Art of Luxury Yacht Charter & Investor Deck",
                  image: "/work/bluemore/Slide1.PNG",
                  tag: "Maritime Luxury Deck",
                },
                {
                  id: "roland-donald",
                  client: "Roland Donald Advisory",
                  service: "M&A Advisory & Executive Presentation Deck",
                  image: "/work/roland-donald/Slide1.PNG",
                  tag: "M&A Advisory Deck",
                },
                {
                  id: "driveberry",
                  client: "DriveBerry",
                  service:
                    "AI Vehicle Telemetry & Series-A Investor Pitch Deck",
                  image: "/work/driveberry/Slide1.PNG",
                  tag: "Series-A Deck",
                },
              ]
            : isRolandDonald
              ? [
                  {
                    id: "bluemore",
                    client: "Blue More Yachting",
                    service: "The Art of Luxury Yacht Charter & Investor Deck",
                    image: "/work/bluemore/Slide1.PNG",
                    tag: "Maritime Luxury Deck",
                  },
                  {
                    id: "driveberry",
                    client: "DriveBerry",
                    service:
                      "AI Vehicle Telemetry & Series-A Investor Pitch Deck",
                    image: "/work/driveberry/Slide1.PNG",
                    tag: "Series-A Deck",
                  },
                  {
                    id: "knko",
                    client: "KNKO Bureau",
                    service:
                      "15-Year Master Architectural Practice & Strategy Deck",
                    image: "/work/knko/Slide1.PNG",
                    tag: "Architecture Deck",
                  },
                ]
              : isAxorix
                ? [
                    {
                      id: "nodaliq",
                      client: "NODALiQ",
                      service: "Logo Design & Next-Gen Identity Architecture",
                      image: "/work/nodaliq/nodaliq-14.webp",
                      tag: "Logo Design & Identity",
                    },
                    {
                      id: "pypo",
                      client: "Pypo",
                      service: "Creative Studio & Human-First Brand Guidebook",
                      image: "/work/pypo/Slide1.PNG",
                      tag: "Logo & Brand Identity",
                    },
                    {
                      id: "flex",
                      client: "Flex",
                      service:
                        "Athletic Performance & Kinetic Brand Guidelines",
                      image: "/work/flex/1.png",
                      tag: "Logo & Brand Identity",
                    },
                  ]
                : isNodaliq
                  ? [
                      {
                        id: "axorix",
                        client: "Axorix",
                        service:
                          "Logo Design & Futuristic Brand Identity System",
                        image: "/work/axorix/imageye___-_imgi_15_f95a7.webp",
                        tag: "Logo Design & Identity",
                      },
                      {
                        id: "pypo",
                        client: "Pypo",
                        service:
                          "Creative Studio & Human-First Brand Guidebook",
                        image: "/work/pypo/Slide1.PNG",
                        tag: "Logo & Brand Identity",
                      },
                      {
                        id: "flex",
                        client: "Flex",
                        service:
                          "Athletic Performance & Kinetic Brand Guidelines",
                        image: "/work/flex/1.png",
                        tag: "Logo & Brand Identity",
                      },
                    ]
                  : isBluemore
                    ? [
                        {
                          id: "nodaliq",
                          client: "NODALiQ",
                          service:
                            "Logo Design & Next-Gen Identity Architecture",
                          image: "/work/nodaliq/nodaliq-14.webp",
                          tag: "Logo Design & Identity",
                        },
                        {
                          id: "driveberry",
                          client: "DriveBerry",
                          service:
                            "AI Vehicle Telemetry & Series-A Investor Pitch Deck",
                          image: "/work/driveberry/Slide1.PNG",
                          tag: "Series-A Deck",
                        },
                        {
                          id: "knko",
                          client: "KNKO Bureau",
                          service:
                            "15-Year Master Architectural Practice & Strategy Deck",
                          image: "/work/knko/Slide1.PNG",
                          tag: "Architecture Deck",
                        },
                      ]
                    : isEuphorixz
                      ? [
                          {
                            id: "bluemore",
                            client: "Blue More Yachting",
                            service:
                              "The Art of Luxury Yacht Charter & Investor Deck",
                            image: "/work/bluemore/Slide1.PNG",
                            tag: "Maritime Luxury Deck",
                          },
                          {
                            id: "driveberry",
                            client: "DriveBerry",
                            service:
                              "AI Vehicle Telemetry & Series-A Investor Pitch Deck",
                            image: "/work/driveberry/Slide1.PNG",
                            tag: "Series-A Deck",
                          },
                          {
                            id: "knko",
                            client: "KNKO Bureau",
                            service:
                              "15-Year Master Architectural Practice & Strategy Deck",
                            image: "/work/knko/Slide1.PNG",
                            tag: "Architecture Deck",
                          },
                        ]
                      : isDriveberry
                        ? [
                            {
                              id: "bluemore",
                              client: "Blue More Yachting",
                              service:
                                "The Art of Luxury Yacht Charter & Investor Deck",
                              image: "/work/bluemore/Slide1.PNG",
                              tag: "Maritime Luxury Deck",
                            },
                            {
                              id: "euphorixz",
                              client: "Euphorixz",
                              service:
                                "Science-Backed Dietary Supplements & Investor Deck",
                              image: "/work/euphorixz/Slide1.PNG",
                              tag: "Nutraceutical Deck",
                            },
                            {
                              id: "knko",
                              client: "KNKO Bureau",
                              service:
                                "15-Year Master Architectural Practice & Strategy Deck",
                              image: "/work/knko/Slide1.PNG",
                              tag: "Architecture Deck",
                            },
                          ]
                        : [
                            {
                              id: "bluemore",
                              client: "Blue More Yachting",
                              service:
                                "The Art of Luxury Yacht Charter & Investor Deck",
                              image: "/work/bluemore/Slide1.PNG",
                              tag: "Maritime Luxury Deck",
                            },
                            {
                              id: "driveberry",
                              client: "DriveBerry",
                              service:
                                "AI Vehicle Diagnostics & Series-A Investor Pitch Deck",
                              image: "/work/driveberry/Slide1.PNG",
                              tag: "Series-A Deck",
                            },
                            {
                              id: "euphorixz",
                              client: "Euphorixz",
                              service:
                                "Science-Backed Dietary Supplements & Investor Deck",
                              image: "/work/euphorixz/Slide1.PNG",
                              tag: "Nutraceutical Deck",
                            },
                          ]

  const livearenaFaqs = [
    {
      question: "How does LiveArena achieve sub-second latency for live sports streams?",
      answer: "LiveArena uses custom WebRTC ingestion and ultra-low latency CDN edge servers that synchronize high-bitrate 60 FPS video feeds with real-time on-pitch event data, keeping delay under 800 milliseconds worldwide.",
    },
    {
      question: "Can fans customize notifications and tactical feeds for specific clubs?",
      answer: "Yes. The customizable Fan Hub enables supporters to select favorite clubs, pin live fixtures, and set granular alerts for kickoffs, goals, cards, and VAR decisions.",
    },
    {
      question: "What payment methods are supported for match passes and season subscriptions?",
      answer: "LiveArena supports one-tap biometric checkout via Apple Pay and Google Pay, alongside international credit/debit card tokenization with instant multi-currency settlement.",
    },
    {
      question: "How does the platform maintain stability during high-concurrency derby matches?",
      answer: "The infrastructure features automated multi-region horizontal pod autoscaling, distributed socket channels for commentary, and graceful bitrate adaptation to ensure 99.99% uptime during peak finals.",
    },
  ]

  const mindspaceFaqs = [
    {
      question: "How does the AI Companion ensure clinical safety and ethical boundaries?",
      answer: "The AI companion is trained on validated Cognitive Behavioral Therapy (CBT) and Mindfulness-Based Stress Reduction (MBSR) frameworks. It incorporates automated sentiment triaging that detects acute crisis language and instantly surfaces verified emergency helpline resources.",
    },
    {
      question: "How is user biometric and emotional journal data protected?",
      answer: "All personal reflections, voice notes, and mood logs are encrypted end-to-end using AES-256 and client-side key storage. No unencrypted user mental health data is ever sold or utilized for third-party commercial model training.",
    },
    {
      question: "Can Mindspace export weekly emotional telemetry for therapy appointments?",
      answer: "Yes. Users can generate structured, clinician-friendly PDF summaries that highlight mood valence trends, trigger frequency, and breathwork completion rates to share directly with their licensed therapist.",
    },
    {
      question: "How do the interactive breathwork exercises work?",
      answer: "Mindspace includes animated haptic breathwork guides including 4-7-8 relaxing breath, resonant coherent breathing, and box breathing, scientifically proven to activate the parasympathetic nervous system within minutes.",
    },
  ]

  const nexaFaqs = [
    {
      question: "What was the core UX challenge in building Nexa Trading?",
      answer:
        "Balancing high-density trading telemetry — like live order books, candlestick charts, and slippage indicators — with a mobile-first interface that remains intuitive and lightning fast for everyday traders.",
    },
    {
      question: "How does Nexa ensure sub-second trade execution in the UI?",
      answer:
        "We designed streamlined two-tap order routing flows with optimistic UI feedback and real-time WebSockets integration, cutting order placement latency to under 45ms.",
    },
    {
      question: "What security features were built into the mobile onboarding?",
      answer:
        "A seamless progressive KYC verification pipeline combined with FaceID/fingerprint biometric PIN authorization and multi-factor transaction signing.",
    },
    {
      question: "Which platforms and design frameworks were delivered?",
      answer:
        "A full iOS and Android design system with 80+ high-fidelity screens, interactive prototypes, dark-mode precision color tokens, and a component library for React Native.",
    },
  ]

  const defaultFaqs = [
    {
      question:
        "What is the typical turnaround time for an executive pitch deck?",
      answer:
        "Our standard production cycle for an investor-grade pitch deck is 2 to 3 weeks from initial narrative discovery to final delivery. We also offer an expedited 7-day executive sprint for active venture fundraising rounds and partner deadlines.",
    },
    {
      question: "How do you handle confidential financial models and NDAs?",
      answer:
        "We sign mutual enterprise NDAs before reviewing any proprietary metrics. All financial modeling, customer data, and cap table assumptions are handled inside encrypted workspaces with zero external sharing.",
    },
    {
      question:
        "Do you provide editable templates in Figma, PowerPoint, or Keynote?",
      answer:
        "Yes, every project includes clean, native editable master source files in Figma, PowerPoint (.pptx), and Apple Keynote, formatted with master layout grids, responsive typography components, and modular charts.",
    },
    {
      question:
        "Can your team assist with investor storytelling and narrative structuring?",
      answer:
        "Storytelling is our core discipline. We don't just 'beautify' slides—we partner with founders and principals to architect the defensible moat, TAM logic, pricing architecture, and executive talk track.",
    },
  ]

  const nodaliqFaqs = [
    {
      question:
        "How does the NODALiQ logo mark maintain legibility across physical and digital scales?",
      answer:
        "The mark is constructed on an 8×8 mathematical coordinate grid with 45° chamfered terminals. This mathematical discipline ensures razor-sharp visual clarity whether rendered as a 16px browser favicon or manufactured as a 3-meter brushed aluminum exterior building sign.",
    },
    {
      question:
        "Why was the Mont typeface chosen for the NODALiQ brand identity?",
      answer:
        "Mont offers clean geometric form with 20 versatile weights. It combines high technical legibility for dense network telemetry and code snippets with authoritative, high-impact display headlines for venture presentations.",
    },
    {
      question: "What is the 01-04 Hexadecimal Token Architecture?",
      answer:
        "It is a disciplined 4-tier color system engineered for dark-mode environments: 01 Obsidian Base (#0A0A0B), 02 Deep Slate (#18181B), 03 Electric Violet Node (#7C3AED / #9333EA), and 04 Crisp Stark White (#FFFFFF).",
    },
    {
      question: "What assets were delivered in the complete brand system?",
      answer:
        "Full vector logo package (.SVG, .AI, .EPS, .PNG), digital design system tokens, Mont typography guidelines, tactile stationery debossing specifications, keynote stage backdrops, and architectural facade signage mockups.",
    },
  ]

  const axorixFaqs = [
    {
      question:
        "How does the Axorix brand identity balance cutting-edge DeFi with high-fashion aesthetics?",
      answer:
        "By avoiding generic crypto tropes like chaotic neon gradients and unreadable 3D geometry. Instead, the visual language is anchored in minimalist mathematical symbols, a stark Obsidian-and-Acid-Yellow palette, and editorial typography that translates seamlessly to embroidered luxury streetwear.",
    },
    {
      question:
        "Why was the four-point star paired with an industrial coin monogram chosen as the primary mark?",
      answer:
        "The aerodynamic four-point star communicates intelligent algorithmic guidance across decentralized liquidity pools, while the metallic coin core grounds the symbol in tangible cryptographic value and protocol security.",
    },
    {
      question:
        "What typographic system was established for the Axorix protocol?",
      answer:
        "We implemented Power Grotesk as the core brand typeface. Its geometric precision and expressive character allow it to perform with razor clarity on dense real-time charts while remaining bold and memorable on digital displays and billboards.",
    },
    {
      question:
        "What deliverables and production assets were provided in the brand system?",
      answer:
        "The delivery included complete vector logo marks (.SVG, .AI, .EPS, .PNG), digital design system tokens, CSS/Tailwind color variables, social media template kits, tablet and mobile interface guidelines, and precision embroidery vector maps for physical merchandise.",
    },
  ]

  const pypoFaqs = [
    {
      question: "What is the core philosophy behind the Pypo visual identity?",
      answer:
        "The Pypo identity is built on the core pillars of 'Friendly, Yours, and Simple.' It breaks away from intimidating corporate agency design by using soft geometric curves, welcoming pill-shaped elements, and an approachable rounded P-mark emblem.",
    },
    {
      question: "How are co-branding lockups handled with partners like SEGA?",
      answer:
        "The guidebook specifies strict proportional rules: equal visual optical weight, a vertical divider line with 1.5x clear space padding, and neutral high-contrast backgrounds to ensure neither brand compromises the other's recognition.",
    },
    {
      question: "What colors constitute the Pypo brand palette?",
      answer:
        "The primary palette is anchored by Electric Violet (#774CFF) for creative energy and Emerald Green (#2CDA8B) for growth and clarity, supported by Athens Gray (#F1F5F9) for luminous breathing room and Vulcan (#0D111E) for deep typographic grounding.",
    },
    {
      question: "Which typefaces are specified in the 25-page guidebook?",
      answer:
        "The display typeface is Google's Outfit for charismatic, friendly headlines and section titles, paired with Rasmus Andersson's Inter for high-density digital interfaces, contracts, and body copy.",
    },
  ]

  const flexFaqs = [
    {
      question: "What is included in the Flex Brand Identity Guidelines?",
      answer:
        "The 67-page system spans eight comprehensive chapters: brand mission & character, aerodynamic logo geometry & clear space, signature Sierra palette rules, typography scales, split-frame grid layouts, art direction for dynamic motion photography, social feed templates, and retail packaging specifications.",
    },
    {
      question:
        "How does the Flex logo maintain legibility on technical sportswear?",
      answer:
        "The geometric mark is engineered with calculated negative space and balanced symmetrical tension, ensuring crisp legibility whether heat-pressed on reflective lycra, embroidered onto jackets, or woven onto 12mm micro care tags.",
    },
    {
      question: "What is the primary color system for the Flex brand?",
      answer:
        "The palette is anchored by proprietary high-voltage Sierra Orange (#E9532B), paired with Deep Charcoal for institutional contrast and Crisp White for luminous clarity across digital and physical substrates.",
    },
    {
      question:
        "Can these guidelines be applied across international retail channels?",
      answer:
        "Yes, the brand guidelines include modular storefront display specifications, window decal formulas, eco-friendly corrugated packaging layouts, and digital campaign templates optimized for global e-commerce and international distributors.",
    },
  ]

  const auraFaqs = [
    {
      question: "What is the core philosophy behind the Aura brand system?",
      answer:
        "The Aura brand is founded on 'Intentional Clarity & Human Radiance' — stripping away arbitrary decorative noise while ensuring digital interfaces remain warm, empathetic, and accessible rather than cold and sterile.",
    },
    {
      question: "Which typefaces are specified in the Aura design system?",
      answer:
        "Aura specifies Host Grotesk as its core typographic engine: Host Grotesk Bold for authoritative display titles and headings, and Host Grotesk Regular / Medium for crisp, legible UI copy and long-form body text.",
    },
    {
      question: "How does the color palette ensure accessibility compliance?",
      answer:
        "The color system rigorously adheres to WCAG 2.1 AA standards, pairing deep Aura Black (#0D0D11) and stark Pure Light (#F9F9FB) with high-contrast accents: Electric Neon (#4F46E5) achieving a 6.29:1 contrast ratio and Sunset Glow (#F43F5E) achieving a 5.72:1 contrast ratio.",
    },
    {
      question:
        "What rules govern the Aura iconography and UI component library?",
      answer:
        "All icons are constructed on a strict 24×24px coordinate grid with uniform 2px line weights and rounded stroke caps. UI button components follow standardized states (Default, Hover, Focus, Press, and Disabled) across both dark and light theme surfaces.",
    },
  ]

  const atmaFaqs = [
    {
      question: "What is the core design philosophy of ATMA?",
      answer:
        "ATMA is built on the philosophy of 'Crafted Living with Soul'—redefining modern living spaces through timeless craftsmanship, honest organic materials, and intentional simplicity.",
    },
    {
      question: "Why was Satoshi paired with Inter for the typographic system?",
      answer:
        "Satoshi delivers architectural proportion, geometric balance, and sophisticated modern editorial presence for display headlines, while Inter provides neutral optical legibility across digital interfaces, technical specification sheets, and retail dimensions.",
    },
    {
      question:
        "How does the identity adapt across physical and architectural environments?",
      answer:
        "The system was engineered for physical materiality from day one: high-contrast contrast lockups, debossed natural leather tags, cantilevered 3D storefront signboards on milled wood slat walls, and monumental outdoor billboards mounted on raw cast concrete.",
    },
    {
      question: "What color palette anchors the ATMA brand identity?",
      answer:
        "A grounded earth palette: Obsidian Slate (#2F2E2C), Warm Walnut Brown (#564334), Deep Espresso Maroon (#442827), balanced with Olive Moss and Warm Linen White in a calibrated 25/25/25/12.5 proportion.",
    },
    {
      question: "What modules are included in the 41-page brand guidelines?",
      answer:
        "The 41-page system includes 7 complete chapters: Introduction & Core Values, Logo Anatomy & Clear Space, Color Theory & Materiality, Satoshi & Inter Typography Hierarchy, Graphic Grid Systems & Imagery Art Direction, Brand Tone of Voice, and Spatial Retail & Packaging Applications.",
    },
  ]

  const faqs = isNexa
    ? nexaFaqs
    : isMindspace
      ? mindspaceFaqs
      : isLiveArena
        ? livearenaFaqs
        : isAura
        ? auraFaqs
    : isAtma
      ? atmaFaqs
      : isPypo
        ? pypoFaqs
        : isFlex
          ? flexFaqs
          : isAxorix
            ? axorixFaqs
            : isNodaliq
              ? nodaliqFaqs
              : defaultFaqs

  const coverSlideSrc = isAivon
    ? aivonImages.cover
    : isBaseway
      ? basewayImages.cover
      : isFinora
        ? finoraImages.cover
        : isKiyocare
          ? kiyocareImages.cover
          : isNoritsuAi
            ? noritsuImages.cover
            : isWildflower
              ? wildflowerImages.cover
              : isNexa
    ? "/work/nexa/thumbnail.png"
    : isMindspace
      ? "/work/mindspace/thumbnail.png"
      : isLiveArena
      ? "/work/livearena/thumbnail.png"
      : isAura
        ? "/work/aura/Slide1.png"
    : isAtma
      ? "/work/atma/Cover.png"
      : isPypo
        ? "/work/pypo/Slide1.PNG"
        : isFlex
          ? "/work/flex/1.png"
          : isLgmAviation
            ? "/work/lgm-aviation/Slide1.PNG"
            : isRolandDonald
              ? "/work/roland-donald/Slide1.PNG"
              : isAxorix
                ? "/work/axorix/imageye___-_imgi_15_f95a7.webp"
                : isNodaliq
                  ? "/work/nodaliq/nodaliq-14.webp"
                  : isBluemore
                    ? "/work/bluemore/Slide1.PNG"
                    : isEuphorixz
                      ? "/work/euphorixz/Slide1.PNG"
                      : isDriveberry
                        ? "/work/driveberry/Slide1.PNG"
                        : "/work/knko/Slide1.PNG"

  const slide2Src = isAivon
    ? aivonImages.slide2
    : isBaseway
      ? basewayImages.slide2
      : isFinora
        ? finoraImages.story1
        : isKiyocare
          ? kiyocareImages.slide2
          : isNoritsuAi
            ? noritsuImages.slide2
            : isWildflower
              ? wildflowerImages.story1
              : isNexa
    ? "/work/nexa/01-onboarding.gif"
    : isMindspace
      ? "/work/mindspace/01-onboarding.gif"
      : isLiveArena
      ? "/work/livearena/01-splash-onboarding.png"
      : isAura
        ? "/work/aura/Slide4.png"
    : isAtma
      ? "/work/atma/About Brand.png"
      : isPypo
        ? "/work/pypo/Slide4.PNG"
        : isFlex
          ? "/work/flex/4.png"
          : isLgmAviation
            ? "/work/lgm-aviation/Slide2.PNG"
            : isRolandDonald
              ? "/work/roland-donald/Slide2.PNG"
              : isAxorix
                ? "/work/axorix/axorix-01.webp"
                : isNodaliq
                  ? "/work/nodaliq/nodaliq-02.webp"
                  : isBluemore
                    ? "/work/bluemore/Slide2.PNG"
                    : isEuphorixz
                      ? "/work/euphorixz/Slide2.PNG"
                      : isDriveberry
                        ? "/work/driveberry/Slide2.PNG"
                        : "/work/knko/Slide2.PNG"

  const slide3Src = isAivon
    ? aivonImages.slide3
    : isBaseway
      ? basewayImages.slide3
      : isFinora
        ? finoraImages.slide2
        : isKiyocare
          ? kiyocareImages.slide3
          : isNoritsuAi
            ? noritsuImages.slide3
            : isWildflower
              ? wildflowerImages.story2
              : isNexa
    ? "/work/nexa/02-register-verification.gif"
    : isMindspace
      ? "/work/mindspace/02-account-setup.gif"
      : isLiveArena
      ? "/work/livearena/04-home-live-match-streaming.png"
      : isAura
        ? "/work/aura/Slide7.png"
    : isAtma
      ? "/work/atma/Logo Variant.png"
      : isPypo
        ? "/work/pypo/Slide7.PNG"
        : isFlex
          ? "/work/flex/22.png"
          : isLgmAviation
            ? "/work/lgm-aviation/Slide4.PNG"
            : isRolandDonald
              ? "/work/roland-donald/Slide12.PNG"
              : isAxorix
                ? "/work/axorix/axorix-08.webp"
                : isNodaliq
                  ? "/work/nodaliq/nodaliq-04.webp"
                  : isBluemore
                    ? "/work/bluemore/Slide3.PNG"
                    : isEuphorixz
                      ? "/work/euphorixz/Slide3.PNG"
                      : isDriveberry
                        ? "/work/driveberry/Slide3.PNG"
                        : "/work/knko/Slide3.PNG"

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white selection:bg-coral/30 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* 1. Shared Navigation Header (Exact same header used on every page) */}
      <Navbar onNavigateHome={onBack} />

      {/* ======================================================== */}
      {/* SECTION 1: HERO & COVER PAGE (DARK LUXURY #0A0A0B)       */}
      {/* ======================================================== */}
      <section className="bg-[#0A0A0B] text-white pt-28 md:pt-32 pb-20 border-b border-white/[0.06]">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12">
          {/* Category Badge Pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-coral/30 bg-coral/10 text-coral text-[12px] font-mono uppercase tracking-[0.18em] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-coral animate-ping" />
            <span>
              {isAivon
                ? "Holistic Wellness & Mindful Living"
                : isBaseway
                  ? "Botanical Hydration & DTC Social Campaign"
                  : isFinora
                    ? "Haute Horlogerie & Fine Jewelry Social"
                    : isKiyocare
                      ? "Clean Skincare & Clinical Beauty"
                      : isNoritsuAi
                        ? "Enterprise AI & Autonomous Systems"
                        : isWildflower
                          ? "Botanical Couture & Luxury Fragrance"
                          : isAura
                ? "Creative Developer & AI Design Guidelines"
                : isAtma
                  ? "Modern Furniture & Interior Brand Guidelines"
                  : isPypo
                    ? "Creative Studio & Brand Guidebook"
                    : isFlex
                      ? "Athletic Performance & Kinetic Brand Guidelines"
                      : isLgmAviation
                        ? "Commercial Aerospace & Global Spares Pitch Deck"
                        : isRolandDonald
                          ? "M&A Advisory & Executive Pitch Deck Suite"
                          : isAxorix
                            ? "Logo Design & Brand Identity System"
                            : isNodaliq
                              ? "Logo Design & Brand Identity System"
                              : isNexa
                                ? "FinTech & Crypto Trading Platform"
                                : isMindspace
                                ? "AI Emotional Wellbeing & Cognitive Companion Platform"
                                : isLiveArena
                                  ? "Real-Time Sports Streaming & Global Match Hub Platform"
                                  : isBluemore
                                ? "Maritime Luxury & High-End Private Charter Pitch Deck"
                                : isEuphorixz
                                  ? "Nutraceutical Innovation & Investor Pitch Deck"
                                  : isDriveberry
                                    ? "AI Vehicle Diagnostics & Series-A Pitch Deck"
                                    : "Executive Pitch Deck & Brand Strategy"}
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7 xl:col-span-8"
            >
              <h1 className="text-[clamp(2.4rem,4.6vw,4.2rem)] font-bold text-white leading-[1.08] tracking-[-0.035em] font-sans">
                {isAivon ? (
                  <>
                    Cultivating tranquility through a{" "}
                    <span className="bg-gradient-to-r from-coral via-[#FF7D5C] to-red bg-clip-text text-transparent">
                      serene, editorial social presence
                    </span>
                  </>
                ) : isBaseway ? (
                  <>
                    Electrifying hydration through a{" "}
                    <span className="bg-gradient-to-r from-coral via-[#FF7D5C] to-red bg-clip-text text-transparent">
                      vibrant DTC social campaign
                    </span>
                  </>
                ) : isFinora ? (
                  <>
                    Reflecting master craftsmanship in an{" "}
                    <span className="bg-gradient-to-r from-coral via-[#FF7D5C] to-red bg-clip-text text-transparent">
                      haute horlogerie social narrative
                    </span>
                  </>
                ) : isKiyocare ? (
                  <>
                    Bridging dermatological clinical science with{" "}
                    <span className="bg-gradient-to-r from-coral via-[#FF7D5C] to-red bg-clip-text text-transparent">
                      alluring, clean beauty storytelling
                    </span>
                  </>
                ) : isNoritsuAi ? (
                  <>
                    Demystifying enterprise automation with a{" "}
                    <span className="bg-gradient-to-r from-coral via-[#FF7D5C] to-red bg-clip-text text-transparent">
                      futuristic high-authority motion presence
                    </span>
                  </>
                ) : isWildflower ? (
                  <>
                    Translating organic textures into{" "}
                    <span className="bg-gradient-to-r from-coral via-[#FF7D5C] to-red bg-clip-text text-transparent">
                      museum-grade botanical couture storytelling
                    </span>
                  </>
                ) : isAura ? (
                  <>
                    Engineering human radiance through an{" "}
                    <span className="bg-gradient-to-r from-coral via-[#FF7D5C] to-red bg-clip-text text-transparent">
                      intuitive, accessible design ecosystem
                    </span>
                  </>
                ) : isAtma ? (
                  <>
                    Redefining living space through a{" "}
                    <span className="bg-gradient-to-r from-coral via-[#FF7D5C] to-red bg-clip-text text-transparent">
                      timeless, soul-crafted brand identity
                    </span>
                  </>
                ) : isPypo ? (
                  <>
                    Making creative partnership effortless through a{" "}
                    <span className="bg-gradient-to-r from-coral via-[#FF7D5C] to-red bg-clip-text text-transparent">
                      friendly, human-first brand identity
                    </span>
                  </>
                ) : isFlex ? (
                  <>
                    Making high-performance gear effortless through an{" "}
                    <span className="bg-gradient-to-r from-coral via-[#FF7D5C] to-red bg-clip-text text-transparent">
                      iconic kinetic identity & guideline system
                    </span>
                  </>
                ) : isLgmAviation ? (
                  <>
                    Engineering a mission-critical aerospace aftermarket suite
                    for{" "}
                    <span className="bg-gradient-to-r from-coral via-[#FF7D5C] to-red bg-clip-text text-transparent">
                      global commercial airlines & MROs
                    </span>
                  </>
                ) : isRolandDonald ? (
                  <>
                    Engineering an institutional advisory suite for{" "}
                    <span className="bg-gradient-to-r from-coral via-[#FF7D5C] to-red bg-clip-text text-transparent">
                      cross-border M&A & private equity
                    </span>
                  </>
                ) : isAxorix ? (
                  <>
                    Sculpting an AI-powered DeFi protocol into an{" "}
                    <span className="bg-gradient-to-r from-coral via-[#FF7D5C] to-red bg-clip-text text-transparent">
                      iconic brand identity
                    </span>
                  </>
                ) : isNodaliq ? (
                  <>
                    Transforming network intelligence into an{" "}
                    <span className="bg-gradient-to-r from-coral via-[#FF7D5C] to-red bg-clip-text text-transparent">
                      iconic brand identity
                    </span>
                  </>
                ) : isNexa ? (
                  <>
                    Engineering institutional crypto speed into an{" "}
                    <span className="bg-gradient-to-r from-coral via-[#FF7D5C] to-red bg-clip-text text-transparent">
                      effortless mobile trading terminal
                    </span>
                  </>
                ) : isMindspace ? (
                  <>
                    Reimagining mental wellbeing through{" "}
                    <span className="bg-gradient-to-r from-coral via-[#FF7D5C] to-red bg-clip-text text-transparent">
                      adaptive emotional intelligence
                    </span>
                  </>
                ) : isLiveArena ? (
                  <>
                    Transforming live sports streaming into an{" "}
                    <span className="bg-gradient-to-r from-coral via-[#FF7D5C] to-red bg-clip-text text-transparent">
                      ultra-low-latency arena
                    </span>
                  </>
                ) : isBluemore ? (
                  <>
                    Transforming luxury yacht chartering into an{" "}
                    <span className="bg-gradient-to-r from-coral via-[#FF7D5C] to-red bg-clip-text text-transparent">
                      investor-grade pitch deck
                    </span>
                  </>
                ) : isEuphorixz ? (
                  <>
                    Transforming science-backed dietary supplements into an{" "}
                    <span className="bg-gradient-to-r from-coral via-[#FF7D5C] to-red bg-clip-text text-transparent">
                      investor-grade pitch deck
                    </span>
                  </>
                ) : isDriveberry ? (
                  <>
                    Translating AI vehicle diagnostics & repair transparency
                    into a{" "}
                    <span className="bg-gradient-to-r from-coral via-[#FF7D5C] to-red bg-clip-text text-transparent">
                      compelling pitch deck
                    </span>
                  </>
                ) : (
                  <>
                    Transforming cutting-edge architecture into a clear,
                    readable, and{" "}
                    <span className="bg-gradient-to-r from-coral via-[#FF7D5C] to-red bg-clip-text text-transparent">
                      compelling pitch deck
                    </span>
                  </>
                )}
              </h1>
              <p className="mt-5 text-[17px] sm:text-[19px] text-white/60 leading-relaxed font-light max-w-2xl">
                {isAivon
                  ? "Soft morning sunlight, natural textures, breathable typography, and thoughtful mindfulness carousels engineered for holistic living brand Aivon."
                  : isBaseway
                    ? "Saturated pop-editorial color blocking, organic superfood ingredient callouts, and high-energy video content built for modern hydration brand Baseway."
                    : isFinora
                      ? "Light-refracting cinematic macro photography, gemological clarity breakdowns, and monochrome luxury backdrops crafted for Swiss fine jewelry maison Finora."
                      : isKiyocare
                        ? "Dermatological active ingredient percentages, ultra-macro hydration cinematography, and save-optimized routine carousels engineered for clean beauty brand Kiyocare."
                        : isNoritsuAi
                          ? "Dark-mode precision UI telemetry, micro-motion data flow sequences, and thought-leadership B2B carousels engineered for enterprise generative AI pioneer NoritsuAI."
                          : isWildflower
                            ? "A poetic 4-part Instagram story narrative, macro botanical color grading, and tactile museum-grade layouts crafted for Parisian floral atelier Wildflower."
                            : isAura
                  ? "A geometric angled monogram, high-contrast spectral palette, Host Grotesk typographic hierarchy, and an exhaustive 25-page style guide engineered for creative platform AURA."
                  : isAtma
                    ? "A sculptural architectural wordmark, earth-anchored color theory, Satoshi & Inter typographic scale, and an exhaustive 41-page brand guidelines manual crafted for modern furniture brand ATMA."
                    : isPypo
                      ? "A warm rounded P-emblem logo, vibrant Electric Violet & Emerald Green palette architecture, and an exhaustive 25-page brand guidebook crafted for creative marketing and design collective Pypo."
                      : isFlex
                        ? "An iconic aerodynamic logo mark, signature Sierra color architecture, and an exhaustive 67-page brand guideline deck engineered for next-generation athletic apparel."
                        : isLgmAviation
                          ? "An authoritative, mission-ready executive presentation engineered for global airline procurement teams, aircraft leasing syndicates, and 24/7/365 critical AOG missions."
                          : isRolandDonald
                            ? "An elite executive presentation framework engineered for sovereign fund meetings, cross-border M&A negotiations, and private equity deal tombstones."
                            : isAxorix
                              ? "A high-contrast visual identity, futuristic token mark, and comprehensive omnichannel design system engineered for an AI-powered DeFi protocol."
                              : isNodaliq
                                ? "An enterprise visual identity, mathematical logo mark, and comprehensive design system built for next-generation autonomous AI network laboratories."
                                : isNexa
                                  ? "A high-precision mobile crypto trading terminal combining sub-millisecond order execution, live candlestick depth telemetry, multi-asset digital vaults, and fortified biometric onboarding."
                                  : isMindspace
                                    ? "A compassionate mobile health ecosystem integrating empathetic AI emotional support, real-time mood logging, clinical CBT reframing, and structured cognitive breathwork protocols."
                                    : isLiveArena
                                      ? "An ultra-low latency sports streaming and tactical match intelligence application engineered to deliver sub-second 60 FPS live video, dynamic pitch tracking, and single-tap match ticketing."
                                      : isBluemore
                                    ? "An ultra-premium maritime presentation engineered to articulate Blue More Yachting's 14-year East Mediterranean heritage, 242-vessel curated fleet, and white-glove private charter concierge across Turkiye, Greece, and Croatia."
                                    : isEuphorixz
                                      ? "A dual-product strategic presentation engineered to position Euphorixz's Glucose Anti-Spike and Party Recovery Set for global wellness investors and retail scale."
                                      : isDriveberry
                                        ? "An investor-grade Series-A pitch deck engineered to articulate DriveBerry's AI-driven vehicle diagnostics, real-time BerryScan sensor telemetry, and certified garage network across France."
                                        : "A comprehensive strategic and financial growth roadmap engineered to reposition a 15-year master architectural practice for tier-1 institutional developers and cross-border expansion."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 xl:col-span-4 rounded-lg border border-white/[0.1] bg-white/[0.03] p-7 backdrop-blur-md"
            >
              <div className="grid grid-cols-2 gap-y-6 gap-x-6 text-[14px]">
                <div>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 mb-1.5">
                    Customer
                  </span>
                  <span className="font-semibold text-white text-[15px] tracking-tight block">
                    {isAura
                      ? "Aura"
                      : isAtma
                        ? "ATMA"
                        : isPypo
                          ? "Pypo"
                          : isFlex
                            ? "Flex"
                            : isLgmAviation
                              ? "LGM Aviation"
                              : isRolandDonald
                                ? "Roland Donald Advisory"
                                : isAxorix
                                  ? "Axorix"
                                  : isNodaliq
                                    ? "NODALiQ"
                                    : isNexa
                                      ? "Nexa Trading"
                                      : isMindspace
                                        ? "Mindspace AI"
                                      : isLiveArena
                                        ? "LiveArena Sports"
                                        : isBluemore
                                      ? "Blue More Yachting"
                                      : isEuphorixz
                                        ? "Euphorixz"
                                        : project.clientName}
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 mb-1.5">
                    Timeline
                  </span>
                  <span className="font-mono text-white text-[15px] block">
                    {project.year}
                  </span>
                </div>
                <div className="col-span-2 pt-2 border-t border-white/[0.06]">
                  <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 mb-2">
                    Scope of Work
                  </span>
                  <div className="flex flex-wrap gap-2 text-white/80 text-[13px]">
                    {isAivon ? (
                      <>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Social Strategy
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Editorial Creative
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Mindful Lifestyle
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Curated Carousels
                        </span>
                      </>
                    ) : isBaseway ? (
                      <>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          DTC Social Campaign
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Beverage Packaging
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Pop Color Blocking
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Reels Motion Design
                        </span>
                      </>
                    ) : isFinora ? (
                      <>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Haute Horlogerie
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Fine Jewelry
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Macro Cinematography
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Private Suite Heritage
                        </span>
                      </>
                    ) : isKiyocare ? (
                      <>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Clinical Skincare
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Ingredient Transparency
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Clean Beauty
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Routine Guides
                        </span>
                      </>
                    ) : isNoritsuAi ? (
                      <>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Enterprise AI
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Motion Graphics
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Autonomous Systems
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          B2B Leadership
                        </span>
                      </>
                    ) : isWildflower ? (
                      <>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Botanical Couture
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          French Floral Atelier
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Story Narrative Pacing
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Editorial Curation
                        </span>
                      </>
                    ) : isAura ? (
                      <>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Brand Identity
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Design System
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Style Guide
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          25-Page System
                        </span>
                      </>
                    ) : isAtma ? (
                      <>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Brand Identity
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Wordmark Anatomy
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Brand Guidelines
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          41-Page System
                        </span>
                      </>
                    ) : isPypo ? (
                      <>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Brand Identity
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Logo Anatomy
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Brand Guidebook
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          25-Page System
                        </span>
                      </>
                    ) : isFlex ? (
                      <>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Brand Identity
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Logo System
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Brand Guidelines
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          67-Page System
                        </span>
                      </>
                    ) : isLgmAviation ? (
                      <>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Commercial Aviation
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          AOG Spares Sourcing
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Repair Management
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          10-Slide Deck
                        </span>
                      </>
                    ) : isRolandDonald ? (
                      <>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          M&A Advisory
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Executive Pitch Deck
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Capital Restructuring
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          14-Slide Suite
                        </span>
                      </>
                    ) : isAxorix ? (
                      <>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Logo Design
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Brand Identity
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Design Tokens
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Power Grotesk
                        </span>
                      </>
                    ) : isNodaliq ? (
                      <>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Logo Design
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Brand Identity
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Design System
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Mont Typography
                        </span>
                      </>
                    ) : isNexa ? (
                      <>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Crypto Exchange
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Live Candlestick Telemetry
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Sub-45ms Execution
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Biometric Vaults
                        </span>
                      </>
                    ) : isMindspace ? (
                      <>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Empathetic AI
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Mood Telemetry
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Breathwork Protocols
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Dark Ergonomics
                        </span>
                      </>
                    ) : isLiveArena ? (
                      <>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Live Video Telemetry
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Match Intelligence UI
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Sports Pass Checkout
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Fan Identity Hub
                        </span>
                      </>
                    ) : isBluemore ? (
                      <>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Maritime Narrative
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Fleet Curation UI
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Private Charter Logistics
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          11-Slide Pitch Deck
                        </span>
                      </>
                    ) : isEuphorixz ? (
                      <>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Nutraceutical Narrative
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Clinical Efficacy UI
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          DTC Unit Economics
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          10-Slide Pitch Deck
                        </span>
                      </>
                    ) : isDriveberry ? (
                      <>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Series-A Narrative
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          BerryScan Sensor UI
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Market Sizing & TAM
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          25-Slide Pitch Deck
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Executive Narrative
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          Financial Modeling
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                          28-Slide Pitch Deck
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* COVER PAGE (Slide 1) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative w-full aspect-[16/9.2] max-h-[740px] rounded-[8px] md:rounded-[10px] overflow-hidden border border-white/[0.12] shadow-[0_30px_90px_rgba(0,0,0,0.7)] group bg-black cursor-pointer"
            onClick={() => setLightboxImage(coverSlideSrc)}
          >
            <img
              src={coverSlideSrc}
              alt={
                isAura
                  ? "Aura Brand Guideline v1.0 Cover Slide 1"
                  : isAtma
                    ? "ATMA Brand Guidelines 2026 Cover Slide 1"
                    : isPypo
                      ? "Pypo Brand Guidebook Cover Slide 1"
                      : isFlex
                        ? "Flex Brand Identity Guidelines Cover Slide 1"
                        : isLgmAviation
                          ? "LGM Aviation Worldwide Support Pitch Deck Cover Slide 1"
                          : isRolandDonald
                            ? "Roland Donald Advisory Executive Pitch Deck Cover Slide 1"
                            : isAxorix
                              ? "Axorix Brand Apparel and Identity Symbol Cover"
                              : isNodaliq
                                ? "NODALiQ Keynote Presentation Cover"
                                : isNexa
                                  ? "Nexa Trading Next-Gen Digital Asset Terminal Cover"
                                  : isMindspace
                                  ? "Mindspace AI Emotional Wellbeing Mobile Platform Cover"
                                  : isLiveArena
                                    ? "LiveArena Sports Real-Time Match Hub Platform Cover"
                                    : isBluemore
                                  ? "Blue More Yachting Luxury Charter Pitch Deck Cover Page Slide 1"
                                  : isEuphorixz
                                    ? "Euphorixz Pitch Deck Cover Page Slide 1"
                                    : isDriveberry
                                      ? "DriveBerry Series-A Pitch Deck Cover Page"
                                      : "KNKO Bureau Cover Page Slide 1"
              }
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-mono text-white/90 border border-white/15 shadow-lg">
              Cover Page · Slide 01
            </div>
          </motion.div>
        </div>
      </section>

      {isSocialMediaProject ? (
        <SocialMediaCaseStudySection
          config={getSocialMediaCaseStudyConfig(project.id || project.slug || "")}
          projectId={project.id || project.slug || ""}
        />
      ) : (
        <>
          {/* ======================================================== */}
          {/* SECTION 2: WHITE SECTION (Project Description + Slide 2   */}
          {/*            + Problem + 3 Problem Cards)                  */}
          {/* ======================================================== */}
          <section className="bg-white text-[#0A0A0B] py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12">
          {/* Project Description Header */}
          <div className="max-w-[860px] mx-auto text-center mb-16 md:mb-20">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#F4F4F5] border border-black/10 text-coral font-mono text-[11px] uppercase tracking-[0.2em] font-semibold mb-4">
              Project Narrative
            </span>
            <h2
              className="text-[32px] sm:text-[42px] md:text-[48px] font-bold text-[#0A0A0B] mb-6 tracking-tight font-sans"
              style={{ fontFamily: 'var(--font-sans), "Geist", sans-serif' }}
            >
              Project Description
            </h2>
            <p className="text-[19px] sm:text-[22px] md:text-[24px] font-light leading-[1.55] text-[#27272A]">
              {isAura ? (
                <>
                  In digital products and developer tooling, software often
                  feels cold, technical, and intimidating. We partnered with
                  Aura to construct a{" "}
                  <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-medium">
                    modern, human-radiant 25-page style guide & visual identity
                  </span>{" "}
                  translating their core mission into an iconic geometric
                  monogram, an accessible high-contrast palette of Aura Black,
                  Pure Light, Electric Neon, and Sunset Glow, Host Grotesk
                  typography hierarchy, pixel-perfect 24px iconography, and
                  responsive design systems.
                </>
              ) : isAtma ? (
                <>
                  Living spaces should bring harmony, warmth, and soul to modern
                  life. We partnered with ATMA to engineer a{" "}
                  <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-medium">
                    monumental 41-page brand guidelines system & architectural
                    identity
                  </span>{" "}
                  translating their 'Crafted Living with Soul' ethos into an
                  iconic sculptural wordmark, an earth-anchored palette of Slate
                  Obsidian, Walnut Brown, and Espresso Maroon, a Satoshi and
                  Inter typographic scale, fluted wood slat storefront signage,
                  and monumental concrete billboards.
                </>
              ) : isPypo ? (
                <>
                  Design should never feel intimidating. We partnered with Pypo
                  to construct a{" "}
                  <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-medium">
                    warm, human-first brand identity & 25-page guidebook
                  </span>{" "}
                  translating their 'Friendly, Yours, Simple' ethos into an
                  approachable rounded P-mark emblem, an Electric Violet and
                  Emerald Green palette, Outfit and Inter typography rules, SEGA
                  co-branding frameworks, Singapore business cards, and outdoor
                  street billboards.
                </>
              ) : isFlex ? (
                <>
                  In high-performance sportswear, visual precision is
                  inseparable from technical mastery. We partnered with Flex to
                  construct an{" "}
                  <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-medium">
                    iconic kinetic brand identity & 67-page guideline system
                  </span>{" "}
                  translating their 'All motion, no distractions' philosophy
                  into an aerodynamic geometric emblem, a high-contrast Sierra
                  Orange and Charcoal color hierarchy, editorial photography
                  direction, and tactile retail packaging.
                </>
              ) : isLgmAviation ? (
                <>
                  When an aircraft is grounded, every hour costs tens of
                  thousands across crews, flight slots, and passenger
                  disruption. We partnered with LGM Aviation to craft a{" "}
                  <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-medium">
                    high-conviction aerospace narrative
                  </span>{" "}
                  translating rapid AOG response protocols, certified engine and
                  airframe spares sourcing, and transatlantic logistics into an
                  authoritative pitch deck tailored for global airlines, asset
                  lessors, and premier MRO facilities.
                </>
              ) : isRolandDonald ? (
                <>
                  Cross-border transactions demand unassailable conviction and
                  financial clarity. We partnered with Roland Donald Advisory to
                  craft a{" "}
                  <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-medium">
                    high-conviction executive pitch deck
                  </span>{" "}
                  translating institutional M&A credentials, private equity
                  mandates, and capital restructuring strategies into an
                  authoritative presentation tailored for sovereign wealth funds
                  and global enterprise boards.
                </>
              ) : isAxorix ? (
                <>
                  Axorix was conceived to liberate decentralized finance from
                  complexity—allowing anyone to trade, stake, and route
                  liquidity with algorithmic intelligence. We partnered with the
                  founding protocol team to craft a high-contrast visual
                  identity and omnichannel brand system that bridges
                  high-frequency cryptographic engineering with sleek streetwear
                  aesthetics, articulating their AI-powered DeFi protocol across
                  web apps, trading dashboards, social media, and luxury
                  merchandise.
                </>
              ) : isNodaliq ? (
                <>
                  NODALiQ was founded on a singular engineering insight: as
                  cloud networks scale into millions of concurrent telemetry
                  streams, diagnostic triage can no longer rely on fragmented
                  legacy dashboards. We partnered with the founding engineering
                  team to construct a comprehensive visual identity and design
                  system that bridges complex physical network hardware with
                  effortless digital clarity, articulating their autonomous
                  LabAI-aaS platform across digital, tactile, and architectural
                  touchpoints.
                </>
              ) : isNexa ? (
                <>
                  In high-frequency cryptocurrency markets, every millisecond counts and clarity is paramount. Most mobile trading apps overwhelm users with cluttered order books and lagging execution. We partnered with Nexa to engineer a{" "}
                  <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-medium">
                    next-generation trading terminal
                  </span>{" "}
                  combining institutional-grade telemetry, real-time depth analysis, and instant biometric execution in a clean, effortless mobile interface.
                </>
              ) : isMindspace ? (
                <>
                  Mental wellbeing requires an interface that listens before it speaks. In an era where digital noise causes acute cognitive fatigue, Mindspace creates a quiet sanctuary. We engineered an empathetic mobile ecosystem combining{" "}
                  <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-medium">
                    dynamic emotional valence tracking
                  </span>{" "}
                  with clinically verified cognitive behavioral grounding routines.
                </>
              ) : isLiveArena ? (
                <>
                  Every second on the pitch holds unbearable drama, yet traditional streaming apps bury the action under broadcast delay and clutter. We partnered with LiveArena to build an{" "}
                  <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-medium">
                    ultra-low-latency sports platform
                  </span>{" "}
                  that puts supporters on the frontline of every goal, tackle, and tactical substitution with zero friction.
                </>
              ) : isBluemore ? (
                <>
                  There is a version of a holiday where nothing is asked of you:
                  no queues, no schedules, no decisions you did not want to
                  make—only water, light, and a crew that knows what you need
                  before you say it. We partnered with Blue More Yachting to
                  craft a{" "}
                  <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-medium">
                    high-conviction maritime narrative
                  </span>{" "}
                  translating 14 years of East Mediterranean seafaring, rigorous
                  vessel vetting, and bespoke itinerary design into an
                  authoritative presentation that commands client confidence and
                  partner prestige.
                </>
              ) : isEuphorixz ? (
                <>
                  Living your best life means having the tools to thrive—whether
                  you're navigating post-meal glucose spikes, recovering after
                  an epic night out, or optimizing daily vitality. We partnered
                  with Euphorixz to translate complex metabolic endocrinology
                  and adaptogenic recovery science into a{" "}
                  <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-medium">
                    high-conviction brand and investor presentation
                  </span>{" "}
                  that commands retail authority, validates clinical
                  ingredients, and connects with modern health-conscious
                  consumers.
                </>
              ) : isDriveberry ? (
                <>
                  Buying a car is the easy part—owning one is where the trouble
                  begins. When a warning light flashes or an unfamiliar noise
                  appears, drivers face opaque pricing, diagnostic uncertainty,
                  and anxiety over which workshop to trust. We partnered with
                  DriveBerry to craft a{" "}
                  <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-medium">
                    high-conviction venture narrative
                  </span>{" "}
                  where complex OBD-II sensor diagnostics are translated into an
                  intuitive consumer experience and a scalable garage
                  monetization model.
                </>
              ) : (
                <>
                  Paradise rarely needs branding; it just needs recognition.
                  KNKO Bureau demanded that their fifteen-year legacy was not
                  just seen as technical architecture and built structures, but
                  felt as an institutional asset. We responded with a{" "}
                  <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-medium">
                    high-conviction strategic narrative
                  </span>{" "}
                  where every slide commands investor authority without
                  shouting.
                </>
              )}
            </p>
          </div>

          {/* ADD SLIDE 2ND (Slide 2 - Framed in crisp white context) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="my-12 md:my-20"
          >
            <div
              className="relative w-full aspect-[16/9.2] max-h-[720px] rounded-[8px] md:rounded-[10px] overflow-hidden border border-black/[0.08] shadow-[0_25px_70px_rgba(0,0,0,0.12)] group bg-black cursor-pointer"
              onClick={() => setLightboxImage(slide2Src)}
            >
              <img
                src={slide2Src}
                alt={
                  isAura
                    ? "Slide 4: Core Philosophy — Intentional Clarity & Human Radiance"
                    : isAtma
                      ? "Slide 4: Crafted Living with Soul: Modern Furniture & Interior Architecture"
                      : isPypo
                        ? "Slide 4: Core Values: Friendly, Simple, Trustworthy, Playful"
                        : isFlex
                          ? "Slide 4: Essential Elements: Brand Toolkit, Palette & Character"
                          : isLgmAviation
                            ? "Slide 2: An Aircraft on the Ground Stops Earning Immediately"
                            : isRolandDonald
                              ? "Slide 2: Executive Overview: Transaction Credentials & Advisory Pillars"
                              : isAxorix
                                ? "Slide 2: AI-Powered DeFi Protocol: Guidelines, Typography & Token Specifications"
                                : isNodaliq
                                  ? "Slide 2: The Overview: Reimagine The Modern Network Lab With AI"
                                  : isNexa
                                     ? "Slide 2: Fluid Mobile Onboarding & Market Access"
                                     : isMindspace
                                    ? "Slide 2: Welcome to Mindspace — Begin Your Journey to Mental Clarity"
                                    : isLiveArena
                                      ? "Slide 2: Never Miss A Moment — Instant Access to Premier Global Leagues"
                                      : isBluemore
                                    ? "Slide 2: Escape The Noise Of The World. That Is The Journey We Build."
                                    : isEuphorixz
                                      ? "Slide 2: Living Your Best Life — Two Core Products"
                                      : isDriveberry
                                        ? "Slide 2: Buying A Car Is The Easy Part"
                                        : "Slide 2: Fifteen Years Of Built Work"
                }
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                width="1920" height="1080" loading="eager"
              />
              <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-mono text-white/90 border border-white/20 shadow-lg">
                {isAura
                  ? "Brand Philosophy · Slide 04"
                  : isAtma
                    ? "Crafted Living · Slide 04"
                    : isPypo
                      ? "Core Values · Slide 04"
                      : isFlex
                        ? "Essential Elements · Slide 04"
                        : isLgmAviation
                          ? "AOG Challenge · Slide 02"
                          : isRolandDonald
                            ? "Executive Overview · Slide 02"
                            : isAxorix
                              ? "Brand Guidelines · Slide 02"
                              : isNodaliq
                                ? "The Overview · Slide 02"
                                : isNexa
                                   ? "Market Onboarding · Slide 02"
                                   : isMindspace
                                  ? "Emotional Onboarding · Slide 02"
                                  : isLiveArena
                                    ? "Arena Onboarding · Slide 02"
                                    : isBluemore
                                  ? "Brand Manifesto · Slide 02"
                                  : isEuphorixz
                                    ? "Core Products · Slide 02"
                                    : isDriveberry
                                      ? "The Driver Reality · Slide 02"
                                      : "Practice Heritage · Slide 02"}
              </div>
            </div>
          </motion.div>

          {/* Problem Header + 3 Problem Cards */}
          <div className="mt-20 md:mt-28 max-w-[1160px] mx-auto">
            <div className="text-center max-w-[800px] mx-auto mb-14">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-red font-semibold block mb-2">
                Challenge Breakdown
              </span>
              <h3 className="text-[34px] sm:text-[44px] font-bold text-[#0A0A0B] tracking-tight mb-4">
                The{" "}
                <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent">
                  Problem
                </span>
              </h3>
              <p className="text-[17px] sm:text-[19px] text-[#52525B] leading-relaxed font-light">
                {isAura
                  ? "Developer-centric software is burdened by cold, impenetrable visual systems, poor accessibility contrast ratios, and fragmented UI components that alienate non-technical creators and introduce design debt."
                  : isAtma
                    ? "Modern furniture branding is trapped between cold, sterile digital minimalism that ignores the warmth of natural wood, and nostalgic craft tropes that lack the authority to command international luxury showrooms and architectural specifications."
                    : isPypo
                      ? "Creative agencies frequently struggle with brand tone—oscillating between unapproachable corporate stiffness and chaotic, undisciplined design trends that break down when co-branding with major entertainment partners like SEGA."
                      : isFlex
                        ? "Athletic performance brands face extreme visual congestion, generic heritage swooshes, and disjointed brand tokens across digital e-commerce, street billboards, and technical garment manufacturing that undermine brand authority."
                        : isLgmAviation
                          ? "Aircraft-on-ground (AOG) events escalate in hours, compounding expenses across flight slots, standby crew hours, and passenger disruption. Operators face stretched lead times, misplaced inventory, and static catalog brokers that fail when responsiveness matters most."
                          : isRolandDonald
                            ? "Operating at the highest echelons of corporate finance requires eliminating all generic pitch elements. Sovereign wealth funds and institutional syndicates dismiss fragmented deal sheets, demanding absolute precision and mathematical rigor from the very first slide."
                            : isAxorix
                              ? "Decentralized finance has long been weighed down by generic crypto tropes, illegible neon gradients, and confusing technical noise that intimidate mainstream users and undermine institutional credibility."
                              : isNodaliq
                                ? "Telecommunications and hardware lab systems are plagued by legacy 1990s visual tropes, uncalibrated color values, and technical communication that conceals multi-million-dollar AI value propositions."
                                : isNexa
                                   ? "Cryptocurrency trading applications are burdened by cluttered desktop-density tables, confusing multi-step KYC flows, and opaque fee structures that cause trader fatigue and costly execution errors during volatile market breakouts."
                                   : isMindspace
                                  ? "Mental health applications are frequently designed like cold clinical spreadsheets or shallow survey tools, inducing anxiety rather than alleviating it, while failing to provide personalized, real-time emotional support."
                                  : isLiveArena
                                    ? "Live sports broadcasting on mobile is hindered by 30-second transmission latency, fragmented tactical statistics, and confusing multi-tiered subscription gates that cause massive drop-offs right before kickoff."
                                    : isBluemore
                                  ? "The private yacht charter market is rife with opaque broker networks, unpredictable vessel conditions, and rigid off-the-shelf itineraries that fail high-net-worth expectations."
                                  : isEuphorixz
                                    ? "Modern diets cause severe glucose fluctuations, brain fog, and chronic fatigue, while late-night culture leaves millions dealing with harsh next-day physical crashes and burnout."
                                    : isDriveberry
                                      ? "Breakdown anxiety, overbilling, and opaque repair quotes leave drivers answering blind. Over 75% of breakdowns could be prevented with earlier detection, yet drivers delay maintenance because the alternative feels unpredictably expensive."
                                      : "Luxury and calmness rarely sit in the same sentence, yet the architectural bureau demanded both at once. Balancing aesthetic mastery with institutional scale meant eliminating fragmented pitches and proving financial returns to tier-1 developers."}
              </p>
            </div>

            {/* 3 Problem Cards in White Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {isAura ? (
                <>
                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 01
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Sterile Developer Aesthetics
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Developer ecosystems frequently rely on drab, monochrome
                      terminal tropes that feel uninspired, intimidating, and
                      emotionally detached from real human creativity.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 02
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Accessibility & Contrast Failures
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Vibrant digital interfaces often fail WCAG contrast
                      audits, washing out subtle typography and rendering
                      critical UI states unreadable for users with visual
                      impairments.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 03
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Design Token Fragmentation
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Lacking unified token scales for button states, icon
                      geometry, and typographic hierarchy, products suffer from
                      inconsistent visual execution across web and mobile
                      surfaces.
                    </p>
                  </div>
                </>
              ) : isAtma ? (
                <>
                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 01
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Mass-Production Monotony
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Flat-pack aesthetics and ephemeral fast-furniture trends
                      have stripped modern living spaces of character, tactile
                      soul, and enduring heirloom value.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 02
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Spatial Interior Disconnect
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Branding engineered purely for smartphone screens fails to
                      harmonize with warm architectural spaces, solid timber
                      grains, and cast concrete.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 03
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Signage & Material Breakdown
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Fragile vector logos degrade when translated into milled
                      timber slat walls, 3D cantilevered storefront signs, and
                      debossed full-grain leather.
                    </p>
                  </div>
                </>
              ) : isPypo ? (
                <>
                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 01
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Intimidating Agency Posturing
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Traditional design studios present sterile, cold, and
                      overly rigid branding that creates friction with partners
                      and alienates forward-thinking collaborators.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 02
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Co-Branding Contrast Failure
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Lacking standardized clear-space and lockup formulas,
                      agency identities frequently clash or disappear when
                      paired alongside global entertainment titans like SEGA.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 03
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Fragmented Physical Collateral
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Inconsistent print execution across Singapore corporate
                      business cards, outdoor street billboards, and merchandise
                      eroded brand recognition across key global hubs.
                    </p>
                  </div>
                </>
              ) : isFlex ? (
                <>
                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 01
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Athletic Market Homogeneity
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Performance sportswear is saturated with repetitive
                      swooshes, italic slashes, and generic neon accents that
                      lack emotional endurance and memorable graphic
                      distinction.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 02
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Micro-Scale Garment Degradation
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Complex vector marks breakdown during silicone
                      heat-transfers, micro-embroidery on high-tension technical
                      fabrics, and dark compression textiles.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 03
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Omnichannel Disconnect
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Disjointed art direction across retail store fixtures,
                      e-commerce motion UI, and sustainable packaging created a
                      fractured customer experience across physical and digital
                      touchpoints.
                    </p>
                  </div>
                </>
              ) : isAxorix ? (
                <>
                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 01
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Crypto Clutter & Aesthetic Fatigue
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Web3 protocols universally rely on chaotic 3D blobs,
                      illegible glow effects, and complex terminology that
                      alienate mainstream capital and create instant cognitive
                      fatigue.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 02
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Multi-Scale Inconsistency
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Previous brand assets dissolved into illegible blur when
                      scaled down to 16px crypto wallet extension icons or
                      applied to physical hardware and merchandise.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 03
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Absence of Institutional Trust
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Without a disciplined design token hierarchy and
                      architectural typography, the protocol struggled to
                      command authority with tier-1 liquidity providers and
                      venture syndicates.
                    </p>
                  </div>
                </>
              ) : isNodaliq ? (
                <>
                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 01
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Legacy Hardware Aesthetics
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Traditional telecommunications branding has remained stuck
                      in 1990s industrial beige, obscuring the platform's
                      advanced AI capabilities from modern venture capital and
                      enterprise partners.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 02
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Multi-Context Scalability
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Previous logo explorations failed when miniaturized down
                      to 16px favicon coordinates or expanded onto corporate
                      server rack LED bezels.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 03
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Fragmented Visual Tokens
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Inconsistent color palettes and typographic hierarchies
                      between frontend telemetry dashboards and investor
                      presentation materials undermined market authority.
                    </p>
                  </div>
                </>
              ) : isLgmAviation ? (
                <>
                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 01
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Compounding AOG Costs
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Every hour an aircraft sits grounded drains tens of
                      thousands in gate fees, rescheduling penalties, and
                      passenger compensation while procurement teams search
                      disparate inventories.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 02
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Stretched Component Lead Times
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Global OEM bottlenecks and fragmented MRO supply chains
                      result in 16+ week repair turnaround times for
                      flight-critical rotable avionics, wheels, and hydraulics.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 03
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Multi-Vendor Disconnect
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Operators and lessors struggle with disconnected vendors
                      across rotable sourcing, repair certification tracking,
                      and end-of-life airframe consignment monetization.
                    </p>
                  </div>
                </>
              ) : isRolandDonald ? (
                <>
                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 01
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Cross-Border Asymmetry
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Multinational M&A transactions stall due to disparate
                      regulatory jurisdictions, currency risk, and misaligned
                      valuation methodologies across buyer syndicates.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 02
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Capital Structure Friction
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Sovereign funds and institutional PE sponsors reject
                      opaque debt modeling, requiring transparent EBITDA bridges
                      and senior debt tranche clarity.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 03
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Advisory Narrative Void
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      High-stakes deal credentials, partner track records, and
                      historical tombstones were buried across dense tables
                      rather than commanding boardroom gravitas.
                    </p>
                  </div>
                </>
              ) : isNexa ? (
                <>
                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 01
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Cluttered Order Book Interfaces
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Legacy exchange applications cram desktop-density tables into cramped mobile viewports, overwhelming users with visual noise and causing costly fat-finger errors during volatile breakouts.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 02
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      High-Friction Identity Verification
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Convoluted document scanning and delayed manual KYC checks cause up to 65% of eager retail traders to abandon the platform before placing their first trade.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 03
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Opaque Fee Structures & Slippage
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Hidden spread markups and unexpected network gas fees erode user confidence, driving active volume toward institutional OTC desks and rival platforms.
                    </p>
                  </div>
                </>
              ) : isMindspace ? (
                <>
                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 01
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Cold Clinical Therapy Interfaces
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Medical health apps intimidate users with sterile questionnaires and diagnostic jargon, creating high cognitive friction when individuals are experiencing acute stress or panic.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 02
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Fragmented Mood & Breath Tracking
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Users are forced to juggle disparate tools for meditation, mood journaling, and breathwork, losing holistic historical context and failing to build consistent daily routines.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 03
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      One-Size-Fits-All Chatbots
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Generic conversational agents offer robotic, repetitive advice without understanding situational sentiment, leading to user disengagement during critical moments of vulnerability.
                    </p>
                  </div>
                </>
              ) : isLiveArena ? (
                <>
                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 01
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Broadcast Latency & Social Spoilers
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Conventional video streams lag 30 to 45 seconds behind live stadium action, allowing push alerts and chat messages to spoil goals and penalty decisions before they appear on screen.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 02
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Fragmented Match Telemetry
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Supporters constantly toggle between separate scoreboards, heatmaps, and news feeds because current video platforms offer zero synchronized tactical intelligence.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 03
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Opaque Sports Pass Checkout
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Complicated multi-tier packages, hidden blackout restrictions, and slow multi-step checkout flows cause massive subscriber churn in the final minutes before opening kickoff.
                    </p>
                  </div>
                </>
              ) : isBluemore ? (
                <>
                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 01
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Fragmented Broker Intermediaries
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Prospective charter guests endure slow communication,
                      unvetted middle brokers, and hidden markups with zero
                      accountability once out at sea.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 02
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Inconsistent Vessel & Crew Quality
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Glossy brochures often mask outdated cabins, maintenance
                      red flags, or inexperienced crews that compromise privacy,
                      luxury, and safety.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 03
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Rigid, Generic Itineraries
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Standard charter routes herd guests through crowded
                      tourist ports rather than tailoring voyages around secret
                      bays, wind conditions, and quiet anchorages.
                    </p>
                  </div>
                </>
              ) : isEuphorixz ? (
                <>
                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 01
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Glucose Volatility & Insulin Fatigue
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Consuming high-glycemic foods causes rapid blood sugar
                      spikes, insulin resistance, brain fog, and constant
                      post-meal energy crashes.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 02
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Harsh Post-Event Come-Downs
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      After late-night festivals and events, dehydration,
                      neurotransmitter depletion, and elevated cortisol leave
                      the body exhausted and non-functional.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 03
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Supplement Market Skepticism
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Conventional dietary supplements rely on proprietary
                      blends filled with artificial fillers, lacking transparent
                      clinical dosages and clean formulations.
                    </p>
                  </div>
                </>
              ) : isDriveberry ? (
                <>
                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 01
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Breakdown Anxiety & Asymmetry
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Warning lights flash with zero clarity on severity or
                      cost. Drivers answer blind, risking catastrophic engine
                      failure or paying for guesswork.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 02
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Wild Quote Variance & Overbilling
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Quotes vary wildly for the exact same job with zero
                      benchmarks, forcing drivers to gamble on workshop
                      integrity without comparison data.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 03
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Avoidable Damage & Delayed Care
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Around 75% of breakdowns could be avoided with early
                      detection, yet drivers postpone servicing because the
                      alternative feels unpredictable.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 01
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Fragmented Pitch Materials
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Fifteen years of prestige were buried across isolated
                      project sheets, making institutional scale and
                      practice-wide capability invisible.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 02
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Financial Model Opacity
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Institutional developers and private equity partners could
                      not evaluate EBITDA yields, recurring retainers, or
                      multi-year pipeline velocity.
                    </p>
                  </div>

                  <div className="rounded-lg border border-red/20 bg-[#FFF5F5] p-7 shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-red/15 text-red text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Problem 03
                    </span>
                    <h4 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      Unanchored Positioning
                    </h4>
                    <p className="text-[14.5px] text-[#52525B] leading-relaxed">
                      Presentations focused solely on artistic aesthetics rather
                      than scalable developer partnerships, governance, and
                      commercial returns.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 3: ADD SLIDE 3 + WEBSITE GRADIENT SECTION        */}
      {/*            (Vibrant Coral-to-Red Brand Gradient!)        */}
      {/* ======================================================== */}
      <section className="bg-gradient-to-br from-coral via-[#E24A38] to-red text-white py-20 md:py-28 relative overflow-hidden shadow-2xl">
        {/* Soft Background Radial Lighting */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12 relative z-10">
          {/* ADD SLIDE 3 (Slide 3 framed inside the gradient section) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="mb-16 md:mb-24"
          >
            <div
              className="relative w-full aspect-[16/9.2] max-h-[720px] rounded-[8px] md:rounded-[10px] overflow-hidden border border-white/30 shadow-[0_30px_90px_rgba(0,0,0,0.35)] group bg-black cursor-pointer"
              onClick={() => setLightboxImage(slide3Src)}
            >
              <img
                src={slide3Src}
                alt={
                  isAura
                    ? "Slide 7: Color Usage: Aura Black, Pure Light, Electric Neon, Sunset Glow, and Warm Ochre"
                    : isAtma
                      ? "Slide 11: Logo on Backgrounds: Obsidian Slate, Walnut Brown, Deep Espresso Maroon & White"
                      : isPypo
                        ? "Slide 7: Logo Variations & SEGA Co-Branding Framework"
                        : isFlex
                          ? "Slide 22: Logo Color Rules: Signature Sierra, Charcoal & White Contrast Systems"
                          : isLgmAviation
                            ? "Slide 4: Three Divisions. Three Continents. One Standard."
                            : isRolandDonald
                              ? "Slide 12: Capital Restructuring Architecture & Senior Debt Framework"
                              : isAxorix
                                ? "Slide 3: High-Contrast Acid Yellow Display Architecture & Interface Swap"
                                : isNodaliq
                                  ? "Slide 3: Identity Construction: Logo Node Mark & Precision Grid"
                                  : isNexa
                                       ? "Slide 3: Biometric Security & Streamlined Identity Verification"
                                       : isMindspace
                                    ? "Slide 3: Cognitive Tailoring — Adaptive AI Tone & Personalization Intake"
                                    : isLiveArena
                                      ? "Slide 3: High-Bitrate Live Match Streaming with Instant Tactical Timeline"
                                      : isBluemore
                                    ? "Slide 3: Fourteen Years Of The East Mediterranean — 242 Yachts Curated"
                                    : isEuphorixz
                                      ? "Slide 3: Glucose's Role In The Body & Insulin Resistance"
                                      : isDriveberry
                                        ? "Slide 3: What Drivers Are Up Against"
                                        : "Slide 3: Strategy 2026-2030"
                }
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                width="1920" height="1080" loading="eager"
              />
              <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-mono text-white/90 border border-white/20 shadow-lg">
                {isAura
                  ? "Color Usage · Slide 07"
                  : isAtma
                    ? "Logo Backgrounds · Slide 11"
                    : isPypo
                      ? "Co-Branding · Slide 07"
                      : isFlex
                        ? "Logo Color Rules · Slide 22"
                        : isLgmAviation
                          ? "Three Divisions · Slide 04"
                          : isRolandDonald
                            ? "Capital Restructuring · Slide 12"
                            : isAxorix
                              ? "Protocol Showcase · Slide 03"
                              : isNodaliq
                                ? "Node Mark Precision · Slide 03"
                                : isNexa
                                   ? "Biometric Security · Slide 03"
                                   : isMindspace
                                  ? "Personalization Flow · Slide 03"
                                  : isLiveArena
                                    ? "Match Center · Slide 03"
                                    : isBluemore
                                  ? "Fleet Heritage · Slide 03"
                                  : isEuphorixz
                                    ? "Metabolic Science · Slide 03"
                                    : isDriveberry
                                      ? "Market Pain Points · Slide 03"
                                      : "Strategy & Scale · Slide 03"}
              </div>
            </div>
          </motion.div>

          {/* Solution Heading + 3 Frosted Glass Solution Cards */}
          <div className="max-w-[1160px] mx-auto">
            <div className="text-center max-w-[820px] mx-auto mb-14">
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/90 font-bold block mb-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md inline-block">
                Strategic Resolution
              </span>
              <h3 className="text-[34px] sm:text-[46px] font-bold text-white tracking-tight mb-4 drop-shadow-sm">
                The Solution
              </h3>
              <p className="text-[18px] sm:text-[20px] text-white/95 leading-relaxed font-light drop-shadow-sm">
                {isAura
                  ? "An accessible, human-centric design system founded on the philosophy of 'Engineering Radiance.' Aura unites a geometric angled monogram, a high-contrast spectral color hierarchy, Host Grotesk typography rules, and an exhaustive 25-page style guide manual spanning responsive web interfaces, developer tooling, 24px icon grids, and social campaign assets."
                  : isAtma
                    ? "An intentional architectural design system founded on the philosophy of 'Crafted Living with Soul.' ATMA unites a sculptural typographic wordmark, an earth-anchored color hierarchy, Satoshi and Inter typography rules, and an exhaustive 41-page brand guidelines manual spanning solid timber packaging, tactile retail signboards, and outdoor street presence."
                    : isPypo
                      ? "A warm, human-first design system founded on the philosophy of 'Friendly, Yours, Simple.' Pypo unites an approachable rounded P-emblem mark, vibrant Electric Violet (#774CFF) and Emerald Green (#2CDA8B) palette rules, and an exhaustive 25-page guidebook spanning print, digital UI, and physical merchandise."
                      : isFlex
                        ? "An aerodynamic, kinetic design system founded on the philosophy of 'All motion, no distractions.' Flex unites an iconic geometric emblem, signature Sierra Orange palette architecture, and an exhaustive 67-page guideline framework across digital, print, and sustainable apparel packaging."
                        : isLgmAviation
                          ? "A responsive, independent aerospace infrastructure delivering 24/7/365 worldwide support. LGM Aviation unifies UK operations, Miami distribution, and UAE capital trading into an agile partner that answers at 03:00 and follows through."
                          : isRolandDonald
                            ? "A quiet, commanding executive presentation framework engineered for sovereign fund meetings and boardrooms. Swiss-inspired typography, structured financial hierarchy, and custom transaction tombstones articulate $1.2B+ in cumulative deal velocity."
                            : isAxorix
                              ? "A high-fashion, mathematical brand architecture that projects razor-sharp cryptographic authority. Axorix unites an aerodynamic 4-point star beacon, an industrial metallic token mark, and high-voltage Electric Acid Yellow accents."
                              : isNodaliq
                                ? "A mathematical identity system engineered for extreme clarity across physical and digital scales. NODALiQ unites an 8×8 coordinate node mark, high-contrast dark tokens, and architectural signage guidelines."
                                : isNexa
                                   ? "A high-precision mobile crypto trading terminal combining sub-millisecond order execution, live candlestick depth telemetry, multi-asset digital vaults, and fortified biometric onboarding."
                                   : isMindspace
                                  ? "A comforting, intelligent mental wellbeing architecture built for emotional resilience. Mindspace combines adaptive conversational tone states, interactive clinical breathwork protocols, and client-side encrypted mood telemetry."
                                  : isLiveArena
                                    ? "A high-velocity mobile stadium architecture engineered for instant action. LiveArena combines sub-800ms WebRTC video streams, interactive tactical pitch diagrams, and single-tap match day pass checkout."
                                    : isBluemore
                                  ? "A week at sea should be effortless for the guest and exacting for everyone behind the scenes. Blue More Yachting provides dedicated single-broker guidance, 100% personally inspected yachts, and end-to-end white-glove concierge logistics."
                                  : isEuphorixz
                                    ? "Two targeted, 100% vegan, science-backed product lines engineered to restore metabolic balance and eliminate next-day burnout with clinically studied plant extracts."
                                    : isDriveberry
                                      ? "Anticipate instead of react. That is the whole idea. DriveBerry bridges the information gap with instant AI diagnostics, on-site BerryScan telemetry, and transparent, fixed-price quotes from a pre-vetted national network of certified garages."
                                      : "The answer was restraint, not excess. Every design element leaned into clarity rather than spectacle, letting architectural mastery lead. High-contrast typography and rigorous financial models combined to build an institutional-grade story."}
              </p>
            </div>

            {/* 3 Frosted Glass Cards in Gradient Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {isAura ? (
                <>
                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 01
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Geometric Angled Monogram
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      A distinctive sharp-angled 'A' monogram paired with a
                      custom geometric wordmark, engineered with mathematical
                      balance to scale effortlessly from 16px favicons to
                      high-impact billboards.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 02
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Spectral Contrast Hierarchy
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      A WCAG AAA-compliant color architecture featuring deep
                      Aura Black (#111111), Pure Light (#FFFFFF), vibrant
                      Electric Neon (#CCFF00), Sunset Glow (#FF5500), and warm
                      Ochre (#D97706).
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 03
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      25-Page Design System
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Exhaustive design specifications across Host Grotesk
                      typography scale, component tokens, 24px icon geometry,
                      dark & light mode tokens, button interaction states, and
                      digital layouts.
                    </p>
                  </div>
                </>
              ) : isAtma ? (
                <>
                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 01
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Sculptural ATMA Wordmark
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Custom architectural letterforms with a distinctive
                      diagonal slash through the 'M', calibrated to balance
                      timeless organic warmth with structural, stone-carved
                      permanence.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 02
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Earth-Anchored Color Hierarchy
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      A grounded natural palette pairing Obsidian Slate
                      (#2F2E2C), Warm Walnut Brown (#564334), and Espresso
                      Maroon (#442827) in calibrated 25% ratios with Olive and
                      Linen White.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 03
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      41-Page Architectural System
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Exhaustive design specifications across Satoshi and Inter
                      typography, wood slat storefront signboards, debossed
                      leather labels, social media feeds, and cast concrete
                      billboards.
                    </p>
                  </div>
                </>
              ) : isPypo ? (
                <>
                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 01
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      The Rounded P-Mark
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      An inviting, friendly geometric emblem designed with soft
                      curvature and balanced proportions, communicating
                      optimism, creative playfulness, and immediate warmth.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 02
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Electric Violet & Emerald
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      A high-contrast palette pairing Electric Violet (#774CFF)
                      and Emerald Green (#2CDA8B) with Athens Gray and deep
                      Vulcan dark obsidian for vibrant, welcoming digital
                      interfaces.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 03
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      25-Page Guidebook Suite
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Rigorous co-branding lockup rules with SEGA, Outfit and
                      Inter typography hierarchy, 3D unboxing packaging, social
                      media feed templates, and street billboards.
                    </p>
                  </div>
                </>
              ) : isFlex ? (
                <>
                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 01
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Aerodynamic Kinetic Mark
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      A symmetrical aerodynamic kinetic emblem capturing human
                      compression and explosive motion, engineered with bold
                      vector geometry that maintains legibility from 12px tags
                      to stadium billboards.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 02
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Signature Sierra Color System
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      A disciplined high-energy color palette anchoring vibrant
                      Sierra Orange with Deep Charcoal and Optical White,
                      calibrated for high-contrast visibility across athletic
                      photography and technical apparel.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 03
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Exhaustive 67-Page Guideline Suite
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Comprehensive design system rules codifying typography
                      leading, clear-space formulas, photographic split-frame
                      grids, and sustainable retail packaging specifications.
                    </p>
                  </div>
                </>
              ) : isAxorix ? (
                <>
                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 01
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      4-Point Star & Metallic Emblem
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      A dual-nature mark pairing a navigational four-point star
                      with a machined metallic coin core, symbolizing
                      algorithmic guidance and cryptographic liquid value.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 02
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Electric Acid Yellow Matrix
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      A high-voltage color palette pairing Electric Acid Yellow
                      (#E6FF00) with deep Obsidian Black and Stark Chrome White
                      for instant recognition across trading feeds.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 03
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Power Grotesk Typography
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      A bold, modern typographic hierarchy engineered for
                      high-density legibility across real-time yield curves,
                      liquidity swaps, and executive statements.
                    </p>
                  </div>
                </>
              ) : isNodaliq ? (
                <>
                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 01
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      8×8 Geometric Node Mark
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Engineered on a rigorous mathematical coordinate grid with
                      45° chamfers, communicating high-speed connectivity,
                      stability, and intelligent data routing.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 02
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      01–04 Token Architecture
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      A disciplined hexadecimal color hierarchy pairing deep
                      obsidian blacks with electric violet and white contrast,
                      optimized for low eye fatigue in engineering labs.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 03
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Omnichannel System Guidelines
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Complete vector logo suites, tactile business collateral
                      with micro-debossed grid coordinates, and large-format
                      keynote presentation stages.
                    </p>
                  </div>
                </>
              ) : isLgmAviation ? (
                <>
                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 01
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Transatlantic Spares Logistics
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Strategically positioned inventory across London Heathrow,
                      Miami, and Prague enabling sub-4-hour AOG dispatch with
                      dual-release FAA/EASA certifications.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 02
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      End-to-End Repair Management
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Turnkey rotable overhaul pipelines covering test, repair,
                      warranty tracking, and scrap replacement with audited
                      Tier-1 Part 145 repair stations.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 03
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Aviation Capital Monetization
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      High-yield inventory consignment programs, airframe
                      teardown monetization, and whole asset trading delivering
                      predictable liquidity for aircraft owners and lessors.
                    </p>
                  </div>
                </>
              ) : isRolandDonald ? (
                <>
                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 01
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Multi-Jurisdictional Valuation
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Standardized DCF scenarios, EBITDA normalizations, and
                      cross-border currency hedges structured for rapid
                      board-level consumption.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 02
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Capital Structure Optimization
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Senior debt tranche architecture, mezzanine financing, and
                      equity syndication models presented with unshakeable
                      institutional governance.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 03
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Executive Boardroom Gravitas
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      A cohesive 14-slide executive presentation system
                      engineered to inspire investor conviction, accelerate
                      close timelines, and win tier-1 mandates.
                    </p>
                  </div>
                </>
              ) : isNexa ? (
                <>
                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 01
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Sub-45ms Order Execution Engine
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Optimistic UI states and sub-second WebSockets order routing eliminate execution delay, allowing active traders to capture volatile price swings with zero slippage.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 02
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Progressive Biometric KYC & Security
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Biometric passkey and hardware-backed PIN verification cut onboarding time to under 90 seconds while maintaining bank-grade multi-signature vault compliance.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 03
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Transparent Liquidity & Asset Vaults
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Instant fee previews with upfront spread calculations, real-time depth telemetry, and automated multi-currency digital vaults supporting frictionless deposits.
                    </p>
                  </div>
                </>
              ) : isMindspace ? (
                <>
                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 01
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Adaptive Emotional Tone States
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      The AI companion shifts intelligently between Empathetic, Balanced, and Reflective modalities, meeting the user's psychological state without generic clichés.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 02
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Integrated 4-7-8 Breathwork & Audio
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Interactive animated lung expansions and voice journaling protocols activate the parasympathetic nervous system within seconds of acute stress.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 03
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Zero-Knowledge Health Encryption
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      AES-256 client-side encryption ensures user diary logs, emotional check-ins, and audio recordings remain strictly confidential and patient-controlled.
                    </p>
                  </div>
                </>
              ) : isLiveArena ? (
                <>
                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 01
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Sub-800ms WebRTC Video Delivery
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Proprietary low-latency video pipeline delivering 60 FPS HD streams perfectly in sync with stadium whistles, completely eliminating spoiler notifications.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 02
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Unified Tactical Command Center
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Live match timelines, top goal scorer tables, interactive substitution sheets, and player telemetry displayed right underneath the broadcast without obscuring the pitch.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 03
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Single-Tap Sports Pass Checkout
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Native Apple Pay, Google Pay, and biometric tokenized payments allow fans to acquire instant match day tickets or monthly passes in less than three seconds.
                    </p>
                  </div>
                </>
              ) : isBluemore ? (
                <>
                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 01
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      100% Personally Inspected Fleet
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Every gulet and motor yacht across Turkiye, Greece, and
                      Croatia is personally vetted for safety standards,
                      maintenance logs, and crew excellence.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 02
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Bespoke Route Architecture
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Custom itineraries charted from the ground up around your
                      pace, group preferences, and secret coves charter guides
                      never mention.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 03
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      White-Glove Onboard Concierge
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Dedicated brokers handling private transfers, arrival
                      logistics, shore reservations, gourmet private chefs, and
                      responsive mid-voyage requests.
                    </p>
                  </div>
                </>
              ) : isEuphorixz ? (
                <>
                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 01
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Glucose Anti-Spike Matrix
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Clinically proven Berberine (85mg), Mulberry Leaf (250mg),
                      and Lemon Extract slow carb digestion and reduce blood
                      sugar spikes by up to 40%.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 02
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      4-Stage Party Recovery System
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Five targeted capsules (Revive Me, Reset Me, Let Go,
                      Realign) combining adaptogens, magnesium bisglycinate, and
                      antioxidants to wake up feeling superhuman.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 03
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Clean, 100% Vegan Purity
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Zero artificial additives, synthetic fillers, or animal
                      gelatins—pure plant-based capsule shells with fully
                      transparent milligram dosages.
                    </p>
                  </div>
                </>
              ) : isDriveberry ? (
                <>
                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 01
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Instant Flash AI Diagnostics
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Free online diagnostic in under 2 minutes with 98%
                      reliability—drivers describe symptoms by text, audio, or
                      photo to decode faults.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 02
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      On-Site BerryScan Telemetry
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Deep OBD-II sensor diagnostics on-site by certified
                      specialists, pulling live operating data to deliver
                      vehicle health scores and triage.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 03
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Guaranteed Price Transparency
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Pre-negotiated pricing stored directly in the driver's
                      account, eliminating surprise overbilling and putting
                      control back in the driver's hands.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 01
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Unified Commercial Tiers
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Structured the practice into three clear commercial
                      offerings: Flagship Landmarks, Modular Packages, and
                      Public Infrastructure.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 02
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Transparent 5-Year Forecasts
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Engineered explicit financial models demonstrating revenue
                      scaling from €4.80m to €8.11m with gross margins expanding
                      to 48%.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-xl p-7 shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all">
                    <span className="inline-block px-3 py-1 rounded bg-white/25 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
                      Solution 03
                    </span>
                    <h4 className="text-[19px] font-bold text-white mb-2">
                      Executive Editorial Precision
                    </h4>
                    <p className="text-[14.5px] text-white/90 leading-relaxed font-light">
                      Crafted an authoritative editorial presentation language
                      with frosted data callouts and high-resolution spatial
                      photography.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 4: STYLE GUIDE & COMPONENT (4 SLIDES 2x2 GRID)   */}
      {/*            (DEEP DARK #0A0A0B WITH AMBIENT GLOW)         */}
      {/* ======================================================== */}
      <section className="bg-[#0A0A0B] text-white py-20 md:py-32">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12">
          <div className="rounded-[28px] md:rounded-[36px] border border-white/[0.12] bg-[#0E0E10] p-8 sm:p-10 md:p-14 relative overflow-hidden shadow-2xl">
            {/* Subtle Ambient Radial Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-coral/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 mb-12 text-center max-w-[700px] mx-auto">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-coral font-semibold block mb-2">
                {isAura
                  ? "Brand Guidelines · Slide 11-24"
                  : isAtma
                    ? "Brand Guidelines · Slide 18-37"
                    : isPypo
                      ? "Guidebook System · Slide 10-22"
                      : isFlex
                        ? "Identity System · Slide 15-66"
                        : isLgmAviation
                          ? "Aerospace Operations · Slide 05-08"
                          : isRolandDonald
                            ? "Advisory Architecture · Slide 03-08"
                            : isAxorix
                              ? "Brand Architecture · Slide 03-07"
                              : isNodaliq
                                  ? "Brand Architecture · Slide 05-08"
                                  : isMindspace
                                    ? "Empathetic Design System & Mobile Interfaces"
                                    : isLiveArena
                                      ? "Broadcast Architecture & Mobile Match Interfaces"
                                      : isBluemore
                                  ? "Fleet & Route Ecosystem"
                                  : isEuphorixz
                                    ? "Formulation Architecture"
                                    : isDriveberry
                                      ? "Platform Ecosystem"
                                      : "System & Architecture"}
              </span>
              <h2 className="text-[30px] sm:text-[38px] font-bold text-white tracking-tight">
                Style Guide &{" "}
                <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent">
                  {isAura
                    ? "Brand Architecture"
                    : isAtma
                      ? "Brand Architecture"
                      : isPypo
                        ? "Brand Architecture"
                        : isFlex
                          ? "Brand Architecture"
                          : isLgmAviation
                            ? "Operations Architecture"
                            : isRolandDonald
                              ? "Deal Architecture"
                              : isAxorix
                                ? "Design Architecture"
                                : isNodaliq
                                    ? "Design Architecture"
                                    : isMindspace
                                      ? "Sanctuary Ergonomics & Cognitive Components"
                                      : isLiveArena
                                        ? "Stadium Telemetry & High-Velocity UI System"
                                        : isBluemore
                                    ? "Fleet Architecture"
                                    : isEuphorixz
                                      ? "Formulation Systems"
                                      : isDriveberry
                                        ? "Platform Architecture"
                                        : "Component Architecture"}
                </span>
              </h2>
              <p className="text-[15px] sm:text-[16px] text-white/60 mt-2">
                {isAura
                  ? "Four core brand guideline modules detailing high-contrast spectral color systems, Host Grotesk typography scale, responsive digital interfaces, and physical brand collateral."
                  : isAtma
                    ? "Four core brand guideline modules detailing earth-anchored color theory, Satoshi display typography, curated social feeds, and cantilevered timber slat storefront signboards."
                    : isPypo
                      ? "Four core brand guideline modules detailing color theory, Outfit display typography, cohesive Instagram campaign feeds, and 3D unboxing packaging."
                      : isFlex
                        ? "Four core brand guideline modules detailing kinetic messaging, campaign color contexts, split-frame editorial grids, and sustainable packaging touchpoints."
                        : isLgmAviation
                          ? "Core aerospace slide modules detailing high-reliability part sales, repair management cycles, turnkey hangar logistics, and asset monetization frameworks."
                          : isRolandDonald
                            ? "Core executive slide modules detailing transaction credentials, cross-border M&A frameworks, syndicate allocation models, and senior debt structures."
                            : isAxorix
                              ? "Four core slide modules detailing primary wordmark specifications, constellation micro-grids, tablet workstation layouts, and mobile campaign cards."
                              : isNodaliq
                                  ? "Four core slide modules detailing emblem variations, grid usage contexts, brand color tokens, and geometric Mont typography."
                                  : isMindspace
                                    ? "Four core interface modules detailing daily valence logging, adaptive AI emotional dialogue, clinical analytics, and tailored personalization routines."
                                    : isLiveArena
                                      ? "Four core interface modules detailing fast mobile entry, passkey verification, live fixture statistics, and customizable supporter hubs."
                                      : isBluemore
                                  ? "Four core slide modules detailing vessel typologies, regional coastline distribution, custom navigation routes, and verified voyager reviews."
                                  : isEuphorixz
                                    ? "Four core slide modules detailing clinically studied active ingredients, consumer demographics, packaging tiers, and targeted recovery blends."
                                    : isDriveberry
                                      ? "Four core slide modules detailing user mission, four service horizons, BerryScan hardware telemetry, and quote transparency."
                                      : "Four key slide components illustrating market segmentation, commercial tiers, and EBITDA models."}
              </p>
            </div>

            {/* 4 Slides in 2x2 Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {isAura ? (
                <>
                  {/* Aura Slide 17: Accessibility Compliance */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() => setLightboxImage("/work/aura/Slide17.png")}
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/aura/Slide17.png"
                        alt="Slide 17: Accessibility Compliance: WCAG 2.1 AA Contrast Requirements"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 17
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Accessibility Compliance: WCAG 2.1 AA Contrast
                        Requirements
                      </h4>
                    </div>
                  </div>

                  {/* Aura Slide 8: Geometry & Clear Space */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() => setLightboxImage("/work/aura/Slide8.png")}
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/aura/Slide8.png"
                        alt="Slide 8: Geometry & Clear Space: Logo Construction Grid"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 8
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Geometry &amp; Clear Space: Logo Construction Grid
                      </h4>
                    </div>
                  </div>

                  {/* Aura Slide 23: Digital Product Mockup */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() => setLightboxImage("/work/aura/Slide23.png")}
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/aura/Slide23.png"
                        alt="Slide 23: Digital Product Mockup: Mobile App & Responsive Web Platform"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 23
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Digital Product Mockup: Mobile App &amp; Responsive Web
                        Platform
                      </h4>
                    </div>
                  </div>

                  {/* Aura Slide 24: Brand Collateral */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() => setLightboxImage("/work/aura/Slide24.png")}
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/aura/Slide24.png"
                        alt="Slide 24: Brand Collateral: Embossed Business Cards & Radiant Tote Bag"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 24
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Brand Collateral: Embossed Business Cards &amp; Radiant
                        Tote Bag
                      </h4>
                    </div>
                  </div>
                </>
              ) : isAtma ? (
                <>
                  {/* ATMA Slide 18: Primary Color Palette */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/atma/Primary Color.png")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/atma/Primary Color.png"
                        alt="Slide 18: Primary Palette: Black (#2F2E2C), Walnut Brown (#564334), Maroon (#442827)"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 18
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Primary Palette: Black (#2F2E2C), Walnut Brown
                        (#564334), Maroon (#442827)
                      </h4>
                    </div>
                  </div>

                  {/* ATMA Slide 24: Primary Typography */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/atma/Primary Typography.png")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/atma/Primary Typography.png"
                        alt="Slide 24: Primary Typography: Satoshi Sans Display Font Scale"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 24
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Primary Typography: Satoshi Sans Display Font Scale
                      </h4>
                    </div>
                  </div>

                  {/* ATMA Slide 33: Social Media Campaign Grid */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/atma/Social Media.png")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/atma/Social Media.png"
                        alt="Slide 33: Social Media Campaign: Curated Instagram Editorial Feed"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 33
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Social Media Campaign: Curated Instagram Editorial Feed
                      </h4>
                    </div>
                  </div>

                  {/* ATMA Slide 37: Architectural Spatial Signboard */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() => setLightboxImage("/work/atma/Signboard.png")}
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/atma/Signboard.png"
                        alt="Slide 37: Architectural Spatial Signboard: Milled Wood Slat Storefront"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 37
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Architectural Spatial Signboard: Milled Wood Slat
                        Storefront
                      </h4>
                    </div>
                  </div>
                </>
              ) : isPypo ? (
                <>
                  {/* Pypo Slide 10: Primary Color Palette */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() => setLightboxImage("/work/pypo/Slide10.PNG")}
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/pypo/Slide10.PNG"
                        alt="Slide 10: Primary Palette: Electric Violet (#774CFF) & Emerald Green (#2CDA8B)"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 10
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Primary Palette: Electric Violet (#774CFF) & Emerald
                        Green (#2CDA8B)
                      </h4>
                    </div>
                  </div>

                  {/* Pypo Slide 12: Primary Typeface */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() => setLightboxImage("/work/pypo/Slide12.PNG")}
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/pypo/Slide12.PNG"
                        alt="Slide 12: Primary Typeface: Google Outfit Display Typography"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 12
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Primary Typeface: Google Outfit Display Typography
                      </h4>
                    </div>
                  </div>

                  {/* Pypo Slide 20: Social Media Feed */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() => setLightboxImage("/work/pypo/Slide20.PNG")}
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/pypo/Slide20.PNG"
                        alt="Slide 20: Social Media Feed: Cohesive Instagram Campaign Grid"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 20
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Social Media Feed: Cohesive Instagram Campaign Grid
                      </h4>
                    </div>
                  </div>

                  {/* Pypo Slide 22: Product Packaging */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() => setLightboxImage("/work/pypo/Slide22.PNG")}
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/pypo/Slide22.PNG"
                        alt="Slide 22: Product Packaging: 3D Unboxing Box with Purple P-Mark"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 22
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Product Packaging: 3D Unboxing Box with Purple P-Mark
                      </h4>
                    </div>
                  </div>
                </>
              ) : isFlex ? (
                <>
                  {/* Flex Slide 15: Key Messaging */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() => setLightboxImage("/work/flex/15.png")}
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/flex/15.png"
                        alt="Slide 15: Key Messaging: All Motion, No Distractions"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 15
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Key Messaging: All Motion. No Distractions.
                      </h4>
                    </div>
                  </div>

                  {/* Flex Slide 30: Color in Context */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() => setLightboxImage("/work/flex/30.png")}
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/flex/30.png"
                        alt="Slide 30: Color Use in Context: Built to Perform. Designed to Move."
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 30
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Color Use in Context: Built to Perform. Designed to
                        Move.
                      </h4>
                    </div>
                  </div>

                  {/* Flex Slide 47: Split-Frame Photography & Grids */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() => setLightboxImage("/work/flex/47.png")}
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/flex/47.png"
                        alt="Slide 47: Split-Frame Photography & Typographic Layout Grids"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 47
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Split-Frame Photography & Typographic Layout Grids
                      </h4>
                    </div>
                  </div>

                  {/* Flex Slide 66: Retail Packaging */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() => setLightboxImage("/work/flex/66.png")}
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/flex/66.png"
                        alt="Slide 66: Product Packaging: Sierra Pulse Sustainable Box Suite"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 66
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Product Packaging: Sierra Pulse Sustainable Box Suite
                      </h4>
                    </div>
                  </div>
                </>
              ) : isAxorix ? (
                <>
                  {/* Axorix Slide 3: Primary Wordmark */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/axorix/axorix-03.webp")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/axorix/axorix-03.webp"
                        alt="Primary Mark: Axorix Wordmark & Metallic Token Emblem"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 03
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Primary Mark: Axorix Wordmark & Metallic Token Emblem
                      </h4>
                    </div>
                  </div>

                  {/* Axorix Slide 2: Constellation Grid */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/axorix/axorix-02.webp")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/axorix/axorix-02.webp"
                        alt="Geometric Matrix: Constellation Node & Precision Micro-Grid"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 04
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Geometric Matrix: Constellation Node & Precision
                        Micro-Grid
                      </h4>
                    </div>
                  </div>

                  {/* Axorix Slide 6: Digital Tablet */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/axorix/axorix-06.webp")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/axorix/axorix-06.webp"
                        alt="Digital Product Mockup: Tablet Interface & Ecosystem Overview"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 06
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Digital Product Mockup: Tablet Interface & Ecosystem
                        Overview
                      </h4>
                    </div>
                  </div>

                  {/* Axorix Slide 7: Mobile Campaign */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/axorix/axorix-07.webp")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/axorix/axorix-07.webp"
                        alt="Omnichannel Collateral: Mobile & Social Campaign Cards"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 07
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Omnichannel Collateral: Mobile & Social Campaign Cards
                      </h4>
                    </div>
                  </div>
                </>
              ) : isNodaliq ? (
                <>
                  {/* Nodaliq Slide 5: Colour Options */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/nodaliq/nodaliq-05.webp")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/nodaliq/nodaliq-05.webp"
                        alt="Colour Options: Six High-Contrast Emblem Variations"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 05
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Colour Options: Six High-Contrast Emblem Variations
                      </h4>
                    </div>
                  </div>

                  {/* Nodaliq Slide 6: Usage Contexts */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/nodaliq/nodaliq-06.webp")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/nodaliq/nodaliq-06.webp"
                        alt="Usage Contexts: Grid Construction & Web Interface"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 06
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Usage Contexts: Grid Construction & Web Interface
                      </h4>
                    </div>
                  </div>

                  {/* Nodaliq Slide 7: Brand Palette */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/nodaliq/nodaliq-07.webp")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/nodaliq/nodaliq-07.webp"
                        alt="Brand Palette: 01-04 Hexadecimal Token Architecture"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 07
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Brand Palette: 01-04 Hexadecimal Token Architecture
                      </h4>
                    </div>
                  </div>

                  {/* Nodaliq Slide 8: Typographic System */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/nodaliq/nodaliq-08.webp")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/nodaliq/nodaliq-08.webp"
                        alt="Typographic System: Mont Sans-Serif Typeface"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 08
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Typographic System: Mont Sans-Serif Typeface
                      </h4>
                    </div>
                  </div>
                </>
              ) : isLgmAviation ? (
                <>
                  {/* LGM Aviation Slide 5 */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/lgm-aviation/Slide5.PNG")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/lgm-aviation/Slide5.PNG"
                        alt="Slide 5: Part Sales: Smart Sourcing & Transatlantic Logistics"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 05
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Part Sales: Smart Sourcing & Transatlantic Logistics
                      </h4>
                    </div>
                  </div>

                  {/* LGM Aviation Slide 6 */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/lgm-aviation/Slide6.PNG")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/lgm-aviation/Slide6.PNG"
                        alt="Slide 6: Repair Management: Turnkey MRO & Component Overhaul"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 06
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Repair Management: Turnkey MRO & Component Overhaul
                      </h4>
                    </div>
                  </div>

                  {/* LGM Aviation Slide 7 */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/lgm-aviation/Slide7.PNG")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/lgm-aviation/Slide7.PNG"
                        alt="Slide 7: Materials & Logistics: Certified Inventory Programs"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 07
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Materials & Logistics: Certified Inventory Programs
                      </h4>
                    </div>
                  </div>

                  {/* LGM Aviation Slide 8 */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/lgm-aviation/Slide8.PNG")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/lgm-aviation/Slide8.PNG"
                        alt="Slide 8: LGM Aviation Capital: Asset Monetization & Trading"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 08
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        LGM Aviation Capital: Asset Monetization & Trading
                      </h4>
                    </div>
                  </div>
                </>
              ) : isRolandDonald ? (
                <>
                  {/* Roland Donald Slide 3 */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/roland-donald/Slide3.PNG")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/roland-donald/Slide3.PNG"
                        alt="Slide 3: Advisory Methodology & Corporate Governance"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 03
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Advisory Methodology & Deal Governance
                      </h4>
                    </div>
                  </div>

                  {/* Roland Donald Slide 4 */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/roland-donald/Slide4.PNG")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/roland-donald/Slide4.PNG"
                        alt="Slide 4: Sector Specialization & Enterprise Valuation"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 04
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Sector Specialization & Enterprise Valuation
                      </h4>
                    </div>
                  </div>

                  {/* Roland Donald Slide 7 */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/roland-donald/Slide7.PNG")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/roland-donald/Slide7.PNG"
                        alt="Slide 7: Senior Debt Restructuring Framework"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 07
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Senior Debt Restructuring Framework
                      </h4>
                    </div>
                  </div>

                  {/* Roland Donald Slide 8 */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/roland-donald/Slide8.PNG")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/roland-donald/Slide8.PNG"
                        alt="Slide 8: Private Equity Syndicate Allocation Models"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 08
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Private Equity Syndicate Allocation Models
                      </h4>
                    </div>
                  </div>
                </>
              ) : isNexa ? (
                <>
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/nexa/03-home-coin-detail-buy.png")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/nexa/03-home-coin-detail-buy.png"
                        alt="Real-Time Coin Detail & Interactive Price History"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Screen 03
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Real-Time Coin Detail & Interactive Price History
                      </h4>
                    </div>
                  </div>

                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/nexa/04-coin-transactions.png")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/nexa/04-coin-transactions.png"
                        alt="Frictionless Buy & Sell Execution"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Screen 04
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Frictionless Buy & Sell Execution with Zero Slippage
                      </h4>
                    </div>
                  </div>

                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/nexa/05-trade-execution.png")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/nexa/05-trade-execution.png"
                        alt="Precision Trade Execution & Order Confirmation"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Screen 05
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Precision Trade Execution & Instant Confirmation
                      </h4>
                    </div>
                  </div>

                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/nexa/06-wallet-deposit.png")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/nexa/06-wallet-deposit.png"
                        alt="Multi-Asset Digital Vault & Instant Deposit Review"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Screen 06
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Multi-Asset Digital Vault & Instant Deposit Review
                      </h4>
                    </div>
                  </div>
                </>
              ) : isMindspace ? (
                <>
                  {/* Mindspace Screen 1: Homepage Mood Checkin */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/mindspace/04-homepage-mood-checkin.png")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/mindspace/04-homepage-mood-checkin.png"
                        alt="Mood Tracking & Daily Calendar Check-In"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Screen 04
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Mood Tracking & Daily Calendar Check-In
                      </h4>
                    </div>
                  </div>

                  {/* Mindspace Screen 2: AI Therapy Chat */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/mindspace/05-ai-therapy-chat.png")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/mindspace/05-ai-therapy-chat.png"
                        alt="Empathetic AI Companion — Adaptive Emotional States"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Screen 05
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Empathetic AI Companion: Adaptive Emotional Tone States
                      </h4>
                    </div>
                  </div>

                  {/* Mindspace Screen 3: Daily Summary Emotions */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/mindspace/06-daily-summary-emotions.png")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/mindspace/06-daily-summary-emotions.png"
                        alt="Emotional Analytics & Daily Sentiment Summary"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Screen 06
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Emotional Analytics & Daily Sentiment Summary
                      </h4>
                    </div>
                  </div>

                  {/* Mindspace Screen 4: Personalization Loading */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/mindspace/03-personalization-loading.png")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/mindspace/03-personalization-loading.png"
                        alt="Dynamic Personalization & Real-Time Reflection Engine"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Screen 03
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Dynamic Cognitive Personalization Engine
                      </h4>
                    </div>
                  </div>
                </>
              ) : isLiveArena ? (
                <>
                  {/* LiveArena Screen 1: Auth Page 1 */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/livearena/02-auth-page-1.png")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/livearena/02-auth-page-1.png"
                        alt="Streamlined Sports Pass & Multi-Channel Authentication"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Screen 02
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Streamlined Sports Pass & Fast Phone Authentication
                      </h4>
                    </div>
                  </div>

                  {/* LiveArena Screen 2: Auth Page 2 */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/livearena/03-auth-page-2.png")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/livearena/03-auth-page-2.png"
                        alt="Biometric Login & Secure Passkey Verification"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Screen 03
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Biometric Passkey Security & Profile Verification
                      </h4>
                    </div>
                  </div>

                  {/* LiveArena Screen 3: Schedule Match Details */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/livearena/05-schedule-match-details.png")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/livearena/05-schedule-match-details.png"
                        alt="Fixtures, Top Scorers & Head-to-Head Statistics"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Screen 05
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Fixtures, Scorers & Head-to-Head Tactical Center
                      </h4>
                    </div>
                  </div>

                  {/* LiveArena Screen 4: Profile Settings User Info */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/livearena/07-profile-settings-user-info.png")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/livearena/07-profile-settings-user-info.png"
                        alt="Customizable Fan Hub & Club Preferences"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Screen 07
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Customizable Fan Hub & Supporter Notification Settings
                      </h4>
                    </div>
                  </div>
                </>
              ) : isBluemore ? (
                <>
                  {/* Blue More Slide 5 */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/bluemore/Slide5.PNG")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/bluemore/Slide5.PNG"
                        alt="Slide 5: Two Ways To Meet The Sea"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 05
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Two Ways To Meet The Sea: Gulet & Motor Yacht Typologies
                      </h4>
                    </div>
                  </div>

                  {/* Blue More Slide 6 */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/bluemore/Slide6.PNG")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/bluemore/Slide6.PNG"
                        alt="Slide 6: Three Coastlines, One Standard"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 06
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Three Coastlines, One Standard: 88 Turkiye, 62 Greece,
                        92 Croatia
                      </h4>
                    </div>
                  </div>

                  {/* Blue More Slide 7 */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/bluemore/Slide7.PNG")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/bluemore/Slide7.PNG"
                        alt="Slide 7: Your Journey, Your Map"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 07
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Your Journey, Your Map: Hidden Coves & Bespoke Routing
                      </h4>
                    </div>
                  </div>

                  {/* Blue More Slide 10 */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/bluemore/Slide10.PNG")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/bluemore/Slide10.PNG"
                        alt="Slide 10: Judged By The People Who Sailed"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 10
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Judged By The People Who Sailed: 5-Star Voyager
                        Testimonials
                      </h4>
                    </div>
                  </div>
                </>
              ) : isEuphorixz ? (
                <>
                  {/* Euphorixz Slide 4 */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/euphorixz/Slide4.PNG")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/euphorixz/Slide4.PNG"
                        alt="Slide 4: Take Control of Your Glucose"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 04
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Take Control of Your Glucose: Key Benefits & Efficacy
                      </h4>
                    </div>
                  </div>

                  {/* Euphorixz Slide 5 */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/euphorixz/Slide5.PNG")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/euphorixz/Slide5.PNG"
                        alt="Slide 5: Key Ingredients & Dosages"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 05
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Clinical Dosages: Berberine, Mulberry Leaf & Cinnamon
                      </h4>
                    </div>
                  </div>

                  {/* Euphorixz Slide 7 */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/euphorixz/Slide7.PNG")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/euphorixz/Slide7.PNG"
                        alt="Slide 7: The Party Recovery Set Formats"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 07
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Party Recovery Formats: Starter (€20), Popular (€33),
                        Value (€110)
                      </h4>
                    </div>
                  </div>

                  {/* Euphorixz Slide 8 */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/euphorixz/Slide8.PNG")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/euphorixz/Slide8.PNG"
                        alt="Slide 8: Four Targeted Blends, One Recovery"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 08
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Four Blends: Revive Me, Reset Me, Let Go, Realign
                      </h4>
                    </div>
                  </div>
                </>
              ) : isDriveberry ? (
                <>
                  {/* DriveBerry Slide 6 */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/driveberry/Slide6.PNG")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/driveberry/Slide6.PNG"
                        alt="Slide 6: Our Mission"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 06
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Our Mission: Transparency Sits At The Centre
                      </h4>
                    </div>
                  </div>

                  {/* DriveBerry Slide 7 */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/driveberry/Slide7.PNG")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/driveberry/Slide7.PNG"
                        alt="Slide 7: Four Ways We Support You"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 07
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Four Ways We Support Drivers: Flash, Pro, Maintenance,
                        CT
                      </h4>
                    </div>
                  </div>

                  {/* DriveBerry Slide 10 */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/driveberry/Slide10.PNG")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/driveberry/Slide10.PNG"
                        alt="Slide 10: Pro Diagnostic With BerryScan"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 10
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Pro Diagnostic: Live BerryScan Hardware Sensor
                      </h4>
                    </div>
                  </div>

                  {/* DriveBerry Slide 19 */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setLightboxImage("/work/driveberry/Slide19.PNG")
                    }
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/driveberry/Slide19.PNG"
                        alt="Slide 19: Transparency Is The Product"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 19
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Transparency Is The Product: Invoices & Fixed Quotes
                      </h4>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* KNKO Slide 4 */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() => setLightboxImage("/work/knko/Slide4.PNG")}
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/knko/Slide4.PNG"
                        alt="Slide 4: One Practice, Three Commercial Tiers"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 04
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        One Practice, Three Commercial Tiers
                      </h4>
                    </div>
                  </div>

                  {/* KNKO Slide 5 */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() => setLightboxImage("/work/knko/Slide5.PNG")}
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/knko/Slide5.PNG"
                        alt="Slide 5: Built For Developers"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 05
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Market & Customers: Built For Developers
                      </h4>
                    </div>
                  </div>

                  {/* KNKO Slide 6 */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() => setLightboxImage("/work/knko/Slide6.PNG")}
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/knko/Slide6.PNG"
                        alt="Slide 6: Financial Projections"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 06
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Financial Projections: €4.80m to €8.11m
                      </h4>
                    </div>
                  </div>

                  {/* KNKO Slide 8 */}
                  <div
                    className="group rounded-lg overflow-hidden border border-white/10 bg-black/60 shadow-lg hover:border-coral/40 transition-all duration-300 cursor-pointer"
                    onClick={() => setLightboxImage("/work/knko/Slide8.PNG")}
                  >
                    <div className="relative aspect-[16/9.2] overflow-hidden">
                      <img
                        src="/work/knko/Slide8.PNG"
                        alt="Slide 8: Strategic Recommendation"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width="1920" height="1080" loading="eager"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                        Slide 08
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10 bg-[#0E0E10]">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-coral transition-colors">
                        Quality Of Revenue Over Volume Of Work
                      </h4>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 5: WORKFLOW & DESIGN (BANNER SLIDE + WORKFLOW)   */}
      {/* ======================================================== */}
      <section className="bg-[#0E0E10] text-white py-20 md:py-28 border-y border-white/[0.06]">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 md:px-12">
          <div className="mb-10 text-center max-w-[760px] mx-auto">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-coral block mb-2">
              {isAura
                ? "Digital Systems & Responsive Layouts"
                : isAtma
                  ? "Spatial Collateral & Outdoor Presence"
                  : isPypo
                    ? "Environmental Collateral & Outdoor Presence"
                    : isFlex
                      ? "Photography Direction & Editorial Presence"
                      : isLgmAviation
                        ? "Aerospace Operations & Global Hubs"
                        : isRolandDonald
                          ? "Deal Execution & Syndicate Architecture"
                          : isAxorix
                            ? "Physical & Environmental Presence"
                            : isNodaliq
                                ? "Physical & Architectural Implementation"
                                : isNexa
                                    ? "Cryptocurrency Liquidity & Digital Vault Architecture"
                                    : isMindspace
                                  ? "Multimodal Breathwork & Audio Reflection Protocols"
                                  : isLiveArena
                                    ? "High-Conversion Sports Pass Checkout Architecture"
                                    : isBluemore
                                ? "Concierge Protocol & Charter Blueprint"
                                : isEuphorixz
                                  ? "Active Protocol & Lifestyle Fit"
                                  : isDriveberry
                                    ? "Technology & Operations Stack"
                                    : "Implementation Timeline"}
            </span>
            <h2 className="text-[32px] sm:text-[42px] font-bold text-white tracking-tight">
              Workflow &{" "}
              <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent">
                {isAura
                  ? "Interface Architecture"
                  : isAtma
                    ? "Spatial Architecture"
                    : isPypo
                      ? "Brand Presence"
                      : isFlex
                        ? "Brand Presence"
                        : isLgmAviation
                          ? "Mission Support"
                          : isRolandDonald
                            ? "Deal Architecture"
                            : isAxorix
                              ? "Brand Presence"
                              : isNodaliq
                                  ? "Architectural Presence"
                                  : isNexa
                                  ? "Terminal Architecture"
                                  : isMindspace
                                    ? "Mindful Protocols"
                                    : isLiveArena
                                      ? "Checkout Architecture"
                                      : isBluemore
                                  ? "Journey Architecture"
                                  : isEuphorixz
                                    ? "Target Demographics"
                                    : isDriveberry
                                      ? "Product Architecture"
                                      : "Design Execution"}
              </span>
            </h2>
          </div>

          {/* Prominent Slide Banner */}
          <div
            className="relative w-full aspect-[16/9.2] max-h-[720px] rounded-[8px] md:rounded-[10px] overflow-hidden border border-white/[0.12] shadow-2xl group bg-black cursor-pointer mb-12"
            onClick={() =>
              setLightboxImage(
                isAura
                  ? "/work/aura/Slide19.png"
                  : isAtma
                    ? "/work/atma/Billboards.png"
                    : isPypo
                      ? "/work/pypo/Slide21.PNG"
                      : isFlex
                        ? "/work/flex/51.png"
                        : isLgmAviation
                          ? "/work/lgm-aviation/Slide10.PNG"
                          : isRolandDonald
                            ? "/work/roland-donald/Slide13.PNG"
                            : isAxorix
                              ? "/work/axorix/axorix-05.webp"
                              : isNodaliq
                                  ? "/work/nodaliq/nodaliq-12.webp"
                                  : isNexa
                                      ? "/work/nexa/07-profile-settings.gif"
                                      : isMindspace
                                    ? "/work/mindspace/07-breathwork-journal.gif"
                                    : isLiveArena
                                      ? "/work/livearena/06-subscription-payment-flows.png"
                                      : isBluemore
                                        ? "/work/bluemore/Slide11.PNG"
                                  : isEuphorixz
                                    ? "/work/euphorixz/Slide9.PNG"
                                    : isDriveberry
                                      ? "/work/driveberry/Slide17.PNG"
                                      : "/work/knko/Slide7.PNG",
              )
            }
          >
            <img
              src={
                isAura
                  ? "/work/aura/Slide19.png"
                  : isAtma
                    ? "/work/atma/Billboards.png"
                    : isPypo
                      ? "/work/pypo/Slide21.PNG"
                      : isFlex
                        ? "/work/flex/51.png"
                        : isLgmAviation
                          ? "/work/lgm-aviation/Slide10.PNG"
                          : isRolandDonald
                            ? "/work/roland-donald/Slide13.PNG"
                            : isAxorix
                              ? "/work/axorix/axorix-05.webp"
                              : isNodaliq
                                  ? "/work/nodaliq/nodaliq-12.webp"
                                  : isNexa
                                      ? "/work/nexa/07-profile-settings.gif"
                                      : isMindspace
                                    ? "/work/mindspace/07-breathwork-journal.gif"
                                    : isLiveArena
                                      ? "/work/livearena/06-subscription-payment-flows.png"
                                      : isBluemore
                                        ? "/work/bluemore/Slide11.PNG"
                                  : isEuphorixz
                                    ? "/work/euphorixz/Slide9.PNG"
                                    : isDriveberry
                                      ? "/work/driveberry/Slide17.PNG"
                                      : "/work/knko/Slide7.PNG"
              }
              alt={
                isAura
                  ? "Slide 19: Digital Components & Layouts: Responsive Application Interface & Design Tokens"
                  : isAtma
                    ? "Slide 35: Architectural Spatial Presence: Monumental Outdoor Billboard on Cast Concrete"
                    : isPypo
                      ? "Slide 21: Environmental Collateral: Street Billboard, Brochure & Branded Tote Bag"
                      : isFlex
                        ? "Slide 51: Photography with Logo: High-Contrast Athlete Profiles in Studio & Nature"
                        : isLgmAviation
                          ? "Slide 10: Keeping Global Brands in the Sky — Endorsements"
                          : isRolandDonald
                            ? "Slide 13: Global Partner Presence & Sector Deal Tombstones"
                            : isAxorix
                              ? "Environmental Apparel: Premium Heavyweight Merchandising & Physical Touchpoints"
                              : isNodaliq
                                  ? "Architectural Signage: Modern Enterprise Headquarters Facade"
                                  : isNexa
                                      ? "Slide 8: Trader Profile Hub, Bank Accounts & System Notifications"
                                      : isMindspace
                                    ? "Slide 7: Breathwork Protocols (4-7-8, Belly, Resonant) & Encrypted Audio Recording"
                                    : isLiveArena
                                      ? "Slide 6: Multi-Currency Payment Methods, Card Tokenization & Order Confirmation"
                                      : isBluemore
                                  ? "Slide 11: Your Private Horizon Awaits — Start Planning"
                                  : isEuphorixz
                                    ? "Slide 9: Wake Up Without The Crash — Target Demographics"
                                    : isDriveberry
                                      ? "Slide 17: Mobile App — Everything In One Place"
                                      : "Implementation Roadmap 2026-2030"
              }
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              width="1920" height="1080" loading="eager"
            />
            <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-mono text-white/90 border border-white/15">
              {isAura
                ? "Interface Architecture · Slide 19"
                : isAtma
                  ? "Outdoor Presence · Slide 35"
                  : isPypo
                    ? "Environmental Collateral · Slide 21"
                    : isFlex
                      ? "Photography with Logo · Slide 51"
                      : isLgmAviation
                        ? "Client Endorsements · Slide 10"
                        : isRolandDonald
                          ? "Deal Tombstones · Slide 13"
                          : isAxorix
                            ? "Environmental Apparel · Slide 05"
                            : isNodaliq
                                  ? "Architectural Signage · Slide 12"
                                  : isNexa
                                      ? "Profile & Settings · Slide 08"
                                      : isMindspace
                                    ? "Breathwork Protocols · Slide 07"
                                    : isLiveArena
                                      ? "Sports Pass Checkout · Slide 06"
                                      : isBluemore
                                ? "Call To Action · Slide 11"
                                : isEuphorixz
                                  ? "Target Demographics · Slide 09"
                                  : isDriveberry
                                    ? "Centralized Telemetry · Slide 17"
                                    : "Implementation Roadmap · Slide 07"}
            </div>
          </div>

          {/* Workflow Concepts */}
          <div className="max-w-[880px] mx-auto text-left rounded-lg bg-white/[0.03] border border-white/[0.08] p-8 md:p-10 backdrop-blur-md">
            <h3 className="text-[22px] sm:text-[26px] font-bold text-white mb-4">
              {isAura
                ? "Engineering Radiance: From Core Monogram to Omnichannel Digital Products"
                : isAtma
                  ? "Material Honesty, Spatial Harmony & Architectural Presence"
                  : isPypo
                    ? "Human-First Brand Touchpoints & Environmental Collateral"
                    : isFlex
                      ? "Editorial Athlete Direction & Kinetic Art Direction"
                      : isLgmAviation
                        ? "Global Aerospace Operations & Airline Endorsements"
                        : isRolandDonald
                          ? "Institutional Credentials & Cross-Border Tombstones"
                          : isAxorix
                            ? "Bridging Decentralized Protocols with Modern Street Luxury"
                            : isNodaliq
                                  ? "From Lab Hardware Telemetry to Global Enterprise Signage"
                                  : isNexa
                                ? "High-Speed Order Routing & Multi-Asset Vault Architecture"
                                : isMindspace
                                    ? "End-to-End Cognitive Grounding & Reflection Flow"
                                    : isLiveArena
                                      ? "End-to-End Match Day Streaming & Checkout Pipeline"
                                      : isBluemore
                                ? "End-to-End White-Glove Maritime Operations"
                                : isEuphorixz
                                  ? "Targeted Formulations for Peak Performance & Nightlife"
                                  : isDriveberry
                                    ? "Unified Telemetry & Digital Workshop Workflow"
                                    : "Workflow Concepts"}
            </h3>
            {isAura ? (
              <>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light mb-4">
                  Aura's design system bridges developer productivity with
                  human-centric elegance. Moving away from cold, unintuitive
                  software aesthetics, the style guide establishes clear token
                  systems, harmonic spacing scales, and accessible color
                  combinations across responsive web applications, code editor
                  extensions, and mobile dashboards.
                </p>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light">
                  From responsive 12-column digital grids and high-density code
                  inspector interfaces to crisp 24px system iconography and
                  dynamic interactive button states, every touchpoint delivers
                  effortless clarity and radiant visual rhythm.
                </p>
              </>
            ) : isAtma ? (
              <>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light mb-4">
                  Brand implementation for ATMA bridges the tactile realities of
                  architectural spaces with contemporary living culture. Moving
                  away from generic flat-pack marketing, the design system pairs
                  solid walnut timbers, hand-buffed organic oils, and warm
                  ambient lighting to evoke feelings of calm permanence and
                  mindful living.
                </p>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light">
                  From monumental street billboards cast against raw brutalist
                  concrete to laser-milled timber slat facade signs and debossed
                  leather furniture tags, every environmental touchpoint honors
                  honest materials and intentional design.
                </p>
              </>
            ) : isPypo ? (
              <>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light mb-4">
                  Brand implementation for Pypo bridges physical and digital
                  everyday reality. Moving away from stiff agency posturing, the
                  guidebook mandates warm candid human photography, organic pill
                  and circle graphic systems, and tactile materials across
                  Singapore executive business cards, premium tote bags, and
                  notebooks.
                </p>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light">
                  From large-scale outdoor city billboards to high-density web
                  browser UI navigation bars and co-branded SEGA collaboration
                  collateral, every asset adheres to clear space rules and
                  optical balance formulas that ensure immediate warmth and
                  effortless recognition.
                </p>
              </>
            ) : isFlex ? (
              <>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light mb-4">
                  Performance photography at Flex is built on uncompromising
                  authenticity. Instead of sterile gym poses, the guideline
                  mandates dynamic motion blur, high-contrast directional
                  lighting, and genuine athletic effort across cycling, road
                  running, and high-intensity interval training.
                </p>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light">
                  From split-frame typography margins to embossed corrugated
                  packaging for the Sierra Pulse collection, every brand
                  touchpoint adheres to rigorous spatial formulas ensuring the
                  Flex mark commands premium recognition worldwide.
                </p>
              </>
            ) : isLgmAviation ? (
              <>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light mb-4">
                  Operating across three continents with dedicated teams in
                  London, Miami, and the UAE, LGM Aviation coordinates
                  time-critical aerospace logistics with zero margin for error.
                  From 24/7/365 emergency AOG desk dispatch to transatlantic
                  warehouse fulfillment at Heathrow and Miami, material moves
                  around the clock.
                </p>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light">
                  Verified endorsements from major carriers including easyJet,
                  DAE Capital, and Universal Air validate a supplier that works
                  well past expected service levels—providing airworthiness
                  certification, intelligent sourcing, and follow-through when
                  critical flight schedules are on the line.
                </p>
              </>
            ) : isRolandDonald ? (
              <>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light mb-4">
                  Operating at the highest echelons of corporate finance
                  requires eliminating all generic pitch elements. Sovereign
                  wealth funds and institutional syndicates dismiss fragmented
                  deal sheets, demanding absolute precision and mathematical
                  rigor from the very first slide.
                </p>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light">
                  From senior debt restructuring frameworks and EBITDA
                  reconciliation bridges to multi-jurisdiction transaction
                  tombstones, Roland Donald Advisory's deck provides
                  partner-level conviction across North American and European
                  boardrooms.
                </p>
              </>
            ) : isAxorix ? (
              <>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light mb-4">
                  Translating decentralized algorithmic intelligence into an
                  unmistakable cultural statement required designing beyond the
                  screen. We engineered the Axorix identity to perform
                  seamlessly across digital terminals and physical luxury
                  touchpoints—from high-density swap interfaces to premium
                  heavyweight embroidered streetwear.
                </p>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light">
                  Every touchpoint—from digital token launch assets and social
                  campaign graphics to high-profile summit apparel—reinforces
                  Axorix’s core thesis: making decentralized yield automation
                  look, feel, and function like an indispensable future
                  standard.
                </p>
              </>
            ) : isNodaliq ? (
              <>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light mb-4">
                  Translating complex network intelligence into a coherent
                  physical and digital identity required designing across
                  divergent scales. We developed unified design rules that apply
                  seamlessly from dense UI dashboards monitoring millions of
                  concurrent network packets to precision-milled architectural
                  aluminum signage on corporate research facilities.
                </p>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light">
                  Every asset—from tactile business collateral with
                  micro-debossed grid coordinates to ultra-widescreen keynote
                  presentations—embodies NODALiQ's core value proposition:
                  turning noisy telecom telemetry into automated, decisive
                  clarity for global infrastructure leaders.
                </p>
              </>
            ) : isNexa ? (
              <>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light mb-4">
                  Nexa operates on an optimized high-speed routing engine. When a trader opens the application, market feeds update via sub-millisecond WebSockets, instantly populating real-time depth and order book telemetry.
                </p>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light">
                  Order execution is streamlined into a seamless two-tap process with biometric authorization, automated best-price liquidity routing, and transparent fee schedules that eliminate slippage and latency risk.
                </p>
              </>
            ) : isMindspace ? (
              <>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light mb-4">
                  Mindspace operates on a synchronized four-phase therapeutic framework. When a user opens the application, the interface initiates an unobtrusive emotional intake, assessing current valence and physical sensation.
                </p>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light">
                  The AI companion dynamically tailors CBT cognitive reframing prompts while recommending targeted breathwork exercises (4-7-8 or resonant rhythms) to bring immediate nervous system regulation, concluding with encrypted audio reflection synthesis.
                </p>
              </>
            ) : isLiveArena ? (
              <>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light mb-4">
                  LiveArena delivers an instantaneous stadium journey from opening whistle to post-match analysis. Fans discover trending derbies and personalized club feeds with real-time countdown clocks.
                </p>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light">
                  With single-tap biometric authentication, subscribers acquire match day access passes within seconds. High-bitrate 60 FPS video streams launch with sub-second WebRTC delivery alongside synchronized live tactical event markers and replays.
                </p>
              </>
            ) : isBluemore ? (
              <>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light mb-4">
                  From initial enquiry to final anchor, Blue More Yachting
                  operates with seamless precision. A single dedicated broker
                  conducts an in-depth preference intake to align yacht size,
                  hull velocity, and stateroom layout. Whether chartering a 51m
                  Bodrum flagship like Oguz Khan or a swift motor yacht through
                  the Dalmatian archipelago, every touchpoint is choreographed
                  in advance.
                </p>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light">
                  Our on-the-ground Mediterranean concierge network coordinates
                  private transfers, provision stocking, custom tasting menus
                  with private chefs, and exclusive berthing permits. With an
                  average response time of under four business hours, guests
                  experience uninterrupted calm from embarkation to
                  disembarkation.
                </p>
              </>
            ) : isEuphorixz ? (
              <>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light mb-4">
                  From day to night, Euphorixz meets consumers where they are.
                  During the day, Glucose Anti-Spike supports biohackers,
                  prediabetics, and high-carb diners by preventing post-meal
                  lethargy and stabilizing glycemic curves. At night, The Party
                  Recovery Set provides festival-goers, creative night owls, and
                  DJs with an evidence-based ritual to protect cognitive
                  performance.
                </p>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light">
                  With verified testimonials from international touring DJs,
                  wellness coaches, and festival attendees, the deck validates
                  immediate consumer demand, showing an 82% repeat purchase
                  intent across European club capitals and wellness hubs.
                </p>
              </>
            ) : isDriveberry ? (
              <>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light mb-4">
                  Everything in one place: DriveBerry unifies the driver's full
                  vehicle life cycle into a single digital hub—tracking
                  diagnostic history, upcoming appointments, maintenance
                  recommendations, and contrôle technique inspections.
                </p>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light">
                  For certified garage partners, the platform replaces cold
                  leads with pre-diagnosed, high-intent drivers who already know
                  the fault and expect transparent pricing. This dramatically
                  reduces check-in friction, eliminates invoice disputes, and
                  yields a 14x LTV/CAC acquisition efficiency.
                </p>
              </>
            ) : (
              <>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light mb-4">
                  Presentation delivered like architecture: layer by layer until
                  everything connects. Raw spatial diagrams and architectural
                  sketches were translated into structured narrative milestones:
                  0–90 days account launch, 6–12 months recurring retainer
                  growth, and Year 2–5 international joint venture expansion.
                </p>
                <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed font-light">
                  Every slide is engineered to withstand partner due diligence,
                  articulating gross project margins (42% → 48%), repeat
                  referral velocity (30% → 45%), and pipeline coverage (3.5x).
                </p>
              </>
            )}
          </div>
        </div>
      </section>
        </>
      )}

      {/* ======================================================== */}
      {/* SECTION 6: THE RESULT (WHITE SECTION + LIVE ANIMATOR)    */}
      {/* ======================================================== */}
      <section className="bg-white text-[#0A0A0B] py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12">
          <div className="text-center max-w-[820px] mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#F4F4F5] border border-black/10 text-coral font-mono text-[11px] uppercase tracking-[0.2em] font-semibold mb-3">
              {isAura
                ? "Design System Adoption & Developer Engagement"
                : isAtma
                  ? "Market Differentiation & Retail Scalability"
                  : isPypo
                    ? "Brand Affinity Surge & Omnichannel Rollout"
                    : isFlex
                      ? "Brand Recall Surge & Global Retail Rollout"
                      : isLgmAviation
                        ? "AOG Dispatch Velocity & Global Airline Contracts"
                        : isRolandDonald
                          ? "Advisory Mandates & Enterprise Value"
                          : isAxorix
                            ? "Protocol Adoption & Ecosystem Metrics"
                            : isNodaliq
                                ? "Enterprise Adoption & Series A"
                                : isNexa
                                    ? "Trading Volume Surge & Execution Velocity"
                                    : isMindspace
                                  ? "Clinical Adoption & Daily Wellbeing Retention"
                                  : isLiveArena
                                    ? "Broadcast Velocity & Fan Engagement Growth"
                                    : isBluemore
                                ? "Charter Inquiries & Fleet Expansion"
                                : isEuphorixz
                                  ? "Retail Traction & Community"
                                  : isDriveberry
                                    ? "Funding & Market Traction"
                                    : "Measurable Impact"}
            </span>
            <h2 className="text-[34px] sm:text-[46px] font-bold text-[#0A0A0B] tracking-tight mb-5">
              The{" "}
              <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent">
                Result
              </span>
            </h2>
            <p className="text-[18px] sm:text-[21px] text-[#27272A] leading-relaxed font-light">
              {isAura ? (
                <>
                  Following the release of the Aura brand guidelines and
                  open-source UI design system, Aura achieved a{" "}
                  <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-semibold">
                    340% increase in developer adoption and GitHub stars
                  </span>{" "}
                  while achieving 100% WCAG AAA accessibility compliance across
                  web and mobile surfaces, drastically cutting interface
                  engineering velocity cycles for product teams.
                </>
              ) : isAtma ? (
                <>
                  Following the brand identity and guidelines deployment, ATMA
                  debuted its handcrafted furniture collections across European
                  and North American flagship showrooms, generating a{" "}
                  <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-semibold">
                    280% surge in architectural designer specification and
                    retail partnerships
                  </span>{" "}
                  while maintaining uncompromising visual coherence across
                  physical storefront signage, packaging, print lookbooks, and
                  digital commerce touchpoints.
                </>
              ) : isPypo ? (
                <>
                  Following the brand identity and guidebook rollout, Pypo
                  debuted its updated creative collective presence, achieving a{" "}
                  <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-semibold">
                    240% surge in partner brand favorability and client
                    inquiries
                  </span>{" "}
                  while maintaining unified typographic and color consistency
                  across executive Singapore stationery, outdoor environmental
                  displays, and co-branded partner activations.
                </>
              ) : isFlex ? (
                <>
                  Following the brand identity and guideline launch, Flex
                  successfully debuted its flagship Sierra Pulse technical line,
                  generating a{" "}
                  <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-semibold">
                    210% surge in brand recall and international distributor
                    inquiries
                  </span>{" "}
                  while maintaining unified typographic and packaging fidelity
                  across more than 60 commercial retail stores and global
                  e-commerce channels.
                </>
              ) : isLgmAviation ? (
                <>
                  Following the deployment of the updated global pitch deck
                  across international airline procurement routes, LGM Aviation
                  secured expanded multi-year aftermarket support agreements
                  with tier-1 international carriers including{" "}
                  <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-semibold">
                    easyJet and DAE Capital
                  </span>
                  , maintaining a 24/7/365 emergency response time under 15
                  minutes across London, Miami, and UAE operations.
                </>
              ) : isRolandDonald ? (
                <>
                  Following the deployment of the new executive presentation
                  system across global institutional deal roads, Roland Donald
                  Advisory closed over{" "}
                  <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-semibold">
                    $1.2B+ in cumulative transaction volume
                  </span>{" "}
                  across 18 major cross-border M&A and restructuring mandates in
                  2025 with a 100% executive retainage rate.
                </>
              ) : isAxorix ? (
                <>
                  Following the public rollout of the new brand identity and
                  design system, Axorix secured over{" "}
                  <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-semibold">
                    $65M in Total Value Locked (TVL)
                  </span>{" "}
                  and integrated with more than 45 decentralized protocols and
                  wallet partners within the first quarter, establishing
                  universal recognition across the global Web3 ecosystem.
                </>
              ) : isNodaliq ? (
                <>
                  Following the rollout of the comprehensive brand identity and
                  executive presentation suite, NODALiQ successfully closed an{" "}
                  <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-semibold">
                    $18M Series A financing round
                  </span>{" "}
                  and signed multi-year deployment contracts with 3 of the
                  world's top 5 telecom equipment manufacturers, accelerating
                  customer diagnostic velocity by over 400%.
                </>
              ) : isNexa ? (
                <>
                  Following the mobile application rollout, Nexa processed over{" "}
                  <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-semibold">
                    $180M in trading volume during its public launch month
                  </span>{" "}
                  with a 99.98% platform execution uptime and an exceptional 4.9/5 App Store rating across more than 60,000 active cryptocurrency traders.
                </>
              ) : isMindspace ? (
                <>
                  Following the mobile application rollout, Mindspace recorded an{" "}
                  <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-semibold">
                    82% reduction in self-reported daily anxiety
                  </span>{" "}
                  across active cohorts and attained a 4.9/5 App Store rating from over 45,000 verified users, logging more than 1.2M mindful reflections in its first 90 days.
                </>
              ) : isLiveArena ? (
                <>
                  During the opening tournament season, LiveArena achieved an{" "}
                  <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-semibold">
                    180% surge in peak concurrent live streams
                  </span>{" "}
                  while maintaining sub-800ms global broadcast latency, driving an 89% season pass renewal rate across European and global football leagues.
                </>
              ) : isBluemore ? (
                <>
                  Following the release of the updated strategic pitch deck,
                  Blue More Yachting experienced a{" "}
                  <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-semibold">
                    140% surge in qualified ultra-high-net-worth charter
                    inquiries
                  </span>{" "}
                  across Europe and North America, achieving a 94% client
                  retention rate and booking out their flagship Mediterranean
                  gulet roster for the upcoming summer season.
                </>
              ) : isEuphorixz ? (
                <>
                  Following the presentation rollout, Euphorixz finalized
                  wholesale agreements across premier European wellness
                  retailers and launched their direct-to-consumer subscription
                  ecosystem, securing over{" "}
                  <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-semibold">
                    10,000 active monthly subscribers
                  </span>{" "}
                  and expanding their European festival partner network.
                </>
              ) : isDriveberry ? (
                <>
                  Within weeks of pitch deck rollout, DriveBerry successfully
                  finalized an oversubscribed{" "}
                  <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-semibold">
                    $4.8M Series A financing round
                  </span>{" "}
                  led by top European mobility venture funds, scaling to over
                  320,000 active vehicle telemetry connections across France.
                </>
              ) : (
                <>
                  Some presentations show themselves; this framework only
                  arrived when every touchpoint earned its place. Within four
                  weeks of presentation rollout, KNKO successfully finalized two
                  premier master-developer agreements and unlocked{" "}
                  <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent font-semibold">
                    $24M in multi-year pipeline value
                  </span>
                  .
                </>
              )}
            </p>
          </div>

          {/* ANIMATED SLIDE CHANGER CONTAINER (Framed in Sleek Dark Canvas on the White Page!) */}
          <div className="relative rounded-[8px] md:rounded-[10px] border border-black/10 bg-[#0E0E10] p-4 sm:p-6 md:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.16)] overflow-hidden text-white">
            <div className="flex items-center justify-between mb-4 px-2">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-coral animate-ping" />
                <span className="font-mono text-[12px] uppercase tracking-wider text-white/80">
                  Live Deck Animator · {allSlides[animatedSlideIndex]?.label}
                </span>
              </div>

              {/* Manual Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setAnimatedSlideIndex(
                      (prev) =>
                        (prev - 1 + allSlides.length) % allSlides.length,
                    )
                  }
                  className="w-9 h-9 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-[14px] transition-colors cursor-pointer"
                  aria-label="Previous slide"
                >
                  ←
                </button>
                <button
                  onClick={() =>
                    setAnimatedSlideIndex(
                      (prev) => (prev + 1) % allSlides.length,
                    )
                  }
                  className="w-9 h-9 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-[14px] transition-colors cursor-pointer"
                  aria-label="Next slide"
                >
                  →
                </button>
              </div>
            </div>

            {/* Animated Slide Display with Smooth Motion */}
            <div className="relative aspect-[16/9.2] max-h-[700px] w-full rounded-lg overflow-hidden bg-black">
              <AnimatePresence mode="wait">
                <motion.img
                  key={animatedSlideIndex}
                  src={allSlides[animatedSlideIndex]?.src}
                  alt={allSlides[animatedSlideIndex]?.label}
                  initial={{ opacity: 0, scale: 0.98, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.98, x: -20 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() =>
                    setLightboxImage(allSlides[animatedSlideIndex]?.src)
                  }
                />
              </AnimatePresence>
            </div>

            {/* Slide Progress Dots */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
              {allSlides.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setAnimatedSlideIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    animatedSlideIndex === idx
                      ? "w-8 bg-gradient-to-r from-coral to-red"
                      : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 7: RELATED PROJECTS & FAQ (DARK #0A0A0B)         */}
      {/* ======================================================== */}
      <section className="bg-[#0A0A0B] text-white py-20 md:py-32">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12">
          {/* Related Projects Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-5 border-b border-white/10 gap-4">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-coral block mb-1">
                Portfolio
              </span>
              <h3 className="text-[28px] sm:text-[34px] font-bold text-white tracking-tight">
                Related{" "}
                <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent">
                  Projects
                </span>
              </h3>
            </div>

            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 font-bricolage text-[14px] font-semibold text-coral hover:text-red transition-colors cursor-pointer"
            >
              <span>View all projects</span>
              <span>→</span>
            </button>
          </div>

          {/* Related Projects Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-32">
            {otherAchievements.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  if (item.id) {
                    onNavigate(`/work/${item.id}`)
                  } else {
                    onBack()
                  }
                }}
                className="group cursor-pointer flex flex-col rounded-lg overflow-hidden border border-white/10 bg-white/[0.02] hover:border-coral/40 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.client}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width="1920" height="1080" loading="eager"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                    {item.tag}
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-[18px] font-bold text-white group-hover:text-coral transition-colors">
                        {item.client}
                      </h4>
                      <span className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all">
                        ↗
                      </span>
                    </div>
                    <p className="text-[13.5px] text-white/50 mt-1.5 line-clamp-2">
                      {item.service}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-[920px] mx-auto">
            <div className="text-center mb-12">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-coral block mb-2">
                Questions & Answers
              </span>
              <h3 className="text-[28px] sm:text-[36px] font-bold text-white tracking-tight">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-coral to-red bg-clip-text text-transparent">
                  Questions
                </span>
              </h3>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {faqs.map((faq, idx) => (
                <div key={idx} className="py-6">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                  >
                    <span className="text-[17px] sm:text-[19px] font-semibold text-white/90 group-hover:text-coral transition-colors tracking-tight">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full border border-white/20 flex items-center justify-center shrink-0 text-white/70 transition-transform duration-300 ${
                        openFaq === idx
                          ? "rotate-45 border-coral text-coral"
                          : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-[15px] sm:text-[16px] text-white/60 leading-relaxed max-w-2xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <div className="relative max-w-6xl max-h-[92vh] rounded-lg overflow-hidden border border-white/20 shadow-2xl">
              <img
                src={lightboxImage}
                alt="Enlarged presentation slide"
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center font-bold hover:bg-black transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 9. Contact & Gravity Drop Footer */}
      <div id="contact" className="border-t border-white/10 bg-black">
        <ContactSection />
        <GravityDropFooter />
      </div>
    </div>
  )
}
