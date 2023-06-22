"use client";

import React from "react";

export interface ThemeToggleGroupProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
}

const ThemeToggleGroup = React.forwardRef<
    HTMLButtonElement,
    ThemeToggleGroupProps
>(() => {
    return (
        <>
            <button></button>
            <button></button>
            <button></button>
        </>
    );
});
ThemeToggleGroup.displayName = "ThemeToggleGroup";

export { ThemeToggleGroup };
