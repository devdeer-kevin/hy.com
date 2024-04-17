'use client'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

export function Providers({
    children,
}: Readonly<{
    children: React.ReactNode
}>): React.ReactElement {
    const queryClient = new QueryClient()

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
