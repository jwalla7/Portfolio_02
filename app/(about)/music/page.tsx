"use client";

import { BackgroundImage } from "@/components/ui/background/BackgroundImage/BackgroundImage";
import { OverlayTrigger } from "@/components/ui/navigation/web/overlay/OverlayTrigger/OverlayTrigger";
import { CardGroup } from "@/components/ui/cards/CardGroup/CardGroup";
import { Card } from "@/components/ui/cards/Card/Card";
import { SphereCamera } from "@/components/ui/three/cameras/SphereCamera/SphereCamera";

export default function MusicPage() {
    return (
        <div suppressHydrationWarning className="relative min-w-full min-h-screen h-screen overflow-hidden">
            <div className="absolute mt-[13%] ml-[34%] w-[21vw] h-[34vh] bg-transparent">
                <SphereCamera />
            </div>
            <BackgroundImage imageLightThemeSrc="/images/CNTRS-lightmode.png" imageDarkThemeSrc="/images/CNTRS-darkmode.png" />
            <CardGroup>
                <Card size="lg" position="center" />
                <Card size="md" position="right" />
            </CardGroup>
            <OverlayTrigger />
        </div>
    );
}
