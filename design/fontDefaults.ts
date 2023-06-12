import { Inter, Roboto, Roboto_Flex } from "next/font/google";
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

export const robotoFlex = Roboto_Flex({
    subsets: ["latin"],
    variable: "--font-roboto-flex",
});

// Roboto family
export const robotoLight = localFont({
    src: "../assets/fonts/Roboto-Light.ttf",
    variable: "--font-roboto-light",
});

export const robotoRegular = localFont({
    src: "../assets/fonts/Roboto-Regular.ttf",
    variable: "--font-roboto-regular",
});

export const robotoMedium = localFont({
    src: "../assets/fonts/Roboto-Medium.ttf",
    variable: "--font-roboto-medium",
});

export const robotoBold = localFont({
    src: "../assets/fonts/Roboto-Bold.ttf",
    variable: "--font-roboto-bold",
});

export const robotoBlack = localFont({
    src: "../assets/fonts/Roboto-Black.ttf",
    variable: "--font-roboto-black",
});
