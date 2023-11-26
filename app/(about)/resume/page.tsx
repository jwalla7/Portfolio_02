"use client";

import { BackgroundImage } from "@/components/ui/background/BackgroundImage/BackgroundImage";
import { OverlayTrigger } from "@/components/ui/navigation/web/overlay/OverlayTrigger/OverlayTrigger";

export default function ResumePage() {
    return (
        <div suppressHydrationWarning className="min-w-full min-h-screen h-screen overflow-hidden">
            <BackgroundImage imageLightThemeSrc="/images/SPIRLWL-lightmode.png" imageDarkThemeSrc="/images/SPIRLWL-darkmode.png" />
            <OverlayTrigger />
        </div>
    );
}
