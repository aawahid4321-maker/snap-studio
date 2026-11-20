/**
 * Resolves static assets cleanly across local dev, Figma Make, and GitHub Pages.
 */
export function getAssetBase(): string {
  // 1. If Vite injected BASE_URL at build time (e.g. "/snap-studio/"), use it
  const viteBase = typeof import.meta !== "undefined" ? import.meta.env?.BASE_URL : undefined
  if (viteBase && viteBase !== "/" && viteBase !== "./") {
    return viteBase.replace(/\/$/, "")
  }

  // 2. Runtime fallback for GitHub Pages
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
