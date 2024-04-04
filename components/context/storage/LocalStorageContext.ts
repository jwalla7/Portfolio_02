import { createContext, useContext } from "react";
import { localStorageContextProps } from "./localStorageContextProps";

export const LocalStorageContext = createContext<localStorageContextProps>({
    divRef: undefined,
    isLocalStorageSidebarOpen: false,
    toggleSidebarTracker: () => ({}),
    getLocalStorageItem: () => null,
    setLocalStorageItem: () => ({}),
    setIsLocalStorageSidebarOpen: () => ({}),
});

export const useLocalStorageContext = () => {
    return useContext(LocalStorageContext);
};
