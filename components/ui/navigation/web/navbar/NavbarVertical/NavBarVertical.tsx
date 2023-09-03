"use client";

/**
 * @description
 * This component will create a vertical navigation bar with nested nav and theme buttons.
 *
 * This component should be separated into smaller components according to concerns.
 *
 * This current structure is not ideal, but for the sake of time, I will leave it as is in the interim.
 */

import { forwardRef, useMemo, useRef } from "react";
import { NavBarVerticalProps } from "./navBarVerticalProps";
import { cn } from "@/lib/utils";
import { ButtonWithLabel } from "@/components/ui/button/ButtonWithLabel/ButtonWithLabel";
import { ButtonWithLabelProps } from "@/components/ui/button/ButtonWithLabel/buttonWithLabelProps";
import { ThemeToggle } from "@/components/ui/theme/toggle/ThemeToggle";
import { IconFile } from "@/components/ui/icons/phosphor/IconFile";
import { IconEqualizer } from "@/components/ui/icons/phosphor/IconEqualizer";
import { IconEnvelopSimple } from "@/components/ui/icons/phosphor/IconEnvelopeSimple";
import { IconHouse } from "@/components/ui/icons/phosphor/IconHouse";
import { IconQuotes } from "@/components/ui/icons/phosphor/IconQuotes";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { usePathname } from "next/dist/client/components/navigation";
import {
    navBarVerticalNavStyles,
    navBarVerticalRootStyles,
    navBarVerticalThemeStyles,
} from "./navBarVerticalStyles";

export const NavBarVertical = forwardRef<HTMLDivElement, NavBarVerticalProps>(
    ({ overlayRefProps }, ref) => {
        // TODO: Create a theme button ref
        // const themeButtonRef = useRef(null);
        const navButtonRef = useRef<HTMLButtonElement | null>(null);
        /**
         * Stores data that will determine the shape and quantity of the buttons.
         *
         * The data is stored in order by insertion in a Map data structure.
         *
         *
         */
        const url = usePathname();
        const navButtonData = useMemo(() => {
            const navMap = new Map<string, ButtonWithLabelProps>();
            navMap.set("Home", {
                rootdiv: "default",
                buttondiv: "default",
                labeldiv: "default",
                textdiv: "default",
                label: "Home",
                icon: (
                    <IconHouse
                        fillOpacity={100}
                        active={url === "/main"}
                        className={
                            url === "/main"
                                ? "text-black dark:text-black"
                                : "text-white"
                        }
                    />
                ),
                route: "/main",
                buttoneventsref: navButtonRef,
            });
            navMap.set("Resume", {
                rootdiv: "default",
                buttondiv: "default",
                labeldiv: "default",
                textdiv: "default",
                label: "Resume",
                icon: (
                    <IconFile
                        className={
                            url === "/resume"
                                ? "text-black dark:text-black"
                                : "text-white"
                        }
                        active={url === "/resume"}
                        fillOpacity={100}
                    />
                ),
                route: "/resume",
                buttoneventsref: navButtonRef,
            });
            navMap.set("Music", {
                rootdiv: "default",
                buttondiv: "default",
                labeldiv: "default",
                textdiv: "default",
                label: "Music",
                icon: (
                    <IconEqualizer
                        className={
                            url === "/music"
                                ? "text-black dark:text-black"
                                : "text-white"
                        }
                        active={url === "/music"}
                        fillOpacity={100}
                    />
                ),
                route: "/music",
                buttoneventsref: navButtonRef,
            });
            navMap.set("Email", {
                rootdiv: "default",
                buttondiv: "default",
                labeldiv: "default",
                textdiv: "default",
                label: "Email",
                icon: (
                    <IconEnvelopSimple
                        className={
                            url === "/contact"
                                ? "text-black dark:text-black"
                                : "text-white"
                        }
                        active={url === "/contact"}
                        fillOpacity={100}
                    />
                ),
                route: "/contact",
                buttoneventsref: navButtonRef,
            });
            navMap.set("Daily_Quotes", {
                rootdiv: "default",
                buttondiv: "default",
                labeldiv: "default",
                textdiv: "default",
                label: "Daily Quotes",
                icon: (
                    <IconQuotes
                        className={
                            url === "/messages"
                                ? "text-black dark:text-black"
                                : "text-white"
                        }
                        active={url === "/messages"}
                        fillOpacity={100}
                    />
                ),
                route: "/messages",
                buttoneventsref: navButtonRef,
            });
            return navMap;
        }, []);
        // TODO: Create a theme button data map
        // const themeButtonData = useMemo(() => {
        //     const themeMap = new Map<string, ButtonWithLabelProps>();
        //     return themeMap;
        // }, [])

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
                    <ThemeToggle />
                </div>
            </div>
        );
    }
);

NavBarVertical.displayName = "NavBarVertical";
