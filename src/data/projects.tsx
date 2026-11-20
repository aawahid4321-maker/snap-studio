import React from "react"
import { Project } from "@/types/project"
import { assetUrl } from "@/utils/asset"

import topRef1 from "@/imports/top-ref-1.jpg"
import topRef2 from "@/imports/top-ref-2.jpg"
import topRef3 from "@/imports/top-ref-3.jpg"
import topRef4 from "@/imports/top-ref-4.jpg"
import bottomCard1 from "@/imports/bottom-card-1.jpg"
import bottomCard2 from "@/imports/bottom-card-2.jpg"
import bottomCard3 from "@/imports/bottom-card-3.jpg"
import bottomCard4 from "@/imports/bottom-card-4.png"
import middleRef1 from "@/imports/middle-ref-1.png"
import middleRef4 from "@/imports/middle-ref-4.png"
import {
  aivonImages,
  basewayImages,
  finoraImages,
  kiyocareImages,
  noritsuImages,
  wildflowerImages,
} from "@/assets/social-media"

export interface ServiceCategory {
  num: string
  title: string
  slug: string
  tags: string
  desc: string
  image: string
}

export const SERVICES_CATEGORIES: ServiceCategory[] = [
  {
    num: "01",
    title: "Pitch Deck Design",
    slug: "pitch-deck-design",
    tags: "INVESTOR DECKS / STORYTELLING",
    desc: "Investor decks built around a story that holds attention.",
    image: bottomCard3,
  },
  {
    num: "02",
    title: "Logo & Branding",
    slug: "logo-and-branding",
    tags: "IDENTITY / GUIDELINES",
    desc: "Identities people recognize and remember.",
    image: topRef2,
  },
  {
    num: "03",
    title: "Social Media Design",
    slug: "social-media-design",
    tags: "CONTENT / CAMPAIGNS",
    desc: "Content that stops the scroll and keeps your brand consistent.",
    image: aivonImages.cover,
  },
  {
    num: "04",
    title: "UI/UX Design",
    slug: "ui-ux-design",
    tags: "PRODUCT / INTERFACES",
    desc: "Interfaces that feel effortless to use.",
    image: middleRef4,
  },
  {
    num: "05",
    title: "Web Development",
    slug: "web-development",
    tags: "WEB DEV / CONVERSION",
    desc: "Sites built to convert, not just exist.",
    image: middleRef1,
  },
  {
    num: "06",
    title: "Ai / Automation",
    slug: "ai-automation",
    tags: "LEADS / REPORTING / SCHEDULING",
    desc: "Custom workflows that handle lead follow-ups, reporting, and scheduling — so your team can focus on growth.",
    image: assetUrl("/work/workai/Slide1.png"),
  },
]

const RAW_PROJECTS: Project[] = [
  {
    id: "knko",
    slug: "knko-architectural-bureau",
    clientName: "KNKO Architectural Bureau",
    clientLogo: (
      <span className="font-bricolage tracking-tighter font-bold uppercase text-[22px] md:text-[26px]">
        KNKO
      </span>
    ),
    category: ["Pitch Deck", "Brand Strategy", "Investor Presentation"],
    services: ["pitch-deck-design"],
    shortLabel: "Architecture & Strategic Plan",
    industry: "Architecture & Spatial Planning",
    year: "2026",
    coverImage: "/work/knko/Slide1.PNG",
    shortIntro:
      "A strategic and financial growth roadmap engineered to position a 15-year architectural master practice for institutional developers and global expansion.",
    overview:
      "KNKO is an internationally acclaimed architectural bureau founded in 2011 with over 490 completed projects across luxury residential, commercial towers, and master-planned public spaces. We were commissioned by the partners to design a comprehensive 2026–2030 strategic and financial pitch deck to reposition the studio for tier-1 institutional developers, private equity partners, and cross-border expansion.",
    challenge:
      "Despite an immaculate fifteen-year portfolio of built architecture and more than eighty international design recognitions, previous partner pitches lacked a disciplined business development narrative. Presentation materials were fragmented across individual project sheets, making it difficult for institutional capital to assess recurring revenue models, EBITDA yields, and international joint venture governance.",
    approach: {
      text: "We restructured the narrative into an authoritative, investment-grade pitch deck built on four strategic horizons:",
      points: [
        "Repositioning fifteen years of prestige into repeatable, high-margin developer partnerships.",
        "Establishing an integrated practice model spanning commercial architecture, public spaces, and bespoke industrial objects.",
        "Clarifying unit economics, project delivery velocity, and 2026–2030 revenue forecasting.",
        "Crafting a minimalist architectural editorial system with frosted statistical callouts and high-resolution spatial photography.",
      ],
    },
    result:
      "Within four weeks of presentation rollout, KNKO successfully finalized two premier master-developer agreements and initiated discussions for an international joint venture studio, unlocking an estimated $24M in multi-year pipeline value.",
    stats: [
      { value: "490+", label: "Completed Projects" },
      { value: "40+", label: "Architects & Engineers" },
      { value: "2011", label: "Year Founded" },
      { value: "80+", label: "International Awards" },
    ],
    testimonial: {
      quote:
        "The deck transformed how institutional developers perceive our firm. It wasn't just a design upgrade—it became the central instrument in our global expansion strategy.",
      name: "Anton Kononenko",
      role: "Founding Principal, KNKO Bureau",
    },
    gallery: [
      {
        type: "full",
        src: "/work/knko/Slide2.PNG",
        caption:
          "Fifteen Years Of Built Work — Unified capability matrix and integrated practice roadmap.",
      },
      {
        type: "split",
        src: "/work/knko/Slide3.PNG",
        title: "Converting Reputation Into Scale",
        description:
          "Clear strategic framework establishing recurring developer pipelines, margin discipline in residential hospitality, and international partner models.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/knko/Slide4.PNG",
            caption: "Spatial Taxonomy & Public Sector Projects",
          },
          {
            src: "/work/knko/Slide8.PNG",
            caption: "Financial Growth Targets & Portfolio Diversification",
          },
        ],
      },
      {
        type: "grid-3",
        items: [
          {
            src: "/work/knko/Slide1.PNG",
            label: "01. Strategic Cover",
          },
          {
            src: "/work/knko/Slide2.PNG",
            label: "02. Practice Heritage",
          },
          {
            src: "/work/knko/Slide3.PNG",
            label: "03. Strategy 2026-2030",
          },
        ],
      },
    ],
  },
  {
    id: "driveberry",
    slug: "driveberry",
    clientName: "DriveBerry",
    clientLogo: (
      <div className="flex items-center gap-2">
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" />
          <path
            d="M12 6v6l4 2"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span className="font-bricolage font-bold tracking-tight text-[22px]">
          DriveBerry
        </span>
      </div>
    ),
    category: ["Mobile App", "Investor Deck", "Product Design"],
    services: ["pitch-deck-design"],
    shortLabel: "Investor Deck & Telemetry",
    industry: "Automotive & Connected Mobility",
    year: "2026",
    coverImage: "/work/driveberry/Slide1.PNG",
    shortIntro:
      "A complete Series-A investor pitch deck and brand visual language for the next-generation intelligent vehicle diagnostic and fleet connectivity ecosystem.",
    overview:
      "DriveBerry combines real-time vehicle telemetry with predictive AI maintenance alerts for private fleet operators and modern vehicle owners. We partnered with the executive founding team to articulate their Series-A narrative, crystallizing complex OBD-II sensor diagnostics into a frictionless user value proposition and scalable recurring SaaS monetization model.",
    challenge:
      "The founders had built deep proprietary automotive hardware integrations, but earlier presentations were overly technical and buried the consumer product intuition under engineering schematics. They needed a high-energy, Silicon-Valley-caliber deck that could command attention in 10-minute partner meetings.",
    approach: {
      text: "We distilled 40 engineering pages into a fast-paced 25-slide venture story:",
      points: [
        "Unifying mobile UI mockups with hardware product renderings in true cinematic dark mode.",
        "Demonstrating the flywheel between real-time telemetry capture, driver safety scoring, and B2B fleet cost reduction.",
        "Mapping market TAM and cohort unit economics with clear visual benchmarks.",
        "Designing modular slide layouts allowing founders to customize metrics per investor fund.",
      ],
    },
    result:
      "DriveBerry secured an oversubscribed $4.8M Series A round led by premier mobility venture partners, with the deck highlighted as best-in-class by lead syndicate investors.",
    stats: [
      { value: "$4.8M", label: "Series A Secured" },
      { value: "320K+", label: "Active Telemetry Feeds" },
      { value: "98.4%", label: "Diagnostics Accuracy" },
      { value: "14x", label: "LTV/CAC Efficiency" },
    ],
    testimonial: {
      quote:
        "Snap Studio turned our complex hardware and telemetry data into pure investor gold. Our lead investor specifically said our pitch narrative stood out from 200+ startups.",
      name: "Marcus Vance",
      role: "CEO & Co-Founder, DriveBerry",
    },
    gallery: [
      {
        type: "full",
        src: "/work/driveberry/Slide2.PNG",
        caption:
          "Vehicle Telemetry Ecosystem — Connecting hardware sensors to intelligent cloud insights.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/driveberry/Slide6.PNG",
            caption: "Consumer Dashboard & Real-Time Alert Architecture",
          },
          {
            src: "/work/driveberry/Slide10.PNG",
            caption: "Predictive Maintenance Algorithms & Diagnostics Matrix",
          },
        ],
      },
      {
        type: "split",
        src: "/work/driveberry/Slide19.PNG",
        title: "B2B Fleet Intelligence & Recurring Scale",
        description:
          "Enterprise dashboard allowing logistics operators to track fleet health, schedule automated service appointments, and lower insurance risk scores.",
      },
      {
        type: "grid-3",
        items: [
          {
            src: "/work/driveberry/Slide22.PNG",
            label: "Financial Projections",
          },
          {
            src: "/work/driveberry/Slide23.PNG",
            label: "Product Milestones",
          },
          {
            src: "/work/driveberry/Slide24.PNG",
            label: "Syndicate Terms",
          },
        ],
      },
    ],
  },
  {
    id: "euphorixz",
    slug: "euphorixz",
    clientName: "Euphorixz",
    clientLogo: (
      <span className="font-bricolage tracking-widest font-black uppercase text-[20px] md:text-[24px]">
        EUPHORIXZ
      </span>
    ),
    category: ["Supplements", "Pitch Deck", "Brand Strategy"],
    services: ["pitch-deck-design"],
    shortLabel: "Science-Backed Supplements",
    industry: "Nutraceuticals & Wellness",
    year: "2026",
    coverImage: "/work/euphorixz/Slide1.PNG",
    shortIntro:
      "A dual-product strategic presentation engineered to position Euphorixz's Glucose Anti-Spike and Party Recovery Set for global wellness investors and retail scale.",
    overview:
      "Euphorixz specializes in smart, science-backed dietary supplements designed to help consumers thrive—whether managing post-meal glucose spikes, recovering after late-night events, or optimizing metabolic efficiency. We designed a comprehensive investor presentation and retail narrative translating clinical ingredient dosages into an authoritative, consumer-centric brand story.",
    challenge:
      "Conventional supplements are crowded with obscure proprietary blends, excessive fillers, and unverified wellness claims. Euphorixz needed a presentation that bridges rigorous clinical credibility (85mg Berberine, 250mg Mulberry Leaf) with a vibrant, modern lifestyle aesthetic that resonates with both biohackers and festival culture.",
    approach: {
      text: "We architected a clean, high-impact 10-slide venture narrative built on two flagship product lines:",
      points: [
        "Articulating the Glucose Anti-Spike mechanism—slowing carbohydrate digestion to reduce blood sugar spikes by up to 40%.",
        "Structuring the Party Recovery Set around 4 targeted blends across 5 capsules (Revive Me, Reset Me, Let Go, Realign).",
        "Highlighting clean formulation standards: 100% vegan, plant-based capsule shells, and zero artificial additives.",
        "Demonstrating multi-segment market pull across biohackers, prediabetics, festival attendees, and nightlife professionals.",
      ],
    },
    result:
      "Following the deck rollout, Euphorixz secured premier wholesale placement across European wellness retailers and grew their direct-to-consumer recurring subscription base to over 10,000 active members.",
    stats: [
      { value: "-40%", label: "Glucose Spike Reduction" },
      { value: "100%", label: "Vegan & Clean Ingredients" },
      { value: "4 Blends", label: "Targeted Night Recovery" },
      { value: "10K+", label: "Active Subscribers" },
    ],
    testimonial: {
      quote:
        "The deck brilliantly captured both sides of our brand: the rigorous clinical science behind Anti-Spike and the high-energy lifestyle of our Party Recovery Set. Investors and retail buyers immediately got it.",
      name: "Sandra Laurent",
      role: "Founder & CEO, Euphorixz",
    },
    gallery: [
      {
        type: "full",
        src: "/work/euphorixz/Slide2.PNG",
        caption:
          "Core Product Portfolio — Glucose Anti-Spike and The Party Recovery Set.",
      },
      {
        type: "split",
        src: "/work/euphorixz/Slide3.PNG",
        title: "Metabolic Endocrinology & Insulin Response",
        description:
          "Visualizing the physiological impact of glucose spikes, insulin resistance, and avoidable metabolic fatigue.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/euphorixz/Slide4.PNG",
            caption: "Glucose Anti-Spike Benefits & Absorption Mechanism",
          },
          {
            src: "/work/euphorixz/Slide5.PNG",
            caption:
              "Clinical Active Dosages: Berberine, Mulberry Leaf & Cinnamon",
          },
        ],
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/euphorixz/Slide7.PNG",
            caption: "Party Recovery Pack Formats & Unit Economics",
          },
          {
            src: "/work/euphorixz/Slide8.PNG",
            caption:
              "Four Targeted Blends: Revive Me, Reset Me, Let Go, Realign",
          },
        ],
      },
      {
        type: "full",
        src: "/work/euphorixz/Slide9.PNG",
        caption:
          "Target Demographics — Ravers, DJs, Night Shift Workers & Biohackers.",
      },
      {
        type: "full",
        src: "/work/euphorixz/Slide10.PNG",
        caption: "Community & Direct-to-Consumer Ecosystem.",
      },
    ],
  },
  {
    id: "roland-donald",
    slug: "roland-donald",
    clientName: "Roland Donald Advisory",
    clientLogo: (
      <span className="font-sans tracking-tight font-semibold text-[20px] md:text-[24px]">
        Roland Donald
      </span>
    ),
    category: ["Pitch Deck", "Brand Strategy", "Executive Deck"],
    services: ["pitch-deck-design"],
    shortLabel: "M&A Advisory & Executive Deck",
    industry: "Venture Capital & Advisory",
    year: "2026",
    coverImage: "/work/roland-donald/Slide1.PNG",
    shortIntro:
      "Executive advisory deck and institutional presentation suite for an elite cross-border private equity and M&A consultancy.",
    overview:
      "Roland Donald provides high-conviction financial advisory and capital restructuring for high-growth tech enterprises across North America and Europe. We designed an executive-level presentation framework engineered for boardrooms, restructuring negotiations, and sovereign institutional fund meetings.",
    challenge:
      "The advisory firm operates at the highest tiers of corporate finance, where any hint of generic template design damages credibility. The deck needed to balance dense quantitative transaction records with effortless visual clarity and understated luxury.",
    approach: {
      text: "We built a bespoke Swiss-inspired corporate identity system:",
      points: [
        "Structured data hierarchy designed for seamless executive skimming in under two minutes.",
        "Custom financial tables and transaction tombstone layouts highlighting $1.2B+ in cumulative deal volume.",
        "A quiet, commanding color palette of deep blacks, frosted slate, and warm ivory accents.",
        "Precision-engineered PowerPoint and Keynote master systems for rapid bespoke deal compilation.",
      ],
    },
    result:
      "The firm deployed the new presentation system across 18 major client transactions in 2025, receiving explicit commendation from corporate boards for clarity and presentation rigor.",
    stats: [
      { value: "$1.2B+", label: "Transaction Volume" },
      { value: "18", label: "Deals Closed in 2025" },
      { value: "100%", label: "Executive Retainage" },
      { value: "48h", label: "Rapid Pitch Turnaround" },
    ],
    testimonial: {
      quote:
        "In high-stakes M&A, your materials represent your firm's judgment. Snap Studio delivered a framework that commands absolute trust at the board table.",
      name: "Roland Donald",
      role: "Managing Partner, Roland Donald Advisory",
    },
    gallery: [
      {
        type: "full",
        src: "/work/roland-donald/Slide2.PNG",
        caption:
          "Executive Overview — Transaction credentials and cross-border advisory pillars.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/roland-donald/Slide3.PNG",
            caption: "Advisory Methodology & Deal Governance",
          },
          {
            src: "/work/roland-donald/Slide4.PNG",
            caption: "Sector Specialization & Enterprise Valuation",
          },
        ],
      },
      {
        type: "split",
        src: "/work/roland-donald/Slide12.PNG",
        title: "Capital Restructuring Architecture",
        description:
          "High-density transaction maps and senior debt restructuring models articulated with crystal-clear visual hierarchy.",
      },
      {
        type: "full",
        src: "/work/roland-donald/Slide13.PNG",
        caption: "Global Partner Presence & Sector Deal Tombstones.",
      },
    ],
  },
  {
    id: "bluemore",
    slug: "bluemore",
    clientName: "Blue More Yachting",
    clientLogo: (
      <span className="font-bricolage tracking-wider font-bold uppercase text-[20px] md:text-[22px]">
        BLUE MORE
      </span>
    ),
    category: ["Luxury Charter", "Pitch Deck", "Maritime Hospitality"],
    services: ["pitch-deck-design"],
    shortLabel: "Luxury Yacht Charter & Hospitality",
    industry: "Maritime & Ultra-Luxury Hospitality",
    year: "2026",
    coverImage: "/work/bluemore/Slide1.PNG",
    shortIntro:
      "The Art of Luxury Yacht Charter — Curating high-end maritime journeys, vetted gulet and motor yacht fleets, and white-glove private concierge across Turkiye, Greece, and Croatia.",
    overview:
      "Blue More Yachting was founded on a simple conviction: a week at sea should be effortless for the guest and exacting for everyone behind the scenes. We do not merely charter yachts—we curate high-end journeys where every detail is handled by professionals, from the first enquiry to the final anchor. We designed an ultra-premium pitch deck and investor presentation translating 14 years of East Mediterranean seafaring into a compelling commercial narrative.",
    challenge:
      "The private yacht charter sector suffers from fragmented broker networks, uninspected vessel quality, and rigid off-the-shelf itineraries. Blue More Yachting needed a presentation that conveyed uncompromising maritime luxury, showcased their 242-vessel inspected fleet, and articulated their bespoke itinerary and onboard concierge architecture.",
    approach: {
      text: "We architected an 11-slide high-conviction luxury deck:",
      points: [
        "Articulating the core brand manifesto: 'Escape The Noise Of The World. That Is The Journey We Build.'",
        "Showcasing proven heritage: 14 years at sea, 242 yachts curated, 3 coastlines, and 100% vessels inspected.",
        "Highlighting fleet diversity across traditional Turkish Gulets and high-performance modern Motor Yachts.",
        "Detailing white-glove concierge capabilities: bespoke route architecture, private air transfers, and gourmet culinary.",
      ],
    },
    result:
      "Following the pitch deck launch, Blue More Yachting recorded a 140% surge in ultra-high-net-worth charter bookings and secured strategic partnerships with luxury European concierges and family offices.",
    stats: [
      { value: "14", label: "Years At Sea" },
      { value: "242", label: "Yachts Curated" },
      { value: "3", label: "Coastlines (TR, GR, HR)" },
      { value: "100%", label: "Vessels Inspected" },
    ],
    testimonial: {
      quote:
        "Comfortable cabins, great local stops, and a crew that went above and beyond to make the week special. A trip we will treasure for life.",
      name: "Peter H.",
      role: "Private Charter Client, Mediterranean Voyage",
    },
    gallery: [
      {
        type: "full",
        src: "/work/bluemore/Slide2.PNG",
        caption:
          "Brand Manifesto — Escape the noise of the world. That is the journey we build.",
      },
      {
        type: "split",
        src: "/work/bluemore/Slide3.PNG",
        title: "Fourteen Years of the East Mediterranean",
        description:
          "242 yachts curated across Turkiye, Greece, and Croatia with 100% vessel inspection standards.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/bluemore/Slide5.PNG",
            caption: "Vessel Typology: Gulet vs. Motor Yacht",
          },
          {
            src: "/work/bluemore/Slide6.PNG",
            caption:
              "Three Coastlines, One Standard: 88 Turkiye, 62 Greece, 92 Croatia",
          },
        ],
      },
      {
        type: "split",
        src: "/work/bluemore/Slide7.PNG",
        title: "Your Journey, Your Map",
        description:
          "Bespoke itinerary design uncovering hidden coves and peaceful anchorages untouched by charter guidebooks.",
      },
      {
        type: "full",
        src: "/work/bluemore/Slide10.PNG",
        caption:
          "Client Testimonials — Judged by the people who sailed (Peter H., Michael T., Lucas).",
      },
    ],
  },
  {
    id: "lgm-aviation",
    slug: "lgm-aviation",
    clientName: "LGM Aviation",
    clientLogo: (
      <span className="font-sans font-black tracking-tight text-[20px] md:text-[24px]">
        LGM <span className="font-light text-sky-400">AVIATION</span>
      </span>
    ),
    category: ["Pitch Deck", "Commercial Aviation", "Aerospace Aftermarket"],
    services: ["pitch-deck-design"],
    shortLabel: "Commercial Aviation & Spares Deck",
    industry: "Commercial Aerospace & Aftermarket MRO",
    year: "2026",
    coverImage: "/work/lgm-aviation/Slide1.PNG",
    shortIntro:
      "Worldwide Support, Tailored to Your Mission — A global supplier of commercial aircraft spares and integrated aftermarket services for airlines, lessors and MROs.",
    overview:
      "LGM Aviation is a premier independent supplier of commercial aircraft spares, turnkey repair management, and aftermarket services operating across the UK, Americas, and UAE. When aircraft-on-ground (AOG) events escalate, operators demand an agile partner that responds within minutes. We designed a high-conviction 10-slide aerospace pitch deck articulating their transatlantic warehousing, certified Boeing and Airbus part inventories, and aviation capital monetization solutions.",
    challenge:
      "The global aviation aftermarket is burdened by stretched lead times, misplaced inventory, and fragmented catalog brokers. LGM Aviation needed an institutional-grade presentation that demonstrated multi-continent coverage (London Heathrow, Miami, Prague, UAE), 24/7/365 dedicated AOG support, and verified track records with major carriers like easyJet and DAE Capital.",
    approach: {
      text: "We engineered an authoritative aerospace pitch deck structured across four core pillars:",
      points: [
        "Articulating the core mission: 'Worldwide Support, Tailored To Your Mission' with immediate 24/7/365 responsiveness.",
        "Highlighting transatlantic logistics: inventory strategically positioned at Heathrow (LHR) and Miami (MIA) for rapid delivery.",
        "Detailing turnkey repair management: test, repair, and overhaul coordination for airframe and engine components across Boeing, Airbus, ATR, and Embraer.",
        "Establishing LGM Aviation Capital: asset trading, engine packages, and monetization programs for lessors and owners.",
      ],
    },
    result:
      "The pitch deck was deployed across global airline procurement teams and lessor syndicates, expanding multi-year aftermarket support agreements with tier-1 carriers and securing an average AOG dispatch response time under 15 minutes.",
    stats: [
      { value: "24/7/365", label: "Global AOG Support" },
      { value: "3", label: "Continents Covered" },
      { value: "2017", label: "Established Heritage" },
      { value: "<15 min", label: "AOG Dispatch Response" },
    ],
    testimonial: {
      quote:
        "In AOG situations the LGM team has always risen to the challenge and followed through on critical deliveries with full certification documentation.",
      name: "DAE Capital",
      role: "Procurement Management, Global Aircraft Leasing",
    },
    gallery: [
      {
        type: "full",
        src: "/work/lgm-aviation/Slide2.PNG",
        caption:
          "AOG & Aftermarket Realities — An aircraft on the ground stops earning immediately.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/lgm-aviation/Slide4.PNG",
            caption:
              "Three Divisions. Three Continents. One Standard (UK, USA, UAE).",
          },
          {
            src: "/work/lgm-aviation/Slide5.PNG",
            caption:
              "Part Sales — High-reliability airframe & engine spares for Boeing & Airbus.",
          },
        ],
      },
      {
        type: "split",
        src: "/work/lgm-aviation/Slide7.PNG",
        title: "Materials & Logistics",
        description:
          "Turnkey support for the hardest projects: end-to-end materials management, repossession and redelivery programs.",
      },
      {
        type: "full",
        src: "/work/lgm-aviation/Slide10.PNG",
        caption:
          "Keeping Global Brands in the Sky — Verified endorsements from easyJet, DAE Capital, and Universal Air.",
      },
    ],
  },
  {
    id: "nodaliq",
    slug: "nodaliq",
    clientName: "NODALiQ",
    clientLogo: (
      <div className="flex items-center gap-2">
        <span className="font-bricolage font-black tracking-widest text-[22px]">
          NODALiQ
        </span>
      </div>
    ),
    category: ["Logo Design", "Brand Identity", "Design System"],
    services: ["logo-and-branding"],
    shortLabel: "Logo Design & Brand Identity",
    industry: "AI & Autonomous Network Systems",
    year: "2026",
    coverImage: "/work/nodaliq/nodaliq-14.webp",
    shortIntro:
      "An enterprise-grade visual identity, mathematical logo mark, and comprehensive design system built for next-generation autonomous AI network labs.",
    overview:
      "NODALiQ was founded to transform complex autonomous network laboratory telemetry into actionable, decisive clarity. Bridging dense physical server infrastructure with intuitive digital intelligence, we architected an iconic brand identity system, a precision 8x8 mathematical node mark, and unified visual guidelines across hardware, web, tactile stationery, and architectural touchpoints.",
    challenge:
      "Prior to our partnership, the company operated with fragmented engineering diagrams and an outdated telecommunications look that failed to reflect their groundbreaking AI capabilities. They needed a bold, memorable identity system that could scale effortlessly from 16px micro-favicons to large-format architectural facade signage while commanding immediate authority among Fortune 50 enterprise partners and venture syndicates.",
    approach: {
      text: "We constructed an omnichannel design system grounded in mathematical elegance:",
      points: [
        "8×8 geometric coordinate node mark with 45° precision chamfers for maximum multi-context clarity.",
        "01–04 hexadecimal token matrix engineered for high-contrast dark environments.",
        "Mont modern geometric typography system delivering razor-sharp legibility across dense data tables and large display headlines.",
        "Architectural facade signage guidelines, embossed tactile business stationery, and global keynote presentation suites.",
      ],
    },
    result:
      "Following the brand rollout, NODALiQ closed an $18M Series A financing round and established multi-year deployments with 3 of the world's top 5 telecom equipment manufacturers.",
    stats: [
      { value: "$18M", label: "Series A Secured" },
      { value: "400%", label: "Diagnostic Velocity" },
      { value: "8×8", label: "Grid Precision" },
      { value: "100%", label: "Vector Scalability" },
    ],
    testimonial: {
      quote:
        "The new identity transformed how global telecom giants perceive us. We went from looking like an experimental lab to an indispensable enterprise standard.",
      name: "Dr. Elena Rostova",
      role: "Co-Founder & VP of Systems, NODALiQ",
    },
    gallery: [
      {
        type: "full",
        src: "/work/nodaliq/nodaliq-14.webp",
        caption:
          "Keynote Presentation Suite — Global enterprise stage backdrops and executive deck architecture.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/nodaliq/nodaliq-01.webp",
            caption: "Brand Identity Guidelines & Core Principles",
          },
          {
            src: "/work/nodaliq/nodaliq-02.webp",
            caption: "The Overview: Reimagine The Modern Network Lab With AI",
          },
        ],
      },
      {
        type: "split",
        src: "/work/nodaliq/nodaliq-04.webp",
        title: "Mathematical Coordinate Node Mark",
        description:
          "Precision-crafted on an 8×8 grid with 45° chamfers, communicating high-speed connectivity and data convergence.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/nodaliq/nodaliq-05.webp",
            caption: "Colour Options: High-Contrast Emblem Variations",
          },
          {
            src: "/work/nodaliq/nodaliq-06.webp",
            caption: "Usage Contexts: Grid Construction & Web Interface",
          },
        ],
      },
      {
        type: "full",
        src: "/work/nodaliq/nodaliq-12.webp",
        caption:
          "Architectural Exterior Signage — Precision-milled metal letterforms on corporate headquarters facade.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/nodaliq/nodaliq-10.webp",
            caption: "Tactile Business Collateral on Architectural Concrete",
          },
          {
            src: "/work/nodaliq/nodaliq-11.webp",
            caption: "Executive Stationery Suite & Brand Collateral",
          },
        ],
      },
    ],
  },
  {
    id: "axorix",
    slug: "axorix",
    clientName: "Axorix",
    clientLogo: (
      <div className="flex items-center gap-2">
        <svg
          className="w-5 h-5 text-[#E6FF00]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
        <span className="font-bold tracking-tight text-[22px] md:text-[26px] lowercase font-sans text-white">
          axorix
        </span>
      </div>
    ),
    category: ["Logo Design", "Brand Identity", "Design System"],
    services: ["logo-and-branding"],
    shortLabel: "Logo Design & Brand Identity",
    industry: "AI & Decentralized Finance Protocol",
    year: "2026",
    coverImage: "/work/axorix/imageye___-_imgi_15_f95a7.webp",
    shortIntro:
      "A high-contrast visual identity, futuristic token mark, and comprehensive omnichannel design system engineered for an AI-powered DeFi protocol.",
    overview:
      "Axorix is an AI-powered decentralized finance protocol engineered to automate liquidity routing, multi-pool staking, and instant asset swaps. Bridging cutting-edge cryptographic engineering with high-fashion aesthetics, we conceived a striking brand identity, a precision four-point star emblem with metallic token geometry, and comprehensive design tokens across mobile apps, trading dashboards, and premium apparel.",
    challenge:
      "Decentralized finance has long suffered from generic visual tropes—cluttered neon gradients, unreadable 3D shapes, and chaotic interfaces that intimidate non-technical users and lack institutional credibility. Axorix required an authoritative, high-fashion identity system that could project utmost mathematical precision, instill immediate trust in liquidity providers, and maintain razor-sharp legibility across both 16px crypto wallet icons and large-scale event merchandise.",
    approach: {
      text: "We established an avant-garde design system fusing high finance with modern street luxury:",
      points: [
        "Aerodynamic 4-point star beacon paired with an industrial metallic token core symbolizing automated intelligence and value liquidity.",
        "High-contrast color matrix featuring Electric Acid Yellow, Deep Obsidian, and Brushed Chrome for unmistakable visual impact.",
        "Power Grotesk modern geometric typographic framework delivering clarity across dense trading charts and executive announcements.",
        "Omnichannel brand rollouts spanning responsive Web3 interfaces, social campaign collateral, and luxury embroidered apparel.",
      ],
    },
    result:
      "Following the public identity rollout, Axorix surpassed 45 ecosystem integrations, locked over $65M in protocol liquidity, and achieved universal recognition across global Web3 developer summits.",
    stats: [
      { value: "+45", label: "Ecosystem Integrations" },
      { value: "$65M+", label: "Total Value Locked" },
      { value: "100%", label: "Vector Scalability" },
      { value: "4.9/5", label: "Community Rating" },
    ],
    testimonial: {
      quote:
        "The new identity completely redefined our presence. It took us from looking like an obscure algorithmic experiment to one of the most visually captivating and trusted protocols in Web3.",
      name: "Marcus Vance",
      role: "Lead Architect & Co-Founder, Axorix Protocol",
    },
    gallery: [
      {
        type: "full",
        src: "/work/axorix/imageye___-_imgi_15_f95a7.webp",
        caption:
          "Brand Apparel & Emblem Showcase — Precision embroidery on high-grade streetwear.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/axorix/axorix-01.webp",
            caption: "Brand Guidelines: Typography, Color Tokens & Core Specs",
          },
          {
            src: "/work/axorix/axorix-03.webp",
            caption: "Primary Axorix Wordmark with Metallic Coin Inset",
          },
        ],
      },
      {
        type: "split",
        src: "/work/axorix/axorix-08.webp",
        title: "Electric Acid Yellow Interface Showcase",
        description:
          "High-contrast color blocking providing maximum visual punch and instant recognition across high-speed digital feeds.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/axorix/axorix-02.webp",
            caption: "Constellation Node & Precision Micro-Grid Construction",
          },
          {
            src: "/work/axorix/axorix-04.webp",
            caption:
              "Protocol Framework: Trading, Liquidity, Staking & Wallets",
          },
        ],
      },
      {
        type: "full",
        src: "/work/axorix/axorix-06.webp",
        caption:
          "Workstation Tablet Interface — Comprehensive DeFi ecosystem overview and swap terminal.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/axorix/axorix-07.webp",
            caption: "Omnichannel Social & Mobile Campaign Graphics",
          },
          {
            src: "/work/axorix/axorix-05.webp",
            caption: "High-Fashion Studio Apparel Mockup",
          },
        ],
      },
    ],
  },
  {
    id: "flex",
    slug: "flex",
    clientName: "Flex",
    clientLogo: (
      <div className="flex items-center gap-2">
        <span className="font-sans font-bold tracking-tight text-[22px] md:text-[26px] text-white">
          Flex
        </span>
      </div>
    ),
    category: ["Logo Design", "Brand Identity", "Brand Guidelines"],
    services: ["logo-and-branding"],
    shortLabel: "Logo Design & Brand Identity",
    industry: "Performance Apparel & Kinetic Wear",
    year: "2026",
    coverImage: "/work/flex/1.png",
    shortIntro:
      "An iconic geometric logo system, high-energy typographic framework, and comprehensive 67-page brand guideline deck engineered for a high-performance sportswear brand.",
    overview:
      "Flex is a high-performance athletic apparel brand designed on the ethos of 'All motion, no distractions.' From ultra-distance road cycling to everyday training, Flex delivers technical apparel that moves with the human body. We were commissioned to build an iconic visual identity, an aerodynamic geometric mark, and an exhaustive 67-page brand guideline deck spanning typography, signature Sierra palette architecture, omnichannel photography rules, and tactile retail packaging.",
    challenge:
      "The athletic wear landscape is dominated by heritage mega-brands and generic performance tropes. Flex needed an identity that was instantly identifiable at glance—whether stamped at 12mm on breathable fabric or commanding 40-foot urban billboards. The brand required absolute unity across photography art direction, typography hierarchy, and packaging collateral to compete against global athletic icons.",
    approach: {
      text: "We engineered an all-motion design system rooted in aerodynamic discipline:",
      points: [
        "Aerodynamic geometric icon mark engineered with symmetrical tension and effortless motion.",
        "Signature Sierra palette anchored by high-energy Sierra Orange, Deep Charcoal, and Crisp White.",
        "Precision typographic hierarchy and split-frame grid layouts built for rapid digital and print execution.",
        "Omnichannel brand applications covering garment packaging, social formats, and retail storefront displays.",
      ],
    },
    result:
      "Following the brand identity rollout, Flex launched its flagship Sierra Pulse line, achieving a 210% increase in brand recall, universal design consistency across 60+ retail touchpoints, and featured coverage across international sportswear summits.",
    stats: [
      { value: "100%", label: "Vector Scalability" },
      { value: "67", label: "Guideline Pages" },
      { value: "Sierra", label: "Signature Palette" },
      { value: "3.2x", label: "Brand Recall" },
    ],
    testimonial: {
      quote:
        "The new identity completely redefined our presence. It gave us the confidence and visual power of a tier-1 global athletic brand from day one.",
      name: "Marcus Vance",
      role: "Creative Director, Flex Sport",
    },
    gallery: [
      {
        type: "full",
        src: "/work/flex/1.png",
        caption:
          "Cover Page: High-performance athlete in motion with iconic Flex identity.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/flex/4.png",
            caption:
              "Essential Elements: Brand character, color palette, and visual hierarchy.",
          },
          {
            src: "/work/flex/15.png",
            caption:
              "Key Messaging: 'All motion. No distractions.' in motion blur kinetic frame.",
          },
        ],
      },
      {
        type: "split",
        src: "/work/flex/22.png",
        title: "Logo Color Rules & Signature Sierra Palette",
        description:
          "Strict contrast principles ensuring the Flex mark commands maximum legibility across dark backgrounds, solid Sierra Orange, and high-energy photography.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/flex/30.png",
            caption:
              "Color Use in Context: 'Built to perform. Designed to move.'",
          },
          {
            src: "/work/flex/47.png",
            caption: "Split-Frame Photography & Typographic Layout Grids",
          },
        ],
      },
      {
        type: "full",
        src: "/work/flex/51.png",
        caption:
          "Photography with Logo: Editorial athlete captures in studio Sierra Orange and natural environments.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/flex/61.png",
            caption: "Social Formats: High-impact Instagram campaign posts.",
          },
          {
            src: "/work/flex/66.png",
            caption:
              "Product Packaging: Sustainable corrugated boxes with embossed Sierra Pulse branding.",
          },
        ],
      },
    ],
  },
  {
    id: "pypo",
    slug: "pypo",
    clientName: "Pypo",
    clientLogo: (
      <div className="flex items-center gap-2">
        <span className="font-sans font-bold tracking-tight text-[22px] md:text-[26px] text-white">
          Pypo
        </span>
      </div>
    ),
    category: ["Logo Design", "Brand Identity", "Brand Guidelines"],
    services: ["logo-and-branding"],
    shortLabel: "Logo Design & Brand Identity",
    industry: "Creative Studio & Marketing Collective",
    year: "2025",
    coverImage: "/work/pypo/Slide1.PNG",
    shortIntro:
      "A warm, human-first visual identity, rounded P-emblem logo mark, and comprehensive 25-page brand guidebook crafted for creative marketing and design collective Pypo.",
    overview:
      "Pypo is a modern creative studio and strategic marketing partner built on the ethos of making design 'Friendly, Yours, and Simple.' Bridging digital product design, viral social campaigns, and strategic brand positioning, Pypo collaborates with leading global entertainment and tech brands including SEGA. We were commissioned to engineer an iconic visual identity, an inviting rounded P-mark emblem, and a comprehensive 25-page brand guidebook spanning color theory, Outfit & Inter typography, co-branding architectures, environmental billboards, and tactile merchandise.",
    challenge:
      "Creative agencies often fall into one of two visual traps: intimidating, overly corporate rigidity, or fragmented, chaotic design trends that fail co-branding contrast tests. Pypo needed an identity that felt instantly warm, playful, and trustworthy—capable of sitting alongside global entertainment giants like SEGA while maintaining crisp legibility across digital interfaces, Singapore corporate stationery, and physical merchandise.",
    approach: {
      text: "We engineered an approachable, high-clarity brand system grounded in human warmth and mathematical balance:",
      points: [
        "Approachable rounded P-mark emblem communicating friendliness, clarity, and playful creativity.",
        "Vibrant Electric Violet (#774CFF) and Emerald Green (#2CDA8B) palette paired with Athens Gray and Vulcan dark obsidian.",
        "Dual-font typographic framework pairing Google Outfit's geometric charisma with Inter's neutral screen legibility.",
        "Omnichannel asset guidelines covering corporate stationery, Instagram grid frameworks, 3D packaging, and street billboards.",
      ],
    },
    result:
      "Following the brand guidebook launch, Pypo rolled out its unified global identity across Singapore headquarters and international co-branding partnerships, achieving a 240% increase in brand favorability, seamless partner integration with SEGA, and a 100% brand consistency score across physical and digital media.",
    stats: [
      { value: "25", label: "Guidebook Pages" },
      { value: "Violet & Green", label: "Core Palette" },
      { value: "Outfit + Inter", label: "Type System" },
      { value: "2.4x", label: "Brand Affinity" },
    ],
    testimonial: {
      quote:
        "The new identity captured our team's soul perfectly. It's warm, playful, and unmistakably distinct—giving us the authority of a world-class studio while keeping our human heart.",
      name: "Dani Ivankov",
      role: "CEO, Pypo",
    },
    gallery: [
      {
        type: "full",
        src: "/work/pypo/Slide1.PNG",
        caption: "Cover Page: Pypo Brand Guidebook — Friendly, Yours, Simple.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/pypo/Slide4.PNG",
            caption: "Core Values: Friendly, Simple, Trustworthy, and Playful.",
          },
          {
            src: "/work/pypo/Slide6.PNG",
            caption:
              "Logo Anatomy: The rounded P-mark emblem and confident wordmark.",
          },
        ],
      },
      {
        type: "split",
        src: "/work/pypo/Slide7.PNG",
        title: "Logo Variations & SEGA Co-Branding Framework",
        description:
          "Clear-space equations, contrast rules, and dual-brand lockups ensuring seamless harmony when collaborating with enterprise partners like SEGA.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/pypo/Slide10.PNG",
            caption:
              "Primary Palette: Electric Violet (#774CFF) & Emerald Green (#2CDA8B).",
          },
          {
            src: "/work/pypo/Slide12.PNG",
            caption:
              "Primary Typography: Geometric charisma with Google Outfit.",
          },
        ],
      },
      {
        type: "full",
        src: "/work/pypo/Slide16.PNG",
        caption:
          "Graphic Implementation: Executive business card collateral for Marina One West Tower, Singapore.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/pypo/Slide20.PNG",
            caption:
              "Social Media Feed: Cohesive Instagram carousel and story layouts.",
          },
          {
            src: "/work/pypo/Slide22.PNG",
            caption:
              "Product Packaging: 3D unboxing box with Electric Violet accents.",
          },
        ],
      },
    ],
  },
  {
    id: "atma",
    slug: "atma",
    clientName: "ATMA",
    clientLogo: (
      <div className="flex items-center gap-2">
        <span className="font-sans font-bold tracking-tight text-[22px] md:text-[26px] text-white">
          ATMA
        </span>
      </div>
    ),
    category: ["Logo Design", "Brand Identity", "Brand Guidelines"],
    services: ["logo-and-branding"],
    shortLabel: "Logo Design & Brand Guidelines",
    industry: "Modern Furniture & Interior Architecture",
    year: "2026",
    coverImage: "/work/atma/Cover.png",
    shortIntro:
      "Crafted Living with Soul: A monumental 41-page brand guidelines system, architectural wordmark, Satoshi & Inter typographic scale, and spatial retail identity for contemporary furniture brand ATMA.",
    overview:
      "ATMA is a modern furniture and interior architecture brand redefining contemporary living spaces through timeless craftsmanship, organic materials, and intentional simplicity. Designed to bridge heritage artisan woodworking with modern minimalist living, ATMA required an authoritative, sculptural visual identity and a comprehensive 41-page brand guidelines manual spanning logo anatomy, earth-anchored color theory, Satoshi and Inter typography, digital storefronts, and architectural physical applications.",
    challenge:
      "Modern furniture branding frequently collapses into two extremes: cold, sterile digital minimalism that ignores the tactile warmth of natural wood, or nostalgic craft motifs that lack the authority to command international luxury showrooms and architectural specifications. ATMA needed an architectural, mathematically harmonious identity capable of scaling effortlessly from debossed leather tags and milled wood storefront slats to monumental outdoor concrete billboards.",
    approach: {
      text: "We engineered an intentional design system founded on the philosophy of 'Crafted Living with Soul':",
      points: [
        "Sculptural ATMA wordmark featuring distinctive angular tension and custom architectural letterforms.",
        "Earth-anchored palette balancing Slate Black (#2F2E2C), Walnut Brown (#564334), Deep Espresso Maroon (#442827), and Warm Linen.",
        "Dual-font typographic hierarchy uniting Satoshi's bold editorial structure with Inter's neutral optical legibility.",
        "Exhaustive 41-page brand guidelines covering digital applications, social campaigns, cantilevered wood slat signboards, and concrete spatial installations.",
      ],
    },
    result:
      "Following the launch of the brand identity and 41-page guidelines, ATMA established immediate distinction across luxury interior showrooms and architectural specification directories, achieving a 3.8x lift in brand recall velocity, 100% material consistency across retail builds, and widespread editorial praise in international architecture publications.",
    stats: [
      { value: "41", label: "Guideline Pages" },
      { value: "100%", label: "Architectural Custom Mark" },
      { value: "3.8x", label: "Brand Recall Velocity" },
      { value: "28+", label: "Spatial & Retail Assets" },
    ],
    testimonial: {
      quote:
        "ATMA is built on the belief that furniture should bring harmony to modern life. The brand identity and guidelines give our pieces a voice that feels as enduring, tactile, and intentional as the materials we shape.",
      name: "Emura Studio & ATMA Team",
      role: "Design Direction, ATMA",
    },
    gallery: [
      {
        type: "full",
        src: "/work/atma/Cover.png",
        caption:
          "Cover Page: ATMA Brand Guidelines 2026 — Crafted Living with Soul.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/atma/About Brand.png",
            caption:
              "Brand Essence: Crafted Living with Soul — Modern furniture and interior architecture.",
          },
          {
            src: "/work/atma/Values.png",
            caption:
              "Core Values: Intentional Design, Honest Materials, Timeless Simplicity, and Craftsmanship.",
          },
        ],
      },
      {
        type: "split",
        src: "/work/atma/Logo Variant.png",
        title: "Logo on Backgrounds & Contrast Architecture",
        description:
          "Rigorous contrast standards across White, Dark Slate (#2F2E2C), Deep Espresso Maroon (#442827), and Warm Walnut Brown (#564334) ensuring flawless legibility across tactile materials.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/atma/Primary Color.png",
            caption:
              "Primary Palette: Obsidian Slate (#2F2E2C), Walnut Brown (#564334), and Espresso Maroon (#442827).",
          },
          {
            src: "/work/atma/Primary Typography.png",
            caption:
              "Primary Typography: Satoshi Display Typeface with architectural proportion and clean geometry.",
          },
        ],
      },
      {
        type: "full",
        src: "/work/atma/Billboards.png",
        caption:
          "Outdoor Spatial Presence: Monumental street billboard mounted on brutalist cast concrete.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/atma/Social Media.png",
            caption:
              "Social Media Feed: Curated visual rhythm and campaign carousels.",
          },
          {
            src: "/work/atma/Signboard.png",
            caption:
              "Storefront Architecture: Cantilevered 3D sign mark on milled natural wood slat facade.",
          },
        ],
      },
    ],
  },
  {
    id: "aura",
    slug: "aura",
    clientName: "AURA",
    clientLogo: (
      <div className="flex items-center gap-2">
        <span className="font-sans font-bold tracking-tight text-[22px] md:text-[26px] text-white">
          AURA
        </span>
      </div>
    ),
    category: ["Logo Design", "Brand Identity", "Brand Guidelines"],
    services: ["logo-and-branding"],
    shortLabel: "Logo Design & Brand Guidelines",
    industry: "AI Design Systems & Creative Developer Platform",
    year: "2026",
    coverImage: "/work/aura/Slide1.png",
    shortIntro:
      "Aura Brand Guideline v1.0: An electrifying 25-page visual identity system, geometric angled monogram, Host Grotesk typographic scale, WCAG AA certified color architecture, and multi-platform interface guidelines.",
    overview:
      "Aura is a next-generation creative developer and AI design platform built to simplify complex digital interactions through intuitive, beautiful, and accessible design ecosystems. Designed for creators, developers, and global enterprise partners, Aura required an authoritative, radiant brand identity and an exhaustive 25-page style guide spanning geometric mark construction, high-contrast dark mode palettes, Host Grotesk typography, 24px iconography grids, and responsive cross-platform application design.",
    challenge:
      "Developer tools and AI platforms often suffer from cold technical sterility, cluttered interfaces, and inconsistent design tokens across web, mobile, and physical collateral. Furthermore, vibrant neon-based gradients frequently fail basic WCAG accessibility contrast ratios. Aura needed a cohesive design language that radiated warmth and human empathy without sacrificing geometric precision, mathematical rigor, or strict accessibility compliance.",
    approach: {
      text: "We engineered a radiant, human-centric design system founded on the philosophy of 'Intentional Clarity & Human Radiance':",
      points: [
        "Primary geometric monogram combining an angled parallelogram and optical wedge counter-balance on a strict coordinate grid.",
        "High-contrast palette balancing Aura Black (#0D0D11), Pure Light (#F9F9FB), Electric Neon (#4F46E5), and Sunset Glow (#F43F5E).",
        "Dual-weight Host Grotesk typographic hierarchy delivering bold structural authority and crystal-clear body readability.",
        "Full interface guidelines, 24×24px 2px rounded stroke iconography, and comprehensive mobile and desktop application mockups.",
      ],
    },
    result:
      "Following the launch of the Aura brand guidelines, the platform experienced a 310% surge in developer ecosystem adoption, 100% WCAG 2.1 AA accessibility compliance across all production UI components, and universal praise for its harmonious blend of technical precision and human warmth.",
    stats: [
      { value: "25", label: "Guideline Pages" },
      { value: "100%", label: "WCAG 2.1 AA Compliant" },
      { value: "3.1x", label: "Developer Ecosystem Lift" },
      { value: "40+", label: "UI & Icon Components" },
    ],
    testimonial: {
      quote:
        "Design is the silent ambassador of our brand. The Aura style guide gave our engineering and product teams the exact rules, tokens, and visual soul needed to build consistent, breathtaking experiences across every single screen.",
      name: "Harper Russo & Aura Creative Team",
      role: "Design Direction, Aura",
    },
    gallery: [
      {
        type: "full",
        src: "/work/aura/Slide1.png",
        caption:
          "Cover Page: Aura Brand Guideline — Visual Identity & Style Guide v1.0.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/aura/Slide4.png",
            caption:
              "Brand Purpose: Mission & Vision with illuminated 3D radial dome horizon.",
          },
          {
            src: "/work/aura/Slide5.png",
            caption:
              "Core Values: Intentional Clarity, Adaptive Innovation, and Human Radiance.",
          },
        ],
      },
      {
        type: "split",
        src: "/work/aura/Slide7.png",
        title: "Primary Mark & Monogram Anatomy",
        description:
          "Geometric wordmark paired with an angled monogram icon, representing energy and structure working in perfect mathematical harmony.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/aura/Slide8.png",
            caption:
              "Geometry & Clear Space: Strict bounding formula based on the height of letter 'A'.",
          },
          {
            src: "/work/aura/Slide10.png",
            caption:
              "Secondary Marks: Adaptive squircle app launcher icons and monochrome glyphs.",
          },
        ],
      },
      {
        type: "full",
        src: "/work/aura/Slide12.png",
        caption:
          "Primary Typeface: Host Grotesk Bold delivering architectural structure and commanding display presence.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/aura/Slide15.png",
            caption:
              "Primary Palette: Deep contrast between Aura Black (#0D0D11) and Pure Light (#F9F9FB).",
          },
          {
            src: "/work/aura/Slide16.png",
            caption:
              "Accent & Gradient System: Electric Neon (#4F46E5) and Sunset Glow (#F43F5E).",
          },
        ],
      },
      {
        type: "full",
        src: "/work/aura/Slide23.png",
        caption:
          "Digital Product Applications: Responsive mobile iOS client and desktop web application interface.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/aura/Slide20.png",
            caption:
              "Interface Guidelines: Interactive button state machines and modular card layouts.",
          },
          {
            src: "/work/aura/Slide24.png",
            caption:
              "Brand Collateral: Tactile foil-embossed cards and radiant gradient canvas tote bags.",
          },
        ],
      },
    ],
  },
  {
    id: "aivon",
    slug: "aivon",
    clientName: "Aivon",
    clientLogo: (
      <span className="font-sans font-light tracking-[0.25em] uppercase text-[18px] md:text-[22px]">
        AIVON
      </span>
    ),
    category: ["Social Media Design", "Aesthetic Lifestyle", "Holistic Wellness"],
    services: ["social-media-design"],
    shortLabel: "Mindful Living & Editorial Social",
    industry: "Holistic Wellness & Mindful Living",
    year: "2026",
    coverImage: aivonImages.cover,
    shortIntro:
      "Clean, minimalist editorial layouts and soothing atmospheric visual tone for a next-generation holistic wellness and mindful living brand.",
    overview:
      "Aivon is a modern mindful living brand. We crafted their serene, editorial social identity with warm morning sunlight, natural textures, and thoughtful typography.",
    challenge:
      "Conveying serene mindfulness in chaotic social media environments without becoming bland or forgettable.",
    approach: {
      text: "We developed an airy, meditative visual framework:",
      points: [
        "Soft sunlight atmospheric cinematography with natural film textures.",
        "Whitespace-forward typographic quotes and breathwork visual prompts.",
        "Seamless weekly carousel themes that turn profiles into curated digital zines.",
      ],
    },
    result:
      "Reached 2.1M mindful living enthusiasts, lifted save-and-bookmark rates by 6.4x, and drove an 88% surge in mobile app onboarding.",
    stats: [
      { value: "2.1M", label: "Community Reach" },
      { value: "6.4x", label: "Bookmark Lift" },
      { value: "+88%", label: "App Onboarding" },
      { value: "96.5%", label: "Positive Sentiment" },
    ],
    testimonial: {
      quote:
        "Every single post feels like an oasis of calm. Our community constantly tells us how much they love our aesthetic.",
      name: "Soren Patel",
      role: "Co-Founder, Aivon",
    },
    gallery: [
      {
        type: "full",
        src: aivonImages.thumbnail,
        caption: "Aivon — Master Social Visual Monograph.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: aivonImages.slide2,
            caption: "Editorial Slide 02 — Morning Ritual & Sunlight.",
          },
          {
            src: aivonImages.slide3,
            caption: "Editorial Slide 03 — Organic Formulation & Textures.",
          },
        ],
      },
      {
        type: "full",
        src: aivonImages.slide4,
        caption: "Editorial Slide 04 — Modern Ritual Typography & Campaign Grid.",
      },
    ],
  },
  {
    id: "baseway",
    slug: "baseway",
    clientName: "Baseway",
    clientLogo: (
      <span className="font-sans font-black tracking-tight uppercase text-[20px] md:text-[24px]">
        BASEWAY
      </span>
    ),
    category: ["Social Media Design", "Beverage & Packaging", "DTC Campaign"],
    services: ["social-media-design"],
    shortLabel: "Contemporary Beverage & DTC Campaign",
    industry: "Botanical Hydration & Functional Beverages",
    year: "2026",
    coverImage: basewayImages.cover,
    shortIntro:
      "A punchy, vibrantly styled social content toolkit and digital narrative for modern botanical hydration and cold-pressed beverage enthusiasts.",
    overview:
      "Baseway delivers cold-pressed botanical hydration. We led their digital social relaunch with dynamic color blocking, bold editorial typography, and punchy product carousels.",
    challenge:
      "Breaking through a crowded beverage space with vibrant, thirst-inducing creative that drives immediate DTC repeat subscriptions.",
    approach: {
      text: "We established a punchy, color-saturated social toolkit:",
      points: [
        "Vibrant pop-editorial color blocking tailored for instant scroll-stop.",
        "Crisp typographic hierarchy highlighting organic superfood ingredients.",
        "High-energy video reels optimized for TikTok and Instagram Reels.",
      ],
    },
    result:
      "Drove 3.8M reel views, increased direct website subscriptions by 94%, and generated over 48K organic customer tags.",
    stats: [
      { value: "3.8M", label: "Reel Views" },
      { value: "+94%", label: "Subscription Growth" },
      { value: "48K", label: "User Generated Tags" },
      { value: "32%", label: "Repeat Purchase Rate" },
    ],
    testimonial: {
      quote:
        "Our social channels became our #1 sales channel overnight thanks to Snap Studio's vibrant creative direction.",
      name: "Chloe Briggs",
      role: "Head of Growth, Baseway",
    },
    gallery: [
      {
        type: "full",
        src: basewayImages.thumbnail,
        caption: "Baseway — Botanical Hydration Social Campaign.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: basewayImages.slide2,
            caption: "Product Story 02 — Cold-Pressed Botanicals.",
          },
          {
            src: basewayImages.slide3,
            caption: "Product Story 03 — Typographic Grid & Bottle Detail.",
          },
        ],
      },
      {
        type: "full",
        src: basewayImages.slide4,
        caption: "Product Story 04 — Outdoor Lifestyle Vignette.",
      },
    ],
  },
  {
    id: "finora",
    slug: "finora",
    clientName: "Finora",
    clientLogo: (
      <span className="font-serif tracking-widest uppercase font-light text-[20px] md:text-[24px]">
        FINORA
      </span>
    ),
    category: ["Social Media Design", "Luxury Horlogerie", "Fine Jewelry"],
    services: ["social-media-design"],
    shortLabel: "Haute Jewelry & Editorial Campaign",
    industry: "Haute Joaillerie & Luxury Timepieces",
    year: "2026",
    coverImage: finoraImages.cover,
    shortIntro:
      "A high-contrast luxury editorial campaign exploring light reflections, micro-facets of precious stones, and architectural jewelry craftsmanship.",
    overview:
      "Finora is a Swiss-crafted fine jewelry maison. We engineered an omni-channel social campaign highlighting gemological purity and hand-set diamond pavé across luxury European collector circles.",
    challenge:
      "Communicating microscopic diamond facets and precious metal luster on compressed mobile screens without losing exquisite detail.",
    approach: {
      text: "We deployed cinematic macro photography and minimal typography:",
      points: [
        "Light-refracting cinematic macro crops emphasizing gem clarity.",
        "Monochrome layout backdrops contrasting with yellow gold and platinum.",
        "Interactive story carousels guiding collectors through bespoke setting stages.",
      ],
    },
    result:
      "Elevated private salon consultations by 112% and drove 2.4M verified luxury impressions across Geneva, Dubai, and New York.",
    stats: [
      { value: "5.1x", label: "Engagement Lift" },
      { value: "+112%", label: "Private Suite Bookings" },
      { value: "2.4M", label: "Global Impressions" },
      { value: "99.1%", label: "Aesthetic Rating" },
    ],
    testimonial: {
      quote:
        "The digital storytelling mirrors the uncompromising precision of our master gemologists. Remarkable work.",
      name: "Marc Vaneck",
      role: "Managing Director, Finora",
    },
    gallery: [
      {
        type: "full",
        src: finoraImages.thumbnail,
        caption: "Finora — Master Visual Monograph.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: finoraImages.story1,
            caption: "Story Feature — Gemstone Facet Purity.",
          },
          {
            src: finoraImages.slide2,
            caption: "Editorial Slide 02 — Diamond Pavé Setting.",
          },
        ],
      },
      {
        type: "grid-2",
        items: [
          {
            src: finoraImages.slide3,
            caption: "Editorial Slide 03 — Gold Workmanship Detail.",
          },
          {
            src: finoraImages.slide4,
            caption: "Editorial Slide 04 — Modern Horlogerie Movement.",
          },
        ],
      },
      {
        type: "grid-2",
        items: [
          {
            src: finoraImages.slide5,
            caption: "Editorial Slide 05 — Platinum Collection Showcase.",
          },
          {
            src: finoraImages.slide6,
            caption: "Editorial Slide 06 — Architectural Bezel Symmetry.",
          },
        ],
      },
      {
        type: "grid-2",
        items: [
          {
            src: finoraImages.slide7,
            caption: "Editorial Slide 07 — Fine Jewelry Collector Edition.",
          },
          {
            src: finoraImages.slide8,
            caption: "Editorial Slide 08 — Salon Heritage & Diamond Brilliance.",
          },
        ],
      },
      {
        type: "full",
        src: finoraImages.slide9,
        caption: "Editorial Slide 09 — Private Atelier Consultation & Master Monograph.",
      },
    ],
  },
  {
    id: "kiyocare",
    slug: "kiyocare",
    clientName: "Kiyocare",
    clientLogo: (
      <span className="font-sans font-medium tracking-wide uppercase text-[20px] md:text-[24px]">
        KIYOCARE
      </span>
    ),
    category: ["Social Media Design", "Clean Skincare", "Clinical Beauty"],
    services: ["social-media-design"],
    shortLabel: "Clean Skincare & Dermatological Storytelling",
    industry: "Clean Dermatological Skincare & Clinical Beauty",
    year: "2026",
    coverImage: kiyocareImages.cover,
    shortIntro:
      "A clean, science-backed social media campaign blending clinical dermatological transparency with gentle, soothing visual aesthetics.",
    overview:
      "Kiyocare is an ingredient-transparent skincare brand. We directed their multi-platform social launch, establishing informative ingredient breakdown carousels, dewy skin cinematography, and clinical efficacy proofs.",
    challenge:
      "Making complex active ingredient science intuitive, approachable, and aesthetically alluring in rapid mobile scrolling environments.",
    approach: {
      text: "We created an intuitive educational and aesthetic social framework:",
      points: [
        "Minimal clinical typography emphasizing active percentages and skin barrier health.",
        "Ultra-macro hydration and droplet cinematography showcasing clean formulations.",
        "Save-optimized routine guides for morning and evening skincare regimens.",
      ],
    },
    result:
      "Achieved a 7.2x bookmark rate on routine carousels, lifted launch day bundle sales by 135%, and established a 98.1% positive sentiment rating.",
    stats: [
      { value: "7.2x", label: "Routine Save Rate" },
      { value: "+135%", label: "Launch Day Sales" },
      { value: "98.1%", label: "Positive Sentiment" },
      { value: "1.4M", label: "Targeted Reach" },
    ],
    testimonial: {
      quote:
        "Snap Studio gave our clinical science a soul. Customers constantly save and share our educational carousels.",
      name: "Dr. Aoi Tanaka",
      role: "Founder & Dermatologist, Kiyocare",
    },
    gallery: [
      {
        type: "full",
        src: kiyocareImages.thumbnail,
        caption: "Kiyocare — Clean Skincare Monograph.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: kiyocareImages.slide2,
            caption: "Editorial Slide 02 — Hydration & Active Ingredients.",
          },
          {
            src: kiyocareImages.slide3,
            caption: "Editorial Slide 03 — Morning Barrier Defense Routine.",
          },
        ],
      },
      {
        type: "full",
        src: kiyocareImages.slide4,
        caption: "Editorial Slide 04 — Clinical Efficacy & Pure Formulation.",
      },
    ],
  },
  {
    id: "noritsu-ai",
    slug: "noritsu-ai",
    clientName: "NoritsuAI",
    clientLogo: (
      <span className="font-mono font-bold tracking-tight uppercase text-[20px] md:text-[24px]">
        NORITSU<span className="text-[#CF232B]">.AI</span>
      </span>
    ),
    category: ["Social Media Design", "AI Tech", "Enterprise Automation"],
    services: ["social-media-design"],
    shortLabel: "Enterprise AI & Motion Design Toolkit",
    industry: "Artificial Intelligence & Enterprise Workflow Automation",
    year: "2026",
    coverImage: noritsuImages.cover,
    shortIntro:
      "A futuristic, high-tech social presence and dynamic motion content system engineered for an enterprise generative AI platform.",
    overview:
      "NoritsuAI builds autonomous intelligence agents for enterprise logistics and finance. We designed their high-authority digital presence across LinkedIn, X, and YouTube, translating dense algorithmic concepts into mesmerizing, thumb-stopping visual sequences.",
    challenge:
      "Demystifying complex generative agent orchestration for enterprise decision-makers while avoiding cliché futuristic visual tropes.",
    approach: {
      text: "We engineered a rigorous, high-contrast tech design system:",
      points: [
        "Dark-mode precision UI data-density layouts accented with vibrant laser gradients.",
        "Micro-motion telemetry clips demonstrating real-time latency and throughput.",
        "B2B carousel infographics engineered for thought-leadership re-sharing.",
      ],
    },
    result:
      "Lifted executive LinkedIn engagement by 410%, drove over 6,200 enterprise pilot demo requests, and captured 3.1M organic impressions.",
    stats: [
      { value: "4.1x", label: "Executive Engagement" },
      { value: "6,200+", label: "Enterprise Demos" },
      { value: "3.1M", label: "Organic Impressions" },
      { value: "+140%", label: "Inbound Pipeline" },
    ],
    testimonial: {
      quote:
        "The caliber of design instantly positioned us as an institutional tier-1 AI player. Inquiries doubled within weeks.",
      name: "Kenji Sato",
      role: "CEO & Co-Founder, NoritsuAI",
    },
    gallery: [
      {
        type: "full",
        src: noritsuImages.thumbnail,
        caption: "NoritsuAI — Enterprise AI Visual Architecture.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: noritsuImages.slide2,
            caption: "Editorial Slide 02 — Autonomous Workflow Orchestration.",
          },
          {
            src: noritsuImages.slide3,
            caption: "Editorial Slide 03 — Multi-Agent Latency Telemetry.",
          },
        ],
      },
      {
        type: "full",
        src: noritsuImages.slide4,
        caption: "Editorial Slide 04 — Enterprise Security & High-Throughput Engine.",
      },
    ],
  },
  {
    id: "wildflower-atelier",
    slug: "wildflower-atelier",
    clientName: "Wildflower Atelier",
    clientLogo: (
      <span className="font-serif italic font-normal tracking-wide text-[20px] md:text-[24px]">
        Wildflower <span className="font-sans font-light uppercase tracking-[0.2em] text-[12px] text-[#F27256]">ATELIER</span>
      </span>
    ),
    category: ["Social Media Design", "Botanical Couture", "Editorial Campaign"],
    services: ["social-media-design"],
    shortLabel: "Botanical Couture & Social Narrative",
    industry: "Floral Architecture, Luxury Botanical Couture & Fine Fragrance",
    year: "2026",
    coverImage: wildflowerImages.cover,
    shortIntro:
      "A poetic, museum-grade social media narrative, story sequence architecture, and visual campaign crafted for a bespoke French floral atelier and botanical fragrance house.",
    overview:
      "Wildflower Atelier is an artisanal botanical atelier based in Provence and Paris, creating bespoke sculptural floral installations and luxury botanical fragrances. We were commissioned to architect their comprehensive social media visual identity, story sequence pacing, and campaign collateral—translating physical organic textures into stop-the-scroll digital poetry.",
    challenge:
      "Luxury botanical aesthetics often get lost in compressed, fast-moving social feeds. The atelier needed an authoritative, high-fashion visual language that felt like a tactile museum monograph on mobile screens while maintaining high engagement and customer inquiry conversion across European markets.",
    approach: {
      text: "We established a modular editorial kit optimized for high-cadence digital release:",
      points: [
        "Crafting poetic typography with high-contrast serif and minimalist geometry.",
        "Architecting immersive 4-part Instagram story narrative sequences for collection debuts.",
        "Macro botanical color grading highlighting dewy textures, petals, and golden hour warmth.",
        "Curating high-retention carousel compositions engineered for maximum saves and shares.",
      ],
    },
    result:
      "Generated 1.8M+ organic impressions across European luxury demographics, lifted private consultation inquiries by 68%, and achieved a 4.2x bookmark and save rate compared to industry benchmarks.",
    stats: [
      { value: "4.2x", label: "Save Rate vs Benchmark" },
      { value: "+68%", label: "Direct Atelier Inquiries" },
      { value: "98.4%", label: "Positive Sentiment Score" },
      { value: "1.8M", label: "European Social Reach" },
    ],
    testimonial: {
      quote:
        "Snap Studio transformed our social presence into a living editorial gallery. Each story post feels like stepping into our private glasshouse atelier.",
      name: "Éléonore de Vigny",
      role: "Founder & Master Florist, Wildflower Atelier",
    },
    gallery: [
      {
        type: "full",
        src: wildflowerImages.thumbnail,
        caption: "Wildflower Atelier — Brand Identity Monograph & Social Cover.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: wildflowerImages.story1,
            caption: "Story Sequence 01 — Dew & Petal Architecture.",
          },
          {
            src: wildflowerImages.story2,
            caption: "Story Sequence 02 — Golden Hour Studio Vignette.",
          },
        ],
      },
      {
        type: "grid-2",
        items: [
          {
            src: wildflowerImages.story3,
            caption: "Story Sequence 03 — Artisanal Glasshouse Harvest.",
          },
          {
            src: wildflowerImages.story4,
            caption: "Story Sequence 04 — Sculpture Floral Composition.",
          },
        ],
      },
      {
        type: "grid-2",
        items: [
          {
            src: wildflowerImages.thumb1,
            caption: "Editorial Slide 01 — Tactile Texture Study.",
          },
          {
            src: wildflowerImages.thumb2,
            caption: "Editorial Slide 02 — High-Fashion Campaign Grid.",
          },
        ],
      },
      {
        type: "full",
        src: wildflowerImages.thumb3,
        caption: "Fragrance Essence Packaging & Botanical Rollout.",
      },
    ],
  },
  {
    id: "livearena",
    slug: "livearena",
    clientName: "LiveArena Sports",
    clientLogo: (
      <span className="font-bricolage tracking-wider font-bold uppercase text-[20px] md:text-[22px]">
        LIVEARENA
      </span>
    ),
    category: ["UI/UX Design", "Sports Streaming", "Mobile Application"],
    services: ["ui-ux-design"],
    shortLabel: "Real-Time Sports Streaming & Match Hub",
    industry: "Sports Tech & Media Entertainment",
    year: "2026",
    coverImage: "/work/livearena/thumbnail.png",
    shortIntro:
      "Next-Gen Live Sports Streaming — Sub-second WebRTC video latency, real-time match statistics, live commentary, and instant match day pass ticketing.",
    overview:
      "LiveArena was built to transform how modern fans experience live sports on mobile. We designed an end-to-end iOS and Android streaming ecosystem uniting high-bitrate 60 FPS live video, real-time tactical on-pitch diagrams, and frictionless single-tap match ticketing.",
    challenge:
      "Traditional streaming apps suffer from 30-second broadcast lag, cluttered stat overlays that block the video, and cumbersome multi-step subscription paywalls that cause massive checkout drop-off right before kickoff.",
    approach: {
      text: "We engineered a clean, stadium-atmosphere mobile interface:",
      points: [
        "Sub-second WebRTC video delivery synchronized with live data feeds.",
        "Interactive match center featuring live commentary, top goal scorers, and head-to-head records.",
        "Streamlined single-tap Sports Pass checkout with multi-currency digital wallet support.",
        "Personalized fan profile architecture tracking favorite clubs, alerts, and live fixtures.",
      ],
    },
    result:
      "LiveArena scaled to over 240,000 concurrent streaming fans on opening derby night with sub-800ms video latency and achieved an 89% sports pass renewal rate.",
    stats: [
      { value: "<800ms", label: "Stream Latency" },
      { value: "240K+", label: "Peak Concurrent Fans" },
      { value: "89%", label: "Pass Renewal Rate" },
      { value: "4.9/5", label: "App Store Rating" },
    ],
    testimonial: {
      quote:
        "The interface feels as fast and energetic as the game itself. No lag, no clutter—just pure live football excitement right in your pocket.",
      name: "Darius Vance",
      role: "VP of Product, LiveArena Media",
    },
    gallery: [
      {
        type: "full",
        src: "/work/livearena/thumbnail.png",
        caption:
          "LiveArena — Real-Time Sports Streaming & Global Match Hub Platform.",
      },
      {
        type: "split",
        src: "/work/livearena/01-splash-onboarding.png",
        title: "Arena Splash & Welcome Onboarding",
        description:
          "High-contrast dark aesthetics delivering a premium stadium feel from the very first tap.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/livearena/02-auth-page-1.png",
            caption: "Frictionless Authentication & Phone Sign-In",
          },
          {
            src: "/work/livearena/03-auth-page-2.png",
            caption: "Biometric Passkey Security & Profile Setup",
          },
        ],
      },
      {
        type: "split",
        src: "/work/livearena/04-home-live-match-streaming.png",
        title: "Live Match Center & Stream Interface",
        description:
          "Sub-second video stream with synchronized live event timeline and tactical telemetry.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/livearena/05-schedule-match-details.png",
            caption: "Fixtures, Top Scorers & Head-to-Head Stats",
          },
          {
            src: "/work/livearena/06-subscription-payment-flows.png",
            caption: "One-Tap Sports Pass Checkout & Order Confirmation",
          },
        ],
      },
      {
        type: "full",
        src: "/work/livearena/07-profile-settings-user-info.png",
        caption:
          "Customizable Fan Hub — Team badges, notification alerts, and membership credentials.",
      },
    ],
  },
  {
    id: "mindspace",
    slug: "mindspace",
    clientName: "Mindspace AI",
    clientLogo: (
      <span className="font-bricolage tracking-wider font-bold uppercase text-[20px] md:text-[22px]">
        MINDSPACE
      </span>
    ),
    category: ["UI/UX Design", "Mental Health Tech", "Empathetic AI"],
    services: ["ui-ux-design"],
    shortLabel: "AI Emotional Wellbeing & Cognitive Companion",
    industry: "HealthTech & Mental Wellbeing",
    year: "2026",
    coverImage: "/work/mindspace/thumbnail.png",
    shortIntro:
      "A compassionate mental health ecosystem integrating empathetic AI emotional support, real-time mood logging, and structured cognitive breathwork protocols.",
    overview:
      "Mindspace bridges clinical psychological therapy and daily emotional wellness. We crafted a soothing, tactile mobile application designed around emotional safety, featuring adaptive AI tone modulation, multimodal audio journaling, and physiological breathwork exercises.",
    challenge:
      "Most mental health apps feel cold, clinical, and burdensome to use during emotional distress. Users report cognitive fatigue from repetitive survey forms and lack immediate, conversational de-escalation when feeling overwhelmed.",
    approach: {
      text: "We engineered an empathetic, human-centered wellbeing design system:",
      points: [
        "Warm, dark-mode ergonomics using calming gradients and organic pill geometries.",
        "Adaptive AI companion with distinct emotional tone states (Empathetic, Balanced, Reflective).",
        "Interactive 4-7-8 and belly breathing animations offering instant nervous system grounding.",
        "Client-side encrypted mood telemetry ensuring 100% patient data confidentiality.",
      ],
    },
    result:
      "Mindspace achieved an 82% reduction in self-reported anxiety among beta cohorts, with over 1.2M mindful reflections logged and a 4.9 App Store rating across 45,000+ active users.",
    stats: [
      { value: "-82%", label: "Anxiety Reduction" },
      { value: "1.2M+", label: "Reflections Logged" },
      { value: "4.9/5", label: "App Store Rating" },
      { value: "94%", label: "30-Day Retention" },
    ],
    testimonial: {
      quote:
        "The interface doesn't feel like a medical chart—it feels like a sanctuary. It meets you exactly where you are emotionally with zero judgment.",
      name: "Dr. Elena Rostova",
      role: "Lead Clinical Advisor, Mindspace Health",
    },
    gallery: [
      {
        type: "full",
        src: "/work/mindspace/thumbnail.png",
        caption:
          "Mindspace — AI Emotional Wellbeing & Cognitive Companion Platform.",
      },
      {
        type: "split",
        src: "/work/mindspace/01-onboarding.gif",
        title: "Emotional Onboarding & Safe Intake",
        description:
          "Gentle, welcoming entrance establishing user baseline and clinical safety boundaries.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/mindspace/02-account-setup.gif",
            caption: "Personalized Goal Setting & Profile Tailoring",
          },
          {
            src: "/work/mindspace/03-personalization-loading.png",
            caption: "Dynamic Cognitive Modeling Engine",
          },
        ],
      },
      {
        type: "split",
        src: "/work/mindspace/04-homepage-mood-checkin.png",
        title: "Daily Mood Tracking & Valence Dial",
        description:
          "Frictionless mood check-ins with emotional valence sliders and calendar history.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/mindspace/05-ai-therapy-chat.png",
            caption: "Empathetic AI Companion — Adaptive Tone States",
          },
          {
            src: "/work/mindspace/06-daily-summary-emotions.png",
            caption: "Daily Psychological Summary & Emotional Trends",
          },
        ],
      },
      {
        type: "split",
        src: "/work/mindspace/07-breathwork-journal.gif",
        title: "Guided Breathwork & Audio Reflection",
        description:
          "Interactive 4-7-8 breathing guides and encrypted voice journaling for physiological grounding.",
      },
      {
        type: "full",
        src: "/work/mindspace/08-wellbeing-profile-goals.png",
        caption:
          "Holistic Wellbeing Profile — Milestone streaks, personality insights, and goal tracking.",
      },
    ],
  },
  {
    id: "nexa",
    slug: "nexa-trading",
    clientName: "Nexa Trading",
    clientLogo: (
      <span className="font-bricolage tracking-wider font-bold uppercase text-[20px] md:text-[22px]">
        NEXA
      </span>
    ),
    category: ["UI/UX Design", "Crypto Exchange", "Mobile Trading"],
    services: ["ui-ux-design"],
    shortLabel: "Next-Gen Crypto & Asset Trading Platform",
    industry: "FinTech & Digital Assets",
    year: "2026",
    coverImage: "/work/nexa/thumbnail.png",
    shortIntro:
      "A high-speed crypto and digital asset trading terminal combining sub-millisecond order routing, real-time depth charts, multi-currency digital vaults, and seamless biometric onboarding.",
    overview:
      "Nexa Trading redefines institutional and retail cryptocurrency trading on mobile. We designed a clean, high-precision mobile trading application that balances high-density candlestick telemetry, instant coin swaps, seamless fiat-to-crypto onramps, and fortified multi-signature security.",
    challenge:
      "Most crypto exchange apps overwhelm users with cluttered, laggy order books, opaque transaction fees, and high-friction identity verification flows that deter new traders during market volatility.",
    approach: {
      text: "We engineered an institutional-grade, user-centric trading ecosystem:",
      points: [
        "Frictionless onboarding and KYC verification with biometric PIN protection.",
        "Real-time candlestick charts with multi-timeframe volume and depth indicators.",
        "Single-tap Buy & Sell execution with instant fee breakdown and slippage protection.",
        "Fortified multi-currency vault wallet supporting instant deposits and bank withdrawals.",
      ],
    },
    result:
      "Nexa processed over $180M in trading volume during its public launch month with a 99.98% execution uptime and a 4.9 App Store rating across 60,000+ active traders.",
    stats: [
      { value: "$180M+", label: "Monthly Volume" },
      { value: "<45ms", label: "Order Execution" },
      { value: "4.9/5", label: "App Store Rating" },
      { value: "99.98%", label: "Platform Uptime" },
    ],
    testimonial: {
      quote:
        "The cleanest trading interface we've ever launched. It packs pro-trader power into a mobile experience so fluid that anyone can trade with confidence.",
      name: "Marcus Vance",
      role: "Chief Operating Officer, Nexa Markets",
    },
    gallery: [
      {
        type: "full",
        src: "/work/nexa/thumbnail.png",
        caption:
          "Nexa Trading — Next-Gen Crypto & Digital Asset Trading Platform.",
      },
      {
        type: "split",
        src: "/work/nexa/01-onboarding.gif",
        title: "Fluid Mobile Onboarding & Market Welcome",
        description:
          "Engaging, high-contrast onboarding guiding users straight into live market action.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/nexa/02-register-verification.gif",
            caption: "Institutional Registration & Biometric Security Setup",
          },
          {
            src: "/work/nexa/03-home-coin-detail-buy.png",
            caption: "Real-Time Coin Detail & Interactive Price History",
          },
        ],
      },
      {
        type: "split",
        src: "/work/nexa/04-coin-transactions.png",
        title: "Frictionless Buy & Sell Execution",
        description:
          "Clear order previews with real-time slippage calculations and instant transaction confirmations.",
      },
      {
        type: "grid-2",
        items: [
          {
            src: "/work/nexa/05-trade-execution.png",
            caption: "Precision Trade Execution & Order Confirmation",
          },
          {
            src: "/work/nexa/06-wallet-deposit.png",
            caption: "Multi-Asset Digital Vault & Instant Deposit Review",
          },
        ],
      },
      {
        type: "full",
        src: "/work/nexa/07-profile-settings.gif",
        caption:
          "Trader Profile Hub — Bank integrations, language selection, and instant push notifications.",
      },
    ],
  },
  {
    id: "hando",
    slug: "hando",
    clientName: "Hando Handroll Bar",
    clientLogo: (
      <span className="font-mono tracking-widest font-bold uppercase text-[20px] md:text-[22px]">
        HANDO
      </span>
    ),
    category: [
      "Web Development",
      "Conversion Architecture",
      "Digital Experience",
    ],
    services: ["web-development"],
    shortLabel: "Hospitality & Conversion Web Platform",
    industry: "Culinary & Michelin Hospitality",
    year: "2026",
    coverImage: bottomCard1,
    shortIntro:
      "A high-performance modern web platform and reservation architecture for a Michelin-recognized Japanese handroll dining concept.",
    overview:
      "Hando needed a lightning-fast web experience that reflected their uncompromising minimalist dining philosophy while seamlessly handling thousands of weekend table reservations.",
    challenge:
      "Balancing immersive high-resolution food cinematography with sub-second page loads and frictionless reservation checkout.",
    approach: {
      text: "We architected an edge-rendered web platform with instant booking calendar syncing:",
      points: [
        "Sub-800ms Time-To-Interactive with aggressive asset pre-caching.",
        "Integrated SevenRooms reservation pipeline with automated SMS confirmation.",
        "Dynamic seasonal menu CMS allowing daily fish availability updates in seconds.",
      ],
    },
    result:
      "Processed 40,000+ monthly online reservations with zero downtime and a 42% lift in direct bookings.",
    stats: [
      { value: "40K+", label: "Monthly Diners Booked" },
      { value: "99.99%", label: "Uptime" },
      { value: "<0.8s", label: "Load Time" },
    ],
    testimonial: {
      quote:
        "Our site is fast, gorgeous, and rock-solid. Table reservations flow in effortlessly without a single hitch.",
      name: "Chef Kenji Sato",
      role: "Owner, Hando Handroll Bar",
    },
    gallery: [
      {
        type: "full",
        src: bottomCard1,
        caption:
          "Hando Handroll Bar — Digital Culinary Experience & Edge Booking Engine.",
      },
    ],
  },
  {
    id: "bluemore-web",
    slug: "bluemore-web",
    clientName: "Blue More Digital Charter",
    clientLogo: (
      <span className="font-bricolage tracking-wider font-bold uppercase text-[20px] md:text-[22px]">
        BLUE MORE WEB
      </span>
    ),
    category: ["Web Development", "Charter Booking Engine", "Full-Stack"],
    services: ["web-development"],
    shortLabel: "Charter Booking & Fleet Platform",
    industry: "Maritime & Ultra-Luxury Hospitality",
    year: "2026",
    coverImage: middleRef1,
    shortIntro:
      "A bespoke booking engine and fleet explorer connecting ultra-high-net-worth travelers with 242 curated Mediterranean yachts.",
    overview:
      "We designed and developed the flagship digital charter platform for Blue More Yachting, featuring real-time yacht availability, interactive route simulators, and private concierge enquiry systems.",
    challenge:
      "Coordinating real-time vessel schedules across 3 Mediterranean countries while delivering an effortless luxury guest experience.",
    approach: {
      text: "We built an intuitive fleet filtration engine with immersive full-screen video tours:",
      points: [
        "Interactive route mapping with waypoint weather data and anchorage depths.",
        "Real-time vessel availability calendars synced with maritime brokers.",
        "Instant private concierge routing with custom PDF itinerary generation.",
      ],
    },
    result:
      "Contributed to a 140% surge in direct charter inquiries within 60 days of launch.",
    stats: [
      { value: "+140%", label: "Direct Inquiries" },
      { value: "242", label: "Vessels Connected" },
      { value: "100%", label: "Mobile Responsive" },
    ],
    testimonial: {
      quote:
        "The digital charter platform sets a new gold standard in luxury maritime booking. Inquiries have doubled.",
      name: "Captain Denis V.",
      role: "Fleet Director, Blue More",
    },
    gallery: [
      {
        type: "full",
        src: middleRef1,
        caption:
          "Blue More Digital Charter — Mediterranean Fleet Platform & Route Simulator.",
      },
    ],
  },
  {
    id: "workai",
    slug: "workai",
    clientName: "WorkAI",
    clientLogo: (
      <span className="font-sans font-bold tracking-tight text-[20px] md:text-[22px] text-white">
        WorkAI
      </span>
    ),
    category: ["AI Workflows", "Visual Automation", "Node Canvas"],
    services: ["ai-automation"],
    shortLabel: "Workflow AI Canvas & Node Builder",
    industry: "AI Workflows & Enterprise Automation",
    year: "2026",
    coverImage: "/work/workai/Slide1.png",
    shortIntro:
      "A visual-first AI workflow orchestration suite engineered for modern product teams, combining real-time infinite canvas, intelligent node automation, and frictionless multi-app integrations.",
    overview:
      "WorkAI is an enterprise visual automation platform that empowers distributed engineering and operations teams to scaffold, calibrate, and deploy autonomous multi-agent workflows in real time.",
    challenge:
      "Replacing rigid, code-heavy JSON automation scripts and disconnected webhook tools with an intuitive visual canvas.",
    approach: {
      text: "We engineered an interactive infinite node canvas and enterprise OAuth hub:",
      points: [
        "Dynamic node orchestration with prompt-assisted diagram expansion.",
        "Live multiplayer co-editing with emoji stickers, sticky notes, and comments.",
        "One-click OAuth integrations with SOC2 compliance and zero-trust security.",
      ],
    },
    result:
      "Accelerated workflow deployment velocity by 14x with 98.4% execution accuracy across pilot enterprise teams.",
    stats: [
      { value: "98.4%", label: "Workflow Accuracy" },
      { value: "14x", label: "Speed Acceleration" },
      { value: "< 50ms", label: "Node Latency" },
      { value: "240+", label: "Integrations" },
    ],
    testimonial: {
      quote:
        "WorkAI transformed how our cross-functional teams build automations. We went from multi-week sprint delays to deploying autonomous workflows in single afternoons.",
      name: "Elena Rostova",
      role: "VP of Engineering & Automation, WorkAI",
    },
    gallery: [
      {
        type: "full",
        src: "/work/workai/Slide1.png",
        caption:
          "WorkAI — Executive Master: Workflow AI Canvas & Node Builder.",
      },
      {
        type: "full",
        src: "/work/workai/Slide2.png",
        caption:
          "WorkAI — Secure Multi-Tenant SSO & Onboarding.",
      },
      {
        type: "full",
        src: "/work/workai/Slide3.png",
        caption:
          "WorkAI — Workspace Dashboard & Project Templates.",
      },
      {
        type: "full",
        src: "/work/workai/Slide4.png",
        caption:
          "WorkAI — Infinite Canvas Engine & Node Tools.",
      },
      {
        type: "full",
        src: "/work/workai/Slide5.png",
        caption:
          "WorkAI — Collaboration Layer & Sticky Comments.",
      },
      {
        type: "full",
        src: "/work/workai/Slide6.png",
        caption:
          "WorkAI — Integration Hub & Enterprise OAuth Connectors.",
      },
    ],
  },
]

function normalizeProjectAssets(project: Project): Project {
  return {
    ...project,
    coverImage: project.coverImage ? assetUrl(project.coverImage) : project.coverImage,
    media: project.media?.map((m) => ({
      ...m,
      src: assetUrl(m.src),
      compareBefore: m.compareBefore ? assetUrl(m.compareBefore) : undefined,
      compareAfter: m.compareAfter ? assetUrl(m.compareAfter) : undefined,
    })),
    artifacts: project.artifacts?.map((a) => ({
      ...a,
      src: assetUrl(a.src),
    })),
  }
}

export const PROJECTS: Project[] = RAW_PROJECTS.map(normalizeProjectAssets)

// Helper functions for easy querying
export function getProjectBySlug(slug: string): Project | undefined {
  if (slug === "axorix") return PROJECTS.find((p) => p.id === "axorix")
  if (slug === "nodaliq" || slug === "nodal")
    return PROJECTS.find((p) => p.id === "nodaliq")
  if (slug === "boltshift") return PROJECTS.find((p) => p.id === "euphorixz")
  if (
    slug === "roland-donald" ||
    slug === "rolandodonald04" ||
    slug === "rolandodonald04_complete" ||
    slug === "rolandodonald" ||
    slug === "roland"
  ) {
    return PROJECTS.find((p) => p.id === "roland-donald")
  }
  if (
    slug === "spherule" ||
    slug === "bluemore" ||
    slug === "2.rolandodonald04" ||
    slug === "2.rolandodonald04-complete" ||
    slug === "yacht"
  ) {
    return (
      PROJECTS.find((p) => p.id === "bluemore") ||
      PROJECTS.find((p) => p.id === "spherule")
    )
  }
  if (
    slug === "lgm-aviation" ||
    slug === "lgm" ||
    slug === "lgmaviation" ||
    slug === "lgm_aviation" ||
    slug === "aviation"
  ) {
    return PROJECTS.find((p) => p.id === "lgm-aviation")
  }
  if (
    slug === "flex" ||
    slug === "flex-aviation" ||
    slug === "flex_aviation" ||
    slug === "flexaviation" ||
    slug === "flex-sport"
  ) {
    return PROJECTS.find((p) => p.id === "flex")
  }
  if (
    slug === "pypo" ||
    slug === "pypo-brand" ||
    slug === "pypo-brand-guidelines" ||
    slug === "pypobrand"
  ) {
    return PROJECTS.find((p) => p.id === "pypo")
  }
  if (
    slug === "atma" ||
    slug === "atma-brand" ||
    slug === "atma-brand-guidelines" ||
    slug === "atmabrand" ||
    slug === "atma-furniture"
  ) {
    return PROJECTS.find((p) => p.id === "atma")
  }
  if (
    slug === "aura" ||
    slug === "aura-brand" ||
    slug === "aura-brand-guidelines" ||
    slug === "aurabrand" ||
    slug === "aura-design"
  ) {
    return PROJECTS.find((p) => p.id === "aura")
  }
  if (slug === "nexa" || slug === "nexa-trading" || slug === "nexatrading") {
    return PROJECTS.find((p) => p.id === "nexa")
  }
  if (slug === "aivon" || slug === "aivon-wellness") {
    return PROJECTS.find((p) => p.id === "aivon")
  }
  if (slug === "baseway" || slug === "baseway-organics") {
    return PROJECTS.find((p) => p.id === "baseway")
  }
  if (slug === "finora" || slug === "finora-jewelry") {
    return PROJECTS.find((p) => p.id === "finora")
  }
  if (slug === "kiyocare" || slug === "kiyo-care") {
    return PROJECTS.find((p) => p.id === "kiyocare")
  }
  if (slug === "noritsu-ai" || slug === "noritsuai" || slug === "noritsu") {
    return PROJECTS.find((p) => p.id === "noritsu-ai")
  }
  if (
    slug === "wildflower" ||
    slug === "wildflower-atelier" ||
    slug === "wildfloweratelier" ||
    slug === "wild-flower"
  ) {
    return PROJECTS.find((p) => p.id === "wildflower-atelier")
  }
  if (slug === "workai" || slug === "work-ai" || slug === "work_ai") {
    return PROJECTS.find((p) => p.id === "workai")
  }
  return PROJECTS.find((p) => p.slug === slug || p.id === slug)
}

export function getServiceCategoryBySlug(
  slug: string,
): ServiceCategory | undefined {
  const normalized = (slug || "").toLowerCase().trim()
  if (
    normalized === "pitch-deck" ||
    normalized === "pitch-deck-design" ||
    normalized === "pitch-decks"
  ) {
    return SERVICES_CATEGORIES[0]
  }
  if (
    normalized === "logo-branding" ||
    normalized === "logo-and-branding" ||
    normalized === "branding" ||
    normalized === "brand-guidelines" ||
    normalized === "brand-guideline" ||
    normalized === "logo"
  ) {
    return SERVICES_CATEGORIES[1]
  }
  if (
    normalized === "social-media" ||
    normalized === "social-media-design" ||
    normalized === "social"
  ) {
    return SERVICES_CATEGORIES[2]
  }
  if (
    normalized === "ui-ux" ||
    normalized === "ui-ux-design" ||
    normalized === "uiux"
  ) {
    return SERVICES_CATEGORIES[3]
  }
  if (
    normalized === "web-development" ||
    normalized === "web-dev" ||
    normalized === "web"
  ) {
    return SERVICES_CATEGORIES[4]
  }
  if (
    normalized === "ai-automation" ||
    normalized === "automation" ||
    normalized === "ai"
  ) {
    return SERVICES_CATEGORIES[5]
  }
  return (
    SERVICES_CATEGORIES.find((s) => s.slug === normalized) ||
    SERVICES_CATEGORIES[0]
  )
}

export function getProjectsForService(serviceSlug: string): Project[] {
  const service = getServiceCategoryBySlug(serviceSlug)
  if (!service) return []
  return PROJECTS.filter((p) => p.services && p.services.includes(service.slug))
}

export function getNextProject(currentSlug: string): Project {
  const currentIndex = PROJECTS.findIndex(
    (p) => p.slug === currentSlug || p.id === currentSlug,
  )
  if (currentIndex === -1 || currentIndex === PROJECTS.length - 1) {
    return PROJECTS[0]
  }
  return PROJECTS[currentIndex + 1]
}

export function getOtherProjects(currentSlug: string): Project[] {
  return PROJECTS.filter((p) => p.slug !== currentSlug && p.id !== currentSlug)
}
