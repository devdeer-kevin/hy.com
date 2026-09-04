import type { Metadata } from 'next'
import { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavigationTopComponent from '../../../components/navigationTop'
import FooterComponent from '../../../components/footer'
import AblaufDiagrammComponent from '../../../components/ablaufDiagramm'
import RaumSofa from '../../../public/werkstatt-raum-sofa.jpg'
import RaumLeuchte from '../../../public/werkstatt-raum-leuchte.jpg'
import { cardPrimary, cardSecondary, glassAccent, glassFrame, pillButton, textBody, textHeading, textMuted, textPrimary } from '../../../components/theme'
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

/**
 * A section heading on this page.
 */
function H2({ children }: { children: React.ReactNode }): ReactElement {
    return <h2 className={`text-3xl sm:text-4xl font-bold ${textHeading} text-balance`}>{children}</h2>
}

/**
 * A bulleted list in body type.
 */
function List({ items }: { items: string[] }): ReactElement {
    return (
        <ul className={`flex flex-col gap-2 list-disc pl-5 text-md leading-7 ${textBody} max-w-3xl`}>
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    )
}

/**
 * Renders the workshop page: who it is for, the three days, prices, venue,
 * the person behind it and the FAQ. Two calls to action, one glass moment.
 */
export default function KiWorkshopMagdeburg(): ReactElement {
    const naechsterTermin = w.termine.items[0]

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <NavigationTopComponent />
            <main className="flex flex-col py-6 pb-12 px-4 sm:px-8 max-w-7xl w-full gap-10 lg:gap-12">
                {/* HERO */}
                <section className="flex flex-col gap-5 max-w-4xl">
                    <h1 className={`text-4xl sm:text-6xl font-sans font-bold ${textPrimary} tracking-tight leading-tight text-balance`}>{w.hero.h1}</h1>
                    <p className={`text-lg leading-relaxed ${textBody} text-balance`}>{w.hero.intro}</p>
                    <p className={`text-lg leading-relaxed ${textHeading}`}>{w.hero.sub}</p>
                    <div className="flex flex-row flex-wrap items-center gap-4 pt-1">
                        <Link className={pillButton} href={w.hero.cta.href}>
                            {w.hero.cta.label}
                        </Link>
                        {naechsterTermin && (
                            <span className={`text-sm ${textMuted}`}>
                                {w.hero.terminLabel} {naechsterTermin.label}
                            </span>
                        )}
                    </div>
                </section>

                {/* FÜR WEN */}
                <section className="flex flex-col gap-6">
                    <H2>{w.fuerWen.title}</H2>
                    <div className="flex flex-col gap-4 max-w-3xl">
                        {w.fuerWen.paragraphs.map((text) => (
                            <p key={text} className={`text-md leading-7 ${textBody}`}>
                                {text}
                            </p>
                        ))}
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className={`text-xl font-bold ${textHeading}`}>{w.fuerWen.nicht.title}</h3>
                        <List items={w.fuerWen.nicht.items} />
                    </div>
                </section>

                {/* ERGEBNIS */}
                <section className="flex flex-col gap-6">
                    <H2>{w.ergebnis.title}</H2>
                    <List items={w.ergebnis.items} />
                </section>

                {/* DIE DREI TAGE */}
                <section className="flex flex-col gap-6">
                    <H2>{w.tage.title}</H2>
                    <AblaufDiagrammComponent steps={w.tage.items} ariaLabel={w.tage.diagrammLabel} />
                    <div className="flex flex-col gap-8">
                        {w.tage.items.map((tag) => (
                            <div key={tag.label} className="flex flex-col gap-3 max-w-3xl">
                                <h3 className={`text-2xl font-bold ${textHeading}`}>
                                    {tag.label}: {tag.title}
                                </h3>
                                {tag.paragraphs.map((text) => (
                                    <p key={text} className={`text-md leading-7 ${textBody}`}>
                                        {text}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA 1 */}
                <section className="flex flex-col">
                    <div className={`flex flex-col gap-3 px-7 sm:px-10 py-8 ${cardPrimary}`}>
                        <h2 className={`text-2xl font-bold ${textHeading}`}>{w.cta.title}</h2>
                        <p className={`text-md leading-7 ${textBody} max-w-3xl`}>{w.cta.text}</p>
                        <div className="pt-2">
                            <Link className={pillButton} href={w.cta.button.href}>
                                {w.cta.button.label}
                            </Link>
                        </div>
                    </div>
                </section>

                {/* VIBE CODING */}
                <section className="flex flex-col gap-6">
                    <H2>{w.vibeCoding.title}</H2>
                    <div className="flex flex-col gap-4 max-w-3xl">
                        {w.vibeCoding.paragraphs.map((text) => (
                            <p key={text} className={`text-md leading-7 ${textBody}`}>
                                {text}
                            </p>
                        ))}
                    </div>
                </section>

                {/* MITBRINGEN */}
                <section className="flex flex-col gap-6">
                    <H2>{w.mitbringen.title}</H2>
                    <List items={w.mitbringen.items} />
                    <p className={`text-md leading-7 ${textBody} max-w-3xl`}>{w.mitbringen.note}</p>
                </section>

                {/* PREISE */}
                <section className="flex flex-col gap-6">
                    <H2>{w.preise.title}</H2>
                    <div className={`overflow-x-auto px-7 sm:px-10 py-6 ${cardPrimary}`}>
                        <table className="w-full max-w-3xl text-md">
                            <thead>
                                <tr>
                                    <th className="sr-only">Leistung</th>
                                    <th className={`text-right font-medium pb-3 ${textMuted}`}>{w.preise.spaltenTitel}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                                {w.preise.zeilen.map((zeile) => (
                                    <tr key={zeile.label}>
                                        <td className={`py-3 pr-6 ${textBody}`}>{zeile.label}</td>
                                        <td className={`py-3 text-right font-mono whitespace-nowrap ${textHeading}`}>{zeile.wert}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex flex-col gap-3 max-w-3xl">
                        <p className={`text-md leading-7 ${textBody}`}>{w.preise.enthalten}</p>
                        <p className={`text-md leading-7 ${textBody}`}>{w.preise.tag1}</p>
                    </div>
                </section>

                {/* ORT */}
                <section className="flex flex-col gap-6">
                    <H2>{w.ort.title}</H2>
                    <div className="flex flex-col gap-4 max-w-3xl">
                        {w.ort.paragraphs.map((text) => (
                            <p key={text} className={`text-md leading-7 ${textBody}`}>
                                {text}
                            </p>
                        ))}
                    </div>
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                        {w.ort.fotos.map((foto, index) => (
                            <div key={foto.alt} className={`relative w-full aspect-[4/3] overflow-hidden rounded-2xl ${glassFrame}`}>
                                <Image className="object-cover" alt={foto.alt} src={raumFotos[index]} sizes="(max-width: 640px) 100vw, 50vw" fill />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className={`text-xl font-bold ${textHeading}`}>{w.ort.anfahrt.title}</h3>
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
                            {w.ort.anfahrt.wege.map((weg) => (
                                <div key={weg.title} className={`flex flex-col gap-2 p-6 ${cardSecondary}`}>
                                    <h4 className={`text-md font-bold ${textHeading}`}>{weg.title}</h4>
                                    <p className={`text-md leading-7 ${textBody}`}>{weg.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TERMINE, nur wenn welche feststehen */}
                {w.termine.items.length > 0 && (
                    <section className="flex flex-col gap-6">
                        <H2>{w.termine.title}</H2>
                        <ul className={`flex flex-col gap-2 text-md leading-7 ${textBody}`}>
                            {w.termine.items.map((termin) => (
                                <li key={termin.startDate}>{termin.label}</li>
                            ))}
                        </ul>
                        <p className={`text-md leading-7 ${textBody} max-w-3xl`}>{w.termine.fallback}</p>
                    </section>
                )}

                {/* WER DAS MACHT */}
                <section className="flex flex-col gap-6">
                    <H2>{w.werDasMacht.title}</H2>
                    <div className="flex flex-col gap-4 max-w-3xl">
                        {w.werDasMacht.paragraphs.map((text) => (
                            <p key={text} className={`text-md leading-7 ${textBody}`}>
                                {text}
                            </p>
                        ))}
                    </div>
                    <Link className={`self-start text-sm font-medium ${textMuted} hover:text-slate-200 transition-colors`} href={w.werDasMacht.link.href}>
                        {w.werDasMacht.link.label}
                    </Link>
                </section>

                {/* FAQ */}
                <section className="flex flex-col gap-6">
                    <H2>{w.faq.title}</H2>
                    <div className="flex flex-col gap-6 max-w-3xl">
                        {w.faq.items.map((item) => (
                            <div key={item.frage} className="flex flex-col gap-2">
                                <h3 className={`text-lg font-bold ${textHeading}`}>{item.frage}</h3>
                                <p className={`text-md leading-7 ${textBody}`}>{item.antwort}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA 2, der eine Glas-Moment */}
                <section className="relative flex flex-col">
                    <div aria-hidden className="absolute -inset-8 rounded-[3rem] bg-indigo-500/10 blur-3xl" />
                    <div className={`relative flex flex-col gap-3 px-7 sm:px-10 py-10 ${glassAccent}`}>
                        <h2 className={`text-3xl font-bold ${textHeading}`}>{w.cta.title}</h2>
                        <p className={`text-md leading-7 ${textBody} max-w-3xl`}>{w.cta.text}</p>
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
