/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github-production-user-asset-6210df.s3.amazonaws.com',
                
            },
            {
                protocol: 'https',
                hostname: 'user-images.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
            }
        ]
    },
}

module.exports = nextConfig
