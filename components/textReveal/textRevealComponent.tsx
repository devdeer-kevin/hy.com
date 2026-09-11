'use client'

import { useEffect, useRef } from 'react'

/**
 * A paragraph whose words brighten as it scrolls into view, one after the
 * other. Without JavaScript or under prefers-reduced-motion every word is
 * fully visible.
 */
export default function TextRevealComponent({ text, className = '' }: { text: string; className?: string }): React.ReactElement {
    const ref = useRef<HTMLParagraphElement>(null)
    const words = text.split(' ')

    useEffect(() => {
        const element = ref.current
        if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return
        }
        let queued = false
        const update = (): void => {
            if (queued) return
            queued = true
            window.requestAnimationFrame(() => {
                const rect = element.getBoundingClientRect()
                const viewport = window.innerHeight
                // 0 when the paragraph enters at the bottom, 1 when its top reaches the upper third.
                const progress = (viewport - rect.top) / (viewport * 0.66)
                element.style.setProperty('--p', Math.max(0, Math.min(1.25, progress)).toFixed(3))
                queued = false
            })
        }
        update()
        window.addEventListener('scroll', update, { passive: true })
        window.addEventListener('resize', update)
        return () => {
            window.removeEventListener('scroll', update)
            window.removeEventListener('resize', update)
        }
    }, [])

    return (
        <p ref={ref} className={`text-reveal ${className}`}>
            {words.map((word, index) => (
                <span key={`${word}-${index}`} style={{ '--i': index / words.length } as React.CSSProperties}>
                    {word}
                    {index < words.length - 1 ? ' ' : ''}
                </span>
            ))}
        </p>
    )
}
