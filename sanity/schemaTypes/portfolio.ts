import {defineType, defineField} from 'sanity'
import {PhotoIcon} from '@heroicons/react/24/outline'

export const portfolio = defineType({
  name: 'portfolio',
  title: 'Portfolio Section Settings',
  type: 'document',
  icon: PhotoIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
    }),
    defineField({
      name: 'itemsPerPage',
      title: 'Items Per Page',
      type: 'number',
      initialValue: 6,
    }),
  ],
})
