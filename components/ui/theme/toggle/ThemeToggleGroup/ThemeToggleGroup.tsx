"use client";

import { forwardRef } from "react";
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
import { IconSun } from "@/components/ui/icons/phosphor/IconSun";
import { robotoRegular } from "@/design/fontDefaults";

export const ThemeToggleGroup = forwardRef<
    HTMLButtonElement,
    ThemeToggleGroupProps
>(() => {
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
                    <label
                        className={cn(
                            themeToggleGroupStylesLabel(),
                            robotoRegular.className
                        )}
                    >
                        Light
                    </label>
                </div>
                <i className={cn(themeToggleGroupStylesIconDiv())}>
                    <IconSun
                        setMotion={true}
                        className="block grow-0 shrink-0 w-[32.5px] h-[32.5px] relative"
                    />
                </i>
            </ToggleGroupItem>
            <ToggleGroupItem
                className={cn(themeToggleGroupStylesItem())}
                value="center"
                aria-label="Center aligned"
            >
                <div className={cn(themeToggleGroupStylesLabelDiv())}>
                    <label className={cn(themeToggleGroupStylesLabel())}>
                        Auto
                    </label>
                </div>
                <i
                    className={cn(
                        themeToggleGroupStylesIconDiv(),
                        robotoRegular.className
                    )}
                >
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
            >
                <div className={cn(themeToggleGroupStylesLabelDiv())}>
                    <label
                        className={cn(
                            themeToggleGroupStylesLabel(),
                            robotoRegular.className
                        )}
                    >
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
