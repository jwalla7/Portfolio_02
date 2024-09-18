/**
 * @description
 * Full configuration example,
 * @see https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js
 *
 * Core plugins,
 * @see https://tailwindcss.com/docs/configuration#core-plugins
 */

import { fontFamily } from "tailwindcss/defaultTheme";

export const screens = {
    // Assuming browser default is 16px
    // sm min 0px max 640px
    sm: { max: "40em" },
    // md 640px
    md: "40em",
    // lg 828 px
    lg: "51.75em",
    // xl 1080px
    xl: "67.5em",
    // 2xl 1200px
    "2xl": "75em",
    // 3xl 1440
    "3xl": "90em",
    // 4xl 1708
    "4xl": "106.75em",
    // 5xl 1920
    "5xl": "120em",
    // 6xl 2048
    "6xl": "128em",
    // 7xl 3840
    "7xl": "240em",
};

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
    mode: "jit",
    darkMode: ["class"],
    content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./components/ui/**/*.{ts,tsx}", "./content/**/*.{md,mdx}", "./mdx-components.tsx"],

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
        },
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)", ...fontFamily.sans],
            },
            backgroundImage: {
                none: "none",
                "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
                "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
                "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            colors: {
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
                    foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
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
                shineBottomRightAndFade: {
                    "100%": { left: "125%" },
                },
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
                rotateGradient: {
                    "0%, 100%": { "background-position": "0% 50%" },
                    "50%": { "background-position": "100% 50%" },
                },
                reversePulse: {
                    "0%, 100%": { "opacity": "0" },
                    "50%": { "opacity": "1" },
                },
            },
            animation: {
                reversePulse: "reversePulse 60s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                slideRightAndFade: "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                slideDownAndFade: "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                slideLeftAndFade: "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                shineBottomRightAndFade: "shine 1s",
                skeletonPulse: "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
        screens,
    },
    corePlugins: {
        preflight: false,
    },
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography"), require("@kamona/tailwindcss-perspective")],
};

export default tailwindConfig;