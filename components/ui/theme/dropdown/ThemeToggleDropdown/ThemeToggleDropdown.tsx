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
            <div className="box-border flex flex-col justify-center items-center flex-grow basis-full gap-[55px] px-[39px]">
                <DropdownMenuTrigger asChild>
                    <ButtonWithLabel
                        variant="default"
                        label="Theme"
                        size="default"
                    >
                        {theme === "light" ? (
                            <IconSun setMotion={true} />
                        ) : theme === "dark" ? (
                            <IconMoon
                                setMotion={true}
                                iconDirection="-45_rotation"
                            />
                        ) : (
                            <IconCircleHalf setMotion={true} />
                        )}
                    </ButtonWithLabel>
                </DropdownMenuTrigger>
                <DropdownMenuPortal>
                    <DropdownMenuContent className="box-border flex flex-col justify-center items-start flex-grow basis-full gap-[55px] px-[39px]">
                        <DropdownMenuItem
                            onClick={() => {
                                startTransition(() => {
                                    setTheme("light");
                                });
                            }}
                            className="flex"
                        >
                            <ButtonWithLabel
                                variant="ghost"
                                label="Light"
                                size="default"
                            >
                                <IconSun setMotion={false} />
                            </ButtonWithLabel>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => {
                                startTransition(() => {
                                    setTheme("dark");
                                });
                            }}
                            className="flex"
                        >
                            <ButtonWithLabel
                                variant="ghost"
                                label="Dark"
                                size="default"
                            >
                                <IconMoon
                                    setMotion={false}
                                    iconDirection="0_rotation"
                                />
                            </ButtonWithLabel>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => {
                                startTransition(() => {
                                    setTheme("system");
                                });
                            }}
                            className="flex"
                        >
                            <ButtonWithLabel
                                variant="ghost"
                                label="Auto"
                                size="default"
                            >
                                <IconCircleHalf setMotion={false} />
                            </ButtonWithLabel>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenuPortal>
            </div>
        </DropdownMenu>
    );
});

ThemeToggleDropdown.displayName = "ThemeToggleDropdown";
