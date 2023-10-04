"use client";

import { BackgroundImage } from "@/components/ui/background/BackgroundImage/BackgroundImage";
import { OverlayTrigger } from "@/components/ui/navigation/web/overlay/OverlayTrigger/OverlayTrigger";
import { Card } from "@/components/ui/cards/Card/Card";

export default function MusicPage() {
    return (
        <div suppressHydrationWarning className="min-w-full min-h-screen h-screen overflow-hidden">
            <BackgroundImage imageLightThemeSrc="/images/CNTRS-lightmode.png" imageDarkThemeSrc="/images/CNTRS-darkmode.png" />
            <Card />
            <OverlayTrigger />
        </div>
    );
}
