import Link from 'next/link'
import { glass, pillButton } from '../../components/theme'

export default function NotFound(): React.ReactElement {
    return (
        <div className="flex flex-col items-center justify-center min-h-svh px-4">
            <div className={`flex flex-col items-center gap-4 px-10 py-12 text-center ${glass}`}>
                <p className="text-7xl font-sans font-bold text-slate-50/35">404</p>
                <h1 className="text-xl font-bold text-slate-50/90">This page does not exist.</h1>
                <p className="text-md text-slate-400 max-w-sm text-balance">The address may be outdated or misspelled. Everything that exists lives on the start page.</p>
                <Link className={`${pillButton} mt-2`} href="/">
                    Back to start
                </Link>
            </div>
        </div>
    )
}
