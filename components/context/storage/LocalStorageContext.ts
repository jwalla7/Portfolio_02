import { createContext, useContext } from "react";
import { localStorageContextProps } from "./localStorageContextProps";

export const LocalStorageContext = createContext<localStorageContextProps>({
    divRef: undefined,
    isSidebarOpen: false,
    toggleSidebarTracker: () => ({}),
    getLocalStorageItem: () => null,
    setLocalStorageItem: () => ({}),
    setIsSidebarOpen: () => ({}),
});

export const useLocalStorageContext = () => {
    return useContext(LocalStorageContext);
};
