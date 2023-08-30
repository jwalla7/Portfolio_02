import { FC } from "react";
import { OverlayNavProps } from "./overlayNavProps";
import { overlayNavStyles } from "./overlayNavStyles";

export const OverlayNav: FC<OverlayNavProps> = ({
    children,
    overlayRefProps,
}) => {
    const showDisplay = () => {
        console.log("showDisplay");
        console.log(overlayRefProps?.current?.classList);
        if (overlayRefProps?.current?.classList.contains("hidden")) {
            overlayRefProps?.current?.classList.remove("hidden");
        }
        if (overlayRefProps?.current) {
            overlayRefProps?.current?.classList.add("visible");
        }
    };
    const hideDisplay = () => {
        console.log("hideDisplay");
        console.log(overlayRefProps?.current?.classList);
        if (overlayRefProps?.current?.classList.contains("visible")) {
            overlayRefProps?.current?.classList.remove("visible");
        }
        if (overlayRefProps?.current) {
            overlayRefProps?.current?.classList.add("animate-slideLeftAndFade");
            overlayRefProps?.current?.classList.add("hidden");
        }
    };

    return (
        <nav
            className={overlayNavStyles({ nav: "none" })}
            onMouseEnter={showDisplay}
            onMouseLeave={hideDisplay}
            ref={overlayRefProps}
        >
            {children}
        </nav>
    );
};
