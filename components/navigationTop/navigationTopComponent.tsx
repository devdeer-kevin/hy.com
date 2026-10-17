'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Logo from '../../public/hy-logo.png'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { toolbar } from '../theme'

/**
 * Human-readable labels for the route segments.
 */
const segmentLabels: Record<string, { label: string; parent?: { label: string; href: string } }> = {
    'ki-beratung': { label: 'Angebote' },
    referenzen: { label: 'Referenzen' },
    impressum: { label: 'Impressum' },
    datenschutz: { label: 'Datenschutz' },
    'ki-workshop-magdeburg': { label: 'KI-Werkstatt', parent: { label: 'Angebote', href: '/ki-beratung' } },
}

/**
 * The header navigation. The start page is about the person and is reached
 * through the logo; the offers live under /ki-beratung.
 */
const navItems: { label: string; href: string; segment?: string }[] = [
    { label: 'Angebote', href: '/ki-beratung', segment: 'ki-beratung' },
    { label: 'Referenzen', href: '/referenzen', segment: 'referenzen' },
]

/**
 * Closes the disclosure menu once a link inside it was chosen.
 */
function closeMenu(event: React.MouseEvent<HTMLAnchorElement>): void {
    event.currentTarget.closest('details')?.removeAttribute('open')
}

/**
 * A single navigation link with a visible active state.
 */
function NavLink({ item, active, inMenu }: { item: (typeof navItems)[number]; active: boolean; inMenu?: boolean }): React.ReactElement {
    return (
        <Link
            aria-current={active ? 'page' : undefined}
            className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${inMenu ? 'py-2.5' : ''} ${
                active ? 'bg-white/15 text-slate-50' : 'text-slate-300 hover:text-slate-50 hover:bg-white/10'
            }`}
            href={item.href}
            onClick={inMenu ? closeMenu : undefined}>
            {item.label}
        </Link>
    )
}

/**
 * Renders the navigation as a centered floating glass toolbar, visionOS
 * style: the mark and the name on the left end of the pill, the links next
 * to it. The mark stands 28px tall straight on the glass, no backing disc.
 * On the start page the pill shows only the mark, because the H1 right
 * below already carries the name. Only the pill stays at the top while
 * scrolling. On small screens the links live in a native disclosure that
 * works before any script has loaded. Subpages without a pill of their own
 * get a quiet breadcrumb underneath that scrolls away; a page the toolbar
 * already marks as active would only repeat itself.
 */
export default function NavigationTopComponent(): React.ReactElement {
    const pathname: string = usePathname()
    const segment: string = pathname.split('/')[1]
    const isHome: boolean = pathname === '/'
    const inToolbar: boolean = navItems.some((item) => item.segment === segment)

    return (
        <>
            <nav className="sticky top-0 z-30 flex w-full max-w-7xl justify-center pt-4 pb-2 sm:px-8 px-4">
                <div className={`flex flex-row items-center gap-1 pl-1.5 pr-1.5 py-1.5 ${toolbar}`}>
                    <Link aria-label="Kevin Heyland, zur Startseite" className="flex flex-row items-center gap-2.5 h-9 px-2.5 rounded-full" href="/">
                        <Image className="h-7 w-auto" loading="eager" src={Logo} alt="" width={41} height={56} />
                        {!isHome && <span className="font-medium text-sm text-slate-50/90">Kevin Heyland</span>}
                    </Link>
                    <span className="mx-1 h-5 w-px bg-white/10 hidden sm:block" aria-hidden />
                    <div className="hidden sm:flex flex-row items-center gap-1">
                        {navItems.map((item) => (
                            <NavLink key={item.href} item={item} active={item.segment !== undefined && item.segment === segment} />
                        ))}
                    </div>
                    <details className="group sm:hidden">
                        <summary
                            aria-label="Menü"
                            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-slate-50/90 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                            <Bars3Icon className="w-5 h-5 group-open:hidden" />
                            <XMarkIcon className="w-5 h-5 hidden group-open:block" />
                        </summary>
                        {/* Fest zum Viewport, so breit wie die Leiste: 16px Rand wie ihr px-4, 4.5rem ist Oberkante plus Höhe der Pille. */}
                        <div className="fixed left-4 right-4 top-[4.5rem] flex flex-col gap-1 p-2 rounded-3xl bg-navy-950/90 backdrop-blur-xl border border-white/10 border-t-white/20">
                            {navItems.map((item) => (
                                <NavLink key={item.href} item={item} active={item.segment !== undefined && item.segment === segment} inMenu />
                            ))}
                        </div>
                    </details>
                </div>
            </nav>
            {segment && !inToolbar && (
                <div className="flex flex-row items-center justify-center gap-2 text-sm w-full max-w-7xl pt-2 pb-1 sm:px-8 px-4">
                    <Link className="font-medium text-slate-50/60 hover:text-slate-50/90 transition-colors" href="/">
                        Start
                    </Link>
                    {segmentLabels[segment]?.parent && (
                        <>
                            <ChevronRightIcon className="w-4 h-4 text-slate-50/35" />
                            <Link className="font-medium text-slate-50/60 hover:text-slate-50/90 transition-colors" href={segmentLabels[segment].parent.href}>
                                {segmentLabels[segment].parent.label}
                            </Link>
                        </>
                    )}
                    <ChevronRightIcon className="w-4 h-4 text-slate-50/35" />
                    <span className="font-medium text-slate-50/90">{segmentLabels[segment]?.label ?? segment}</span>
                </div>
            )}
        </>
    )
}
