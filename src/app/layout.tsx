import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
    title: 'Kevin Heyland',
    description: 'Code, Creativity & Change: Navigating the Digital Frontier',
    robots: 'index, follow',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>): React.ReactElement {
    return (
        <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
            <body className="flex flex-col justify-center w-full items-center bg-gradient-to-br from-slate-950 to-indigo-950">
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
