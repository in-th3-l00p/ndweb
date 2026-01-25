import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Section',
  type: 'document',
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
            { name: 'name', title: 'Feature Name', type: 'string' },
            { name: 'description', title: 'Feature Description', type: 'text' },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Cloud Upload', value: 'cloud' },
                  { title: 'Lock', value: 'lock' },
                  { title: 'Server', value: 'server' },
                  { title: 'Bolt', value: 'bolt' },
                  { title: 'Chart', value: 'chart' },
                  { title: 'Code', value: 'code' },
                ],
              },
            },
          ],
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
