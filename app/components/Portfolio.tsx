'use client'

import { PlayIcon } from '@heroicons/react/20/solid'
import { useEffect, useRef, useState } from 'react'
import * as motion from 'motion/react-client'
import type { PortfolioData, PortfolioItem } from '@/app/lib/content'

const defaultVideos = [
  {
    _id: '1',
    title: 'Lifestyle Reel',
    videoUrl: '/videos/lifestyle-reel.mp4',
    posterUrl: '/videos/posters/lifestyle-reel.jpg',
  },
  {
    _id: '2',
    title: 'Ai Automatization',
    videoUrl: '/videos/ai-automatization.mp4',
    posterUrl: '/videos/posters/ai-automatization.jpg',
  },
  {
    _id: '3',
    title: 'BingX Romania',
    videoUrl: '/videos/bingx-romania.mp4',
    posterUrl: '/videos/posters/bingx-romania.jpg',
  },
  {
    _id: '4',
    title: 'Podcast Type',
    videoUrl: '/videos/podcast-type.mp4',
    posterUrl: '/videos/posters/podcast-type.jpg',
  },
]

const defaults = {
  eyebrow: 'My Work',
  heading: 'Portfolio',
  description: 'A collection of my best short-form video edits. Each project showcases my ability to create engaging content that resonates with audiences.',
  portfolioMore: "See More Projects",
  portfolioMoreLink: 'https://drive.google.com/drive/u/4/folders/1RU0I5CAyNH4g6rthsazXB8f5qBpzKMNF',
}

function VideoCard({
  video,
  index,
  active,
  onActivate,
}: {
  video: PortfolioItem
  index: number
  active: boolean
  onActivate: () => void
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [canPlay, setCanPlay] = useState(false)

  useEffect(() => {
    const videoEl = videoRef.current
    if (!videoEl) return

    if (active) {
      void videoEl.play().catch(() => {
        // Browsers can block programmatic playback. Native controls remain available.
      })
      return
    }

    videoEl.pause()
    videoEl.currentTime = 0
  }, [active])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-gray-950 shadow-lg ring-1 ring-gray-900/10 snap-center"
    >
      {video.videoUrl ? (
        <video
          ref={videoRef}
          loop
          muted
          controls={active}
          playsInline
          preload="metadata"
          poster={video.posterUrl}
          onCanPlay={() => setCanPlay(true)}
          className="absolute inset-0 h-full w-full object-cover"
          src={video.videoUrl}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <span className="text-gray-400 text-sm">No video</span>
        </div>
      )}

      {!active && (
        <button
          type="button"
          onClick={onActivate}
          className="absolute inset-0 flex min-h-11 min-w-11 items-center justify-center bg-black/10 text-white transition hover:bg-black/0 focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-white"
          aria-label={`Play ${video.title}`}
        >
          <span className="flex size-14 items-center justify-center rounded-full bg-white/90 text-gray-950 shadow-lg ring-1 ring-white/40 backdrop-blur-sm transition group-hover:scale-105">
            <PlayIcon aria-hidden="true" className="ml-0.5 size-7" />
          </span>
        </button>
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-4">
        <h3 className="text-sm font-medium text-white">{video.title}</h3>
        <p className="mt-1 text-xs text-white/70">{active ? 'Use the player controls' : canPlay ? 'Tap to play' : 'Loading preview'}</p>
      </div>
    </motion.div>
  )
}

export default function Portfolio({ data, items }: { data?: PortfolioData; items?: PortfolioItem[] }) {
  const eyebrow = data?.eyebrow ?? defaults.eyebrow
  const heading = data?.heading ?? defaults.heading
  const description = data?.description ?? defaults.description
  const videos = items && items.length > 0 ? items : defaultVideos
  const portfolioMore = data?.portfolioMore ?? defaults.portfolioMore
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null)

  return (
    <section id="portfolio" className="bg-white pt-32 lg:pt-48 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-base/7 font-semibold text-cyan-600"
          >
            {eyebrow}
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl"
          >
            {heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 text-lg/8 text-gray-600"
          >
            {description}
          </motion.p>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl grid-flow-col auto-cols-[minmax(16rem,76vw)] gap-4 overflow-x-auto overscroll-x-contain pb-4 snap-x snap-mandatory sm:mt-16 sm:auto-cols-[20rem] md:mt-20 md:max-w-none md:grid-flow-row md:auto-cols-auto md:grid-cols-2 md:overflow-visible md:pb-0 lg:mx-0 lg:grid-cols-4">
          {videos.map((video, index) => (
            <VideoCard
              key={video._id}
              video={video}
              index={index}
              active={activeVideoId === video._id}
              onActivate={() => setActiveVideoId(video._id)}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            href={data?.portfolioMoreLink || defaults.portfolioMoreLink}
            className="rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
          >
            {portfolioMore}
          </motion.a>
        </div>
      </div>
    </section>
  )
}
