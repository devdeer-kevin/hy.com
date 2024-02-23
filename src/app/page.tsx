import Link from 'next/link'
import Image from 'next/image'
import logoImage from '../../public/logo_squared_240_trans-1.png'

export default function Home() {
    return (
        <div className="flex h-screen flex-col bg-slate-900">
            <main className="mx-auto my-auto flex flex-col">
                <div className="mx-auto mb-4 flex">
                    <Image src={logoImage} alt="Logo DEVDEER" width={120} height={120} />
                </div>
                <div>
                    <Link className="my-auto font-mono text-green-200 underline" href="https://devdeer.com/">
                        Join the devolution.
                    </Link>
                </div>
            </main>
        </div>
    )
}
