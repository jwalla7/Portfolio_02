import { withContentlayer } from "next-contentlayer";
import "./env.mjs"; // Validate schema on build https://env.t3.gg/docs/nextjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
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
