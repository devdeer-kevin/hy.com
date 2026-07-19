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
        ]
    },
}

export default nextConfig
