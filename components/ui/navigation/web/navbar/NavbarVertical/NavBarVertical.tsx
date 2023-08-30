/**
 * @description
 * This component will create a vertical navigation bar with nested nav and theme buttons.
 *
 * This component should be separated into smaller components according to concerns.
 *
 * This current structure is not ideal, but for the sake of time, I will leave it as is in the interim.
 */

import { FC, useMemo, useRef } from "react";
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
import {
    navBarVerticalNavStyles,
    navBarVerticalRootStyles,
    navBarVerticalThemeStyles,
} from "./navBarVerticalStyles";

export const NavBarVertical: FC<NavBarVerticalProps> = () => {
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
    const navButtonData = useMemo(() => {
        const navMap = new Map<string, ButtonWithLabelProps>();
        navMap.set("Home", {
            rootdiv: "default",
            buttondiv: "default",
            labeldiv: "default",
            textdiv: "default",
            label: "Home",
            icon: <IconHouse className="text-white" fillOpacity={100} />,
            route: "/",
            buttoneventsref: navButtonRef,
        });
        navMap.set("Resume", {
            rootdiv: "default",
            buttondiv: "default",
            labeldiv: "default",
            textdiv: "default",
            label: "Resume",
            icon: <IconFile className="text-white" fillOpacity={100} />,
            route: "/resume",
            buttoneventsref: navButtonRef,
        });
        navMap.set("Music", {
            rootdiv: "default",
            buttondiv: "default",
            labeldiv: "default",
            textdiv: "default",
            label: "Music",
            icon: <IconEqualizer className="text-white" fillOpacity={100} />,
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
                <IconEnvelopSimple className="text-white" fillOpacity={100} />
            ),
            route: "/email",
            buttoneventsref: navButtonRef,
        });
        navMap.set("Daily_Quotes", {
            rootdiv: "default",
            buttondiv: "default",
            labeldiv: "default",
            textdiv: "default",
            label: "Daily Quotes",
            icon: <IconQuotes className="text-white" fillOpacity={100} />,
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
        <div className={cn(navBarVerticalRootStyles({ root: "default" }))}>
            <div className={cn(navBarVerticalNavStyles({ nav: "default" }))}>
                {Array.from(navButtonData.keys()).map((key, index) => {
                    const buttonID = navButtonData.get(key);
                    return (
                        <NavigationMenuLink
                            aria-current="step"
                            key={index}
                            href={buttonID?.route ?? "/"}
                            className="no-underline"
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
                            />
                        </NavigationMenuLink>
                    );
                })}
            </div>
            <div
                className={cn(navBarVerticalThemeStyles({ theme: "default" }))}
            >
                <ThemeToggle />
            </div>
        </div>
    );
};
