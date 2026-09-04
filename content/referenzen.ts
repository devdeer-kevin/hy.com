/**
 * Gesamter Text der Seite /referenzen. Layout und Komposition liegen in
 * `src/app/referenzen/page.tsx`, hier steht ausschließlich Inhalt.
 */

export interface IReferenz {
    title: string
    text: string
    imageAlt: string
    cta: {
        label: string
        href: string
    }
}

export const referenzen = {
    metadata: {
        title: 'Referenzen · Kevin Heyland',
        description:
            'Drei Werkzeuge aus Magdeburg als Arbeitsprobe: Tonnentour, die Ausfüllhilfe des Stadtelternrats zur Schulanmeldung und der Pace Planer für Laufveranstaltungen.',
    },
    hero: {
        h1: 'Referenzen',
        intro: 'Kostenlose Werkzeuge, die ich neben der Arbeit gebaut habe und die öffentlich laufen. Sie zeigen, wie ich arbeite: erst verstehen, dann bauen, dann verlässlich betreiben.',
    },
    produkte: [
        {
            title: 'Tonnentour',
            text: 'Abfuhrkalender für Magdeburg und das Jerichower Land. Straße eingeben und alle Abfuhrtermine für jede Tonnenart sehen. Kostenlos für Anwohnerinnen und Anwohner, mit einem Angebot für Hausverwaltungen mit mehreren Standorten.',
            imageAlt: 'Die Tonnentour-App auf einem Smartphone',
            cta: {
                label: 'Termine finden',
                href: 'https://tonnentour.de',
            },
        },
        {
            title: 'Ausfüllhilfe zur Schulanmeldung',
            text: 'Beantwortet Fragen zur Schulanmeldung aus dem offiziellen Leitfaden des Stadtelternrats Magdeburg, mit Seitenangaben und in Sekunden. Gebaut, damit Eltern Klarheit bekommen, ohne ein 40-seitiges Dokument zu durchsuchen.',
            imageAlt: 'Die Ausfüllhilfe des Stadtelternrats auf einem Smartphone',
            cta: {
                label: 'Assistent ausprobieren',
                href: 'https://ausfuellhilfe.stadtelternrat-magdeburg.de',
            },
        },
        {
            title: 'Pace Planer',
            text: 'Ein bewusst einfacher Pace-Rechner für Läuferinnen und Läufer: Zielzeiten, Uhrzeiten und Zwischenzeiten für den Wettkampftag. Pace eingeben, Rennen planen.',
            imageAlt: 'Der Pace Planer auf einem Smartphone',
            cta: {
                label: 'Rennen planen',
                href: 'https://pace-planer.de',
            },
        },
    ] satisfies IReferenz[],
    kontakt: {
        text: 'Du willst wissen, wie so ein Werkzeug für deinen Betrieb aussehen könnte? Schreib mir an mail@kevinheyland.com.',
        cta: {
            label: 'E-Mail schreiben',
            href: 'mailto:mail@kevinheyland.com',
        },
    },
}
