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
            <body className="flex min-h-screen w-full flex-col items-center justify-center">
                <NavigationTopComponent />
                {children}
            </body>
        </html>
    )
}
