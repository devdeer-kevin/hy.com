import { glass } from '../theme'
import type { IChapter } from '../../content/ueber-mich'

/**
 * A small pill-shaped skill tag.
 */
function Chip({ children }: { children: React.ReactNode }): React.ReactElement {
    return <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-slate-300">{children}</span>
}

/**
 * Renders the career timeline. The chapters come from `content/`.
 */
export default function CareerComponent({ chapters }: { chapters: IChapter[] }): React.ReactElement {
    return (
        <div className={`flex flex-col pt-10 pb-10 px-6 sm:px-10 ${glass}`}>
            <div className="flex flex-col gap-12 relative border-l border-white/10 pl-8 ml-2">
                {chapters.map((chapter) => (
                    <div key={chapter.title} className="flex flex-col gap-2 relative">
                        <span
                            className={`absolute -left-[2.35rem] top-1.5 w-2.5 h-2.5 rounded-full ${
                                chapter.current ? 'bg-teal-300/80 ring-4 ring-teal-300/15' : 'bg-slate-500/80 ring-4 ring-slate-500/15'
                            }`}
                        />
                        <p className="font-mono text-sm text-slate-400">{chapter.era}</p>
                        <h3 className="text-2xl font-sans font-bold text-slate-50/90">{chapter.title}</h3>
                        <p className="text-sm font-medium text-slate-400">{chapter.role}</p>
                        <p className="text-md leading-7 font-sans text-slate-300 max-w-3xl pt-1">{chapter.text}</p>
                        <div className="flex flex-row flex-wrap gap-2 pt-2">
                            {chapter.skills.map((skill) => (
                                <Chip key={skill}>{skill}</Chip>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
