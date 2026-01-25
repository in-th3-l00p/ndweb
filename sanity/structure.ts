import type {StructureResolver} from 'sanity/structure'
import type {ComponentType} from 'react'

// Singleton document helper - shows single document editor instead of list
const singletonListItem = (
  S: Parameters<StructureResolver>[0],
  typeName: string,
  title: string,
  icon?: ComponentType
) =>
  S.listItem()
    .title(title)
    .icon(icon)
    .child(S.document().schemaType(typeName).documentId(typeName))

// Icons for the structure
import {
  CogIcon,
  DocumentTextIcon,
  PhotoIcon,
  UserIcon,
  LinkIcon,
} from '@heroicons/react/24/outline'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('David Stefan Nedelea - Portfolio')
    .items([
      // Site Settings Group
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.list()
            .title('Site Settings')
            .items([
              singletonListItem(S, 'header', 'Header & Navigation', LinkIcon),
              singletonListItem(S, 'footer', 'Footer & Social Links', LinkIcon),
            ])
        ),

      S.divider(),

      // Page Sections Group
      S.listItem()
        .title('Page Sections')
        .icon(DocumentTextIcon)
        .child(
          S.list()
            .title('Page Sections')
            .items([
              singletonListItem(S, 'hero', 'Hero Section', PhotoIcon),
              singletonListItem(S, 'about', 'About Section', UserIcon),
              singletonListItem(S, 'portfolio', 'Portfolio Section Settings', PhotoIcon),
            ])
        ),

      S.divider(),

      // Portfolio Items (collection - multiple documents)
      S.listItem()
        .title('Portfolio Items')
        .icon(PhotoIcon)
        .child(
          S.documentTypeList('portfolioItem')
            .title('Portfolio Items')
            .defaultOrdering([{field: 'order', direction: 'asc'}])
        ),
    ])
