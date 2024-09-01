"use client";

import { BackgroundImage } from "@/components/ui/background/BackgroundImage/BackgroundImage";
import { OverlayTrigger } from "@/components/ui/navigation/web/overlay/OverlayTrigger/OverlayTrigger";

export default function VisitorsPage() {
    return (
        <div className="relative">
            <BackgroundImage imageLightThemeSrc="/images/BLENDS-violet.jpg" imageDarkThemeSrc="/images/BLENDS-darkmode.jpg" enableMouseMove={true} />
            <div suppressHydrationWarning className="min-w-full min-h-screen h-screen overflow-hidden">
                <div>visitors page</div>
            </div>
            <OverlayTrigger />
        </div>
    );
}
