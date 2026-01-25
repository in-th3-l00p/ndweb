'use client'

import {
  FilmIcon,
  VideoCameraIcon,
  ScissorsIcon,
  SparklesIcon,
  MusicalNoteIcon,
  BoltIcon,
  EyeIcon,
  ClockIcon,
  HeartIcon,
  StarIcon
} from '@heroicons/react/20/solid'
import * as motion from 'motion/react-client'
import { urlFor } from '@/sanity/lib/image'

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  film: FilmIcon,
  videoCamera: VideoCameraIcon,
  scissors: ScissorsIcon,
  sparkles: SparklesIcon,
  musicalNote: MusicalNoteIcon,
  bolt: BoltIcon,
  eye: EyeIcon,
  clock: ClockIcon,
  heart: HeartIcon,
  star: StarIcon,
}

interface AboutData {
  eyebrow?: string
  heading?: string
  description?: string
  features?: {
    name?: string
    description?: string
    icon?: string
  }[]
  image?: { asset: { _ref: string } }
}

const defaultFeatures = [
  {
    name: 'Precision Editing',
    description: 'Every frame matters. I craft seamless edits that capture attention and tell compelling stories.',
    icon: 'scissors',
  },
  {
    name: 'Creative Vision',
    description: 'Transforming raw footage into polished content with a unique artistic perspective.',
    icon: 'sparkles',
  },
  {
    name: 'Fast Turnaround',
    description: 'Quick delivery without compromising quality. Your project, on time, every time.',
    icon: 'bolt',
  },
]

const defaults = {
  eyebrow: 'About Me',
  heading: 'Video Editor & Content Creator',
  description: 'I\'m David Stefan Nedelea, a passionate video editor specializing in short-form content that captivates audiences and drives engagement.',
  features: defaultFeatures,
}

export default function About({ data }: { data?: AboutData }) {
  const eyebrow = data?.eyebrow ?? defaults.eyebrow
  const heading = data?.heading ?? defaults.heading
  const description = data?.description ?? defaults.description
  const features = data?.features ?? defaults.features
  const imageUrl = data?.image ? urlFor(data.image).url() : '/image.png'

  return (
    <div id="about" className="bg-white max-w-7xl mx-auto pt-32 lg:pt-48">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:ml-auto lg:pt-4 lg:pl-4">
          <div className="lg:max-w-lg">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="text-base/7 font-semibold text-cyan-600"
            >
              {eyebrow}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
            >
              {heading}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg/8 text-gray-600"
            >
              {description}
            </motion.p>
            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
              {features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon || 'film'] || FilmIcon
                return (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="relative pl-9"
                  >
                    <dt className="inline font-semibold text-gray-900">
                      <IconComponent aria-hidden="true" className="absolute top-1 left-1 size-5 text-cyan-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </motion.div>
                )
              })}
            </dl>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex items-start self-center justify-end lg:order-first"
        >
          <img
            alt="Product screenshot"
            src={imageUrl}
            width={2432}
            height={1442}
            className="w-xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-2xl"
          />
        </motion.div>
      </div>
    </div>
  )
}
