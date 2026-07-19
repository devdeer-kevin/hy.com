'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Logo from '../../public/HY_LOGO218.png'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

/**
 * Renders the top navigation: a quiet breadcrumb and the logo.
 */
export default function NavigationTopComponent(): React.ReactElement {
    const pathname: string = usePathname()
    const segment: string = pathname.split('/')[1]

    return (
        <nav className="flex flex-row w-full justify-between z-10 items-center py-6 sm:px-8 px-4 max-w-7xl">
            <div className="flex flex-row items-center gap-2 text-sm">
                <Link className="font-medium text-slate-50/60 hover:text-slate-50/90 transition-colors" href="/">
                    Home
                </Link>
                <ChevronRightIcon className="w-4 h-4 text-slate-50/35" />
                <span className="font-medium text-slate-50/90">Kevin Heyland</span>
                {segment && (
                    <>
                        <ChevronRightIcon className="w-4 h-4 text-slate-50/35" />
                        <span className="font-medium text-slate-50/60 capitalize">{segment}</span>
                    </>
                )}
            </div>
            <div className="flex flex-row justify-end items-center">
                <Link href="/">
                    <Image
                        className="w-10 h-10 rounded-full bg-slate-600/60 hover:ring-1 hover:ring-white/30 transition-all"
                        loading="eager"
                        src={Logo}
                        alt="HY logo"
                        width={100}
                        height={100}
                    />
                </Link>
            </div>
        </nav>
    )
}
