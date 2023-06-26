"use client";

import React, { useEffect, useState } from "react";
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
    const [mounted, setMount] = useState<boolean>(false);
    const [_, startTransition] = React.useTransition();

    console.log(theme);
    /**
     * After initial render, checks accessibility of theme and establishes theme to `system`.
     */
    React.useEffect(() => {
        setMount(true);
        console.log("initial theme: ", theme);
        setTheme("system");
        console.log("set theme: ", theme);
    }, []);

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <Button
                    variant="default"
                    size="sm"
                    className="flex flex-wrap items-center gap-1 h-8 w-21 px-0 "
                >
                    {theme === "light" ? (
                        <i>
                            <IconSun
                                setMotion={true}
                                className="mr-2 h-9 w-9"
                            />
                            <span>Theme</span>
                        </i>
                    ) : theme === "dark" ? (
                        <i>
                            <IconMoon
                                setMotion={true}
                                iconDirection="-45_rotation"
                                className="mr-2 h-9 w-9"
                            />
                            <label>Theme</label>
                        </i>
                    ) : (
                        <i>
                            <IconCircleHalf
                                setMotion={true}
                                className="mr-2 h-9 w-9"
                            />
                            <span>Theme</span>
                        </i>
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
                        <i>
                            <IconSun
                                setMotion={false}
                                className="mr-2 h-9 w-9"
                            />
                            <span>Light</span>
                        </i>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                        onClick={() => {
                            startTransition(() => {
                                setTheme("dark");
                            });
                        }}
                        className="flex"
                    >
                        <i>
                            <IconMoon
                                setMotion={false}
                                iconDirection="0_rotation"
                                className="mr-2 h-9 w-9"
                            />
                            <span>Dark</span>
                        </i>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                        onClick={() => {
                            startTransition(() => {
                                setTheme("system");
                            });
                        }}
                        className="flex"
                    >
                        <i>
                            <IconCircleHalf
                                setMotion={false}
                                className="mr-2 h-9 w-9"
                            />
                            <span>Auto</span>
                        </i>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
});
ThemeToggleDropdown.displayName = "ThemeToggleDropdown";

export { ThemeToggleDropdown };
