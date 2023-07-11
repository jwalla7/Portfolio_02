import React, { Suspense } from "react";
import { backgroundImageProps } from "./backgroundImageProps";
import { useViewport } from "@/components/hooks/useViewport/useViewport";
import { BackgroundImageMode } from "../BackgroundImageMode/BackgroundImageMode";

// loader before fetching viewport -> this should be in one of the parent containers, such as a layout
// determine Image size based on media query -> filling outer container will solve this
// determine className values for outer div, based on viewport returned values.

export const BackgroundImage = React.forwardRef<
    HTMLDivElement,
    backgroundImageProps
>(() => {
    // const viewport = useViewport();

    // if (viewport.innerWidth <= 1920) {
    // return (
    // <Suspense>
    {
        /* <BackgroundImageMode imageLightThemeSrc="/images/SKY-lightmode.jpg" imageDarkThemeSrc="/images/SKY-darkmode.jpg"/> */
    }
    {
        /* </Suspense> */
    }
    // );
    // }

    return (
        <BackgroundImageMode
            imageLightThemeSrc="/images/SKY-lightmode.jpg"
            imageDarkThemeSrc="/images/SKY-darkmode.jpg"
        />
    );
});

BackgroundImage.displayName = "BackgroundImage";
