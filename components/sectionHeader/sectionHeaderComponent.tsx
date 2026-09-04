import { sectionLabel, sectionTitle } from '../theme'

/**
 * A section header: large vibrancy title with a quiet mono subline.
 */
export default function SectionHeaderComponent({ title, subtitle }: { title: string; subtitle: string }): React.ReactElement {
    return (
        <div>
            <h2 className={sectionTitle}>{title}</h2>
            <p className={sectionLabel}>{subtitle}</p>
        </div>
    )
}
