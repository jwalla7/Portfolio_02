"use client";

import { useViewport } from "@/components/hooks/useViewport/useViewport";
import { OverylayNav } from "@/components/ui/navigation/web/overlay/OverlayNav/OverylayNav";
import { OverlayRoot } from "@/components/ui/navigation/web/overlay/OverlayRoot/OverlayRoot";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function MainPage() {
    const imageLightMode = "/images/SKY-lightmode.jpg";
    const imageDarkMode = "/images/SKY-darkmode.jpg";
    const { theme, setTheme } = useTheme();
    const viewport = useViewport();
    console.log(`viewport: `, viewport.height, viewport.width);

    return (
        <div className="absolute left-0 top-0 right-0 bottom-0 min-w-full min-h-screen">
            {theme === "light" ? (
                <Image
                    alt="background image"
                    width={1920}
                    height={2464}
                    src={imageLightMode}
                    quality={100}
                    style={{ position: "absolute", zIndex: -1 }}
                />
            ) : (
                <Image
                    alt="background image"
                    width={1920}
                    height={2464}
                    src={imageDarkMode}
                    quality={100}
                    style={{ position: "absolute", zIndex: -1 }}
                />
            )}
            {/* Need a trigger context of component */}
            <OverlayRoot>
                <OverylayNav>
                    <p className="text-white">hello</p>
                </OverylayNav>
            </OverlayRoot>
        </div>
    );
}
