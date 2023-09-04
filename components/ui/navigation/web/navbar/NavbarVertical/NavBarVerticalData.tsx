"use client";

import { useMemo, useRef } from "react";
import { ButtonWithLabelProps } from "@/components/ui/button/ButtonWithLabel/buttonWithLabelProps";
import { IconFile } from "@/components/ui/icons/phosphor/IconFile";
import { IconEqualizer } from "@/components/ui/icons/phosphor/IconEqualizer";
import { IconEnvelopSimple } from "@/components/ui/icons/phosphor/IconEnvelopeSimple";
import { IconHouse } from "@/components/ui/icons/phosphor/IconHouse";
import { IconQuotes } from "@/components/ui/icons/phosphor/IconQuotes";
import { usePathname } from "next/dist/client/components/navigation";

export function useNavButtonData() {
    const navButtonRef = useRef<HTMLButtonElement | null>(null);
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
    }, [url]);

    return navButtonData;
}

export function useThemeButtonData() {
    const themeButtonRef = useRef(null);

    const themeButtonData = useMemo(() => {
        const themeMap = new Map<string, ButtonWithLabelProps>();
        themeMap.set("Home", {
            rootdiv: "default",
            buttondiv: "default",
            labeldiv: "default",
            textdiv: "default",
            label: "Home",
            icon: <IconHouse fillOpacity={100} active={true} className="" />,
            route: "/main",
            buttoneventsref: themeButtonRef,
        });
        return themeMap;
    }, []);

    return themeButtonData;
}
