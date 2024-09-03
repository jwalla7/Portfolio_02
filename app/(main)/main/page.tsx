"use client";

import { BackgroundImage } from "@/components/ui/background/BackgroundImage/BackgroundImage";
import { OverlayTrigger } from "@/components/ui/navigation/web/overlay/OverlayTrigger/OverlayTrigger";
import Main from '../../content/main.mdx';
import { useViewport } from "@/components/hooks/useViewport/useViewport";

export default function MainPage() {
    const { innerWidth } = useViewport();

    if (innerWidth < 1440) {
        return (
            <div className="relative min-w-full min-h-screen h-screen overflow-hidden bg-white">
                <div className="flex flex-grow flex-shrink">
                    <h1 className="text-black">Still working, please view on a larger screen 😁 Min screen width 1440px, current width {innerWidth}</h1>
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
