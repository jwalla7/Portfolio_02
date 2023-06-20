"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "../button/Button";
import { IconMoon } from "../icons/phosphor/IconMoon";
import { IconSun } from "../icons/phosphor/IconSun";

// TODO import buttons menu,content,items,trigger

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const { _, startTransition } = React.useTransition();

    return (
        <Button
            variant="secondary"
            onClick={() => {
                startTransition(() => {
                    setTheme(theme === "dark" ? "light" : "dark");
                });
            }}
        >
            {!theme ? null : theme === "dark" ? <IconMoon /> : <IconSun />}
        </Button>
    );
}
