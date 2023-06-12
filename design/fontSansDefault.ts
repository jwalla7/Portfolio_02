import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";

/**
 * next/font will automatically optimize fonts (including custom)
 * and remove external network requests for improved privacy and performance.
 *
 * https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
 * https://nextjs.org/docs/app/api-reference/components/font
 */

// Inter regular
export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter-regular",
    weight: "400",
});

// Roboto family
export const roboto = localFont({
    src: [
        {
            path: "../assets/fonts/Roboto-Light.ttf",
            style: "normal",
            weight: "300",
        },
        {
            path: "../assets/fonts/Roboto-Regular.ttf",
            style: "normal",
            weight: "400",
        },
        {
            path: "../assets/fonts/Roboto-Medium.ttf",
            style: "normal",
            weight: "500",
        },
        {
            path: "../assets/fonts/Roboto-Bold.ttf",
            style: "normal",
            weight: "700",
        },
        {
            path: "../assets/fonts/Roboto-Black.ttf",
            style: "normal",
            weight: "900",
        },
    ],
    variable: "--font-roboto",
    fallback: ["inter", "system-ui", "arial"],
});
