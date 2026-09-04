/**
 * Gesamter Text der Seite /datenschutz.
 */

export interface IDatenschutzAbschnitt {
    title: string
    text: string
}

export const datenschutz = {
    metadata: {
        title: 'Datenschutzerklärung · Kevin Heyland',
        description: 'Datenschutzerklärung für kevinheyland.com: keine Cookies, keine Analyse-Tools, kein Tracking. Welche Daten beim Hosting anfallen und welche Rechte du hast.',
    },
    h1: 'Datenschutzerklärung',
    verantwortlicher: {
        title: 'Verantwortlicher',
        name: 'Kevin Heyland, Herderstraße 31, 39108 Magdeburg, Deutschland',
        mail: 'mail@kevinheyland.com',
    },
    abschnitte: [
        {
            title: 'Grundsatz',
            text: 'Diese Website verwendet keine Cookies, keine Analyse-Tools und kein Tracking. Es werden keine Kontaktformulare angeboten und keine personenbezogenen Daten aktiv erhoben.',
        },
        {
            title: 'Hosting und Server-Logs',
            text: 'Diese Website wird bei der Serverprofis GmbH, Otto-Lilienthal-Ring 34–36, 85622 Feldkirchen, Deutschland gehostet. Beim Aufruf der Seite verarbeitet der Hoster technisch notwendige Verbindungsdaten (insbesondere IP-Adresse, Zeitpunkt des Zugriffs, User-Agent), um die Website auszuliefern und die Sicherheit des Betriebs zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren Bereitstellung der Website). Mit dem Hoster besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO.',
        },
        {
            title: 'Externe Inhalte',
            text: 'Die angezeigten GitHub-Repositories werden serverseitig abgerufen. Dein Browser stellt dabei keine Verbindung zu GitHub her. Links zu externen Websites (z. B. GitHub, LinkedIn, DEVDEER) führen zu Angeboten Dritter, für deren Datenverarbeitung deren jeweilige Datenschutzerklärung gilt.',
        },
        {
            title: 'Deine Rechte',
            text: 'Du hast nach der DSGVO das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Außerdem hast du ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde, in Sachsen-Anhalt beim Landesbeauftragten für den Datenschutz Sachsen-Anhalt.',
        },
    ],
}
