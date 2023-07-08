"use client";

import { ViewportProps } from "./viewportProps";
import React from "react";

export const useViewport = (): ViewportProps => {
    const [viewport, setViewport] = React.useState<ViewportProps>({
        height: window.innerHeight,
        width: window.innerWidth,
    });

    // Record any changes to viewport after initial render and update viewport
    React.useEffect(() => {
        const updateViewport = () => {
            setViewport({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        };

        if (typeof window === "undefined") updateViewport();

        window.addEventListener("resize", updateViewport);

        return () => window.removeEventListener("resize", updateViewport);
    }, [viewport]);

    return viewport;
};
