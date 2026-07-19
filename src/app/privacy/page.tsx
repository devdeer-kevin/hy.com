import type { Metadata } from 'next'
import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import { glass } from '../../../components/theme'

export const metadata: Metadata = {
    title: 'Datenschutzerklärung · Kevin Heyland',
    description: 'Datenschutzerklärung für kevinheyland.com',
}

export default function Privacy(): React.ReactElement {
    return (
        <div className="flex flex-col w-full max-w-3xl px-4 sm:px-8 py-24 gap-8">
            <div className="absolute top-6 left-4 sm:left-8 text-sm">
                <Link className="flex flex-row gap-2 items-center text-slate-50/60 hover:text-slate-50/90 transition-colors" href="/">
                    <ArrowLeftIcon className="h-4 w-4" />
                    Home
                </Link>
            </div>
            <h1 className="text-4xl font-bold text-slate-50/70">Datenschutzerklärung</h1>
            <div className={`flex flex-col gap-6 px-7 sm:px-10 py-10 text-slate-300 leading-7 text-md ${glass}`}>
                <section className="flex flex-col gap-2">
                    <h2 className="text-lg font-bold text-slate-50/90">Verantwortlicher</h2>
                    <p>
                        Kevin Heyland, Herderstraße 31, 39108 Magdeburg, Deutschland
                        <br />
                        E-Mail: <a className="underline hover:text-slate-100 transition-colors" href="mailto:mail@kevinheyland.com">mail@kevinheyland.com</a>
                    </p>
                </section>
                <section className="flex flex-col gap-2">
                    <h2 className="text-lg font-bold text-slate-50/90">Grundsatz</h2>
                    <p>
                        Diese Website verwendet keine Cookies, keine Analyse-Tools und kein Tracking. Es werden keine Kontaktformulare angeboten und keine
                        personenbezogenen Daten aktiv erhoben.
                    </p>
                </section>
                <section className="flex flex-col gap-2">
                    <h2 className="text-lg font-bold text-slate-50/90">Hosting und Server-Logs</h2>
                    <p>
                        Diese Website wird bei der Serverprofis GmbH, Otto-Lilienthal-Ring 34&ndash;36, 85622 Feldkirchen, Deutschland gehostet. Beim Aufruf der
                        Seite verarbeitet der Hoster technisch notwendige Verbindungsdaten (insbesondere IP-Adresse, Zeitpunkt des Zugriffs, User-Agent), um die
                        Website auszuliefern und die Sicherheit des Betriebs zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                        Interesse an der sicheren Bereitstellung der Website). Mit dem Hoster besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO.
                    </p>
                </section>
                <section className="flex flex-col gap-2">
                    <h2 className="text-lg font-bold text-slate-50/90">Externe Inhalte</h2>
                    <p>
                        Die angezeigten GitHub-Repositories werden serverseitig abgerufen. Ihr Browser stellt dabei keine Verbindung zu GitHub her. Links zu
                        externen Websites (z.&nbsp;B. GitHub, LinkedIn, DEVDEER) führen zu Angeboten Dritter, für deren Datenverarbeitung deren jeweilige
                        Datenschutzerklärung gilt.
                    </p>
                </section>
                <section className="flex flex-col gap-2">
                    <h2 className="text-lg font-bold text-slate-50/90">Ihre Rechte</h2>
                    <p>
                        Sie haben nach der DSGVO das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und
                        Widerspruch. Außerdem besteht ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde, in Sachsen-Anhalt beim Landesbeauftragten für
                        den Datenschutz Sachsen-Anhalt.
                    </p>
                </section>
            </div>
        </div>
    )
}
