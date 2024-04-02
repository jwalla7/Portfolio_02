"use client";

import { createContext, useContext } from "react";
import { sidebarContextProps } from "./sidebarContextProps";

export const SidebarContext = createContext<sidebarContextProps>({
    openSidebar: () => ({}),
    closeSidebar: () => ({}),
    setDisplayStateRef: () => ({}),
    newDisplayStateRef: { current: null },
    forceMount: false,
    setForceMount: () => ({}),
});

export const useSidebarContext = () => useContext(SidebarContext);
