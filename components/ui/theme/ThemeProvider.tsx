"use client";

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return (
        <NextThemesProvider enableSystem={true} disableTransitionOnChange {...props}>
            {children}
        </NextThemesProvider>
    );
}
