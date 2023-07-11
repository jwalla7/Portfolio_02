"use client";

import { ViewportProps } from "./viewportProps";
import React from "react";

export const useViewport = (): ViewportProps => {
    const [viewport, setViewport] = React.useState<ViewportProps>({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
    });

    // Update any changes to viewport on mount after initial render
    /**
     * `useLayoutEffect` is a version of `useEffect` that fires before the browser repaints the screen.
     * Use with caution, can hurt performance. Prefer `useEffect` when possible.
     *
     * https://react.dev/reference/react/useLayoutEffect
     */
    React.useLayoutEffect(() => {
        const updateViewport = async () => {
            await setViewport({
                innerHeight: window.innerHeight,
                innerWidth: window.innerWidth,
            });
        };

        if (typeof window === "undefined") updateViewport();

        window.addEventListener("resize", updateViewport);

        return (): void => window.removeEventListener("resize", updateViewport);
    }, []);

    console.log(viewport.innerHeight, viewport.innerWidth);
    return viewport;
};
