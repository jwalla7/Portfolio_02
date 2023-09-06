"use client";

/**
 * @description
 * This component creates a vertical navigation bar with nested nav and theme buttons.
 */

import { forwardRef } from "react";
import { ButtonWithLabel } from "@/components/ui/button/ButtonWithLabel/ButtonWithLabel";
import { NavBarVerticalProps } from "./navBarVerticalProps";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";
import { useNavButtonData } from "./NavBarVerticalData";
import { ThemeToggleGroup } from "@/components/ui/theme/toggle/ThemeToggleGroup/ThemeToggleGroup";
import { usePathname } from "next/dist/client/components/navigation";
import {
    navBarVerticalNavStyles,
    navBarVerticalRootStyles,
    navBarVerticalThemeStyles,
} from "./navBarVerticalStyles";

export const NavBarVertical = forwardRef<HTMLDivElement, NavBarVerticalProps>(
    ({ overlayRefProps }, ref) => {
        const navButtonData = useNavButtonData();
        const url = usePathname();

        return (
            <div
                className={cn(navBarVerticalRootStyles({ root: "default" }))}
                ref={ref}
            >
                <div
                    className={cn(navBarVerticalNavStyles({ nav: "default" }))}
                    ref={overlayRefProps}
                >
                    {Array.from(navButtonData.keys()).map((key, index) => {
                        const buttonID = navButtonData.get(key);
                        return (
                            <NavigationMenuLink
                                key={index}
                                className="no-underline"
                                href={
                                    buttonID?.route === url
                                        ? (event: Event) => {
                                              event.preventDefault();
                                              event.stopPropagation();
                                          }
                                        : buttonID?.route ?? "/"
                                }
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
                                    buttoneventsref={buttonID?.buttoneventsref}
                                    active={buttonID?.route === url}
                                />
                            </NavigationMenuLink>
                        );
                    })}
                </div>
                <div
                    className={cn(
                        navBarVerticalThemeStyles({ theme: "default" })
                    )}
                >
                    <ThemeToggleGroup />
                </div>
            </div>
        );
    }
);

NavBarVertical.displayName = "NavBarVertical";
