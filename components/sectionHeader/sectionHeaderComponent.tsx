import { textHeading, textMuted } from '../theme'

/**
 * A centered section heading with a quiet subline, product-page style.
 */
export default function SectionHeaderComponent({ title, subtitle }: { title: string; subtitle?: string }): React.ReactElement {
    return (
        <div className="flex flex-col items-center text-center gap-3">
            <h2 className={`text-h2 font-bold ${textHeading} text-balance`}>{title}</h2>
            {subtitle && <p className={`text-lg ${textMuted} max-w-2xl text-balance`}>{subtitle}</p>}
        </div>
    )
}
