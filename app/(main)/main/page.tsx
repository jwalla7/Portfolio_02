"use client";

import { BackgroundImage } from "@/components/ui/background/BackgroundImage/BackgroundImage";
import { NavBarVertical } from "@/components/ui/navigation/web/navbar/NavbarVertical/NavBarVertical";
import { OverlayNav } from "@/components/ui/navigation/web/overlay/OverlayNav/OverlayNav";
import { OverlayRoot } from "@/components/ui/navigation/web/overlay/OverlayRoot/OverlayRoot";
import { OverlayTrigger } from "@/components/ui/navigation/web/overlay/OverlayTrigger/OverlayTrigger";
import React from "react";

export default function MainPage() {
    return (
        <div
            suppressHydrationWarning
            className="absolute left-0 top-0 right-0 bottom-0 min-w-full min-h-screen h-[200vw] overflow-hidden"
        >
            <BackgroundImage
                imageLightThemeSrc="/images/SKY-lightmode.jpg"
                imageDarkThemeSrc="/images/SKY-darkmode.jpg"
            />
            <OverlayTrigger>
                <OverlayRoot>
                    <OverlayNav>
                        <NavBarVertical />
                    </OverlayNav>
                </OverlayRoot>
            </OverlayTrigger>
        </div>
    );
}
