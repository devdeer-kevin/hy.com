/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/blog',
                destination: '/',
                permanent: true,
            },
            {
                source: '/blog/:slug*',
                destination: '/',
                permanent: true,
            },
            {
                source: '/imprint',
                destination: '/impressum',
                statusCode: 301,
            },
            {
                source: '/privacy',
                destination: '/datenschutz',
                statusCode: 301,
            },
            {
                source: '/ki-werkstatt',
                destination: '/ki-workshop-magdeburg',
                statusCode: 301,
            },
        ]
    },
}

export default nextConfig
