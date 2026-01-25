'use client'

import * as motion from 'motion/react-client'
import { socialIcons, type SocialLink } from '@/app/lib/socialIcons'

interface ContactData {
  heading?: string
  description?: string
}

const defaultSocialLinks: SocialLink[] = [
  { name: 'Instagram', value: '@davidnedelea', url: 'https://instagram.com/davidnedelea', platform: 'instagram', showInContact: true },
  { name: 'LinkedIn', value: 'David Nedelea', url: 'https://linkedin.com/in/davidnedelea', platform: 'linkedin', showInContact: true },
  { name: 'Fiverr', value: 'davidnedelea', url: 'https://fiverr.com/davidnedelea', platform: 'fiverr', showInContact: true },
  { name: 'Book a Call', value: 'cal.com/davidnedelea', url: 'https://cal.com/davidnedelea', platform: 'cal', showInContact: true },
]

const defaults = {
  heading: 'Get in Touch',
  description: 'Ready to bring your vision to life? Reach out through any of these channels and let\'s create something amazing together.',
}

interface ContactProps {
  data?: ContactData
  socialLinks?: SocialLink[]
}

export default function Contact({ data, socialLinks }: ContactProps) {
  const heading = data?.heading ?? defaults.heading
  const description = data?.description ?? defaults.description
  const links = socialLinks && socialLinks.length > 0
    ? socialLinks.filter(link => link.showInContact !== false)
    : defaultSocialLinks

  return (
    <div id="contact" className="bg-white max-w-7xl mx-auto pt-48 lg:pt-96">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
          >
            {heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg/8 text-gray-600"
          >
            {description}
          </motion.p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {links.map((item, index) => {
            const IconComponent = socialIcons[item.platform || 'email']
            return (
              <motion.div
                key={item.name || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <motion.a
                  href={item.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="block border-l border-gray-200 hover:border-cyan-600 transition-colors"
                >
                  <h3 className="pl-6 font-semibold text-gray-900 flex items-center gap-2">
                    {IconComponent && <IconComponent className="size-5 text-cyan-600" />}
                    {item.name}
                  </h3>
                  <div className="block pt-2 pl-6 text-gray-600 hover:text-cyan-600 transition-colors">
                    {item.value}
                  </div>
                </motion.a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
