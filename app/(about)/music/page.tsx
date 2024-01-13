"use client";

import { BackgroundImage } from "@/components/ui/background/BackgroundImage/BackgroundImage";
import { OverlayTrigger } from "@/components/ui/navigation/web/overlay/OverlayTrigger/OverlayTrigger";
import { CardGroup } from "@/components/ui/cards/CardGroup/CardGroup";
import { Card } from "@/components/ui/cards/Card/Card";
import { SphereCamera } from "@/components/ui/three/cameras/SphereCamera/SphereCamera";
import { PlaybackCard } from "@/components/ui/cards/MusicPlayer/PlaybackCard/PlaybackCard";
import { AudioProvider } from "@/components/context/audio/AudioProvider";
import { AudioVisualizerProvider } from "@/components/context/audio/AudioVisualizerProvider";

export default function MusicPage() {
    return (
        <AudioProvider>
            <AudioVisualizerProvider>
                <div suppressHydrationWarning className="relative min-w-full min-h-screen h-screen overflow-hidden">
                    <div className="absolute mt-[10%] ml-[29%] w-[calc(34vw)] h-[calc(55vh)] bg-transparent">
                        <SphereCamera />
                    </div>
                    <BackgroundImage
                        imageLightThemeSrc="/images/CNTRS-lightmode.png"
                        imageDarkThemeSrc="/images/CNTRS-darkmode.png"
                    />
                    <CardGroup>
                        <Card size="lg" position="center">
                            <PlaybackCard />
                        </Card>
                        <Card size="md" position="right" />
                    </CardGroup>
                    <OverlayTrigger />
                </div>
            </AudioVisualizerProvider>
        </AudioProvider>
    );
}
