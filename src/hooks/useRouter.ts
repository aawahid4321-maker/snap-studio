import { useEffect, useState, useCallback } from "react"
import { getProjectBySlug } from "@/data/projects"

export interface RouteState {
  page: "home" | "work" | "case-study"
  slug?: string
  hash?: string
}

function parseLocation(): RouteState {
  if (typeof window === "undefined") {
    return { page: "home" }
  }

  // Check both standard pathname and hash path (useful for static preview iframe)
  const pathname = window.location.pathname.replace(/\/$/, "")
  const hash = window.location.hash

  // 1. Check hash-based routing first if hash starts with #/work
  if (hash.startsWith("#/work/")) {
    const slug = hash.replace("#/work/", "").split("?")[0].replace(/\/$/, "")
    return { page: "case-study", slug, hash }
  }
  if (hash === "#/work" || hash === "#/work/") {
    return { page: "work", hash }
  }

  // 2. Check standard pathname
  if (pathname.startsWith("/work/")) {
    const slug = pathname.replace("/work/", "").split("?")[0].replace(/\/$/, "")
    return { page: "case-study", slug, hash }
  }
  if (pathname === "/work") {
    return { page: "work", hash }
  }

  return { page: "home", hash }
}

export function useRouter() {
  const [route, setRoute] = useState<RouteState>(parseLocation)

  const updateSEO = useCallback(
    (newRoute: RouteState) => {
      if (typeof document === "undefined") return

      if (newRoute.page === "case-study" && newRoute.slug) {
        const project = getProjectBySlug(newRoute.slug)
        if (project) {
          document.title = `${project.clientName} — Case Study | Snap Studio`
          let metaDesc = document.querySelector('meta[name="description"]')
          if (!metaDesc) {
            metaDesc = document.createElement("meta")
            metaDesc.setAttribute("name", "description")
            document.head.appendChild(metaDesc)
          }
          metaDesc.setAttribute("content", project.shortIntro)
          return
        }
      }

      if (newRoute.page === "work") {
        document.title = "Selected Work & Case Studies | Snap Studio"
        let metaDesc = document.querySelector('meta[name="description"]')
        if (metaDesc) {
          metaDesc.setAttribute(
            "content",
            "Explore our portfolio of high-impact pitch decks, brand identities, and digital experiences for high-growth tech ventures and visionary founders.",
          )
        }
        return
      }

      // Home
      document.title = "Snap Studio — High Impact Presentation & Design Agency"
      let metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "We craft extraordinary pitch decks, brand identities, and high-conversion digital experiences that command attention.",
        )
      }
    },
    [],
  )

  useEffect(() => {
    const handlePopState = () => {
      const nextRoute = parseLocation()
      setRoute(nextRoute)
      updateSEO(nextRoute)
    }

    window.addEventListener("popstate", handlePopState)
    window.addEventListener("hashchange", handlePopState)

    // Initial SEO update
    updateSEO(route)

    return () => {
      window.removeEventListener("popstate", handlePopState)
      window.removeEventListener("hashchange", handlePopState)
    }
  }, [updateSEO, route])

  const navigate = useCallback(
    (to: string, options?: { scroll?: boolean }) => {
      if (typeof window === "undefined") return

      // Handle anchor on same page
      if (to.startsWith("#") && !to.startsWith("#/")) {
        const el = document.querySelector(to)
        if (el) {
          el.scrollIntoView({ behavior: "smooth" })
        }
        return
      }

      window.history.pushState(null, "", to)
      const nextRoute = parseLocation()
      setRoute(nextRoute)
      updateSEO(nextRoute)

      if (options?.scroll !== false) {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    },
    [updateSEO],
  )

  return {
    route,
    navigate,
    isHome: route.page === "home",
    isWork: route.page === "work",
    isCaseStudy: route.page === "case-study",
    currentSlug: route.slug,
  }
}
