import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disabled for ISR with on-demand revalidation
  token: process.env.SANITY_API_TOKEN, // Server-side token for authenticated requests
  perspective: 'published', // Use 'previewDrafts' for draft mode
  stega: {
    enabled: false,
    studioUrl: '/studio',
  },
})
