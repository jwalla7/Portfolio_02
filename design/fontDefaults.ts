import { Inter } from "next/font/google";
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
    variable: "--font-inter",
    weight: ["400", "500", "900"],
});

// Roboto family
// export const robotoLight = localFont({
//     src: "../public/fonts/Roboto-Light.ttf",
//     variable: "--font-roboto-light",
// });

export const robotoRegular = localFont({
    src: "../public/fonts/Roboto-Regular.ttf",
    variable: "--font-roboto-regular",
});

// export const robotoMedium = localFont({
//     src: "../public/fonts/Roboto-Medium.ttf",
//     variable: "--font-roboto-medium",
// });

// export const robotoBold = localFont({
//     src: "../public/fonts/Roboto-Bold.ttf",
//     variable: "--font-roboto-bold",
// });

// export const robotoBlack = localFont({
//     src: "../public/fonts/Roboto-Black.ttf",
//     variable: "--font-roboto-black",
// });
