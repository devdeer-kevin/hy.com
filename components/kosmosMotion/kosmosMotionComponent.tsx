'use client'

import { useEffect } from 'react'

/**
 * Feeds the motion variables that the sky, the lamp and the hero tile read:
 * the scroll offset and the pointer position. Does nothing when the person
 * prefers reduced motion. Renders nothing.
 */
export default function KosmosMotionComponent(): null {
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return
        }
        const root = document.documentElement
        let scrollQueued = false
        let pointerQueued = false
        let pointer = { x: 0, y: 0 }

        const onScroll = (): void => {
            if (scrollQueued) return
            scrollQueued = true
            window.requestAnimationFrame(() => {
                root.style.setProperty('--scroll-y', String(window.scrollY))
                scrollQueued = false
            })
        }
        const onPointer = (event: PointerEvent): void => {
            pointer = { x: (event.clientX / window.innerWidth) * 2 - 1, y: (event.clientY / window.innerHeight) * 2 - 1 }
            if (pointerQueued) return
            pointerQueued = true
            const { clientX, clientY } = event
            window.requestAnimationFrame(() => {
                root.style.setProperty('--pointer-x', pointer.x.toFixed(3))
                root.style.setProperty('--pointer-y', pointer.y.toFixed(3))
                // Der Zeiger als Lichtquelle: jede Kachel bekommt seine Position in eigenen Koordinaten.
                document.querySelectorAll<HTMLElement>('.sheen').forEach((tile) => {
                    const rect = tile.getBoundingClientRect()
                    if (clientY < rect.top - 400 || clientY > rect.bottom + 400) return
                    tile.style.setProperty('--mx', `${Math.round(clientX - rect.left)}px`)
                    tile.style.setProperty('--my', `${Math.round(clientY - rect.top)}px`)
                })
                pointerQueued = false
            })
        }

        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        const finePointer = window.matchMedia('(pointer: fine)').matches
        if (finePointer) {
            window.addEventListener('pointermove', onPointer, { passive: true })
        }
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('pointermove', onPointer)
        }
    }, [])

    return null
}
