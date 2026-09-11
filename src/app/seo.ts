import type { Metadata } from 'next'

/** Absolute Basis der Seite. Relative Pfade werden von Next dagegen aufgelöst. */
export const siteUrl = 'https://kevinheyland.com'

/** Alt-Text der generierten Open-Graph-Karte. `opengraph-image.tsx` nutzt denselben Wert. */
export const ogImageAlt = 'Kevin Heyland, KI-Beratung und Schulung in Magdeburg'

/**
 * Die geteilte Open-Graph-Karte aus `opengraph-image.tsx`. Jede Seite muss sie
 * selbst angeben: ein eigenes `openGraph`-Objekt ersetzt das des Root-Layouts
 * vollständig, das dateibasierte Bild fällt dabei sonst weg.
 */
const ogImage = {
    url: '/opengraph-image',
    width: 1200,
    height: 630,
    alt: ogImageAlt,
}

/**
 * Baut Title, Description, Canonical und Open Graph einer Seite aus einem Pfad.
 * `path` beginnt mit einem Schrägstrich und bleibt relativ, damit Canonical und
 * `og:url` garantiert dieselbe Schreibweise haben.
 */
export function pageMetadata({ title, description, path, type = 'website' }: { title: string; description: string; path: string; type?: 'website' | 'profile' }): Metadata {
    return {
        title,
        description,
        alternates: {
            canonical: path,
        },
        openGraph: {
            title,
            description,
            url: path,
            siteName: 'Kevin Heyland',
            type,
            locale: 'de_DE',
            images: [ogImage],
        },
    }
}
