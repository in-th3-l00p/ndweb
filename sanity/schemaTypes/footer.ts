import {defineType, defineField} from 'sanity'
import {DocumentTextIcon} from '@heroicons/react/24/outline'

export const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
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
