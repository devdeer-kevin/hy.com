import type { MetadataRoute } from 'next'

/** All indexable routes of the site. The sitemap is generated, not maintained. */
const routes: { path: string; changeFrequency: 'monthly' | 'yearly'; priority: number }[] = [
    { path: '', changeFrequency: 'monthly', priority: 1 },
    { path: '/ueber-mich', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/referenzen', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/impressum', changeFrequency: 'yearly', priority: 0.1 },
    { path: '/datenschutz', changeFrequency: 'yearly', priority: 0.1 },
]

export default function sitemap(): MetadataRoute.Sitemap {
    return routes.map((route) => ({
        url: `https://kevinheyland.com${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }))
}
