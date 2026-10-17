import type { MetadataRoute } from 'next'
import { siteUrl } from './seo'

/**
 * Alle indexierbaren Routen. Die Sitemap wird generiert, nicht gepflegt.
 *
 * Ohne `priority` und `changeFrequency`: Google wertet beides nicht aus.
 * Ohne `lastModified`: das Feld wird ausgewertet, aber nur wenn es stimmt, und
 * ein Build-Zeitstempel stimmt nie. Lieber keine Angabe als eine falsche.
 */
const routes = ['', '/ki-beratung', '/ki-workshop-magdeburg', '/referenzen', '/impressum', '/datenschutz']

export default function sitemap(): MetadataRoute.Sitemap {
    return routes.map((path) => ({
        url: `${siteUrl}${path}`,
    }))
}
