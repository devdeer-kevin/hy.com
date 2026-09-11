import type { Metadata } from 'next'
import { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavigationTopComponent from '../../../components/navigationTop'
import FooterComponent from '../../../components/footer'
import Tonnentour from '../../../public/tonnentour-mockup.png'
import AIAssistant from '../../../public/KI-Assistant-Ausfuellhilfe.png'
import PacePlaner from '../../../public/Pace-Planer-Mockup.png'
import { buttonPrimary, pillButton, textBody, textData, textHeading, textMuted, textPrimary, tile } from '../../../components/theme'
import { referenzen } from '../../../content/referenzen'
import { pageMetadata } from '../seo'

export const metadata: Metadata = pageMetadata({
    title: referenzen.metadata.title,
    description: referenzen.metadata.description,
    path: '/referenzen',
})

const images = [Tonnentour, AIAssistant, PacePlaner]

/**
 * Renders the references page: the tools built for this city, as tiles.
 */
export default function Referenzen(): ReactElement {
    return (
        <>
            <NavigationTopComponent />
            <main className="flex flex-col py-10 pb-20 px-4 sm:px-8 max-w-7xl w-full min-w-0 gap-24 lg:gap-32 overflow-x-clip">
                <section className="flex flex-col items-center text-center gap-6 max-w-3xl w-full mx-auto">
                    <h1 className={`reveal text-h1 font-bold ${textPrimary} text-balance`} style={{ '--i': 0 } as React.CSSProperties}>
                        {referenzen.hero.h1}
                    </h1>
                    <p className={`reveal text-xl leading-relaxed ${textMuted} text-balance`} style={{ '--i': 1 } as React.CSSProperties}>
                        {referenzen.hero.intro}
                    </p>
                </section>

                <section className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                    {referenzen.produkte.map((produkt, index) => (
                        <div key={produkt.title} className={`flex flex-col overflow-hidden ${tile}`}>
                            <div className="relative w-full aspect-[4/3]">
                                <Image
                                    className="object-contain object-bottom p-6"
                                    loading="eager"
                                    alt={produkt.imageAlt}
                                    src={images[index]}
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                    fill
                                />
                            </div>
                            <div className="flex flex-col gap-3 p-8 pt-4 grow">
                                <h2 className={`text-2xl font-bold ${textHeading}`}>{produkt.title}</h2>
                                <p className={`text-body ${textBody}`}>{produkt.text}</p>
                                <div className="pt-1 mt-auto">
                                    <Link className={pillButton} href={produkt.cta.href} target="_blank">
                                        {produkt.cta.label}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                <section className="relative flex flex-col items-center text-center gap-6 py-10">
                    <div aria-hidden className="lamp-light left-1/2 -translate-x-1/2 -top-40 w-[52rem] h-[52rem]" />
                    <p className={`relative text-xl leading-relaxed ${textMuted} max-w-2xl text-balance`}>{referenzen.kontakt.text}</p>
                    <div className="relative flex flex-col items-center gap-3 pt-2">
                        <Link className={buttonPrimary} href={referenzen.kontakt.cta.href}>
                            {referenzen.kontakt.cta.label}
                        </Link>
                        <span className={`${textData} text-sm ${textMuted}`}>mail@kevinheyland.com</span>
                    </div>
                </section>
            </main>
            <FooterComponent />
        </>
    )
}
