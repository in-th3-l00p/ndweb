import {defineType, defineField} from 'sanity'
import {SparklesIcon} from '@heroicons/react/24/outline'

export const hero = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  icon: SparklesIcon,
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'object',
      fields: [
        {name: 'highlight', type: 'string', title: 'Highlight Text'},
        {name: 'text', type: 'string', title: 'Badge Text'},
        {name: 'link', type: 'string', title: 'Badge Link'},
      ],
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
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA Button',
      type: 'object',
      fields: [
        {name: 'text', type: 'string', title: 'Button Text'},
        {name: 'link', type: 'string', title: 'Button Link'},
      ],
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary CTA Link',
      type: 'object',
      fields: [
        {name: 'text', type: 'string', title: 'Link Text'},
        {name: 'link', type: 'string', title: 'Link URL'},
      ],
    }),
    defineField({
      name: 'video',
      title: 'Hero Video',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      description: 'Upload a video file (MP4 recommended) that will be displayed in the phone mockup',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
})
