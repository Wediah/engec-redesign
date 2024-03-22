/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: "",
            }
        ],
    },
}
