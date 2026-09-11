import { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Photo from '../../public/kevinheyland_bw.jpg'
import Tonnentour from '../../public/tonnentour-mockup.png'
import AIAssistant from '../../public/KI-Assistant-Ausfuellhilfe.png'
import PacePlaner from '../../public/Pace-Planer-Mockup.png'
import NavigationTopComponent from '../../components/navigationTop'
import FooterComponent from '../../components/footer'
import StempelComponent from '../../components/stempel'
import SchildComponent from '../../components/schild'
import PassermarkenComponent from '../../components/passermarken'
import { cardPrimary, cardSecondary, papierrahmen, pillButton, surface3, textBody, textData, textHeading, textMeta, textMuted, textPrimary } from '../../components/theme'
import { home } from '../../content/home'

const produktImages = [Tonnentour, AIAssistant, PacePlaner]

/**
 * A section heading on this page.
 */
function H2({ children }: { children: React.ReactNode }): ReactElement {
    return <h2 className={`text-h2 font-bold ${textHeading} text-balance`}>{children}</h2>
}

/**
 * A body paragraph, capped at a readable measure.
 */
function P({ children, className = '' }: { children: React.ReactNode; className?: string }): ReactElement {
    return <p className={`text-body ${textBody} max-w-[58ch] ${className}`}>{children}</p>
}

/**
 * Renders the start page as a workshop at night: dark room, one warm lamp,
 * real things on the table, big signs on the wall.
 */
export default function Home(): ReactElement {
    return (
        <>
            <NavigationTopComponent />
            <main className="flex flex-col py-6 pb-16 px-4 sm:px-8 max-w-7xl w-full min-w-0 gap-20 lg:gap-28 overflow-x-clip">
                {/* POSITIONIERUNG: Text links, Porträt im Papierrahmen rechts, Lampe dahinter */}
                <section className="relative flex flex-col gap-10">
                    <div aria-hidden className="lamp-light -bottom-32 -left-48 w-[40rem] h-[40rem] lg:top-24 lg:-left-64 lg:w-[56rem] lg:h-[56rem]" />
                    <div className="relative grid grid-cols-12 gap-6 lg:gap-10 items-center">
                        <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
                            <h1 className={`text-h1 font-bold ${textPrimary} text-balance`}>{home.hero.h1}</h1>
                            <P>{home.hero.intro}</P>
                            <div className="flex flex-row flex-wrap items-center gap-6 pt-2">
                                <StempelComponent text={home.hero.cta.label} href={home.hero.cta.href} />
                                <div className="flex flex-col gap-1">
                                    <span className={`${textData} text-sm ${textPrimary}`}>mail@kevinheyland.com</span>
                                    <span className={`text-sm ${textMuted}`}>{home.hero.beleg}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-5 flex flex-col gap-3 lg:pr-3">
                            <div className="relative">
                                <div aria-hidden className={`absolute inset-0 ${papierrahmen}`} />
                                <Image className="relative w-full h-auto" priority alt={home.hero.portrait.alt} src={Photo} sizes="(max-width: 1024px) 100vw, 42vw" />
                            </div>
                            <Link className={`self-end pt-2 text-xs ${textMeta} hover:text-slate-300 transition-colors`} href={home.hero.portrait.credit.href} target="_blank">
                                {home.hero.portrait.credit.label}
                            </Link>
                        </div>
                    </div>

                    {/* ZAHLEN: drei belegte Zahlen, gemessen, mit Passermarken */}
                    <PassermarkenComponent className="mt-2">
                        <dl className="grid grid-cols-3 divide-x divide-white/10 border-y border-white/10">
                            {home.zahlen.map((zahl) => (
                                <div key={zahl.label} className="flex flex-col gap-1 py-5 px-4 sm:px-6">
                                    <dd className={`${textData} text-3xl sm:text-4xl ${textPrimary}`}>{zahl.wert}</dd>
                                    <dt className={`text-sm ${textMuted}`}>{zahl.label}</dt>
                                </div>
                            ))}
                        </dl>
                    </PassermarkenComponent>
                </section>

                {/* ANGEBOTE */}
                <section id="angebote" className="flex flex-col gap-6 scroll-mt-24">
                    <SchildComponent wort={home.angebote.schild} />
                    <div className="flex flex-col gap-2">
                        <H2>{home.angebote.title}</H2>
                        <p className={`text-body ${textMuted}`}>{home.angebote.subtitle}</p>
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 w-full">
                        {home.angebote.items.map((angebot) => (
                            <div key={angebot.title} className={`flex flex-col gap-3 p-7 ${cardPrimary}`}>
                                {angebot.badge && <span className={`self-start ${textData} text-xs ${textMuted}`}>{angebot.badge}</span>}
                                <h3 className={`text-h3 font-bold ${textHeading} text-balance`}>{angebot.title}</h3>
                                <p className={`text-body ${textBody}`}>{angebot.text}</p>
                                {angebot.link && (
                                    <div className="pt-1 mt-auto">
                                        <Link className={pillButton} href={angebot.link.href}>
                                            {angebot.link.label}
                                        </Link>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* PRINZIP: ein Zitat, rechts verankert */}
                <section className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-8 lg:col-start-5 flex flex-col gap-3 border-l-2 border-white/20 pl-6 sm:pl-8">
                        <H2>{home.prinzip.title}</H2>
                        <p className={`text-xl leading-8 ${textBody} max-w-[58ch]`}>{home.prinzip.text}</p>
                    </div>
                </section>

                {/* BELEGE */}
                <section className="flex flex-col gap-6">
                    <SchildComponent wort={home.belege.schild} />
                    <div className="flex flex-col gap-2">
                        <H2>{home.belege.title}</H2>
                        <p className={`text-body ${textMuted}`}>{home.belege.subtitle}</p>
                    </div>
                    <div className={`grid grid-cols-12 gap-6 px-7 sm:px-10 py-8 ${cardSecondary}`}>
                        <div className="col-span-12 lg:col-span-8 flex flex-col gap-3">
                            <h3 className={`text-h3 font-bold ${textHeading}`}>{home.belege.devdeer.title}</h3>
                            <P>{home.belege.devdeer.text}</P>
                        </div>
                        <div className="col-span-12 lg:col-span-4 flex lg:justify-end lg:items-start">
                            <Link className={pillButton} href={home.belege.devdeer.link.href} target="_blank">
                                {home.belege.devdeer.link.label}
                            </Link>
                        </div>
                    </div>
                    <P className="pt-4">{home.belege.produkteIntro}</P>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 w-full">
                        {home.belege.produkte.map((produkt, index) => (
                            <div key={produkt.title} className={`flex flex-col overflow-hidden ${cardSecondary}`}>
                                <div className="relative w-full aspect-[4/3]">
                                    <Image
                                        className="object-contain object-bottom p-4"
                                        alt={produkt.imageAlt}
                                        src={produktImages[index]}
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        fill
                                    />
                                </div>
                                <div className="flex flex-col gap-3 p-7 pt-4 grow">
                                    <h3 className={`text-lg font-bold ${textHeading} text-balance`}>{produkt.title}</h3>
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
                    <div className="flex flex-row flex-wrap items-center gap-5">
                        <Link className={pillButton} href={home.belege.links.referenzen.href}>
                            {home.belege.links.referenzen.label}
                        </Link>
                        <Link className={`text-sm font-medium ${textMuted} hover:text-slate-200 transition-colors`} href={home.belege.links.ueberMich.href}>
                            {home.belege.links.ueberMich.label}
                        </Link>
                    </div>
                </section>

                {/* KONTAKT: das zweite Licht */}
                <section className="relative grid grid-cols-12 gap-6 py-8">
                    <div aria-hidden className="lamp-light left-1/2 -translate-x-1/2 -bottom-48 w-[48rem] h-[48rem]" />
                    <div className={`relative col-span-12 lg:col-span-8 lg:col-start-3 flex flex-col items-center text-center gap-5 px-7 sm:px-12 py-14 ${surface3}`}>
                        <H2>{home.kontakt.title}</H2>
                        <P>{home.kontakt.text}</P>
                        <div className="pt-2">
                            <Link className={pillButton} href={home.kontakt.cta.href}>
                                {home.kontakt.cta.label}
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <FooterComponent />
        </>
    )
}
