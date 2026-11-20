/**
 * Resolves static assets cleanly across local dev, Figma Make, and GitHub Pages.
 */
export function getAssetBase(): string {
  if (typeof window !== "undefined") {
    if (
      window.location.hostname.endsWith("github.io") ||
      window.location.pathname.startsWith("/snap-studio")
    ) {
      return "/snap-studio"
    }
  }
  return ""
}

export function assetUrl(path: string): string {
  if (!path) return ""
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("blob:")
  ) {
    return path
  }

  const base = getAssetBase()
  const cleanPath = path.startsWith("/") ? path : `/${path}`

  if (base && cleanPath.startsWith(base)) {
    return cleanPath
  }

  return `${base}${cleanPath}`
}
