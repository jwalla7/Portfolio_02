"use client";

import { ViewportProps } from "./viewportProps";
import React from "react";

export const useViewport = (): ViewportProps => {
    const [viewport, setViewport] = React.useState<ViewportProps>({
        height: window.innerHeight,
        width: window.innerWidth,
    });

    // Update any changes to viewport on mount after initial render
    React.useEffect(() => {
        const updateViewport = () => {
            setViewport({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        };

        if (typeof window === "undefined") updateViewport();

        window.addEventListener("resize", updateViewport);

        return (): void => window.removeEventListener("resize", updateViewport);
    }, []);

    console.log(viewport.height, viewport.width);
    return viewport;
};
