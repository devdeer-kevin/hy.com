/**
 * The sign: a section's word set huge and quiet in lowercase, like a sign
 * on a workshop wall. Purely decorative, the real heading follows it.
 */
export default function SchildComponent({ wort }: { wort: string }): React.ReactElement {
    return (
        <span aria-hidden className="schild">
            {wort}
        </span>
    )
}
