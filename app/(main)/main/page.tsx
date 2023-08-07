"use client";

// import { useViewport } from "@/components/hooks/useViewport/useViewport";
import { BackgroundImage } from "@/components/ui/background/BackgroundImage/BackgroundImage";
import { OverylayNav } from "@/components/ui/navigation/web/overlay/OverlayNav/OverylayNav";
import { OverlayRoot } from "@/components/ui/navigation/web/overlay/OverlayRoot/OverlayRoot";
import { OverlayTrigger } from "@/components/ui/navigation/web/overlay/OverlayTrigger/OverlayTrigger";
import { ThemeToggleDropdown } from "@/components/ui/theme/dropdown/ThemeToggleDropdown/ThemeToggleDropdown";

export default function MainPage() {
    // const _viewport = useViewport();
    // console.log(_viewport);
    return (
        <div
            suppressHydrationWarning
            className="absolute left-0 top-0 right-0 bottom-0 min-w-full min-h-screen h-[200vw] overflow-hidden"
        >
            <BackgroundImage
                imageLightThemeSrc="/images/SKY-lightmode.jpg"
                imageDarkThemeSrc="/images/SKY-darkmode.jpg"
            />
            {/* Need to modify trigger */}
            <OverlayTrigger>
                <OverlayRoot>
                    <OverylayNav>
                        <ThemeToggleDropdown />
                    </OverylayNav>
                </OverlayRoot>
            </OverlayTrigger>
        </div>
    );
}
