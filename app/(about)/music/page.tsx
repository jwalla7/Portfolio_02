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
import { useMediaQuery } from "@/components/hooks/useMediaQuery/useMediaQuery";

export default function MusicPage() {
    const isMobileSM = useMediaQuery('sm');
    console.log("IS MOBILE SM", isMobileSM);

    return (
        <AudioVisualizerProvider>
            <AudioProvider>
                {
                    isMobileSM ? (
                        <div suppressHydrationWarning className="relative min-w-full min-h-screen h-screen overflow-hidden">
                            <div className="absolute mt-[10%] ml-[5%] w-[calc(89vw)] h-[calc(55vh)] bg-transparent">
                                <Canvas camera={{ fov: 70, position: [10, 0, 10], zoom: -0.9 }}>
                                    <SphereCamera />
                                </Canvas>
                            </div>
                            <BackgroundImage imageLightThemeSrc={"/images/CNTRSTOP-lightmode.png"} imageDarkThemeSrc={"/images/CNTRSTOP-darkmode.png"} className="animate-reversePulse absolute top-0 left-0" />
                            <BackgroundImage imageLightThemeSrc="/images/CNTRS-lightmode.png" imageDarkThemeSrc="/images/CNTRS-darkmode.png" className="z-20" />
                            <div className="flex w-screen h-screen flex-col gap-[21px]">
                                {/* <div className="text-white data-[icon_layer_active] box-border flex items-start justify-left pt-[47px] w-[19.436vw] bg-transparent justify-start pl-[2.55vw]">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="#ffffff" viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path></svg>
                                    </div>
                                </div> */}
                                <Card size="sm" position="center_sm" className=" w-[300px] h-auto pt-[55px] pl-[34px] pb-0 rounded-[6px]">
                                    <div className="w-full">
                                        <PlaybackCard />
                                    </div>
                                </Card>
                                {/* <Card size="sm" position="center_sm" className=" w-[300px] h-auto pl-[34px] py-0 overflow-auto "> */}
                                <div className="w-[300px] h-auto pl-[34px] py-0 overflow-auto">
                                    <ArtistCard />
                                </div>
                                {/* </Card> */}
                                {/* <Card size="md" position="right">
                                        <ArtistCard />
                                    </Card> */}
                            </div>
                            {/* <OverlayTrigger /> */}
                        </div>
                    ) : (
                        <div suppressHydrationWarning className="relative min-w-full min-h-screen h-screen overflow-hidden">
                            <div className="absolute mt-[10%] ml-[29%] w-[calc(34vw)] h-[calc(55vh)] bg-transparent">
                                <Canvas camera={{ fov: 65, position: [10, 0, 10], zoom: -0.9 }}>
                                    <SphereCamera />
                                </Canvas>
                            </div>
                            <BackgroundImage imageLightThemeSrc={"/images/CNTRSTOP-lightmode.png"} imageDarkThemeSrc={"/images/CNTRSTOP-darkmode.png"} className="animate-reversePulse absolute top-0 left-0" />
                            <BackgroundImage imageLightThemeSrc="/images/CNTRS-lightmode.png" imageDarkThemeSrc="/images/CNTRS-darkmode.png" className="z-20" />
                            <div className="flex w-screen h-screen">
                                <div className="text-white data-[icon_layer_active] box-border flex items-start justify-left pt-[47px] w-[19.436vw] bg-transparent justify-start pl-[2.55vw]">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="#ffffff" viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path></svg>
                                    </div>
                                </div>
                                <CardGroup>
                                    <Card size="lg" position="center">
                                        <PlaybackCard />
                                    </Card>
                                    <Card size="md" position="right">
                                        <ArtistCard />
                                    </Card>
                                </CardGroup>
                            </div>
                            <OverlayTrigger />
                        </div>
                    )
                }
            </AudioProvider>
        </AudioVisualizerProvider>
    );
}
