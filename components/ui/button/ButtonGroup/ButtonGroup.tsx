import { FC, useMemo, useRef } from "react";
import { ButtonGroupProps } from "./buttonGroupProps";
import { ButtonWithLabel } from "../ButtonWithLabel/ButtonWithLabel";
import { cn } from "@/lib/utils";
import { IconEnvelopSimple } from "../../icons/phosphor/IconEnvelopeSimple";
import { IconEqualizer } from "../../icons/phosphor/IconEqualizer";
import { IconFile } from "../../icons/phosphor/IconFile";
import { IconHouse } from "../../icons/phosphor/IconHouse";
import { IconQuotes } from "../../icons/phosphor/IconQuotes";
import {
    navBarVerticalRootStyles,
    navBarVerticalNavStyles,
    navBarVerticalThemeStyles,
} from "../../navigation/web/navbar/NavbarVertical/navBarVerticalStyles";
import { ThemeToggle } from "../../theme/toggle/ThemeToggle";
import { ButtonWithLabelProps } from "../ButtonWithLabel/buttonWithLabelProps";
import { usePathname } from "next/dist/client/components/navigation";
import { LinkProps } from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

export const ButtonGroup: FC<ButtonGroupProps> = () => {
    // TODO: Create a theme button ref
    // const themeButtonRef = useRef(null);
    const navButtonRef = useRef<HTMLButtonElement | null>(null);
    const iconRef = useRef<SVGSVGElement | null>(null);
    const url = usePathname();
    const setButton = (pathname: any | LinkProps | Url | undefined) => {
        console.log("url: ", url);
        if (pathname === url) {
            console.log(pathname);
            navButtonRef.current?.classList.remove("bg-transparent");
            navButtonRef.current?.classList.add("bg-white");
            iconRef.current?.classList.remove("text-white");
            iconRef.current?.classList.add("text-black");
        }
    };
    setButton(url);
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
            icon: (
                <IconHouse
                    className="text-white"
                    fillOpacity={100}
                    ref={iconRef}
                />
            ),
            route: "/",
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
                    className="text-white"
                    fillOpacity={100}
                    ref={iconRef}
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
                    className="text-white"
                    fillOpacity={100}
                    ref={iconRef}
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
                    className="text-white"
                    fillOpacity={100}
                    ref={iconRef}
                />
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
            icon: (
                <IconQuotes
                    className="text-white"
                    fillOpacity={100}
                    ref={iconRef}
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
        <div className={cn(navBarVerticalRootStyles({ root: "default" }))}>
            <div className={cn(navBarVerticalNavStyles({ nav: "default" }))}>
                {Array.from(navButtonData.keys()).map((key, index) => {
                    const buttonID = navButtonData.get(key);
                    setButton(buttonID?.route);
                    return (
                        <ButtonWithLabel
                            key={index}
                            rootdiv={buttonID?.rootdiv}
                            buttondiv={buttonID?.buttondiv}
                            labeldiv={buttonID?.labeldiv}
                            textdiv={buttonID?.textdiv}
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
