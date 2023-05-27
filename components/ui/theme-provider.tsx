"use client";

import * as React from "react";
import { ThemeProvider as PrimeThemeProvider } from "@primer/react";
import { ThemeProviderProps } from "@primer/react";

/* 
ThemeProvider, ThemeProviderProps
https://github.com/primer/react/blob/main/src/ThemeProvider.tsx 
*/

export function ThemeProvider({ ...props }: ThemeProviderProps) {
    return <PrimeThemeProvider {...props}></PrimeThemeProvider>;
}
