import React from "react"

export type GalleryBlock = {
  type: "full"
  src: string
  caption?: string
  alt?: string
} | {
  type: "split"
  src: string
  title: string
  description: string
  reverse?: boolean
  alt?: string
} | {
  type: "grid-2"
  items: {
    src: string
    caption?: string
    alt?: string
  }[]
} | {
  type: "grid-3"
  items: {
    src: string
    label?: string
    alt?: string
  }[]
}

export interface ProjectStat {
  value: string
  label: string
}

export interface ProjectTestimonial {
  quote: string
  name: string
  role: string
  avatar?: string
}

export interface Project {
  id: string
  slug: string
  clientName: string
  clientLogo?: React.ReactNode | string
  category: string[]
  services?: string[]
  shortLabel?: string
  industry: string
  year: string
  coverImage: string
  shortIntro: string
  overview: string
  challenge: string
  approach: {
    text: string
    points: string[]
  }
  result: string
  gallery: GalleryBlock[]
  stats?: ProjectStat[]
  testimonial?: ProjectTestimonial
}
