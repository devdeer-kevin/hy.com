import type { Metadata } from 'next'
import Image from 'next/image'
import Background from '../../../public/blog-background.jpg'

export const metadata: Metadata = {
    title: 'Code Calms Cognition',
    description: 'Exploring the intersection of software coding and cognitive processes creatively.',
    robots: 'index, follow',
}

export default function BlogLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}): React.ReactElement {
    return (
        <section className="flex flex-col w-full h-screen justify-center items-center pt-safe pl-safe pb-safe pr-safe">
            <Image loading="eager" alt="Background Image" src={Background} fill style={{ objectFit: 'cover' }} />
            {children}
        </section>
    )
}
