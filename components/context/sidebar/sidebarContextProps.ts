import { MutableRefObject } from "react";

export interface sidebarContextProps {
    openSidebar: () => void;
    closeSidebar: () => void;
    setDisplayStateRef: (ref: HTMLDivElement | null) => void;
    newDisplayStateRef: MutableRefObject<HTMLDivElement | null> | undefined;
    forceMount: boolean | undefined;
    setForceMount: (forceMount: boolean | undefined) => void;
}
