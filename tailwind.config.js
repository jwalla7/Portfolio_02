/**
 * Full configuration example,
 * https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js
 *
 * Core plugins,
 * https:tailwindcss.com/docs/configuration#core-plugins
 */

import { defaultTheme } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/ui/**/*.{js,ts,jsx,tsx,mdx}",
        "./design/**/*.{js,ts,jsx,tsx,mdx}",
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
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
