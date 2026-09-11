/**
 * Gesamter Text der Seite /ki-workshop-magdeburg. Layout und Komposition
 * liegen in `src/app/ki-workshop-magdeburg/page.tsx`, hier steht
 * ausschließlich Inhalt.
 *
 * Offen und vor Livegang zu ergänzen (kein Platzhalter im Text, die
 * Stellen bleiben bis dahin weg):
 * - `termine.items`: sobald Termine feststehen. Ohne Termine wird der
 *   Abschnitt nicht gerendert und der Hero zeigt keinen Termin.
 * - Gehminuten: an `ort.anfahrt.wege[0].text` anhängen, sobald abgelaufen
 *   ("Von dort sind es X Minuten zu Fuß.").
 * - Stufen: Zahl der Stufen in `ort.anfahrt.wege[2].text` und in der
 *   FAQ-Antwort "Ist der Zugang barrierefrei?" ergänzen, sobald abgezählt.
 * - Straßenbahnlinien kurz vor Livegang gegen mvbnet.de prüfen.
 */

export interface IFaq {
    frage: string
    antwort: string
}

export interface ITag {
    label: string
    title: string
    paragraphs: string[]
    ergebnis: string
}

export interface IFakt {
    label: string
    wert: string
}

export interface ITermin {
    label: string
    startDate: string
    endDate: string
}

export interface IPreis {
    label: string
    wert: string
}

export interface IWeg {
    title: string
    text: string
}

const ctaHref = 'mailto:mail@kevinheyland.com?subject=KI-Werkstatt%20Magdeburg'

export const kiWorkshopMagdeburg = {
    metadata: {
        title: 'KI-Workshop Magdeburg: eigenes Tool bauen in 3 Tagen',
        description: 'Drei Tage, sechs Plätze, ein echtes Werkzeug: Du baust mit KI ein Tool für deinen Betrieb und bringst es sicher online. Ohne Programmierkenntnisse.',
    },
    hero: {
        kicker: 'KI-Werkstatt in Magdeburg',
        h1: 'In drei Tagen zum eigenen KI-Werkzeug',
        intro: 'Du gehst mit einem Problem rein und mit einer laufenden Anwendung raus. Kein Foliensatz, keine Demo, kein "so könnte man das machen". Dein Werkzeug, deine Daten, deine URL.',
        sub: 'Sechs Plätze. Drei Tage. In Magdeburg, an einem Tisch.',
        cta: {
            label: 'Platz anfragen',
            href: ctaHref,
        },
        terminLabel: 'Nächster Termin:',
        fakten: [
            { label: 'Nächster Termin', wert: 'auf Anfrage' },
            { label: 'Plätze', wert: '6' },
            { label: 'Preis ab', wert: '690 € netto' },
            { label: 'Ort', wert: 'Herderstraße 31, Magdeburg' },
        ] satisfies IFakt[],
    },
    fuerWen: {
        title: 'Für wen das gemacht ist',
        paragraphs: [
            'Für den einen Menschen im kleinen Betrieb, der Digitales an sich zieht. Das Büro, das Marketing, die Junior-Position in der Agentur, das Kind im Familienbetrieb, die Lehrkraft mit IT-Aufgabe.',
            'Du kennst dein Unternehmen und weißt genau, welcher Handgriff jede Woche Stunden frisst. Was dir fehlt, ist der Weg vom Ärgernis zum Werkzeug. Genau den bauen wir zusammen.',
        ],
        nicht: {
            title: 'Für wen nicht',
            items: [
                'Wer entscheiden will, ohne selbst zu tippen. Das hier ist Handarbeit, drei Tage lang.',
                'Erfahrene Entwicklerinnen und Entwickler. Ihr langweilt euch am ersten Vormittag.',
                'Wer ein fertiges Produkt kaufen will. Das ist ein Werkstattplatz, kein Auftrag.',
            ],
        },
    },
    ergebnis: {
        title: 'Was am Ende deins ist',
        items: [
            'Ein laufendes Werkzeug, das ein echtes Problem in deinem Betrieb löst',
            'Eine eigene Adresse im Netz, geschützt, nur für dein Team erreichbar',
            'Ein GitHub-Konto mit deinem Projekt, das du weiterentwickeln kannst',
            'Eine Dokumentation, mit der eine Kollegin übernehmen könnte',
            'Der Überblick, was der laufende Betrieb im Monat kostet',
            'Die Sicherheit, wann du selbst weiterbaust und wann du jemanden dazuholst',
        ],
    },
    tage: {
        title: 'Die drei Tage',
        diagrammLabel: 'Ablauf der Werkstatt',
        items: [
            {
                label: 'Tag 1',
                title: 'Von null zur eigenen URL',
                paragraphs: [
                    'Vormittags legt jeder sein Problem auf den Tisch. Wir sortieren, was sich lohnt und was nicht, und du verstehst, wie diese Modelle arbeiten, wo sie stark sind und an welcher Stelle sie zuverlässig Unsinn erzählen. Dazu die eine Datenschutzregel, mit der du jeden künftigen Fall selbst beurteilen kannst.',
                    'Nach dem Mittag richten wir deinen Rechner ein: GitHub, Vercel, Editor, Claude Code oder Codex. Danach nur so viel Git, wie du wirklich brauchst: speichern, hochladen, rückgängig machen.',
                    'Am späten Nachmittag steht deine erste selbstgebaute Seite im Netz. Bei jedem im Raum.',
                ],
                ergebnis: 'Deine erste Seite steht im Netz.',
            },
            {
                label: 'Tag 2',
                title: 'Das eigene Werkzeug',
                paragraphs: [
                    'Der Tag, an dem aus der Übung Ernst wird. Wir arbeiten an deinem Fall: die Anforderung so formulieren, dass die KI trifft, was du meinst. Echte Daten anbinden, Tabellen rein, Auswertung raus. Fehlermeldungen lesen, ohne sie zu fürchten. Und erkennen, wann man nachbessert und wann man verwirft und neu ansetzt.',
                    'Zum Abschluss zeigt jeder seinen Stand. Diese Runde ist der Grund, warum sechs Leute im Raum sitzen und nicht einer: Du siehst fünf Lösungswege, auf die du allein nicht gekommen wärst.',
                ],
                ergebnis: 'Dein Werkzeug läuft mit echten Daten.',
            },
            {
                label: 'Tag 3',
                title: 'Sicher, bezahlbar, übergabefähig',
                paragraphs: [
                    'Der Tag, der diese Werkstatt von einem Wochenendkurs unterscheidet.',
                    'Zugriffsschutz, damit nicht die halbe Welt dein Werkzeug öffnen kann. Zugangsschlüssel richtig ablegen, statt sie im Code zu vergessen. Was auf keinen Fall auf einen öffentlichen Server gehört. Danach die Kostenseite: Was verbrauchen die Modelle, was kostet das Hosting, was zahlst du im Monat wirklich.',
                    'Zum Schluss lässt du die Dokumentation schreiben und übst den Ernstfall: Version zurückdrehen, wenn etwas kaputtgeht.',
                ],
                ergebnis: 'Dein Werkzeug läuft auch ohne dich.',
            },
        ] satisfies ITag[],
    },
    vibeCoding: {
        title: 'Vibe Coding, aber übergabefähig',
        zahl: '88',
        zahlEinheit: '%',
        paragraphs: [
            'Der Begriff ist gerade überall. Und er hat ein Problem: In einer Untersuchung von 50 öffentlichen KI-generierten Projekten hatten 88 Prozent kritische Sicherheitslücken. Sicherheitsforscher finden regelmäßig KI-gebaute Anwendungen, die Kundendaten offen ins Netz stellen. Nicht durch Hackerangriffe, sondern weil niemand den Zugriffsschutz eingeschaltet hat.',
            'Auffällig an den Daten ist die Spaltung: Ein knappes Drittel der Projekte ist katastrophal, ein kleiner Teil ist richtig gut, dazwischen liegt fast nichts. Der Unterschied sind ein paar bewusste Entscheidungen, die man an einem Tag lernt.',
            'Deswegen hat diese Werkstatt einen dritten Tag.',
        ],
    },
    mitbringen: {
        title: 'Was du mitbringst',
        items: [
            'Ein eigenes Notebook, auf dem du Software installieren darfst. Windows oder Mac, beides geht.',
            'Ein echtes Problem aus deinem Arbeitsalltag. Je kleiner und konkreter, desto besser.',
            'Bereitschaft, ein schwarzes Fenster mit Text zu benutzen. Mehr nicht.',
            'Programmierkenntnisse brauchst du nicht.',
        ],
        note: 'Eine Woche vorher bekommst du eine kurze Checkliste, damit der erste Vormittag nicht mit Installationsproblemen vergeht.',
    },
    preise: {
        title: 'Preise',
        spaltenTitel: 'netto pro Person',
        zeilen: [
            { label: 'Tag 1 einzeln', wert: '690 €' },
            { label: 'Tag 1 und 2', wert: '1.190 €' },
            { label: 'Alle drei Tage', wert: '1.590 €' },
            { label: 'Zweite Person aus demselben Betrieb', wert: '20 % Nachlass' },
            { label: 'Alle sechs Plätze exklusiv, drei Tage', wert: '7.900 €' },
        ] satisfies IPreis[],
        enthalten:
            'Enthalten: Verpflegung, alle Unterlagen, deine Projektdateien. Nicht enthalten: laufende Kosten für KI-Zugänge und Hosting nach der Werkstatt. Was das ungefähr ist, rechnen wir an Tag 3 zusammen aus.',
        tag1: 'Tag 1 ist einzeln buchbar. Wenn dir das reicht, war es das. Wenn nicht, buchst du nach.',
    },
    ort: {
        title: 'Wo wir arbeiten',
        paragraphs: [
            'Die Werkstatt findet in den Räumen der DEVDEER GmbH statt, Herderstraße 31 in 39108 Magdeburg, Stadtfeld Ost. Kein Hotelkonferenzraum mit Flipchart und lauwarmem Kaffee, sondern das Büro einer Azure-Beratung: ordentliche Bildschirme, ordentliches Netz, sechs Plätze an einem Tisch.',
            'Am Klingelschild und am Empfang steht DEVDEER, nicht mein Name. Du bist trotzdem richtig.',
        ],
        fotos: [
            { alt: 'Besprechungsecke in den DEVDEER-Räumen mit grünem Sofa, zwei Sesseln und Holztisch' },
            { alt: 'Lounge in den DEVDEER-Räumen mit Pendelleuchte aus Holz und hellem Sessel' },
        ],
        anfahrt: {
            title: 'Anfahrt',
            wege: [
                {
                    title: 'Mit der Straßenbahn',
                    text: 'Haltestelle Wilhelmstädter Platz, Linien 2, 3 und 4.',
                },
                {
                    title: 'Mit dem Auto',
                    text: 'In der Herderstraße parkst du kostenfrei und in aller Regel ohne Suchen. Kein Parkhaus, keine Parkscheibe.',
                },
                {
                    title: 'Zugang',
                    text: 'Zu den Räumen führt eine Treppe, einen Aufzug gibt es nicht. Wenn Stufen für dich ein Problem sind, schreib mir vorher, dann finden wir eine Lösung.',
                },
            ] satisfies IWeg[],
        },
    },
    termine: {
        title: 'Termine',
        items: [] as ITermin[],
        fallback: 'Kein passender Termin dabei? Schreib mir. Ab vier Anmeldungen setze ich einen neuen an.',
    },
    werDasMacht: {
        title: 'Wer das macht',
        paragraphs: [
            'Kevin Heyland. Ich bin Partner und Head of Operations der DEVDEER GmbH, einer Azure-Beratung aus Magdeburg. Wir betreiben Cloud-Infrastruktur für Unternehmen, in denen Fehler teuer werden: regulierte Umgebungen, Nachweispflichten, echte Audits.',
            'Nebenher baue ich Werkzeuge für Magdeburg, die niemand bezahlt hat. Eine Ausfüllhilfe für die Schulanmeldung, eine Erinnerung an die Mülltonne, einen Trainingsplaner. Alle nach denselben Regeln, die du in diesen drei Tagen lernst.',
            'Was Konzerne sich leisten können, funktioniert auch mit sechs Leuten und einem Notebook. Nur weiß es dort keiner.',
        ],
        link: {
            label: 'Werkzeuge, die so entstanden sind',
            href: '/referenzen',
        },
    },
    faq: {
        title: 'Häufige Fragen',
        items: [
            {
                frage: 'Brauche ich Programmierkenntnisse?',
                antwort: 'Nein. Du beschreibst, was das Werkzeug tun soll, die KI schreibt den Code. Du lernst zu beurteilen, ob das Ergebnis taugt.',
            },
            {
                frage: 'Ist das nicht einfach Vibe Coding?',
                antwort:
                    'Die ersten anderthalb Tage sehen so aus, ja. Der Unterschied kommt danach: Zugriffsschutz, Kostenkontrolle und eine Dokumentation, mit der jemand anders weiterarbeiten kann. Genau das fehlt bei fast allem, was so entsteht.',
            },
            {
                frage: 'Was für ein Notebook brauche ich?',
                antwort:
                    'Windows oder Mac aus den letzten Jahren, mit dem Recht Software zu installieren. Wenn die IT deines Betriebs das sperrt, sag vorher Bescheid, dann arbeiten wir mit einer Online-Umgebung.',
            },
            {
                frage: 'Wer bezahlt die KI-Zugänge?',
                antwort: 'Für die drei Tage stelle ich Zugänge. Danach brauchst du einen eigenen. Was das kostet, besprechen wir an Tag 3, bevor du dich festlegst.',
            },
            {
                frage: 'Kann ich nur Tag 1 buchen?',
                antwort: 'Ja. Danach hast du deine erste eigene Seite online. Die meisten wollen an dem Punkt weitermachen, aber du musst nicht.',
            },
            {
                frage: 'Was kostet der Betrieb danach?',
                antwort:
                    'Je nach Nutzung typischerweise ein niedriger zweistelliger Betrag im Monat. Wir rechnen deinen Fall an Tag 3 durch, damit du keine Überraschung erlebst. Beachte: kostenlose Hosting-Tarife sind meist nicht für gewerbliche Nutzung erlaubt.',
            },
            {
                frage: 'Ist das förderfähig?',
                antwort:
                    'Für Gruppenformate wie diesen greift die klassische Beratungsförderung nicht. Für eine anschließende Einzelbegleitung im Betrieb schon. Mehr dazu auf der Seite zur Förderung.',
            },
            {
                frage: 'Warum steht am Eingang DEVDEER?',
                antwort: 'Ich bin dort Partner und Head of Operations. Die Werkstatt ist mein eigenes Angebot, die Räume sind die der Firma.',
            },
            {
                frage: 'Ist der Zugang barrierefrei?',
                antwort: 'Nein. Zu den Räumen führt eine Treppe, einen Aufzug gibt es nicht. Schreib mir vorher, wenn Stufen für dich ein Problem sind, dann finden wir eine Lösung.',
            },
            {
                frage: 'Kann ich die Werkstatt exklusiv für meinen Betrieb buchen?',
                antwort: 'Ja, alle sechs Plätze. Dann arbeiten wir ausschließlich an euren Fällen. Auf Wunsch bei euch vor Ort.',
            },
            {
                frage: 'Was, wenn ich nicht weiterkomme?',
                antwort: 'Dafür sind sechs Plätze und drei Tage da. Wenn dein Fall sich als zu groß herausstellt, schneiden wir ihn kleiner. Du gehst nicht mit leeren Händen.',
            },
            {
                frage: 'Bleiben meine Betriebsdaten hier?',
                antwort:
                    'Wir arbeiten mit Beispieldaten, solange es geht. Wenn echte Daten nötig sind, klären wir vorher, welche das sein dürfen. Das ist Teil des Programms, kein Nebensatz.',
            },
        ] satisfies IFaq[],
    },
    cta: {
        title: 'Platz anfragen',
        text: 'Schreib mir an mail@kevinheyland.com, worum es in deinem Betrieb geht. Ich melde mich innerhalb eines Werktags und wir klären in zehn Minuten, ob dein Fall passt.',
        button: {
            label: 'Platz anfragen',
            href: ctaHref,
        },
    },
    course: {
        name: 'KI-Werkstatt Magdeburg',
        url: 'https://kevinheyland.com/ki-workshop-magdeburg',
        teaches: ['KI-gestützte Softwareentwicklung', 'Git und Deployment', 'Datenschutz im Betrieb', 'Anwendungssicherheit', 'Betriebskosten von KI-Anwendungen'],
        workload: 'P3D',
        capacity: 6,
        // Spanne pro Person wie in `preise.zeilen`: Tag 1 einzeln bis alle drei Tage.
        priceFrom: '690',
        priceTo: '1590',
        location: {
            name: 'DEVDEER GmbH',
            streetAddress: 'Herderstraße 31',
            postalCode: '39108',
            addressLocality: 'Magdeburg',
            addressCountry: 'DE',
        },
    },
}
