'use client'

import { ChevronRightIcon } from '@heroicons/react/20/solid'
import * as motion from 'motion/react-client'
import { urlFor } from '@/sanity/lib/image'

interface HeroData {
  avatar?: { asset: { _ref: string } }
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
  const avatar = data?.avatar
  const badge = data?.badge ?? defaults.badge
  const heading = data?.heading ?? defaults.heading
  const description = data?.description ?? defaults.description
  const primaryCta = data?.primaryCta ?? defaults.primaryCta
  const secondaryCta = data?.secondaryCta ?? defaults.secondaryCta
  const videoUrl = data?.videoUrl ?? defaults.videoUrl
  const avatarUrl = avatar ? urlFor(avatar).width(96).height(96).url() : null

  return (
    <div id="#" className="relative isolate bg-white flex flex-col justify-center lg:pt-40 px-6 lg:px-8">
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
      <div className="mx-auto w-full max-w-7xl lg:flex lg:items-center lg:justify-between lg:gap-x-10 pt-32 lg:pt-0">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start gap-4"
          >
            <div className="flex items-center gap-6 justify-center">
              {avatarUrl && (
                <img
                  alt="Profile"
                  src={avatarUrl}
                  className="inline-block size-14 lg:size-16 rounded-full border shadow rounded-full outline -outline-offset-1 outline-black/5"
                />
              )}
              <div className="relative flex items-center gap-x-4 rounded-full bg-white px-4 py-1 text-xs/6 lg:text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="font-semibold text-cyan-600">{badge.highlight}</span>
                <span aria-hidden="true" className="h-4 w-px bg-gray-900/10" />
                <a href={badge.link || '#'} className="flex items-center gap-x-1">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {badge.text}
                  <ChevronRightIcon aria-hidden="true" className="-mr-2 size-5 text-gray-400" />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl"
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
          className="hidden lg:flex lg:mt-0 lg:shrink-0 lg:grow justify-center lg:justify-end"
        >
          <svg role="img" viewBox="0 0 366 729" className="mx-auto w-[286px] max-w-full drop-shadow-xl">
            <title>App screenshot</title>
            <defs>
              <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                <rect rx={36} width={316} height={684} />
              </clipPath>
            </defs>
            <path
              d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
              fill="#4B5563"
            />
            <path
              d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
              fill="#343E4E"
            />
            <foreignObject
              width={316}
              height={684}
              clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
              transform="translate(24 24)"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
                src={videoUrl}
              />
            </foreignObject>
          </svg>
        </motion.div>
      </div>
    </div>
  )
}
