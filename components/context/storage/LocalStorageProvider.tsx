"use client";

import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { localStorageProviderProps } from "./localStorageProviderProps";
import { LocalStorageContext } from "./LocalStorageContext";

export const LocalStorageProvider: FC<localStorageProviderProps> = ({ children }) => {
    const [isLocalStorageSidebarOpen, setIsLocalStorageSidebarOpen] = useState<boolean | undefined>(() => {
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
        setIsLocalStorageSidebarOpen((prevState) => !prevState);
    }, []);

    const safeLocalStorage = useCallback(
        (action: "get" | "set", key: string, value?: Type_LocalStorage) => {
            if (typeof window !== "undefined" && window.localStorage) {
                if (action === "get") {
                    return getLocalStorageItem(key);
                } else if (action === "set" && value !== undefined) {
                    const storageValue = value instanceof Function ? value() : setLocalStorageItem(key, value);
                    setIsLocalStorageSidebarOpen(true);
                    // toggleSidebarTracker();
                    return storageValue;
                }
            }
        },
        [getLocalStorageItem, setLocalStorageItem]
    );

    useEffect(() => {
        safeLocalStorage("set", "sidebar", isLocalStorageSidebarOpen ? "open" : "closed");
    }, [isLocalStorageSidebarOpen, safeLocalStorage]);

    const values = useMemo(() => {
        return {
            isLocalStorageSidebarOpen,
            toggleSidebarTracker,
            setIsLocalStorageSidebarOpen,
        };
    }, [isLocalStorageSidebarOpen, toggleSidebarTracker, setIsLocalStorageSidebarOpen]);

    return <LocalStorageContext.Provider value={values}>{children}</LocalStorageContext.Provider>;
};
