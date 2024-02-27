import Image from 'next/image'
import Logo from '../../public/HY_LOGO218.png'
import Link from 'next/link'

export default function Home() {
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-center">
            <nav className="flex w-full justify-between">
                <Image src={Logo} alt="logo" width={100} height={100} />
            </nav>
            <div className="p-8 lg:p-24">
                <div className="z-10 grid w-full max-w-5xl grid-flow-row items-center justify-center gap-8 font-mono">
                    <div>
                        <h2 className="text-6xl text-lime-400">TL;DR</h2>
                    </div>
                    <div>
                        <h3 className="text-sm text-lime-400">Code, Creativity, & Change: Navigating the Digital Frontier</h3>
                        <p>
                            With a solid foundation in Agile methodology through my certification with the Scrum Alliance, I blend versatile professional experience with
                            specialized expertise in Agile project management and software development. Starting in retail, where I underwent a remarkable transition from a
                            temporary worker to a Marketing Manager, my path led me through various strategic positions in the fields of digital marketing and entrepreneurship. As
                            a Senior Digital Marketing Engineer, I directed significant digital transformation projects at a leading technology company. I demonstrated my
                            entrepreneurial skills as the founder of an online marketing agency and as the CMO of a startup, where we created groundbreaking visual 3D content.
                        </p>
                        <p>
                            As a Senior UX Designer, I laid the groundwork for top-notch user experiences, before, as a certified Scrum Product Owner and Team Lead, using agile
                            practices to forge effective backlogs that deliver valuable product increments for clients ranging from mid-sized businesses to large corporations
                            across various industries. In my current role as Head of Operations, I integrate my passion for artificial intelligence, sustainable development
                            practices, and diversity into our operational processes and consulting services. Additionally, I shared my extensive knowledge in the area of agile
                            software development as a co-host of a specialist podcast.
                        </p>
                        <p>
                            This combination of practical professional experience and continuous education allows me to blend operational efficiency with technical innovation,
                            consistently delivering high-quality results. My career path reflects my relentless drive to evolve, expand my expertise, and implement innovative
                            solutions in a rapidly changing digital world.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm text-lime-400">Code, Communication & Compassion: A Commitment to Community</h3>
                        <p>
                            Beyond my professional accomplishments, {"I've"} dedicated a portion of my time to voluntary work, underscoring my commitment to contributing positively
                            to the wider community. This engagement has not only allowed me to give back but has also enriched my own perspective, improving my capabilities in
                            leadership, empathy, and problem-solving. Whether {"it's"} through leveraging my expertise in technology to support non-profit organizations, planning
                            and organizing inspiring excursions for school kids or advocating for their parents{"'"} interests to the city administration, my voluntary work remains
                            a vital aspect of my personal and professional identity. This diverse engagement drives me to foster a culture of innovation, inclusiveness, and social
                            responsibility.
                        </p>
                    </div>
                </div>
            </div>
            <footer className="flex w-full justify-center pb-8 px-8">
                <div className="flex flex-row gap-3 font-mono items-center">
                    <div className="h-full">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-teal-300">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path>
                        </svg>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path>
                    </div>
                    <Link className="text-teal-300 underline" href="https://github.com/devdeer-kevin/hy.com">
                        If you have any feedback or want to know how this website was built.
                    </Link>
                </div>
            </footer>
        </main>
    )
}
