import { forwardRef } from "react";
import { OverlayNavProps } from "./overlayNavProps";
import { overlayNavStyles } from "./overlayNavStyles";
import { NavigationMenuSub } from "@radix-ui/react-navigation-menu";
import clsx from "clsx";
import { NavBarVertical } from "../../navbar/NavbarVertical/NavBarVertical";

export const OverlayNav = forwardRef<HTMLDivElement, OverlayNavProps>(
    ({ children, overlayRefProps }, ref) => {
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
                className={clsx(
                    overlayNavStyles({ nav: "none" }),
                    "animate-slideRightAndFade transition duration-150 ease-in"
                )}
                onMouseEnter={showDisplay}
                onMouseLeave={hideDisplay}
            >
                <NavBarVertical overlayRefProps={overlayRefProps}>
                    {children}
                </NavBarVertical>
            </NavigationMenuSub>
        );
    }
);

OverlayNav.displayName = "OverlayNav";
