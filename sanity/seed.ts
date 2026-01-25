/**
 * Sanity Seed Script for David Stefan Nedelea's Portfolio
 *
 * Run this script to populate Sanity with default content:
 * pnpm seed
 */

import { createClient } from '@sanity/client'
import { config } from 'dotenv'
import { resolve } from 'path'

// Load environment variables from .env.local
config({ path: resolve(process.cwd(), '.env.local') })

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'bzuqy45v'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN

if (!token) {
  console.error('❌ Missing SANITY_API_TOKEN environment variable')
  console.log('Get your token from: https://www.sanity.io/manage/project/' + projectId + '/api#tokens')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2026-01-25',
  useCdn: false,
})

// Default data for David Stefan Nedelea's portfolio
const seedData = {
  header: {
    _id: 'header',
    _type: 'header',
    navigation: [
      { _key: 'nav1', name: 'Home', href: '#' },
      { _key: 'nav2', name: 'About', href: '#about' },
      { _key: 'nav3', name: 'Portfolio', href: '#portfolio' },
      { _key: 'nav4', name: 'Contact', href: '#contact' },
    ],
  },

  hero: {
    _id: 'hero',
    _type: 'hero',
    badge: {
      highlight: 'Available for work',
      text: 'Get in touch',
      link: 'mailto:contact@davidnedelea.com',
    },
    heading: 'David Stefan Nedelea',
    description:
      'Professional video editor specializing in short-form content, brand storytelling, and social media videos. I transform raw footage into captivating stories that engage audiences and drive results.',
    primaryCta: {
      text: 'View My Work',
      link: '#portfolio',
    },
    secondaryCta: {
      text: 'About Me',
      link: '#about',
    },
    // Note: Video must be uploaded via Sanity Studio at /studio
  },

  about: {
    _id: 'about',
    _type: 'about',
    eyebrow: 'About Me',
    heading: 'Video Editor & Content Creator',
    description:
      "I'm David Stefan Nedelea, a passionate video editor with expertise in crafting compelling short-form content. From brand stories to social media reels, I bring creative vision and technical precision to every project.",
    features: [
      {
        _key: 'feat1',
        name: 'Precision Editing',
        description:
          'Every frame matters. I craft seamless edits with perfect timing and transitions that capture attention and tell compelling stories.',
        icon: 'scissors',
      },
      {
        _key: 'feat2',
        name: 'Creative Vision',
        description:
          'Transforming raw footage into polished content with a unique artistic perspective that elevates your brand.',
        icon: 'sparkles',
      },
      {
        _key: 'feat3',
        name: 'Fast Turnaround',
        description:
          'Quick delivery without compromising quality. Your project, on time, every time.',
        icon: 'bolt',
      },
    ],
  },

  portfolio: {
    _id: 'portfolio',
    _type: 'portfolio',
    eyebrow: 'My Work',
    heading: 'Portfolio',
    description:
      'A collection of my best short-form video edits. Each project showcases my ability to create engaging content that resonates with audiences.',
  },

  footer: {
    _id: 'footer',
    _type: 'footer',
    copyright: `© ${new Date().getFullYear()} David Stefan Nedelea. All rights reserved.`,
    socialLinks: [
      {
        _key: 'social1',
        name: 'Instagram',
        url: 'https://instagram.com/davidnedelea',
        platform: 'instagram',
      },
      {
        _key: 'social2',
        name: 'TikTok',
        url: 'https://tiktok.com/@davidnedelea',
        platform: 'tiktok',
      },
      {
        _key: 'social3',
        name: 'YouTube',
        url: 'https://youtube.com/@davidnedelea',
        platform: 'youtube',
      },
      {
        _key: 'social4',
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/davidnedelea',
        platform: 'linkedin',
      },
    ],
  },

  portfolioItems: [
    {
      _id: 'portfolio-item-1',
      _type: 'portfolioItem',
      title: 'Brand Story Edit',
      videoUrl: 'https://www.youtube.com/watch?v=example1',
      order: 1,
    },
    {
      _id: 'portfolio-item-2',
      _type: 'portfolioItem',
      title: 'Product Launch',
      videoUrl: 'https://www.youtube.com/watch?v=example2',
      order: 2,
    },
    {
      _id: 'portfolio-item-3',
      _type: 'portfolioItem',
      title: 'Lifestyle Reel',
      videoUrl: 'https://www.youtube.com/watch?v=example3',
      order: 3,
    },
    {
      _id: 'portfolio-item-4',
      _type: 'portfolioItem',
      title: 'Travel Montage',
      videoUrl: 'https://www.youtube.com/watch?v=example4',
      order: 4,
    },
    {
      _id: 'portfolio-item-5',
      _type: 'portfolioItem',
      title: 'Fashion Edit',
      videoUrl: 'https://www.youtube.com/watch?v=example5',
      order: 5,
    },
    {
      _id: 'portfolio-item-6',
      _type: 'portfolioItem',
      title: 'Music Video',
      videoUrl: 'https://www.youtube.com/watch?v=example6',
      order: 6,
    },
  ],
}

async function seed() {
  console.log('🌱 Seeding Sanity with default content for David Stefan Nedelea...\n')

  try {
    // Create/update singleton documents
    console.log('📝 Creating Header...')
    await client.createOrReplace(seedData.header)
    console.log('   ✓ Header created')

    console.log('📝 Creating Hero Section...')
    await client.createOrReplace(seedData.hero)
    console.log('   ✓ Hero section created')

    console.log('📝 Creating About Section...')
    await client.createOrReplace(seedData.about)
    console.log('   ✓ About section created')

    console.log('📝 Creating Portfolio Section...')
    await client.createOrReplace(seedData.portfolio)
    console.log('   ✓ Portfolio section created')

    console.log('📝 Creating Footer...')
    await client.createOrReplace(seedData.footer)
    console.log('   ✓ Footer created')

    console.log('📝 Creating Portfolio Items...')
    for (const item of seedData.portfolioItems) {
      await client.createOrReplace(item)
      console.log(`   ✓ Created: ${item.title}`)
    }

    console.log('\n✅ Seeding complete!')
    console.log('\n📌 Next steps:')
    console.log('   1. Go to /studio to manage your content')
    console.log('   2. Upload images for portfolio items')
    console.log('   3. Update social media links with your real profiles')
    console.log('   4. Customize the text content to match your brand')
  } catch (error) {
    console.error('❌ Error seeding data:', error)
    process.exit(1)
  }
}

seed()
