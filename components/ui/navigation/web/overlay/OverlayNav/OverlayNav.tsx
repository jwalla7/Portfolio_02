import { forwardRef } from "react";
import { OverlayNavProps } from "./overlayNavProps";
import { overlayNavStyles } from "./overlayNavStyles";
import { NavigationMenuSub } from "@radix-ui/react-navigation-menu";
import { Sidebar } from "../../navbar/Sidebar/Sidebar";
import { cn } from "@/lib/utils";

export const OverlayNav = forwardRef<HTMLDivElement, OverlayNavProps>(
    ({ children, overlayRefProps }) => {
        const showDisplay = () => {
            console.log("showDisplay: ", overlayRefProps?.current?.classList);

            if (overlayRefProps?.current?.classList.contains("hidden")) {
                overlayRefProps?.current?.classList.remove("hidden");
            }
            if (overlayRefProps?.current) {
                overlayRefProps?.current?.classList.add("visible");
            }
        };
        const hideDisplay = () => {
            console.log("hideDisplay: ", overlayRefProps?.current?.classList);
            if (overlayRefProps?.current?.classList.contains("visible")) {
                overlayRefProps?.current?.classList.remove("visible");
            }
            if (overlayRefProps?.current) {
                overlayRefProps?.current?.classList.add("hidden");
            }
        };

        return (
            <NavigationMenuSub
                className={cn(
                    overlayNavStyles({ nav: "none" }),
                    "animate-slideRightAndFade transition duration-150 ease-in"
                )}
                onMouseEnter={showDisplay}
                onMouseLeave={hideDisplay}
                ref={overlayRefProps}
            >
                <Sidebar overlayRefProps={overlayRefProps}>{children}</Sidebar>
            </NavigationMenuSub>
        );
    }
);

OverlayNav.displayName = "OverlayNav";
