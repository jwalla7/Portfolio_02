"use client";

/**
 * @description
 * This component creates a vertical navigation bar with nested nav and theme buttons.
 */

import { forwardRef, useCallback } from "react";
import { ButtonWithLabel } from "@/components/ui/button/ButtonWithLabel/ButtonWithLabel";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { SidebarProps } from "./sidebarProps";
import { ThemeToggleGroup } from "@/components/ui/theme/toggle/ThemeToggleGroup/ThemeToggleGroup";
import { ToggleGroup } from "@radix-ui/react-toggle-group";
import { cn } from "@/lib/utils";
import { sidebarStyles } from "./sidebarStyles";
import { themeToggleGroupStyles } from "@/components/ui/theme/toggle/ThemeToggleGroup/themeToggleGroupStyles";
import { useNavButtonData } from "@/components/hooks/useNavButtonData/useNavButtonData";
import { usePathname } from "next/dist/client/components/navigation";
import { useThemeButtonData } from "@/components/hooks/useThemeButtonData/useThemeButtonData";
import { ButtonWithLabelProps } from "@/components/ui/button/ButtonWithLabel/buttonWithLabelProps";

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>((_, ref) => {
    const navButtonData = useNavButtonData();
    const themeButtonData = useThemeButtonData();
    const url = usePathname();

    const navClickEvent = useCallback(
        (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, buttonRoute: ButtonWithLabelProps | undefined) => {
            if (buttonRoute?.route === url) {
                event.preventDefault();
                event.stopPropagation();
            }
        },
        [url]
    );

    return (
        <div className={cn(sidebarStyles({ root: "active" }))}>
            <div className={cn(sidebarStyles({ nav: "active" }))} ref={ref}>
                {Array.from(navButtonData.keys()).map((key, index) => {
                    const buttonID = navButtonData.get(key);
                    return (
                        <NavigationMenuLink
                            key={index}
                            tabIndex={-1}
                            className="no-underline flex-nowrap"
                            href={buttonID?.route ?? "/"}
                            onClick={(event) => navClickEvent(event, buttonID)}
                        >
                            <ButtonWithLabel
                                key={index}
                                rootdiv={buttonID?.rootdiv}
                                buttondiv={buttonID?.buttondiv}
                                labeldiv={buttonID?.labeldiv}
                                textdiv={buttonID?.textdiv}
                                label={buttonID?.label}
                                icon={buttonID?.icon}
                                route={buttonID?.route}
                                buttonRef={buttonID?.buttonRef}
                                active={buttonID?.route === url}
                            />
                        </NavigationMenuLink>
                    );
                })}
            </div>
            <div className={cn(sidebarStyles({ theme: "active" }))} ref={ref}>
                <ToggleGroup
                    className={cn(themeToggleGroupStyles({ togglediv: "default" }))}
                    type="single"
                    orientation="horizontal"
                    aria-label="Text alignment"
                >
                    {Array.from(themeButtonData.keys()).map((key, index) => {
                        const themeButtonID = themeButtonData.get(key);
                        return (
                            <ThemeToggleGroup
                                key={index}
                                tabIndex={-1}
                                active
                                title={themeButtonID?.title}
                                togglediv={themeButtonID?.togglediv}
                                itemdiv={themeButtonID?.itemdiv}
                                labeldiv={themeButtonID?.labeldiv}
                                labeltext={themeButtonID?.labeltext}
                                icondiv={themeButtonID?.icondiv}
                                label={themeButtonID?.label}
                                icon={themeButtonID?.icon}
                                value={themeButtonID?.value}
                                buttoneventsref={themeButtonID?.buttoneventsref}
                            />
                        );
                    })}
                </ToggleGroup>
            </div>
        </div>
    );
});

Sidebar.displayName = "Sidebar";
