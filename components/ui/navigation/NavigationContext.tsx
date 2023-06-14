import { Type_Navigation } from "@/types/navigation";
import { Dispatch, SetStateAction, createContext } from "react";

/**
 * Context lets the parent component make data available to any component in the
 * tree below it. React.Consumer / React.Provider
 *
 * https://react.dev/reference/react/createContext
 * https://react.dev/learn/passing-data-deeply-with-context
 */
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
