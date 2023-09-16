"use client";

import { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { OverlayTriggerProps } from "./overlayTriggerProps";
import { overlayTriggerStyles } from "./overlayTriggerStyles";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { OverlayRoot } from "../OverlayRoot/OverlayRoot";
import { useSidebar } from "@/components/hooks/useSidebar/useSidebar";

export const OverlayTrigger = forwardRef<HTMLDivElement, OverlayTriggerProps>(({ className, children }, ref) => {
    /**
     * displayStateRef
     *
     * States the display state of the overlay and its children using a boolean and mutable ref.
     */
    const displayStateRef = useRef<HTMLDivElement | null>(null);
    const sidebarRef = useSidebar();

    return (
        <NavigationMenu.Root className="w-screen h-[209.5vh]" delayDuration={0} orientation="vertical">
            <NavigationMenu.Item className="w-screen h-full list-none">
                <NavigationMenu.Trigger asChild>
                    <div className={cn(overlayTriggerStyles({ triggerdiv: "inactive" }))} ref={ref} />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className={cn(className, "h-screen")}>
                    <OverlayRoot overlayRef={displayStateRef} sidebarRef={sidebarRef}>
                        {children}
                    </OverlayRoot>
                </NavigationMenu.Content>
            </NavigationMenu.Item>
        </NavigationMenu.Root>
    );
});

OverlayTrigger.displayName = "OverlayTrigger";
