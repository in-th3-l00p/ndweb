import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'object',
      fields: [
        { name: 'highlight', title: 'Highlight Text', type: 'string' },
        { name: 'text', title: 'Badge Text', type: 'string' },
        { name: 'link', title: 'Badge Link', type: 'url' },
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
      title: 'Primary CTA',
      type: 'object',
      fields: [
        { name: 'text', title: 'Button Text', type: 'string' },
        { name: 'link', title: 'Button Link', type: 'url' },
      ],
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary CTA',
      type: 'object',
      fields: [
        { name: 'text', title: 'Link Text', type: 'string' },
        { name: 'link', title: 'Link URL', type: 'url' },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Hero Image',
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
