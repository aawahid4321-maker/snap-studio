/**
 * Social Media Asset Auto-Loader
 * Automatically discovers, indexes, and organizes real project images
 * directly from project folders in src/assets/social-media/
 */

import { SOCIAL_MEDIA_CASE_STUDIES } from '@/data/socialMediaCaseStudies'

const rawModules = import.meta.glob<string>(
  '/src/assets/social-media/**/*.{png,PNG,jpg,jpeg,webp}',
  { eager: true, import: 'default' }
)

export interface ProjectAssets {
  slug: string
  name: string
  ratio16x9: string[]
  ratio16x9Thumb: string[]
  posts: string[]
  postsThumb: string[]
  stories: string[]
  storiesThumb: string[]
  postAspectRatio: string // e.g. "aspect-[4/5]" or "aspect-square"
}

// Helper to sort filenames naturally (1, 2, 3... 10 rather than 1, 10, 2)
function naturalSort(a: string, b: string): number {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
}

/**
 * Checks if a given file path/URL matches any pattern in the exclusion list
 */
function isAssetExcluded(normalizedPath: string, assetUrl: string, excludedList: string[]): boolean {
  if (!excludedList || !excludedList.length) return false
  const pathLower = normalizedPath.toLowerCase()
  const urlLower = (assetUrl || '').toLowerCase()

  return excludedList.some((item) => {
    const raw = item.replace(/\\/g, '/').toLowerCase().trim()
    const baseWithoutExt = raw.replace(/\.(png|jpg|jpeg|webp)$/i, '')

    if (raw.includes('/')) {
      const parts = raw.split('/')
      const cat = parts[0]
      const file = parts.slice(1).join('/')
      const fileBase = file.replace(/\.(png|jpg|jpeg|webp)$/i, '')
      
      const isCat =
        pathLower.includes(`/${cat}/`) ||
        pathLower.includes(`/${cat}-thumb/`) ||
        urlLower.includes(`/${cat}/`) ||
        urlLower.includes(`/${cat}-thumb/`)
      
      const isFile =
        pathLower.includes(`/${fileBase}.`) ||
        pathLower.endsWith(`/${fileBase}`) ||
        urlLower.includes(`/${fileBase}.`) ||
        urlLower.endsWith(`/${fileBase}`)

      return isCat && isFile
    } else {
      const isFile =
        pathLower.includes(`/${baseWithoutExt}.`) ||
        pathLower.endsWith(`/${baseWithoutExt}`) ||
        urlLower.includes(`/${baseWithoutExt}.`) ||
        urlLower.endsWith(`/${baseWithoutExt}`)

      return isFile
    }
  })
}

/**
 * Returns organized assets (16:9, posts, stories) for a given project slug or key
 * Automatically filters out any images present in the project's excludedImages configuration
 */
export function getProjectSocialAssets(
  projectKey: string,
  customExcludedImages?: string[]
): ProjectAssets {
  const normalizedKey = projectKey.toLowerCase().replace(/_/g, '-').trim()

  // Match folder name
  let matchedSlug = 'aivon'
  if (normalizedKey.includes('aivon')) matchedSlug = 'aivon'
  else if (normalizedKey.includes('baseway')) matchedSlug = 'baseway'
  else if (normalizedKey.includes('finora')) matchedSlug = 'finora'
  else if (normalizedKey.includes('kiyocare')) matchedSlug = 'kiyocare'
  else if (normalizedKey.includes('noritsu')) matchedSlug = 'noritsu-ai'
  else if (normalizedKey.includes('wildflower')) matchedSlug = 'wildflower-atelier'

  const configExclusions = SOCIAL_MEDIA_CASE_STUDIES[matchedSlug]?.excludedImages || []
  const activeExclusions = [...configExclusions, ...(customExcludedImages || [])]

  const ratio16x9: string[] = []
  const ratio16x9Thumb: string[] = []
  const posts: string[] = []
  const postsThumb: string[] = []
  const stories: string[] = []
  const storiesThumb: string[] = []

  // Extract from import.meta.glob map
  for (const [pathKey, assetUrl] of Object.entries(rawModules)) {
    // Path looks like: /src/assets/social-media/<slug>/<category>/<file>
    const normalizedPath = pathKey.replace(/\\/g, '/')
    if (!normalizedPath.includes(`/social-media/${matchedSlug}/`)) {
      continue
    }

    // Check exclusion
    if (isAssetExcluded(normalizedPath, assetUrl, activeExclusions)) {
      continue
    }

    if (normalizedPath.includes('/16-9-thumb/')) {
      ratio16x9Thumb.push(assetUrl)
    } else if (normalizedPath.includes('/16-9/')) {
      ratio16x9.push(assetUrl)
    } else if (normalizedPath.includes('/posts-thumb/')) {
      postsThumb.push(assetUrl)
    } else if (normalizedPath.includes('/posts/')) {
      posts.push(assetUrl)
    } else if (normalizedPath.includes('/stories-thumb/')) {
      storiesThumb.push(assetUrl)
    } else if (normalizedPath.includes('/stories/')) {
      stories.push(assetUrl)
    }
  }

  // Natural sort
  ratio16x9.sort(naturalSort)
  ratio16x9Thumb.sort(naturalSort)
  posts.sort(naturalSort)
  postsThumb.sort(naturalSort)
  stories.sort(naturalSort)
  storiesThumb.sort(naturalSort)

  const names: Record<string, string> = {
    aivon: 'Aivon',
    baseway: 'Baseway',
    finora: 'Finora',
    kiyocare: 'Kiyocare',
    'noritsu-ai': 'NoritsuAI',
    'wildflower-atelier': 'Wildflower Atelier',
  }

  // Determine post aspect ratio: wildflower is square (1:1), others are portrait (4:5)
  const postAspectRatio = matchedSlug === 'wildflower-atelier' ? 'aspect-square' : 'aspect-[4/5]'

  return {
    slug: matchedSlug,
    name: names[matchedSlug] || matchedSlug,
    ratio16x9: ratio16x9.length ? ratio16x9 : ratio16x9Thumb,
    ratio16x9Thumb: ratio16x9Thumb.length ? ratio16x9Thumb : ratio16x9,
    posts: posts.length ? posts : postsThumb,
    postsThumb: postsThumb.length ? postsThumb : posts,
    stories: stories.length ? stories : storiesThumb,
    storiesThumb: storiesThumb.length ? storiesThumb : stories,
    postAspectRatio,
  }
}

/**
 * Get assets for all 6 social media projects
 */
export function getAllSocialMediaProjectsAssets(): Record<string, ProjectAssets> {
  const slugs = ['aivon', 'baseway', 'finora', 'kiyocare', 'noritsu-ai', 'wildflower-atelier']
  const map: Record<string, ProjectAssets> = {}
  for (const slug of slugs) {
    map[slug] = getProjectSocialAssets(slug)
  }
  return map
}
