"use client";

import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SidebarProviderProps } from "./sidebarProviderProps";
import { SidebarContext } from "./SidebarContext";
import { useLocalStorageContext } from "../storage/LocalStorageContext";

export const SidebarProvider: FC<SidebarProviderProps> = ({ children }) => {
    const { isLocalStorageSidebarOpen } = useLocalStorageContext();
    const [forceMount, setForceMount] = useState<boolean | undefined>(false);

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
            if (window.localStorage.getItem("sidebar") !== "open") {
                localStorage.setItem("sidebar", "open");
            }
        }
    }, []);

    const closeSidebar = useCallback(() => {
        const ref = newDisplayStateRef.current;
        if (ref) {
            ref.classList.remove("flex");
            ref.classList.add("hidden");
            ref.removeAttribute("aria-expanded");
            if (window.localStorage.getItem("sidebar") !== "closed") {
                localStorage.setItem("sidebar", "closed");
            }
        }
    }, []);

    useEffect(() => {
        if (isLocalStorageSidebarOpen) {
            openSidebar();
        } else {
            closeSidebar();
        }
    }, [openSidebar, closeSidebar, isLocalStorageSidebarOpen]);

    useEffect(() => {
        if (window.localStorage.getItem("sidebar") === "open" && !forceMount) {
            setForceMount(isLocalStorageSidebarOpen);
        }
    }, [isLocalStorageSidebarOpen, forceMount]);

    const values = useMemo(() => {
        return {
            forceMount,
            setForceMount,
            openSidebar,
            closeSidebar,
            newDisplayStateRef,
            setDisplayStateRef,
        };
    }, [openSidebar, closeSidebar, newDisplayStateRef, setDisplayStateRef, forceMount, setForceMount]);

    return <SidebarContext.Provider value={values}>{children}</SidebarContext.Provider>;
};
