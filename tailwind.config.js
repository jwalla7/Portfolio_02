/**
 * Full configuration example,
 * https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js
 *
 * Core plugins,
 * https:tailwindcss.com/docs/configuration#core-plugins
 */

import { blackA, mauve, violet } from "@radix-ui/colors";
import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
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
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)", ...fontFamily.sans],
            },
            backgroundImage: {
                none: "none",
                "gradient-to-r":
                    "linear-gradient(to right, var(--tw-gradient-stops))",
                "gradient-to-br":
                    "linear-gradient(to bottom right, var(--tw-gradient-stops))",
            },
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
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                /**
                 * Defining custom colors
                 * https://tailwindcss.com/docs/customizing-colors#naming-your-colors
                 */
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
                    foreground:
                        "hsl(var(--destructive-foreground) / <alpha-value>)",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
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
                lg: `var(--radius)`,
                md: `calc(var(--radius) - 2px)`,
                sm: "calc(var(--radius) - 4px)",
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
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
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
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    corePlugins: {
        preflight: false,
    },
    plugins: [
        require("tailwindcss-animate"),
        require("@tailwindcss/typography"),
    ],
};
