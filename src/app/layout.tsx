import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import KosmosMotionComponent from '../../components/kosmosMotion'
import { home } from '../../content/home'
import { pageMetadata, siteUrl } from './seo'
import './globals.css'

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    robots: 'index, follow',
    ...pageMetadata({
        title: home.metadata.title,
        description: home.metadata.description,
        path: '/',
    }),
}

/**
 * Structured data describing the person behind this site, for search engines.
 * Lives exactly once in the root layout.
 */
const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kevin Heyland',
    url: siteUrl,
    // Ein echtes Foto, nicht die Open-Graph-Textkarte: Google erwartet hier die Person.
    image: `${siteUrl}/kevinheyland-profile.jpeg`,
    jobTitle: 'Partner & Head of Operations',
    worksFor: {
        '@type': 'Organization',
        name: 'DEVDEER GmbH',
        url: 'https://devdeer.com',
    },
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Magdeburg',
        addressCountry: 'DE',
    },
    sameAs: ['https://github.com/devdeer-kevin', 'https://www.linkedin.com/in/kevin-heyland-003b1456/'],
    knowsAbout: ['Künstliche Intelligenz', 'Microsoft Azure', 'Agile Softwareentwicklung', 'UX-Design', 'Operations', 'Digitales Marketing'],
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>): React.ReactElement {
    return (
        <html lang="de" className={`${GeistSans.variable} ${GeistMono.variable}`}>
            <body className="flex flex-col justify-center w-full items-center">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
                <div aria-hidden className="stars" />
                <div aria-hidden className="stars-near" />
                <div aria-hidden className="galaxie" />
                <span aria-hidden className="sternschnuppe" />
                <div aria-hidden className="ambient" />
                <KosmosMotionComponent />
                {children}
            </body>
        </html>
    )
}
