import { revalidatePath } from 'next/cache'
import Link from 'next/link'

/**
 * Interface for the repository data fetched from the GitHub API.
 */
interface IRepo {
    name: string
    pushed_at: Date
    html_url: string
}

/**
 * Renders a component that displays the latest GitHub repositories of a user.
 * Fetches data from the GitHub API server side and displays the repository name, last push date, and a link to the repository.
 */
export default async function GitReposComponent() {
    // Force dynamic rendering, which will result in rendering at request time.
    const dynamic = 'force-dynamic'
    // Fetches the latest repositories from the GitHub API.
    const response = await fetch('https://api.github.com/users/devdeer-kevin/repos')
    const data = await response.json()
    const repoData = data
        .map((repo: IRepo) => [repo.name, repo.pushed_at, repo.html_url])
        .sort((a: string, b: string, c: string) => new Date(b[1]).getTime() - new Date(a[1]).getTime())
        .slice(0, 3)

    // Revalidates the path to update the data every 5 minutes.
    // revalidatePath('/')

    return (
        <div className="grid gap-4 rounded-md p-4 bg-indigo-900 shadow-lg">
            <h2 className="text-3xl text-pink-400">{'//'} Explore My Latest GitHub Ventures</h2>
            <div className="grid grid-flow-row md:grid-flow-col pt-4">
                <>
                    {repoData.map((project: string[]) => (
                        <div className="py-2" key={project[1]}>
                            <div className="flex flex-row gap-2">
                                <div>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-lime-400">
                                        <path d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path>
                                    </svg>
                                </div>
                                <Link href={project[2]} target="_blank">
                                    <h3 className="underline cursor-pointer text-lg font-mono text-lime-400">{project[0].toLowerCase()}</h3>
                                </Link>
                            </div>
                            <div className="">
                                {new Date(project[1]).toLocaleDateString('en-GB') === new Date().toLocaleDateString('en-GB') ? (
                                    <p className="text-sm font-mono p-1">Last push: Today</p>
                                ) : (
                                    <p className="text-sm font-mono p-1">Last push: {new Date(project[1]).toLocaleDateString('en-GB')}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </>
            </div>
        </div>
    )
}
