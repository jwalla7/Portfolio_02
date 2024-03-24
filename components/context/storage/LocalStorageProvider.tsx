"use client";

import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { localStorageProviderProps } from "./localStorageProviderProps";
import { LocalStorageContext } from "./LocalStorageContext";

export const LocalStorageProvider: FC<localStorageProviderProps> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean | undefined>(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("sidebar") === "open";
        }
        return false;
    });
    const setLocalStorageItem = useCallback((key: string, value: Type_LocalStorage) => {
        try {
            localStorage.setItem(key, JSON.stringify(value).slice(1, -1));
        } catch (error) {
            console.error("ERROR:", error);
        }
    }, []);

    const getLocalStorageItem = useCallback((key: string) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error("ERROR:", error);
        }
    }, []);

    const toggleSidebarTracker = useCallback(() => {
        setIsSidebarOpen((prevState) => !prevState);
    }, []);

    const safeLocalStorage = useCallback(
        (action: "get" | "set", key: string, value?: Type_LocalStorage) => {
            if (typeof window !== "undefined" && window.localStorage) {
                if (action === "get") {
                    return getLocalStorageItem(key);
                } else if (action === "set" && value !== undefined) {
                    const storageValue = value instanceof Function ? value() : setLocalStorageItem(key, value);
                    setIsSidebarOpen(true);
                    // toggleSidebarTracker();
                    return storageValue;
                }
            }
        },
        [getLocalStorageItem, setLocalStorageItem]
    );

    useEffect(() => {
        safeLocalStorage("set", "sidebar", isSidebarOpen ? "open" : "closed");
        // localStorage.setItem("sidebar", isSidebarOpen ? "open" : "closed");
    }, [isSidebarOpen, safeLocalStorage]);

    const values = useMemo(() => {
        return {
            isSidebarOpen,
            toggleSidebarTracker,
            setIsSidebarOpen,
        };
    }, [isSidebarOpen, toggleSidebarTracker, setIsSidebarOpen]);

    return <LocalStorageContext.Provider value={values}>{children}</LocalStorageContext.Provider>;
};
