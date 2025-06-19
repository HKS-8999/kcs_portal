/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    // Remove any server-side features for static export
    experimental: {
        missingSuspenseWithCSRBailout: false,
    }
}

module.exports = nextConfig