/**
 * Brand-specific story section header metadata
 * Provides authentic, project-tailored headings and intro descriptions
 */

export interface StorySectionHeader {
  heading: string
  prefix: string
  highlight: string
  intro: string
}

export function getStorySectionHeader(slug: string): StorySectionHeader {
  switch (slug) {
    case "aivon":
      return {
        heading: "Autonomous AI & Intelligence In Motion",
        prefix: "Autonomous AI &",
        highlight: "Intelligence In Motion",
        intro:
          "Explore Aivon's 9:16 vertical story monographs. Engineered for enterprise software teams, highlighting real-time autonomous execution, neural workflows, and predictive machine learning.",
      }
    case "baseway":
      return {
        heading: "Athletic Movement & Urban Footwear In Motion",
        prefix: "Athletic Movement &",
        highlight: "Urban Footwear In Motion",
        intro:
          "Step into Baseway's dynamic 9:16 vertical stories. Designed for active commuters and athletes, showcasing proprietary cushioning geometry, urban durability, and modern DTC footwear culture.",
      }
    case "finora":
      return {
        heading: "Swiss Haute Horlogerie & High Jewelry In Motion",
        prefix: "Swiss Haute Horlogerie & High",
        highlight: "Jewelry In Motion",
        intro:
          "Explore Finora's luxury 9:16 vertical monographs. Light-refracting cinematic macro photography, gemological clarity breakdowns, and Swiss horological movements engineered for connoisseurs.",
      }
    case "kiyocare":
      return {
        heading: "Japanese Botanical Skincare Rituals In Motion",
        prefix: "Japanese Botanical",
        highlight: "Skincare Rituals In Motion",
        intro:
          "Experience Kiyocare's mindful 9:16 vertical monographs. Showcasing cold-pressed botanical active ingredients, deep cellular hydration rituals, and clean dermatologist-tested formulations.",
      }
    case "noritsu-ai":
      return {
        heading: "Industrial Automation & Neural Telemetry In Motion",
        prefix: "Industrial Automation &",
        highlight: "Neural Telemetry In Motion",
        intro:
          "Inspect NoritsuAI's high-density 9:16 operational stories. Visualizing multi-agent automation loops, instant telemetry diagnostics, and frictionless industrial software integration.",
      }
    case "wildflower-atelier":
    default:
      return {
        heading: "Parisian Botanical Couture & Ikebana In Motion",
        prefix: "Parisian Botanical Couture &",
        highlight: "Ikebana In Motion",
        intro:
          "Immerse in Wildflower Atelier's sculptural 9:16 floral monographs. Highlighting seasonal botanical artistry, organic French flower farm sourcing, and bespoke luxury salon installations.",
      }
  }
}
