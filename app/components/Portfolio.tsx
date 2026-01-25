'use client'

import { useRef } from 'react'
import * as motion from 'motion/react-client'

interface PortfolioData {
  eyebrow?: string
  heading?: string
  description?: string
}

interface PortfolioItem {
  _id: string
  title?: string
  videoUrl?: string
}

const defaultVideos = [
  {
    _id: '1',
    title: 'Brand Story Edit',
    videoUrl: 'https://videos.pexels.com/video-files/3571264/3571264-uhd_1440_2732_30fps.mp4',
  },
  {
    _id: '2',
    title: 'Product Launch',
    videoUrl: 'https://videos.pexels.com/video-files/4763824/4763824-uhd_1440_2560_24fps.mp4',
  },
  {
    _id: '3',
    title: 'Lifestyle Reel',
    videoUrl: 'https://videos.pexels.com/video-files/5377684/5377684-uhd_1440_2560_25fps.mp4',
  },
  {
    _id: '4',
    title: 'Travel Montage',
    videoUrl: 'https://videos.pexels.com/video-files/4434242/4434242-uhd_1440_2732_24fps.mp4',
  },
  {
    _id: '5',
    title: 'Fashion Edit',
    videoUrl: 'https://videos.pexels.com/video-files/4057411/4057411-uhd_1440_2560_25fps.mp4',
  },
  {
    _id: '6',
    title: 'Music Video',
    videoUrl: 'https://videos.pexels.com/video-files/4536366/4536366-uhd_1440_2560_25fps.mp4',
  },
]

const defaults = {
  eyebrow: 'My Work',
  heading: 'Portfolio',
  description: 'A collection of my best short-form video edits. Each project showcases my ability to create engaging content that resonates with audiences.',
}

function VideoCard({ video, index }: { video: PortfolioItem; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused)
        videoRef.current.play()
      else {
        videoRef.current.currentTime = 0
        videoRef.current.pause()
      }

    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onMouseUp={handleMouseClick}
      className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-gray-900 cursor-pointer"
    >
      {video.videoUrl ? (
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
          src={video.videoUrl}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <span className="text-gray-400 text-sm">No video</span>
        </div>
      )}

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
    <section id="portfolio" className="bg-white pt-48 lg:pt-96">
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
