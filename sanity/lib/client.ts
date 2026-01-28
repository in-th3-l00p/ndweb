import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disabled for real-time updates and ISR
  perspective: 'published', // Use 'previewDrafts' for draft mode
  stega: {
    enabled: false,
    studioUrl: '/studio',
  },
})
