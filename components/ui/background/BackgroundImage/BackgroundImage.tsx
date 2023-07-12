import React, { Suspense } from "react";
import { BackgroundImageMode } from "../BackgroundImageMode/BackgroundImageMode";

/**
 * Determines image type and size to display based on current media query and theme.
 *
 * Intended by default to fill it's parent's width.
 */

export const BackgroundImage: React.FC = () => {
    return (
        <Suspense>
            <BackgroundImageMode
                imageLightThemeSrc="/images/SKY-lightmode.jpg"
                imageDarkThemeSrc="/images/SKY-darkmode.jpg"
            />
        </Suspense>
    );
};

BackgroundImage.displayName = "BackgroundImage";
