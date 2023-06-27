"use client";

import React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { ThemeToggleGroupProps } from "./themeToggleGroupProps";
import { themeToggleGroupVariants } from "./themeToggleGroupVariants";
import { cn } from "@/lib/utils";

export const ThemeToggleGroup = React.forwardRef<
    HTMLButtonElement,
    ThemeToggleGroupProps
>(({ children, className, variant, size }, ref) => {
    return (
        <ToggleGroup.Root
            className="inline-flex bg-mauve6 rounded shadow-[0_2px_10px] shadow-blackA7 space-x-px"
            type="single"
            defaultValue="center"
            aria-label="Text alignment"
        >
            <ToggleGroup.Item
                className={cn(
                    themeToggleGroupVariants({ variant, size, className })
                )}
                value="left"
                aria-label="Left aligned"
            >
                {children}
            </ToggleGroup.Item>
            <ToggleGroup.Item
                className={cn(
                    themeToggleGroupVariants({ variant, size, className })
                )}
                value="center"
                aria-label="Center aligned"
                ref={ref}
            >
                {children}
            </ToggleGroup.Item>
            <ToggleGroup.Item
                className={cn(
                    themeToggleGroupVariants({ variant, size, className })
                )}
                value="right"
                aria-label="Right aligned"
                ref={ref}
            >
                {children}
            </ToggleGroup.Item>
        </ToggleGroup.Root>
    );
});

ThemeToggleGroup.displayName = "ThemeToggleGroup";
