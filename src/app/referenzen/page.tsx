import type { Metadata } from 'next'
import { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavigationTopComponent from '../../../components/navigationTop'
import FooterComponent from '../../../components/footer'
import Tonnentour from '../../../public/tonnentour-mockup.png'
import AIAssistant from '../../../public/KI-Assistant-Ausfuellhilfe.png'
import PacePlaner from '../../../public/Pace-Planer-Mockup.png'
import { glass, glassCard, pillButton } from '../../../components/theme'
import { referenzen } from '../../../content/referenzen'

export const metadata: Metadata = {
    title: referenzen.metadata.title,
    description: referenzen.metadata.description,
    alternates: {
        canonical: '/referenzen',
    },
    openGraph: {
        title: referenzen.metadata.title,
        description: referenzen.metadata.description,
        url: 'https://kevinheyland.com/referenzen',
        siteName: 'Kevin Heyland',
        type: 'website',
        locale: 'de_DE',
    },
}

const images = [Tonnentour, AIAssistant, PacePlaner]

/**
 * Renders the references page: the tools built for this city, in detail.
 */
export default function Referenzen(): ReactElement {
    return (
        <>
            <NavigationTopComponent />
            <main className="flex flex-col py-12 px-4 sm:px-8 max-w-7xl w-full lg:gap-24 gap-16">
                <section className="flex flex-col gap-5">
                    <h1 className="text-6xl sm:text-8xl font-sans font-bold text-slate-50/35 tracking-tight leading-none">{referenzen.hero.h1}</h1>
                    <p className="max-w-2xl text-lg leading-relaxed text-slate-300 text-balance">{referenzen.hero.intro}</p>
                </section>

                <section className="flex flex-col gap-8">
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 w-full">
                        {referenzen.produkte.map((produkt, index) => (
                            <div key={produkt.title} className={`flex relative flex-col overflow-hidden ${glassCard}`}>
                                <div className="relative items-center justify-center flex flex-col w-full h-80">
                                    <Image className="absolute h-72 w-fit bottom-0" loading="eager" alt={produkt.imageAlt} src={images[index]} />
                                </div>
                                <div className="flex flex-col px-7 pb-7 pt-4">
                                    <h2 className="text-2xl font-bold text-slate-50/90 pb-2">{produkt.title}</h2>
                                    <p className="text-md leading-7 text-slate-300 pb-14">{produkt.text}</p>
                                </div>
                                <div className="absolute bottom-0 right-0 flex flex-row justify-end p-5">
                                    <Link className={pillButton} href={produkt.cta.href} target="_blank">
                                        {produkt.cta.label}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="flex flex-col gap-8">
                    <div className={`flex flex-col gap-3 px-7 sm:px-10 py-10 ${glass}`}>
                        <p className="text-md leading-7 text-slate-300 max-w-3xl">{referenzen.kontakt.text}</p>
                        <div className="pt-2">
                            <Link className={pillButton} href={referenzen.kontakt.cta.href}>
                                {referenzen.kontakt.cta.label}
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <FooterComponent />
        </>
    )
}
