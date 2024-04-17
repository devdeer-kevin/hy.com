import { unstable_noStore as noStore } from 'next/cache'
import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query'
import GitReposClientComponent from './gitReposClientComponent'

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
export default async function GitReposComponent(): Promise<React.ReactElement> {
    // Declaratively opt out of static rendering
    noStore()
    // Create a new query client
    const queryClient = new QueryClient()

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

    // Prefetch the data
    await queryClient.prefetchQuery({
        queryKey: ['repos'],
        queryFn: async () => {
            const response = await fetch('https://api.github.com/users/devdeer-kevin/repos')
            const data = await response.json()
            const repoData = data
                .map((repo: IRepo) => [repo.name, repo.pushed_at, repo.html_url])
                .sort((a: string, b: string, c: string) => new Date(b[1]).getTime() - new Date(a[1]).getTime())
                .slice(0, 3)
            return repoData
        },
    })

    // const response = await fetch('https://api.github.com/users/devdeer-kevin/repos')
    // const data = await response.json()
    // const repoData = data
    //     .map((repo: IRepo) => [repo.name, repo.pushed_at, repo.html_url])
    //     .sort((a: string, b: string, c: string) => new Date(b[1]).getTime() - new Date(a[1]).getTime())
    //     .slice(0, 3)

    // const data = await mockFetch()
    // const repoData = data
    //     .map((repo: IRepo) => [repo.name, repo.pushed_at, repo.html_url])
    //     .sort((a: any[], b: any[]) => new Date(b[1]).getTime() - new Date(a[1]).getTime())
    //     .slice(0, 3)

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <GitReposClientComponent />
        </HydrationBoundary>
    )
}
