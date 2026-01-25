import {defineType, defineField} from 'sanity'
import {LinkIcon} from '@heroicons/react/24/outline'

export const header = defineType({
  name: 'header',
  title: 'Header & Navigation',
  type: 'document',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'navigation',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Link Text'},
            {name: 'href', type: 'string', title: 'URL'},
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'href',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Header Settings',
      }
    },
  },
})
