'use client'

import Image from 'next/image'
import Link from 'next/link'
import GitReposComponent from '../gitRepos'
import Photo from '../../public/kevinheyland_bw.jpg'
import Profile from '../../public/kevinheyland-profile.jpeg'
import PacePlaner from '../../public/Pace-Planer-Mockup.png'
import AIAssistant from '../../public/KI-Assistant-Ausfuellhilfe.png'

/**
 * Renders a component that displays the content of the landing page aka homepage.
 */
export default function LandingPageComponent(): React.ReactElement {
    return (
        <div className="flex flex-col py-12 px-4 sm:px-8 max-w-7xl lg:gap-16 gap-12">
            <div>
                <h1 className="text-5xl pb-2 font-bold text-slate-50 opacity-70">About me</h1>
                <h2 className="text-md font-mono  text-slate-400 opacity-80">Introduction</h2>
            </div>
            <div className="w-full grid-flow-row items-center justify-center gap-8 font-mono">
                <div className="flex lg:flex-row flex-col-reverse gap-8">
                    <div className="lg:w-1/2 w-full">
                        <div className="flex flex-col w-full h-full min-h-80 relative overflow-hidden">
                            <Image
                                className="rounded-2xl border-2 border-t-slate-500/50 border-l-slate-500/50 border-r-slate-600/50 border-b-slate-600/50"
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
                                <div className="flex justify-between items-center h-full flex-row-reverse px-4">
                                    <div className="flex">
                                        <button className="bg-gray-300 bg-opacity-40 rounded-lg py-1 px-2">
                                            <Link className="text-slate-50 font-bold opacity-80 flex flex-row" href="/blog">
                                                Read <span className="hidden sm:block ml-2">More</span>
                                            </Link>
                                        </button>
                                    </div>
                                    <div className="flex opacity-40 ">
                                        <Link className="text-gray-50 text-sm flex items-center sm:h-24 h-16 justify-center" target="_blank" href="https://www.giovannagahrns.com">
                                            <span className="block sm:hidden mr-2">📷</span>
                                            <span className="hidden sm:block mr-2">Photography</span>by Giovanna Veronica Gahrns
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="flex flex-row gap-8 pb-8">
                            <div className="p-8 relative sm:w-44 sm:h-44 w-32 h-32 w rounded-full border-2 border-t-slate-500/50 border-l-slate-500/50 border-r-slate-600/50 border-b-slate-600/50">
                                <Image className="rounded-full" loading="eager" alt="Kevin Heyland" src={Profile} fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex flex-col">
                                    <h2 className="sm:text-4xl text-3xl font-sans font-bold text-slate-300 opacity-60 leading-0">Kevin</h2>
                                    <h2 className="sm:text-4xl text-3xl font-sans font-bold text-slate-300 opacity-60 leading-0">Heyland</h2>
                                    <div className="flex flex-col justify-start">
                                        <h3 className="sm:text-md text-sm font-mono text-slate-100 opacity-80 leading-0">BSc Business Education</h3>
                                        <h3 className="sm:text-md text-sm font-sans text-slate-400 opacity-60 leading-0">Magdeburg, Germany</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-6 pb-2 px-6 bg-slate-950 bg-opacity-30 rounded-2xl backdrop-blur-sm border-2 border-t-slate-600/50 border-l-slate-600/50 border-r-slate-700/50 border-b-slate-700/50">
                            <h3 className="text-sm font-sans font-bold text-slate-300 opacity-70 ">Code, Creativity & Change: Navigating the Digital Frontier</h3>
                            <p className="text-md leading-7 font-sans text-slate-300 opacity-70 font-medium">
                                With a solid foundation in Agile methodology through my certifications with the Scrum Alliance and a robust educational background with a Bachelor
                                of Science in Vocational Education in Business, I blend versatile academic and professional experience with specialized expertise in Agile project
                                management and full stack software development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-5xl pb-2 font-bold text-slate-50 opacity-70">Repos</h1>
                <h2 className="text-md font-mono  text-slate-400 opacity-80">Current GitHub Ventures</h2>
            </div>
            <GitReposComponent />
            <div>
                <h1 className="text-5xl pb-2 font-bold text-slate-50 opacity-70">Products</h1>
                <h2 className="text-md font-mono  text-slate-400 opacity-80">Free, yet priceless</h2>
            </div>
            <div className="flex md:flex-row flex-col gap-8 w-full justify-between">
                <div className="flex relative flex-col transition-all ease-linear rounded-xl md:w-1/2 w-full border-2 border-t-slate-600/50 border-l-slate-600/50 border-r-slate-700/50 border-b-slate-700/50">
                    <div className="relative items-center flex flex-col w-full h-96">
                        <Image className="absolute h-80 w-fit bottom-0" loading="eager" alt="Kevin Heyland" src={AIAssistant} />
                    </div>
                    <div className="flex flex-col p-4 bg-gradient-to-b from-indigo-950/60 to-transparent">
                        <div className="flex flex-col justify-between w-full rounded-b-xl">
                            <div className="flex flex-col flex-1 flex-grow pb-12">
                                <h2 className="text-4xl font-bold text-cyan-400 font-mono">AI Assistant</h2>
                                <p>
                                    <b>Quickly to the right answer:</b> The AI Assistant uses artificial intelligence to provide targeted answers from the official filling
                                    instructions of the Magdeburg City Parents’ Council regarding school pathway declarations. I wanted to create an experience where users simply
                                    enter their question, and the application will deliver a precise answer with a page reference in seconds – without the hassle of searching
                                    through the entire document.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 flex flex-row justify-end p-4">
                        <button className="bg-gray-600 bg-opacity-40 rounded-lg py-1 px-2">
                            <Link className="text-slate-50 font-bold opacity-70" href="https://ausfuellhilfe.stadtelternrat-magdeburg.de" target="_blank">
                                Ask a question
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="flex relative flex-col rounded-xl md:w-1/2 w-full border-2 border-t-slate-600/50 border-l-slate-600/50 border-r-slate-700/50 border-b-slate-700/50">
                    <div className="relative items-center flex flex-col w-full h-96">
                        <Image className="absolute h-80 w-fit bottom-0" loading="eager" alt="Kevin Heyland" src={PacePlaner} />
                    </div>
                    <div className="flex flex-col p-4 bg-gradient-to-b from-indigo-950/60 to-transparent">
                        <div className="flex flex-col justify-between  w-full rounded-b-xl">
                            <div className="flex flex-col flex-1 flex-grow pb-12">
                                <h2 className="text-4xl text-yellow-400 font-mono font-bold ">Pace Planer</h2>
                                <p>
                                    <b>Simplicity comes first:</b> “Pace Planer” offers a clear, intuitive interface for runners to calculate target times for standard and custom
                                    race distances. By entering their pace, runners can determine their finish time. They can also input their start time to see when they’ll reach
                                    key milestones like 5K or 10K, making it easy to plan arrivals and share their achievements with friends and family!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 flex flex-row justify-end p-4">
                        <button className="bg-gray-600 bg-opacity-40 rounded-lg py-1 px-2">
                            <Link className="text-slate-50 font-bold opacity-70" href="https://pace-planer.de" target="_blank">
                                Plan your race
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-5xl pb-2 font-bold text-slate-50 opacity-70">Career</h1>
                <h2 className="text-md font-mono  text-slate-400 opacity-80">Learning, Growth and Companionship</h2>
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
                        Starting after school as a temporary worker in retail and progressing to a Marketing Manager, my early career was a journey marked by significant growth and
                        learning, enriched by mentorship from outstanding individuals. Balancing university studies in Magdeburg, Germany, I further evolved from a working student
                        into a Senior Digital Marketing Engineer. This period effectively merged my academic knowledge with practical experience in digital marketing and product
                        design, thanks to the guidance of remarkable colleagues. I am deeply thankful for this journey, showcasing the impactful synergy between education and
                        practical application in shaping my career.
                    </p>
                    <p className="text-md leading-7 font-sans text-slate-300 opacity-70">
                        Transitioning seamlessly into my career, my initial foray into User Experience (UX) design began uniquely as a Digital Performance Marketer. In this role, I
                        delved into analyzing user flows and optimizing journeys on product landing pages I crafted myself. This hands-on experience with enhancing digital
                        interactions marked the genesis of my passion for software development, particularly sparking my interest in frontend development. Leveraging this newfound
                        enthusiasm, I went on to establish robust foundations for exceptional user experiences as a Senior UX Designer, combining strategic marketing insights with
                        user-centered design principles.
                    </p>
                </div>
            </div>
        </div>
    )
}
