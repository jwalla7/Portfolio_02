"use client";

import { BackgroundImage } from "@/components/ui/background/BackgroundImage/BackgroundImage";
import { NavBarVertical } from "@/components/ui/navigation/web/navbar/NavbarVertical/NavBarVertical";
import { OverlayRoot } from "@/components/ui/navigation/web/overlay/OverlayRoot/OverlayRoot";
import { OverlayTrigger } from "@/components/ui/navigation/web/overlay/OverlayTrigger/OverlayTrigger";

export default function MainPage() {
    return (
        <div
            suppressHydrationWarning
            className="absolute left-0 top-0 right-0 bottom-0 min-w-full min-h-screen h-[213vh] overflow-hidden"
        >
            <BackgroundImage
                imageLightThemeSrc="/images/SKY-lightmode.jpg"
                imageDarkThemeSrc="/images/SKY-darkmode.jpg"
            />
            <OverlayTrigger>
                <OverlayRoot>
                    {/* TODO - Create button styling */}
                    <NavBarVertical />
                </OverlayRoot>
            </OverlayTrigger>
        </div>
    );
}
