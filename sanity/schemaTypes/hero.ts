import {defineType, defineField} from 'sanity'
import {PhotoIcon} from '@heroicons/react/24/outline'

export const hero = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  icon: PhotoIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
    }),
    defineField({
      name: 'ctaText',
      title: 'Call-to-Action Text',
      type: 'string',
    }),
    defineField({
      name: 'ctaLink',
      title: 'Call-to-Action Link',
      type: 'string',
    }),
  ],
})
