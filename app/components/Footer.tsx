'use client'

import * as motion from 'motion/react-client'
import { socialIcons, type SocialLink } from '@/app/lib/socialIcons'

interface FooterData {
  copyright?: string
}

const defaultLinks: SocialLink[] = [
  { name: 'Instagram', url: '#', platform: 'instagram', showInFooter: true },
  { name: 'TikTok', url: '#', platform: 'tiktok', showInFooter: true },
  { name: 'YouTube', url: '#', platform: 'youtube', showInFooter: true },
  { name: 'LinkedIn', url: '#', platform: 'linkedin', showInFooter: true },
]

interface FooterProps {
  data?: FooterData
  socialLinks?: SocialLink[]
}

export default function Footer({ data, socialLinks }: FooterProps) {
  const copyright = data?.copyright ?? `${new Date().getFullYear()} David Stefan Nedelea. All rights reserved.`
  const links = socialLinks && socialLinks.length > 0
    ? socialLinks.filter(link => link.showInFooter !== false)
    : defaultLinks

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl md:flex md:items-center md:justify-between pt-32 lg:pt-64 pb-12">
        <div className="flex justify-center gap-x-6 md:order-2">
          {links.map((item, index) => {
            const IconComponent = socialIcons[item.platform || 'github']
            if (!IconComponent) return null
            return (
              <motion.a
                key={item.name || index}
                href={item.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-600 hover:text-gray-800"
              >
                <span className="sr-only">{item.name}</span>
                <IconComponent aria-hidden="true" className="size-6" />
              </motion.a>
            )
          })}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0"
        >
          &copy; {copyright}
        </motion.p>
      </div>
    </motion.footer>
  )
}
