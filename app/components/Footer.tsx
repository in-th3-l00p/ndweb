'use client'

import * as motion from 'motion/react-client'
import { socialIcons, type SocialLink } from '@/app/lib/socialIcons'
import type { FooterData } from '@/app/lib/content'

const defaultLinks: SocialLink[] = [
  { name: 'Instagram', url: 'https://www.instagram.com/_david.stefan_?igsh=MXNxMHhjZHd5YnZmbQ%3D%3D&utm_source=qr', platform: 'instagram', showInFooter: true },
  { name: 'TikTok', url: 'https://www.tiktok.com/@davidmotiveaza?_r=1&_t=ZN-9713OUO2TMU', platform: 'tiktok', showInFooter: true },
  { name: 'Email', url: 'mailto:nedeleadavid22@yahoo.com', platform: 'email', showInFooter: true },
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
      <div className="mx-auto max-w-7xl md:flex md:items-center md:justify-between pt-32 lg:pt-48 pb-12">
        <div className="flex justify-center gap-x-6 md:order-2">
          {links.map((item, index) => {
            const IconComponent = socialIcons[item.platform || 'email']
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
