"use client";

import React, { useEffect, useState, useTransition } from "react";

import { ThemeToggleDropdownProps } from "./themeToggleDropdownProps";
import { ButtonWithLabel } from "../../../button/ButtonWithLabel/ButtonWithLabel";
import { IconSun } from "../../../icons/phosphor/IconSun";
import { IconMoon } from "../../../icons/phosphor/IconMoon";
import { IconCircleHalf } from "../../../icons/phosphor/IconCircleHalf";

import { useTheme } from "next-themes";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuPortal,
} from "@radix-ui/react-dropdown-menu";

export const ThemeToggleDropdown = React.forwardRef<
    HTMLButtonElement,
    ThemeToggleDropdownProps
>(() => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMount] = useState<boolean>(false);
    const [_, startTransition] = useTransition();
    /**
     * Executes once after initial render,
     * checks accessibility of theme and establishes theme to `system`.
     */
    useEffect(() => {
        setMount(true);
        console.log("initial theme: ", theme);
        setTheme("system");
        console.log("set theme: ", theme);
    }, []);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <ButtonWithLabel
                    variant="ghost"
                    className="flex max-w-max px-1 py-1 shadow-blackA7"
                    label="Theme"
                    size="sm"
                >
                    {theme === "light" ? (
                        <div className="flex gap-6 items-center justify-start">
                            <i className="flex max-h-max max-w-max">
                                <IconSun setMotion={true} className="h-8 w-8" />
                            </i>
                        </div>
                    ) : theme === "dark" ? (
                        <i className="flex max-h-max max-w-max">
                            <IconMoon
                                setMotion={true}
                                iconDirection="-45_rotation"
                                className="h-8 w-8"
                            />
                        </i>
                    ) : (
                        <i className="flex max-h-max max-w-max">
                            <IconCircleHalf
                                setMotion={true}
                                className="h-8 w-8"
                            />
                        </i>
                    )}
                </ButtonWithLabel>
            </DropdownMenuTrigger>
            <DropdownMenuPortal>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem
                        onClick={() => {
                            startTransition(() => {
                                setTheme("light");
                            });
                        }}
                        className="flex"
                    >
                        <i>
                            <IconSun setMotion={false} className="h-8 w-8" />
                            <span>Light</span>
                        </i>
                    </DropdownMenuItem>
                    <DropdownMenuItem
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
                    </DropdownMenuItem>
                    <DropdownMenuItem
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
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenuPortal>
        </DropdownMenu>
    );
});

ThemeToggleDropdown.displayName = "ThemeToggleDropdown";
