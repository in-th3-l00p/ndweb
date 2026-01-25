import {defineType, defineField} from 'sanity'
import {LinkIcon} from '@heroicons/react/24/outline'

export const socialLinks = defineType({
  name: 'socialLinks',
  title: 'Social Links',
  type: 'document',
  icon: LinkIcon,
  groups: [
    {name: 'settings', title: 'Settings', default: true},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'settings',
      initialValue: 'Social Links Settings',
      readOnly: true,
    }),
    defineField({
      name: 'links',
      title: 'Social Media Links',
      type: 'array',
      group: 'settings',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Display Name', validation: (Rule) => Rule.required()},
            {name: 'value', type: 'string', title: 'Display Value (e.g. @username)'},
            {name: 'url', type: 'url', title: 'URL', validation: (Rule) => Rule.required()},
            {
              name: 'platform',
              type: 'string',
              title: 'Platform',
              description: 'Used to display the correct icon',
              options: {
                list: [
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'LinkedIn', value: 'linkedin'},
                  {title: 'Fiverr', value: 'fiverr'},
                  {title: 'Cal.com', value: 'cal'},
                  {title: 'Email', value: 'email'},
                  {title: 'TikTok', value: 'tiktok'},
                  {title: 'YouTube', value: 'youtube'},
                  {title: 'X (Twitter)', value: 'x'},
                  {title: 'Facebook', value: 'facebook'},
                  {title: 'GitHub', value: 'github'},
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'showInFooter',
              type: 'boolean',
              title: 'Show in Footer',
              initialValue: true,
            },
            {
              name: 'showInContact',
              type: 'boolean',
              title: 'Show in Contact Section',
              initialValue: true,
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
        title: 'Social Links Settings',
      }
    },
  },
})
