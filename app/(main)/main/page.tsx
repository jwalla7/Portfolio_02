"use client";

import { BackgroundImage } from "@/components/ui/background/BackgroundImage/BackgroundImage";
import { OverlayTrigger } from "@/components/ui/navigation/web/overlay/OverlayTrigger/OverlayTrigger";
import Main from '../../content/main.mdx';
import { useMediaQuery } from "@/components/hooks/useMediaQuery/useMediaQuery";

export default function MainPage() {
    const isWeb2xl = useMediaQuery('2xl');
    return (
        <>
            {
                isWeb2xl ? (
                    <div className="relative min-w-full min-h-screen h-screen overflow-hidden bg-white" >
                        <div className="flex flex-grow flex-shrink flex-col">
                            <span className="text-black">Still working</span>
                            <br />
                            <span className="text-black">Please view on a larger screen 😁</span>
                            <br />
                            <span className="text-black">Required browser width 1440px, current width: {innerWidth}px</span>
                        </div>
                    </div>
                ) : (
                    <div
                        suppressHydrationWarning
                        className="relative left-0 top-0 right-0 bottom-0 min-w-full min-h-screen h-[209.5vh] overflow-hidden"
                    >
                        <BackgroundImage imageLightThemeSrc="/images/SKYLCP-Lightmode.jpg" imageDarkThemeSrc="/images/SKYLCP-Darkmode.jpg" />
                        <div className=" text-neutral-50 data-[icon_layer_active] box-border flex items-start justify-left pt-[47px] w-[19.436vw] bg-transparent justify-start pl-[2.55vw]">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path></svg>
                            </div>
                        </div>
                        <div className="prose ">
                            <Main />
                        </div>
                        <OverlayTrigger />
                    </div >
                )
            }
        </>
    )
}
