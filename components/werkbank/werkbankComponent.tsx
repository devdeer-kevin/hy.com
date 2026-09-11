'use client'

import { useEffect, useRef, useState } from 'react'
import { textBody, textData, textHeading, textMuted, textPrimary } from '../theme'

/**
 * A station on the workbench: one day of the workshop.
 */
export interface IStation {
    label: string
    title: string
    paragraphs: string[]
    ergebnis: string
}

/** Tile brightness per station: the material gets brighter as the days progress. */
const stages = ['bg-white/[0.04]', 'bg-white/[0.07]', 'bg-white/[0.11]']

/**
 * The workbench: three stations progressing left to right, sharing one light
 * edge on which the result lines sit. The only orchestrated motion on the
 * page: the stations reveal once when first visible, the lamp travels from
 * station 1 to 3 and rests there. Without JavaScript or with
 * prefers-reduced-motion the final state is shown right away.
 */
export default function WerkbankComponent({ stations }: { stations: IStation[] }): React.ReactElement {
    const last = stations.length - 1
    const ref = useRef<HTMLDivElement>(null)
    // Final state by default so content is never hidden without JavaScript.
    const [active, setActive] = useState(last)
    const [armed, setArmed] = useState(false)

    useEffect(() => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        const element = ref.current
        if (reduced || !element) {
            return
        }
        setArmed(true)
        setActive(-1)
        const observer = new IntersectionObserver(
            (entries) => {
                if (!entries.some((entry) => entry.isIntersecting)) {
                    return
                }
                observer.disconnect()
                stations.forEach((_, index) => {
                    window.setTimeout(() => setActive(index), 250 + index * 550)
                })
            },
            { threshold: 0.35 },
        )
        observer.observe(element)
        return () => observer.disconnect()
    }, [stations])

    return (
        <div ref={ref} className="relative">
            {/* Die Werkbank: eine durchgehende Lichtkante, auf der die Ergebniszeilen sitzen. */}
            <div aria-hidden className="absolute hidden lg:block left-0 right-0 bottom-20 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
            <div aria-hidden className="absolute lg:hidden top-0 bottom-0 left-4 w-px bg-linear-to-b from-transparent via-white/25 to-transparent" />
            <ol className="grid grid-cols-1 lg:grid-cols-3 gap-4 pl-10 lg:pl-0">
                {stations.map((station, index) => {
                    const visible = !armed || active >= index
                    const isActive = active === index
                    return (
                        <li
                            key={station.label}
                            className={`relative flex flex-col gap-4 p-8 pb-0 rounded-3xl transition-all duration-700 ease-out ${stages[index]} ${
                                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                            style={{ transitionDelay: visible && armed ? `${index * 120}ms` : '0ms' }}>
                            {/* Lampe: sitzt auf der Kante, leuchtet an der aktiven Station. */}
                            <span
                                aria-hidden
                                className={`absolute -left-[1.85rem] top-9 lg:left-1/2 lg:-translate-x-1/2 lg:top-auto lg:bottom-20 lg:translate-y-1/2 w-3 h-3 rounded-full transition-all duration-500 ${
                                    isActive ? 'bg-lamp ring-4 ring-lamp/25' : 'bg-white/20 ring-4 ring-white/5'
                                }`}
                            />
                            <span className={`${textData} text-sm ${textMuted}`}>{station.label}</span>
                            <h3 className={`text-h3 font-bold ${textHeading}`}>{station.title}</h3>
                            <div className="flex flex-col gap-3">
                                {station.paragraphs.map((text) => (
                                    <p key={text} className={`text-body ${textBody}`}>
                                        {text}
                                    </p>
                                ))}
                            </div>
                            <p className={`mt-auto h-20 flex items-center border-t border-white/15 text-body font-semibold ${textPrimary}`}>{station.ergebnis}</p>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}
