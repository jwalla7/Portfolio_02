"use client";

import { useSidebarContext } from "@/components/context/sidebar/SidebarContext";
import { useLocalStorageContext } from "@/components/context/storage/LocalStorageContext";
import { BackgroundImage } from "@/components/ui/background/BackgroundImage/BackgroundImage";
import { OverlayTrigger } from "@/components/ui/navigation/web/overlay/OverlayTrigger/OverlayTrigger";
import { useEffect } from "react";

export default function ResumePage() {
    const { isLocalStorageSidebarOpen } = useLocalStorageContext();
    const { forceMount, setForceMount } = useSidebarContext();

    useEffect(() => {
        if (isLocalStorageSidebarOpen === true && !forceMount) {
            console.log("FORCE_MOUNT before => ", forceMount);
            // setForceMount(true);
            console.log("FORCE_MOUNT after => ", forceMount);
        }
    });

    return (
        <div suppressHydrationWarning className="min-w-full min-h-screen h-screen overflow-hidden">
            <BackgroundImage imageLightThemeSrc="/images/SPIRLWL-lightmode.png" imageDarkThemeSrc="/images/SPIRLWL-darkmode.png" />
            <OverlayTrigger />
        </div>
    );
}
