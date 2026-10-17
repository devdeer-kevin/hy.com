import { textBody, textHeading, textMuted, tile } from '../theme'
import type { IChapter } from '../../content/home'

/**
 * A small pill-shaped skill tag. No border: depth comes from brightness alone.
 */
function Chip({ children }: { children: React.ReactNode }): React.ReactElement {
    return <span className="rounded-full bg-white/[0.08] px-3 py-1 text-xs font-medium text-slate-300">{children}</span>
}

/**
 * Renders the career timeline like a datasheet. From lg up the era stands
 * in its own column on the left and a rail with one dot per chapter
 * separates it from title, role and text, so the tile is filled instead of
 * half empty. On phones the rail goes away and the era line alone keeps
 * the order, which gives the text the full width of the tile. The
 * chapters come from `content/`.
 */
export default function CareerComponent({ chapters }: { chapters: IChapter[] }): React.ReactElement {
    return (
        <div className={`relative flex flex-col py-8 px-5 sm:py-10 sm:px-10 lg:px-14 ${tile}`}>
            {/* Die Schiene zwischen Ära und Inhalt, nur ab lg. Ihre Position ist Innenabstand plus Ära-Spalte plus Spaltenabstand. */}
            <span aria-hidden className="hidden lg:block absolute top-10 bottom-10 left-[18rem] xl:left-[22rem] w-px bg-white/10" />
            <ol className="flex flex-col gap-12">
                {chapters.map((chapter) => (
                    <li key={chapter.title} className="grid grid-cols-1 lg:grid-cols-[12rem_1fr] xl:grid-cols-[16rem_1fr] gap-x-10 gap-y-2">
                        <p className={`font-mono text-sm ${textMuted} lg:pt-1.5`}>{chapter.era}</p>
                        <div className="relative flex flex-col gap-2 lg:pl-10">
                            <span
                                aria-hidden
                                className={`hidden lg:block absolute -left-[0.3125rem] top-2 w-2.5 h-2.5 rounded-full ${
                                    chapter.current ? 'bg-ink ring-4 ring-ink/15' : 'bg-slate-500/80 ring-4 ring-slate-500/15'
                                }`}
                            />
                            <h3 className={`text-h3 font-bold ${textHeading}`}>{chapter.title}</h3>
                            <p className={`text-sm font-medium ${textMuted}`}>{chapter.role}</p>
                            <p className={`text-body ${textBody} max-w-[58ch] pt-1`}>{chapter.text}</p>
                            <div className="flex flex-row flex-wrap gap-2 pt-2">
                                {chapter.skills.map((skill) => (
                                    <Chip key={skill}>{skill}</Chip>
                                ))}
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    )
}
