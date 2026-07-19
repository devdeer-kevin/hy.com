import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import GitReposComponent from '../gitRepos'
import CareerComponent from '../career'
import Photo from '../../public/kevinheyland_bw.jpg'
import Profile from '../../public/kevinheyland-profile.jpeg'
import PacePlaner from '../../public/Pace-Planer-Mockup.png'
import AIAssistant from '../../public/KI-Assistant-Ausfuellhilfe.png'
import Tonnentour from '../../public/tonnentour-mockup.png'
import { glass, glassCard, glassFrame, pillButton, sectionLabel, sectionTitle } from '../theme'

/**
 * A section header: large vibrancy title with a quiet mono subline.
 */
function SectionHeader({ title, subtitle }: { title: string; subtitle: string }): React.ReactElement {
    return (
        <div>
            <h2 className={sectionTitle}>{title}</h2>
            <p className={sectionLabel}>{subtitle}</p>
        </div>
    )
}

/**
 * A pill-shaped external link, visionOS style.
 */
function PillLink({ href, children }: { href: string; children: React.ReactNode }): React.ReactElement {
    return (
        <Link className={`${pillButton} group flex flex-row items-center gap-1.5`} href={href} target="_blank">
            {children}
            <ArrowUpRightIcon className="h-4 w-4 opacity-50 group-hover:opacity-90 transition-opacity" />
        </Link>
    )
}

/**
 * Renders the landing page: spatial glass panels on a soft ambient gradient.
 */
export default function LandingPageComponent(): React.ReactElement {
    return (
        <div className="flex flex-col py-12 px-4 sm:px-8 max-w-7xl w-full lg:gap-24 gap-16">
            {/* HERO */}
            <section id="about" className="flex flex-col gap-10">
                <div className="flex flex-col gap-5">
                    <h1 className="text-6xl sm:text-8xl font-sans font-bold text-slate-50/35 tracking-tight leading-none">
                        Kevin
                        <br className="sm:hidden" /> Heyland
                    </h1>
                    <p className="max-w-2xl text-lg leading-relaxed text-slate-300 text-balance">
                        Partner &amp; Head of Operations at <b className="text-slate-50/90">DEVDEER</b>. Cloud architectures by day, free tools for Magdeburg after
                        hours.
                    </p>
                    <div className="flex flex-row flex-wrap gap-3 pt-1">
                        <PillLink href="https://github.com/devdeer-kevin">GitHub</PillLink>
                        <PillLink href="https://www.linkedin.com/in/kevin-heyland-003b1456/">LinkedIn</PillLink>
                        <PillLink href="https://devdeer.com">DEVDEER</PillLink>
                        <Link className={pillButton} href="mailto:mail@kevinheyland.com">
                            Contact
                        </Link>
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col-reverse gap-8">
                    <div className="lg:w-1/2 w-full">
                        <div className="flex flex-col w-full h-full min-h-80 relative overflow-hidden">
                            <Image
                                className={`rounded-3xl ${glassFrame}`}
                                loading="eager"
                                alt="Kevin Heyland, black and white portrait"
                                src={Photo}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                            <div className="z-10 flex h-full min-h-72 items-center w-1/2 pl-4">
                                <p className="text-5xl font-sans font-bold text-gray-800/35">Code, Creativity &amp; Change</p>
                            </div>
                            <div className="z-10 absolute bottom-0 right-0 px-4 py-3">
                                <Link
                                    className="text-xs text-gray-50/40 hover:text-gray-50/70 transition-colors"
                                    target="_blank"
                                    href="https://www.giovannagahrns.com"
                                >
                                    Photography by Giovanna Veronica Gahrns
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex flex-col gap-8">
                        <div className="flex flex-row gap-8 items-center">
                            <div className={`relative sm:w-44 sm:h-44 w-32 h-32 shrink-0 rounded-full ${glassFrame}`}>
                                <Image
                                    className="rounded-full"
                                    loading="eager"
                                    alt="Kevin Heyland, profile"
                                    src={Profile}
                                    sizes="(max-width: 640px) 128px, 176px"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="flex flex-col justify-center gap-1">
                                <h2 className="sm:text-4xl text-3xl font-sans font-bold text-slate-300/60">Kevin Heyland</h2>
                                <p className="text-sm font-mono text-slate-100/80">Partner &amp; Head of Operations, DEVDEER</p>
                                <p className="text-sm font-mono text-slate-400/80">BSc Business Education · A-CSPO</p>
                                <p className="text-sm font-sans text-slate-400/60">Magdeburg, Germany</p>
                            </div>
                        </div>
                        <div className={`pt-6 pb-6 px-7 ${glass}`}>
                            <h3 className="text-sm font-bold text-slate-50/70 pb-2">About</h3>
                            <p className="text-md leading-7 font-sans text-slate-300">
                                From shop floor to software, the long way round: marketing first, then UX, then code. That route left a habit I kept: understanding
                                people before building for them. Today I run operations at DEVDEER, an Azure consultancy in Magdeburg. Evenings belong to free tools
                                for this city: bin schedules, school forms, race paces.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CAREER */}
            <section id="career" className="flex flex-col gap-8">
                <SectionHeader title="Career" subtitle="Learning, Growth and Companionship" />
                <CareerComponent />
            </section>

            {/* PRODUCTS */}
            <section id="products" className="flex flex-col gap-8">
                <SectionHeader title="Products" subtitle="Free, yet priceless" />
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 w-full">
                    {/* Tonnentour */}
                    <div className={`flex relative flex-col overflow-hidden ${glassCard}`}>
                        <div className="relative items-center justify-center flex flex-col w-full h-80">
                            <Image className="h-48 w-fit" loading="eager" alt="Tonnentour app on a phone" src={Tonnentour} />
                        </div>
                        <div className="flex flex-col px-7 pb-7 pt-4">
                            <h3 className="text-2xl font-bold text-slate-50/90 pb-2">Tonnentour</h3>
                            <p className="text-md leading-7 text-slate-300 pb-4">
                                Waste collection schedules for Magdeburg and Jerichower Land. Enter a street, get every collection date for every bin type. Free for residents, with a
                                business tier for property managers handling multiple locations.
                            </p>
                        </div>
                        <div className="absolute bottom-0 right-0 flex flex-row justify-end p-5">
                            <Link className={pillButton} href="https://tonnentour.de" target="_blank">
                                Find your dates
                            </Link>
                        </div>
                    </div>
                    {/* AI Assistant */}
                    <div className={`flex relative flex-col overflow-hidden ${glassCard}`}>
                        <div className="relative items-center flex flex-col w-full h-80">
                            <Image className="absolute h-72 w-fit bottom-0" loading="eager" alt="AI Assistant app on a phone" src={AIAssistant} />
                        </div>
                        <div className="flex flex-col px-7 pb-7 pt-4">
                            <h3 className="text-2xl font-bold text-slate-50/90 pb-2">AI Assistant</h3>
                            <p className="text-md leading-7 text-slate-300 pb-14">
                                Answers school-enrollment questions from the official guide of Magdeburg&apos;s city parents&apos; council, with page references, in
                                seconds. Built so parents get clarity without searching a 40-page document.
                            </p>
                        </div>
                        <div className="absolute bottom-0 right-0 flex flex-row justify-end p-5">
                            <Link className={pillButton} href="https://ausfuellhilfe.stadtelternrat-magdeburg.de" target="_blank">
                                Try the assistant
                            </Link>
                        </div>
                    </div>
                    {/* Pace Planer */}
                    <div className={`flex relative flex-col overflow-hidden ${glassCard}`}>
                        <div className="relative items-center flex flex-col w-full h-80">
                            <Image className="absolute h-72 w-fit bottom-0" loading="eager" alt="Pace Planer app on a phone" src={PacePlaner} />
                        </div>
                        <div className="flex flex-col px-7 pb-7 pt-4">
                            <h3 className="text-2xl font-bold text-slate-50/90 pb-2">Pace Planer</h3>
                            <p className="text-md leading-7 text-slate-300 pb-14">
                                A deliberately simple pace calculator for runners: finish times, clock times, and milestone arrivals for race day. Enter a pace, plan
                                the race.
                            </p>
                        </div>
                        <div className="absolute bottom-0 right-0 flex flex-row justify-end p-5">
                            <Link className={pillButton} href="https://pace-planer.de" target="_blank">
                                Plan a race
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* OPEN SOURCE */}
            <section id="opensource" className="flex flex-col gap-8">
                <SectionHeader title="Open Source" subtitle="Latest GitHub activity" />
                <GitReposComponent />
            </section>
        </div>
    )
}
