import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

const description = 'Partner & Head of Operations at DEVDEER. Cloud architectures by day, free tools for Magdeburg after hours.'

export const metadata: Metadata = {
    metadataBase: new URL('https://kevinheyland.com'),
    title: 'Kevin Heyland',
    description,
    robots: 'index, follow',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Kevin Heyland',
        description,
        url: 'https://kevinheyland.com',
        siteName: 'Kevin Heyland',
        type: 'website',
        locale: 'en_US',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>): React.ReactElement {
    return (
        <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
            <body className="flex flex-col justify-center w-full items-center bg-linear-to-br from-slate-950 via-slate-950 to-indigo-950">
                <div aria-hidden className="ambient" />
                {children}
            </body>
        </html>
    )
}
