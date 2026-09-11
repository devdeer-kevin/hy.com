import type { Metadata } from 'next'
import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import { glass } from '../../../components/theme'
import { datenschutz } from '../../../content/datenschutz'
import { pageMetadata } from '../seo'

export const metadata: Metadata = pageMetadata({
    title: datenschutz.metadata.title,
    description: datenschutz.metadata.description,
    path: '/datenschutz',
})

export default function Datenschutz(): React.ReactElement {
    return (
        <div className="flex flex-col w-full max-w-3xl px-4 sm:px-8 py-24 gap-8">
            <div className="absolute top-6 left-4 sm:left-8 text-sm">
                <Link className="flex flex-row gap-2 items-center text-slate-50/60 hover:text-slate-50/90 transition-colors" href="/">
                    <ArrowLeftIcon className="h-4 w-4" />
                    Zur Startseite
                </Link>
            </div>
            <h1 className="text-4xl font-bold text-slate-50/70">{datenschutz.h1}</h1>
            <div className={`flex flex-col gap-6 px-7 sm:px-10 py-10 text-slate-300 leading-7 text-md ${glass}`}>
                <section className="flex flex-col gap-2">
                    <h2 className="text-lg font-bold text-slate-50/90">{datenschutz.verantwortlicher.title}</h2>
                    <p>
                        {datenschutz.verantwortlicher.name}
                        <br />
                        E-Mail:{' '}
                        <a className="underline hover:text-slate-100 transition-colors" href={`mailto:${datenschutz.verantwortlicher.mail}`}>
                            {datenschutz.verantwortlicher.mail}
                        </a>
                    </p>
                </section>
                {datenschutz.abschnitte.map((abschnitt) => (
                    <section key={abschnitt.title} className="flex flex-col gap-2">
                        <h2 className="text-lg font-bold text-slate-50/90">{abschnitt.title}</h2>
                        <p>{abschnitt.text}</p>
                    </section>
                ))}
            </div>
        </div>
    )
}
