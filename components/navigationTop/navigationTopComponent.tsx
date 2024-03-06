import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/HY_LOGO218.png'

/**
 * Renders a component that displays the latest GitHub repositories of a user.
 * Fetches data from the GitHub API server side and displays the repository name, last push date, and a link to the repository.
 */
export default async function NavigationTopComponent() {
    return (
        <nav className="flex w-full justify-between">
            <Image loading="eager" src={Logo} alt="logo" width={100} height={100} />
        </nav>
    )
}
