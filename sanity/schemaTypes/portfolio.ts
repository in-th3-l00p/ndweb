import {defineType, defineField} from 'sanity'
import {RectangleStackIcon} from '@heroicons/react/24/outline'

export const portfolio = defineType({
  name: 'portfolio',
  title: 'Portfolio Section Settings',
  type: 'document',
  icon: RectangleStackIcon,
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow Text',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
})
