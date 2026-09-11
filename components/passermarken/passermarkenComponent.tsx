/**
 * A single registration mark: a small crosshair.
 */
function Marke({ className }: { className: string }): React.ReactElement {
    return (
        <svg aria-hidden className={`absolute w-4 h-4 text-ink/35 ${className}`} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="8" cy="8" r="4" />
            <path d="M8 0v3M8 13v3M0 8h3M13 8h3" />
        </svg>
    )
}

/**
 * Registration marks on the four corners of a block: this was measured.
 * Wrap a block that carries verified facts, nothing else.
 */
export default function PassermarkenComponent({ children, className = '' }: { children: React.ReactNode; className?: string }): React.ReactElement {
    return (
        <div className={`relative ${className}`}>
            <Marke className="-top-2 -left-2" />
            <Marke className="-top-2 -right-2" />
            <Marke className="-bottom-2 -left-2" />
            <Marke className="-bottom-2 -right-2" />
            {children}
        </div>
    )
}
