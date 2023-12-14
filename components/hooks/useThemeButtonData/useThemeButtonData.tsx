"use client";

/**
 * @description
 * Generates and manages data for navigation buttons.
 *
 * It uses a Map data structure to store button properties like labels, icons, and routes, dynamically changing them based on the current Theme.
 *
 * Data is memoized, making it available for rendering theme buttons in components based on the Theme.
 */

import { useMemo, useRef } from "react";
import { IconSun } from "@/components/ui/icons/phosphor/IconSun";
import { ThemeToggleGroupProps } from "@/components/ui/theme/toggle/ThemeToggleGroup/themeToggleGroupProps";
import { IconCircleHalf } from "@/components/ui/icons/phosphor/IconCircleHalf";
import { cn } from "@/lib/utils";
import { IconMoon } from "@/components/ui/icons/phosphor/IconMoon";
import { useTheme } from "next-themes";
import { themeToggleGroupStyles } from "@/components/ui/theme/toggle/ThemeToggleGroup/themeToggleGroupStyles";
import { v4 as uuidv4 } from "uuid";

export function useThemeButtonData() {
    const themeButtonRef = useRef(null);
    const { theme, resolvedTheme } = useTheme();
    const currentTheme = theme ?? resolvedTheme;

    const themeButtonData = useMemo(() => {
        const themeMap = new Map<string, ThemeToggleGroupProps>();
        /**
         * Light Theme Button Data
         */
        themeMap.set(uuidv4(), {
            title: "light",
            label: "Light",
            togglediv: "default",
            itemdiv: "default",
            labeldiv: "active",
            icondiv: "default",
            active: currentTheme === "light",
            icon: (
                <IconSun
                    fillOpacity={100}
                    active={currentTheme === "light"}
                    setMotion={true}
                    className={cn(
                        currentTheme === "light"
                            ? cn(themeToggleGroupStyles({ iconsvg: "active" }))
                            : cn(
                                  themeToggleGroupStyles({
                                      iconsvg: "inactive",
                                  })
                              )
                    )}
                />
            ),
            buttoneventsref: themeButtonRef,
            value: "left",
        });
        /**
         * Auto Theme Button Data
         */
        themeMap.set(uuidv4(), {
            title: "system",
            label: "Auto",
            togglediv: "default",
            itemdiv: "default",
            labeldiv: "active",
            icondiv: "default",
            active: currentTheme === "system",
            icon: (
                <IconCircleHalf
                    fillOpacity={100}
                    active={currentTheme === "system"}
                    setMotion={true}
                    className={cn(
                        currentTheme === "system"
                            ? cn(themeToggleGroupStyles({ iconsvg: "active" }))
                            : cn(
                                  themeToggleGroupStyles({
                                      iconsvg: "inactive",
                                  })
                              )
                    )}
                />
            ),
            buttoneventsref: themeButtonRef,
            value: "center",
        });
        /**
         * Dark Theme Button Data
         */
        themeMap.set(uuidv4(), {
            title: "dark",
            label: "Dark",
            togglediv: "default",
            itemdiv: "default",
            labeldiv: "active",
            icondiv: "default",
            active: currentTheme === "dark",
            icon: (
                <IconMoon
                    fillOpacity={100}
                    active={currentTheme === "dark"}
                    iconDirection="0_rotation"
                    setMotion={true}
                    className={cn(
                        currentTheme === "dark"
                            ? cn(themeToggleGroupStyles({ iconsvg: "active" }))
                            : cn(
                                  themeToggleGroupStyles({
                                      iconsvg: "inactive",
                                  })
                              )
                    )}
                />
            ),
            buttoneventsref: themeButtonRef,
            value: "right",
        });
        return themeMap;
    }, [currentTheme]);

    return themeButtonData;
}
