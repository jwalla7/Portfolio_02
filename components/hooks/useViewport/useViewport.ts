"use client";

import { useLayoutEffect, useState } from "react";

export const useViewport = () => {
    const [viewport, setViewport] = useState({
        innerHeight: null || 0,
        innerWidth: null || 0,
    });

    /**
     * `useLayoutEffect` is a version of `useEffect` that fires before the browser repaints the screen.
     *
     * Use with caution, can hurt performance. Prefer `useEffect` when possible.
     *
     * https://react.dev/reference/react/useLayoutEffect
     */
    useLayoutEffect(() => {
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
