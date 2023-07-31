"use client";

import React from "react";
import { ThemeToggleGroupProps } from "./themeToggleGroupProps";
import { cn } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";
import {
    themeToggleGroupStyles,
    themeToggleGroupStylesItem,
    themeToggleGroupStylesLabel,
} from "./themeToggleGroupStyles";
import { IconCircleHalf } from "@/components/ui/icons/phosphor/IconCircleHalf";

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
                <div>
                    <label className={cn(themeToggleGroupStylesLabel())}>
                        Light
                    </label>
                </div>
                <i className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 w-[60.29px] h-[60.29px] relative gap-[11.7364px] p-[8.1252px] rounded-[11.2px]">
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
                <div>
                    <label className={cn(themeToggleGroupStylesLabel())}>
                        Auto
                    </label>
                </div>
                <i className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 w-[60.29px] h-[60.29px] relative gap-[11.7364px] p-[8.1252px] rounded-[11.2px]">
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
                <div>
                    <label className={cn(themeToggleGroupStylesLabel())}>
                        Dark
                    </label>
                </div>
                <i className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 w-[60.29px] h-[60.29px] relative gap-[11.7364px] p-[8.1252px] rounded-[11.2px]">
                    <IconCircleHalf
                        setMotion={true}
                        className="block flex-grow-0 flex-shrink-0 w-[32.5px] h-[32.5px] relative"
                    />
                </i>
            </ToggleGroupItem>
        </ToggleGroup>
    );
});

ThemeToggleGroup.displayName = "ThemeToggleGroup";
