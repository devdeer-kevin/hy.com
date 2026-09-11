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
import { buttonPrimary, pillButton, textBody, textData, textHeading, textMuted, textPrimary, tile } from '../../../components/theme'
import TextRevealComponent from '../../../components/textReveal'
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
 * A centered section heading, product-page style.
 */
function SectionHead({ title, subtitle }: { title: string; subtitle?: string }): ReactElement {
    return (
        <div className="flex flex-col items-center text-center gap-3">
            <h2 className={`text-h2 font-bold ${textHeading} text-balance`}>{title}</h2>
            {subtitle && <p className={`text-lg ${textMuted} max-w-2xl text-balance`}>{subtitle}</p>}
        </div>
    )
}

/**
 * A body paragraph, capped at a readable measure.
 */
function P({ children, className = '' }: { children: React.ReactNode; className?: string }): ReactElement {
    return <p className={`text-body ${textBody} max-w-[58ch] ${className}`}>{children}</p>
}

/**
 * One FAQ entry, natively collapsible, keyboard reachable.
 */
function FaqItem({ frage, antwort, open }: { frage: string; antwort: string; open?: boolean }): ReactElement {
    return (
        <details className={`group ${tile}`} open={open}>
            <summary
                className={`flex flex-row items-start justify-between gap-4 cursor-pointer list-none px-6 py-5 text-lg font-bold ${textHeading} [&::-webkit-details-marker]:hidden`}>
                {frage}
                <ChevronDownIcon aria-hidden className={`w-5 h-5 shrink-0 mt-1 ${textMuted} transition-transform group-open:rotate-180`} />
            </summary>
            <p className={`px-6 pb-6 text-body ${textBody}`}>{antwort}</p>
        </details>
    )
}

/**
 * Renders the workshop page like a product page at night: centered
 * headlines, a data sheet, a comparison, a grid, the workbench, a checklist,
 * a price table, the room, the person, a two-column FAQ and a lit closing call.
 */
export default function KiWorkshopMagdeburg(): ReactElement {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <NavigationTopComponent />
            <main className="flex flex-col py-10 pb-20 px-4 sm:px-8 max-w-7xl w-full min-w-0 gap-24 lg:gap-32 overflow-x-clip">
                {/* HERO: zentriert, darunter das Datenblatt und ein Raumfoto, Lampe darüber */}
                <section className="relative flex flex-col items-center gap-10">
                    <div className="flex flex-col items-center text-center gap-6 max-w-4xl">
                        <p className={`reveal text-lg ${textMuted}`} style={{ '--i': 0 } as React.CSSProperties}>
                            {w.hero.kicker}
                        </p>
                        <h1 className={`reveal text-h1 font-bold ${textPrimary} text-balance`} style={{ '--i': 1 } as React.CSSProperties}>
                            {w.hero.h1}
                        </h1>
                        <p className={`reveal text-xl leading-relaxed ${textMuted} max-w-2xl text-balance`} style={{ '--i': 2 } as React.CSSProperties}>
                            {w.hero.intro}
                        </p>
                        <p className={`reveal text-xl font-semibold ${textHeading}`} style={{ '--i': 3 } as React.CSSProperties}>
                            {w.hero.sub}
                        </p>
                        <div className="reveal pt-2" style={{ '--i': 4 } as React.CSSProperties}>
                            <Link className={buttonPrimary} href={w.hero.cta.href}>
                                {w.hero.cta.label}
                            </Link>
                        </div>
                    </div>
                    <div className="relative w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-4">
                        <div aria-hidden className="lamp-light left-1/2 -translate-x-1/2 -top-[30rem] w-[60rem] h-[60rem]" />
                        <dl className={`reveal relative lg:col-span-5 flex flex-col divide-y divide-white/10 px-8 py-3 ${tile}`} style={{ '--i': 5 } as React.CSSProperties}>
                            {w.hero.fakten.map((fakt) => (
                                <div key={fakt.label} className="flex flex-col gap-1 py-5">
                                    <dt className={`text-sm ${textMuted}`}>{fakt.label}</dt>
                                    <dd className={`text-2xl font-semibold ${textPrimary}`}>{fakt.wert}</dd>
                                </div>
                            ))}
                        </dl>
                        <div className={`reveal tilt relative lg:col-span-7 min-h-72 overflow-hidden ${tile}`} style={{ '--i': 6 } as React.CSSProperties}>
                            <Image className="object-cover" priority alt={w.ort.fotos[1].alt} src={RaumLeuchte} sizes="(max-width: 1024px) 100vw, 60vw" fill />
                        </div>
                    </div>
                </section>

                {/* FÜR WEN: zwei Kacheln nebeneinander */}
                <section className="flex flex-col gap-10">
                    <SectionHead title={w.fuerWen.title} />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className={`flex flex-col gap-4 p-8 sm:p-10 ${tile}`}>
                            {w.fuerWen.paragraphs.map((text) => (
                                <P key={text}>{text}</P>
                            ))}
                        </div>
                        <div className={`flex flex-col gap-4 p-8 sm:p-10 ${tile}`}>
                            <h3 className={`text-h3 font-bold ${textHeading}`}>{w.fuerWen.nicht.title}</h3>
                            <ul className="flex flex-col divide-y divide-white/10">
                                {w.fuerWen.nicht.items.map((item) => (
                                    <li key={item} className={`py-3 text-body ${textBody}`}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ERGEBNIS: sechs Kacheln */}
                <section className="flex flex-col gap-10">
                    <SectionHead title={w.ergebnis.title} />
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {w.ergebnis.items.map((item) => (
                            <li key={item} className={`p-8 text-xl font-semibold ${textPrimary} text-balance ${tile}`}>
                                {item}
                            </li>
                        ))}
                    </ol>
                </section>

                {/* DIE DREI TAGE: die Werkbank */}
                <section className="flex flex-col gap-10 lg:min-h-[85svh] lg:justify-center">
                    <SectionHead title={w.tage.title} />
                    <WerkbankComponent stations={w.tage.items} />
                </section>

                {/* CTA 1 */}
                <section className="flex flex-col items-center">
                    <div className={`w-full max-w-3xl flex flex-col items-center text-center gap-4 px-8 sm:px-12 py-10 ${tile}`}>
                        <h2 className={`text-h3 font-bold ${textHeading}`}>{w.cta.title}</h2>
                        <p className={`text-body ${textBody} max-w-[58ch] text-balance`}>{w.cta.text}</p>
                        <div className="pt-2">
                            <Link className={buttonPrimary} href={w.cta.button.href}>
                                {w.cta.button.label}
                            </Link>
                        </div>
                    </div>
                </section>

                {/* VIBE CODING: die Zahl groß, zentriert */}
                <section className="flex flex-col items-center text-center gap-6 max-w-3xl w-full mx-auto">
                    <p className={`text-data-xl font-bold ${textPrimary}`}>
                        {w.vibeCoding.zahl}
                        <span className="text-[0.5em] align-top ml-1">{w.vibeCoding.zahlEinheit}</span>
                    </p>
                    <h2 className={`text-h2 font-bold ${textHeading} text-balance`}>{w.vibeCoding.title}</h2>
                    <div className="flex flex-col gap-4">
                        {w.vibeCoding.paragraphs.map((text, index) =>
                            index === 0 ? (
                                <TextRevealComponent key={text} text={text} className={`text-xl leading-relaxed ${textBody} text-balance`} />
                            ) : (
                                <p key={text} className={`text-body ${textBody} text-balance`}>
                                    {text}
                                </p>
                            ),
                        )}
                    </div>
                </section>

                {/* MITBRINGEN: Checkliste, vier Kacheln */}
                <section className="flex flex-col gap-10">
                    <SectionHead title={w.mitbringen.title} subtitle={w.mitbringen.note} />
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {w.mitbringen.items.map((item) => (
                            <li key={item} className={`flex flex-col gap-4 p-8 ${tile}`}>
                                <span aria-hidden className="w-5 h-5 rounded-md border-2 border-white/30" />
                                <span className={`text-body ${textBody}`}>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* PREISE: Tabelle zentriert */}
                <section className="flex flex-col items-center gap-10">
                    <SectionHead title={w.preise.title} />
                    <div className={`w-full max-w-3xl overflow-x-auto px-6 sm:px-10 py-6 ${tile}`}>
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
                                            <td className={`py-4 pr-6 pl-3 rounded-l-xl ${empfohlen ? `font-semibold ${textPrimary}` : textBody}`}>{zeile.label}</td>
                                            <td className={`py-4 pr-3 text-right ${textData} whitespace-nowrap rounded-r-xl ${empfohlen ? textPrimary : textHeading}`}>
                                                {zeile.wert}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex flex-col items-center text-center gap-3 max-w-2xl">
                        <p className={`text-body ${textMuted} text-balance`}>{w.preise.enthalten}</p>
                        <p className={`text-body ${textMuted} text-balance`}>{w.preise.tag1}</p>
                    </div>
                </section>

                {/* ORT: Text zentriert, Fotos groß, Anfahrt in drei Kacheln */}
                <section className="flex flex-col gap-10">
                    <div className="flex flex-col items-center text-center gap-5 max-w-3xl w-full mx-auto">
                        <h2 className={`text-h2 font-bold ${textHeading} text-balance`}>{w.ort.title}</h2>
                        {w.ort.paragraphs.map((text) => (
                            <p key={text} className={`text-body ${textBody} text-balance`}>
                                {text}
                            </p>
                        ))}
                    </div>
                    <div className="grid grid-cols-12 gap-4">
                        {w.ort.fotos.map((foto, index) => (
                            <div
                                key={foto.alt}
                                className={`relative overflow-hidden h-64 sm:h-80 lg:h-[30rem] ${tile} ${index === 0 ? 'col-span-12 sm:col-span-7' : 'col-span-12 sm:col-span-5'}`}>
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
                        <h3 className={`text-h3 font-bold ${textHeading} text-center`}>{w.ort.anfahrt.title}</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            {w.ort.anfahrt.wege.map((weg) => (
                                <div key={weg.title} className={`flex flex-col gap-2 p-8 ${tile}`}>
                                    <h4 className={`text-body font-semibold ${textHeading}`}>{weg.title}</h4>
                                    <p className={`text-body ${textBody}`}>{weg.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TERMINE, nur wenn welche feststehen */}
                {w.termine.items.length > 0 && (
                    <section className="flex flex-col items-center text-center gap-6">
                        <SectionHead title={w.termine.title} />
                        <ul className={`flex flex-col gap-2 text-xl font-semibold ${textPrimary}`}>
                            {w.termine.items.map((termin) => (
                                <li key={termin.startDate}>{termin.label}</li>
                            ))}
                        </ul>
                        <P className="text-balance">{w.termine.fallback}</P>
                    </section>
                )}

                {/* WER DAS MACHT: Porträt zentriert, Text darunter */}
                <section className="flex flex-col items-center text-center gap-6 max-w-3xl w-full mx-auto">
                    <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden">
                        <Image className="object-cover" alt="Kevin Heyland, Profilbild" src={Profile} sizes="192px" fill />
                    </div>
                    <h2 className={`text-h2 font-bold ${textHeading} text-balance`}>{w.werDasMacht.title}</h2>
                    <div className="flex flex-col gap-4">
                        {w.werDasMacht.paragraphs.map((text) => (
                            <p key={text} className={`text-body ${textBody} text-balance`}>
                                {text}
                            </p>
                        ))}
                    </div>
                    <Link className={pillButton} href={w.werDasMacht.link.href}>
                        {w.werDasMacht.link.label}
                    </Link>
                </section>

                {/* FAQ: zwei unabhängige Spalten, native details */}
                <section className="flex flex-col gap-10">
                    <SectionHead title={w.faq.title} />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
                        <div className="flex flex-col gap-4">
                            {faqLeft.map((item, index) => (
                                <FaqItem key={item.frage} frage={item.frage} antwort={item.antwort} open={index === 0} />
                            ))}
                        </div>
                        <div className="flex flex-col gap-4">
                            {faqRight.map((item, index) => (
                                <FaqItem key={item.frage} frage={item.frage} antwort={item.antwort} open={index === 0} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* SCHLUSS-CTA: zentriert, das zweite Licht */}
                <section className="relative flex flex-col items-center text-center gap-6 py-10">
                    <div aria-hidden className="lamp-light left-1/2 -translate-x-1/2 -top-40 w-[52rem] h-[52rem]" />
                    <h2 className={`relative text-h2 font-bold ${textHeading} text-balance`}>{w.cta.title}</h2>
                    <p className={`relative text-xl leading-relaxed ${textMuted} max-w-2xl text-balance`}>{w.cta.text}</p>
                    <div className="relative flex flex-col items-center gap-3 pt-2">
                        <Link className={buttonPrimary} href={w.cta.button.href}>
                            {w.cta.button.label}
                        </Link>
                        <span className={`${textData} text-sm ${textMuted}`}>mail@kevinheyland.com</span>
                    </div>
                </section>
            </main>
            <FooterComponent />
        </>
    )
}
