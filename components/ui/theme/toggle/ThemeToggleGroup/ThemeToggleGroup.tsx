"use client";

import React from "react";
import { ThemeToggleGroupProps } from "./themeToggleGroupProps";
import { themeToggleGroupVariants } from "./themeToggleGroupVariants";
import { cn } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";

export const ThemeToggleGroup = React.forwardRef<
    HTMLButtonElement,
    ThemeToggleGroupProps
>(({ children, className, variant, size }, ref) => {
    return (
        <ToggleGroup
            className="inline-flex bg-mauve6 rounded shadow-[0_2px_10px] shadow-blackA7 space-x-px"
            type="single"
            defaultValue="center"
            aria-label="Text alignment"
        >
            <ToggleGroupItem
                className={cn(
                    themeToggleGroupVariants({ variant, size, className })
                )}
                value="left"
                aria-label="Left aligned"
            >
                {children}
            </ToggleGroupItem>
            <ToggleGroupItem
                className={cn(
                    themeToggleGroupVariants({ variant, size, className })
                )}
                value="center"
                aria-label="Center aligned"
                ref={ref}
            >
                {children}
            </ToggleGroupItem>
            <ToggleGroupItem
                className={cn(
                    themeToggleGroupVariants({ variant, size, className })
                )}
                value="right"
                aria-label="Right aligned"
                ref={ref}
            >
                {children}
            </ToggleGroupItem>
        </ToggleGroup>
    );
});

ThemeToggleGroup.displayName = "ThemeToggleGroup";
