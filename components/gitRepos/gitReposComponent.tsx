import { unstable_noStore as noStore } from 'next/cache'
import Link from 'next/link'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import { glass } from '../theme'

/**
 * Interface for the repository data.
 */
interface IRepo {
    name: string
    pushed_at: string
    html_url: string
}

/**
 * Maps repository names to human-readable display names.
 */
function getRepoName(repoName: string): string {
    switch (repoName) {
        case 'terminal-gpt-chat':
            return 'Terminal GPT Chat'
        case 'shopping-list':
            return 'Shopping List'
        case 'hy.com':
            return 'Personal Website'
        case 'scotty-ui':
            return 'Scotty UI'
        case 'shelflife':
            return 'ShelfLife Console'
        case 'terminal-gpt-assistant-chat':
            return 'Terminal GPT Assistant'
        case 'pace-planer':
            return 'Pace Planer'
        case 'terminal-football-game':
            return 'Terminal Football'
        case 'moderation-wheel':
            return 'Moderation Wheel'
        default:
            return repoName
    }
}

/**
 * Renders the three most recently updated GitHub repositories.
 * Fetches data from the GitHub API server side.
 */
export default async function GitReposComponent(): Promise<React.ReactElement> {
    // Declaratively opt out of static rendering
    noStore()

    const response = await fetch('https://api.github.com/users/devdeer-kevin/repos')
    const data = await response.json()
    const repoData: string[][] = data
        .map((repo: IRepo) => [repo.name, repo.pushed_at, repo.html_url])
        .sort((a: string[], b: string[]) => new Date(b[1]).getTime() - new Date(a[1]).getTime())
        .slice(0, 3)

    return (
        <div className="flex flex-col gap-4">
            <div className={`flex flex-col divide-y divide-white/5 px-3 sm:px-5 ${glass}`}>
                {repoData.map((project: string[]) => (
                    <Link key={project[2]} href={project[2]} target="_blank" className="group flex flex-row flex-wrap items-baseline gap-x-4 gap-y-1 py-5 px-2 sm:px-4">
                        <span className="font-sans font-bold text-lg text-slate-50/90 group-hover:text-slate-50 transition-colors">{getRepoName(project[0])}</span>
                        {getRepoName(project[0]) !== project[0] && <span className="font-mono text-sm text-slate-500 hidden sm:inline">{project[0]}</span>}
                        <span className="font-mono text-sm text-slate-400 ml-auto">
                            last push:{' '}
                            {new Date(project[1]).toLocaleDateString('en-GB') === new Date().toLocaleDateString('en-GB')
                                ? 'today'
                                : new Date(project[1]).toLocaleDateString('en-GB')}
                        </span>
                        <ArrowUpRightIcon className="h-4 w-4 text-slate-50/80 opacity-0 group-hover:opacity-100 transition-opacity self-center" />
                    </Link>
                ))}
            </div>
            <Link
                className="group flex flex-row items-center gap-1 text-sm text-slate-400 hover:text-slate-200 transition-colors self-start"
                href="https://github.com/devdeer-kevin?tab=repositories"
                target="_blank"
            >
                View all repositories on GitHub
                <ArrowUpRightIcon className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
            </Link>
        </div>
    )
}
