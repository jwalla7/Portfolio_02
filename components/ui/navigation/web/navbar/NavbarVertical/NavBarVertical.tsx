/**
 * This component will create a vertical navigation bar with nested nav and theme buttons.
 *
 * This component should be separated according to concerns.
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
import {
    navBarVerticalNavStyles,
    navBarVerticalRootStyles,
    navBarVerticalThemeStyles,
} from "./navBarVerticalStyles";

export const NavBarVertical: FC<NavBarVerticalProps> = () => {
    // TODO: Create a theme button ref
    // const themeButtonRef = useRef(null);
    const navButtonRef = useRef(null);
    /**
     * Stores data that will determine the shape and quantity of the buttons.
     *
     * Displays the buttons in the order they are added to the map.
     */
    const navButtonData = useMemo(() => {
        const navMap = new Map<string, ButtonWithLabelProps>();
        navMap.set("Home", {
            rootDiv: "default",
            buttonDiv: "default",
            labelDiv: "default",
            textDiv: "default",
            label: "Home",
            icon: <IconHouse fill="white" fillOpacity={100} />,
            route: "/",
            buttonEventsRef: navButtonRef,
        });
        navMap.set("Resume", {
            rootDiv: "default",
            buttonDiv: "default",
            labelDiv: "default",
            textDiv: "default",
            label: "Resume",
            icon: <IconFile fill="white" fillOpacity={100} />,
            route: "/resume",
            buttonEventsRef: navButtonRef,
        });
        navMap.set("Music", {
            rootDiv: "default",
            buttonDiv: "default",
            labelDiv: "default",
            textDiv: "default",
            label: "Music",
            icon: <IconEqualizer fill="white" fillOpacity={100} />,
            route: "/music",
            buttonEventsRef: navButtonRef,
        });
        navMap.set("Email", {
            rootDiv: "default",
            buttonDiv: "default",
            labelDiv: "default",
            textDiv: "default",
            label: "Email",
            icon: <IconEnvelopSimple fill="white" fillOpacity={100} />,
            route: "/email",
            buttonEventsRef: navButtonRef,
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
                        <ButtonWithLabel
                            key={index}
                            rootDiv={buttonID?.rootDiv}
                            buttonDiv={buttonID?.buttonDiv}
                            labelDiv={buttonID?.labelDiv}
                            textDiv={buttonID?.textDiv}
                            label={buttonID?.label}
                            icon={buttonID?.icon}
                            route={buttonID?.route}
                            buttonEventsRef={buttonID?.buttonEventsRef}
                        />
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
