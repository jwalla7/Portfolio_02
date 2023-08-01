"use client";

import React from "react";
import { ThemeToggleGroupProps } from "./themeToggleGroupProps";
import { cn } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";
import {
    themeToggleGroupStyles,
    themeToggleGroupStylesIconDiv,
    themeToggleGroupStylesItem,
    themeToggleGroupStylesLabel,
    themeToggleGroupStylesLabelDiv,
} from "./themeToggleGroupStyles";
import { IconCircleHalf } from "@/components/ui/icons/phosphor/IconCircleHalf";
import { IconMoon } from "@/components/ui/icons/phosphor/IconMoon";

export const ThemeToggleGroup = React.forwardRef<
    HTMLButtonElement,
    ThemeToggleGroupProps
>(({ children, className, variant, size }, ref) => {
    return (
        <ToggleGroup
            className={cn(themeToggleGroupStyles())}
            type="single"
            orientation="horizontal"
            aria-label="Text alignment"
        >
            <ToggleGroupItem
                className={cn(themeToggleGroupStylesItem())}
                value="left"
                aria-label="Left aligned"
            >
                <div className={cn(themeToggleGroupStylesLabelDiv())}>
                    <label className={cn(themeToggleGroupStylesLabel())}>
                        Light
                    </label>
                </div>
                <i className={cn(themeToggleGroupStylesIconDiv())}>
                    <IconCircleHalf
                        setMotion={true}
                        className="block flex-grow-0 flex-shrink-0 w-[32.5px] h-[32.5px] relative"
                    />
                </i>
            </ToggleGroupItem>
            <ToggleGroupItem
                className={cn(themeToggleGroupStylesItem())}
                value="center"
                aria-label="Center aligned"
                ref={ref}
            >
                <div className={cn(themeToggleGroupStylesLabelDiv())}>
                    <label className={cn(themeToggleGroupStylesLabel())}>
                        Auto
                    </label>
                </div>
                <i className={cn(themeToggleGroupStylesIconDiv())}>
                    <IconCircleHalf
                        setMotion={true}
                        className="block flex-grow-0 flex-shrink-0 w-[32.5px] h-[32.5px] relative"
                    />
                </i>
            </ToggleGroupItem>
            <ToggleGroupItem
                className={cn(themeToggleGroupStylesItem())}
                value="right"
                aria-label="Right aligned"
                ref={ref}
            >
                <div className={cn(themeToggleGroupStylesLabelDiv())}>
                    <label className={cn(themeToggleGroupStylesLabel())}>
                        Dark
                    </label>
                </div>
                <i className={cn(themeToggleGroupStylesIconDiv())}>
                    <IconMoon
                        iconDirection="-45_rotation"
                        setMotion={true}
                        className="block flex-grow-0 flex-shrink-0 w-[32.5px] h-[32.5px] relative"
                    />
                </i>
            </ToggleGroupItem>
        </ToggleGroup>
    );
});

ThemeToggleGroup.displayName = "ThemeToggleGroup";
