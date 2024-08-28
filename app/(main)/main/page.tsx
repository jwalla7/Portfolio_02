"use client";

import { BackgroundImage } from "@/components/ui/background/BackgroundImage/BackgroundImage";
import { OverlayTrigger } from "@/components/ui/navigation/web/overlay/OverlayTrigger/OverlayTrigger";
import Main from '../../content/main.mdx';

export default function MainPage() {

    return (
        <div
            suppressHydrationWarning
            className="relative left-0 top-0 right-0 bottom-0 min-w-full min-h-screen h-[209.5vh] overflow-hidden"
        >
            <BackgroundImage imageLightThemeSrc="/images/SKYLCP-Lightmode.jpg" imageDarkThemeSrc="/images/SKYLCP-Darkmode.jpg"/>
            <div className="prose ">
                <Main />
            </div>
            <OverlayTrigger />
        </div>
    );
}
