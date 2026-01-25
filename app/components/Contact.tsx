'use client'

import * as motion from 'motion/react-client'

interface ContactItem {
  name?: string
  value?: string
  url?: string
  platform?: string
}

interface ContactData {
  heading?: string
  description?: string
  contactItems?: ContactItem[]
}

const platformIcons: Record<string, (props: React.SVGProps<SVGSVGElement>) => React.ReactElement> = {
  instagram: (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        clipRule="evenodd"
      />
    </svg>
  ),
  linkedin: (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  fiverr: (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h1.527v1.316zm-6.786 1.501h-3.359c.088.546.473.881 1.057.881.42 0 .752-.178.926-.467h1.376c-.279 1.054-1.22 1.7-2.302 1.7-1.44 0-2.449-1.064-2.449-2.51 0-1.447 1.01-2.511 2.45-2.511 1.437 0 2.347 1.064 2.347 2.51 0 .132-.015.265-.046.397zm-3.36-.996h1.784c-.095-.559-.463-.936-1.025-.936-.56 0-.674.377-.759.936zm-4.16 2.953h-1.613v-4.874h1.612v4.874zm-.806-5.676a.995.995 0 1 0 0-1.99.995.995 0 0 0 0 1.99zM5.78 13.384h-1.61v2.453h1.61v-2.453zm.006-2.51H4.172v1.316H5.78v-1.316h.006zM2.553 15.837h1.612v-2.453H2.553v2.453zm-.006-2.51h1.61v-1.316h-1.61v1.316zM0 15.837h1.612v-4.832H0v4.832zm0-5.523h1.612V9.01H0v1.303z" />
    </svg>
  ),
  cal: (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
    </svg>
  ),
  email: (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
  ),
}

const defaultContactItems = [
  { name: 'Instagram', value: '@davidnedelea', url: 'https://instagram.com/davidnedelea', platform: 'instagram' },
  { name: 'LinkedIn', value: 'David Nedelea', url: 'https://linkedin.com/in/davidnedelea', platform: 'linkedin' },
  { name: 'Fiverr', value: 'davidnedelea', url: 'https://fiverr.com/davidnedelea', platform: 'fiverr' },
  { name: 'Book a Call', value: 'cal.com/davidnedelea', url: 'https://cal.com/davidnedelea', platform: 'cal' },
]

const defaults = {
  heading: 'Get in Touch',
  description: 'Ready to bring your vision to life? Reach out through any of these channels and let\'s create something amazing together.',
  contactItems: defaultContactItems,
}

export default function Contact({ data }: { data?: ContactData }) {
  const heading = data?.heading ?? defaults.heading
  const description = data?.description ?? defaults.description
  const contactItems = data?.contactItems && data.contactItems.length > 0 ? data.contactItems : defaults.contactItems

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
          {contactItems.map((item, index) => {
            const IconComponent = platformIcons[item.platform || 'email']
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
                  <div className="block  pt-2 pl-6 text-gray-600 hover:text-cyan-600 transition-colors">
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
