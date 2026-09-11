/**
 * Gesamter Text der 404-Seite. Layout liegt in `src/app/not-found.tsx`.
 *
 * Die Seite ist auf noindex gesetzt und trägt kein Canonical: sie zeigte sonst
 * von jeder falschen Adresse aus auf die Startseite.
 */
export const notFound = {
    metadata: {
        title: 'Seite nicht gefunden · Kevin Heyland',
        description: 'Diese Adresse gibt es auf kevinheyland.com nicht. Über die Startseite findest du alle Angebote zu KI-Beratung und Schulung in Magdeburg.',
    },
    code: '404',
    h1: 'Diese Seite gibt es nicht.',
    intro: 'Die Adresse ist vielleicht veraltet oder vertippt. Alles, was es gibt, findest du über die Startseite.',
    cta: {
        label: 'Zur Startseite',
        href: '/',
    },
}
