'use client'

import * as motion from 'motion/react-client'

interface CTAData {
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
}

const defaults = {
  heading: 'Ready to elevate your content?',
  description: 'Let\'s collaborate to create stunning video content that captures your audience\'s attention and drives engagement.',
  primaryCta: {
    text: 'Get Started',
    link: '#contact',
  },
  secondaryCta: {
    text: 'View Portfolio',
    link: '#portfolio',
  },
}

export default function CTA({ data }: { data?: CTAData }) {
  const heading = data?.heading ?? defaults.heading
  const description = data?.description ?? defaults.description
  const primaryCta = data?.primaryCta ?? defaults.primaryCta
  const secondaryCta = data?.secondaryCta ?? defaults.secondaryCta

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl pt-32 lg:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl"
          >
            {heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-300"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <motion.a
              href={primaryCta.link || '#'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {primaryCta.text}
            </motion.a>
            <motion.a
              href={secondaryCta.link || '#'}
              whileHover={{ x: 4 }}
              className="text-sm/6 font-semibold text-white"
            >
              {secondaryCta.text}
              <span aria-hidden="true"> →</span>
            </motion.a>
          </motion.div>
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          >
            <circle r={512} cx={512} cy={512} fill="url(#cta-gradient)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="cta-gradient">
                <stop stopColor="#06b6d4" />
                <stop offset={1} stopColor="#0891b2" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </div>
  )
}
