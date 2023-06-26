"use client";

import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "../button/Button";
import { IconSun } from "../icons/phosphor/IconSun";
import { IconMoon } from "../icons/phosphor/IconMoon";
import { IconCircleHalf } from "../icons/phosphor/IconCircleHalf";

export interface ThemeToggleDropdownProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
}

const ThemeToggleDropdown = React.forwardRef<
    HTMLButtonElement,
    ThemeToggleDropdownProps
>(() => {
    const { theme, setTheme } = useTheme();
    const [_, startTransition] = React.useTransition();

    console.log(theme);

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <Button variant="default">
                    {theme === "light" ? (
                        <menu>
                            <IconSun setMotion={true} className="h-9 w-9" />
                            <label>Theme</label>
                        </menu>
                    ) : theme === "dark" ? (
                        <menu>
                            <IconMoon
                                setMotion={true}
                                iconDirection="-45_rotation"
                                className="h-9 w-9"
                            />
                            <label>Theme</label>
                        </menu>
                    ) : (
                        <menu>
                            <IconCircleHalf
                                setMotion={true}
                                className="h-9 w-9"
                            />
                            <label>Theme</label>
                        </menu>
                    )}
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
                        className="flex"
                    >
                        <IconSun setMotion={false} className="h-9 w-9" />
                        <label>Light</label>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                        onClick={() => {
                            startTransition(() => {
                                setTheme("dark");
                            });
                        }}
                        className="flex"
                    >
                        <IconMoon
                            setMotion={false}
                            iconDirection="0_rotation"
                            className="h-9 w-9"
                        />
                        <label>Dark</label>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                        onClick={() => {
                            startTransition(() => {
                                setTheme("system");
                            });
                        }}
                        className="flex"
                    >
                        <IconCircleHalf setMotion={false} className="h-9 w-9" />
                        <label>Auto</label>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
});
ThemeToggleDropdown.displayName = "ThemeToggleDropdown";

export { ThemeToggleDropdown };
