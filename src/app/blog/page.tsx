import Image from 'next/image'
import Link from 'next/link'
import Default from '../../../public/blog-default.jpg'
import Profile from '../../../public/kevinheyland-profile.jpeg'

export default function BlogLandingPage(): React.ReactElement {
    return (
        <div className="flex flex-col py-0 lg:py-24 lg:px-16 px-0 max-w-7xl lg:gap-16">
            <div className="flex flex-col lg:w-full md:w-[800px] w-[350px] bg-gray-950 bg-opacity-30 backdrop-blur-md py-6 pl-8 rounded-xl border-2 border-t-gray-200/30 border-l-gray-200/30 border-r-gray-300/20 border-b-gray-300/20 shadow-2xl gap-8">
                <div className="flex flex-row justify-between items-start">
                    <div className="flex flex-col">
                        <h1 className="lg:text-5xl text-3xl font-bold text-slate-50">Blog</h1>
                    </div>
                    <div className="flex flex-row justify-end items-center pr-6">
                        <Link href="/">
                            <Image className="lg:size-10 size-8 rounded-full bg-slate-600 bg-opacity-60" loading="eager" src={Profile} alt="logo" width={100} height={100} />
                        </Link>
                    </div>
                </div>
                <div>
                    <h2 className="absolute lg:text-xl text-md font-semibold text-slate-50">Most Recent Posts</h2>
                    <h3 className="relative top-6 lg:text-xl text-sm font-normal text-slate-50 opacity-60">New Releases</h3>
                </div>
                <div className="flex flex-row lg:gap-8 gap-6 min-h-80 lg:min-h-[450px] overflow-scroll overflow-x-auto py-4 pr-6">
                    <div className="lg:min-w-[400px] min-w-[225px]">
                        <div className="flex flex-col w-full h-full min-h-80 relative overflow-hidden">
                            <Image className="shadow-4xl rounded-xl" loading="eager" alt="Committing to Progress" src={Default} fill style={{ objectFit: 'cover' }} />
                            <div className="z-10 flex h-full min-h-72 items-center w-1/2 pl-4">
                                <h2 className="lg:text-5xl text-2xl font-sans font-bold text-gray-100 opacity-35">Committing to Progress</h2>
                            </div>
                            <div className="absolute bottom-0 sm:h-20 h-16 bg-gradient-to-r from-gray-900 to-transparent bg-opacity-60 backdrop-blur-sm w-full rounded-b-xl">
                                <div className="flex justify-between items-center h-full flex-row-reverse px-4">
                                    <div className="flex">
                                        <button className="bg-gray-600 bg-opacity-40 rounded-lg py-1 px-2">
                                            <Link className="text-slate-50 font-bold opacity-70" href="/blog/committing-to-progress">
                                                Read
                                            </Link>
                                        </button>
                                    </div>
                                    <div className="flex opacity-40">
                                        <p className="text-sm font-mono p-1">Reading Time: 2min</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:min-w-[400px] min-w-[225px]">
                        <div className="flex flex-col w-full h-full min-h-80 relative overflow-hidden">
                            <Image className="rounded-2xl shadow-4xl" loading="eager" alt="Spatial Web Redesign" src={Default} fill style={{ objectFit: 'cover' }} />
                            <div className="z-10 flex h-full min-h-72 items-center w-1/2 pl-4">
                                <h2 className="lg:text-5xl text-2xl font-sans font-bold text-gray-100 opacity-35">Spatial Web Redesign</h2>
                            </div>
                            <div className="absolute bottom-0 sm:h-20 h-16 bg-gradient-to-r from-gray-900 to-transparent bg-opacity-60 backdrop-blur-sm w-full rounded-b-xl">
                                <div className="flex justify-between items-center h-full flex-row-reverse px-4">
                                    <div className="flex">
                                        <button className="bg-gray-600 bg-opacity-40 rounded-lg py-1 px-2">
                                            <Link className="text-slate-50 font-bold opacity-70" href="/blog/spatial-web-redesign">
                                                Read
                                            </Link>
                                        </button>
                                    </div>
                                    <div className="flex opacity-40">
                                        <p className="text-sm font-mono p-1">Reading Time: 3min</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:min-w-[400px] min-w-[225px]">
                        <div className="flex flex-col w-full h-full min-h-80 relative overflow-hidden">
                            <Image className="rounded-2xl shadow-4xl" loading="eager" alt="Kevin Heyland" src={Default} fill style={{ objectFit: 'cover' }} />
                            <div className="z-10 flex h-full min-h-72 items-center w-1/2 pl-4">
                                <h2 className="lg:text-5xl text-2xl font-sans font-bold text-gray-100 opacity-35">Backlogs Structure Creativity</h2>
                            </div>
                            <div className="absolute bottom-0 sm:h-20 h-16 bg-gradient-to-r from-gray-900 to-transparent bg-opacity-60 backdrop-blur-sm w-full rounded-b-xl">
                                <div className="flex justify-between items-center h-full flex-row-reverse px-4">
                                    <div className="flex">
                                        <button className="bg-gray-600 bg-opacity-40 rounded-lg py-1 px-2">
                                            <Link className="text-slate-50 font-bold opacity-70" href="/blog/backlogs-structure-creativity">
                                                Read
                                            </Link>
                                        </button>
                                    </div>
                                    <div className="flex opacity-40">
                                        <p className="text-sm font-mono p-1">Reading Time: 3min</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
