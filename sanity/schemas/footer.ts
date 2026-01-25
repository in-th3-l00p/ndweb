import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Platform Name', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'X (Twitter)', value: 'x' },
                  { title: 'GitHub', value: 'github' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'TikTok', value: 'tiktok' },
                ],
              },
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer Settings',
      }
    },
  },
})
