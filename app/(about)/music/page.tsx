"use client";

import { BackgroundImage } from "@/components/ui/background/BackgroundImage/BackgroundImage";
import { OverlayTrigger } from "@/components/ui/navigation/web/overlay/OverlayTrigger/OverlayTrigger";
import { CardGroup } from "@/components/ui/cards/CardGroup/CardGroup";
import { Card } from "@/components/ui/cards/Card/Card";

export default function MusicPage() {
    return (
        <div suppressHydrationWarning className="relative min-w-full min-h-screen h-screen overflow-hidden">
            <BackgroundImage imageLightThemeSrc="/images/CNTRS-lightmode.png" imageDarkThemeSrc="/images/CNTRS-darkmode.png" />
            <CardGroup>
                <Card size="lg" position="center" />
                <Card size="md" position="right" />
            </CardGroup>
            <OverlayTrigger />
        </div>
    );
}
