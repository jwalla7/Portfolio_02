import { withContentlayer } from "next-contentlayer";
import "/env.mjs"; // Validate schema on build https://env.t3.gg/docs/nextjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
};

export default withContentlayer(nextConfig);
