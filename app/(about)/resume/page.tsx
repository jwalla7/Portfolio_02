"use client";

import { BackgroundImage } from "@/components/ui/background/BackgroundImage/BackgroundImage";
import { NavBarVertical } from "@/components/ui/navigation/web/navbar/NavbarVertical/NavBarVertical";
import { OverlayTrigger } from "@/components/ui/navigation/web/overlay/OverlayTrigger/OverlayTrigger";
import { robotoRegular } from "@/design/fontDefaults";
import { cn } from "@/lib/utils";

export default function ResumePage() {
    return (
        <div
            suppressHydrationWarning
            className="absolute left-0 top-0 right-0 bottom-0 min-w-full min-h-screen overflow-hidden"
        >
            <BackgroundImage
                imageLightThemeSrc="/images/SPIRLWL-lightmode.png"
                imageDarkThemeSrc="/images/SPIRLWL-darkmode.png"
            />
            <h1
                className={cn(
                    "mt-3 text-3xl text-primary",
                    robotoRegular.className
                )}
            >
                My resume
            </h1>
            <OverlayTrigger defaultValue="open">
                <NavBarVertical />
            </OverlayTrigger>
        </div>
    );
}
