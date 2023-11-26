"use client";

/**
 * @description
 *
 * Determines which version of background image to display based on browser theme.
 *
 * Different images based on the current theme may cause a hydration mismatch problem with next / image.
 */

import { BackgroundImageProps } from "./backgroundImageProps";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Suspense, useEffect, useState } from "react";
import { ProgressBar } from "../../loaders/Progress/ProgressBar";
import Custom404 from "@/app/not-found";

export const BackgroundImage = ({ imageLightThemeSrc, imageDarkThemeSrc, className }: BackgroundImageProps) => {
    const { theme, resolvedTheme } = useTheme();
    const [_resolvedImage, setResolvedImage] = useState(false);

    useEffect(() => {
        if (resolvedTheme === "light" || resolvedTheme === "dark") {
            setResolvedImage(true);
        }
    }, [resolvedTheme]);

    if (!_resolvedImage) return <Suspense fallback={<Custom404 />} />;
    /**
     * resolvedTheme
     *
     * If enableSystem is true and the active theme is "system", this returns whether the system preference resolved to "dark" or "light".
     *
     * @see https://github.com/pacocoursey/next-themes
     */
    return (
        <Suspense fallback={<ProgressBar />}>
            {theme === "light" || resolvedTheme === "light" ? (
                /**
                 * next/image
                 *
                 * @see https://nextjs.org/docs/app/building-your-application/optimizing/images#usage
                 */
                <Image
                    /**
                     * alt
                     *
                     * @see https://nextjs.org/docs/pages/building-your-application/optimizing/images#alt
                     */
                    alt="background image of galaxy during the day"
                    /**
                     * priority
                     *
                     * You should add the priority property to the image that will be the Largest Contentful Paint (LCP) element for each page.
                     *
                     * @see https://nextjs.org/docs/pages/building-your-application/optimizing/images
                     */
                    priority
                    /**
                     * src
                     *
                     * @see https://nextjs.org/docs/pages/building-your-application/optimizing/images#src
                     */
                    src={imageLightThemeSrc}
                    /**
                     * quality
                     *
                     * @see https://nextjs.org/docs/pages/building-your-application/optimizing/images#quality
                     */
                    quality={100}
                    /**
                     * fill/sizes
                     *
                     * The `fill` prop allows your image to be sized by its parent element.
                     *
                     * @see https://nextjs.org/docs/pages/building-your-application/optimizing/images#fill-container
                     */
                    fill
                    sizes="100vw"
                    /**
                     * style
                     *
                     * @see https://nextjs.org/docs/pages/building-your-application/optimizing/images#style
                     */
                    style={{
                        objectFit: "fill",
                        position: "absolute",
                        zIndex: -1,
                    }}
                    className={className}
                />
            ) : (
                <Image
                    alt="background image of galaxy during the night"
                    priority
                    src={imageDarkThemeSrc}
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: "fill",
                        position: "absolute",
                        zIndex: -1,
                    }}
                    className={className}
                />
            )}
        </Suspense>
    );
};
