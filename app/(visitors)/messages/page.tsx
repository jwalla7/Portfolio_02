"use client";

import { BackgroundImage } from "@/components/ui/background/BackgroundImage/BackgroundImage";
import { OverlayTrigger } from "@/components/ui/navigation/web/overlay/OverlayTrigger/OverlayTrigger";
import { ChatCard } from "@/components/ui/cards/Chat/ChatCard/ChatCard";

export default function VisitorsPage() {
    return (

        <div suppressHydrationWarning className="min-w-full min-h-screen h-screen overflow-hidden">
            <BackgroundImage imageLightThemeSrc="/images/BLENDS-violet.jpg" imageDarkThemeSrc="/images/BLENDS-darkmode.jpg" enableMouseMove={true} />
            <div className="flex items-center justify-center relative w-screen h-full ">
                <div className=" max-w-[1300px] min-w-[800px] w-[1300px] h-full relative mb-[100px]">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 px-[100px] mb-[6rem] h-full relative">
                        <ChatCard />
                    </div>
                </div>
            </div>
            <OverlayTrigger />
        </div>
    );
}
