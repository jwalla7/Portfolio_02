/**
 * Full configuration example,
 * https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js
 *
 * Core plugins,
 * https:tailwindcss.com/docs/configuration#core-plugins
 */

import { fontFamily } from "tailwindcss/defaultTheme";
import { blackA, mauve, violet } from "@radix-ui/colors";

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
            screens: {
                // Add new breakpoints an addition to default breakpoints
            },
            // backgroundImage: {
            //     "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            //     "gradient-conic":
            //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            // },
            colors: {
                ...blackA,
                ...mauve,
                ...violet,
                gray: {
                    100: "#fafafa",
                    200: "#lelele",
                    300: "rgba(250, 250, 250, 0.34)",
                    400: "#00050D",
                    500: "#020D00",
                },
                blueviolet: "#9747ff",
            },
            gradientColorStopPositions: {
                100: "100%",
                99.2: "99.2%",
                96.5: "96.5%",
                91.8: "91.8%",
                85: "85.5%",
                80: "80%",
                77: "77%",
                66.7: "66.7%",
                55.7: "55.7%",
                44.3: "44.3%",
                43: "43%",
                33.3: "33.3%",
                23: "23%",
                14.5: "14.5%",
                8.2: "8.2%",
                3.5: "3.5%",
                0.8: "0.8%",
            },
            borderRadius: {
                "8xs": "5px",
                "smi-4": "12.4px",
            },
            keyframes: {
                slideUpAndFade: {
                    from: { opacity: 0, transform: "translateY(2px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                },
                slideRightAndFade: {
                    from: { opacity: 0, transform: "translateX(-2px)" },
                    to: { opacity: 1, transform: "translateX(0)" },
                },
                slideDownAndFade: {
                    from: { opacity: 0, transform: "translateY(-2px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                },
                slideLeftAndFade: {
                    from: { opacity: 0, transform: "translateX(2px)" },
                    to: { opacity: 1, transform: "translateX(0)" },
                },
            },
            animation: {
                slideUpAndFade:
                    "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                slideRightAndFade:
                    "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                slideDownAndFade:
                    "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                slideLeftAndFade:
                    "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
            },
        },
    },
    corePlugins: {
        preflight: false,
    },
    plugins: [],
};
