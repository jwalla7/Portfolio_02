"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "../button/Button";
import { IconMoon } from "../icons/phosphor/IconMoon";
import { IconSun } from "../icons/phosphor/IconSun";

// TODO import buttons menu,content,items,trigger

export function ThemeToggle(): React.JSX.Element {
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
            {!theme ? null : theme === "dark" ? (
                <IconMoon className="rounded-smi-4 [background:linear-gradient(90deg,_rgba(255,_255,_255,_0.89),_rgba(255,_255,_255,_0.89))] [backdrop-filter:blur(12.4px)] w-[66.78px] h-[66.78px] flex flex-row p-[9px] box-border items-center justify-center" />
            ) : (
                <IconSun className="rounded-smi-4 [background:linear-gradient(90deg,_rgba(255,_255,_255,_0.89),_rgba(255,_255,_255,_0.89))] [backdrop-filter:blur(12.4px)] w-[66.78px] h-[66.78px] flex flex-row p-[9px] box-border items-center justify-center" />
            )}
            <span> Your current theme is {theme}</span>
        </Button>
    );
}
