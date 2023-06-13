import { Dispatch, SetStateAction, createContext } from "react";

export interface NavigationContextProps {
    navigating: boolean;
    // `dispatch` function returned by `useState` hook, managing a boolean "state" value
    setNavigating: Dispatch<SetStateAction<boolean>>;
    onNavigate?: (navigation: Type_Navigation) => void;
}

export const NavigationContext = createContext<NavigationContextProps>({
    navigating: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setNavigating: () => {},
});
