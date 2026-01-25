'use client'

import { ChevronRightIcon } from '@heroicons/react/20/solid'
import * as motion from 'motion/react-client'

interface HeroData {
  badge?: {
    highlight?: string
    text?: string
    link?: string
  }
  heading?: string
  description?: string
  primaryCta?: {
    text?: string
    link?: string
  }
  secondaryCta?: {
    text?: string
    link?: string
  }
  videoUrl?: string
}

const defaults = {
  badge: {
    highlight: 'Available for work',
    text: 'Get in touch',
    link: '#contact',
  },
  heading: 'David Stefan Nedelea',
  description: 'Professional video editor specializing in short-form content, brand storytelling, and social media videos. I transform raw footage into captivating stories that engage audiences and drive results.',
  primaryCta: { text: 'View My Work', link: '#portfolio' },
  secondaryCta: { text: 'About Me', link: '#about' },
  videoUrl: 'https://videos.pexels.com/video-files/3571264/3571264-uhd_1440_2732_30fps.mp4',
}

export default function Hero({ data }: { data?: HeroData }) {
  const badge = data?.badge ?? defaults.badge
  const heading = data?.heading ?? defaults.heading
  const description = data?.description ?? defaults.description
  const primaryCta = data?.primaryCta ?? defaults.primaryCta
  const secondaryCta = data?.secondaryCta ?? defaults.secondaryCta
  const videoUrl = data?.videoUrl ?? defaults.videoUrl

  return (
    <div className="relative isolate bg-white min-h-screen flex flex-col justify-center">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
      </svg>
      <div className="mx-auto w-full max-w-7xl lg:flex lg:items-center lg:justify-between lg:gap-x-10 pt-32 sm:pt-0">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex"
          >
            <div className="relative flex items-center gap-x-4 rounded-full bg-white px-4 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <span className="font-semibold text-cyan-600">{badge.highlight}</span>
              <span aria-hidden="true" className="h-4 w-px bg-gray-900/10" />
              <a href={badge.link || '#'} className="flex items-center gap-x-1">
                <span aria-hidden="true" className="absolute inset-0" />
                {badge.text}
                <ChevronRightIcon aria-hidden="true" className="-mr-2 size-5 text-gray-400" />
              </a>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl"
          >
            {heading}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex items-center gap-x-6"
          >
            <a
              href={primaryCta.link || '#'}
              className="rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
            >
              {primaryCta.text}
            </a>
            <a href={secondaryCta.link || '#'} className="text-sm/6 font-semibold text-gray-900">
              {secondaryCta.text} <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow flex justify-center lg:justify-end"
        >
          <div className="relative aspect-[9/16] w-64 sm:w-72 overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-900/10">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
              src={videoUrl}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
