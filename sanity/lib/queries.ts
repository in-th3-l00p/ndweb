import { defineQuery } from 'next-sanity'

export const HERO_QUERY = defineQuery(`*[_type == "hero"][0]{
  badge,
  heading,
  description,
  primaryCta,
  secondaryCta,
  "videoUrl": video.asset->url
}`)

export const ABOUT_QUERY = defineQuery(`*[_type == "about"][0]{
  eyebrow,
  heading,
  description,
  features,
  image
}`)

export const PORTFOLIO_QUERY = defineQuery(`*[_type == "portfolio"][0]{
  eyebrow,
  heading,
  description
}`)

export const PORTFOLIO_ITEMS_QUERY = defineQuery(`*[_type == "portfolioItem"] | order(order asc){
  _id,
  title,
  "videoUrl": video.asset->url
}`)

export const HEADER_QUERY = defineQuery(`*[_type == "header"][0]{
  logo,
  navigation
}`)

export const FOOTER_QUERY = defineQuery(`*[_type == "footer"][0]{
  copyright,
  socialLinks
}`)

export const CONTACT_QUERY = defineQuery(`*[_type == "contact"][0]{
  heading,
  description,
  contactItems
}`)

export const CTA_QUERY = defineQuery(`*[_type == "cta"][0]{
  heading,
  description,
  primaryCta,
  secondaryCta
}`)

export const PAGE_DATA_QUERY = defineQuery(`{
  "hero": *[_type == "hero"][0]{
    badge,
    heading,
    description,
    primaryCta,
    secondaryCta,
    "videoUrl": video.asset->url
  },
  "about": *[_type == "about"][0]{
    eyebrow,
    heading,
    description,
    features,
    image
  },
  "portfolio": *[_type == "portfolio"][0]{
    eyebrow,
    heading,
    description
  },
  "portfolioItems": *[_type == "portfolioItem"] | order(order asc){
    _id,
    title,
    "videoUrl": video.asset->url
  },
  "contact": *[_type == "contact"][0]{
    heading,
    description,
    contactItems
  },
  "cta": *[_type == "cta"][0]{
    heading,
    description,
    primaryCta,
    secondaryCta
  },
  "header": *[_type == "header"][0]{
    logo,
    navigation
  },
  "footer": *[_type == "footer"][0]{
    copyright,
    socialLinks
  }
}`)
