import React from "react";
import { backgroundImageProps } from "./backgroundImageProps";

const BackgroundImage = React.forwardRef<HTMLDivElement, backgroundImageProps>(
    ({ children, image }) => {
        return <div></div>;
    }
);

BackgroundImage.displayName = "BackgroundImage";
