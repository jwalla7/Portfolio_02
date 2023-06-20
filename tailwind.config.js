/**
 * Full configuration example,
 * https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js
 *
 * Core plugins,
 * https:tailwindcss.com/docs/configuration#core-plugins
 */

import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./components/ui/**/*.{ts,tsx}",
        "./content/**/*.{md,mdx}",
    ],

    /**
     * The `theme` section is where you define color, palette, type scale,
     * fonts, breakpoints, border radius values, and more.
     *
     * https://tailwindcss.com/docs/theme
     */

    theme: {
        extend: {
            // backgroundImage: {
            //     "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            //     "gradient-conic":
            //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            // },
            colors: {
                gray: {
                    100: "#fafafa",
                    200: "#lelele",
                    300: "rgba(250, 250, 250, 0.34)",
                },
                blueviolet: "#9747ff",
            },
            borderRadius: {
                "8xs": "5px",
                "smi-4": "12.4px",
            },
        },
    },
    corePlugins: {
        preflight: false,
    },
    plugins: [],
};
