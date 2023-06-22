"use client";

import React from "react";
import { useTheme } from "next-themes";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { IconSun } from "../icons/phosphor/IconSun";
import { IconMoon } from "../icons/phosphor/IconMoon";
import { Button } from "../button/Button";
import { IconHouse } from "../icons/phosphor/IconHouse";

export interface ThemeToggleGroupProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
}

const ThemeToggleGroup = React.forwardRef<
    HTMLButtonElement,
    ThemeToggleGroupProps
>(() => {
    const { theme, setTheme } = useTheme();
    const [_, startTransition] = React.useTransition();

    return (
        <>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                    <Button variant="default">
                        {theme === "system" ? (
                            <IconHouse className="h-9 w-9" />
                        ) : theme === "dark" ? (
                            <IconMoon
                                iconDirection="0_rotation"
                                className="h-9 w-9"
                            />
                        ) : (
                            <IconSun className="h-9 w-9" />
                        )}
                        <span className="sr-only">Toggle theme</span>
                        {/* rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 */}
                        {/* rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 */}
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                    <DropdownMenu.Content align="end">
                        <DropdownMenu.Item
                            onClick={() => {
                                startTransition(() => {
                                    setTheme("light");
                                });
                            }}
                        >
                            Light
                        </DropdownMenu.Item>
                        <DropdownMenu.Item
                            onClick={() => {
                                startTransition(() => {
                                    setTheme("dark");
                                });
                            }}
                        >
                            Dark
                        </DropdownMenu.Item>
                        <DropdownMenu.Item
                            onClick={() => {
                                startTransition(() => {
                                    setTheme("system");
                                });
                            }}
                        >
                            System
                        </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>
        </>
    );
});
ThemeToggleGroup.displayName = "ThemeToggleGroup";

export { ThemeToggleGroup };
