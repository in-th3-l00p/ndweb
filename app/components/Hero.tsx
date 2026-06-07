import Image from 'next/image'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import type { HeroData } from '@/app/lib/content'

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
  videoUrl: '/videos/hero-final-sample.mp4',
  posterUrl: '/videos/posters/hero-final-sample.jpg',
}

export default function Hero({ data }: { data?: HeroData }) {
  const badge = data?.badge ?? defaults.badge
  const heading = data?.heading ?? defaults.heading
  const description = data?.description ?? defaults.description
  const primaryCta = data?.primaryCta ?? defaults.primaryCta
  const secondaryCta = data?.secondaryCta ?? defaults.secondaryCta
  const videoUrl = data?.videoUrl ?? defaults.videoUrl
  const posterUrl = data?.posterUrl ?? defaults.posterUrl
  const avatarUrl = data?.avatarUrl ?? null

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
      <div className="mx-auto grid w-full max-w-7xl gap-y-16 pt-32 lg:grid lg:grid-cols-[minmax(28rem,0.95fr)_minmax(32rem,1.05fr)] lg:items-center lg:gap-x-14 lg:pt-0">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-6 justify-center">
              {avatarUrl && (
                <Image
                  alt="Profile"
                  src={avatarUrl}
                  width={96}
                  height={96}
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
          </div>
          <h1
            className="mt-8 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl"
          >
            {heading}
          </h1>
          <p
            className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"
          >
            {description}
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href={primaryCta.link || '#'}
              className="rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
            >
              {primaryCta.text}
            </a>
            <a href={secondaryCta.link || '#'} className="text-sm/6 font-semibold text-gray-900">
              {secondaryCta.text} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="w-full lg:flex lg:justify-end">
          <div className="relative mx-auto w-full max-w-[42rem] rounded-[2rem] bg-gray-900 p-2 shadow-2xl ring-1 ring-gray-950/15 sm:rounded-[2.5rem] sm:p-3 lg:mx-0">
            <div className="absolute left-1/2 top-1.5 z-10 h-1.5 w-20 -translate-x-1/2 rounded-full bg-gray-700 sm:top-2 sm:h-2 sm:w-24" />
            <div className="aspect-video overflow-hidden rounded-[1.5rem] bg-gray-950 sm:rounded-[2rem]">
              <video
                loop
                muted
                controls
                playsInline
                preload="metadata"
                poster={posterUrl}
                className="h-full w-full object-cover"
                src={videoUrl}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
