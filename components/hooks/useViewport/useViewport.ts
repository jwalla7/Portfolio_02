"use client";

import React from "react";

export const useViewport = () => {
    const [viewport, setViewport] = React.useState({
        innerHeight: null || 0,
        innerWidth: null || 0,
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

        updateViewport();

        window.addEventListener("resize", updateViewport);

        return () => window.removeEventListener("resize", updateViewport);
    }, []);

    return viewport;
};
