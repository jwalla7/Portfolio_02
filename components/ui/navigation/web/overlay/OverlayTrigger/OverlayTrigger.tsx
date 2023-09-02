"use client";

import { cn } from "@/lib/utils";
import { OverlayTriggerProps } from "./overlayTriggerProps";
import { overlayTriggerStyles } from "./overlayTriggerStyles";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import clsx from "clsx";
import { forwardRef, useRef } from "react";
import { OverlayRoot } from "../OverlayRoot/OverlayRoot";

export const OverlayTrigger = forwardRef<HTMLDivElement, OverlayTriggerProps>(
    ({ className, children }, ref) => {
        const displayStateRef = useRef<HTMLDivElement | null>(null);
        return (
            <NavigationMenu.Root
                className="w-screen h-[209.5vh]"
                delayDuration={0}
                orientation="vertical"
            >
                <NavigationMenu.Item className="w-screen h-full list-none">
                    <NavigationMenu.Trigger asChild>
                        <div
                            className={cn(overlayTriggerStyles({ className }))}
                            ref={ref}
                        />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content
                        className={clsx(className, "h-screen")}
                    >
                        <OverlayRoot overlayRefProps={displayStateRef}>
                            {children}
                        </OverlayRoot>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
            </NavigationMenu.Root>
        );
    }
);

OverlayTrigger.displayName = "OverlayTrigger";
