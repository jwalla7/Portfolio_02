"use client";

import React from "react";
import { useTheme } from "next-themes";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "../button/Button";
import { IconSun } from "../icons/phosphor/IconSun";
import { IconMoon } from "../icons/phosphor/IconMoon";
import { IconHouse } from "../icons/phosphor/IconHouse";

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

    const showTheme = () => {
        if (!theme) {
            setTheme("system");
        }
        if (theme === "system") {
            return (
                <menu>
                    <IconHouse setMotion={true} className="h-9 w-9" />
                    <label>Theme</label>
                </menu>
            );
        }
        if (theme === "dark") {
            return (
                <menu>
                    <IconMoon
                        setMotion={true}
                        iconDirection="-45_rotation"
                        className="h-9 w-9"
                    />
                    <label>Theme</label>
                </menu>
            );
        }

        if (theme == "light") {
            return (
                <menu>
                    <IconSun setMotion={true} className="h-9 w-9" />
                    <label>Theme</label>
                </menu>
            );
        }
    };
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <Button variant="default" ref={showTheme}>
                    {/* {theme === "system" ? (
                        <menu>
                            <IconHouse setMotion={true} className="h-9 w-9" />
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
                            <IconSun setMotion={true} className="h-9 w-9" />
                            <label>Theme</label>
                        </menu>
                    )} */}
                    {showTheme()}
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
                        <IconHouse setMotion={false} className="h-9 w-9" />
                        <label>Auto</label>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
});
ThemeToggleDropdown.displayName = "ThemeToggleDropdown";

export { ThemeToggleDropdown };
