import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Committing to Progress: My Daily Coding Habit',
    description:
        'For almost a month now, I&apos;ve embraced a personal challenge that&apos;s reshaped my approach to coding: making at least one commit to my private repositories every single day. This simple, yet impactful habit has become a cornerstone of my daily routine, offering unexpected benefits in staying engaged, organized, and structured in my coding journey.',
    robots: 'index, follow',
}

export default function BlogLandingPage() {
    return (
        <div className="flex flex-col py-8 lg:py-8 px-4 sm:px-8 max-w-7xl lg:gap-16 gap-12">
            <div>
                <h1 className="text-4xl pb-2 font-bold text-slate-50 opacity-70">Committing to Progress: My Daily Coding Habit</h1>
                <p className="text-md leading-7 font-sans text-slate-300 opacity-70 font-medium">
                    Since the beginning of March 2024, I&apos;ve embraced a personal challenge that&apos;s reshaped my approach to coding: making at least one commit to my private
                    repositories every single day. This simple, yet impactful habit has become a cornerstone of my daily routine, offering unexpected benefits in staying engaged,
                    organized, and structured in my coding journey. Staying consistent doesn&apos;t always mean large, time-consuming updates. Indeed, not every day grants us the
                    luxury of hours of uninterrupted coding time. Some days, my commitment might be as grand as adding a new feature or refining an existing function. Other days,
                    time constraints mean my contributions are modest—sometimes, it&apos;s just an update to a `package.json`. Yet, regardless of the size or significance of the
                    commit, each one serves a purpose. These daily check-ins keep me connected to my projects, maintaining a thread of continuity even on the busiest of days.
                    It&apos;s a touchpoint that says, &quot;I&apos;m still here, and I&apos;m still pushing forward,&quot; a mantra that&apos;s become crucial in my journey. This
                    practice has instilled a sense of discipline and motivation within me. On days when progress feels slow, the act of making even a small commit is a reminder of
                    the incremental steps towards larger goals. It&apos;s oddly satisfying and empowering to see the commit history grow, each entry a testament to perseverance and
                    growth. Moreover, this habit promotes a reflective and organized mindset. It forces me to plan, to think about what small task I can accomplish each day, and
                    how each task fits into the broader picture of my // eslint-disable-next-line react/no-unescaped-entities projects. This daily engagement doesn&apos;t just keep
                    my projects alive; it keeps my passion for them burning brightly, fostering a sense of accomplishment and joy from the simple act of contribution. In essence,
                    these daily commits are more than just updates to my projects; they&apos;re a commitment to my growth as a developer, a strategy to keep the momentum going, and
                    a daily ritual that keeps me motivated, happy, and engaged. It&apos;s a reminder that progress, no matter how small, is still progress—and every step forward is
                    worth celebrating.
                </p>
            </div>
        </div>
    )
}
