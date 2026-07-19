import { UserGroupIcon, CheckBadgeIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { glass, glassCard } from '../theme'

/**
 * A chapter of the career timeline.
 */
interface IChapter {
    era: string
    title: string
    role: string
    text: string
    skills: string[]
    current?: boolean
}

/**
 * A guiding value with an icon and a short explanation.
 */
interface IValue {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    title: string
    text: string
}

const chapters: IChapter[] = [
    {
        era: '2006 – 2010',
        title: 'From part-time to Marketing Manager',
        role: 'Jack & Jones, Vero Moda · Hannover-Braunschweig region',
        text: 'Started straight after school as a part-time worker in retail and became a Marketing Manager within four years and seven months. Those years were shaped by mentors who invested in me early. They set a pattern I have followed since: growth happens fastest next to people who share what they know.',
        skills: ['Retail', 'Marketing', 'Leadership'],
    },
    {
        era: '2010 – 2016',
        title: 'Triebfeder Marketing',
        role: 'Founder & Owner · Magdeburg',
        text: 'Founded my own marketing agency and ran it for six years. Building campaigns meant building the landing pages behind them, so digital marketing and hands-on development grew together from the start. Analyzing user journeys on pages I had built myself later became my bridge into UX.',
        skills: ['Entrepreneurship', 'Digital Marketing', 'Full-Stack Development'],
    },
    {
        era: '2013 – 2019',
        title: 'The parallel years',
        role: 'Senior Digital Marketing Engineer, i2solutions GmbH (Aachen) · CMO, RenderThat (2014 – 2016)',
        text: 'Six years at an IT consultancy supporting digital transformation in IT/OT architecture and security. In parallel: my own agency, a BSc in Business Education in Magdeburg, and almost two years as Chief Marketing Officer of RenderThat, a startup for computer-generated product visuals. What the university explained, the jobs applied, daily.',
        skills: ['Digital Marketing', 'IT & OT Consulting', 'Business Education', 'Startup Leadership'],
    },
    {
        era: '2018 – 2021',
        title: 'DEVDEER GmbH: from UX to product leadership',
        role: 'Senior UX Designer, then Product Owner & Team Lead',
        text: 'Joined DEVDEER as a Senior UX Designer with a simple conviction: enterprise software has no alternative for most of its users, so its quality is a duty, not a luxury. From late 2019 I led interdisciplinary teams as a certified Scrum Product Owner, built on intensive collaboration and backlogs that everyone understands and enjoys working with. Since 2020 I am also one of three hosts of Code Revue, a self-produced podcast about agile software development.',
        skills: ['UX Design', 'Product Ownership', 'Scrum', 'Team Leadership'],
    },
    {
        era: '2021 – today',
        title: 'DEVDEER GmbH: Partner & Head of Operations',
        role: 'Magdeburg · hybrid',
        text: 'Today I run the operation of an Azure consultancy and stay deliberately close to the development team, fostering a culture where collaboration fuels innovation. With a strong interest in AI, agile ways of working, diversity, and sustainability, I bridge operational excellence with technical innovation. The employee satisfaction surveys I initiated are part of that: an agile company should listen inward as carefully as it listens to clients. Advanced Certified Scrum Product Owner (Scrum Alliance).',
        skills: ['Operations', 'Microsoft Azure', 'Managed Services', 'AI', 'Agile Leadership'],
        current: true,
    },
]

const values: IValue[] = [
    {
        icon: UserGroupIcon,
        title: 'We learn from each other, for each other',
        text: 'The DEVDEER motto, and the thread through my own story. Every chapter of my career was accelerated by people who shared what they knew. Passing that on is part of the job description I write for myself.',
    },
    {
        icon: CheckBadgeIcon,
        title: 'Substance over symbolism',
        text: 'Outcomes you can measure beat slides you can admire. That standard applies to cloud architectures, to internal processes, and to the small free tools I build for this city.',
    },
    {
        icon: ChatBubbleLeftRightIcon,
        title: 'Understanding before building',
        text: 'Business education taught me to explain, UX taught me to listen. Both come before the first line of code: if people do not understand a product, the product is not finished.',
    },
]

/**
 * A small pill-shaped skill tag.
 */
function Chip({ children }: { children: React.ReactNode }): React.ReactElement {
    return <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-slate-300">{children}</span>
}

/**
 * Renders the career section: a narrated timeline and the values behind it.
 */
export default function CareerComponent(): React.ReactElement {
    return (
        <div className="flex flex-col gap-8">
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
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
                {values.map((value) => (
                    <div key={value.title} className={`flex flex-col gap-4 p-7 ${glassCard}`}>
                        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 border border-white/10 border-t-white/20">
                            <value.icon className="w-6 h-6 text-slate-50/80" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-50/90 text-balance">{value.title}</h3>
                        <p className="text-md leading-7 text-slate-300">{value.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
