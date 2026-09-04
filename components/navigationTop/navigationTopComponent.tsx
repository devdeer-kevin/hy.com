'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Logo from '../../public/HY_LOGO218.png'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

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
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                active ? 'bg-white/10 text-slate-50' : 'text-slate-300 hover:text-slate-50 hover:bg-white/10'
            }`}
            href={item.href}
            onClick={onNavigate}>
            {item.label}
        </Link>
    )
}

/**
 * Renders the top navigation: logo and name on the left, the navigation on
 * the right, and a quiet breadcrumb underneath on subpages. On small screens
 * the navigation collapses into a disclosure menu that only moves when asked.
 */
export default function NavigationTopComponent(): React.ReactElement {
    const pathname: string = usePathname()
    const segment: string = pathname.split('/')[1]
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="flex flex-col w-full z-10 py-6 sm:px-8 px-4 max-w-7xl gap-4">
            <div className="flex flex-row w-full justify-between items-center">
                <Link className="flex flex-row items-center gap-3" href="/">
                    <Image className="w-10 h-10 rounded-full bg-slate-600/60" loading="eager" src={Logo} alt="HY-Logo" width={100} height={100} />
                    <span className="font-medium text-sm text-slate-50/90">Kevin Heyland</span>
                </Link>
                <div className="hidden sm:flex flex-row items-center gap-1">
                    {navItems.map((item) => (
                        <NavLink key={item.href} item={item} active={item.segment !== undefined && item.segment === segment} />
                    ))}
                </div>
                <button
                    aria-expanded={menuOpen}
                    aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
                    className="sm:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/10 border-t-white/20 text-slate-50/90"
                    onClick={() => setMenuOpen(!menuOpen)}
                    type="button">
                    {menuOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
                </button>
            </div>
            {menuOpen && (
                <div className="sm:hidden flex flex-col gap-1 rounded-3xl bg-slate-400/10 backdrop-blur-xl border border-white/10 border-t-white/20 p-2">
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
