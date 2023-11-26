"use client";

/**
 * @description
 * Enables the parent component to toggle the overlay.
 *
 * By default the overlay is toggled open when navigation buttons are clicked.
 *
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 */

import { RefObject, useEffect, useRef } from "react";
import { useSideBarProps } from "./useSidebarProps";

export const useSidebar = (): RefObject<useSideBarProps> => {
    const ref = useRef<useSideBarProps>(null);

    useEffect(() => {
        //TODO: complete implementation
        if (ref.current) ref.current?.toggleTracker();
        console.log("SIDEref: ", ref.current?.divRef?.current?.style.display);
    }, [ref]);

    return ref;
};
