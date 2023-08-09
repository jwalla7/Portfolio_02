import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { OverlayNavProps } from "./overlayNavProps";
import { overlayNavStyles } from "./overlayNavStyles";

export const OverlayNav = forwardRef<HTMLMenuElement, OverlayNavProps>(
    ({ children, overlayRefProps }, ref) => {
        const showDisplay = () => {
            if (overlayRefProps?.current?.classList.contains("hidden")) {
                overlayRefProps?.current?.classList.remove("hidden");
            }
            if (overlayRefProps) {
                overlayRefProps?.current?.classList.add("visible");
            }
        };
        const hideDisplay = () => {
            if (overlayRefProps?.current?.classList.contains("visible")) {
                overlayRefProps?.current?.classList.remove("visible");
            }
            if (overlayRefProps) {
                overlayRefProps?.current?.classList.add("hidden");
            }
        };

        return (
            <nav
                className={cn(overlayNavStyles({ background: "none" }))}
                onMouseEnter={showDisplay}
                onMouseLeave={hideDisplay}
                ref={ref}
            >
                {children}
            </nav>
        );
    }
);

OverlayNav.displayName = "OverlayNav";
