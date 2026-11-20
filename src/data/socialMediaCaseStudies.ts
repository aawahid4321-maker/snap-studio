import {
  aivonImages,
  basewayImages,
  finoraImages,
  kiyocareImages,
  noritsuImages,
  wildflowerImages,
} from "@/assets/social-media"

export interface SocialMediaPostItem {
  id: string
  title: string
  subtitle?: string
  category?: string
  image: string
  slides?: string[]
  badge?: string
  likes?: string
  comments?: string
}

export interface SocialMediaStat {
  value: number
  suffix?: string
  prefix?: string
  label: string
  subtext?: string
}

export interface ColorSwatch {
  name: string
  hex: string
}

export interface TypographySpecimen {
  role: string
  fontName: string
  style: string
  sample: string
}

export interface ProcessStep {
  stepNumber: string
  title: string
  description: string
  image: string
  tag?: string
}

export interface BeforeAfterConfig {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  title: string
  description: string
}

export interface StickyStorySlide {
  id: string
  title: string
  caption: string
  tag: string
  image: string
  metrics?: string
}

export interface SocialMediaCaseStudyConfig {
  brandId: string
  brandName: string
  tagline: string
  heroSummary?: string
  primaryColor: string
  accentColor: string
  themeGradient: string
  excludedImages?: string[]
  stats?: SocialMediaStat[]
  stickyStory?: {
    heading: string
    subheading: string
    slides: StickyStorySlide[]
  }
  marqueeTop: SocialMediaPostItem[]
  marqueeBottom: SocialMediaPostItem[]
  bento?: {
    heading: string
    subheading: string
    featured: SocialMediaPostItem
    items: SocialMediaPostItem[]
  }
  brandPalette?: {
    colors: ColorSwatch[]
    typography: TypographySpecimen[]
  }
  process?: {
    heading: string
    steps: ProcessStep[]
  }
  beforeAfter?: BeforeAfterConfig
}

export const SOCIAL_MEDIA_CASE_STUDIES: Record<string, SocialMediaCaseStudyConfig> = {
  aivon: {
    brandId: "aivon",
    brandName: "Aivon",
    tagline: "Cultivating tranquility through a serene, editorial social presence",
    heroSummary:
      "A complete social media identity and content ecosystem built for holistic lifestyle brand Aivon. Centered on soft morning sunlight, breathable typography, tactile formulations, and save-optimized mindfulness carousels.",
    primaryColor: "#38BDF8",
    accentColor: "#F27256",
    themeGradient:
      "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56, 189, 248, 0.18), transparent 70%), linear-gradient(180deg, #0A111E 0%, #060B14 100%)",
    stats: [
      { value: 16, suffix: " Posts", label: "Editorial Assets", subtext: "Full campaign delivery" },
      { value: 4, suffix: " Decks", label: "Multi-Slide Carousels", subtext: "Save-optimized flows" },
      { value: 340, suffix: "%", label: "Engagement Lift", subtext: "Organic account reach" },
      { value: 6, suffix: " Wks", label: "Concept to Live", subtext: "Sprint velocity" },
    ],
    stickyStory: {
      heading: "Story Highlight Architecture",
      subheading:
        "Engineered for high-intent profile visitors: tap through morning mindful reflections, clinical transparency, and mindful living rituals.",
      slides: [
        {
          id: "story-1",
          title: "Morning Light Meditation",
          caption: "Soft morning sunlight, natural textures, and conscious breathwork prompts.",
          tag: "RITUAL 01",
          image: aivonImages.slide2,
          metrics: "94% Completion Rate",
        },
        {
          id: "story-2",
          title: "Formulation Integrity",
          caption: "Macro ingredient breakdowns detailing cold-pressed organic botanicals.",
          tag: "PURITY 02",
          image: aivonImages.slide3,
          metrics: "88% Save-to-Share",
        },
        {
          id: "story-3",
          title: "Breathable Typography",
          caption: "Minimalist editorial quotes engineered to pause scroll fatigue.",
          tag: "ESSENCE 03",
          image: aivonImages.slide4,
          metrics: "4.2x Avg Watch Time",
        },
        {
          id: "story-4",
          title: "The Master Monograph",
          caption: "Unified campaign visual language creating instant brand recognition.",
          tag: "IDENTITY 04",
          image: aivonImages.thumbnail,
          metrics: "12.8K Direct Saves",
        },
      ],
    },
    marqueeTop: [
      {
        id: "aivon-m1",
        title: "Master Campaign Monograph",
        subtitle: "Cover slide architecture",
        category: "Carousel 01",
        image: aivonImages.thumbnail,
        slides: [aivonImages.thumbnail, aivonImages.slide2, aivonImages.slide3, aivonImages.slide4],
        badge: "4 Slides",
        likes: "2.4k",
        comments: "148",
      },
      {
        id: "aivon-m2",
        title: "Morning Light Meditation",
        subtitle: "Atmospheric sunlight post",
        category: "Static Post",
        image: aivonImages.slide2,
        badge: "Editorial",
        likes: "3.1k",
        comments: "192",
      },
      {
        id: "aivon-m3",
        title: "Organic Formulation Focus",
        subtitle: "Macro texture detail",
        category: "Carousel 02",
        image: aivonImages.slide3,
        slides: [aivonImages.slide3, aivonImages.slide4, aivonImages.thumbnail],
        badge: "3 Slides",
        likes: "1.9k",
        comments: "94",
      },
      {
        id: "aivon-m4",
        title: "Mindset & Daily Breath",
        subtitle: "Minimal typography quote",
        category: "Static Post",
        image: aivonImages.slide4,
        badge: "Save Favorite",
        likes: "4.5k",
        comments: "310",
      },
    ],
    marqueeBottom: [
      {
        id: "aivon-mb1",
        title: "Tactile Sensory Story",
        subtitle: "Multi-panel swipe carousel",
        category: "Carousel 03",
        image: aivonImages.slide3,
        slides: [aivonImages.slide3, aivonImages.slide2, aivonImages.thumbnail],
        badge: "3 Slides",
        likes: "2.1k",
        comments: "115",
      },
      {
        id: "aivon-mb2",
        title: "Holistic Routine Protocol",
        subtitle: "Evening unwinding sequence",
        category: "Carousel 04",
        image: aivonImages.slide4,
        slides: [aivonImages.slide4, aivonImages.thumbnail, aivonImages.slide2],
        badge: "3 Slides",
        likes: "3.8k",
        comments: "240",
      },
      {
        id: "aivon-mb3",
        title: "Atmospheric Brand Cover",
        subtitle: "High-contrast visual anchor",
        category: "Static Post",
        image: aivonImages.thumbnail,
        badge: "Signature",
        likes: "5.2k",
        comments: "410",
      },
      {
        id: "aivon-mb4",
        title: "Natural Geometry",
        subtitle: "Organic light interplay",
        category: "Static Post",
        image: aivonImages.slide2,
        badge: "Featured",
        likes: "2.7k",
        comments: "163",
      },
    ],
    bento: {
      heading: "Editorial Bento Showcase",
      subheading:
        "High-density layout pairing the hero multi-slide campaign anchor with companion micro-moments.",
      featured: {
        id: "bento-hero",
        title: "The Holistic Living Campaign Masterpiece",
        subtitle: "Swipe-optimized multi-slide carousel establishing brand authority",
        category: "HERO CAROUSEL",
        image: aivonImages.thumbnail,
        slides: [aivonImages.thumbnail, aivonImages.slide2, aivonImages.slide3, aivonImages.slide4],
        badge: "4-Slide Master",
        likes: "5.8k",
        comments: "492",
      },
      items: [
        {
          id: "bento-item-1",
          title: "Sensory Formulation",
          subtitle: "Tactile macro cinematography",
          category: "DETAIL STUDY",
          image: aivonImages.slide3,
          badge: "Macro View",
          likes: "2.3k",
        },
        {
          id: "bento-item-2",
          title: "Mindset Typographic Grid",
          subtitle: "Breathable spacing and neutral contrast",
          category: "TYPOGRAPHY",
          image: aivonImages.slide4,
          badge: "Save Leader",
          likes: "4.1k",
        },
      ],
    },
    brandPalette: {
      colors: [
        { name: "Celestial Cyan", hex: "#38BDF8" },
        { name: "Deep Navy Slate", hex: "#0B1A2E" },
        { name: "Luminous Linen", hex: "#F8FAFC" },
        { name: "Atmospheric Mist", hex: "#94A3B8" },
      ],
      typography: [
        { role: "Display Headline", fontName: "Playfair Display / Serif", style: "Italic Regular 400", sample: "Mindful Clarity" },
        { role: "Interface & Captions", fontName: "Geist Sans", style: "Medium 500", sample: "Organic botanicals & morning sunlight" },
      ],
    },
    process: {
      heading: "Design Execution Process",
      steps: [
        {
          stepNumber: "01",
          title: "Moodboard & Spatial Lighting",
          description: "Curating golden hour sun angles, tactile ceramic textures, and neutral Japanese minimalism.",
          image: aivonImages.slide2,
          tag: "DISCOVERY",
        },
        {
          stepNumber: "02",
          title: "Carousel Flow Architecture",
          description: "Mapping swipe curiosity hooks, 3-second attention retention, and bookmark-optimized slides.",
          image: aivonImages.slide3,
          tag: "WIREFRAMING",
        },
        {
          stepNumber: "03",
          title: "Production Master Polish",
          description: "Color-grading cinematic assets, micro-typography kerning, and seamless carousel transitions.",
          image: aivonImages.thumbnail,
          tag: "EXECUTION",
        },
      ],
    },
    beforeAfter: {
      title: "Tactile Evolution",
      description: "Drag the slider to compare initial concept ideation with Snap Studio's final polished production post.",
      beforeImage: aivonImages.slide4,
      afterImage: aivonImages.thumbnail,
      beforeLabel: "Early Concept",
      afterLabel: "Final Production",
    },
  },

  baseway: {
    brandId: "baseway",
    brandName: "Baseway",
    tagline: "Color-blocked refreshment and high-energy botanical hydration storytelling",
    heroSummary:
      "A high-impact direct-to-consumer social campaign engineered for modern hydration brand Baseway. Saturated pop-editorial color blocking, organic superfood ingredient callouts, and kinetic video reels.",
    primaryColor: "#22C55E",
    accentColor: "#F27256",
    themeGradient:
      "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34, 197, 94, 0.16), transparent 70%), linear-gradient(180deg, #091910 0%, #040D08 100%)",
    stats: [
      { value: 24, suffix: " Assets", label: "DTC Campaign Content", subtext: "Reels, posts & carousels" },
      { value: 5, suffix: " Flows", label: "Packaging Sequences", subtext: "Can silhouette motion" },
      { value: 410, suffix: "%", label: "Click-Through Jump", subtext: "Meta ads & feed swipe" },
      { value: 4, suffix: " Wks", label: "Delivery Speed", subtext: "Rapid sprint launch" },
    ],
    stickyStory: {
      heading: "Product In Motion Highlights",
      subheading:
        "High-energy hydration stories crafted to drive direct-to-consumer beverage conversions.",
      slides: [
        {
          id: "bw-story-1",
          title: "Electrolyte Balance",
          caption: "Cold-pressed citrus, mineral electrolytes, and organic superfoods.",
          tag: "HYDRATION 01",
          image: basewayImages.slide2,
          metrics: "96% Tap Completion",
        },
        {
          id: "bw-story-2",
          title: "Vibrant Color Blocking",
          caption: "High-contrast neon green and jet black typographic hierarchy.",
          tag: "DESIGN 02",
          image: basewayImages.slide3,
          metrics: "4.8x CTR vs Industry",
        },
        {
          id: "bw-story-3",
          title: "Real World Lifestyle",
          caption: "Golden hour marathon training and functional everyday stamina.",
          tag: "LIFESTYLE 03",
          image: basewayImages.slide4,
          metrics: "8.4K Story Shares",
        },
        {
          id: "bw-story-4",
          title: "The Launch Monograph",
          caption: "Master visual anchor positioning Baseway as modern hydration royalty.",
          tag: "MASTER 04",
          image: basewayImages.thumbnail,
          metrics: "18.2K Direct Visits",
        },
      ],
    },
    marqueeTop: [
      {
        id: "bw-m1",
        title: "Botanical Hydration Launch",
        subtitle: "Master packaging hero",
        category: "Carousel 01",
        image: basewayImages.thumbnail,
        slides: [basewayImages.thumbnail, basewayImages.slide2, basewayImages.slide3, basewayImages.slide4],
        badge: "Launch Hero",
        likes: "3.9k",
        comments: "214",
      },
      {
        id: "bw-m2",
        title: "Cold-Pressed Ingredients",
        subtitle: "Macro fruit slice details",
        category: "Static Post",
        image: basewayImages.slide2,
        badge: "Superfood",
        likes: "2.8k",
        comments: "156",
      },
      {
        id: "bw-m3",
        title: "Kinetic Can Motion",
        subtitle: "Dynamic typography grid",
        category: "Carousel 02",
        image: basewayImages.slide3,
        slides: [basewayImages.slide3, basewayImages.slide4, basewayImages.thumbnail],
        badge: "Dynamic",
        likes: "4.2k",
        comments: "289",
      },
      {
        id: "bw-m4",
        title: "Peak Energy Lifestyle",
        subtitle: "Outdoor community UGC",
        category: "Static Post",
        image: basewayImages.slide4,
        badge: "Community",
        likes: "3.5k",
        comments: "198",
      },
    ],
    marqueeBottom: [
      {
        id: "bw-mb1",
        title: "Color Block Hierarchy",
        subtitle: "Saturated emerald palette",
        category: "Static Post",
        image: basewayImages.slide3,
        badge: "Palette Focus",
        likes: "2.9k",
        comments: "142",
      },
      {
        id: "bw-mb2",
        title: "Nutritional Transparency",
        subtitle: "Zero added sugar carousel",
        category: "Carousel 03",
        image: basewayImages.slide2,
        slides: [basewayImages.slide2, basewayImages.slide3, basewayImages.slide4],
        badge: "Nutritional",
        likes: "4.6k",
        comments: "310",
      },
      {
        id: "bw-mb3",
        title: "DTC Conversion Deck",
        subtitle: "Offer code campaign hook",
        category: "Carousel 04",
        image: basewayImages.thumbnail,
        slides: [basewayImages.thumbnail, basewayImages.slide4, basewayImages.slide2],
        badge: "Conversion",
        likes: "5.1k",
        comments: "380",
      },
      {
        id: "bw-mb4",
        title: "Golden Hour Active",
        subtitle: "Natural sunlight hydration",
        category: "Static Post",
        image: basewayImages.slide4,
        badge: "Lifestyle",
        likes: "3.3k",
        comments: "175",
      },
    ],
    bento: {
      heading: "DTC Visual Architecture",
      subheading:
        "High-energy balance between hero launch collateral and functional packaging breakdowns.",
      featured: {
        id: "bw-bento-hero",
        title: "The Botanical Hydration DTC Campaign",
        subtitle: "Multi-channel creative engineered for rapid customer acquisition",
        category: "DTC MASTERWORK",
        image: basewayImages.thumbnail,
        slides: [basewayImages.thumbnail, basewayImages.slide2, basewayImages.slide3, basewayImages.slide4],
        badge: "4-Part Suite",
        likes: "6.2k",
        comments: "512",
      },
      items: [
        {
          id: "bw-bento-1",
          title: "Cold-Pressed Superfoods",
          subtitle: "Organic fruit and electrolyte clarity",
          category: "FORMULATION",
          image: basewayImages.slide2,
          badge: "Ingredient Proof",
          likes: "3.4k",
        },
        {
          id: "bw-bento-2",
          title: "Kinetic Can Geometry",
          subtitle: "Bold modern typography & shelf standout",
          category: "PACKAGING",
          image: basewayImages.slide3,
          badge: "Packaging",
          likes: "4.8k",
        },
      ],
    },
    brandPalette: {
      colors: [
        { name: "Electric Lime", hex: "#4ADE80" },
        { name: "Deep Charcoal", hex: "#0B150F" },
        { name: "Pure Milk White", hex: "#FFFFFF" },
        { name: "Forest Shadow", hex: "#166534" },
      ],
      typography: [
        { role: "Display Headline", fontName: "Bricolage Grotesque", style: "Bold 700", sample: "REFRESH REAL FAST" },
        { role: "Subheads & Body", fontName: "Geist Sans", style: "Medium 500", sample: "Cold-pressed electrolytes & zero sugar" },
      ],
    },
    process: {
      heading: "Creative Pipeline",
      steps: [
        {
          stepNumber: "01",
          title: "Pop-Editorial Moodboard",
          description: "Curating neon color contrasts, high-shutter kinetic liquid splashes, and athletic street vibes.",
          image: basewayImages.slide3,
          tag: "ART DIRECTION",
        },
        {
          stepNumber: "02",
          title: "Can Silhouette 3D Setup",
          description: "Positioning packaging geometry under high-contrast rim lighting and bold typography cards.",
          image: basewayImages.slide2,
          tag: "PACKAGING",
        },
        {
          stepNumber: "03",
          title: "Campaign Master Deck",
          description: "Deploying high-converting paid social ads, organic swipe carousels, and influencer toolkits.",
          image: basewayImages.thumbnail,
          tag: "ROLLOUT",
        },
      ],
    },
    beforeAfter: {
      title: "Campaign Evolution",
      description: "Compare raw packaging renders with Snap Studio's final color-blocked editorial campaign.",
      beforeImage: basewayImages.slide4,
      afterImage: basewayImages.thumbnail,
      beforeLabel: "Base Product",
      afterLabel: "Campaign Master",
    },
  },

  finora: {
    brandId: "finora",
    brandName: "Finora",
    tagline: "Macro brilliance capturing timeless Swiss haute horlogerie and high jewelry luster",
    heroSummary:
      "A luxury editorial social presence for Swiss fine jewelry maison Finora. Light-refracting cinematic macro photography, gemological clarity breakdowns, and monochrome luxury backdrops.",
    primaryColor: "#A855F7",
    accentColor: "#F27256",
    themeGradient:
      "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(168, 85, 247, 0.16), transparent 70%), linear-gradient(180deg, #13081E 0%, #09030E 100%)",
    excludedImages: [
      // Posts with blank/empty white phone mockup screens
      "posts/1 (7).png",
      "posts/1 (8).png",
      "posts/1 (31).png",
      "posts/1 (41).png",
      "posts/1 (42).png",
      // Stories with blank/empty white phone mockup screens
      "stories/1 (7).png",
      "stories/1 (8).png",
      "stories/1 (31).png",
    ],
    stats: [
      { value: 36, suffix: " Slides", label: "Haute Horlogerie Assets", subtext: "10-slide luxury deck" },
      { value: 10, suffix: " Chapters", label: "Collector Monographs", subtext: "Artisan craftsmanship" },
      { value: 290, suffix: "%", label: "Atelier Inquiries", subtext: "VIP client acquisition" },
      { value: 8, suffix: " Wks", label: "Creative Directorship", subtext: "Bespoke execution" },
    ],
    stickyStory: {
      heading: "Master Goldsmithing Highlights",
      subheading:
        "Sub-millimeter macro photography exploring conflict-free diamond pavé and 18-karat gold calibres.",
      slides: [
        {
          id: "fn-story-1",
          title: "Micro-Facet Refraction",
          caption: "Hand-selected conflict-free diamonds refract natural studio rim light.",
          tag: "PRECISION 01",
          image: finoraImages.story1,
          metrics: "98% Visual Retention",
        },
        {
          id: "fn-story-2",
          title: "Hand-Set Diamond Pavé",
          caption: "18-karat recycled yellow gold bezel craftsmanship and micro-prongs.",
          tag: "CRAFT 02",
          image: finoraImages.slide2,
          metrics: "14.2K VIP Saves",
        },
        {
          id: "fn-story-3",
          title: "Mechanical Escapement",
          caption: "Swiss mechanical movement balance wheel beating at 28,800 vph.",
          tag: "HORLOGERIE 03",
          image: finoraImages.slide4,
          metrics: "6.1x Collector Shares",
        },
        {
          id: "fn-story-4",
          title: "The Atelier Monograph",
          caption: "Monochrome luxury backdrops elevating jewelry to collectible art.",
          tag: "MAISON 04",
          image: finoraImages.thumbnail,
          metrics: "22.4K Profile Clicks",
        },
      ],
    },
    marqueeTop: [
      {
        id: "fn-m1",
        title: "Haute Horlogerie Monograph",
        subtitle: "Swiss collector cover",
        category: "Carousel 01",
        image: finoraImages.thumbnail,
        slides: [finoraImages.thumbnail, finoraImages.story1, finoraImages.slide2, finoraImages.slide4],
        badge: "Cover Master",
        likes: "4.8k",
        comments: "312",
      },
      {
        id: "fn-m2",
        title: "Gemstone Purity Refraction",
        subtitle: "Macro light physics story",
        category: "Static Post",
        image: finoraImages.story1,
        badge: "Macro Study",
        likes: "3.6k",
        comments: "188",
      },
      {
        id: "fn-m3",
        title: "18-Karat Gold Bezel",
        subtitle: "Hand-finished satin bevel",
        category: "Carousel 02",
        image: finoraImages.slide2,
        slides: [finoraImages.slide2, finoraImages.slide3, finoraImages.slide6],
        badge: "Craftsmanship",
        likes: "5.1k",
        comments: "390",
      },
      {
        id: "fn-m4",
        title: "Mechanical Calibre",
        subtitle: "In-house balance wheel detail",
        category: "Static Post",
        image: finoraImages.slide4,
        badge: "Horlogerie",
        likes: "4.3k",
        comments: "245",
      },
    ],
    marqueeBottom: [
      {
        id: "fn-mb1",
        title: "Platinum Collector Series",
        subtitle: "Monochrome studio staging",
        category: "Carousel 03",
        image: finoraImages.slide5,
        slides: [finoraImages.slide5, finoraImages.slide7, finoraImages.slide8],
        badge: "Platinum",
        likes: "3.7k",
        comments: "210",
      },
      {
        id: "fn-mb2",
        title: "Architectural Crown Symmetry",
        subtitle: "Fluted bezel macro angle",
        category: "Static Post",
        image: finoraImages.slide6,
        badge: "Architecture",
        likes: "4.9k",
        comments: "340",
      },
      {
        id: "fn-mb3",
        title: "High Jewelry Editorial",
        subtitle: "Collector showcase layout",
        category: "Carousel 04",
        image: finoraImages.slide7,
        slides: [finoraImages.slide7, finoraImages.slide9, finoraImages.thumbnail],
        badge: "Editorial",
        likes: "6.4k",
        comments: "480",
      },
      {
        id: "fn-mb4",
        title: "Private Atelier Consultation",
        subtitle: "Geneva salon suite callout",
        category: "Static Post",
        image: finoraImages.slide9,
        badge: "VIP Salon",
        likes: "5.5k",
        comments: "360",
      },
    ],
    bento: {
      heading: "Collector High-Jewelry Bento",
      subheading:
        "Cinematic macro studies paired with deep horological breakdowns engineered for luxury connoisseurs.",
      featured: {
        id: "fn-bento-hero",
        title: "Haute Horlogerie & High Jewelry Monograph",
        subtitle: "10-slide luxury collector visual suite engineered for Swiss prestige",
        category: "MAISON MONOGRAPH",
        image: finoraImages.thumbnail,
        slides: [finoraImages.thumbnail, finoraImages.story1, finoraImages.slide2, finoraImages.slide4, finoraImages.slide7],
        badge: "10-Slide Monograph",
        likes: "7.8k",
        comments: "640",
      },
      items: [
        {
          id: "fn-bento-1",
          title: "Micro-Facet Refraction",
          caption: "Hand-selected conflict-free clarity",
          category: "GEMOLOGY",
          image: finoraImages.story1,
          badge: "Macro Study",
          likes: "4.2k",
        },
        {
          id: "fn-bento-2",
          title: "18-Karat Gold Craftsmanship",
          caption: "Bespoke diamond pavé bezel assembly",
          category: "ATELIER",
          image: finoraImages.slide2,
          badge: "Artisanal",
          likes: "5.6k",
        },
      ],
    },
    brandPalette: {
      colors: [
        { name: "Royal Amethyst", hex: "#A855F7" },
        { name: "Geneva Obsidian", hex: "#0E0517" },
        { name: "Platinum Luster", hex: "#E9D5FF" },
        { name: "18k Champagne", hex: "#FDE047" },
      ],
      typography: [
        { role: "Display Headline", fontName: "Playfair Display / Serif", style: "Italic Bold", sample: "Finora Haute Horlogerie" },
        { role: "Specifications", fontName: "Geist Mono", style: "Regular 400", sample: "CALIBRE 3120 · 28,800 VPH · 18K GOLD" },
      ],
    },
    process: {
      heading: "Artisanal Production Pipeline",
      steps: [
        {
          stepNumber: "01",
          title: "Lighting & Optical Calibration",
          description: "Positioning polarized softboxes to eliminate glare while accentuating gemstone diamond fire.",
          image: finoraImages.story1,
          tag: "OPTICS",
        },
        {
          stepNumber: "02",
          title: "Focus Stacking & Retouching",
          description: "Merging 40+ macro focal brackets into a razor-sharp single plane of luxury detail.",
          image: finoraImages.slide2,
          tag: "MACRO STACK",
        },
        {
          stepNumber: "03",
          title: "Swiss Editorial Monograph",
          description: "Pairing museum-grade typographic scales with private Geneva salon appointment calls-to-action.",
          image: finoraImages.thumbnail,
          tag: "EXHIBITION",
        },
      ],
    },
    beforeAfter: {
      title: "Macro Clarity Benchmark",
      description: "Compare raw studio captures with Snap Studio's final color-graded luxury horlogerie presentation.",
      beforeImage: finoraImages.slide6,
      afterImage: finoraImages.thumbnail,
      beforeLabel: "Raw Capture",
      afterLabel: "Finished Maison Post",
    },
  },

  kiyocare: {
    brandId: "kiyocare",
    brandName: "Kiyocare",
    tagline: "Dermatological transparency shaping real, clinical skin barrier glow",
    heroSummary:
      "A clinical, clean beauty social campaign built for skincare innovator Kiyocare. Dermatological active ingredient percentages, ultra-macro hydration cinematography, and save-optimized routine carousels.",
    primaryColor: "#06B6D4",
    accentColor: "#F27256",
    themeGradient:
      "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(6, 182, 212, 0.16), transparent 70%), linear-gradient(180deg, #07191E 0%, #030D10 100%)",
    stats: [
      { value: 20, suffix: " Posts", label: "Clinical Content Feeds", subtext: "Dermatologist approved" },
      { value: 4, suffix: " Guides", label: "Skin Barrier Carousels", subtext: "Step-by-step saves" },
      { value: 480, suffix: "%", label: "Bookmark & Save Rate", subtext: "Routine protocol posts" },
      { value: 5, suffix: " Wks", label: "Delivery Sprint", subtext: "Turnkey visual system" },
    ],
    stickyStory: {
      heading: "Routine Protocol Highlights",
      subheading:
        "Educational skincare stories turning clinical dermatology into everyday saveable rituals.",
      slides: [
        {
          id: "kc-story-1",
          title: "Active Ingredient Potency",
          caption: "5% Niacinamide and Multi-Molecular Hyaluronic Acid hydration.",
          tag: "POTENCY 01",
          image: kiyocareImages.slide2,
          metrics: "95% Save Rate",
        },
        {
          id: "kc-story-2",
          title: "AM/PM Skin Barrier Guide",
          caption: "Sequential protocol ensuring optimal skin microbiome defense.",
          tag: "PROTOCOL 02",
          image: kiyocareImages.slide3,
          metrics: "16.8K Direct Saves",
        },
        {
          id: "kc-story-3",
          title: "28-Day Clinical Trial Proof",
          caption: "Independent dermatological trial results showing 92% barrier repair.",
          tag: "EFFICACY 03",
          image: kiyocareImages.slide4,
          metrics: "8.2x Share Velocity",
        },
        {
          id: "kc-story-4",
          title: "The Clean Beauty Hero",
          caption: "Unified visual monograph establishing clinical credibility.",
          tag: "FLAGSHIP 04",
          image: kiyocareImages.thumbnail,
          metrics: "24.1K Profile Visits",
        },
      ],
    },
    marqueeTop: [
      {
        id: "kc-m1",
        title: "Clinical Barrier Defense",
        subtitle: "Launch cover post",
        category: "Carousel 01",
        image: kiyocareImages.thumbnail,
        slides: [kiyocareImages.thumbnail, kiyocareImages.slide2, kiyocareImages.slide3, kiyocareImages.slide4],
        badge: "Clinical Hero",
        likes: "4.1k",
        comments: "260",
      },
      {
        id: "kc-m2",
        title: "Ingredient Transparency",
        subtitle: "Percentage potency callout",
        category: "Static Post",
        image: kiyocareImages.slide2,
        badge: "Transparency",
        likes: "3.7k",
        comments: "194",
      },
      {
        id: "kc-m3",
        title: "Morning Routine Sequence",
        subtitle: "Step 01 - 04 carousel",
        category: "Carousel 02",
        image: kiyocareImages.slide3,
        slides: [kiyocareImages.slide3, kiyocareImages.slide4, kiyocareImages.thumbnail],
        badge: "Routine Guide",
        likes: "5.4k",
        comments: "420",
      },
      {
        id: "kc-m4",
        title: "Dermatological Proof",
        subtitle: "Trial results infographic",
        category: "Static Post",
        image: kiyocareImages.slide4,
        badge: "Trial Data",
        likes: "3.2k",
        comments: "178",
      },
    ],
    marqueeBottom: [
      {
        id: "kc-mb1",
        title: "Barrier Repair Chemistry",
        subtitle: "Microbiome lipid synthesis",
        category: "Static Post",
        image: kiyocareImages.slide2,
        badge: "Microbiome",
        likes: "3.9k",
        comments: "215",
      },
      {
        id: "kc-mb2",
        title: "Saveable Skin Guide",
        subtitle: "Dermatologist Q&A answers",
        category: "Carousel 03",
        image: kiyocareImages.slide3,
        slides: [kiyocareImages.slide3, kiyocareImages.slide2, kiyocareImages.slide4],
        badge: "Save Leader",
        likes: "6.1k",
        comments: "480",
      },
      {
        id: "kc-mb3",
        title: "Clean Skincare Identity",
        subtitle: "Tactile glass pipette bottle",
        category: "Static Post",
        image: kiyocareImages.thumbnail,
        badge: "Identity",
        likes: "4.5k",
        comments: "290",
      },
      {
        id: "kc-mb4",
        title: "Hydration Cinematography",
        subtitle: "Dewy emulsion texture shot",
        category: "Carousel 04",
        image: kiyocareImages.slide4,
        slides: [kiyocareImages.slide4, kiyocareImages.thumbnail, kiyocareImages.slide2],
        badge: "Texture",
        likes: "4.8k",
        comments: "310",
      },
    ],
    bento: {
      heading: "Dermatology Bento Hub",
      subheading:
        "Balanced visual architecture uniting clinical trial proof with tactile, dewy product texture shots.",
      featured: {
        id: "kc-bento-hero",
        title: "Clinical Barrier Defense Campaign",
        subtitle: "Save-optimized educational system transforming routine skincare into high-converting habits",
        category: "EDUCATION MASTER",
        image: kiyocareImages.thumbnail,
        slides: [kiyocareImages.thumbnail, kiyocareImages.slide2, kiyocareImages.slide3, kiyocareImages.slide4],
        badge: "4-Part Protocol",
        likes: "7.1k",
        comments: "560",
      },
      items: [
        {
          id: "kc-bento-1",
          title: "Active Potency Data",
          subtitle: "5% Niacinamide + Ceramide Complex",
          category: "FORMULATION",
          image: kiyocareImages.slide2,
          badge: "Potency",
          likes: "4.4k",
        },
        {
          id: "kc-bento-2",
          title: "Morning Routine Ritual",
          subtitle: "Saveable 4-step barrier protocol",
          category: "PROTOCOL",
          image: kiyocareImages.slide3,
          badge: "Save Favorite",
          likes: "5.9k",
        },
      ],
    },
    brandPalette: {
      colors: [
        { name: "Clinical Cyan", hex: "#06B6D4" },
        { name: "Dewy Mist White", hex: "#F0FDFA" },
        { name: "Deep Lab Obsidian", hex: "#081B20" },
        { name: "Botanical Sage", hex: "#14B8A6" },
      ],
      typography: [
        { role: "Display", fontName: "Bricolage Grotesque", style: "Bold 700", sample: "Clinical Barrier Defense" },
        { role: "Formula Labels", fontName: "Geist Mono", style: "Medium 500", sample: "5% NIACINAMIDE · PH 5.5 · HYALURONIC ACID" },
      ],
    },
    process: {
      heading: "Clinical Content Methodology",
      steps: [
        {
          stepNumber: "01",
          title: "Dermatological Fact-Checking",
          description: "Synthesizing clinical trial whitepapers into digestible, verified social claims.",
          image: kiyocareImages.slide2,
          tag: "VERIFICATION",
        },
        {
          stepNumber: "02",
          title: "Macro Emulsion Capture",
          description: "Cinematic close-up capture of water droplet surface tension and cream absorption.",
          image: kiyocareImages.slide3,
          tag: "CINEMATOGRAPHY",
        },
        {
          stepNumber: "03",
          title: "Save-Engineered Layouts",
          description: "Structuring typography and cards for bookmark retention and algorithmic feed virality.",
          image: kiyocareImages.thumbnail,
          tag: "OPTIMIZATION",
        },
      ],
    },
    beforeAfter: {
      title: "Clarity Upgrade",
      description: "Compare crowded clinical charts with Snap Studio's minimalist, save-optimized routine graphics.",
      beforeImage: kiyocareImages.slide4,
      afterImage: kiyocareImages.thumbnail,
      beforeLabel: "Standard Chart",
      afterLabel: "Clean Editorial",
    },
  },

  "noritsu-ai": {
    brandId: "noritsu-ai",
    brandName: "NoritsuAI",
    tagline: "Autonomous intelligence scaling enterprise velocity and zero-trust telemetry",
    heroSummary:
      "A dark-mode precision UI telemetry and thought-leadership B2B social campaign engineered for enterprise generative AI pioneer NoritsuAI. Micro-motion data flows and high-throughput architectural benchmarks.",
    primaryColor: "#3B82F6",
    accentColor: "#F27256",
    themeGradient:
      "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.18), transparent 70%), linear-gradient(180deg, #071329 0%, #030815 100%)",
    stats: [
      { value: 18, suffix: " Decks", label: "B2B Carousel Infographics", subtext: "Enterprise decision makers" },
      { value: 6, suffix: " Flows", label: "Multi-Agent Pipelines", subtext: "Sub-ms telemetry" },
      { value: 580, suffix: "%", label: "Enterprise Inquiries", subtext: "CTO & VP Engineering" },
      { value: 4, suffix: " Wks", label: "Rapid Deployment", subtext: "Turnkey design ops" },
    ],
    stickyStory: {
      heading: "Agent Pipeline Highlights",
      subheading:
        "High-density technical breakdowns translating complex multi-agent event loops into visual clarity.",
      slides: [
        {
          id: "nt-story-1",
          title: "Workflow Orchestration",
          caption: "Multi-agent event loop and real-time enterprise ERP stream synchronization.",
          tag: "ORCHESTRATE 01",
          image: noritsuImages.slide2,
          metrics: "92% B2B Retention",
        },
        {
          id: "nt-story-2",
          title: "Sub-Millisecond Telemetry",
          caption: "Zero-loss packet throughput and distributed cluster latency monitoring.",
          tag: "TELEMETRY 02",
          image: noritsuImages.slide3,
          metrics: "4.9x LinkedIn Shares",
        },
        {
          id: "nt-story-3",
          title: "Enterprise Zero-Trust Security",
          caption: "SOC2 Type II compliance, client-side encryption, and role-based ACLs.",
          tag: "SECURITY 03",
          image: noritsuImages.slide4,
          metrics: "11.5K Whitepaper Leads",
        },
        {
          id: "nt-story-4",
          title: "The Enterprise Masterwork",
          caption: "Commanding dark-mode interface positioning NoritsuAI as the premier infrastructure.",
          tag: "INFRASTRUCTURE 04",
          image: noritsuImages.thumbnail,
          metrics: "34.2K Enterprise Views",
        },
      ],
    },
    marqueeTop: [
      {
        id: "nt-m1",
        title: "Autonomous Agent Architecture",
        subtitle: "Enterprise keynote deck",
        category: "Carousel 01",
        image: noritsuImages.thumbnail,
        slides: [noritsuImages.thumbnail, noritsuImages.slide2, noritsuImages.slide3, noritsuImages.slide4],
        badge: "Enterprise Hero",
        likes: "4.7k",
        comments: "320",
      },
      {
        id: "nt-m2",
        title: "Multi-Agent Event Loops",
        subtitle: "Distributed pipeline schema",
        category: "Static Post",
        image: noritsuImages.slide2,
        badge: "Architecture",
        likes: "3.9k",
        comments: "240",
      },
      {
        id: "nt-m3",
        title: "Sub-Millisecond Latency",
        subtitle: "Cluster telemetry dashboard",
        category: "Carousel 02",
        image: noritsuImages.slide3,
        slides: [noritsuImages.slide3, noritsuImages.slide4, noritsuImages.thumbnail],
        badge: "Telemetry",
        likes: "5.2k",
        comments: "380",
      },
      {
        id: "nt-m4",
        title: "Zero-Trust Encryption",
        subtitle: "SOC2 financial compliance",
        category: "Static Post",
        image: noritsuImages.slide4,
        badge: "Security",
        likes: "4.1k",
        comments: "290",
      },
    ],
    marqueeBottom: [
      {
        id: "nt-mb1",
        title: "Agent Mesh Telemetry",
        subtitle: "Real-time query metrics",
        category: "Static Post",
        image: noritsuImages.slide2,
        badge: "Metrics",
        likes: "3.4k",
        comments: "180",
      },
      {
        id: "nt-mb2",
        title: "B2B Thought Leadership",
        subtitle: "AI infrastructure whitepaper",
        category: "Carousel 03",
        image: noritsuImages.slide3,
        slides: [noritsuImages.slide3, noritsuImages.slide2, noritsuImages.slide4],
        badge: "Whitepaper",
        likes: "5.8k",
        comments: "410",
      },
      {
        id: "nt-mb3",
        title: "Enterprise Brand Anchor",
        subtitle: "High-contrast precision layout",
        category: "Static Post",
        image: noritsuImages.thumbnail,
        badge: "Brand Anchor",
        likes: "6.3k",
        comments: "490",
      },
      {
        id: "nt-mb4",
        title: "High-Throughput Benchmarks",
        subtitle: "2.4M tokens/sec latency proof",
        category: "Carousel 04",
        image: noritsuImages.slide4,
        slides: [noritsuImages.slide4, noritsuImages.thumbnail, noritsuImages.slide2],
        badge: "Benchmarks",
        likes: "4.6k",
        comments: "320",
      },
    ],
    bento: {
      heading: "Enterprise Telemetry Bento",
      subheading:
        "Engineered for deep technical credibility, pairing high-throughput benchmarks with dark-mode elegance.",
      featured: {
        id: "nt-bento-hero",
        title: "The Enterprise Autonomous AI Suite",
        subtitle: "B2B social campaigns translating deep multi-agent systems into executive buying confidence",
        category: "ENTERPRISE MASTER",
        image: noritsuImages.thumbnail,
        slides: [noritsuImages.thumbnail, noritsuImages.slide2, noritsuImages.slide3, noritsuImages.slide4],
        badge: "4-Part Keynote",
        likes: "8.2k",
        comments: "710",
      },
      items: [
        {
          id: "nt-bento-1",
          title: "Multi-Agent Event Loops",
          subtitle: "Real-time ERP stream routing",
          category: "PIPELINE",
          image: noritsuImages.slide2,
          badge: "Event Loop",
          likes: "4.9k",
        },
        {
          id: "nt-bento-2",
          title: "Sub-Ms Latency Proof",
          subtitle: "Zero-loss packet verification",
          category: "BENCHMARK",
          image: noritsuImages.slide3,
          badge: "Latency Proof",
          likes: "6.4k",
        },
      ],
    },
    brandPalette: {
      colors: [
        { name: "Cobalt Pulse", hex: "#3B82F6" },
        { name: "Terminal Black", hex: "#070E1A" },
        { name: "Telemetry Cyan", hex: "#38BDF8" },
        { name: "Signal White", hex: "#FFFFFF" },
      ],
      typography: [
        { role: "Technical Display", fontName: "Geist Sans", style: "Bold 700", sample: "Autonomous Enterprise Intelligence" },
        { role: "Code & Logs", fontName: "Geist Mono", style: "Medium 500", sample: "CLUSTER_STATUS: 99.999% · LATENCY: 0.42MS" },
      ],
    },
    process: {
      heading: "B2B Content Architecture",
      steps: [
        {
          stepNumber: "01",
          title: "System Telemetry Mapping",
          description: "Translating distributed kubernetes nodes and LLM routing into intuitive 2D diagrams.",
          image: noritsuImages.slide2,
          tag: "ARCHITECTURE",
        },
        {
          stepNumber: "02",
          title: "Dark-Mode UI Styling",
          description: "Calibrating luminescent cobalt accents against matte obsidian backdrops for maximum contrast.",
          image: noritsuImages.slide3,
          tag: "UI TELEMETRY",
        },
        {
          stepNumber: "03",
          title: "Executive Thought Leadership",
          description: "Deploying high-converting LinkedIn carousels aimed directly at enterprise technology leadership.",
          image: noritsuImages.thumbnail,
          tag: "DISTRIBUTION",
        },
      ],
    },
    beforeAfter: {
      title: "Visual Transformation",
      description: "Compare dense engineering terminal screenshots with Snap Studio's executive-ready social posts.",
      beforeImage: noritsuImages.slide4,
      afterImage: noritsuImages.thumbnail,
      beforeLabel: "Terminal Dump",
      afterLabel: "Executive Post",
    },
  },

  "wildflower-atelier": {
    brandId: "wildflower-atelier",
    brandName: "Wildflower Atelier",
    tagline: "Botanical couture monographs, seasonal Provence blooms, and tactile layouts",
    heroSummary:
      "A poetic 4-part Instagram story narrative, macro botanical color grading, and tactile museum-grade layouts crafted for Parisian floral atelier Wildflower. Curated Provence harvests, artisanal fragrances, and floral workshops.",
    primaryColor: "#FB7185",
    accentColor: "#F27256",
    themeGradient:
      "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(251, 113, 133, 0.16), transparent 70%), linear-gradient(180deg, #1B0A11 0%, #0C0407 100%)",
    stats: [
      { value: 32, suffix: " Stories", label: "Botanical Narratives", subtext: "Curated seasonal series" },
      { value: 8, suffix: " Decks", label: "Atelier Monographs", subtext: "Tactile feed curation" },
      { value: 430, suffix: "%", label: "Workshop Inquiries", subtext: "Masterclass registration" },
      { value: 6, suffix: " Wks", label: "Creative Directorship", subtext: "Parisian visual identity" },
    ],
    stickyStory: {
      heading: "Provence Atelier Highlights",
      subheading:
        "Poetic Instagram story sequences documenting dawn petal harvests and sculptural floral arrangements.",
      slides: [
        {
          id: "wf-story-1",
          title: "Dawn Harvest in Provence",
          caption: "Dew-kissed garden roses gathered at sunrise in Grasse, France.",
          tag: "HARVEST 01",
          image: wildflowerImages.story1,
          metrics: "97% Completion Rate",
        },
        {
          id: "wf-story-2",
          title: "Sculptural Rose Architecture",
          caption: "Organic geometric balance pairing rare garden roses with wild foliage.",
          tag: "DESIGN 02",
          image: wildflowerImages.story2,
          metrics: "18.5K Story Saves",
        },
        {
          id: "wf-story-3",
          title: "Bespoke Botanical Perfumery",
          caption: "Cold-distilled floral essences captured in amber glass apothecary bottles.",
          tag: "ESSENCE 03",
          image: wildflowerImages.story3,
          metrics: "5.4x Share Rate",
        },
        {
          id: "wf-story-4",
          title: "The Botanical Monograph",
          caption: "Museum-grade typography and tactile linen backdrops crafted for the French atelier.",
          tag: "MONOGRAPH 04",
          image: wildflowerImages.thumbnail,
          metrics: "29.8K Profile Visits",
        },
      ],
    },
    marqueeTop: [
      {
        id: "wf-m1",
        title: "Botanical Couture Monograph",
        subtitle: "French atelier cover",
        category: "Carousel 01",
        image: wildflowerImages.thumbnail,
        slides: [wildflowerImages.thumbnail, wildflowerImages.story1, wildflowerImages.story2, wildflowerImages.story4],
        badge: "Atelier Hero",
        likes: "5.2k",
        comments: "380",
      },
      {
        id: "wf-m2",
        title: "Provence Dawn Blooms",
        subtitle: "Sunrise harvest story",
        category: "Story Post",
        image: wildflowerImages.story1,
        badge: "Story Post",
        likes: "4.1k",
        comments: "260",
      },
      {
        id: "wf-m3",
        title: "Floral Architecture Grid",
        subtitle: "Sculptural rose geometry",
        category: "Carousel 02",
        image: wildflowerImages.story2,
        slides: [wildflowerImages.story2, wildflowerImages.story3, wildflowerImages.thumb1],
        badge: "Sculptural",
        likes: "4.9k",
        comments: "310",
      },
      {
        id: "wf-m4",
        title: "Bespoke Fragrance Oils",
        subtitle: "Botanical distillation process",
        category: "Static Post",
        image: wildflowerImages.story3,
        badge: "Fragrance",
        likes: "3.8k",
        comments: "215",
      },
    ],
    marqueeBottom: [
      {
        id: "wf-mb1",
        title: "Master Floral Workshop",
        subtitle: "Immersion masterclass series",
        category: "Carousel 03",
        image: wildflowerImages.story4,
        slides: [wildflowerImages.story4, wildflowerImages.thumb2, wildflowerImages.thumb3],
        badge: "Masterclass",
        likes: "4.4k",
        comments: "290",
      },
      {
        id: "wf-mb2",
        title: "Editorial Feed Harmony",
        subtitle: "Soft organic linen textures",
        category: "Static Post",
        image: wildflowerImages.thumb1,
        badge: "Editorial",
        likes: "5.6k",
        comments: "410",
      },
      {
        id: "wf-mb3",
        title: "Tactile Studio Ambience",
        subtitle: "Sun-drenched French atelier",
        category: "Static Post",
        image: wildflowerImages.thumb2,
        badge: "Studio",
        likes: "6.1k",
        comments: "460",
      },
      {
        id: "wf-mb4",
        title: "Artisanal Wax Seals",
        subtitle: "Hand-sealed botanical wrapping",
        category: "Carousel 04",
        image: wildflowerImages.thumb3,
        slides: [wildflowerImages.thumb3, wildflowerImages.thumbnail, wildflowerImages.story1],
        badge: "Packaging",
        likes: "5.8k",
        comments: "390",
      },
    ],
    bento: {
      heading: "Botanical Couture Bento",
      subheading:
        "Poetic balance between large-scale atelier monographs and intimate macro petal studies.",
      featured: {
        id: "wf-bento-hero",
        title: "The Parisian Floral Monograph",
        subtitle: "Curated seasonal collection elevating natural florals into collectible fine art",
        category: "ATELIER MASTER",
        image: wildflowerImages.thumbnail,
        slides: [wildflowerImages.thumbnail, wildflowerImages.story1, wildflowerImages.story2, wildflowerImages.story4],
        badge: "8-Part Suite",
        likes: "8.9k",
        comments: "740",
      },
      items: [
        {
          id: "wf-bento-1",
          title: "Sunrise Provence Harvest",
          subtitle: "Rare Grasse garden roses",
          category: "HARVEST",
          image: wildflowerImages.story1,
          badge: "Morning Dew",
          likes: "4.7k",
        },
        {
          id: "wf-bento-2",
          title: "Artisanal Packaging",
          subtitle: "Wax-sealed pressed botanicals",
          category: "PACKAGING",
          image: wildflowerImages.thumb3,
          badge: "Handmade",
          likes: "6.2k",
        },
      ],
    },
    brandPalette: {
      colors: [
        { name: "French Rose", hex: "#FB7185" },
        { name: "Atelier Obsidian", hex: "#17080F" },
        { name: "Terracotta Blush", hex: "#FDA4AF" },
        { name: "Antique Linen", hex: "#FFF1F2" },
      ],
      typography: [
        { role: "Couture Display", fontName: "Playfair Display / Serif", style: "Italic Light", sample: "Wildflower Atelier de Fleurs" },
        { role: "Botanical Label", fontName: "Geist Mono", style: "Medium 500", sample: "PROVENCE HARVEST · LOT 42 · ROSE DE MAI" },
      ],
    },
    process: {
      heading: "Botanical Directorship",
      steps: [
        {
          stepNumber: "01",
          title: "Dawn Sourcing in Grasse",
          description: "Selecting peak seasonal blooms with dew retention for natural light photography.",
          image: wildflowerImages.story1,
          tag: "SOURCING",
        },
        {
          stepNumber: "02",
          title: "Tactile Studio Composition",
          description: "Arranging stems on raw linen substrates alongside vintage brass vessels and amber glass.",
          image: wildflowerImages.story2,
          tag: "STYLING",
        },
        {
          stepNumber: "03",
          title: "Poetic Story Publishing",
          description: "Crafting multi-part French narratives that turn everyday stories into brand loyalty.",
          image: wildflowerImages.thumbnail,
          tag: "CURATION",
        },
      ],
    },
    beforeAfter: {
      title: "Art Direction Elevation",
      description: "Compare basic florist snapshots with Snap Studio's museum-grade Parisian editorial presentation.",
      beforeImage: wildflowerImages.story3,
      afterImage: wildflowerImages.thumbnail,
      beforeLabel: "Standard Photo",
      afterLabel: "Botanical Couture",
    },
  },
}

// Helper to safely retrieve case study config with wildflower as fallback
export function getSocialMediaCaseStudyConfig(projectIdOrSlug: string): SocialMediaCaseStudyConfig {
  const key = (projectIdOrSlug || "").toLowerCase().trim()
  if (key === "aivon" || key.includes("aivon")) return SOCIAL_MEDIA_CASE_STUDIES.aivon
  if (key === "baseway" || key.includes("baseway")) return SOCIAL_MEDIA_CASE_STUDIES.baseway
  if (key === "finora" || key.includes("finora")) return SOCIAL_MEDIA_CASE_STUDIES.finora
  if (key === "kiyocare" || key.includes("kiyo")) return SOCIAL_MEDIA_CASE_STUDIES.kiyocare
  if (key === "noritsu-ai" || key === "noritsuai" || key.includes("noritsu"))
    return SOCIAL_MEDIA_CASE_STUDIES["noritsu-ai"]
  return SOCIAL_MEDIA_CASE_STUDIES["wildflower-atelier"]
}
