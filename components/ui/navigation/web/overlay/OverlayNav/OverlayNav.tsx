import { forwardRef, useImperativeHandle, useRef } from "react";
import { OverlayNavProps } from "./overlayNavProps";
import { overlayNavStyles } from "./overlayNavStyles";
import { NavigationMenuSub } from "@radix-ui/react-navigation-menu";
import { Sidebar } from "../../sidebar/Sidebar/Sidebar";
import { cn } from "@/lib/utils";

export const OverlayNav = forwardRef<HTMLDivElement, OverlayNavProps>(({ children, overlayRef, sidebarRef }, ref) => {
    const divRef = useRef<HTMLDivElement | null>(null);

    const showDisplay = () => {
        console.log("showDisplay");
        if (overlayRef?.current?.classList.contains("hidden")) {
            overlayRef?.current?.classList.remove("hidden");
        }
        if (overlayRef?.current) {
            overlayRef?.current?.classList.add("visible");
        }
    };
    const hideDisplay = () => {
        if (overlayRef?.current?.classList.contains("visible")) {
            overlayRef?.current?.classList.remove("visible");
        }
        if (overlayRef?.current) {
            overlayRef?.current?.classList.add("hidden");
        }
    };

    useImperativeHandle(sidebarRef, () => ({
        toggleTracker: () => {
            showDisplay();
            console.log("toggleTracker toggled:", sidebarRef?.current);
        },
        divRef: divRef,
    }));

    return (
        <NavigationMenuSub
            className={cn(overlayNavStyles({ nav: "none" }), "animate-slideRightAndFade transition duration-150 ease-in")}
            onMouseEnter={showDisplay}
            onMouseLeave={hideDisplay}
            ref={ref || overlayRef}
        >
            <Sidebar overlayRef={overlayRef} sidebarRef={sidebarRef}>
                {children}
            </Sidebar>
        </NavigationMenuSub>
    );
});

OverlayNav.displayName = "OverlayNav";
