import {defineType, defineField} from 'sanity'
import {LinkIcon} from '@heroicons/react/24/outline'

export const footer = defineType({
  name: 'footer',
  title: 'Footer & Social Links',
  type: 'document',
  icon: LinkIcon,
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
            {name: 'name', type: 'string', title: 'Platform Name'},
            {name: 'url', type: 'url', title: 'URL'},
            {
              name: 'platform',
              type: 'string',
              title: 'Platform',
              options: {
                list: [
                  {title: 'Facebook', value: 'facebook'},
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'X (Twitter)', value: 'x'},
                  {title: 'GitHub', value: 'github'},
                  {title: 'YouTube', value: 'youtube'},
                  {title: 'LinkedIn', value: 'linkedin'},
                  {title: 'TikTok', value: 'tiktok'},
                ],
              },
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'platform',
            },
          },
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
