import React from "react";
import { backgroundImageProps } from "./backgroundImageProps";

// determine Image size based on media query
// determine Image mode based on theme

const BackgroundImage = React.forwardRef<HTMLDivElement, backgroundImageProps>(
    ({ children, image }) => {
        return <div></div>;
    }
);

BackgroundImage.displayName = "BackgroundImage";
