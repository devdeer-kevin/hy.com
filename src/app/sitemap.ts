import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://kevinheyland.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://kevinheyland.com/blog/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://kevinheyland.com/blog/backlogs-structure-creativity',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://kevinheyland.com/blog/committing-to-progress',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://kevinheyland.com/blog/spatial-web-redesign',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://kevinheyland.com/imprint',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.1,
        },
    ]
}
