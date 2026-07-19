import Link from 'next/link'
import { ArrowUpRightIcon } from '@heroicons/react/16/solid'

/**
 * A single link inside the dock.
 */
function DockLink({ href, label, external }: { href: string; label: string; external?: boolean }): React.ReactElement {
    return (
        <Link
            className="flex flex-row items-center gap-1 px-3 py-1.5 rounded-full text-sm text-slate-300 hover:text-slate-50 hover:bg-white/10 transition-colors"
            href={href}
            target={external ? '_blank' : undefined}
        >
            {label}
            {external && <ArrowUpRightIcon className="h-3.5 w-3.5 opacity-50" />}
        </Link>
    )
}

/**
 * The footer: a floating glass dock with navigation and a quiet colophon.
 */
export default function FooterComponent(): React.ReactElement {
    return (
        <footer className="flex flex-col w-full max-w-7xl items-center justify-center py-12 sm:px-8 px-4 gap-6">
            <div className="flex flex-row flex-wrap items-center justify-center gap-1 rounded-full bg-slate-400/10 backdrop-blur-xl border border-white/10 border-t-white/20 shadow-xl shadow-slate-950/40 px-2 py-1.5">
                <DockLink href="#about" label="About" />
                <DockLink href="#career" label="Career" />
                <DockLink href="#products" label="Products" />
                <DockLink href="#opensource" label="Open Source" />
                <span className="mx-1 h-5 w-px bg-white/10" aria-hidden />
                <DockLink href="https://devdeer.com" label="DEVDEER" external />
                <DockLink href="https://github.com/devdeer-kevin" label="GitHub" external />
                <DockLink href="https://www.linkedin.com/in/kevin-heyland-003b1456/" label="LinkedIn" external />
                <DockLink href="/imprint" label="Imprint" />
                <DockLink href="/privacy" label="Privacy" />
            </div>
            <p className="text-center text-xs text-slate-500">
                Built with Next.js and Tailwind.{' '}
                <Link className="underline hover:text-slate-300 transition-colors" href="https://github.com/devdeer-kevin/hy.com" target="_blank">
                    Source on GitHub
                </Link>
                . Portrait by{' '}
                <Link className="underline hover:text-slate-300 transition-colors" href="https://www.giovannagahrns.com" target="_blank">
                    Giovanna Veronica Gahrns
                </Link>
                . No cookies, no tracking.
            </p>
        </footer>
    )
}
