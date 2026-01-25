import {defineType, defineField} from 'sanity'
import {FilmIcon} from '@heroicons/react/24/outline'

export const portfolioItem = defineType({
  name: 'portfolioItem',
  title: 'Portfolio Item',
  type: 'document',
  icon: FilmIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      description: 'Upload a video file (MP4 recommended)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      order: 'order',
    },
    prepare({title, order}) {
      return {
        title: title,
        subtitle: `Order: ${order ?? 0}`,
      }
    },
  },
})
