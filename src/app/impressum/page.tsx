import type { Metadata } from 'next'
import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import { impressum } from '../../../content/impressum'

export const metadata: Metadata = {
    title: impressum.metadata.title,
    description: impressum.metadata.description,
    alternates: {
        canonical: '/impressum',
    },
    openGraph: {
        title: impressum.metadata.title,
        description: impressum.metadata.description,
        url: 'https://kevinheyland.com/impressum',
        siteName: 'Kevin Heyland',
        type: 'website',
        locale: 'de_DE',
    },
}

export default function Impressum(): React.ReactElement {
    return (
        <>
            <div className="absolute top-6 left-4 sm:left-8 w-full text-sm">
                <Link className="flex flex-row gap-2 items-center text-slate-50/60 hover:text-slate-50/90 transition-colors" href="/">
                    <ArrowLeftIcon className="h-4 w-4" />
                    Zur Startseite
                </Link>
            </div>
            <h1 className="text-slate-400 text-xl font-mono">{impressum.h1}</h1>
            <div className="flex flex-col gap-6 text-slate-500 leading-6 text-center">
                <p className="text-sm font-mono">
                    {impressum.anbieter.map((zeile) => (
                        <span key={zeile}>
                            {zeile}
                            <br />
                        </span>
                    ))}
                </p>
                <p className="text-sm font-mono">
                    {impressum.kontakt.label}{' '}
                    <a className="underline hover:text-slate-300 transition-colors" href={`mailto:${impressum.kontakt.mail}`}>
                        {impressum.kontakt.mail}
                    </a>
                </p>
            </div>
        </>
    )
}
