"use client";

/* eslint-disable @typescript-eslint/no-unused-expressions */

import { forwardRef, useTransition } from "react";
import { useTheme } from "next-themes";
import { ThemeToggleGroupProps } from "./themeToggleGroupProps";
import { ToggleGroupItem } from "@radix-ui/react-toggle-group";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { robotoRegular } from "@/design/fontDefaults";
import { themeToggleGroupStyles } from "./themeToggleGroupStyles";

export const ThemeToggleGroup = forwardRef<HTMLButtonElement, ThemeToggleGroupProps>(
    ({ active, title, label, icon, value, ...props }, ref) => {
        /**
         * theme
         */
        const { theme, setTheme, resolvedTheme } = useTheme();
        /**
         * useTransition
         */
        const [_, startTransition] = useTransition();
        _;
        /**
         * currentTheme
         *
         * States the current theme or system theme.
         */
        const currentTheme = theme ?? resolvedTheme;
        /**
         * targetTheme
         *
         * Confirms the target theme button's title as a lowercase string.
         */
        const targetTheme = title?.toLocaleLowerCase();
        /**
         * active
         *
         * Confirms if the current theme or system theme matches the target theme button's title.
         */
        active = currentTheme === title?.toLocaleLowerCase();

        return (
            <ToggleGroupItem
                className={cn(themeToggleGroupStyles({ itemdiv: "default" }))}
                value={cn(value)}
                onClick={() => {
                    startTransition(() => {
                        !active && targetTheme === "system"
                            ? setTheme("system")
                            : !active && targetTheme === "dark"
                                ? setTheme("dark")
                                : setTheme("light");
                    });
                }}
                {...props}
                ref={ref}
            >
                {active && targetTheme ? (
                    <motion.div whileTap={{ scale: 0.9 }} className="mb-[5%]">
                        <div className={cn(themeToggleGroupStyles({ labeldiv: "active" }))}>
                            <label className={cn(themeToggleGroupStyles({ labeltext: "active" }), robotoRegular.className)}>
                                {label}
                            </label>
                        </div>
                        <i className={cn(themeToggleGroupStyles({ icondiv: "default" }))}>{icon}</i>
                    </motion.div>
                ) : (
                    <motion.div whileHover={{ transformOrigin: "0% %55 %89 100%" }} whileTap={{ scale: 1.21 }} className="mt-[21%]">
                        <div className={cn(themeToggleGroupStyles({ labeldiv: "inactive" }))}>
                            <label className={cn(themeToggleGroupStyles({ labeltext: "inactive" }), robotoRegular.className)}>
                                {label}
                            </label>
                        </div>
                        <i className={cn(themeToggleGroupStyles({ icondiv: "default" }))}>{icon}</i>
                    </motion.div>
                )}
            </ToggleGroupItem>
        );
    }
);

ThemeToggleGroup.displayName = "ThemeToggleGroup";
