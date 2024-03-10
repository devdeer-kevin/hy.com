import { NextResponse } from 'next/server'

/**
 * Interface for the repository data.
 */
interface IRepo {
    name: string
    pushed_at: string
    html_url: string
}

export async function GET() {
    try {
        // Fetch the latest repository data from the GitHub API.
        const response = await fetch('https://api.github.com/users/devdeer-kevin/repos')
        if (!response.ok) {
            // Return an error response if the request fails.
            return new NextResponse(`Error: ${response.status}`, { status: response.status })
        }

        const data: IRepo[] = await response.json()
        // Map the repository data to an array of arrays containing the repository name, last push date, and repository URL.
        const repoData = data
            .map((repo) => [repo.name, repo.pushed_at, repo.html_url])
            .sort((a, b) => new Date(b[1]).getTime() - new Date(a[1]).getTime())
            .slice(0, 3)
        return NextResponse.json({ repoData })
    } catch (error) {
        return new NextResponse(`Server Error`, { status: 500 })
    }
}
