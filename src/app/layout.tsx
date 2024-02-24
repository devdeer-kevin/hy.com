import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Kevin Heyland',
    description: 'Whitness the simplicity of Next.js and Tailwind CSS',
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
