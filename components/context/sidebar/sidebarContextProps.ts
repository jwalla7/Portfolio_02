import { MutableRefObject } from "react";

export interface sidebarContextProps {
    openSidebar: () => void;
    closeSidebar: () => void;
    setDisplayStateRef: (ref: HTMLDivElement | null) => void;
    newDisplayStateRef: MutableRefObject<HTMLDivElement | null> | undefined;
}
