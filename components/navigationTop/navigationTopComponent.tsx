'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Logo from '../../public/HY_LOGO218.png'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { glass } from '../theme'

/**
 * Human-readable labels for the route segments.
 */
const segmentLabels: Record<string, { label: string; parent?: { label: string; href: string } }> = {
    'ueber-mich': { label: 'Über mich' },
    referenzen: { label: 'Referenzen' },
    impressum: { label: 'Impressum' },
    datenschutz: { label: 'Datenschutz' },
    'ki-workshop-magdeburg': { label: 'KI-Werkstatt', parent: { label: 'Angebote', href: '/#angebote' } },
}

/**
 * The header navigation. "Angebote" has no own route yet and links to the
 * anchor section on the start page instead of a dead route.
 */
const navItems: { label: string; href: string; segment?: string }[] = [
    { label: 'Angebote', href: '/#angebote' },
    { label: 'Referenzen', href: '/referenzen', segment: 'referenzen' },
    { label: 'Über mich', href: '/ueber-mich', segment: 'ueber-mich' },
]

/**
 * A single navigation link with a visible active state.
 */
function NavLink({ item, active, onNavigate }: { item: (typeof navItems)[number]; active: boolean; onNavigate?: () => void }): React.ReactElement {
    return (
        <Link
            aria-current={active ? 'page' : undefined}
            className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${active ? 'bg-white/15 text-slate-50' : 'text-slate-300 hover:text-slate-50 hover:bg-white/10'}`}
            href={item.href}
            onClick={onNavigate}>
            {item.label}
        </Link>
    )
}

/**
 * Renders the navigation as a centered floating glass toolbar, visionOS
 * style: the logo and name on the left end of the pill, the links next to
 * it. It stays at the top while scrolling. On small screens the links
 * collapse into a disclosure menu that only moves when asked. Subpages get
 * a quiet breadcrumb underneath.
 */
export default function NavigationTopComponent(): React.ReactElement {
    const pathname: string = usePathname()
    const segment: string = pathname.split('/')[1]
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-30 flex flex-col w-full max-w-7xl items-center gap-3 pt-4 pb-2 sm:px-8 px-4">
            <div className={`flex flex-row items-center gap-1 rounded-full pl-1.5 pr-1.5 py-1.5 ${glass}`}>
                <Link className="flex flex-row items-center gap-2.5 pr-3 rounded-full" href="/">
                    <Image className="w-9 h-9 rounded-full bg-slate-600/60" loading="eager" src={Logo} alt="HY-Logo" width={100} height={100} />
                    <span className="font-medium text-sm text-slate-50/90">Kevin Heyland</span>
                </Link>
                <span className="mx-1 h-5 w-px bg-white/10 hidden sm:block" aria-hidden />
                <div className="hidden sm:flex flex-row items-center gap-1">
                    {navItems.map((item) => (
                        <NavLink key={item.href} item={item} active={item.segment !== undefined && item.segment === segment} />
                    ))}
                </div>
                <button
                    aria-expanded={menuOpen}
                    aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
                    className="sm:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-slate-50/90"
                    onClick={() => setMenuOpen(!menuOpen)}
                    type="button">
                    {menuOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
                </button>
            </div>
            {menuOpen && (
                <div className={`sm:hidden flex flex-col gap-1 w-full p-2 ${glass}`}>
                    {navItems.map((item) => (
                        <NavLink key={item.href} item={item} active={item.segment !== undefined && item.segment === segment} onNavigate={() => setMenuOpen(false)} />
                    ))}
                </div>
            )}
            {segment && (
                <div className="flex flex-row items-center gap-2 text-sm">
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
        </nav>
    )
}
