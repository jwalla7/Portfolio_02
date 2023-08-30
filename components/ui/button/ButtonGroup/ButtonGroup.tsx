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

export const ButtonGroup: FC<ButtonGroupProps> = () => {
    // TODO: Create a theme button ref
    // const themeButtonRef = useRef(null);
    const navButtonRef = useRef<Array<HTMLButtonElement | null>>([]);
    const clickedButtonRef = useRef<HTMLButtonElement | null | undefined>(null);
    const iconRef = useRef<SVGSVGElement | null>(null);

    const setButton = (index: number, action: string) => {
        if (action === "click") {
            if (clickedButtonRef.current) {
                console.log(clickedButtonRef.current);
                clickedButtonRef.current.classList.remove("bg-white");
                iconRef.current?.classList.remove("text-white");
            }
            if (clickedButtonRef.current !== navButtonRef.current[index]) {
                navButtonRef.current[index]?.classList.add("bg-white");
                clickedButtonRef.current = navButtonRef.current[index];
                iconRef.current?.classList.add("text-black");
            } else {
                clickedButtonRef.current = null;
            }
        }
    };
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
            rootDiv: "default",
            buttonDiv: "default",
            labelDiv: "default",
            textDiv: "default",
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
            clickedButtonRef: clickedButtonRef,
        });
        navMap.set("Resume", {
            rootDiv: "default",
            buttonDiv: "default",
            labelDiv: "default",
            textDiv: "default",
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
            clickedButtonRef: clickedButtonRef,
        });
        navMap.set("Music", {
            rootDiv: "default",
            buttonDiv: "default",
            labelDiv: "default",
            textDiv: "default",
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
            clickedButtonRef: clickedButtonRef,
        });
        navMap.set("Email", {
            rootDiv: "default",
            buttonDiv: "default",
            labelDiv: "default",
            textDiv: "default",
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
            clickedButtonRef: clickedButtonRef,
        });
        navMap.set("Daily_Quotes", {
            rootDiv: "default",
            buttonDiv: "default",
            labelDiv: "default",
            textDiv: "default",
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
            clickedButtonRef: clickedButtonRef,
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
                            clickedButtonRef={buttonID?.clickedButtonRef}
                            onClick={() => setButton(index, "click")}
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
