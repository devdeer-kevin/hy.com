import type { Metadata } from 'next'
import { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavigationTopComponent from '../../../components/navigationTop'
import FooterComponent from '../../../components/footer'
import SectionHeaderComponent from '../../../components/sectionHeader'
import CareerComponent from '../../../components/career'
import ValueCardComponent from '../../../components/valueCard'
import GitReposComponent from '../../../components/gitRepos'
import Photo from '../../../public/kevinheyland_bw.jpg'
import Profile from '../../../public/kevinheyland-profile.jpeg'
import { glass, glassFrame } from '../../../components/theme'
import { ueberMich } from '../../../content/ueber-mich'

export const metadata: Metadata = {
    title: ueberMich.metadata.title,
    description: ueberMich.metadata.description,
    alternates: {
        canonical: '/ueber-mich',
    },
    openGraph: {
        title: ueberMich.metadata.title,
        description: ueberMich.metadata.description,
        url: 'https://kevinheyland.com/ueber-mich',
        siteName: 'Kevin Heyland',
        type: 'profile',
        locale: 'de_DE',
    },
}

/**
 * Renders the about page: portrait, career timeline, principles and the
 * open source feed.
 */
export default function UeberMich(): ReactElement {
    return (
        <>
            <NavigationTopComponent />
            <main className="flex flex-col py-12 px-4 sm:px-8 max-w-7xl w-full lg:gap-24 gap-16">
                {/* PORTRAIT */}
                <section className="flex flex-col gap-10">
                    <h1 className="text-6xl sm:text-8xl font-sans font-bold text-slate-50/35 tracking-tight leading-none">{ueberMich.hero.h1}</h1>
                    <div className="flex lg:flex-row flex-col-reverse gap-8">
                        <div className="lg:w-1/2 w-full">
                            <div className="flex flex-col w-full h-full min-h-80 relative overflow-hidden">
                                <Image
                                    className={`rounded-3xl ${glassFrame}`}
                                    loading="eager"
                                    alt={ueberMich.hero.portraitAlt}
                                    src={Photo}
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className="z-10 flex h-full min-h-72 items-center w-1/2 pl-4">
                                    <p className="text-5xl font-sans font-bold text-gray-800/35">{ueberMich.hero.portraitClaim}</p>
                                </div>
                                <div className="z-10 absolute bottom-0 right-0 px-4 py-3">
                                    <Link className="text-xs text-gray-50/40 hover:text-gray-50/70 transition-colors" target="_blank" href={ueberMich.hero.photoCreditHref}>
                                        {ueberMich.hero.photoCredit}
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
                                        alt={ueberMich.hero.profileAlt}
                                        src={Profile}
                                        sizes="(max-width: 640px) 128px, 176px"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="flex flex-col justify-center gap-1">
                                    <h2 className="sm:text-4xl text-3xl font-sans font-bold text-slate-300/60">{ueberMich.hero.name}</h2>
                                    <p className="text-sm font-mono text-slate-100/80">{ueberMich.hero.roleLine}</p>
                                    <p className="text-sm font-mono text-slate-400/80">{ueberMich.hero.credentialsLine}</p>
                                    <p className="text-sm font-sans text-slate-400/60">{ueberMich.hero.placeLine}</p>
                                </div>
                            </div>
                            <div className={`pt-6 pb-6 px-7 ${glass}`}>
                                <p className="text-md leading-7 font-sans text-slate-300">{ueberMich.hero.intro}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WERDEGANG */}
                <section className="flex flex-col gap-8">
                    <SectionHeaderComponent title={ueberMich.career.title} subtitle={ueberMich.career.subtitle} />
                    <CareerComponent chapters={ueberMich.career.chapters} />
                </section>

                {/* PRINZIPIEN */}
                <section className="flex flex-col gap-8">
                    <SectionHeaderComponent title={ueberMich.prinzipien.title} subtitle={ueberMich.prinzipien.subtitle} />
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
                        {ueberMich.prinzipien.values.map((value) => (
                            <ValueCardComponent key={value.title} value={value} />
                        ))}
                    </div>
                </section>

                {/* OPEN SOURCE */}
                <section className="flex flex-col gap-8">
                    <SectionHeaderComponent title={ueberMich.openSource.title} subtitle={ueberMich.openSource.subtitle} />
                    <GitReposComponent />
                </section>
            </main>
            <FooterComponent />
        </>
    )
}
