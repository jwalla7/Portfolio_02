import "./env.mjs"; // Validate schema on build https://env.t3.gg/docs/nextjs
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**audius-content-*",
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
