"use client";

/**
 * @description
 * Generates and manages data for navigation and theme buttons.
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
import { v4 as uuidv4 } from "uuid";

export function useNavButtonData() {
    const homeButtonRef = useRef(null);
    const resumeButtonRef = useRef(null);
    const musicButtonRef = useRef(null);
    const emailButtonRef = useRef(null);
    const dailyQuotesButtonRef = useRef(null);
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
        navMap.set(uuidv4(), {
            label: "Home",
            buttonDiv: "default",
            button: "default",
            labelDiv: "default",
            labelText: "default",
            iconDiv: "default",
            background: "default",
            icon: (
                <IconHouse
                    fillOpacity={100}
                    active={url === "/main"}
                    className={url === "/main" ? "text-black dark:text-black" : "text-white"}
                />
            ),
            route: "/main",
            buttonRef: homeButtonRef,
        });
        /**
         * Resume Navigation Button Data
         */
        navMap.set(uuidv4(), {
            label: "Resume",
            buttonDiv: "default",
            button: "default",
            labelDiv: "default",
            labelText: "default",
            iconDiv: "default",
            background: "default",
            icon: (
                <IconFile
                    className={url === "/resume" ? "text-black dark:text-black" : "text-white"}
                    active={url === "/resume"}
                    fillOpacity={100}
                />
            ),
            route: "/resume",
            buttonRef: resumeButtonRef,
        });
        /**
         * Music Navigation Button Data
         */
        navMap.set(uuidv4(), {
            label: "Music",
            buttonDiv: "default",
            button: "default",
            labelDiv: "default",
            labelText: "default",
            iconDiv: "default",
            background: "default",
            icon: (
                <IconEqualizer
                    className={url === "/music" ? "text-black dark:text-black" : "text-white"}
                    active={url === "/music"}
                    fillOpacity={100}
                />
            ),
            route: "/music",
            buttonRef: musicButtonRef,
        });
        /**
         * Email Navigation Button Data
         */
        navMap.set(uuidv4(), {
            label: "Email",
            buttonDiv: "default",
            button: "default",
            labelDiv: "default",
            labelText: "default",
            iconDiv: "default",
            background: "default",
            icon: (
                <IconEnvelopSimple
                    className={url === "/contact" ? "text-black dark:text-black" : "text-white"}
                    active={url === "/contact"}
                    fillOpacity={100}
                />
            ),
            route: "/contact",
            buttonRef: emailButtonRef,
        });
        /**
         * Daily Quotes Navigation Button Data
         */
        navMap.set(uuidv4(), {
            label: "Daily Quotes",
            buttonDiv: "default",
            button: "default",
            labelDiv: "default",
            labelText: "default",
            iconDiv: "default",
            background: "default",
            icon: (
                <IconQuotes
                    className={url === "/messages" ? "text-black dark:text-black" : "text-white"}
                    active={url === "/messages"}
                    fillOpacity={100}
                />
            ),
            route: "/messages",
            buttonRef: dailyQuotesButtonRef,
        });
        return navMap;
    }, [url]);

    return navButtonData;
}
