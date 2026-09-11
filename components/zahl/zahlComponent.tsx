'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * A number that counts up once when it first scrolls into view. Renders the
 * final value on the server and under prefers-reduced-motion.
 */
export default function ZahlComponent({ wert, className = '' }: { wert: string; className?: string }): React.ReactElement {
    const ziel = Number(wert)
    const ref = useRef<HTMLSpanElement>(null)
    const [anzeige, setAnzeige] = useState(wert)

    useEffect(() => {
        const element = ref.current
        if (!element || Number.isNaN(ziel) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return
        }
        let frame = 0
        const observer = new IntersectionObserver(
            (entries) => {
                if (!entries.some((entry) => entry.isIntersecting)) return
                observer.disconnect()
                const start = performance.now()
                const dauer = 1100
                const tick = (now: number): void => {
                    const t = Math.min(1, (now - start) / dauer)
                    const eased = 1 - Math.pow(1 - t, 3)
                    setAnzeige(String(Math.round(ziel * eased)))
                    if (t < 1) frame = window.requestAnimationFrame(tick)
                }
                setAnzeige('0')
                frame = window.requestAnimationFrame(tick)
            },
            { threshold: 0.6 },
        )
        observer.observe(element)
        return () => {
            observer.disconnect()
            window.cancelAnimationFrame(frame)
        }
    }, [ziel])

    return (
        <span ref={ref} className={`tabular-nums ${className}`}>
            {anzeige}
        </span>
    )
}
