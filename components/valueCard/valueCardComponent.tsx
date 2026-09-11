import { textBody, textHeading, tile } from '../theme'
import type { IValue } from '../../content/ueber-mich'

/**
 * A guiding value: icon, title and a short explanation on a tile.
 */
export default function ValueCardComponent({ value }: { value: IValue }): React.ReactElement {
    return (
        <div className={`flex flex-col gap-4 p-8 sm:p-10 ${tile}`}>
            <h3 className={`text-h3 font-bold ${textHeading} text-balance`}>{value.title}</h3>
            <p className={`text-body ${textBody}`}>{value.text}</p>
        </div>
    )
}
