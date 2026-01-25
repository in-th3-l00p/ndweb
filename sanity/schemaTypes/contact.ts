import {defineType, defineField} from 'sanity'
import {EnvelopeIcon} from '@heroicons/react/24/outline'

export const contact = defineType({
  name: 'contact',
  title: 'Contact Section',
  type: 'document',
  icon: EnvelopeIcon,
  fields: [
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
