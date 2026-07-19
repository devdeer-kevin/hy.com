import { ReactElement } from 'react'
import NavigationTopComponent from '../../components/navigationTop'
import LandingPageComponent from '../../components/landingPage'
import FooterComponent from '../../components/footer'

/**
 * Structured data describing the person behind this site, for search engines.
 */
const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kevin Heyland',
    url: 'https://kevinheyland.com',
    image: 'https://kevinheyland.com/opengraph-image',
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
    knowsAbout: ['Microsoft Azure', 'Agile Software Development', 'UX Design', 'Operations', 'Digital Marketing'],
}

export default function Home(): ReactElement {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
            <NavigationTopComponent />
            <LandingPageComponent />
            <FooterComponent />
        </>
    )
}
