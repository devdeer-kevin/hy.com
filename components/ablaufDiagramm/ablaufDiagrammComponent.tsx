/**
 * A step of the workshop flow.
 */
export interface IAblaufStep {
    label: string
    title: string
}

/**
 * Static SVG diagram of a step-by-step flow. Horizontal from the md
 * breakpoint, vertical below it, so the type stays legible on small
 * screens. No animation, nothing to reduce for prefers-reduced-motion.
 */
export default function AblaufDiagrammComponent({ steps, ariaLabel }: { steps: IAblaufStep[]; ariaLabel: string }): React.ReactElement {
    const description = `${ariaLabel}: ${steps.map((step) => `${step.label} ${step.title}`).join(', ')}`
    const columnWidth = 300
    const rowHeight = 96
    const width = columnWidth * steps.length
    const height = rowHeight * steps.length

    return (
        <>
            {/* Horizontal, from md */}
            <svg className="hidden md:block w-full h-auto" viewBox={`0 0 ${width} 150`} role="img" aria-label={description}>
                <line x1={columnWidth / 2} y1={40} x2={width - columnWidth / 2} y2={40} className="stroke-white/15" strokeWidth={2} />
                {steps.map((step, index) => {
                    const x = columnWidth * index + columnWidth / 2
                    return (
                        <g key={step.label}>
                            <circle cx={x} cy={40} r={14} className="fill-slate-950 stroke-white/30" strokeWidth={2} />
                            <circle cx={x} cy={40} r={5} className="fill-teal-300/80" />
                            <text x={x} y={86} textAnchor="middle" className="fill-slate-50/90 font-bold" fontSize={20}>
                                {step.label}
                            </text>
                            <text x={x} y={114} textAnchor="middle" className="fill-slate-400" fontSize={16}>
                                {step.title}
                            </text>
                        </g>
                    )
                })}
            </svg>
            {/* Vertical, below md */}
            <svg className="md:hidden w-full h-auto" viewBox={`0 0 360 ${height}`} role="img" aria-label={description}>
                <line x1={24} y1={rowHeight / 2} x2={24} y2={height - rowHeight / 2} className="stroke-white/15" strokeWidth={2} />
                {steps.map((step, index) => {
                    const y = rowHeight * index + rowHeight / 2
                    return (
                        <g key={step.label}>
                            <circle cx={24} cy={y} r={12} className="fill-slate-950 stroke-white/30" strokeWidth={2} />
                            <circle cx={24} cy={y} r={4} className="fill-teal-300/80" />
                            <text x={52} y={y - 4} className="fill-slate-50/90 font-bold" fontSize={18}>
                                {step.label}
                            </text>
                            <text x={52} y={y + 20} className="fill-slate-400" fontSize={15}>
                                {step.title}
                            </text>
                        </g>
                    )
                })}
            </svg>
        </>
    )
}
