"use client";

import { useViewport } from "@/components/hooks/useViewport/useViewport";
import { BackgroundImage } from "@/components/ui/background/BackgroundImage/BackgroundImage";
import { OverylayNav } from "@/components/ui/navigation/web/overlay/OverlayNav/OverylayNav";
import { OverlayRoot } from "@/components/ui/navigation/web/overlay/OverlayRoot/OverlayRoot";
import { ThemeToggleDropdown } from "@/components/ui/theme/dropdown/ThemeToggleDropdown/ThemeToggleDropdown";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function MainPage() {
    const imageLightMode = "/images/SKY-lightmode.jpg";
    const imageDarkMode = "/images/SKY-darkmode.jpg";

    return (
        // If you set the parent div to your preferred screen size, Image fill will fine
        <div className="absolute left-0 top-0 right-0 bottom-0 min-w-full min-h-screen h-[200vw] overflow-hidden">
            <BackgroundImage />
            {/* Need a trigger context of component */}
            <OverlayRoot>
                <OverylayNav>
                    <ThemeToggleDropdown />
                </OverylayNav>
            </OverlayRoot>
        </div>
    );
}
