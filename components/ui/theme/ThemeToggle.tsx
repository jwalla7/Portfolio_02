"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "../button/Button";
import { IconMoon } from "../icons/phosphor/IconMoon";
import { IconSun } from "../icons/phosphor/IconSun";

// TODO import buttons menu,content,items,trigger

export interface ThemeToggleProps {
    children?: React.ReactNode;
}

const ThemeToggle: React.FC<ThemeToggleProps> = () => {
    /** useTheme provides current theme data  */
    const { theme, setTheme } = useTheme();
    const [_, startTransition] = React.useTransition();

    return (
        <Button
            variant="secondary"
            onClick={() => {
                startTransition(() => {
                    setTheme(theme === "dark" ? "light" : "dark");
                });
            }}
        >
            {!theme ? (
                theme === "system"
            ) : theme === "dark" ? (
                <IconMoon className="w-9 h-9" />
            ) : (
                <IconSun className="w-9 h-9" />
            )}
        </Button>
    );
};

export default ThemeToggle;
