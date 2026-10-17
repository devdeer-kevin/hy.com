import { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Photo from '../../public/kevinheyland_bw.jpg'
import RaumLeuchte from '../../public/werkstatt-raum-leuchte.jpg'
import RaumSofa from '../../public/werkstatt-raum-sofa.jpg'
import NavigationTopComponent from '../../components/navigationTop'
import FooterComponent from '../../components/footer'
import SectionHeaderComponent from '../../components/sectionHeader'
import CareerComponent from '../../components/career'
import ValueCardComponent from '../../components/valueCard'
import TextRevealComponent from '../../components/textReveal'
import { buttonPrimary, pillButton, textBody, textData, textHeading, textMeta, textMuted, textPrimary, tile } from '../../components/theme'
import { home } from '../../content/home'

/**
 * Renders the start page about the person: centered name and portrait in
 * the lamp light, then why the story lives here and the career timeline,
 * the principles, a pointer to today's offers and the contact.
 */
export default function Home(): ReactElement {
    return (
        <>
            <NavigationTopComponent />
            <main className="flex flex-col py-10 pb-20 px-4 sm:px-8 max-w-7xl w-full min-w-0 gap-24 lg:gap-32 overflow-x-clip">
                {/* HERO: Name, Rolle und Abschlüsse, das Intro, darunter das Porträt als große Bildkachel im Lampenlicht */}
                <section className="relative flex flex-col items-center gap-10">
                    <div className="flex flex-col items-center text-center gap-6 max-w-4xl">
                        <h1 className={`reveal text-h1 font-bold ${textPrimary} text-balance`} style={{ '--i': 0 } as React.CSSProperties}>
                            {home.hero.h1}
                        </h1>
                        <div className="reveal flex flex-col gap-1" style={{ '--i': 1 } as React.CSSProperties}>
                            <p className={`text-xl font-semibold ${textHeading} text-balance`}>{home.hero.roleLine}</p>
                            <p className={`text-lg ${textMuted} text-balance`}>{home.hero.credentialsLine}</p>
                        </div>
                        <p className={`reveal text-lg sm:text-xl leading-relaxed ${textMuted} max-w-2xl text-balance`} style={{ '--i': 2 } as React.CSSProperties}>
                            {home.hero.intro}
                        </p>
                        <div className="reveal flex flex-row flex-wrap items-center justify-center gap-3 pt-2" style={{ '--i': 3 } as React.CSSProperties}>
                            <Link className={buttonPrimary} href={home.hero.cta.href}>
                                {home.hero.cta.label}
                            </Link>
                            <Link className={pillButton} href={home.angebote.link.href}>
                                {home.angebote.link.label}
                            </Link>
                        </div>
                    </div>
                    <div className="relative w-full max-w-5xl flex flex-col items-center gap-3">
                        <div aria-hidden className="lamp-light left-1/2 -translate-x-1/2 -top-[30rem] w-[60rem] h-[60rem]" />
                        <div className={`reveal tilt relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden ${tile}`} style={{ '--i': 4 } as React.CSSProperties}>
                            <Image className="object-cover" priority alt={home.hero.portrait.alt} src={Photo} sizes="(max-width: 1024px) 100vw, 1024px" fill />
                        </div>
                        <Link className={`relative text-xs ${textMeta} hover:text-slate-300 transition-colors`} href={home.hero.portrait.credit.href} target="_blank">
                            {home.hero.portrait.credit.label}
                        </Link>
                    </div>
                </section>

                {/* WERDEGANG: warum die Geschichte hier steht, dann die Timeline. Längere Absätze stehen linksbündig in der Lesespalte. */}
                <section className="flex flex-col gap-10">
                    <SectionHeaderComponent title={home.career.title} subtitle={home.career.subtitle} />
                    <TextRevealComponent text={home.career.intro} className={`text-xl leading-relaxed ${textBody} max-w-[58ch] mx-auto`} />
                    <CareerComponent chapters={home.career.chapters} />
                </section>

                {/* PRINZIPIEN als Bento: die große Kachel trägt das Lampenfoto und die Haltung, darunter zwei kleine mit je einem Prinzip */}
                <section className="flex flex-col gap-10">
                    <SectionHeaderComponent title={home.prinzipien.title} subtitle={home.prinzipien.subtitle} />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className={`lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 overflow-hidden ${tile}`}>
                            <div className="relative min-h-72 lg:min-h-96">
                                <Image className="object-cover object-[50%_15%]" alt={home.prinzipien.imageAlt} src={RaumLeuchte} sizes="(max-width: 1024px) 100vw, 50vw" fill />
                            </div>
                            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                                <p className={`text-xl leading-relaxed ${textBody} max-w-[52ch]`}>{home.prinzipien.intro}</p>
                            </div>
                        </div>
                        {home.prinzipien.values.map((value) => (
                            <ValueCardComponent key={value.title} value={value} />
                        ))}
                    </div>
                </section>

                {/* ANGEBOTE: eine große Bildkachel, die auf /ki-beratung führt. Das Bild kommt zuerst, ab lg steht es rechts. */}
                <section className="flex flex-col gap-10">
                    <SectionHeaderComponent title={home.angebote.title} subtitle={home.angebote.subtitle} />
                    <div className={`grid grid-cols-1 lg:grid-cols-2 overflow-hidden ${tile}`}>
                        <div className="relative min-h-72 lg:min-h-96 lg:order-last">
                            <Image className="object-cover" alt={home.angebote.imageAlt} src={RaumSofa} sizes="(max-width: 1024px) 100vw, 50vw" fill />
                        </div>
                        <div className="flex flex-col gap-6 p-8 sm:p-10 lg:p-12 justify-center">
                            <p className={`text-body ${textBody} max-w-[52ch]`}>{home.angebote.text}</p>
                            <div className="flex flex-row flex-wrap items-center gap-3">
                                <Link className={buttonPrimary} href={home.angebote.link.href}>
                                    {home.angebote.link.label}
                                </Link>
                                <Link className={pillButton} href={home.angebote.werkstatt.href}>
                                    {home.angebote.werkstatt.label}
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* KONTAKT: zentriert, das zweite Licht. Die Adresse steht einmal, als kopierbare Zeile unter dem Knopf. */}
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
