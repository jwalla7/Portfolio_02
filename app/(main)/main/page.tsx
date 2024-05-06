"use client";

import { useSidebarContext } from "@/components/context/sidebar/SidebarContext";
import { useLocalStorageContext } from "@/components/context/storage/LocalStorageContext";
import { BackgroundImage } from "@/components/ui/background/BackgroundImage/BackgroundImage";
// import { IconRocket } from "@/components/ui/icons/phosphor/IconRocket";
import { OverlayTrigger } from "@/components/ui/navigation/web/overlay/OverlayTrigger/OverlayTrigger";
import { useEffect } from "react";

export default function MainPage() {
    const { isLocalStorageSidebarOpen } = useLocalStorageContext();
    const { forceMount, setForceMount } = useSidebarContext();

    useEffect(() => {
        if (isLocalStorageSidebarOpen && !forceMount) {
            console.log("FORCE_MOUNT before => ", forceMount);
            // setForceMount(true);
            console.log("FORCE_MOUNT after => ", forceMount);
        }
    });
    return (
        <div
            suppressHydrationWarning
            className="relative left-0 top-0 right-0 bottom-0 min-w-full min-h-screen h-[209.5vh] overflow-hidden"
        >
            <BackgroundImage imageLightThemeSrc="/images/SKYLCP-Lightmode.jpg" imageDarkThemeSrc="/images/SKYLCP-Darkmode.jpg" />
            {/* <IconRocket setMotion={true} className="text-white" /> */}
            <OverlayTrigger />
        </div>
    );
}
