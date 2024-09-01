"use client";


import { BackgroundImage } from "@/components/ui/background/BackgroundImage/BackgroundImage";
import { OverlayTrigger } from "@/components/ui/navigation/web/overlay/OverlayTrigger/OverlayTrigger";
import { CardGroup } from "@/components/ui/cards/CardGroup/CardGroup";
import { Card } from "@/components/ui/cards/Card/Card";
import { SphereCamera } from "@/components/ui/three/cameras/SphereCamera/SphereCamera";
import { PlaybackCard } from "@/components/ui/cards/MusicPlayer/PlaybackCard/PlaybackCard";
import { AudioProvider } from "@/components/context/audio/AudioProvider";
import { AudioVisualizerProvider } from "@/components/context/audio/AudioVisualizerProvider";
import { Canvas } from "@react-three/fiber";
import { ArtistCard } from "@/components/ui/cards/MusicPlayer/ArtistCard/ArtistCard";

export default function MusicPage() {
    return (
        <AudioVisualizerProvider>
            <AudioProvider>
                <div className="relative min-w-full min-h-screen h-screen overflow-hidden">
                    <div className="absolute mt-[10%] ml-[29%] w-[calc(34vw)] h-[calc(55vh)] bg-transparent">
                        <Canvas camera={{ fov: 65, position: [10, 0, 10], zoom: -0.9 }}>
                            <SphereCamera />
                        </Canvas>
                    </div>
                    <BackgroundImage imageLightThemeSrc={"/images/CNTRSTOP-lightmode.png"} imageDarkThemeSrc={"/images/CNTRSTOP-darkmode.png"} className="animate-reversePulse absolute top-0 left-0" />
                    <BackgroundImage imageLightThemeSrc="/images/CNTRS-lightmode.png" imageDarkThemeSrc="/images/CNTRS-darkmode.png" className="z-20" />
                    <CardGroup>
                        <Card size="lg" position="center">
                            <PlaybackCard />
                        </Card>
                        <Card size="md" position="right">
                            <ArtistCard />
                        </Card>
                    </CardGroup>
                    <OverlayTrigger />
                </div>
            </AudioProvider>
        </AudioVisualizerProvider>
    );
}
