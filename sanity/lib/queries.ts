import { defineQuery } from 'next-sanity'

export const HERO_QUERY = defineQuery(`*[_type == "hero"][0]{
  badge,
  heading,
  description,
  primaryCta,
  secondaryCta,
  videoUrl
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
  thumbnail,
  videoUrl
}`)

export const HEADER_QUERY = defineQuery(`*[_type == "header"][0]{
  logo,
  navigation
}`)

export const FOOTER_QUERY = defineQuery(`*[_type == "footer"][0]{
  copyright,
  socialLinks
}`)

export const PAGE_DATA_QUERY = defineQuery(`{
  "hero": *[_type == "hero"][0]{
    badge,
    heading,
    description,
    primaryCta,
    secondaryCta,
    videoUrl
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
    thumbnail,
    videoUrl
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
