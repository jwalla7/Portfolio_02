"use client";
/**
 * @description
 * Generates and manages data for navigation buttons.
 *
 * It uses a Map data structure to store button properties like labels, icons, and routes, dynamically changing them based on the current URL.
 *
 * Data is memoized, making it available for rendering navigation buttons in components based on the URL.
 */
import { useMemo, useRef } from "react";
import { ButtonWithLabelProps } from "@/components/ui/button/ButtonWithLabel/buttonWithLabelProps";
import { IconFile } from "@/components/ui/icons/phosphor/IconFile";
import { IconEqualizer } from "@/components/ui/icons/phosphor/IconEqualizer";
import { IconEnvelopSimple } from "@/components/ui/icons/phosphor/IconEnvelopeSimple";
import { IconHouse } from "@/components/ui/icons/phosphor/IconHouse";
import { IconQuotes } from "@/components/ui/icons/phosphor/IconQuotes";
import { usePathname } from "next/dist/client/components/navigation";
import { IconSun } from "@/components/ui/icons/phosphor/IconSun";

export function useNavButtonData() {
    const navButtonRef = useRef<HTMLButtonElement | null>(null);
    /**
     * usePathname
     *
     * Returns the current URL.
     *
     * @see https://nextjs.org/docs/api-reference/next/router#useroutepathname
     */
    const url = usePathname();
    /**
     * useMemo
     *
     * Recalculates data when the URL changes.
     *
     * @see https://react.dev/reference/react/useMemo
     */
    const navButtonData = useMemo(() => {
        /**
         * Map
         *
         * JavaScript built-in Map data structure, which stores key-value pairs in order of insertion.
         */
        const navMap = new Map<string, ButtonWithLabelProps>();
        /**
         * Home Navigation Button Data
         */
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
        /**
         * Resume Navigation Button Data
         */
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
        /**
         * Music Navigation Button Data
         */
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
        /**
         * Email Navigation Button Data
         */
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
        /**
         * Daily Quotes Navigation Button Data
         */
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
        const themeMap = new Map<string, HTMLButtonElement>();
        return themeMap;
    }, []);

    return themeButtonData;
}
