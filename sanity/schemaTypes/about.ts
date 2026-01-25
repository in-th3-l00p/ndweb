import {defineType, defineField} from 'sanity'
import {UserIcon} from '@heroicons/react/24/outline'

export const about = defineType({
  name: 'about',
  title: 'About Section',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        defineField({
          type: 'string',
          name: 'skill',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'profileImage',
    },
  },
})
