import type { Metadata } from 'next'
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
        <html lang="en">
            <body className="flex flex-col min-h-screen w-full items-center  bg-gradient-to-r from-slate-900 to-indigo-950">
                <NavigationTopComponent />
                {children}
            </body>
        </html>
    )
}
