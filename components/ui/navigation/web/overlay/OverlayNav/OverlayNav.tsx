import { forwardRef, useEffect, useRef } from "react";
import { OverlayNavProps } from "./overlayNavProps";
import { overlayNavStyles } from "./overlayNavStyles";
import { NavigationMenuSub } from "@radix-ui/react-navigation-menu";
import { Sidebar } from "../../sidebar/Sidebar/Sidebar";
import { cn } from "@/lib/utils";
import { SidebarContext, useSidebarContext } from "@/components/context/sidebar/SidebarContext";
import { useLocalStorageContext } from "@/components/context/storage/LocalStorageContext";

export const OverlayNav = forwardRef<HTMLDivElement, OverlayNavProps>(({ children }, ref) => {
    const { setDisplayStateRef, openSidebar, closeSidebar, newDisplayStateRef } = useSidebarContext();
    const { isSidebarOpen } = useLocalStorageContext();
    // const newDisplayStateRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (newDisplayStateRef) {
            setDisplayStateRef(newDisplayStateRef.current);
            console.log("OVERLAY_REF_CURRENT => ", newDisplayStateRef.current);
        }
    });

    useEffect(() => {
        if (isSidebarOpen && newDisplayStateRef) {
            if (newDisplayStateRef.current) {
                openSidebar();
                console.log("OVERLAY_REF && ISSIDEBAROPEN: ", newDisplayStateRef, isSidebarOpen);
            }
        }
    });

    return (
        <SidebarContext.Provider value={{ openSidebar, closeSidebar, newDisplayStateRef, setDisplayStateRef }}>
            <NavigationMenuSub
                className={cn(overlayNavStyles({ nav: "none" }), "animate-slideRightAndFade transition duration-150 ease-in")}
                onMouseEnter={openSidebar}
                onMouseLeave={closeSidebar}
                ref={newDisplayStateRef}
            >
                <Sidebar ref={newDisplayStateRef}>{children}</Sidebar>
            </NavigationMenuSub>
        </SidebarContext.Provider>
    );
});

OverlayNav.displayName = "OverlayNav";
