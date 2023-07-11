"use client";

import React from "react";
import { BackgroundImageModeProps } from "./backgroundImageModeProps";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useSystemTheme } from "@/components/hooks/useSystemTheme/useSystemTheme";

/**
 * Determines which version of background image to display based on browser theme.
 * Different images based on the current theme may cause a hydration mismatch problem with next/image.
 * Use an empty image until the theme is resolved.
 */

export const BackgroundImageMode = React.forwardRef<
    HTMLImageElement,
    BackgroundImageModeProps
>(({ imageLightThemeSrc, imageDarkThemeSrc, className }, ref) => {
    const { theme, resolvedTheme } = useTheme();
    // const systemTheme  = useSystemTheme();

    console.log("theme is:", theme);

    if (theme === "system") {
        // systemTheme;
    }
    console.log(`resolvedTheme:`, resolvedTheme);
    return theme === "light" || resolvedTheme === "light" ? (
        <Image
            alt="background image of galaxy during the day"
            src={imageLightThemeSrc}
            quality={100}
            fill
            style={{ objectFit: "cover", position: "absolute", zIndex: -1 }}
            ref={ref}
            className={className}
        />
    ) : (
        <Image
            alt="background image of galaxy during the night"
            src={imageDarkThemeSrc}
            quality={100}
            fill
            style={{ objectFit: "cover", position: "absolute", zIndex: -1 }}
            ref={ref}
            className={className}
        />
    );
});

BackgroundImageMode.displayName = "BackgroundImageMode";
