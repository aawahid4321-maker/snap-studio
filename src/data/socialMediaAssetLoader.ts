import { assetUrl } from "@/utils/asset"

export interface ProjectAssets {
  slug: string
  name: string
  ratio16x9: string[]
  ratio16x9Thumb: string[]
  posts: string[]
  postsThumb: string[]
  stories: string[]
  storiesThumb: string[]
  postAspectRatio: string
}

const STATIC_ASSETS: Record<string, ProjectAssets> = {
  aivon: {
    slug: "aivon",
    name: "Aivon",
    ratio16x9: [assetUrl("/work/social-media/aivon-thumbnail.png")],
    ratio16x9Thumb: [assetUrl("/work/social-media/aivon-thumbnail.png")],
    posts: [
      assetUrl("/work/social-media/aivon-2.png"),
      assetUrl("/work/social-media/aivon-3.png"),
      assetUrl("/work/social-media/aivon-4.png"),
    ],
    postsThumb: [
      assetUrl("/work/social-media/aivon-2.png"),
      assetUrl("/work/social-media/aivon-3.png"),
      assetUrl("/work/social-media/aivon-4.png"),
    ],
    stories: [
      assetUrl("/work/social-media/aivon-2.png"),
      assetUrl("/work/social-media/aivon-3.png"),
    ],
    storiesThumb: [
      assetUrl("/work/social-media/aivon-2.png"),
      assetUrl("/work/social-media/aivon-3.png"),
    ],
    postAspectRatio: "aspect-[4/5]",
  },
  baseway: {
    slug: "baseway",
    name: "Baseway",
    ratio16x9: [assetUrl("/work/social-media/baseway-thumbnail.png")],
    ratio16x9Thumb: [assetUrl("/work/social-media/baseway-thumbnail.png")],
    posts: [
      assetUrl("/work/social-media/baseway-2.png"),
      assetUrl("/work/social-media/baseway-3.png"),
      assetUrl("/work/social-media/baseway-4.png"),
    ],
    postsThumb: [
      assetUrl("/work/social-media/baseway-2.png"),
      assetUrl("/work/social-media/baseway-3.png"),
      assetUrl("/work/social-media/baseway-4.png"),
    ],
    stories: [
      assetUrl("/work/social-media/baseway-2.png"),
      assetUrl("/work/social-media/baseway-3.png"),
    ],
    storiesThumb: [
      assetUrl("/work/social-media/baseway-2.png"),
      assetUrl("/work/social-media/baseway-3.png"),
    ],
    postAspectRatio: "aspect-[4/5]",
  },
  finora: {
    slug: "finora",
    name: "Finora",
    ratio16x9: [assetUrl("/work/social-media/finora-thumbnail.png")],
    ratio16x9Thumb: [assetUrl("/work/social-media/finora-thumbnail.png")],
    posts: [
      assetUrl("/work/social-media/finora-2.png"),
      assetUrl("/work/social-media/finora-3.png"),
      assetUrl("/work/social-media/finora-4.png"),
      assetUrl("/work/social-media/finora-5.png"),
      assetUrl("/work/social-media/finora-6.png"),
      assetUrl("/work/social-media/finora-7.png"),
      assetUrl("/work/social-media/finora-8.png"),
      assetUrl("/work/social-media/finora-9.png"),
    ],
    postsThumb: [
      assetUrl("/work/social-media/finora-2.png"),
      assetUrl("/work/social-media/finora-3.png"),
    ],
    stories: [
      assetUrl("/work/social-media/finora-story-1.png"),
      assetUrl("/work/social-media/finora-2.png"),
    ],
    storiesThumb: [
      assetUrl("/work/social-media/finora-story-1.png"),
      assetUrl("/work/social-media/finora-2.png"),
    ],
    postAspectRatio: "aspect-[4/5]",
  },
  kiyocare: {
    slug: "kiyocare",
    name: "Kiyocare",
    ratio16x9: [assetUrl("/work/social-media/kiyocare-thumbnail.png")],
    ratio16x9Thumb: [assetUrl("/work/social-media/kiyocare-thumbnail.png")],
    posts: [
      assetUrl("/work/social-media/kiyocare-2.png"),
      assetUrl("/work/social-media/kiyocare-3.png"),
      assetUrl("/work/social-media/kiyocare-4.png"),
    ],
    postsThumb: [
      assetUrl("/work/social-media/kiyocare-2.png"),
      assetUrl("/work/social-media/kiyocare-3.png"),
    ],
    stories: [
      assetUrl("/work/social-media/kiyocare-2.png"),
      assetUrl("/work/social-media/kiyocare-3.png"),
    ],
    storiesThumb: [
      assetUrl("/work/social-media/kiyocare-2.png"),
      assetUrl("/work/social-media/kiyocare-3.png"),
    ],
    postAspectRatio: "aspect-[4/5]",
  },
  "noritsu-ai": {
    slug: "noritsu-ai",
    name: "NoritsuAI",
    ratio16x9: [assetUrl("/work/social-media/noritsuai-thumbnail.png")],
    ratio16x9Thumb: [assetUrl("/work/social-media/noritsuai-thumbnail.png")],
    posts: [
      assetUrl("/work/social-media/noritsuai-2.png"),
      assetUrl("/work/social-media/noritsuai-3.png"),
      assetUrl("/work/social-media/noritsuai-4.png"),
    ],
    postsThumb: [
      assetUrl("/work/social-media/noritsuai-2.png"),
      assetUrl("/work/social-media/noritsuai-3.png"),
    ],
    stories: [],
    storiesThumb: [],
    postAspectRatio: "aspect-[4/5]",
  },
  "wildflower-atelier": {
    slug: "wildflower-atelier",
    name: "Wildflower Atelier",
    ratio16x9: [assetUrl("/work/wildflower-atelier/thumbnail.png")],
    ratio16x9Thumb: [assetUrl("/work/wildflower-atelier/thumbnail.png")],
    posts: [
      assetUrl("/work/wildflower-atelier/thumbnail-1.png"),
      assetUrl("/work/wildflower-atelier/thumbnail-2.png"),
      assetUrl("/work/wildflower-atelier/thumbnail-3.png"),
    ],
    postsThumb: [
      assetUrl("/work/wildflower-atelier/thumbnail-1.png"),
      assetUrl("/work/wildflower-atelier/thumbnail-2.png"),
    ],
    stories: [
      assetUrl("/work/wildflower-atelier/story-post-1.png"),
      assetUrl("/work/wildflower-atelier/story-post-2.png"),
      assetUrl("/work/wildflower-atelier/story-post-3.png"),
      assetUrl("/work/wildflower-atelier/story-post-4.png"),
    ],
    storiesThumb: [
      assetUrl("/work/wildflower-atelier/story-post-1.png"),
      assetUrl("/work/wildflower-atelier/story-post-2.png"),
    ],
    postAspectRatio: "aspect-[4/5]",
  },
}

export function getProjectSocialAssets(
  projectKey: string,
  _customExcludedImages?: string[]
): ProjectAssets {
  const normalizedKey = projectKey.toLowerCase().replace(/_/g, "-").trim()

  let matchedSlug = "aivon"
  if (normalizedKey.includes("aivon")) matchedSlug = "aivon"
  else if (normalizedKey.includes("baseway")) matchedSlug = "baseway"
  else if (normalizedKey.includes("finora")) matchedSlug = "finora"
  else if (normalizedKey.includes("kiyocare")) matchedSlug = "kiyocare"
  else if (normalizedKey.includes("noritsu")) matchedSlug = "noritsu-ai"
  else if (normalizedKey.includes("wildflower")) matchedSlug = "wildflower-atelier"

  return (
    STATIC_ASSETS[matchedSlug] || {
      slug: matchedSlug,
      name: matchedSlug,
      ratio16x9: [],
      ratio16x9Thumb: [],
      posts: [],
      postsThumb: [],
      stories: [],
      storiesThumb: [],
      postAspectRatio: "aspect-[4/5]",
    }
  )
}
