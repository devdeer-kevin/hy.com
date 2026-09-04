import { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Photo from '../../public/kevinheyland_bw.jpg'
import NavigationTopComponent from '../../components/navigationTop'
import FooterComponent from '../../components/footer'
import SectionHeaderComponent from '../../components/sectionHeader'
import { cardPrimary, cardSecondary, glass, glassFrame, pillButton, textBody, textHeading, textMeta, textMuted, textPrimary } from '../../components/theme'
import { home } from '../../content/home'

/**
 * Renders the start page: positioning, offers, proof and one call to action.
 */
export default function Home(): ReactElement {
    return (
        <>
            <NavigationTopComponent />
            <main className="flex flex-col py-12 px-4 sm:px-8 max-w-7xl w-full lg:gap-24 gap-16">
                {/* POSITIONIERUNG */}
                <section className="flex lg:flex-row flex-col gap-8 lg:items-center">
                    <div className="lg:w-1/2 w-full flex flex-col gap-5">
                        <h1 className={`text-5xl sm:text-7xl font-sans font-bold ${textPrimary} tracking-tight leading-tight text-balance`}>{home.hero.h1}</h1>
                        <p className={`max-w-2xl text-lg leading-relaxed ${textBody} text-balance`}>{home.hero.intro}</p>
                        <div className="flex flex-row flex-wrap items-center gap-4 pt-1">
                            <Link className={pillButton} href={home.hero.cta.href}>
                                {home.hero.cta.label}
                            </Link>
                            <span className={`font-mono text-sm ${textMuted}`}>mail@kevinheyland.com</span>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex flex-col gap-2">
                        <Image className={`rounded-3xl w-full h-auto ${glassFrame}`} priority alt={home.hero.portrait.alt} src={Photo} sizes="(max-width: 1024px) 100vw, 50vw" />
                        <Link className={`self-end text-xs ${textMeta} hover:text-slate-300 transition-colors`} href={home.hero.portrait.credit.href} target="_blank">
                            {home.hero.portrait.credit.label}
                        </Link>
                    </div>
                </section>

                {/* ANGEBOTE */}
                <section id="angebote" className="flex flex-col gap-8 scroll-mt-24">
                    <SectionHeaderComponent title={home.angebote.title} subtitle={home.angebote.subtitle} />
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 w-full">
                        {home.angebote.items.map((angebot) => (
                            <div key={angebot.title} className={`flex flex-col gap-3 p-7 ${cardPrimary}`}>
                                <h3 className={`text-2xl font-bold ${textHeading} text-balance`}>{angebot.title}</h3>
                                <p className={`text-md leading-7 ${textBody}`}>{angebot.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PRINZIP */}
                <section className="flex flex-col gap-3 max-w-3xl border-l-2 border-white/20 pl-6 sm:pl-8 my-2">
                    <h2 className={`text-3xl font-bold ${textHeading} text-balance`}>{home.prinzip.title}</h2>
                    <p className={`text-xl leading-8 ${textBody}`}>{home.prinzip.text}</p>
                </section>

                {/* BELEGE */}
                <section className="flex flex-col gap-8">
                    <SectionHeaderComponent title={home.belege.title} subtitle={home.belege.subtitle} />
                    <div className={`flex flex-col gap-3 px-7 sm:px-10 py-8 ${cardSecondary}`}>
                        <h3 className={`text-2xl font-bold ${textHeading}`}>{home.belege.devdeer.title}</h3>
                        <p className={`text-md leading-7 ${textBody} max-w-3xl`}>{home.belege.devdeer.text}</p>
                        <div className="pt-2">
                            <Link className={pillButton} href={home.belege.devdeer.link.href} target="_blank">
                                {home.belege.devdeer.link.label}
                            </Link>
                        </div>
                    </div>
                    <p className={`text-md leading-7 ${textBody}`}>{home.belege.produkteIntro}</p>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 w-full">
                        {home.belege.produkte.map((produkt) => (
                            <div key={produkt.title} className={`flex flex-col gap-3 p-7 ${cardSecondary}`}>
                                <h3 className={`text-lg font-bold ${textHeading} text-balance`}>{produkt.title}</h3>
                                <p className={`text-md leading-7 ${textBody}`}>{produkt.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row flex-wrap gap-3">
                        <Link className={pillButton} href={home.belege.links.referenzen.href}>
                            {home.belege.links.referenzen.label}
                        </Link>
                        <Link className={pillButton} href={home.belege.links.ueberMich.href}>
                            {home.belege.links.ueberMich.label}
                        </Link>
                    </div>
                </section>

                {/* KONTAKT */}
                <section className="flex flex-col gap-8">
                    <div className={`flex flex-col gap-3 px-7 sm:px-10 py-10 ${glass}`}>
                        <h2 className={`text-3xl font-bold ${textHeading}`}>{home.kontakt.title}</h2>
                        <p className={`text-md leading-7 ${textBody} max-w-3xl`}>{home.kontakt.text}</p>
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
