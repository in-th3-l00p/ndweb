'use client'

import * as motion from 'motion/react-client'
import { urlFor } from '@/sanity/lib/image'

interface PortfolioData {
  eyebrow?: string
  heading?: string
  description?: string
}

interface PortfolioItem {
  _id: string
  title?: string
  thumbnail?: { asset: { _ref: string } }
  videoUrl?: string
}

const defaultVideos = [
  {
    _id: '1',
    title: 'Brand Story Edit',
    thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=711&fit=crop',
    videoUrl: '#',
  },
  {
    _id: '2',
    title: 'Product Launch',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=711&fit=crop',
    videoUrl: '#',
  },
  {
    _id: '3',
    title: 'Lifestyle Reel',
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=711&fit=crop',
    videoUrl: '#',
  },
  {
    _id: '4',
    title: 'Travel Montage',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=711&fit=crop',
    videoUrl: '#',
  },
  {
    _id: '5',
    title: 'Fashion Edit',
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=711&fit=crop',
    videoUrl: '#',
  },
  {
    _id: '6',
    title: 'Music Video',
    thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=711&fit=crop',
    videoUrl: '#',
  },
]

const defaults = {
  eyebrow: 'My Work',
  heading: 'Portfolio',
  description: 'A collection of my best short-form video edits. Each project showcases my ability to create engaging content that resonates with audiences.',
}

function VideoCard({ video, index }: { video: PortfolioItem | typeof defaultVideos[0]; index: number }) {
  const thumbnailUrl = typeof video.thumbnail === 'string'
    ? video.thumbnail
    : video.thumbnail
      ? urlFor(video.thumbnail).width(400).height(711).url()
      : ''

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-gray-900"
    >
      <img
        src={thumbnailUrl}
        alt={video.title || ''}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90"
        >
          <svg className="h-8 w-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <h3 className="text-sm font-medium text-white">{video.title}</h3>
      </div>
    </motion.div>
  )
}

export default function Portfolio({ data, items }: { data?: PortfolioData; items?: PortfolioItem[] }) {
  const eyebrow = data?.eyebrow ?? defaults.eyebrow
  const heading = data?.heading ?? defaults.heading
  const description = data?.description ?? defaults.description
  const videos = items && items.length > 0 ? items : defaultVideos

  return (
    <section className="bg-white">
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
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-4 sm:mt-20 sm:gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {videos.map((video, index) => (
            <VideoCard key={video._id} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
