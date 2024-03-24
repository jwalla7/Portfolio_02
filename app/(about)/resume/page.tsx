"use client";

import { useSidebarContext } from "@/components/context/sidebar/SidebarContext";
import { useLocalStorageContext } from "@/components/context/storage/LocalStorageContext";
import { BackgroundImage } from "@/components/ui/background/BackgroundImage/BackgroundImage";
import { OverlayTrigger } from "@/components/ui/navigation/web/overlay/OverlayTrigger/OverlayTrigger";
import { useEffect } from "react";

export default function ResumePage() {
    const { isSidebarOpen } = useLocalStorageContext();
    const { openSidebar, newDisplayStateRef } = useSidebarContext();

    useEffect(() => {
        if (isSidebarOpen) {
            console.log("IS_SIDEBAR_OPEN:", isSidebarOpen);
            console.log("SIDEBAR STATE ==> ", newDisplayStateRef?.current);
        }
    });

    return (
        <div suppressHydrationWarning className="min-w-full min-h-screen h-screen overflow-hidden">
            <BackgroundImage imageLightThemeSrc="/images/SPIRLWL-lightmode.png" imageDarkThemeSrc="/images/SPIRLWL-darkmode.png" />
            <OverlayTrigger
            // ref={newDisplayStateRef}
            />
        </div>
    );
}
