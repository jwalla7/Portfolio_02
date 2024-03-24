"use client";

import { forwardRef, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";
import { OverlayTriggerProps } from "./overlayTriggerProps";
import { overlayTriggerStyles } from "./overlayTriggerStyles";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { OverlayRoot } from "../OverlayRoot/OverlayRoot";
import { useSidebarContext } from "@/components/context/sidebar/SidebarContext";

export const OverlayTrigger = forwardRef<HTMLDivElement, OverlayTriggerProps>(({ className, children }, ref) => {
    const { openSidebar, closeSidebar, setDisplayStateRef } = useSidebarContext();
    /**
     * displayStateRef
     *
     * States the display state of the overlay and its children using a boolean and mutable ref.
     */
    const newDisplayStateRef = useRef<HTMLDivElement | null>(null);
    setDisplayStateRef(newDisplayStateRef.current);
    /**
     * sidebarRef
     */
    // const sidebarRef = useSidebar();

    return (
        <NavigationMenu.Root className="w-screen h-auto" delayDuration={0} orientation="vertical" tabIndex={-1}>
            <NavigationMenu.Item className="w-screen h-auto list-none" tabIndex={-1}>
                <NavigationMenu.Trigger asChild tabIndex={0} className="outline-none h-auto">
                    <div
                        className={cn(overlayTriggerStyles({ triggerdiv: "inactive" }))}
                        ref={newDisplayStateRef}
                        onFocus={openSidebar}
                    />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className={cn(className, "h-auto")}>
                    <OverlayRoot overlayRef={newDisplayStateRef} ref={ref}>
                        {children}
                    </OverlayRoot>
                </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Indicator></NavigationMenu.Indicator>
        </NavigationMenu.Root>
    );
});

OverlayTrigger.displayName = "OverlayTrigger";
