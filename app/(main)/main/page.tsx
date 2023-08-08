"use client";

import { BackgroundImage } from "@/components/ui/background/BackgroundImage/BackgroundImage";
import {
    OverlayNav,
    OverylayNav,
} from "@/components/ui/navigation/web/overlay/OverlayNav/OverlayNav";
import { OverlayRoot } from "@/components/ui/navigation/web/overlay/OverlayRoot/OverlayRoot";
import { OverlayTrigger } from "@/components/ui/navigation/web/overlay/OverlayTrigger/OverlayTrigger";
import ThemeMenuDropdown from "@/components/ui/theme/dropdown/ThemeMenuDropdown/ThemeMenuDropdown";
import { ThemeToggle } from "@/components/ui/theme/toggle/ThemeToggle";

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
                        <ThemeMenuDropdown>
                            <ThemeToggle />
                        </ThemeMenuDropdown>
                    </OverlayNav>
                </OverlayRoot>
            </OverlayTrigger>
        </div>
    );
}
