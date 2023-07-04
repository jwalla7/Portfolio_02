import { withContentlayer } from "next-contentlayer";
import "./env.mjs"; // Validate schema on build https://env.t3.gg/docs/nextjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
    images: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1707, 1920, 2048, 3840],
        imageSizes: [640, 750, 828, 1080, 120, 144, 170, 192, 204, 384],
    },
    /** https://github.com/vercel/next.js/issues/27650 */
    webpack(config) {
        config.infrastructureLogging = {
            level: "error",
        };
        return config;
    },
};

export default withContentlayer(nextConfig);
