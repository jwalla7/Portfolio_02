"use client";

/* eslint-disable @typescript-eslint/no-unused-expressions */

import React from "react";

import { useTheme } from "next-themes";
import { IconMoon } from "../../../icons/phosphor/IconMoon";
import { IconSun } from "../../../icons/phosphor/IconSun";
import { ThemeToggleProps } from "./themeToggleProps";
import { Button } from "../../../button/Button/Button";

export const ThemeToggle = React.forwardRef<HTMLButtonElement, ThemeToggleProps>(() => {
    /** useTheme provides current theme data  */
    const { theme, setTheme } = useTheme();
    const [_, startTransition] = React.useTransition();
    _;
    return (
        <Button
            className="w-25 h-25"
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
                <IconMoon active setMotion={true} iconDirection="0_rotation" className="w-9 h-9" fill="white" />
            ) : (
                <IconSun active setMotion={true} className="w-9 h-9" />
            )}
        </Button>
    );
});

ThemeToggle.displayName = "ThemeToggle";
