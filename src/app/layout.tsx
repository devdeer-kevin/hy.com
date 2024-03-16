import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import NavigationTopComponent from '../../components/navigationTop'

export const metadata: Metadata = {
    title: 'Kevin Heyland',
    description: 'Code, Creativity & Change: Navigating the Digital Frontier',
    robots: 'index, follow',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
            <body className="flex flex-col min-h-screen w-full items-center bg-gradient-to-br from-slate-950 to-indigo-950">
                <NavigationTopComponent />
                {children}
            </body>
        </html>
    )
}
