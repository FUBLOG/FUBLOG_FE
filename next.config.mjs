// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    output: 'export',

    // Optional: Change links /me -> /me/ and emit /me.html -> /me/index.html
    // trailingSlash: true,

    // Optional: Prevent automatic /me -> /me/, instead preserve href
    // skipTrailingSlashRedirect: true,

    // Optional: Change the output directory out -> dist
    distDir: '.dist',
    images: {
        unoptimized: true,
    },
    reactStrictMode: false,
}

export default nextConfig