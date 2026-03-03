/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Necessary because your site lives at /web-canopy-landing, not the domain root
    basePath: '/web-canopy-landing',
    images: {
        unoptimized: true, // Required for static export without a custom image loader
    },
};

export default nextConfig;
