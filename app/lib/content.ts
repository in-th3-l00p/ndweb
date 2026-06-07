import type { SocialLink } from '@/app/lib/socialIcons'

export interface HeaderData {
  logoUrl?: string
  navigation: { name: string; href: string }[]
}

export interface HeroData {
  avatarUrl?: string
  badge: {
    highlight: string
    text: string
    link: string
  }
  heading: string
  description: string
  primaryCta: {
    text: string
    link: string
  }
  secondaryCta: {
    text: string
    link: string
  }
  videoUrl: string
}

export interface AboutData {
  eyebrow: string
  heading: string
  description: string
  imageUrl: string
  features: {
    name: string
    description: string
    icon: string
  }[]
}

export interface PortfolioData {
  eyebrow: string
  heading: string
  description: string
  portfolioMore: string
  portfolioMoreLink: string
}

export interface PortfolioItem {
  _id: string
  title: string
  videoUrl: string
}

export interface ContactData {
  heading: string
  description: string
}

export interface CTAData {
  heading: string
  description: string
  primaryCta: {
    text: string
    link: string
  }
  secondaryCta: {
    text: string
    link: string
  }
}

export interface FooterData {
  copyright: string
}

export const siteSettings = {
  title: 'Nedelea David',
  description: 'Professional video editor specializing in short-form content, brand storytelling, and social media videos.',
}

export const pageContent = {
  header: {
    navigation: [
      { name: 'Home', href: '#' },
      { name: 'About', href: '#about' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Contact', href: '#contact' },
    ],
  } satisfies HeaderData,

  hero: {
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
    videoUrl: '/videos/hero.mp4',
  } satisfies HeroData,

  about: {
    eyebrow: 'About Me',
    heading: 'Video Editor & Content Creator',
    description:
      "I'm David Stefan Nedelea, a passionate video editor with expertise in crafting compelling short-form content. From brand stories to social media reels, I bring creative vision and technical precision to every project.",
    imageUrl: '/image.png',
    features: [
      {
        name: 'Precision Editing',
        description:
          'Every frame matters. I craft seamless edits with perfect timing and transitions that capture attention and tell compelling stories.',
        icon: 'scissors',
      },
      {
        name: 'Creative Vision',
        description:
          'Transforming raw footage into polished content with a unique artistic perspective that elevates your brand.',
        icon: 'sparkles',
      },
      {
        name: 'Fast Turnaround',
        description:
          'Quick delivery without compromising quality. Your project, on time, every time.',
        icon: 'bolt',
      },
    ],
  } satisfies AboutData,

  portfolio: {
    eyebrow: 'My Work',
    heading: 'Portfolio',
    description:
      'A collection of my best short-form video edits. Each project showcases my ability to create engaging content that resonates with audiences.',
    portfolioMore: 'See More Projects',
    portfolioMoreLink: 'https://drive.google.com/drive/u/4/folders/1RU0I5CAyNH4g6rthsazXB8f5qBpzKMNF',
  } satisfies PortfolioData,

  portfolioItems: [
    {
      _id: 'portfolio-item-1',
      title: 'Lifestyle Reel',
      videoUrl: '/videos/lifestyle-reel.mp4',
    },
    {
      _id: 'portfolio-item-2',
      title: 'Ai Automatization',
      videoUrl: '/videos/ai-automatization.mp4',
    },
    {
      _id: 'portfolio-item-3',
      title: 'BingX Romania',
      videoUrl: '/videos/bingx-romania.mp4',
    },
    {
      _id: 'portfolio-item-4',
      title: 'Podcast Type',
      videoUrl: '/videos/podcast-type.mp4',
    },
  ] satisfies PortfolioItem[],

  contact: {
    heading: 'Get in Touch',
    description: "Ready to bring your vision to life? Reach out through any of these channels and let's create something amazing together.",
  } satisfies ContactData,

  cta: {
    heading: 'Ready to elevate your content?',
    description: "Let's collaborate to create stunning video content that captures your audience's attention and drives engagement.",
    primaryCta: {
      text: 'Get Started',
      link: '#contact',
    },
    secondaryCta: {
      text: 'View Portfolio',
      link: '#portfolio',
    },
  } satisfies CTAData,

  footer: {
    copyright: `${new Date().getFullYear()} David Stefan Nedelea. All rights reserved.`,
  } satisfies FooterData,

  socialLinks: [
    {
      name: 'Instagram',
      value: '@davidnedelea',
      url: 'https://instagram.com/davidnedelea',
      platform: 'instagram',
      showInFooter: true,
      showInContact: true,
    },
    {
      name: 'LinkedIn',
      value: 'David Nedelea',
      url: 'https://linkedin.com/in/davidnedelea',
      platform: 'linkedin',
      showInFooter: true,
      showInContact: true,
    },
    {
      name: 'Fiverr',
      value: 'davidnedelea',
      url: 'https://fiverr.com/davidnedelea',
      platform: 'fiverr',
      showInFooter: false,
      showInContact: true,
    },
    {
      name: 'Book a Call',
      value: 'cal.com/davidnedelea',
      url: 'https://cal.com/davidnedelea',
      platform: 'cal',
      showInFooter: false,
      showInContact: true,
    },
    {
      name: 'TikTok',
      value: '@davidnedelea',
      url: 'https://tiktok.com/@davidnedelea',
      platform: 'tiktok',
      showInFooter: true,
      showInContact: false,
    },
    {
      name: 'YouTube',
      value: '@davidnedelea',
      url: 'https://youtube.com/@davidnedelea',
      platform: 'youtube',
      showInFooter: true,
      showInContact: false,
    },
  ] satisfies SocialLink[],
}
