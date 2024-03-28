import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Code Calms Cognition',
    description: 'Exploring the intersection of software coding and cognitive processes creatively.',
    robots: 'index, follow',
}

export default function BlogLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return <section className="flex flex-col min-h-screen w-full items-center bg-gradient-to-br from-slate-950 to-indigo-950">{children}</section>
}
