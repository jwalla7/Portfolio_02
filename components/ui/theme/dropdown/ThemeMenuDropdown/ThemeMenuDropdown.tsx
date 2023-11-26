"use client";

import React from "react";
import ThemeMenuDropdownProps from "./themeMenuDropdownProps";
/**
 * Radix UI
 * Enables accessibility to navigation menu primitives
 * https://www.radix-ui.com/docs/primitives/components/navigation-menu
 */
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuIndicator,
    NavigationMenuViewport,
} from "@radix-ui/react-navigation-menu";

const ThemeMenuDropdown: React.FC<ThemeMenuDropdownProps> = ({ children }) => {
    return (
        <NavigationMenu className="relative z-10 flex max-w-max flex-1 justify-center">
            <NavigationMenuList className="group flex flex-1 list-none items-center justify-center space-x-1">
                <NavigationMenuItem>
                    <NavigationMenuTrigger
                        asChild
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                        {children}
                    </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuIndicator className="top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in">
                    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
                </NavigationMenuIndicator>
            </NavigationMenuList>
            <div className="absolute left-0 top-full flex justify-center">
                <NavigationMenuViewport className="origin-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]" />
            </div>
        </NavigationMenu>
    );
};

export default ThemeMenuDropdown;
