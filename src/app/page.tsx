import { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Photo from '../../public/kevinheyland_bw.jpg'
import RaumSofa from '../../public/werkstatt-raum-sofa.jpg'
import Tonnentour from '../../public/tonnentour-mockup.png'
import AIAssistant from '../../public/KI-Assistant-Ausfuellhilfe.png'
import PacePlaner from '../../public/Pace-Planer-Mockup.png'
import NavigationTopComponent from '../../components/navigationTop'
import FooterComponent from '../../components/footer'
import { buttonPrimary, pillButton, textBody, textData, textHeading, textMeta, textMuted, textPrimary, tile } from '../../components/theme'
import { home } from '../../content/home'

const produktImages = [Tonnentour, AIAssistant, PacePlaner]

/**
 * A centered section heading with a quiet subline, product-page style.
 */
function SectionHead({ title, subtitle }: { title: string; subtitle?: string }): ReactElement {
    return (
        <div className="flex flex-col items-center text-center gap-3">
            <h2 className={`text-h2 font-bold ${textHeading} text-balance`}>{title}</h2>
            {subtitle && <p className={`text-lg ${textMuted}`}>{subtitle}</p>}
        </div>
    )
}

/**
 * Renders the start page like a product page at night: centered headlines,
 * borderless tiles, big pictures, a lot of air, and stars behind it all.
 */
export default function Home(): ReactElement {
    const [werkstatt, ...weitereAngebote] = home.angebote.items

    return (
        <>
            <NavigationTopComponent />
            <main className="flex flex-col py-10 pb-20 px-4 sm:px-8 max-w-7xl w-full min-w-0 gap-24 lg:gap-32 overflow-x-clip">
                {/* HERO: zentriert, darunter das Porträt als große Bildkachel im Lampenlicht */}
                <section className="relative flex flex-col items-center gap-10">
                    <div className="flex flex-col items-center text-center gap-6 max-w-4xl">
                        <h1 className={`text-h1 font-bold ${textPrimary} text-balance`}>{home.hero.h1}</h1>
                        <p className={`text-xl leading-relaxed ${textMuted} max-w-2xl text-balance`}>{home.hero.intro}</p>
                        <div className="flex flex-row flex-wrap items-center justify-center gap-3 pt-2">
                            <Link className={buttonPrimary} href={home.hero.cta.href}>
                                {home.hero.cta.label}
                            </Link>
                            {werkstatt.link && (
                                <Link className={pillButton} href={werkstatt.link.href}>
                                    {werkstatt.link.label}
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className="relative w-full max-w-5xl flex flex-col items-center gap-3">
                        <div aria-hidden className="lamp-light left-1/2 -translate-x-1/2 -top-[30rem] w-[60rem] h-[60rem]" />
                        <div className={`relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden ${tile}`}>
                            <Image className="object-cover" priority alt={home.hero.portrait.alt} src={Photo} sizes="(max-width: 1024px) 100vw, 1024px" fill />
                        </div>
                        <div className="relative flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center">
                            <span className={`text-sm ${textMuted}`}>{home.hero.beleg}</span>
                            <Link className={`text-xs ${textMeta} hover:text-slate-300 transition-colors`} href={home.hero.portrait.credit.href} target="_blank">
                                {home.hero.portrait.credit.label}
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ZAHLEN: drei belegte Zahlen, groß, zentriert */}
                <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl w-full mx-auto">
                    {home.zahlen.map((zahl) => (
                        <div key={zahl.label} className="flex flex-col items-center text-center gap-2">
                            <span className={`text-stat font-bold ${textPrimary}`}>{zahl.wert}</span>
                            <span className={`text-base ${textMuted}`}>{zahl.label}</span>
                        </div>
                    ))}
                </section>

                {/* ANGEBOTE: Bento, eine große Kachel mit Bild, dann zwei kleine */}
                <section id="angebote" className="flex flex-col gap-10 scroll-mt-24">
                    <SectionHead title={home.angebote.title} subtitle={home.angebote.subtitle} />
                    <div className="flex flex-col gap-4">
                        <div className={`grid grid-cols-1 lg:grid-cols-2 overflow-hidden ${tile}`}>
                            <div className="flex flex-col gap-4 p-8 sm:p-10 lg:p-12 justify-center">
                                {werkstatt.badge && <span className={`text-sm ${textMuted}`}>{werkstatt.badge}</span>}
                                <h3 className={`text-3xl sm:text-4xl font-bold ${textHeading} text-balance`}>{werkstatt.title}</h3>
                                <p className={`text-body ${textBody} max-w-[52ch]`}>{werkstatt.text}</p>
                                {werkstatt.link && (
                                    <div className="pt-2">
                                        <Link className={pillButton} href={werkstatt.link.href}>
                                            {werkstatt.link.label}
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <div className="relative min-h-72 lg:min-h-full">
                                <Image
                                    className="object-cover"
                                    alt="Besprechungsecke in den DEVDEER-Räumen mit grünem Sofa, zwei Sesseln und Holztisch"
                                    src={RaumSofa}
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    fill
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {weitereAngebote.map((angebot) => (
                                <div key={angebot.title} className={`flex flex-col gap-4 p-8 sm:p-10 ${tile}`}>
                                    <h3 className={`text-2xl sm:text-3xl font-bold ${textHeading} text-balance`}>{angebot.title}</h3>
                                    <p className={`text-body ${textBody} max-w-[52ch]`}>{angebot.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PRINZIP: eine zentrierte Aussage */}
                <section className="flex flex-col items-center text-center gap-5 max-w-3xl w-full mx-auto">
                    <h2 className={`text-h2 font-bold ${textHeading} text-balance`}>{home.prinzip.title}</h2>
                    <p className={`text-xl leading-relaxed ${textMuted} text-balance`}>{home.prinzip.text}</p>
                </section>

                {/* BELEGE */}
                <section className="flex flex-col gap-10">
                    <SectionHead title={home.belege.title} subtitle={home.belege.subtitle} />
                    <div className="flex flex-col gap-4">
                        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 p-8 sm:p-10 items-center ${tile}`}>
                            <div className="lg:col-span-2 flex flex-col gap-3">
                                <h3 className={`text-2xl sm:text-3xl font-bold ${textHeading}`}>{home.belege.devdeer.title}</h3>
                                <p className={`text-body ${textBody} max-w-[58ch]`}>{home.belege.devdeer.text}</p>
                            </div>
                            <div className="flex lg:justify-end">
                                <Link className={pillButton} href={home.belege.devdeer.link.href} target="_blank">
                                    {home.belege.devdeer.link.label}
                                </Link>
                            </div>
                        </div>
                        <p className={`text-body ${textMuted} text-center pt-6`}>{home.belege.produkteIntro}</p>
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                            {home.belege.produkte.map((produkt, index) => (
                                <div key={produkt.title} className={`flex flex-col overflow-hidden ${tile}`}>
                                    <div className="relative w-full aspect-[4/3]">
                                        <Image
                                            className="object-contain object-bottom p-6"
                                            alt={produkt.imageAlt}
                                            src={produktImages[index]}
                                            sizes="(max-width: 1024px) 100vw, 33vw"
                                            fill
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3 p-8 pt-4 grow">
                                        <h3 className={`text-xl font-bold ${textHeading}`}>{produkt.title}</h3>
                                        <p className={`text-body ${textBody}`}>{produkt.text}</p>
                                        <div className="pt-1 mt-auto">
                                            <Link className={pillButton} href={produkt.cta.href} target="_blank">
                                                {produkt.cta.label}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-row flex-wrap items-center justify-center gap-5 pt-4">
                            <Link className={pillButton} href={home.belege.links.referenzen.href}>
                                {home.belege.links.referenzen.label}
                            </Link>
                            <Link className={`text-sm font-medium ${textMuted} hover:text-slate-200 transition-colors`} href={home.belege.links.ueberMich.href}>
                                {home.belege.links.ueberMich.label}
                            </Link>
                        </div>
                    </div>
                </section>

                {/* KONTAKT: zentriert, das zweite Licht */}
                <section className="relative flex flex-col items-center text-center gap-6 py-10">
                    <div aria-hidden className="lamp-light left-1/2 -translate-x-1/2 -top-40 w-[52rem] h-[52rem]" />
                    <h2 className={`relative text-h2 font-bold ${textHeading} text-balance`}>{home.kontakt.title}</h2>
                    <p className={`relative text-xl leading-relaxed ${textMuted} max-w-2xl text-balance`}>{home.kontakt.text}</p>
                    <div className="relative flex flex-col items-center gap-3 pt-2">
                        <Link className={buttonPrimary} href={home.kontakt.cta.href}>
                            {home.kontakt.cta.label}
                        </Link>
                        <span className={`${textData} text-sm ${textMuted}`}>mail@kevinheyland.com</span>
                    </div>
                </section>
            </main>
            <FooterComponent />
        </>
    )
}
