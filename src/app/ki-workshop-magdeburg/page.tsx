import type { Metadata } from 'next'
import { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import NavigationTopComponent from '../../../components/navigationTop'
import FooterComponent from '../../../components/footer'
import WerkbankComponent from '../../../components/werkbank'
import RaumSofa from '../../../public/werkstatt-raum-sofa.jpg'
import RaumLeuchte from '../../../public/werkstatt-raum-leuchte.jpg'
import Profile from '../../../public/kevinheyland-profile.jpeg'
import { glassFrame, pillButton, surface1, surface2, surface3, textBody, textData, textHeading, textMuted, textPrimary } from '../../../components/theme'
import { kiWorkshopMagdeburg as w } from '../../../content/ki-workshop-magdeburg'

export const metadata: Metadata = {
    title: w.metadata.title,
    description: w.metadata.description,
    alternates: {
        canonical: '/ki-workshop-magdeburg',
    },
    openGraph: {
        title: w.metadata.title,
        description: w.metadata.description,
        url: w.course.url,
        siteName: 'Kevin Heyland',
        type: 'website',
        locale: 'de_DE',
    },
}

const raumFotos = [RaumSofa, RaumLeuchte]

/** Course with CourseInstance. Dates are added only once they exist. */
const courseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: w.course.name,
    description: w.metadata.description,
    url: w.course.url,
    inLanguage: 'de-DE',
    provider: {
        '@type': 'Person',
        name: 'Kevin Heyland',
        url: 'https://kevinheyland.com',
    },
    educationalLevel: 'Beginner',
    teaches: w.course.teaches,
    hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'onsite',
        courseWorkload: w.course.workload,
        maximumAttendeeCapacity: w.course.capacity,
        ...(w.termine.items.length > 0 ? { startDate: w.termine.items[0].startDate, endDate: w.termine.items[0].endDate } : {}),
        location: {
            '@type': 'Place',
            name: w.course.location.name,
            address: {
                '@type': 'PostalAddress',
                streetAddress: w.course.location.streetAddress,
                postalCode: w.course.location.postalCode,
                addressLocality: w.course.location.addressLocality,
                addressCountry: w.course.location.addressCountry,
            },
        },
        offers: {
            '@type': 'Offer',
            price: w.course.price,
            priceCurrency: 'EUR',
            valueAddedTaxIncluded: false,
            availability: 'https://schema.org/InStock',
            url: w.course.url,
        },
    },
}

/** FAQPage, word for word the visible questions and answers. */
const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: w.faq.items.map((item) => ({
        '@type': 'Question',
        name: item.frage,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.antwort,
        },
    })),
}

/** The FAQ is split into two independent columns so opening one does not reflow the other. */
const faqLeft = w.faq.items.slice(0, 6)
const faqRight = w.faq.items.slice(6)

/**
 * A section heading on this page.
 */
function H2({ children, className = '' }: { children: React.ReactNode; className?: string }): ReactElement {
    return <h2 className={`text-h2 font-bold ${textHeading} text-balance ${className}`}>{children}</h2>
}

/**
 * A body paragraph, capped at a readable measure.
 */
function P({ children }: { children: React.ReactNode }): ReactElement {
    return <p className={`text-body ${textBody} max-w-[58ch]`}>{children}</p>
}

/**
 * One FAQ entry, natively collapsible, keyboard reachable.
 */
function FaqItem({ frage, antwort, open }: { frage: string; antwort: string; open?: boolean }): ReactElement {
    return (
        <details className={`group ${surface1}`} open={open}>
            <summary
                className={`flex flex-row items-start justify-between gap-4 cursor-pointer list-none px-5 py-4 text-lg font-bold ${textHeading} [&::-webkit-details-marker]:hidden`}>
                {frage}
                <ChevronDownIcon aria-hidden className={`w-5 h-5 shrink-0 mt-1 ${textMuted} transition-transform group-open:rotate-180`} />
            </summary>
            <p className={`px-5 pb-5 text-body ${textBody}`}>{antwort}</p>
        </details>
    )
}

/**
 * Renders the workshop page. Every section takes the shape of its content:
 * a data sheet, a comparison, a grid, a workbench, a checklist, a price
 * table, a room, a person, a two-column FAQ, and a lit closing call.
 */
export default function KiWorkshopMagdeburg(): ReactElement {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <NavigationTopComponent />
            <main className="flex flex-col py-6 pb-16 px-4 sm:px-8 max-w-7xl w-full gap-20 lg:gap-28 overflow-x-clip">
                {/* HERO: Text links, Datenblatt rechts, Lampe dahinter */}
                <section className="relative grid grid-cols-12 gap-6 lg:gap-8 items-center py-6 lg:py-12">
                    <div aria-hidden className="lamp-light -top-40 -right-32 w-[44rem] h-[44rem] lg:-top-56 lg:-right-40 lg:w-[56rem] lg:h-[56rem]" />
                    <div className="relative col-span-12 lg:col-span-7 flex flex-col gap-6">
                        <p className={`text-body ${textMuted}`}>{w.hero.kicker}</p>
                        <h1 className={`text-h1 font-bold ${textPrimary} text-balance`}>{w.hero.h1}</h1>
                        <P>{w.hero.intro}</P>
                        <p className={`text-body font-semibold ${textHeading}`}>{w.hero.sub}</p>
                        <div className="pt-2">
                            <Link className={pillButton} href={w.hero.cta.href}>
                                {w.hero.cta.label}
                            </Link>
                        </div>
                    </div>
                    <dl className={`relative col-span-12 lg:col-span-5 lg:col-start-8 flex flex-col divide-y divide-white/10 px-6 sm:px-8 py-2 ${surface3}`}>
                        {w.hero.fakten.map((fakt) => (
                            <div key={fakt.label} className="flex flex-row items-baseline justify-between gap-6 py-4">
                                <dt className={`text-body ${textMuted}`}>{fakt.label}</dt>
                                <dd className={`${textData} text-right ${textPrimary}`}>{fakt.wert}</dd>
                            </div>
                        ))}
                    </dl>
                </section>

                {/* FÜR WEN: Gegenüberstellung, Anker Mitte */}
                <section className="grid grid-cols-12 gap-6 lg:gap-8">
                    <div className="col-span-12 lg:col-span-6 flex flex-col gap-5 lg:pr-8 lg:border-r lg:border-white/[0.08]">
                        <H2>{w.fuerWen.title}</H2>
                        {w.fuerWen.paragraphs.map((text) => (
                            <P key={text}>{text}</P>
                        ))}
                    </div>
                    <div className="col-span-12 lg:col-span-6 flex flex-col gap-5 lg:pl-8 lg:pt-3">
                        <h3 className={`text-h3 font-bold ${textHeading}`}>{w.fuerWen.nicht.title}</h3>
                        <ul className="flex flex-col divide-y divide-white/[0.08]">
                            {w.fuerWen.nicht.items.map((item) => (
                                <li key={item} className={`py-4 text-body ${textBody} max-w-[58ch]`}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ERGEBNIS: Raster, Anker rechts */}
                <section className="grid grid-cols-12 gap-6">
                    <H2 className="col-span-12 lg:col-span-10 lg:col-start-3">{w.ergebnis.title}</H2>
                    <ol className="col-span-12 lg:col-span-10 lg:col-start-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {w.ergebnis.items.map((item) => (
                            <li key={item} className={`p-6 text-body font-medium ${textPrimary} ${surface2}`}>
                                {item}
                            </li>
                        ))}
                    </ol>
                </section>

                {/* DIE DREI TAGE: die Werkbank, ganzer Bildschirm */}
                <section className="flex flex-col gap-10 lg:min-h-[85svh] lg:justify-center">
                    <H2 className="lg:text-center">{w.tage.title}</H2>
                    <WerkbankComponent stations={w.tage.items} />
                </section>

                {/* CTA 1 */}
                <section className="grid grid-cols-12 gap-6">
                    <div className={`col-span-12 lg:col-span-8 flex flex-col gap-4 px-7 sm:px-10 py-8 ${surface2}`}>
                        <h2 className={`text-h3 font-bold ${textHeading}`}>{w.cta.title}</h2>
                        <P>{w.cta.text}</P>
                        <div className="pt-1">
                            <Link className={pillButton} href={w.cta.button.href}>
                                {w.cta.button.label}
                            </Link>
                        </div>
                    </div>
                </section>

                {/* VIBE CODING: Zahl links, Text rechts */}
                <section className="grid grid-cols-12 gap-6 lg:gap-8">
                    <div className="col-span-12 lg:col-span-4 flex flex-col gap-2">
                        <p className={`${textData} text-data-xl ${textPrimary}`}>
                            {w.vibeCoding.zahl}
                            <span className="text-[0.5em] align-top ml-1">{w.vibeCoding.zahlEinheit}</span>
                        </p>
                    </div>
                    <div className="col-span-12 lg:col-span-7 flex flex-col gap-5">
                        <H2>{w.vibeCoding.title}</H2>
                        {w.vibeCoding.paragraphs.map((text) => (
                            <P key={text}>{text}</P>
                        ))}
                    </div>
                </section>

                {/* MITBRINGEN: Checkliste, vier Karten */}
                <section className="flex flex-col gap-6">
                    <H2>{w.mitbringen.title}</H2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {w.mitbringen.items.map((item) => (
                            <li key={item} className={`flex flex-col gap-4 p-6 ${surface2}`}>
                                <span aria-hidden className="w-5 h-5 rounded-md border-2 border-white/30" />
                                <span className={`text-body ${textBody}`}>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className={`text-body ${textMuted} max-w-[58ch]`}>{w.mitbringen.note}</p>
                </section>

                {/* PREISE: Tabelle links, Erklärung rechts */}
                <section className="grid grid-cols-12 gap-6 lg:gap-8">
                    <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
                        <H2>{w.preise.title}</H2>
                        <div className={`overflow-x-auto px-5 sm:px-8 py-4 ${surface2}`}>
                            <table className="w-full text-body">
                                <thead>
                                    <tr>
                                        <th className="sr-only">Leistung</th>
                                        <th className={`text-right font-normal pb-2 text-sm ${textMuted}`}>{w.preise.spaltenTitel}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/10">
                                    {w.preise.zeilen.map((zeile, index) => {
                                        const empfohlen = index === 2
                                        return (
                                            <tr key={zeile.label} className={empfohlen ? 'bg-white/[0.06]' : ''}>
                                                <td className={`py-4 pr-6 pl-3 -ml-3 rounded-l-lg ${empfohlen ? `font-semibold ${textPrimary}` : textBody}`}>{zeile.label}</td>
                                                <td className={`py-4 pr-3 text-right ${textData} whitespace-nowrap rounded-r-lg ${empfohlen ? textPrimary : textHeading}`}>
                                                    {zeile.wert}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col gap-4 lg:pt-20">
                        <P>{w.preise.enthalten}</P>
                        <P>{w.preise.tag1}</P>
                    </div>
                </section>

                {/* ORT: Text links, Fotos groß, Anfahrt klein */}
                <section className="flex flex-col gap-8">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 lg:col-span-7 flex flex-col gap-5">
                            <H2>{w.ort.title}</H2>
                            {w.ort.paragraphs.map((text) => (
                                <P key={text}>{text}</P>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 lg:gap-6">
                        {w.ort.fotos.map((foto, index) => (
                            <div
                                key={foto.alt}
                                className={`relative overflow-hidden rounded-2xl h-64 sm:h-80 lg:h-[32rem] ${glassFrame} ${index === 0 ? 'col-span-12 sm:col-span-7' : 'col-span-12 sm:col-span-5'}`}>
                                <Image
                                    className="object-cover"
                                    alt={foto.alt}
                                    src={raumFotos[index]}
                                    sizes={index === 0 ? '(max-width: 640px) 100vw, 58vw' : '(max-width: 640px) 100vw, 42vw'}
                                    fill
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className={`text-h3 font-bold ${textHeading}`}>{w.ort.anfahrt.title}</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            {w.ort.anfahrt.wege.map((weg) => (
                                <div key={weg.title} className={`flex flex-col gap-2 p-5 ${surface1}`}>
                                    <h4 className={`text-body font-semibold ${textHeading}`}>{weg.title}</h4>
                                    <p className={`text-body ${textBody}`}>{weg.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TERMINE, nur wenn welche feststehen */}
                {w.termine.items.length > 0 && (
                    <section className="flex flex-col gap-6">
                        <H2>{w.termine.title}</H2>
                        <ul className={`flex flex-col gap-2 ${textData} ${textPrimary}`}>
                            {w.termine.items.map((termin) => (
                                <li key={termin.startDate}>{termin.label}</li>
                            ))}
                        </ul>
                        <P>{w.termine.fallback}</P>
                    </section>
                )}

                {/* WER DAS MACHT: Text links, Porträt rechts, spiegelt den Hero */}
                <section className="grid grid-cols-12 gap-8 items-center">
                    <div className="col-span-12 lg:col-span-7 flex flex-col gap-5">
                        <H2>{w.werDasMacht.title}</H2>
                        {w.werDasMacht.paragraphs.map((text) => (
                            <P key={text}>{text}</P>
                        ))}
                        <Link className={`self-start text-body font-medium ${textMuted} hover:text-slate-200 transition-colors`} href={w.werDasMacht.link.href}>
                            {w.werDasMacht.link.label}
                        </Link>
                    </div>
                    <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex justify-center lg:justify-end">
                        <div className={`relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full ${glassFrame}`}>
                            <Image className="rounded-full object-cover" alt="Kevin Heyland, Profilbild" src={Profile} sizes="(max-width: 640px) 192px, 288px" fill />
                        </div>
                    </div>
                </section>

                {/* FAQ: zwei unabhängige Spalten, native details */}
                <section className="flex flex-col gap-8">
                    <H2>{w.faq.title}</H2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
                        <div className="flex flex-col gap-3">
                            {faqLeft.map((item, index) => (
                                <FaqItem key={item.frage} frage={item.frage} antwort={item.antwort} open={index === 0} />
                            ))}
                        </div>
                        <div className="flex flex-col gap-3">
                            {faqRight.map((item, index) => (
                                <FaqItem key={item.frage} frage={item.frage} antwort={item.antwort} open={index === 0} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* SCHLUSS-CTA: das zweite Licht */}
                <section className="relative grid grid-cols-12 gap-6 py-8">
                    <div aria-hidden className="lamp-light left-1/2 -translate-x-1/2 -bottom-48 w-[48rem] h-[48rem]" />
                    <div className={`relative col-span-12 lg:col-span-8 lg:col-start-3 flex flex-col items-center text-center gap-5 px-7 sm:px-12 py-14 ${surface3}`}>
                        <H2>{w.cta.title}</H2>
                        <P>{w.cta.text}</P>
                        <div className="pt-2">
                            <Link className={pillButton} href={w.cta.button.href}>
                                {w.cta.button.label}
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <FooterComponent />
        </>
    )
}
