import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { OverlayNavProps } from "./overlayNavProps";
import { overlayNavStyles } from "./overlayNavStyles";
import { NavigationMenuSub } from "@radix-ui/react-navigation-menu";
import { Sidebar } from "../../sidebar/Sidebar/Sidebar";
import { cn } from "@/lib/utils";

export const OverlayNav = forwardRef<HTMLDivElement, OverlayNavProps>(({ children, overlayRef, sidebarRef }, ref) => {
    const divRef = useRef<HTMLDivElement | null>(null);

    const openSidebar = useCallback(() => {
        const ref = overlayRef?.current;
        if (ref) {
            ref.classList.remove("hidden");
            ref.classList.add("visible");
            ref.setAttribute("data-state", "open");
        }
    }, [overlayRef]);
    const closeSidebar = useCallback(() => {
        const ref = overlayRef?.current;
        if (ref) {
            ref?.classList.remove("visible");
            ref?.classList.add("hidden");
            ref?.setAttribute("data-state", "closed");
        }
    }, [overlayRef]);

    useImperativeHandle(
        sidebarRef,
        () => ({
            toggleTracker: () => {
                if (divRef?.current?.getAttribute("data-state") === "open") closeSidebar();
                if (divRef?.current?.getAttribute("data-state") === "closed") openSidebar();
                console.log("toggleTracker toggled:", sidebarRef?.current);
            },
            divRef: divRef,
        }),
        [sidebarRef, openSidebar, closeSidebar, divRef]
    );

    return (
        <NavigationMenuSub
            className={cn(overlayNavStyles({ nav: "none" }), "animate-slideRightAndFade transition duration-150 ease-in")}
            onMouseEnter={openSidebar}
            onMouseLeave={closeSidebar}
            ref={ref || overlayRef}
        >
            <Sidebar overlayRef={overlayRef} sidebarRef={sidebarRef}>
                {children}
            </Sidebar>
        </NavigationMenuSub>
    );
});

OverlayNav.displayName = "OverlayNav";
