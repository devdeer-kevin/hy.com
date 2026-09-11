import type { Metadata } from 'next'
import Link from 'next/link'
import { pillButton, tile } from '../../components/theme'
import { notFound } from '../../content/not-found'

export const metadata: Metadata = {
    title: notFound.metadata.title,
    description: notFound.metadata.description,
    // Kein Canonical: von einer 404 aus zeigte es sonst auf die Startseite.
    alternates: {
        canonical: null,
    },
    robots: {
        index: false,
        follow: true,
    },
}

export default function NotFound(): React.ReactElement {
    return (
        <div className="flex flex-col items-center justify-center min-h-svh px-4">
            <div className={`flex flex-col items-center gap-4 px-10 py-12 text-center ${tile}`}>
                <p className="text-7xl font-sans font-bold text-slate-50/35">{notFound.code}</p>
                <h1 className="text-xl font-bold text-slate-50/90">{notFound.h1}</h1>
                <p className="text-md text-slate-400 max-w-sm text-balance">{notFound.intro}</p>
                <Link className={`${pillButton} mt-2`} href={notFound.cta.href}>
                    {notFound.cta.label}
                </Link>
            </div>
        </div>
    )
}
