import Link from 'next/link'

/**
 * The stamp: the one solid use of the lamp color on a page. A round badge
 * with the call to action running around its edge. It spins only while
 * hovered or focused, never on its own.
 */
export default function StempelComponent({ text, href }: { text: string; href: string }): React.ReactElement {
    const pathId = `stempel-${text.toLowerCase().replace(/[^a-z]/g, '')}`

    return (
        <Link
            aria-label={text}
            className="group relative inline-flex w-28 h-28 sm:w-32 sm:h-32 shrink-0 items-center justify-center rounded-full bg-lamp text-navy-950 transition-transform hover:scale-[1.03]"
            href={href}>
            <svg aria-hidden className="stempel-spin absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <defs>
                    <path id={pathId} d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
                </defs>
                <text className="font-sans" fill="currentColor" fontSize="10.5" fontWeight="700" letterSpacing="0.6" style={{ whiteSpace: 'pre' }}>
                    <textPath href={`#${pathId}`} lengthAdjust="spacing" textLength="232">
                        {`${text}        ${text}        `}
                    </textPath>
                </text>
            </svg>
            <span aria-hidden className="w-[54%] h-[54%] rounded-full border border-navy-950/35" />
        </Link>
    )
}
