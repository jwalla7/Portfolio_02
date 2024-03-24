"use client";

import { FC, use, useCallback, useEffect, useMemo, useRef } from "react";
import { SidebarProviderProps } from "./sidebarProviderProps";
import { SidebarContext } from "./SidebarContext";
import { useLocalStorageContext } from "../storage/LocalStorageContext";

export const SidebarProvider: FC<SidebarProviderProps> = ({ children }) => {
    const { isSidebarOpen } = useLocalStorageContext();

    const newDisplayStateRef = useRef<HTMLDivElement | null>(null);
    const setDisplayStateRef = useCallback(
        (ref: HTMLDivElement | null) => {
            if (ref) {
                newDisplayStateRef.current = ref;
            }
        },
        [newDisplayStateRef]
    );

    const openSidebar = useCallback(() => {
        const ref = newDisplayStateRef.current;
        if (ref) {
            ref.classList.remove("hidden");
            ref.classList.add("flex");
            ref.setAttribute("data-state", "open");
            ref.setAttribute("aria-expanded", "true");
            localStorage.setItem("sidebar", "open");
        }
    }, []);

    const closeSidebar = useCallback(() => {
        const ref = newDisplayStateRef.current;
        if (ref) {
            ref.classList.remove("flex");
            ref.classList.add("hidden");
            ref.removeAttribute("aria-expanded");
            localStorage.setItem("sidebar", "closed");
        }
    }, []);

    useEffect(() => {
        if (isSidebarOpen) {
            openSidebar();
        } else {
            closeSidebar();
        }
    }, [openSidebar, closeSidebar, isSidebarOpen]);

    const values = useMemo(() => {
        return {
            openSidebar,
            closeSidebar,
            newDisplayStateRef,
            setDisplayStateRef,
        };
    }, [openSidebar, closeSidebar, newDisplayStateRef, setDisplayStateRef]);

    return <SidebarContext.Provider value={values}>{children}</SidebarContext.Provider>;
};
