/**
 * Gesamter Text der Startseite. Layout und Komposition liegen in
 * `src/app/page.tsx`, hier steht ausschließlich Inhalt.
 */

export interface IAngebot {
    title: string
    text: string
    badge?: string
    link?: {
        label: string
        href: string
    }
}

export interface IProduktKurz {
    title: string
    text: string
    imageAlt: string
    cta: {
        label: string
        href: string
    }
}

export const home = {
    metadata: {
        title: 'Kevin Heyland · KI-Beratung und Schulung in Magdeburg',
        description: 'KI-Beratung, Schulung und Werkstatt für kleine Betriebe und Institutionen in Magdeburg und Sachsen-Anhalt. Verständlich, praktisch und ohne Umwege.',
    },
    hero: {
        h1: 'KI, die in deinem Betrieb ankommt',
        intro: 'Beratung, Schulung und Werkstatt für kleine Betriebe und Institutionen in Magdeburg, Sachsen-Anhalt und dem deutschsprachigen Raum. Du bekommst Standards aus Enterprise-Projekten, zugeschnitten auf deine Größe und dein Budget.',
        cta: {
            label: 'E-Mail schreiben',
            href: 'mailto:mail@kevinheyland.com',
        },
        beleg: 'Partner & Head of Operations, DEVDEER GmbH, Magdeburg.',
        portrait: {
            alt: 'Kevin Heyland, Schwarz-Weiß-Porträt',
            credit: {
                label: 'Fotografie von Giovanna Veronica Gahrns',
                href: 'https://www.giovannagahrns.com',
            },
        },
    },
    zahlen: [
        { wert: '3', label: 'Tage Werkstatt' },
        { wert: '6', label: 'Plätze' },
        { wert: '20', label: 'Jahre Berufsweg' },
    ],
    angebote: {
        title: 'Angebote',
        subtitle: 'Drei Wege, ins Arbeiten zu kommen',
        items: [
            {
                title: 'KI-Werkstatt in Magdeburg',
                badge: 'Drei Tage, sechs Plätze',
                text: 'Du bringst eine echte Aufgabe aus deinem Alltag mit und arbeitest direkt daran, mit mir an deiner Seite. Keine Folienschlacht, sondern Handarbeit an deinem eigenen Fall.',
                link: {
                    label: 'Zur Werkstatt',
                    href: '/ki-workshop-magdeburg',
                },
            },
            {
                title: 'Inhouse-Schulung',
                text: 'Ich komme zu dir in den Betrieb und schule dein Team an euren eigenen Abläufen und Dokumenten. Nicht an Beispielen aus dem Internet, sondern an dem, was bei euch auf dem Tisch liegt.',
            },
            {
                title: 'KI-Beratung 1:1',
                text: 'Begleitung über einzelne Termine hinaus: wiederkehrende Abläufe automatisieren und Wissen aus Ordnern und Köpfen nutzbar machen. Dein Handbuch beantwortet Fragen, statt im Regal zu stehen.',
            },
        ] satisfies IAngebot[],
    },
    prinzip: {
        title: 'Verstehen kommt vor Bauen',
        text: 'Wirtschaftspädagogik hat mich erklären gelehrt, UX-Design hat mich zuhören gelehrt. Beides kommt vor der ersten Zeile Technik: Wenn du ein Werkzeug nicht verstehst, ist das Werkzeug nicht fertig.',
    },
    belege: {
        title: 'Belege',
        subtitle: 'Woran du mich messen kannst',
        devdeer: {
            title: 'DEVDEER im Hintergrund',
            text: 'Ich bin Partner und Head of Operations der DEVDEER GmbH, einer Azure-Beratung aus Magdeburg. Für dich heißt das: Hinter jedem Projekt steht die Kapazität eines eingespielten Teams, und ich bin dein Ansprechpartner und stehe dafür gerade.',
            link: {
                label: 'devdeer.com',
                href: 'https://devdeer.com',
            },
        },
        produkteIntro: 'Drei Werkzeuge, die ich gebaut habe und die öffentlich laufen:',
        produkte: [
            {
                title: 'Tonnentour',
                text: 'Abfuhrtermine für Magdeburg und das Jerichower Land. Straße eingeben, Termine für jede Tonne sehen.',
                imageAlt: 'Die Tonnentour-App auf einem Smartphone',
                cta: {
                    label: 'Termine finden',
                    href: 'https://tonnentour.de',
                },
            },
            {
                title: 'Ausfüllhilfe',
                text: 'Beantwortet Fragen zur Schulanmeldung aus dem offiziellen Leitfaden des Stadtelternrats Magdeburg.',
                imageAlt: 'Die Ausfüllhilfe des Stadtelternrats auf einem Smartphone',
                cta: {
                    label: 'Assistent ausprobieren',
                    href: 'https://ausfuellhilfe.stadtelternrat-magdeburg.de',
                },
            },
            {
                title: 'Pace Planer',
                text: 'Ein bewusst einfacher Pace-Rechner für den Wettkampftag.',
                imageAlt: 'Der Pace Planer auf einem Smartphone',
                cta: {
                    label: 'Rennen planen',
                    href: 'https://pace-planer.de',
                },
            },
        ] satisfies IProduktKurz[],
        links: {
            referenzen: { label: 'Zu den Referenzen', href: '/referenzen' },
            ueberMich: { label: 'Mehr über mich', href: '/ueber-mich' },
        },
    },
    kontakt: {
        title: 'Der nächste Schritt',
        text: 'Schreib mir eine E-Mail an mail@kevinheyland.com und schilder kurz, worum es geht. Du bekommst eine ehrliche Einschätzung, ob und wie ich helfen kann. Auch dann, wenn die Antwort lautet, dass du dafür keine KI brauchst.',
        cta: {
            label: 'E-Mail schreiben',
            href: 'mailto:mail@kevinheyland.com',
        },
    },
}
