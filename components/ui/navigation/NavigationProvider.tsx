import { FC, ReactNode, useMemo, useState } from "react";
import { NavigationContext } from "./NavigationContext";

export interface NavigationProviderProps {
    children: ReactNode;
    onNavigate: (navigation: Type_Navigation) => void;
}

export const NavigationProvider: FC<NavigationProviderProps> = ({
    onNavigate,
    children,
}) => {
    const [navigating, setNavigating] = useState(false);

    // Calculate the values between re-rendering
    const navigationContextPropsMemo = useMemo(() => {
        return {
            navigating,
            setNavigating,
            onNavigate,
        };
    }, [navigating, onNavigate]);
    return (
        <NavigationContext.Provider value={navigationContextPropsMemo}>
            {children}
        </NavigationContext.Provider>
    );
};
