/**
 * Gesamter Text der Seite /ueber-mich. Layout und Komposition liegen in
 * `src/app/ueber-mich/page.tsx`, hier steht ausschließlich Inhalt.
 */

/** Ein Kapitel der Karriere-Timeline. */
export interface IChapter {
    era: string
    title: string
    role: string
    text: string
    skills: string[]
    current?: boolean
}

/** Ein Prinzip mit kurzer Erklärung. */
export interface IValue {
    title: string
    text: string
}

export const ueberMich = {
    metadata: {
        title: 'Über mich · Kevin Heyland',
        description: 'Werdegang und Prinzipien von Kevin Heyland aus Magdeburg: Partner und Head of Operations bei DEVDEER, Wirtschaftspädagoge und zertifizierter Product Owner.',
    },
    hero: {
        h1: 'Über mich',
        intro: 'Agile Methodik aus den Zertifizierungen der Scrum Alliance, ein Bachelor of Science in Wirtschaftspädagogik und Stationen vom Einzelhandel bis zur Cloud-Beratung: Ich verbinde breite akademische und berufliche Erfahrung mit Spezialisierung auf agiles Projektmanagement und Full-Stack-Softwareentwicklung.',
        portraitAlt: 'Kevin Heyland, Schwarz-Weiß-Porträt',
        portraitClaim: 'Code, Kreativität und Wandel',
        profileAlt: 'Kevin Heyland, Profilbild',
        name: 'Kevin Heyland',
        roleLine: 'Partner & Head of Operations, DEVDEER',
        credentialsLine: 'BSc Wirtschaftspädagogik · A-CSPO',
        placeLine: 'Magdeburg, Deutschland',
        photoCredit: 'Fotografie von Giovanna Veronica Gahrns',
        photoCreditHref: 'https://www.giovannagahrns.com',
    },
    career: {
        title: 'Werdegang',
        subtitle: 'Lernen, Wachstum und Weggefährten',
        chapters: [
            {
                era: '2006 – 2010',
                title: 'Vom Aushilfsjob zum Marketing Manager',
                role: 'Jack & Jones, Vero Moda · Region Hannover-Braunschweig',
                text: 'Direkt nach der Schule als Aushilfe im Einzelhandel gestartet und innerhalb von vier Jahren und sieben Monaten Marketing Manager geworden. Geprägt haben diese Jahre Mentoren, die früh in mich investiert haben. Sie haben ein Muster gesetzt, dem ich seitdem folge: Am schnellsten wächst man neben Menschen, die teilen, was sie wissen.',
                skills: ['Einzelhandel', 'Marketing', 'Führung'],
            },
            {
                era: '2010 – 2016',
                title: 'Triebfeder Marketing',
                role: 'Gründer & Inhaber · Magdeburg',
                text: 'Meine eigene Marketingagentur gegründet und sechs Jahre geführt. Wer Kampagnen baut, baut auch die Landingpages dahinter, deshalb sind digitales Marketing und praktische Entwicklung bei mir von Anfang an zusammengewachsen. Nutzerwege auf Seiten zu analysieren, die ich selbst gebaut hatte, wurde später meine Brücke ins UX-Design.',
                skills: ['Unternehmertum', 'Digitales Marketing', 'Full-Stack-Entwicklung'],
            },
            {
                era: '2013 – 2019',
                title: 'Die parallelen Jahre',
                role: 'Senior Digital Marketing Engineer, i2solutions GmbH (Aachen) · CMO, RenderThat (2014 – 2016)',
                text: 'Sechs Jahre in einer IT-Beratung, die digitale Transformation in IT- und OT-Architektur und Sicherheit begleitet. Parallel dazu: die eigene Agentur, ein Bachelor in Wirtschaftspädagogik in Magdeburg und knapp zwei Jahre als Chief Marketing Officer von RenderThat, einem Startup für computergenerierte Produktbilder. Was die Universität erklärte, haben die Jobs angewendet, täglich.',
                skills: ['Digitales Marketing', 'IT- & OT-Beratung', 'Wirtschaftspädagogik', 'Startup-Führung'],
            },
            {
                era: '2018 – 2021',
                title: 'DEVDEER GmbH: von UX zur Produktverantwortung',
                role: 'Senior UX Designer, dann Product Owner & Team Lead',
                text: 'Bei DEVDEER als Senior UX Designer angefangen, mit einer einfachen Überzeugung: Unternehmenssoftware hat für die meisten ihrer Nutzerinnen und Nutzer keine Alternative, ihre Qualität ist deshalb Pflicht und kein Luxus. Ab Ende 2019 habe ich als zertifizierter Scrum Product Owner interdisziplinäre Teams geführt, mit Backlogs, die alle verstehen und mit denen alle gern arbeiten. Seit 2020 bin ich außerdem eine von drei Stimmen von Code Revue, einem selbst produzierten Podcast über agile Softwareentwicklung.',
                skills: ['UX-Design', 'Product Ownership', 'Scrum', 'Teamführung'],
            },
            {
                era: '2021 – heute',
                title: 'DEVDEER GmbH: Partner & Head of Operations',
                role: 'Magdeburg · hybrid',
                text: 'Heute verantworte ich den Betrieb einer Azure-Beratung und bleibe bewusst nah am Entwicklungsteam. Mit einem starken Interesse an KI, agiler Arbeit, Vielfalt und Nachhaltigkeit verbinde ich operative Exzellenz mit technischer Innovation. Die Mitarbeiterbefragungen, die ich eingeführt habe, gehören dazu: Ein agiles Unternehmen sollte nach innen genauso sorgfältig zuhören wie seinen Kunden. Advanced Certified Scrum Product Owner (Scrum Alliance).',
                skills: ['Operations', 'Microsoft Azure', 'Managed Services', 'KI', 'Agile Führung'],
                current: true,
            },
        ] satisfies IChapter[],
    },
    prinzipien: {
        title: 'Prinzipien',
        subtitle: 'Was meine Arbeit trägt',
        values: [
            {
                title: 'Wir lernen voneinander, füreinander',
                text: 'Das DEVDEER-Motto und der rote Faden durch meine eigene Geschichte. Jedes Kapitel meines Werdegangs wurde von Menschen beschleunigt, die geteilt haben, was sie wissen. Das weiterzugeben gehört zur Stellenbeschreibung, die ich mir selbst schreibe.',
            },
            {
                title: 'Substanz statt Symbolik',
                text: 'Ergebnisse, die man messen kann, schlagen Folien, die man bewundern kann. Dieser Maßstab gilt für Cloud-Architekturen, für interne Prozesse und für die kleinen kostenlosen Werkzeuge, die ich für diese Stadt baue.',
            },
        ] satisfies IValue[],
    },
}
