"use client";

import { BackgroundImage } from "@/components/ui/background/BackgroundImage/BackgroundImage";
import { OverlayTrigger } from "@/components/ui/navigation/web/overlay/OverlayTrigger/OverlayTrigger";
import { ChatCard } from "@/components/ui/cards/Chat/ChatCard/ChatCard";

export default function VisitorsPage() {
    return (

        <div suppressHydrationWarning className="min-w-full min-h-screen h-screen overflow-hidden">
            <BackgroundImage imageLightThemeSrc="/images/BLENDS-violet.jpg" imageDarkThemeSrc="/images/BLENDS-darkmode.jpg" enableMouseMove={true} />
            <div className="flex w-screen h-screen">
                <div className="text-white data-[icon_layer_active] box-border flex items-start justify-left pt-[47px] w-[19.436vw] bg-transparent justify-start pl-[2.55vw]">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="#ffffff" viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path></svg>
                    </div>
                </div>
                <div className="flex items-center justify-center relative w-screen h-full ">
                    <div className=" max-w-[1300px] min-w-[800px] w-[1300px] h-full relative mb-[100px]">
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 px-[100px] mb-[6rem] h-full relative">
                            <ChatCard />
                        </div>
                    </div>
                </div>
            </div>
            <OverlayTrigger />
        </div>
    );
}
