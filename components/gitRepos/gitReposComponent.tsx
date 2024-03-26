import Link from 'next/link'
import { unstable_noStore as noStore } from 'next/cache'
import Image from 'next/image'
import Terminal from '../../public/terminal.jpeg'
import Shopping from '../../public/shopping.jpeg'
import Website from '../../public/website.jpeg'
import Github from '../../public/github.jpeg'
import Scotty from '../../public/scotty.jpeg'
import ShelfLife from '../../public/shelflife.jpeg'
import Assistant from '../../public/assistant.jpeg'

/**
 * Interface for the repository data.
 */
interface IRepo {
    name: string
    pushed_at: string
    html_url: string
}

/**
 * Renders a component that displays the latest GitHub repositories of a user.
 * Fetches data from the GitHub API server side and displays the repository name, last push date, and a link to the repository.
 */
export default async function GitReposComponent() {
    // Declaratively opt out of static rendering
    noStore()

    // Mock fetch function for development
    // function mockFetch() {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve([
    //                 {
    //                     name: 'terminal-gpt-chat',
    //                     pushed_at: '2022-01-01T00:00:00Z',
    //                     html_url: 'https://github.com/user/repo1',
    //                 },
    //                 {
    //                     name: 'hy.com',
    //                     pushed_at: '2022-02-01T00:00:00Z',
    //                     html_url: 'https://github.com/user/repo2',
    //                 },
    //                 {
    //                     name: 'shopping-list',
    //                     pushed_at: '2022-03-01T00:00:00Z',
    //                     html_url: 'https://github.com/user/repo3',
    //                 },
    //             ])
    //         }, 1000)
    //     })
    // }

    const response = await fetch('https://api.github.com/users/devdeer-kevin/repos')
    const data = await response.json()
    const repoData = data
        .map((repo: IRepo) => [repo.name, repo.pushed_at, repo.html_url])
        .sort((a: string, b: string, c: string) => new Date(b[1]).getTime() - new Date(a[1]).getTime())
        .slice(0, 3)

    // const data = await mockFetch()
    // const repoData = data
    //     .map((repo: IRepo) => [repo.name, repo.pushed_at, repo.html_url])
    //     .sort((a: any[], b: any[]) => new Date(b[1]).getTime() - new Date(a[1]).getTime())
    //     .slice(0, 3)

    // Function to get the image source based on the repository name
    function getImageSource(repoName: string) {
        switch (repoName) {
            case 'terminal-gpt-chat':
                return Terminal
            case 'shopping-list':
                return Shopping
            case 'hy.com':
                return Website
            case 'scotty-ui':
                return Scotty
            case 'shelflife':
                return ShelfLife
            case 'terminal-gpt-assistant-chat':
                return Assistant
            default:
                return Github
        }
    }

    // Function to get the display name based on the repository name
    function getRepoName(repoName: string) {
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
            default:
                return 'GitHub'
        }
    }

    return (
        <>
            <div className="grid grid-flow-row lg:grid-flow-col lg:grid-cols-3 grid-cols-1 gap-8">
                <>
                    {repoData.map((project: string[]) => (
                        <div className="py-2" key={project[1]}>
                            <div className="relative min-h-96">
                                <Image
                                    className="rounded-xl border border-t-slate-700 border-l-slate-700 border-r-slate-800 border-b-slate-800"
                                    loading="eager"
                                    alt="Kevin Heyland"
                                    src={getImageSource(project[0])}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className="absolute top-0 sm:h-24 h-16 p-4">
                                    <div>
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-gray-400 opacity-30">
                                            <path d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="z-10 flex h-full min-h-72 items-end w-1/2 pl-4">
                                    <h2 className="text-4xl font-sans font-bold text-gray-100 opacity-35">{getRepoName(project[0])}</h2>
                                </div>
                                <div className="absolute bottom-0 sm:h-20 h-16 bg-gradient-to-r from-gray-900 to-transparent bg-opacity-60 backdrop-blur-sm w-full rounded-b-xl">
                                    <div className="flex justify-between items-center h-full flex-row-reverse px-4">
                                        <div className="flex">
                                            <button className="bg-gray-600 bg-opacity-40 rounded-lg py-1 px-2">
                                                <Link className="text-slate-50 font-bold opacity-70" href={project[2]} target="_blank">
                                                    Watch
                                                </Link>
                                            </button>
                                        </div>
                                        <div className="flex opacity-40">
                                            {new Date(project[1]).toLocaleDateString('en-GB') === new Date().toLocaleDateString('en-GB') ? (
                                                <p className="text-sm font-mono p-1">Last push: Today</p>
                                            ) : (
                                                <p className="text-sm font-mono p-1">Last push: {new Date(project[1]).toLocaleDateString('en-GB')}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            </div>
        </>
    )
}
