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
    defineField({
      name: 'contactItems',
      title: 'Contact Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Name'},
            {name: 'value', type: 'string', title: 'Display Value'},
            {name: 'url', type: 'url', title: 'URL', validation: (Rule) => Rule.required()},
            {
              name: 'platform',
              type: 'string',
              title: 'Platform',
              options: {
                list: [
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'LinkedIn', value: 'linkedin'},
                  {title: 'Fiverr', value: 'fiverr'},
                  {title: 'Cal.com', value: 'cal'},
                  {title: 'Email', value: 'email'},
                ],
              },
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'value',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
})
