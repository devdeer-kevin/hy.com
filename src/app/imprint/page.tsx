import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'

export default function Imprint() {
    return (
        <>
            <div className="absolute top-4 left-4 text-slate-50 w-full">
                <Link className="flex flex-row gap-2 items-center font-bold text-slate-50 opacity-35" href="/">
                    <ArrowLeftIcon className="h-5 w-5 text-slate-50" />
                    Home
                </Link>
            </div>
            <h1 className="text-slate-600 text-xl font-mono">Impressum</h1>
            <div className="flex flex-col gap-6 text-slate-600 leading-6 text-center">
                <p className="text-sm text-slate-600 font-mono">
                    Kevin Heyland
                    <br />
                    Herderstraße 31 <br />
                    39108 Magdeburg <br />
                    Deutschland
                </p>
            </div>
        </>
    )
}
