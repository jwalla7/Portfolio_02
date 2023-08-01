"use client";

import { BackgroundImageMode } from "../BackgroundImageMode/BackgroundImageMode";
import { BackgroundImageProps } from "./backgroundImageProps";

/**
 * Determines image type and size to display based on current media query and theme.
 *
 * Intended by default to fill it's parent's width.
 */

export const BackgroundImage: React.FC<BackgroundImageProps> = ({
    imageLightThemeSrc,
    imageDarkThemeSrc,
}) => {
    console.log("painted bkg image");
    return (
        <BackgroundImageMode
            imageLightThemeSrc={imageLightThemeSrc}
            imageDarkThemeSrc={imageDarkThemeSrc}
        />
    );
};

BackgroundImage.displayName = "BackgroundImage";
