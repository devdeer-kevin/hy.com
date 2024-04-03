import { ArrowPathIcon } from '@heroicons/react/16/solid'

/**
 * The component that wraps a blog post page with a consistent layout.
 */
export default function BusySpinner() {
    return (
        <div className="fixed top-1/2 left-1/2">
            <ArrowPathIcon className="h-9 w-9 text-slate-50 opacity-50 animate-spin" />
        </div>
    )
}
