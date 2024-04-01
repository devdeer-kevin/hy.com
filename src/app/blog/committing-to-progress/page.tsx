import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Committing to Progress: My Daily Coding Habit',
    description:
        'For almost a month now, I&apos;ve embraced a personal challenge that&apos;s reshaped my approach to coding: making at least one commit to my private repositories every single day. This simple, yet impactful habit has become a cornerstone of my daily routine, offering unexpected benefits in staying engaged, organized, and structured in my coding journey.',
    robots: 'index, follow',
}

export default function BlogLandingPage(): React.ReactElement {
    return (
        <div className="flex flex-col justify-center items-center py-8 lg:py-8 px-4 sm:px-8 max-w-7xl lg:gap-16 gap-12">
            <div className="flex flex-col bg-gray-950 bg-opacity-30 backdrop-blur-lg lg:p-16 py-16 px-8 rounded-2xl border-2 border-t-gray-200/30 border-l-gray-200/30 border-r-gray-300/20 border-b-gray-300/20 shadow-2xl">
                <div className="absolute left-6 top-6">
                    <Link href="/blog">
                        <ArrowLeftIcon className="h-6 w-6 text-slate-50 hover:opacity-80 transition" />
                    </Link>
                </div>
                <div className="flex flex-col max-h-[500px] overflow-y-auto px-2">
                    <div>
                        <h1 className="text-4xl pb-2 font-bold text-slate-50">Committing to Progress</h1>
                        <h3 className="text-2xl pb-2 font-normal text-slate-50">My daily coding habit</h3>
                    </div>
                    <div className="text-md leading-7 font-sans text-slate-50 font-normal">
                        <p className="text-slate-50">
                            Since the beginning of March 2024, I&apos;ve embraced a personal challenge that&apos;s reshaped my approach to coding: making at least one commit to my
                            private repositories every single day. This simple, yet impactful habit has become a cornerstone of my daily routine, offering unexpected benefits in
                            staying engaged, organized, and structured in my coding journey.
                        </p>
                        <p className="text-slate-50">
                            Staying consistent doesn&apos;t always mean large, time-consuming updates. Indeed, not every day grants us the luxury of hours of uninterrupted coding
                            time. Some days, my commitment might be as grand as adding a new feature or refining an existing function. Other days, time constraints mean my
                            contributions are modest—sometimes, it&apos;s just an update to a `package.json`. Yet, regardless of the size or significance of the commit, each one
                            serves a purpose. These daily check-ins keep me connected to my projects, maintaining a thread of continuity even on the busiest of days. It&apos;s a
                            touchpoint that says, &quot;I&apos;m still here, and I&apos;m still pushing forward,&quot; a mantra that&apos;s become crucial in my journey. This
                            practice has instilled a sense of discipline and motivation within me. On days when progress feels slow, the act of making even a small commit is a
                            reminder of the incremental steps towards larger goals. It&apos;s oddly satisfying and empowering to see the commit history grow, each entry a testament
                            to perseverance and growth. Moreover, this habit promotes a reflective and organized mindset. It forces me to plan, to think about what small task I can
                            accomplish each day, and how each task fits into the broader picture of my projects.
                        </p>
                        <p className="text-slate-50">
                            This daily engagement doesn&apos;t just keep my projects alive; it keeps my passion for them burning brightly, fostering a sense of accomplishment and
                            joy from the simple act of contribution. In essence, these daily commits are more than just updates to my projects; they&apos;re a commitment to my
                            growth as a developer, a strategy to keep the momentum going, and a daily ritual that keeps me motivated, happy, and engaged. It&apos;s a reminder that
                            progress, no matter how small, is still progress—and every step forward is worth celebrating.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
