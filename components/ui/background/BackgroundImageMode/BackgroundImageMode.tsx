import React from "react";
import { BackgroundImageModeProps } from "./backgroundImageModeProps";
import Image from "next/image";
import { useTheme } from "next-themes";

/**
 * Determines which version of background image to display based on browser theme.
 */

export const BackgroundImageMode = React.forwardRef<
    HTMLImageElement,
    BackgroundImageModeProps
>(({ imageLightThemeSrc, imageDarkThemeSrc }, ref) => {
    const { theme, setTheme } = useTheme();

    return theme === "light" ? (
        <Image
            alt="background image of galaxy in the day"
            src={imageLightThemeSrc}
        />
    ) : (
        <Image
            alt="background image of galaxy in the day"
            src={imageDarkThemeSrc}
        />
    );
});

BackgroundImageMode.displayName = "BackgroundImageMode";
