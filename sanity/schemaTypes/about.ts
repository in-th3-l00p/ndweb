import {defineType, defineField} from 'sanity'
import {UserIcon} from '@heroicons/react/24/outline'

export const about = defineType({
  name: 'about',
  title: 'About Section',
  type: 'document',
  icon: UserIcon,
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
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Feature Name'},
            {name: 'description', type: 'text', title: 'Feature Description'},
            {
              name: 'icon',
              type: 'string',
              title: 'Icon',
              options: {
                list: [
                  {title: 'Film', value: 'film'},
                  {title: 'Video Camera', value: 'videoCamera'},
                  {title: 'Scissors', value: 'scissors'},
                  {title: 'Sparkles', value: 'sparkles'},
                  {title: 'Musical Note', value: 'musicalNote'},
                  {title: 'Bolt (Speed)', value: 'bolt'},
                  {title: 'Eye', value: 'eye'},
                  {title: 'Clock', value: 'clock'},
                  {title: 'Heart', value: 'heart'},
                  {title: 'Star', value: 'star'},
                ],
              },
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'description',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
})
