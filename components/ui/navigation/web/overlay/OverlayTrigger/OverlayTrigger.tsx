"use client";

import { cn } from "@/lib/utils";
import { OverlayTriggerProps } from "./overlayTriggerProps";
import { overlayTriggerStyles } from "./overlayTriggerStyles";
import * as HoverCard from "@radix-ui/react-hover-card";
import clsx from "clsx";

export const OverlayTrigger: React.FC<OverlayTriggerProps> = ({
    className,
    children,
}) => {
    return (
        <HoverCard.Root openDelay={0}>
            <HoverCard.Trigger asChild>
                <div className={cn(overlayTriggerStyles({ className }))}></div>
            </HoverCard.Trigger>
            <HoverCard.Portal className="w-screen">
                <HoverCard.Content
                    className={clsx(className, "animate-slideRightAndFade")}
                    /**
                     * sideOffset
                     *
                     * Determines the distance in pixels from the trigger
                     *
                     * `-(number) to place at the top/over of parent.
                     */
                    // sideOffset={-window.innerHeight}
                    side="right"
                >
                    {children}
                </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>
    );
};
