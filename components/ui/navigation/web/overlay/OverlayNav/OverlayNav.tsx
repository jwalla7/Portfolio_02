import { FC, useEffect } from "react";
import { OverlayNavProps } from "./overlayNavProps";
import { overlayNavStyles } from "./overlayNavStyles";
import { NavigationMenuSub } from "@radix-ui/react-navigation-menu";
import { Sidebar } from "../../sidebar/Sidebar/Sidebar";
import { cn } from "@/lib/utils";
import { SidebarContext, useSidebarContext } from "@/components/context/sidebar/SidebarContext";

export const OverlayNav: FC<OverlayNavProps> = (({ children, overlayRef }) => {
    const { setDisplayStateRef, openSidebar, closeSidebar, newDisplayStateRef, forceMount, setForceMount } = useSidebarContext();

    useEffect(() => {
        if (overlayRef) {
            setDisplayStateRef(overlayRef.current);
        }
    });

    return (
        <SidebarContext.Provider
            value={{ openSidebar, closeSidebar, newDisplayStateRef, setDisplayStateRef, forceMount, setForceMount }}
        >
            <NavigationMenuSub
                className={cn(overlayNavStyles({ nav: "none" }), "animate-slideRightAndFade transition duration-150 ease-in")}
                onMouseEnter={openSidebar}
                onMouseLeave={closeSidebar}
                ref={newDisplayStateRef}
            >
                <Sidebar sidebarRef={newDisplayStateRef}>{children}</Sidebar>
            </NavigationMenuSub>
        </SidebarContext.Provider>
    );
});