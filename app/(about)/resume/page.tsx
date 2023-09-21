"use client";

import { BackgroundImage } from "@/components/ui/background/BackgroundImage/BackgroundImage";
import { OverlayTrigger } from "@/components/ui/navigation/web/overlay/OverlayTrigger/OverlayTrigger";
import { robotoRegular } from "@/design/fontDefaults";
import { cn } from "@/lib/utils";

export default function ResumePage() {
    return (
        <div suppressHydrationWarning className="min-w-full min-h-screen h-screen overflow-hidden">
            <BackgroundImage imageLightThemeSrc="/images/SPIRLWL-lightmode.png" imageDarkThemeSrc="/images/SPIRLWL-darkmode.png" />
            <h1 className={cn("mt-3 text-3xl text-primary", robotoRegular.className)}>My resume</h1>
            <OverlayTrigger />
        </div>
    );
}
