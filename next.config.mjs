/**
 * Renamed to .cjs from .mjs due to contentlayer bug
 */

import { withContentlayer } from "next-contentlayer";
import "./env.mjs"; // Validate schema on build https://env.t3.gg/docs/nextjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.extensions.push(".wasm");
        }
        config.experiments = {
            ...config.experiments,
            asyncWebAssembly: true,
            layers: true,
        };
        config.module.rules.push({
            test: /\.wasm$/,
            type: "webassembly/async",
        });

        return config;
    },
};

export default withContentlayer(nextConfig);
