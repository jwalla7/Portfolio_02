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
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                heading: [
                    "var(--font-roboto-light)",
                    "var(--font-roboto-regular)",
                    "var(--font-roboto-medium)",
                    "var(--font-roboto-bold)",
                    "var(--font-roboto-black)",
                    "var(--font-inter-regular)",
                    ...fontFamily.sans,
                ],
            },
        },
    },
    plugins: [],
};
