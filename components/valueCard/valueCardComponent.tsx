import { glassCard } from '../theme'
import type { IValue } from '../../content/ueber-mich'

/**
 * A guiding value: icon, title and a short explanation on a glass card.
 */
export default function ValueCardComponent({ value }: { value: IValue }): React.ReactElement {
    return (
        <div className={`flex flex-col gap-4 p-7 ${glassCard}`}>
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 border border-white/10 border-t-white/20">
                <value.icon className="w-6 h-6 text-slate-50/80" />
            </div>
            <h3 className="text-lg font-bold text-slate-50/90 text-balance">{value.title}</h3>
            <p className="text-md leading-7 text-slate-300">{value.text}</p>
        </div>
    )
}
