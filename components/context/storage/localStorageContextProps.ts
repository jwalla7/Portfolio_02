import { MutableRefObject, ReactNode } from "react";

export interface localStorageContextProps {
    children?: ReactNode;
    isSidebarOpen: boolean | undefined;
    setIsSidebarOpen?: (value: boolean) => void;
    toggleSidebarTracker?: () => void;
    setLocalStorageItem?: (key: string, value: Type_LocalStorage) => void;
    getLocalStorageItem?: (key: string) => Type_LocalStorage | null;
    divRef?: MutableRefObject<HTMLDivElement | null> | undefined;
}
