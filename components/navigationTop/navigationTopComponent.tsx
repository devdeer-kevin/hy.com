'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Logo from '../../public/HY_LOGO218.png'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

/**
 * Renders a component that displays the latest GitHub repositories of a user.
 * Fetches data from the GitHub API server side and displays the repository name, last push date, and a link to the repository.
 */
export default function NavigationTopComponent(): React.ReactElement {
    const pathname: string = usePathname()

    return (
        <nav className="flex flex-row w-full justify-between items-center py-6 sm:px-8 px-4 max-w-7xl">
            <div className="flex flex-row justify-between">
                <Link className="font-bold text-slate-50 opacity-35" href="/">
                    Home
                </Link>
                <div className="sm:px-6 px-2">
                    <ChevronRightIcon className="w-6 h-6 text-slate-50" />
                </div>
                <div className="text-slate-50">Kevin Heyland</div>
                {pathname !== '/' && (
                    <>
                        <div className="sm:px-6 px-2">
                            <ChevronRightIcon className="w-6 h-6 text-slate-50" />
                        </div>
                        <Link className="font-bold text-slate-50 opacity-35" href="/blog">
                            Code Calms Cognition
                        </Link>
                    </>
                )}
            </div>
            <div className="flex flex-row justify-end items-center">
                <Image className="w-10 h-10 rounded-full bg-slate-600 bg-opacity-60" loading="eager" src={Logo} alt="logo" width={100} height={100} />
            </div>
        </nav>
    )
}
