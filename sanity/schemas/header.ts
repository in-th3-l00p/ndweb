import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
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
            { name: 'name', title: 'Link Text', type: 'string' },
            { name: 'href', title: 'Link URL', type: 'string' },
          ],
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
