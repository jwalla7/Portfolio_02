"use client";

import React from "react";
import { useTheme } from "next-themes";

export interface ThemeToggleGroupProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
}

const ThemeToggleGroup = React.forwardRef<
    HTMLButtonElement,
    ThemeToggleGroupProps
>(() => {
    const { setTheme } = useTheme();

    return <div></div>;
});
ThemeToggleGroup.displayName = "ThemeToggleGroup";

export { ThemeToggleGroup };
