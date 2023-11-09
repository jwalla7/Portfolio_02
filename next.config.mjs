import { withContentlayer } from "next-contentlayer";
import "./env.mjs"; // Validate schema on build https://env.t3.gg/docs/nextjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.extensions.push(".wasm");
        }
        config.infrastructureLogging = {
            level: "error",
        };
        config.experiments = {
            ...config.experiments,
            asyncWebAssembly: true,
            layers: true,
        };
        config.module.rules.push({
            test: /\.wasm$/,
            type: "webassembly/async",
        });
        // config.module.rules.push({
        //     test: /[\\/]node_modules[\\/](keyv|cacheable-request|got|swarm-js)[\\/].*\.js$/,
        //     use: [
        //         {
        //             loader: "string-replace-loader",
        //             options: {
        //                 search: "Buffer\\(",
        //                 replace: "Buffer.from(",
        //                 flags: "g",
        //             },
        //         },
        //     ],
        // });
        return config;
    },
};

export default withContentlayer(nextConfig);
