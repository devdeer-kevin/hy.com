import Image from 'next/image'
import Photo from '../../public/kevinheyland_bw.jpg'
import Profile from '../../public/kevinheyland-profile.jpeg'
import Link from 'next/link'
import GitReposComponent from '../../components/gitRepos'

export default function Home() {
    return (
        <>
            <div className="flex flex-col py-8 lg:py-8 px-4 sm:px-8 max-w-7xl lg:gap-16 gap-12">
                <div>
                    <h1 className="text-5xl pb-2 font-bold text-slate-50 opacity-70">About me</h1>
                    <h4 className="text-md font-mono  text-slate-400 opacity-80">Introduction</h4>
                </div>
                <div className="w-full grid-flow-row items-center justify-center gap-8 font-mono">
                    <div className="flex lg:flex-row flex-col-reverse gap-8">
                        <div className="lg:w-1/2 w-full">
                            <div className="flex flex-col w-full h-full min-h-80 relative overflow-hidden">
                                <Image
                                    className="rounded-2xl border-2 border-t-slate-500 border-l-slate-500 border-r-slate-600 border-b-slate-600"
                                    loading="eager"
                                    alt="Kevin Heyland"
                                    src={Photo}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className="z-10 flex h-full min-h-72 items-center w-1/2 pl-4">
                                    <h2 className="text-5xl font-sans font-bold text-gray-800 opacity-35">Code, Creativity & Change</h2>
                                </div>
                                <div className="z-10 absolute bottom-0 sm:h-24 h-16 bg-gradient-to-r from-gray-400 to-transparent bg-opacity-60 backdrop-blur-sm w-full rounded-b-xl">
                                    <Link
                                        className="text-gray-100 opacity-65 text-sm flex items-center sm:h-24 h-16 justify-center"
                                        target="_blank"
                                        href="https://www.giovannagahrns.com">
                                        Photography by Giovanna Veronica Gahrns
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="flex flex-row gap-8 pb-8">
                                <div className="p-8 relative sm:w-44 sm:h-44 w-32 h-32 w rounded-full border-2 border-t-slate-500 border-l-slate-500 border-r-slate-600 border-b-slate-600">
                                    <Image
                                        className="rounded-full border border-t-slate-500 border-l-slate-500 border-r-slate-600 border-b-slate-600"
                                        loading="eager"
                                        alt="Kevin Heyland"
                                        src={Profile}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="flex flex-col">
                                        <h3 className="sm:text-4xl text-3xl font-sans font-bold text-slate-300 opacity-60 leading-0">Kevin</h3>
                                        <h3 className="sm:text-4xl text-3xl font-sans font-bold text-slate-300 opacity-60 leading-0">Heyland</h3>
                                        <div className="flex flex-col justify-start">
                                            <h5 className="sm:text-md text-sm font-mono text-slate-100 opacity-80 leading-0">BSc Business Education</h5>
                                            <h5 className="sm:text-md text-sm font-sans text-slate-400 opacity-60 leading-0">Magdeburg, Germany</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6 pb-2 px-6 bg-slate-950 bg-opacity-30 rounded-2xl backdrop-blur-sm border-2 border-t-slate-600 border-l-slate-600 border-r-slate-700 border-b-slate-700">
                                <h3 className="text-sm font-sans font-bold text-slate-300 opacity-70 ">Code, Creativity & Change: Navigating the Digital Frontier</h3>
                                <p className="text-md leading-7 font-sans text-slate-300 opacity-70 font-medium">
                                    With a solid foundation in Agile methodology through my certifications with the Scrum Alliance and a robust educational background with a
                                    Bachelor of Science in Vocational Education in Business, I blend versatile academic and professional experience with specialized expertise in
                                    Agile project management and full stack software development.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-5xl pb-2 font-bold text-slate-50 opacity-70">Repos</h1>
                    <h4 className="text-md font-mono  text-slate-400 opacity-80">Current GitHub Ventures</h4>
                </div>
                <GitReposComponent />
                <div>
                    <h1 className="text-5xl pb-2 font-bold text-slate-50 opacity-70">Career</h1>
                    <h4 className="text-md font-mono  text-slate-400 opacity-80">Learning, Growth and Companionship</h4>
                </div>
                <div className="flex flex-col gap-8 pt-16 pb-10 px-6 bg-slate-950 bg-opacity-30 rounded-2xl backdrop-blur-sm border-2 border-t-slate-700 border-l-slate-700 border-r-slate-800 border-b-slate-800">
                    <div className="lg:w-1/2 w-4/5">
                        <h3 className="sm:text-5xl text-4xl font-sans font-bold text-gray-400">
                            From Storefronts to <span className="font-mono text-slate-100">Software Development</span>
                        </h3>
                        <h3 className="text-sm font-sans font-bold text-slate-100 opacity-30 ">[2006 - 2018] A Story of Transformation and Technology</h3>
                    </div>
                    <div className="grid lg:grid-flow-col grid-flow-row gap-8 font-medium">
                        <p className="text-md leading-7 font-sans text-slate-300 opacity-70">
                            Starting after school as a temporary worker in retail and progressing to a Marketing Manager, my early career was a journey marked by significant growth
                            and learning, enriched by mentorship from outstanding individuals. Balancing university studies in Magdeburg, Germany, I further evolved from a working
                            student into a Senior Digital Marketing Engineer. This period effectively merged my academic knowledge with practical experience in digital marketing
                            and product design, thanks to the guidance of remarkable colleagues. I am deeply thankful for this journey, showcasing the impactful synergy between
                            education and practical application in shaping my career.
                        </p>
                        <p className="text-md leading-7 font-sans text-slate-300 opacity-70">
                            Transitioning seamlessly into my career, my initial foray into User Experience (UX) design began uniquely as a Digital Performance Marketer. In this
                            role, I delved into analyzing user flows and optimizing journeys on product landing pages I crafted myself. This hands-on experience with enhancing
                            digital interactions marked the genesis of my passion for software development, particularly sparking my interest in frontend development. Leveraging
                            this newfound enthusiasm, I went on to establish robust foundations for exceptional user experiences as a Senior UX Designer, combining strategic
                            marketing insights with user-centered design principles.
                        </p>
                    </div>
                </div>
            </div>
            <footer className="flex w-full justify-center py-8 px-8">
                <div className="flex flex-row gap-3 font-mono items-center">
                    <div className="h-full">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-teal-300">
                            <path d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path>
                        </svg>
                    </div>
                    <Link className="text-teal-300 underline" href="https://github.com/devdeer-kevin/hy.com">
                        If you have any feedback or want to know how this website was built.
                    </Link>
                </div>
            </footer>
        </>
    )
}
