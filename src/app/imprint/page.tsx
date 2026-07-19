import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'

export default function Imprint() {
    return (
        <>
            <div className="absolute top-6 left-4 sm:left-8 w-full text-sm">
                <Link className="flex flex-row gap-2 items-center text-slate-50/60 hover:text-slate-50/90 transition-colors" href="/">
                    <ArrowLeftIcon className="h-4 w-4" />
                    Home
                </Link>
            </div>
            <h1 className="text-slate-400 text-xl font-mono">Impressum</h1>
            <div className="flex flex-col gap-6 text-slate-500 leading-6 text-center">
                <p className="text-sm font-mono">
                    Kevin Heyland
                    <br />
                    Herderstraße 31 <br />
                    39108 Magdeburg <br />
                    Deutschland
                </p>
                <p className="text-sm font-mono">
                    E-Mail:{' '}
                    <a className="underline hover:text-slate-300 transition-colors" href="mailto:mail@kevinheyland.com">
                        mail@kevinheyland.com
                    </a>
                </p>
            </div>
        </>
    )
}
