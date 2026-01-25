import {type SchemaTypeDefinition} from 'sanity'

import {header} from './header'
import {footer} from './footer'
import {hero} from './hero'
import {about} from './about'
import {portfolio} from './portfolio'
import {portfolioItem} from './portfolioItem'
import {contact} from './contact'
import {cta} from './cta'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [header, footer, hero, about, portfolio, portfolioItem, contact, cta],
}
