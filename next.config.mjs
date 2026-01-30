import "./env.mjs"; // Validate schema on build https://env.t3.gg/docs/nextjs
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    compiler: {
        removeConsole: false,
    },
    reactStrictMode: true,
    // Prevent Next from incorrectly inferring the workspace root when multiple lockfiles exist
    // (common in iCloud Drive directories). This ensures output-file-tracing works reliably in production.
    outputFileTracingRoot: __dirname,
    async redirects() {
        return [
            {
                source: "/",
                destination: "/main",
                permanent: true,
            },
        ];
    },
    pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.audius.co",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "**.theblueprint.xyz",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "**.staked.cloud",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "**.monophonic.digital",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "**.cultur3stake.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "**.figment.io",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "**.altego.net",
                pathname: "/**",
            },
        ],
    },
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
        config.module.rules.push({
            test: /[\\/]node_modules[\\/](keyv|cacheable-request|got|swarm-js)[\\/].*\.js$/,
            use: [
                {
                    loader: "string-replace-loader",
                    options: {
                        search: "Buffer\\(",
                        replace: "Buffer.from(",
                        flags: "g",
                    },
                },
            ],
        });
        return config;
    },
};

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeAutolinkHeadings, rehypePrettyCode, rehypeSlug],
    },
});

export default withMDX(nextConfig);
