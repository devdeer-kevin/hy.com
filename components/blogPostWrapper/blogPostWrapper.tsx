import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/16/solid'

/**
 * The component that wraps a blog post page with a consistent layout.
 */
export default function BlogPostWrapper({
    children, // will be the nested layout aka blog post content
}: {
    children: React.ReactNode
}): React.ReactElement {
    return (
        <div className="flex flex-col max-w-[1150px] bg-gray-950 bg-opacity-30 backdrop-blur-sm lg:pt-16 lg:pb:16 pt-16 pb-12 px-8 sm:rounded-2xl sm:border-2 sm:border-t-gray-200/30 sm:border-l-gray-200/30 sm:border-r-gray-300/20 sm:border-b-gray-300/20 shadow-2xl">
            <div className="absolute left-6 top-6">
                <Link href="/blog">
                    <ArrowLeftIcon className="h-6 w-6 text-slate-50 hover:opacity-80 transition" />
                </Link>
            </div>
            <div className="flex flex-col lg:max-h-[500px] overflow-y-auto px-2">{children}</div>
        </div>
    )
}
