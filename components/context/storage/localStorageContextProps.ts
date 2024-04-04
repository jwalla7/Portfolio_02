import { MutableRefObject, ReactNode } from "react";

export interface localStorageContextProps {
    children?: ReactNode;
    isLocalStorageSidebarOpen: boolean | undefined;
    setIsLocalStorageSidebarOpen?: (value: boolean) => void;
    toggleSidebarTracker?: () => void;
    setLocalStorageItem?: (key: string, value: Type_LocalStorage) => void;
    getLocalStorageItem?: (key: string) => Type_LocalStorage | null;
    divRef?: MutableRefObject<HTMLDivElement | null> | undefined;
}
