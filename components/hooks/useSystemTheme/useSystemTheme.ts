import React from "react";
import { useTheme } from "next-themes";

export const useSystemTheme = () => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    console.log(`resolvedTheme`, resolvedTheme);
    /**
     * Detect the theme set by the browser systemTheme
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
     */
    const systemThemeLight: MediaQueryList = window.matchMedia(
        "(prefers-color=scheme: light)"
    );
    /**
     * `light` indicates that user's browser is either set to light or no preference
     */
    const systemThemeDark: MediaQueryList = window.matchMedia(
        "(prefers-color=scheme: dark)"
    );
    /**
     * `dark` indicates that user's browser is set to dark.
     */
    const updateSystemTheme = (): void => {
        const checkSystemTheme =
            resolvedTheme === "dark" ? setTheme("dark") : setTheme("light");

        systemThemeLight.addEventListener("change", (event) => {
            event.matches ? "light" : "dark";
            checkSystemTheme;
        });
        systemThemeDark.addEventListener("change", (event) => {
            event.matches ? "dark" : "light";
            checkSystemTheme;
        });
    };

    updateSystemTheme();

    React.useEffect(() => {
        systemThemeLight.addEventListener("change", updateSystemTheme);
        systemThemeDark.addEventListener("change", updateSystemTheme);

        return () => {
            systemThemeLight.removeEventListener("change", updateSystemTheme);
            systemThemeDark.removeEventListener("change", updateSystemTheme);
        };
    }, [updateSystemTheme]);

    return theme;
};
