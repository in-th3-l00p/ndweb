import {defineType, defineField} from 'sanity'
import {MegaphoneIcon} from '@heroicons/react/24/outline'

export const cta = defineType({
  name: 'cta',
  title: 'CTA Section',
  type: 'document',
  icon: MegaphoneIcon,
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
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
})
