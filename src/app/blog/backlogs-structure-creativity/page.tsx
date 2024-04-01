import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react' // Add missing import for React

export const metadata: Metadata = {
    title: 'Backlogs Structure Creativity',
    description: 'Blending Structure with Creativity: The Evolution of My Personal Backlogs',
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
                        <h1 className="text-4xl pb-2 font-bold text-slate-50">Backlogs Structure Creativity</h1>
                        <h3 className="text-2xl pb-2 font-normal text-slate-50">Blending Structure with Creativity: The Evolution of My Personal Backlogs</h3>
                    </div>
                    <div className="text-md leading-7 font-sans text-slate-50 font-normal">
                        <p className="text-slate-50">
                            This journey into structuring my personal projects with backlogs further illuminated a key distinction between my professional and private workflows.
                            While the essence of organization remained constant, I learned that private backlogs inherently adopt a different character—smaller, leaner, and marked
                            by a set of priorities unique from those dominating my work life.
                        </p>
                        <p className="text-slate-50">
                            In the context of my day job, prioritization is often governed by project deadlines, client needs, and strategic objectives. In contrast, my personal
                            backlogs, flourishing within the realm of Notion, embraced a distinct set of parameters. Here, questions like &quot;What new skill or technology can I
                            explore through this task?&quot; or &quot;How much time can I realistically dedicate?&quot; became central to my prioritization process. This shift in
                            criteria wasn&apos;t just a practical adjustment; it was a philosophical one. It underscored the realization that personal projects are not merely tasks
                            to be managed but opportunities for growth, exploration, and the joy of discovery. Unlike the external pressures that might drive professional
                            undertakings, my personal projects were guided by intrinsic motivation and the pure desire to learn and create.
                        </p>

                        <p className="text-slate-50">
                            Adapting to leaner, more fluid backlogs for my private endeavors, I nurtured an environment where creativity and learning were paramount. This bespoke
                            approach affirmed that even in the realm of structure and organization, there is ample room for flexibility—tailoring the methodology not just to the
                            project&apos;s scale but to its inherent goals.
                        </p>
                        <p className="text-slate-50">
                            In this nuanced world of personal project management, I found a harmonious balance. The meticulous planner from my professional life learned to embrace
                            a more adaptive, explorative approach in personal pursuits. The evolution of my private backlogs into tools of both order and inspiration has been a
                            testament to the idea that the art of project management is as diverse and adaptable as the projects themselves.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
