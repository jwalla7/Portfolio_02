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
import { cn } from "@/lib/utils";
import { themeToggleDropdownVariants } from "./themeToggleDropdownVariants";

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
    }, []);

    if (!mounted) return null;

    return (
        <DropdownMenu>
            <div className="box-border flex flex-col justify-center items-center flex-grow basis-full gap-[55px] px-[34px]">
                <DropdownMenuTrigger asChild>
                    <ButtonWithLabel
                        button="default"
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
                    <DropdownMenuContent
                        className={cn(
                            themeToggleDropdownVariants.dropdownMenuContent()
                        )}
                    >
                        <DropdownMenuItem
                            onClick={() => {
                                startTransition(() => {
                                    setTheme("light");
                                });
                            }}
                            className="box-border flex flex-col justify-center items-center flex-grow basis-full gap-[55px] px-[39px] focus:outline-none"
                        >
                            <ButtonWithLabel
                                button="glass"
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
                            className="box-border flex flex-col justify-center items-center flex-grow basis-full gap-[55px] px-[39px] focus:outline-none"
                        >
                            <ButtonWithLabel
                                button="glass"
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
                            className="box-border flex flex-col justify-center items-center flex-grow basis-full gap-[55px] px-[39px] focus:outline-none"
                        >
                            <ButtonWithLabel
                                button="glass"
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
