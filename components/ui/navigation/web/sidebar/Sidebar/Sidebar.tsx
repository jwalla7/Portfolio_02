"use client";

/**
 * @description
 * This component creates a vertical navigation bar with nested nav and theme buttons.
 */

import { forwardRef, useTransition } from "react";
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

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(({ overlayRef, sidebarRef }, ref) => {
    const [_, startTransition] = useTransition();
    const navButtonData = useNavButtonData();
    const themeButtonData = useThemeButtonData();
    const url = usePathname();
    return (
        <div className={cn(sidebarStyles({ root: "active" }))}>
            <div className={cn(sidebarStyles({ nav: "active" }))} ref={overlayRef}>
                {Array.from(navButtonData.keys()).map((key, index) => {
                    const buttonID = navButtonData.get(key);
                    return (
                        <NavigationMenuLink
                            key={index}
                            className="no-underline"
                            href={buttonID?.route ?? "/"}
                            onClick={() => {
                                if (sidebarRef?.current) {
                                    sidebarRef?.current?.toggleTracker();
                                }
                                if (buttonID?.route === url) {
                                    startTransition(() => {
                                        (event: Event) => {
                                            event.preventDefault();
                                            event.stopPropagation();
                                        };
                                    });
                                }
                            }}
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
