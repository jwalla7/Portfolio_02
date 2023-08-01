"use client";

import React, { forwardRef, useTransition } from "react";

import { useTheme } from "next-themes";
import { IconMoon } from "../../icons/phosphor/IconMoon";
import { IconSun } from "../../icons/phosphor/IconSun";
import { ThemeToggleProps } from "./themeToggleProps";
import { Button } from "../../button/Button/Button";

export const ThemeToggle = React.forwardRef<
    HTMLButtonElement,
    ThemeToggleProps
>(() => {
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
                <IconMoon
                    setMotion={true}
                    iconDirection="0_rotation"
                    className="w-9 h-9"
                />
            ) : (
                <IconSun setMotion={true} className="w-9 h-9" />
            )}
        </Button>
    );
});

ThemeToggle.displayName = "ThemeToggle";
