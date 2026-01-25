import {defineType, defineField} from 'sanity'
import {LinkIcon} from '@heroicons/react/24/outline'

export const footer = defineType({
  name: 'footer',
  title: 'Footer & Social Links',
  type: 'document',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'platform', type: 'string', title: 'Platform'},
            {name: 'url', type: 'string', title: 'URL'},
          ],
        },
      ],
    }),
  ],
})
