"use client";

import { cn } from "@/lib/utils";
import { OverlayTriggerProps } from "./overlayTriggerProps";
import { overlayTriggerStyles } from "./overlayTriggerStyles";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import clsx from "clsx";
import { useRef } from "react";
import { OverlayRoot } from "../OverlayRoot/OverlayRoot";

export const OverlayTrigger: React.FC<OverlayTriggerProps> = ({
    className,
    children,
}) => {
    const displayStateRef = useRef<HTMLDivElement | null>(null);

    return (
        <NavigationMenu.Root
            className="w-screen h-full animate-slideRightAndFade"
            delayDuration={0}
            orientation="vertical"
        >
            <NavigationMenu.Item className="w-screen h-screen list-none">
                <NavigationMenu.Trigger asChild>
                    <div
                        className={cn(overlayTriggerStyles({ className }))}
                    ></div>
                </NavigationMenu.Trigger>
                <NavigationMenu.Content
                    ref={displayStateRef}
                    className={clsx(className, "animate-slideRightAndFade")}
                    /**
                     * sideOffset
                     *
                     * Determines the distance in pixels from the trigger
                     *
                     * `-(number) to place at the top/over of parent.
                     */
                    // sideOffset={-window.innerHeight}
                    // side="right"
                >
                    {/* {children} */}
                    <OverlayRoot overlayRefProps={displayStateRef}>
                        {children}
                    </OverlayRoot>
                </NavigationMenu.Content>
            </NavigationMenu.Item>
        </NavigationMenu.Root>
    );
};
