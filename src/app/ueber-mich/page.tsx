import type { Metadata } from 'next'
import { ReactElement } from 'react'
import Image from 'next/image'
import NavigationTopComponent from '../../../components/navigationTop'
import FooterComponent from '../../../components/footer'
import SectionHeaderComponent from '../../../components/sectionHeader'
import CareerComponent from '../../../components/career'
import ValueCardComponent from '../../../components/valueCard'
import GitReposComponent from '../../../components/gitRepos'
import Profile from '../../../public/kevinheyland-profile.jpeg'
import { textBody, textHeading, textMuted, textPrimary } from '../../../components/theme'
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
 * Renders the about page: the person centered, then the career timeline,
 * the principles and the open source feed.
 */
export default function UeberMich(): ReactElement {
    return (
        <>
            <NavigationTopComponent />
            <main className="flex flex-col py-10 pb-20 px-4 sm:px-8 max-w-7xl w-full min-w-0 gap-24 lg:gap-32 overflow-x-clip">
                {/* PERSON: zentriert */}
                <section className="flex flex-col items-center text-center gap-6 max-w-3xl w-full mx-auto">
                    <div className="reveal relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden" style={{ '--i': 0 } as React.CSSProperties}>
                        <Image className="object-cover" priority alt={ueberMich.hero.profileAlt} src={Profile} sizes="192px" fill />
                    </div>
                    <h1 className={`reveal text-h1 font-bold ${textPrimary} text-balance`} style={{ '--i': 1 } as React.CSSProperties}>
                        {ueberMich.hero.h1}
                    </h1>
                    <div className="reveal flex flex-col gap-1" style={{ '--i': 2 } as React.CSSProperties}>
                        <p className={`text-xl font-semibold ${textHeading}`}>{ueberMich.hero.roleLine}</p>
                        <p className={`text-lg ${textMuted}`}>{ueberMich.hero.credentialsLine}</p>
                        <p className={`text-lg ${textMuted}`}>{ueberMich.hero.placeLine}</p>
                    </div>
                    <p className={`reveal text-body ${textBody} text-balance`} style={{ '--i': 3 } as React.CSSProperties}>
                        {ueberMich.hero.intro}
                    </p>
                </section>

                {/* WERDEGANG */}
                <section className="flex flex-col gap-10">
                    <SectionHeaderComponent title={ueberMich.career.title} subtitle={ueberMich.career.subtitle} />
                    <CareerComponent chapters={ueberMich.career.chapters} />
                </section>

                {/* PRINZIPIEN */}
                <section className="flex flex-col gap-10">
                    <SectionHeaderComponent title={ueberMich.prinzipien.title} subtitle={ueberMich.prinzipien.subtitle} />
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                        {ueberMich.prinzipien.values.map((value) => (
                            <ValueCardComponent key={value.title} value={value} />
                        ))}
                    </div>
                </section>

                {/* OPEN SOURCE */}
                <section className="flex flex-col gap-10">
                    <SectionHeaderComponent title={ueberMich.openSource.title} subtitle={ueberMich.openSource.subtitle} />
                    <GitReposComponent />
                </section>
            </main>
            <FooterComponent />
        </>
    )
}
