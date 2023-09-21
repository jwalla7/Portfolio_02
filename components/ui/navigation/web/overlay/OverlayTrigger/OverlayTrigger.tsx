"use client";

import { forwardRef, useCallback, useRef } from "react";
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
    /**
     * sidebarRef
     */
    const sidebarRef = useSidebar();
    /**
     * traceFocus
     */
    const traceFocus = {
        /**
         * openSidebar
         */
        openSidebar: useCallback(() => {
            const { current: ref } = displayStateRef;
            if (!ref) return;
            ref.click();
            ref.classList.add("visible");
            ref.setAttribute("data-state", "open");
            ref.ariaExpanded = "true";
        }, [displayStateRef]),
        /**
         * traceMouseLeave
         */
        traceMouseLeave: useCallback(() => {
            const { current: ref } = displayStateRef;
            if (!ref) return;
            ref.classList.remove("visible");
            ref.classList.add("hidden");
            ref.setAttribute("data-state", "closed");
            ref.ariaExpanded = "false";
        }, [displayStateRef]),
    };

    return (
        <NavigationMenu.Root className="w-screen h-auto" delayDuration={0} orientation="vertical" tabIndex={-1}>
            <NavigationMenu.Item className="w-screen h-auto list-none" tabIndex={-1}>
                <NavigationMenu.Trigger asChild tabIndex={0} className="outline-none h-auto">
                    <div
                        className={cn(overlayTriggerStyles({ triggerdiv: "inactive" }))}
                        ref={displayStateRef}
                        onFocus={() => traceFocus.openSidebar()}
                    />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className={cn(className, "h-auto")}>
                    <OverlayRoot overlayRef={displayStateRef} sidebarRef={sidebarRef} ref={ref}>
                        {children}
                    </OverlayRoot>
                </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Indicator></NavigationMenu.Indicator>
        </NavigationMenu.Root>
    );
});

OverlayTrigger.displayName = "OverlayTrigger";
