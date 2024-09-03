"use client";

import { BackgroundImage } from "@/components/ui/background/BackgroundImage/BackgroundImage";
import { OverlayTrigger } from "@/components/ui/navigation/web/overlay/OverlayTrigger/OverlayTrigger";
import Main from '../../content/main.mdx';
import { useViewport } from "@/components/hooks/useViewport/useViewport";
import { useEffect } from "react";

export default function MainPage() {
    const { innerWidth } = useViewport();
    useEffect(() => {
        if (innerWidth < 1440) {
            <div className="relative min-w-full min-h-screen h-screen overflow-hidden bg-white">
                <div className="flex flex-grow flex-shrink flex-col">
                    <span className="text-black">Still working</span>
                    <br />
                    <span className="text-black">Please view on a larger screen 😁</span>
                    <br />
                    <span className="text-black">Required browser width 1440px, current width: {innerWidth}px</span>
                </div>
            </div>
        }
    }, [innerWidth]);

    if (innerWidth < 1440) {
        return (
            <div className="relative min-w-full min-h-screen h-screen overflow-hidden bg-white">
                <div className="flex flex-grow flex-shrink flex-col">
                    <span className="text-black">Still working</span>
                    <br />
                    <span className="text-black">Please view on a larger screen 😁</span>
                    <br />
                    <span className="text-black">Required browser width 1440px, current width: {innerWidth}px</span>
                </div>
            </div>
        );
    } else {
        return (
            <div
                suppressHydrationWarning
                className="relative left-0 top-0 right-0 bottom-0 min-w-full min-h-screen h-[209.5vh] overflow-hidden"
            >
                <BackgroundImage imageLightThemeSrc="/images/SKYLCP-Lightmode.jpg" imageDarkThemeSrc="/images/SKYLCP-Darkmode.jpg" />
                <div className="prose ">
                    <Main />
                </div>
                <OverlayTrigger />
            </div>
        );
    }
}
