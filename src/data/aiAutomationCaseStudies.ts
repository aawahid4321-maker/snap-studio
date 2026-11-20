/**
 * Reusable AI Automation & Pitch Deck Case Study Configuration System
 * 
 * Replicates the exact design, structure, and formatting of the reference
 * pitch deck case study (DriveBerry) shown in Image 1.
 * 
 * To add a new project in the future:
 * 1. Drop slide images into public/work/[project-folder]/ (e.g. Slide1.png, Slide2.png ...)
 * 2. Add an entry below using createAiAutomationCaseStudy({ ... })
 * 3. Add project metadata in src/data/projects.tsx under services: ["ai-automation"]
 */

export interface PitchDeckSlide {
  src: string
  label: string
  description?: string
}

export interface PitchDeckCard {
  number: string
  title: string
  description: string
}

export interface GridSlide {
  src: string
  badge: string
  caption: string
}

export interface RelatedProjectItem {
  id: string
  client: string
  service: string
  tag: string
  image: string
}

export interface CaseStudyStat {
  label: string
  value: string
  description: string
}

export interface AiAutomationCaseStudyConfig {
  id: string
  slug: string
  clientName: string
  categoryNumber?: string // default "( 06 )"
  categoryLabel?: string // default "AI / AUTOMATION"
  industry: string
  year: string
  timeline: string
  scope: string[]
  heroHeadline: {
    prefix: string
    highlight: string
  }
  heroSubheadline: string
  coverImage: string
  coverBadge?: string
  narrative: {
    eyebrow?: string
    heading?: string
    leadText: string
    leadHighlight: string
    leadSuffix: string
    slide2Src: string
    slide2Badge: string
    slide2Alt: string
    challengeEyebrow?: string
    challengeHeading: string
    challengeText: string
    problemCards: PitchDeckCard[]
  }
  solution: {
    slide3Src: string
    slide3Badge: string
    slide3Alt: string
    eyebrow?: string
    heading: string
    description: string
    solutionCards: PitchDeckCard[]
  }
  architecture: {
    eyebrow: string
    headingPrefix: string
    headingHighlight: string
    description: string
    gridSlides: GridSlide[]
  }
  stats?: CaseStudyStat[]
  workflow: {
    eyebrow: string
    headingPrefix: string
    headingHighlight: string
    bannerSrc: string
    bannerBadge: string
    bannerAlt: string
    conceptHeading: string
    conceptParagraph1: string
    conceptParagraph2: string
  }
  results: {
    eyebrow: string
    headingPrefix: string
    headingHighlight: string
    descriptionText: string
    descriptionHighlight: string
    descriptionSuffix?: string
    metrics?: {
      value: string
      title: string
      desc: string
    }[]
    testimonial?: {
      quote: string
      name: string
      role: string
    }
  }
  slides: PitchDeckSlide[]
  relatedProjects?: RelatedProjectItem[]
  faq: {
    question: string
    answer: string
  }[]
}

/**
 * Factory helper with intelligent defaults so adding a future project takes just a few lines!
 */
export function createAiAutomationCaseStudy(
  params: Partial<AiAutomationCaseStudyConfig> & {
    id: string
    clientName: string
    slides: PitchDeckSlide[]
  }
): AiAutomationCaseStudyConfig {
  const id = params.id
  const slug = params.slug || id
  const client = params.clientName
  const slides = params.slides

  return {
    id,
    slug,
    clientName: client,
    categoryNumber: params.categoryNumber || "( 06 )",
    categoryLabel: params.categoryLabel || "AI / AUTOMATION",
    industry: params.industry || "AI Workflows & Enterprise Automation",
    year: params.year || "2026",
    timeline: params.timeline || "2026",
    scope: params.scope || [
      "AI Workflow Automation",
      "Interactive Node Engine",
      "Multi-Agent Telemetry",
      "Enterprise OAuth Hub",
      "16-Slide Deck",
    ],
    heroHeadline: params.heroHeadline || {
      prefix: "Orchestrating enterprise intelligence with an",
      highlight: `autonomous ${client.toLowerCase()} workflow canvas`,
    },
    heroSubheadline:
      params.heroSubheadline ||
      `An enterprise-grade AI workflow platform engineered to articulate ${client}'s multi-agent node canvas, real-time telemetry pipelines, and frictionless enterprise integrations.`,
    coverImage: params.coverImage || slides[0]?.src || `/work/${id}/Slide1.png`,
    coverBadge: params.coverBadge || "Cover Page · Slide 01",
    narrative: params.narrative || {
      eyebrow: "Project Narrative",
      heading: "Project Description",
      leadText: `When distributed engineering meets complex agentic automation, the hardest challenge is visibility. We partnered with ${client} to engineer an`,
      leadHighlight: `intuitive visual workflow presentation and canvas system`,
      leadSuffix: `where multi-agent decision loops, disparate API webhooks, and live telemetry are unified into a high-conviction narrative that commands investor and enterprise authority.`,
      slide2Src: slides[1]?.src || `/work/${id}/Slide2.png`,
      slide2Badge: "Authentication Architecture · Slide 02",
      slide2Alt: `${client} Slide 2: Authentication & Onboarding Architecture`,
      challengeEyebrow: "Challenge Breakdown",
      challengeHeading: "Problem",
      challengeText: `Traditional workflow builders rely on rigid vertical form trees and opaque JSON configurations. When multi-agent AI systems trigger dynamic decision branches, teams lose visibility into state transitions, error recovery loops, and human-in-the-loop approvals.`,
      problemCards: [
        {
          number: "01",
          title: "Opaque Execution Trees",
          description: "Engineers struggle to debug nested AI agent branching across invisible backend state machines without a real-time visual canvas, causing costly latency.",
        },
        {
          number: "02",
          title: "Linear Builder Fatigue",
          description: "Product managers and operations specialists are locked out of automation authoring due to dense, code-heavy JSON requirements and brittle scripts.",
        },
        {
          number: "03",
          title: "Fragmented Tool Stacks",
          description: "Disconnected integrations between messaging, databases, and developer APIs result in untracked webhook failures and lost business intelligence.",
        },
      ],
    },
    solution: params.solution || {
      slide3Src: slides[2]?.src || `/work/${id}/Slide3.png`,
      slide3Badge: "Workspace Architecture · Slide 03",
      slide3Alt: `${client} Slide 3: Workspace Dashboard & Architecture`,
      eyebrow: "Strategic Resolution",
      heading: "The Solution",
      description: `Anticipate and orchestrate instead of reacting. ${client} bridges the automation divide with a drag-and-drop infinite node canvas, instant natural language prompt expansion, and pre-configured OAuth connectors for over 240+ enterprise services.`,
      solutionCards: [
        {
          number: "01",
          title: "Dynamic Node Orchestration",
          description: "Visual drag-and-drop flowchart blocks with instant AI prompt expansion, automated sitemap generation, and real-time parameter validation.",
        },
        {
          number: "02",
          title: "Multiplayer Canvas Synergy",
          description: "Real-time collaborative cursors, interactive emoji stickers, contextual sticky notes, and threaded comments keeping cross-functional teams in lockstep.",
        },
        {
          number: "03",
          title: "Enterprise Integration Hub",
          description: "One-click OAuth connections to Slack, Google Workspace, GitHub, and custom webhooks with zero-trust AES-256 encryption and audit logs.",
        },
      ],
    },
    architecture: params.architecture || {
      eyebrow: "Platform Ecosystem · Slide 03-06",
      headingPrefix: "Style Guide &",
      headingHighlight: "Platform Architecture",
      description: "Four core slide modules detailing workspace templates, infinite canvas shape tools, multiplayer collaboration stickers, and enterprise integrations.",
      gridSlides: [
        {
          src: slides[2]?.src || `/work/${id}/Slide3.png`,
          badge: "Slide 03",
          caption: "Workspace Dashboard: Project Templates & Pro Subscription Tiers",
        },
        {
          src: slides[3]?.src || `/work/${id}/Slide4.png`,
          badge: "Slide 04",
          caption: "Infinite Canvas Engine: Dynamic Shape, Text & Note Primitives",
        },
        {
          src: slides[4]?.src || `/work/${id}/Slide5.png`,
          badge: "Slide 05",
          caption: "Collaboration Layer: Radial Emoji Stickers & Contextual Comments",
        },
        {
          src: slides[5]?.src || `/work/${id}/Slide6.png`,
          badge: "Slide 06",
          caption: "Integration Hub: Enterprise Security & Multi-App OAuth Connectors",
        },
      ],
    },
    workflow: params.workflow || {
      eyebrow: "Technology & Operations Stack",
      headingPrefix: "Workflow &",
      headingHighlight: "Product Architecture",
      bannerSrc: slides[0]?.src || `/work/${id}/Slide1.png`,
      bannerBadge: "Centralized Workflow Canvas · Slide 01",
      bannerAlt: `${client} Slide 1: Centralized Workflow Canvas Banner`,
      conceptHeading: "Unified Telemetry & Autonomous Node Automation Workflow",
      conceptParagraph1: `Everything in one place: ${client} unifies the entire automation lifecycle into a single visual canvas—scaffolding flows from natural language prompts, calibrating logic branches, dry-running simulated payloads, and auto-deploying production webhooks.`,
      conceptParagraph2: `For enterprise teams, the platform replaces fragmented python scripts and brittle webhook tables with visual, self-healing node architectures. This dramatically accelerates sprint velocity, eliminates blind debugging, and delivers sub-50ms execution latency at scale.`,
    },
    results: params.results || {
      eyebrow: "Funding & Market Traction",
      headingPrefix: "The",
      headingHighlight: "Result",
      descriptionText: `Within weeks of pitch deck and platform rollout, ${client} successfully closed an oversubscribed `,
      descriptionHighlight: "$6.2M Seed financing round",
      descriptionSuffix: " led by tier-1 enterprise AI funds, accelerating workflow deployment velocity by 14x with 98.4% execution accuracy across pilot enterprise teams.",
    },
    slides,
    relatedProjects: params.relatedProjects || [
      {
        id: "nodaliq",
        client: "NODALiQ",
        service: "AI Network Automation & Identity Design System",
        tag: "AI Architecture",
        image: "/imports/top-ref-2.jpg",
      },
      {
        id: "euphorixz",
        client: "Euphorixz",
        service: "Nutraceutical Innovation & Investor Pitch Deck",
        tag: "Investor Deck",
        image: "/imports/bottom-card-4.png",
      },
      {
        id: "driveberry",
        client: "DriveBerry",
        service: "AI Vehicle Diagnostics & Series-A Investor Pitch Deck",
        tag: "Pitch Deck",
        image: "/work/driveberry/Slide1.PNG",
      },
    ],
    faq: params.faq || [
      {
        question: `How does ${client} integrate with existing enterprise tools?`,
        answer: `${client} provides native bi-directional connectors for Slack, Google Workspace, GitHub, Notion, Linear, Microsoft 365, and custom webhooks with client-side encrypted credentials.`,
      },
      {
        question: `Can non-technical team members create and run workflows?`,
        answer: `Yes. The visual drag-and-drop canvas and natural language prompt assistant allow product managers, researchers, and operations leads to build and monitor workflows without writing code.`,
      },
      {
        question: `What failover mechanisms are in place for failed automation nodes?`,
        answer: `Every node supports configurable fallback paths, automated retry queues with exponential backoff, and instant telemetry alerts sent directly to your communication channels.`,
      },
      {
        question: `Is ${client} compliant with SOC2 and enterprise privacy standards?`,
        answer: `Yes. All telemetry and credentials are encrypted using AES-256 client-side keys, with granular role-based access control (RBAC) and immutable audit logs compliant with SOC2 Type II.`,
      },
    ],
  }
}

/**
 * Register all AI Automation Case Studies here.
 * Adding a new project is as simple as adding an entry below!
 */
export const AI_AUTOMATION_CASE_STUDIES: Record<string, AiAutomationCaseStudyConfig> = {
  workai: createAiAutomationCaseStudy({
    id: "workai",
    slug: "workai",
    clientName: "WorkAI",
    categoryNumber: "( 06 )",
    categoryLabel: "AI / AUTOMATION · WORKAI",
    industry: "AI Workflows & Enterprise Automation",
    year: "2026",
    timeline: "2026",
    scope: [
      "AI Workflow Automation",
      "Interactive Node Engine",
      "Multi-Agent Telemetry",
      "Enterprise OAuth Hub",
      "16-Slide Deck",
    ],
    heroHeadline: {
      prefix: "Orchestrating enterprise intelligence with an",
      highlight: "autonomous workflow canvas",
    },
    heroSubheadline:
      "An enterprise-grade AI workflow platform engineered to articulate WorkAI's multi-agent node canvas, real-time telemetry pipelines, and frictionless enterprise integrations.",
    coverImage: "/work/workai/Slide1.png",
    coverBadge: "Cover Page · Slide 01",
    narrative: {
      eyebrow: "Project Narrative",
      heading: "Project Description",
      leadText:
        "When distributed engineering meets complex agentic automation, the hardest challenge is visibility. We partnered with WorkAI to engineer an",
      leadHighlight: "intuitive visual workflow presentation and canvas system",
      leadSuffix:
        "where multi-agent decision loops, disparate API webhooks, and live telemetry are unified into a high-conviction narrative that commands investor and enterprise authority.",
      slide2Src: "/work/workai/Slide2.png",
      slide2Badge: "Authentication Architecture · Slide 02",
      slide2Alt: "WorkAI Slide 2: Secure Multi-Tenant SSO & Onboarding Architecture",
      challengeEyebrow: "Challenge Breakdown",
      challengeHeading: "Problem",
      challengeText:
        "Traditional workflow builders rely on rigid vertical form trees and opaque JSON configurations. When multi-agent AI systems trigger dynamic decision branches, teams lose visibility into state transitions, error recovery loops, and human-in-the-loop approvals.",
      problemCards: [
        {
          number: "01",
          title: "Opaque Execution Trees",
          description:
            "Engineers struggle to debug nested AI agent branching across invisible backend state machines without a real-time visual canvas, causing costly latency.",
        },
        {
          number: "02",
          title: "Linear Builder Fatigue",
          description:
            "Product managers and operations specialists are locked out of automation authoring due to dense, code-heavy JSON requirements and brittle scripts.",
        },
        {
          number: "03",
          title: "Fragmented Tool Stacks",
          description:
            "Disconnected integrations between messaging, databases, and developer APIs result in untracked webhook failures and lost business intelligence.",
        },
      ],
    },
    solution: {
      slide3Src: "/work/workai/Slide3.png",
      slide3Badge: "Workspace Architecture · Slide 03",
      slide3Alt: "WorkAI Slide 3: Workspace Dashboard & Architecture",
      eyebrow: "Strategic Resolution",
      heading: "The Solution",
      description:
        "Anticipate and orchestrate instead of reacting. WorkAI bridges the automation divide with a drag-and-drop infinite node canvas, instant natural language prompt expansion, and pre-configured OAuth connectors for over 240+ enterprise services.",
      solutionCards: [
        {
          number: "01",
          title: "Dynamic Node Orchestration",
          description:
            "Visual drag-and-drop flowchart blocks with instant AI prompt expansion, automated sitemap generation, and real-time parameter validation.",
        },
        {
          number: "02",
          title: "Multiplayer Canvas Synergy",
          description:
            "Real-time collaborative cursors, interactive emoji stickers, contextual sticky notes, and threaded comments keeping cross-functional teams in lockstep.",
        },
        {
          number: "03",
          title: "Enterprise Integration Hub",
          description:
            "One-click OAuth connections to Slack, Google Workspace, GitHub, and custom webhooks with zero-trust AES-256 encryption and audit logs.",
        },
      ],
    },
    architecture: {
      eyebrow: "Platform Ecosystem · Slide 04-05",
      headingPrefix: "Style Guide &",
      headingHighlight: "Platform Architecture",
      description:
        "Two core slide modules detailing infinite canvas shape tools and multiplayer collaboration stickers.",
      gridSlides: [
        {
          src: "/work/workai/Slide4.png",
          badge: "Slide 04",
          caption: "Infinite Canvas Engine: Dynamic Shape, Text & Note Primitives",
        },
        {
          src: "/work/workai/Slide5.png",
          badge: "Slide 05",
          caption: "Collaboration Layer: Radial Emoji Stickers & Contextual Comments",
        },
      ],
    },
    stats: [
      {
        label: "Workflow Accuracy",
        value: "98.4%",
        description: "Execution Precision",
      },
      {
        label: "Speed Acceleration",
        value: "14x",
        description: "Sprint Velocity Lift",
      },
      {
        label: "Node Latency",
        value: "< 50ms",
        description: "Real-Time Telemetry",
      },
      {
        label: "Integrations",
        value: "240+",
        description: "Pre-Built OAuth Connectors",
      },
    ],
    workflow: {
      eyebrow: "Technology & Operations Stack",
      headingPrefix: "Workflow &",
      headingHighlight: "Product Architecture",
      bannerSrc: "/work/workai/Slide6.png",
      bannerBadge: "Enterprise Security & Integration Hub · Slide 06",
      bannerAlt: "WorkAI Slide 6: Enterprise Security & Multi-App OAuth Connectors",
      conceptHeading: "Enterprise Integration Hub & Autonomous Security Architecture",
      conceptParagraph1:
        "Centralized security meets rapid execution: WorkAI equips modern product organizations with granular app permissions, user role provisioning, and encrypted OAuth connectors for over 240+ enterprise services.",
      conceptParagraph2:
        "By standardizing multi-app webhooks and API routing into a single verified hub, engineering and operations teams eliminate blind integration failures and maintain full audit compliance at scale.",
    },
    results: {
      eyebrow: "Funding & Market Traction",
      headingPrefix: "The",
      headingHighlight: "Result",
      descriptionText:
        "Within weeks of pitch deck and platform rollout, WorkAI successfully closed an oversubscribed ",
      descriptionHighlight: "$6.2M Seed financing round",
      descriptionSuffix:
        " led by tier-1 enterprise AI funds, accelerating workflow deployment velocity by 14x with 98.4% execution accuracy across pilot enterprise teams.",
      metrics: [
        {
          value: "$6.2M",
          title: "Seed Round Oversubscribed",
          desc: "Closed within 4 weeks from tier-1 enterprise AI funds to accelerate canvas R&D.",
        },
        {
          value: "14x",
          title: "Deployment Velocity Lift",
          desc: "Single-afternoon deployments replacing multi-week sprint delays.",
        },
        {
          value: "98.4%",
          title: "Execution Accuracy",
          desc: "Sub-50ms node latency with automated self-healing error recovery.",
        },
      ],
      testimonial: {
        quote:
          "WorkAI transformed how our cross-functional teams build automations. We went from multi-week sprint delays to deploying autonomous workflows in single afternoons.",
        name: "Elena Rostova",
        role: "VP of Engineering & Automation, WorkAI",
      },
    },
    slides: [
      {
        src: "/work/workai/Slide1.png",
        label: "01. Executive Master: Workflow AI Canvas & Node Builder",
        description: "Dark-mode visual canvas with AI prompt assistant and dynamic sitemap nodes.",
      },
      {
        src: "/work/workai/Slide2.png",
        label: "02. Onboarding & Authentication: Secure Multi-Tenant SSO",
        description: "Frictionless Google OAuth, workspace provisioning, and password reset workflows.",
      },
      {
        src: "/work/workai/Slide3.png",
        label: "03. Workspace Dashboard: Project Templates & Pro Upgrade",
        description: "Team board organization, template library, and transparent tiered subscription flows.",
      },
      {
        src: "/work/workai/Slide4.png",
        label: "04. Infinite Canvas Engine: Dynamic Shape, Text & Note Tools",
        description: "Interactive toolbox supporting custom typography, rectangle primitives, and note cards.",
      },
      {
        src: "/work/workai/Slide5.png",
        label: "05. Collaboration Layer: Emoji Stickers & Feedback Loops",
        description: "Radial sticker menu, interactive emoticons, and contextual comment threads.",
      },
      {
        src: "/work/workai/Slide6.png",
        label: "06. Integration Hub: Enterprise Security & OAuth Connectors",
        description: "Granular app permissions, user profile management, and live webhook routing.",
      },
    ],
    relatedProjects: [
      {
        id: "nodaliq",
        client: "NODALiQ",
        service: "AI Network Automation & Identity Design System",
        tag: "AI Architecture",
        image: "/imports/top-ref-2.jpg",
      },
      {
        id: "euphorixz",
        client: "Euphorixz",
        service: "Nutraceutical Innovation & Investor Pitch Deck",
        tag: "Investor Deck",
        image: "/imports/bottom-card-4.png",
      },
      {
        id: "driveberry",
        client: "DriveBerry",
        service: "AI Vehicle Diagnostics & Series-A Investor Pitch Deck",
        tag: "Pitch Deck",
        image: "/work/driveberry/Slide1.PNG",
      },
    ],
    faq: [
      {
        question: "How does WorkAI connect with existing third-party enterprise tools?",
        answer:
          "WorkAI provides native bi-directional integrations for Slack, Google Workspace, GitHub, Notion, Linear, Microsoft 365, and custom webhooks with encrypted OAuth keys.",
      },
      {
        question: "Can non-technical team members create and run workflows?",
        answer:
          "Yes. The natural language prompt assistant and visual drag-and-drop canvas allow product managers, researchers, and operations leads to build and monitor workflows without writing code.",
      },
      {
        question: "What failover mechanisms are in place for failed automation nodes?",
        answer:
          "Every node supports conditional fallback paths, automated retry queues with exponential backoff, and instant telemetry alerts sent directly to your notification channels.",
      },
      {
        question: "Is WorkAI compliant with SOC2 and enterprise privacy standards?",
        answer:
          "Yes. WorkAI employs AES-256 client-side encryption, granular role-based access control (RBAC), and immutable audit logs designed for SOC2 Type II compliance.",
      },
    ],
  }),
}

/**
 * Lookup helper
 */
export function getAiAutomationCaseStudyConfig(slugOrId: string): AiAutomationCaseStudyConfig | undefined {
  if (!slugOrId) return undefined
  const normalized = slugOrId.toLowerCase().trim()
  return (
    AI_AUTOMATION_CASE_STUDIES[normalized] ||
    Object.values(AI_AUTOMATION_CASE_STUDIES).find(
      (c) => c.slug.toLowerCase() === normalized || c.id.toLowerCase() === normalized
    )
  )
}
