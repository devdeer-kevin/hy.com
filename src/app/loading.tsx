import { ArrowPathIcon } from '@heroicons/react/16/solid'

export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <div className="flex justify-center">
            <ArrowPathIcon className="h-9 w-9 text-pink-400 animate-spin" />
        </div>
    )
}
