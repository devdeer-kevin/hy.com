import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Kevin Heyland, B.Sc.',
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
            <body>{children}</body>
        </html>
    )
}
