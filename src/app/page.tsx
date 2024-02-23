import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import logoImage from '../../public/logo_squared_240_trans-1.png'
import React from 'react'

export default function Home() {
    return (
        <div className="flex flex-col h-screen bg-slate-900">
            <Head>
                <title>Kevin Heyland</title>
                <meta name="description" content="Witness the beauty of nextjs" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col mx-auto my-auto">
                <div className="flex mb-4 mx-auto">
                    <Image src={logoImage} alt="Logo DEVDEER" width={120} height={120} />
                </div>
                <div>
                    <Link className="underline text-green-200 font-mono my-auto" href="https://devdeer.com/">
                        Join the devolution.
                    </Link>
                </div>
            </main>
        </div>
    )
}
