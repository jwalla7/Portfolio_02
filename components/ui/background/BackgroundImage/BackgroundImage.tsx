import React from "react";
import { backgroundImageProps } from "./backgroundImageProps";
import { useViewport } from "@/components/hooks/useViewport/useViewport";
import Image from "next/image";
import { useTheme } from "next-themes";

// loader before fetching viewport
// determine Image size based on media query -> filling outer container will solve this
// determine Image mode based on theme
// determine className values for outer div, based on viewport returned values.

const BackgroundImage = React.forwardRef<HTMLDivElement, backgroundImageProps>(
    () => {
        const imageLightMode = "/images/SKY-lightmode.jpg";
        const imageDarkMode = "/images/SKY-darkmode.jpg";
        const { theme, setTheme } = useTheme();
        const viewport = useViewport();

        if (viewport.width <= 640) {
            return (
                <div>
                    {theme === "light" ? <div>light</div> : <div>dark</div>}
                </div>
            );
        }

        return <div></div>;
    }
);

BackgroundImage.displayName = "BackgroundImage";
