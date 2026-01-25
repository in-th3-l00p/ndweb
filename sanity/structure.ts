import type {StructureResolver} from 'sanity/structure'

// Singleton document helper - shows single document editor instead of list
const singletonListItem = (
  S: Parameters<StructureResolver>[0],
  typeName: string,
  title: string
) =>
  S.listItem()
    .title(title)
    .id(typeName)
    .child(S.document().schemaType(typeName).documentId(typeName))

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('David Stefan Nedelea - Portfolio')
    .items([
      // Site Settings Group
      S.listItem()
        .title('Site Settings')
        .child(
          S.list()
            .title('Site Settings')
            .items([
              singletonListItem(S, 'header', 'Header & Navigation'),
              singletonListItem(S, 'footer', 'Footer & Social Links'),
            ])
        ),

      S.divider(),

      // Page Sections Group
      S.listItem()
        .title('Page Sections')
        .child(
          S.list()
            .title('Page Sections')
            .items([
              singletonListItem(S, 'hero', 'Hero Section'),
              singletonListItem(S, 'about', 'About Section'),
              singletonListItem(S, 'portfolio', 'Portfolio Section Settings'),
            ])
        ),

      S.divider(),

      // Portfolio Items (collection - multiple documents)
      S.documentTypeListItem('portfolioItem').title('Portfolio Items'),
    ])
